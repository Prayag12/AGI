import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import './toolsused.css'

import { FcAndroidOs } from 'react-icons/fc';

class MyVerticallyCenteredModal extends Component {

  render() {
    return (
      <div>
        <ModalMaker/>
      </div>
    );
  };
}

function MyVerticallyCenteredModalFunction(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton style={{borderColor:'skyblue'}}>
        <Modal.Title className='modalHeader' id="contained-modal-title-vcenter" style={{ color: 'red'}}>
          Android
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <FormFunc /> */}
        <p style={{paddingLeft: '30px', paddingRight: '30px', fontSize:'18px', textAlign:'justify'}}>Android software development is the method of creating apps for smartphones that run the Android operating system. Using the Android software development kit, Google claims that "Android applications can be written in Kotlin, Java, and C++ languages," while other languages are also conceivable.</p>
      </Modal.Body>
      <Modal.Footer style={{borderColor:'skyblue'}}>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalMaker() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <a onClick={() => setModalShow(true)} variant="primary">
        <FcAndroidOs className='icon'/>
        </a>
      <MyVerticallyCenteredModalFunction
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default MyVerticallyCenteredModal;