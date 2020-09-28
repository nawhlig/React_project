import React from 'react';
import '../css/pages_subject.css';
import styles from '../css/Fa_group.module.css';
import { Button, List} from 'antd';
import { SearchOutlined, RestOutlined } from '@ant-design/icons';
import API from '../Helper/Api';


export default function Page_fa_group() {

    const [fagroups, setFagroups] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchFagroups = async () => {
            try {// 요청이 시작 할 때에는 error 와 Fagroup 를 초기화하고
                setError(null);
                setFagroups(null);
                setLoading(true); // loading 상태를 true 로 바꿉니다.
                // window.alert("목록 불러오는중");
                const response = await API.get("/favouritegroup/");
                setFagroups(response.data); // response.data 안에 Array로 데이터가 있음.
            }
            catch (e) { setError(e); }
            setLoading(false);
        }
        console.log(fagroups)
        fetchFagroups();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div> API 주소에서 불러오기 실패</div>;
    if (!fagroups) return null;


    return (
        <>

            <div id="pagetop">
                <div id="subject">즐겨찾기 그룹</div>
                <div id="listadd"><Button> + 추가</Button></div>
            </div>
            <div id="pagebottom">{/* <Fagroup /> */}

                <List
                    itemLayout="horizontal"
                    dataSource={fagroups}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<span>{item.name}</span>}
                                description={<>
                                <span>{item.reg_date}</span>
                                <Button style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                                </>}
                            />
                        </List.Item>
                    )}
                />

            </div>

        </>
    )
}

