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
    maxWidth: '80%', 
    maxHeight: '80%', 
    overflow: 'auto', 
    padding: '20px', 
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
      <button className='custom-button' onClick={onClose}>Fechar</button>
    </Modal>
  );
};



export default CustomModal;
