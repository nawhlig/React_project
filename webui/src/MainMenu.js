import React from 'react';
import { Menu } from 'antd';
import { CalendarOutlined , LinkOutlined } from '@ant-design/icons';
import { Link} from 'react-router-dom'
const { SubMenu } = Menu;

export default function MainMenu () {
    const [state, setState] = React.useState({current: '1'});
    const [state2, setState2] = React.useState({current2: 'sub1'});
    const handleClick = e => {console.log('click', e); setState({ current: e.key })};
    
    return (<>
        <div>
        <Menu onClick={handleClick}
              style={{ width: 256 }}
              SelectedKeys={[state.current]}
              OpenKeys={[state2.current2]}
              mode="inline"
        >
            <SubMenu key="sub1" icon={<LinkOutlined />} title="즐겨찾기">
                        <Menu.Item key="1">
                        <Link to="/fa/group">즐겨찾기 그룹</Link></Menu.Item>
                        <Menu.Item key="2">
                        <Link to="/fa/list">즐겨찾기 목록</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<CalendarOutlined />} title="할일">
                        <Menu.Item key="3">
                        <Link to="/todo/group">할일 그룹</Link></Menu.Item>
                        <Menu.Item key="4">
                        <Link to="/todo/list">할일 목록</Link></Menu.Item>
            </SubMenu>
        </Menu>
        </div>
        </>)
}