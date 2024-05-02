import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import BriefingForm from '../BriefingForm/BriefingForm';
import { useAuth } from '../../contexts/authContext';  
import { useNavigate } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const { logout } = useAuth(); 
    const navigate = useNavigate(); 

    const toggleModal = () => setShowModal(!showModal);
    const handleCloseModal = () => {
        setShowModal(false);
        window.location.reload();
    };

    const handleLogout = () => {
        logout(); 
        navigate('/login'); 
    };

    return (
        <header>
            <h1>Gerenciamento de Briefing</h1>
            <button onClick={toggleModal}>Cadastrar Briefing</button>
            <button onClick={handleLogout}>Logout</button>  {/* Botão de Logout */}
            <Modal isOpen={showModal} onClose={toggleModal}>
                <BriefingForm onCloseModal={handleCloseModal} />
            </Modal>
        </header>
    );
};

export default Header;
