import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  tittle: string;
  onClose: React.MouseEventHandler;
}
const Modal: React.FC<Props> = ({ show, tittle, children, onClose }) => {
  return (
    <>
      <div
        className="modal-backdrop show"
        style={{ display: show ? 'block' : 'none' }}
      />
      <div
        className="modal show"
        style={{ display: show ? 'block' : 'none' }}
        onClick={onClose}
      >
        <div
          className="modal-dialog"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-tittle fs-5">{tittle}</h1>
              <button onClick={onClose} type="button" className="btn-close bg-danger opacity-100" style={{color: 'red'}} aria-label="Close"></button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
