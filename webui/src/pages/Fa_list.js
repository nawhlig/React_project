import React from 'react';
import '../css/pages_subject.css';
import styles from '../css/Fa_list.module.css';
import { Button, List, Avatar } from 'antd';
import API from 'Api';


export default function Page_fa_list() {
    return (
        <>

            <div id="pagetop">
                <div id="subject">즐겨찾기 목록</div>
                <div id="listadd"><Button> + 추가</Button></div>
            </div>
            <div id="pagebottom"><Falist /></div>

        </>
    )
}

function Falist() {
    const [falists, setFalists] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchFalists = async () => {
            try {// 요청이 시작 할 때에는 error 와 Falist 를 초기화하고
                setError(null);
                setFalists(null);
                setLoading(true); // loading 상태를 true 로 바꿉니다.
                // window.alert("데이터 로딩완료");
                const response = await API.get("/favourite/");
                setFalists(response.data); // response.data 안에 Array로 데이터가 있음.
            }
            catch (e) { setError(e); }
            setLoading(false);
        }
        console.log(falists)
        fetchFalists();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div> API 주소에서 불러오기 실패</div>;
    if (!falists) return null;


    // if (loading) return <div>로딩중..</div>;

    return (<>

        < ul >
            {falists.map(Falist => (
                <li key={Falist.seq}>
                    {Falist.name}
                    {Falist.url}
                    {Falist.memo}
                </li>))}
        </ul >

    </>);
}

//     return (
//         <div>
//             <List
//                 itemLayout="horizontal"
//                 dataSource={Falist}
//                 renderItem={item => (
//                     <List.Item>
//                         <List.Item.Meta
//                             title={<a href="https://ant.design">{item.name}</a>}
//                             description={<>
//                                 <span>{item.name}</span>
//                             </>
//                             }
//                         />
//                     </List.Item>
//                 )}
//             />
//         </div>
//     )
// }