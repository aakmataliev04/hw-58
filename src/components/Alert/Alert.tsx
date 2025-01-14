import React from 'react';
import {alertType} from '../../types';
import {AnimatePresence, motion} from 'framer-motion';

interface Props extends React.PropsWithChildren {
  isShown: boolean
  type: alertType;
  onDismiss?: VoidFunction
}

const Alert: React.FC<Props> = ({isShown, type, onDismiss, children}) => {
  const btnType = `alert alert-${type} m-auto mt-2 w-50 d-flex justify-content-between`;

  return (
    <AnimatePresence>
      {
        isShown && (<motion.div
          className={btnType}
          key="modal"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}>
          <div>
            {children}
          </div>

          {onDismiss ? (
            <button onClick={onDismiss} type="button" className="btn-close" aria-label="Close"></button>) : null}
        </motion.div>)
      }
    </AnimatePresence>
  );
};

export default Alert;