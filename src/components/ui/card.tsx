import React, { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  modalContent: string;
}

const Card: React.FC<CardProps> = ({ title, description, modalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button
        className="card"
        onClick={toggleModal}
        aria-label={`Description of the ${title} project. Click to open modal`}
        tabIndex={0}
        onKeyUp={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleModal();
          }
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close"
              onClick={toggleModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
