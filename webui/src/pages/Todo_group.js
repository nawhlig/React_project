import React from 'react';
import '../css/pages_subject.css';
import styles from '../css/Todo_group.module.css';
import { Button } from 'antd';



export default function Page_todo_group() {
    return (
        <>

            <div id="pagetop">
                <div id="subject">할 일 그룹</div>
                <div id="listadd"><Button> + 추가</Button></div>
            </div>
            <div id="pagebottom">내용</div>


        </>
    )
}