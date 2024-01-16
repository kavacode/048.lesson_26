import React, { useState } from 'react';
import './Modal.css';

const CongratulationModal = ({ showModal, closeModal, addNewCard }) => {
  const [newCard, setNewCard] = useState({
    title: '',
    message: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCard.title && newCard.message && newCard.image) {
      addNewCard(newCard);
      setNewCard({
        title: '',
        message: '',
        image: '',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard({
      ...newCard,
      [name]: value,
    });
  };
  const handleCloseModal = () => {
	closeModal();
 };

  return (
    <div>
      {showModal && (
        <div className="modal">
			
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={newCard.title}
                onChange={handleChange}
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={newCard.message}
                onChange={handleChange}
              />
            </label>
            <label>
              Image URL:
              <input
                type="text"
                name="image"
                value={newCard.image}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Create Card</button>
				<button onClick={handleCloseModal} сlassName="close-button">Close</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CongratulationModal;
