import React from 'react';
import {alertType} from '../../types';

interface Props extends React.PropsWithChildren {
  type: alertType;
  onDismiss?: VoidFunction
}
const Alert: React.FC<Props> = ({type, onDismiss, children}) => {
  const btnType = `alert alert-${type} m-auto mt-2 w-50 d-flex justify-content-between`;

  return (
    <div className={btnType}>
      <div>
        {children}
      </div>

      {onDismiss ? (<button onClick={onDismiss} type="button" className="btn-close" aria-label="Close"></button>) : null}
    </div>
  );
};

export default Alert;