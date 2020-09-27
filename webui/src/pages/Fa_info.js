import React from 'react';
import '../css/pages_subject.css';
// import styles from '../css/Fa_info.module.css';
import { Button } from 'antd';



export default function Page_fa_info() {
    return (
        <>

            <div id="pagetop">
                <div id="subject">즐겨찾기</div>
                <div id="listadd"><Button> + 추가</Button></div>
            </div>
            <div id="pagebottom">내용</div>
        </>
    )
}