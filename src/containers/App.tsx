import Modal from '../components/Modal/Modal';
import {useState} from 'react';
import Alert from '../components/Alert/Alert';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className={'p-2'}>
      <button className="btn btn-primary me-2" onClick={() => setShowModal(true)}>
        Открыть Modal
      </button>
      <button className="btn btn-primary" onClick={() => setShowAlert(prevState => !prevState)}>
        {showAlert ? 'Закрыть': 'Открыть '} Alert'ы
      </button>
      {showModal ?
        (<Modal
          show={showModal}
          tittle={'Some kinda modal title'}
          onClose={() => setShowModal(false)}>
          <p className={'ps-3'}>This is modal content</p>
        </Modal>) : null}
      {showAlert ?
        (<><Alert type={'warning'} onDismiss={() => setShowAlert(false)}>
          This is <b>success</b> alert
        </Alert>
          <Alert type="success">This is a success alert</Alert></>) : null}
    </div>
  );
};


export default App;
