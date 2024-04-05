import React from 'react';
import {  Modal,Button } from 'antd';
import "./index.scss"
const ModalComponent = ({modalOpen,setModalOpen,sendStatus,setStatus,status}) => {
  return (
    <>      
      <Modal
        title="Crate a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
            <Button
            key="submit"
            type="primary" 
               onClick={sendStatus}
            disabled={status.length > 0 ? false : true}
            >
              Post
            </Button>,
        ]}
      >
        <input className='modal-input' placeholder='What do you want to talk about?'
         onChange={(event) => setStatus(event.target.value)} 
        value={status}
        />
      </Modal>
    </>
  );
};
export default ModalComponent;