import React, { useState } from 'react';

const Modals = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <p>Modal Content Goes Here</p>
          </div>
        </div>
      )
    );
  };
  export default Modals;
