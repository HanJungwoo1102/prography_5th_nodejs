import React from 'react';

export default class Editor extends React.Component {
    render() {
        return (
            <div className="editor">
                <h1>Editor</h1>
                <div>
                    <button>추가</button>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
                <div>
                    <label>제목</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>내용</label>
                    <textarea></textarea>
                </div>
            </div>
        );
    }
}
