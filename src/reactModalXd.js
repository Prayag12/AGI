import exp from './imagesTools/experience.png'
import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';



class MyVerticallyCenteredModaln extends Component {

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
          Adobe Xd
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <FormFunc /> */}
        <p style={{paddingLeft: '30px', paddingRight: '30px', fontSize:'18px', textAlign:'justify'}}>Adobe XD is a vector-based user interface design platform developed and released by Adobe Inc. for web and mobile applications. It's available for macOS and Windows, but there are also iOS and Android versions to help you preview the results of your work on the go.</p>
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
      <a onClick={() => setModalShow(true)} variant="primary"><img className='icon' src={exp}/></a>
      <MyVerticallyCenteredModalFunction
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default MyVerticallyCenteredModaln;