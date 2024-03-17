import Modal from 'react-modal';
import './modal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%', // Definindo largura máxima para 80%
    maxHeight: '80%', // Definindo altura máxima para 80%
    overflow: 'auto', // Adicionando overflow para permitir rolagem se necessário
    padding: '20px', // Adicionando padding para afastar o conteúdo das bordas
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Definindo uma cor de fundo semi-transparente para o overlay
  },
 
};

Modal.setAppElement('#root');

/* eslint-disable react/prop-types */
const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Cadastrar Briefing"
    >
      {children}
      <button className='custom-button' onClick={onClose}>Fechar Modal</button>
    </Modal>
  );
};



export default CustomModal;
