import Pr from './imagesTools/premier.png'
import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';



class MyVerticallyCenteredModalm extends Component {

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
          Adobe Premier
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p style={{paddingLeft: '30px', paddingRight: '30px', fontSize:'18px', textAlign:'justify'}}>Adobe Premiere Pro is a video editing software application with a timeline that was created by Adobe Inc. and released as part of the Adobe Creative Cloud licensing program. Adobe Premiere Pro is the successor to Adobe Premiere, which was first released in 2003.</p>
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
      <a onClick={() => setModalShow(true)} variant="primary"><img className='icon' src={Pr}/></a>
      <MyVerticallyCenteredModalFunction
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default MyVerticallyCenteredModalm;