// Importações necessárias
import { useState } from 'react';
import Modal from '../modal/modal';
import BriefingForm from '../BriefingForm/BriefingForm';
import './Header.css';

// Componente funcional Header
const Header = () => {
    const [showModal, setShowModal] = useState(false);

    // Funções para manipulação do modal
    const toggleModal = () => setShowModal(!showModal);
    const handleCloseModal = () => setShowModal(false);

    // JSX para o cabeçalho
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
