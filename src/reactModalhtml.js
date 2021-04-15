import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

import Ht from './imagesTools/html-5.png'

class MyVerticallyCenteredModald extends Component {

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
        <Modal.Title className='modalHeader' id="contained-modal-title-vcenter" style={{color: 'red'}}>
          Html 5
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <FormFunc /> */}
        <p style={{paddingLeft: '30px', paddingRight: '30px', fontSize:'18px', textAlign:'justify'}}>HTML, or HyperText Markup Language, is the basic markup language for documents that are intended to be viewed in a web browser. Technologies such as Cascading Style Sheets and scripting languages like JavaScript can help.</p>
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
      <a onClick={() => setModalShow(true)} variant="primary"><img className='icon' src={Ht}/></a>
      <MyVerticallyCenteredModalFunction
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default MyVerticallyCenteredModald;