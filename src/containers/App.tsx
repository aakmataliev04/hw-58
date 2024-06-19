import Modal from '../components/Modal/Modal';
import {useState} from 'react';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={'p-2'}>
      <button className="btn btn-primary me-2" onClick={() => setShowModal(true)}>
        Открыть Modal
      </button>

      {showModal ?
        (<Modal
          show={showModal}
          tittle={'Some kinda modal title'}
          onClose={() => setShowModal(false)}>
          <p className={'ps-3'}>This is modal content</p>
        </Modal>) : null}
    </div>
  );
};


export default App;
