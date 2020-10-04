import React from 'react';
import { Modal, Button, Form, Input, Select, DatePicker } from 'antd';
import API from './Api';

// ================ 리스트 추가기능 ======================================================

export default function Todo_list_add({ visible, setVisible, todolists, setTodolists }) {
  //페이지 리로딩 상태변화
  const [pageloading, setPageloading] = React.useState(false);
  const [pageloadingerror, setPageloadingError] = React.useState(null);


  //모달 속성
  const showModal = () => { setVisible(true); };
  const [loading, setLoading] = React.useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false) }, 1200);
    setTimeout(() => { setVisible(false) }, 1200);
  };
  const handleCancel = e => { setVisible(false); };

  //폼 속성
  const [form] = Form.useForm();
  const layout = { labelCol: { span: 5, }, wrapperCol: { span: 15, } };

  //submit 이후 DB등록, 페이지 재요청
  const onFinish = e => {
    e.end_date = e.end_date.format("YYYY-MM-DD")  //폼에서 받은 날짜 포맷 다시 정리
    console.log(e);
    API.post("todo/", e)
      .then(response => {
        const fetchTodolists = async () => {
          try {// 요청이 시작 할 때에는 error 와 Todolist 를 초기화하고
            setPageloadingError(null);
            setTodolists(null);
            setPageloading(true); // loading 상태를 true 로 바꿉니다.

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
        // form.resetFields();

        if (pageloading) return <div>로딩중..</div>;
        if (pageloadingerror) return <div> 목록 불러오기 실패</div>;
        if (!todolists) return null;
      }

        //setVisible(false);  //모달창 닫기
      )
  }


  return (<>

    <Modal visible={visible} title="등록" footer={null}>
      <Form {...layout} onFinish={onFinish}>
        <Form.Item name="name" label="명칭">
          <Input />
        </Form.Item>
        <Form.Item name="status" label="상태"><Select>
          <Select.Option value="할일">할일</Select.Option>
          <Select.Option value="진행중">진행중</Select.Option>
          <Select.Option value="종료">종료</Select.Option>
        </Select>
        </Form.Item>
        <Form.Item name="end_date" label="종료일">
          <DatePicker />
        </Form.Item>
        <Form.Item name="group" label="그룹"><Select>
          <Select.Option value="1">회사</Select.Option>
          <Select.Option value="2">가족</Select.Option>
          <Select.Option value="3">친구</Select.Option>
          <Select.Option value="4">동호회</Select.Option>
          <Select.Option value="5">개인</Select.Option>
          <Select.Option value="6">경조사</Select.Option>
        </Select>
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loading}>
          등록
            </Button>
        {/* onClick={handleOk} */}
        <Button key="back" onClick={handleCancel}>취소</Button>
      </Form>
    </Modal>
  </>
  );
}
