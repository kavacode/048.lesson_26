import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import CongratulationModal from './CongratulationModal';
import './Main.css';

const Main = () => {
	const [cards, setCards] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [randomCard, setRandomCard] = useState(null);
 
	useEffect(() => {
	  const fetchData = async () => {
		 try {
			const response = await axios.get('https://65a6dda774cf4207b4f0f64f.mockapi.io/api/v1/card');
			setCards(response.data);
		 } catch (error) {
			console.error(error)
		 }
	  };
 
	  fetchData();
	}, []);
 
	const generateRandomCard = () => {
	  const randomIndex = Math.floor(Math.random() * cards.length);
	  const selectedCard = cards[randomIndex];
	  setRandomCard(selectedCard);
	};
 
	const openModal = () => {
	  setShowModal(true);
	};
 
	const closeModal = () => {
	  setShowModal(false);
	};
 
	const addNewCard = async (newCard) => {
	  try {
		 const response = await axios.post('https://65a6dda774cf4207b4f0f64f.mockapi.io/api/v1/card', newCard);
		 setCards([...cards, response.data]);
		 closeModal();
	  } catch (error) {
		console.error(error)
	  }
	};
 
	return (
	  <main>
		 <button onClick={generateRandomCard}>Generate Congratulation</button>
		 <button onClick={openModal}>Create New Congratulation</button>
		 {randomCard && <Card card={randomCard} />}
 
		 <CongratulationModal
			showModal={showModal}
			closeModal={closeModal}
			addNewCard={addNewCard}
		 />
 
	  </main>
	);
 };
 
 export default Main;
