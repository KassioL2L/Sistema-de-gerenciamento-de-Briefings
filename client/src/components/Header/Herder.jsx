import  { useState } from 'react';
import Modal from '../modal/modal'; 
import BriefingForm from '../BriefingForm/BriefingForm';
import './Herder.css';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <header>
            <h1>Gerenciamento de Briefing</h1>
            <button onClick={toggleModal}>Cadastrar Briefing</button>
            <Modal isOpen={showModal} onClose={toggleModal}>
                <BriefingForm />
            </Modal>
        </header>
    );
};

export default Header;
