
import React from 'react';
import '../css/pages_subject.css';
import styles from '../css/Todo_list.module.css';
import { Button, List } from 'antd';
import { SearchOutlined, RestOutlined } from '@ant-design/icons';
import API from '../Helper/Api';
import Todo_list_add from '../Helper/Todo_list_add';
// import Todo_list_delete from '../Helper/Todo_list_delete';

export default function Page_todo_list() {


    const [todolists, setTodolists] = React.useState({pending: [], inprogress: [], end: []});
    
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const [visible, setVisible] = React.useState(false);

    

    React.useEffect(() => {
        const fetchTodolists = async () => {
            try {// 요청이 시작 할 때에는 error 와 Todolist 를 초기화하고
                setError(null);
                setTodolists(null);
                setLoading(true); // loading 상태를 true 로 바꿉니다.
                // window.alert("목록 불러오는중");
                const response = await API.get("todo/?status=할일");
                await setTodolists(prev => ({ ...prev, pending: response.data }));

                const response2 = await API.get("todo/?status=진행중");
                await setTodolists(prev => ({ ...prev, inprogress: response2.data }));

                const response3 = await API.get("todo/?status=종료");
                await setTodolists(prev => ({ ...prev, end: response3.data }));
            }
            catch (e) { setError(e); }
            setLoading(false);
        }
        fetchTodolists();
    }, []);


    const deleteTodo = (seq) => {

        const fetchTodolists = async () => {
            try {// 요청이 시작 할 때에는 error 와 Todolist 를 초기화하고
            
            await API.delete("todo/" + seq + "/");
            //삭제    
            const response = await API.get("todo/?status=할일");
            await setTodolists(prev => ({ ...prev, pending: response.data }));

            const response2 = await API.get("todo/?status=진행중");
            await setTodolists(prev => ({ ...prev, inprogress: response2.data }));

            const response3 = await API.get("todo/?status=종료");
            await setTodolists(prev => ({ ...prev, end: response3.data }));
            
            }              

            catch (e) {  }
        }

        fetchTodolists();
          
      }




    if (loading) return <div>로딩중..</div>;
    if (error) return <div> 목록 불러오기 실패</div>;
    if (!todolists) return null;

    return (
        <>

            <div id="pagetop">
                <div id="subject">할 일 목록</div>
                <div id="listadd"><Button onClick={() => { setVisible(true) }}> + 추가</Button></div>
            </div>
            <div id="pagebottom">
                <List
                    header={<div>할일</div>}
                    style={{ width: "33%", float: "left", paddingLeft: "10px", paddingRight: "26px" }}
                    itemLayout="horizontal"
                    dataSource={todolists.pending}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta title={<span>{item.name}</span>}
                                description={<span>{item.end_date}</span>}
                            />
                            <Button
                                style={{ float: "right" }} shape="circle" icon={<RestOutlined />}
                                onMouseEnter={() => { console.log('선택된 리스트번호:', item.seq) }}
                                onClick={() => { console.log('삭제된 리스트번호:', item.seq); deleteTodo(item.seq) }}
                            />
                        </List.Item>
                    )}
                />

                <List
                    header={<div>진행중</div>}
                    style={{ width: "33%", float: "left", paddingLeft: "18px", paddingRight: "18px" }}
                    itemLayout="horizontal"
                    dataSource={todolists.inprogress}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta title={<span>{item.name}</span>}
                                description={<span>{item.end_date}</span>}
                            />
                            <Button
                                style={{ float: "right" }} shape="circle" icon={<RestOutlined />}
                                onMouseEnter={() => { console.log('선택된 리스트번호:', item.seq) }}
                                onClick={() => { console.log('삭제된 리스트번호:', item.seq); deleteTodo(item.seq) }}
                            />
                        </List.Item>
                    )}
                />

                <List
                    header={<div>종료</div>}
                    style={{ width: "33%", float: "left", paddingLeft: "26px", paddingRight: "10px" }}
                    itemLayout="horizontal"
                    dataSource={todolists.end}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta title={<span>{item.name}</span>}
                                description={<span>{item.end_date}</span>}
                            />
                            <Button
                                style={{ float: "right" }} shape="circle" icon={<RestOutlined />}
                                onMouseEnter={() => { console.log('선택된 리스트번호:', item.seq) }}
                                onClick={() => { console.log('삭제된 리스트번호:', item.seq); deleteTodo(item.seq) }}
                            />
                        </List.Item>
                    )}
                />
                <Todo_list_add visible={visible}
                    setVisible={setVisible}
                    todolists={todolists}
                    setTodolists={setTodolists}
                />

            </div>

        </>
    )
}


