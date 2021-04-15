import Ae from './imagesTools/after-effects.png'
import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';



class MyVerticallyCenteredModalj extends Component {

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
        <Modal.Title className='modalHeader2' id="contained-modal-title-vcenter" style={{color: 'red'}}>
          Adobe After Effects
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <FormFunc /> */}
        <p style={{paddingLeft: '30px', paddingRight: '30px', fontSize:'18px', textAlign:'justify'}}>Adobe After Effects is a digital visual effects, motion graphics, and compositing technology created by Adobe Systems that is used in the post-production of movies, video games, and television shows. After Effects can be used for keying, tracking, compositing, and animation, among other things.</p>
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
      <a onClick={() => setModalShow(true)} variant="primary"><img className='icon' src={Ae}/></a>
      <MyVerticallyCenteredModalFunction
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default MyVerticallyCenteredModalj;