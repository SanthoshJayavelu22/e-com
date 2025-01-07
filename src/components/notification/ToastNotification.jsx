import React from 'react';
import './ToastNotification.css';

const ToastNotification = ({ message }) => {
  return (
    <div className="toast-notification">
      <p>{message}</p>
    </div>
  );
};

export default ToastNotification;
