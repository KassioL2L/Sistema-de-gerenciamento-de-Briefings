import { useState } from 'react';
import Modal from '../Modal/Modal';
import BriefingForm from '../BriefingForm/BriefingForm';
import './Header.css';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);
    const handleCloseModal = () => {
        setShowModal(false);
        window.location.reload(); // Atualiza a página
    };

    return (
        <header>
            <h1>Gerenciamento de Briefing</h1>
            <button onClick={toggleModal}>Cadastrar Briefing</button>
            <Modal isOpen={showModal} onClose={toggleModal}>
                <BriefingForm onCloseModal={handleCloseModal} />
            </Modal>
        </header>
    );
};

export default Header;
