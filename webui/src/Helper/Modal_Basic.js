import React from 'react';
import { Modal } from 'antd';
import FormTodolist from '../Helper/FormTodolist';


export default function Modal_Basic({visible, setVisible}) {

  const showModal = () => {setVisible(true);};
  const handleok = e => {console.log('ok', e); setVisible(false)};
  const handleCancel = e => {console.log('cancel',e); setVisible(false);};

    return (
      <>
        <Modal
          title="등록"
          visible={visible}
          onOk={handleok}
          onCancel={handleCancel}
        >
          <FormTodolist/>
        </Modal>
      </>
    );}

// import { Modal, Button } from 'antd';

// class App extends React.Component {
//   state = { visible: false };
//   showModal = () => {this.setState({visible: true,});};
//   handleOk = e => {console.log(e);this.setState({visible: false,});};
//   handleCancel = e => {console.log(e);this.setState({visible: false,});};

//   render() {
//     return (
//       <>
//         <Button type="primary" onClick={this.showModal}> Open Modal </Button>
//         <Modal   title="Basic Modal"
//                  visible={this.state.visible}
//                  onOk={this.handleOk}
//                  onCancel={this.handleCancel}
//         >
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//         </Modal>
//       </>
//     );
//   }
// }
