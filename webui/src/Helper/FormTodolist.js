import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../css/index.css';
import { Form, Input, Button, Select, DatePicker,} from 'antd';

export default function FormSizeDemo (){
//   const [componentSize, setComponentSize] = useState('default');
//   const onFormLayoutChange = ({ size }) => {setComponentSize(size);};
  // 명칭 상태(드롭박) 종료일(달력) 그룹(드롭박)

const layout = {labelCol:{span: 5,}, wrapperCol:{span: 15,}};

return (<>
    <Form {...layout} >
        <Form.Item label="명칭"><Input />
        </Form.Item>
        <Form.Item label="상태"><Select>
                                    <Select.Option value="padding">할일</Select.Option>
                                    <Select.Option value="inprogress">진행중</Select.Option>
                                    <Select.Option value="end">종료일</Select.Option>
                                </Select>
        </Form.Item>
        <Form.Item label="종료일"><DatePicker />
        </Form.Item>
        <Form.Item label="그룹"><Select>
                                    <Select.Option value="company">회사</Select.Option>
                                    <Select.Option value="family">가족</Select.Option>
                                    <Select.Option value="friend">친구</Select.Option>
                                    <Select.Option value="team">동호회</Select.Option>
                                    <Select.Option value="private">개인</Select.Option>
                                    <Select.Option value="event">경조사</Select.Option>
                                </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}> {/*offset: 가로 위치 */}
            <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
    </Form>

    </>
  );
};