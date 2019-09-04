var express = require('express');
var router = express.Router();

// lowdb and lodash-id for unique id
// 그런데 lodash-id 쓰면 id 가 순차적으로 안커지넹 shortid 써볼껄 그랬나
const low = require('lowdb');
const lodashId = require('lodash-id');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db._.mixin(lodashId);

db.defaults({schedule:[]}).write();

const schedule_db = db.get('todo');

//============================================================
// GET
router.get('/',(req,res)=>{
    // Get All Todoes
    res.send(schedule_db.value());
});
router.get('/:id',(req,res)=>{
    // Get A Todo For ID
    const _id = req.params.id;
    res.send(schedule_db.find({id:_id}).value());
})

// POST
router.post('/',(req,res)=>{
    // Create New Todo
    const _title = req.body.title;
    const _description = req.body.description;
    schedule_db.insert({title:_title,description:_description}).write();
    // 원래 insert 말고 push 를 썼었는데 lodash-id 를 사용하기 위해 insert 사용
});

// PUT
router.put('/:id',(req,res)=>{
    // Update A Todo For ID
    const _id = req.params.id;
    const _title = req.body.title;
    const _description = req.body.description;
    schedule_db.find({id:_id}).assign({title:_title,description:_description}).write();
});

// DELETE
router.delete('/:id',(req,res)=>{
    // Delete A Todo For ID
    const _id = req.params.id;
    schedule_db.remove({id:_id}).write();
});

module.exports = router;