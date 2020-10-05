import React from 'react';
import API from './Api';

// ================ 리스트 삭제기능 ======================================================
//삭제 로직 예시
  //   const deleteTodo = (seq) => {
  //     API.delete("todo/todo/" + seq)
  //     .then(res=>{

  //         return API.get("todo/allTodo")
  //                                        }).then(res=>{
  //                                                       const {data} = res;
  //                                                       setTodos(prev => data);
  //         }
  //     )
  // }
export default function Todo_list_delete({ seq, todolists, setTodolists }) {
  //페이지 리로딩 상태변화
  const [pageloading, setPageloading] = React.useState(false);
  const [pageloadingerror, setPageloadingError] = React.useState(null);
  console.log('Todo_list_delete 함수로 전달한 seq 값', seq);

  
  //휴지통 버튼 클릭 이후 DB삭제, 페이지 재요청
  const deleteTodo = () => {
    API.delete("todo/" + seq)
      .then(response => {

        const fetchTodolists = async () => {
          try {// 요청이 시작 할 때에는 error 와 Todolist 를 초기화하고
            setPageloadingError(null);
            setTodolists(null);
            setPageloading(true); // loading 상태를 true 로 바꿉니다.

            //삭제

            const response = await API.get("todo/?status=할일");
            await setTodolists(prev => ({ ...prev, pending: response.data }));

            const response2 = await API.get("todo/?status=진행중");
            await setTodolists(prev => ({ ...prev, inprogress: response2.data }));

            const response3 = await API.get("todo/?status=종료");
            await setTodolists(prev => ({ ...prev, end: response3.data }));
            // form.resetFields()
          }

          catch (e) { setPageloadingError(e); } setPageloading(false);
        }
        fetchTodolists();

        if (pageloading) return <div>로딩중..</div>;
        if (pageloadingerror) return <div> 목록 불러오기 실패</div>;
        if (!todolists) return null;
      }
      )
  }
  return (<></>);
}
