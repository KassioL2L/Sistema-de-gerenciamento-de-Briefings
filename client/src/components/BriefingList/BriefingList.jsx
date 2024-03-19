import { useEffect, useState } from 'react';
import { getAllBriefings, deleteBriefingById, updateBriefingById } from '../../services/api';
import Modal from '../modal/modal';
import './BriefingList.css';

const BriefingList = () => {
    const [briefings, setBriefings] = useState([]);
    const [selectedBriefing, setSelectedBriefing] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [editedClientName, setEditedClientName] = useState('');
    const [editedDescription, setEditedDescription] = useState('');

    useEffect(() => {
        const fetchBriefings = async () => {
            try {
                const data = await getAllBriefings();
                setBriefings(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBriefings();
    }, []);

    const handleDeleteBriefing = async (briefingId) => {
        try {
            await deleteBriefingById(briefingId);
            setBriefings(briefings.filter(briefing => briefing._id !== briefingId));
        } catch (error) {
            console.error(error);
        }
    };

    const handleEditBriefing = async () => {
        try {
            const updatedBriefing = {
                ...selectedBriefing,
                clientName: editedClientName,
                description: editedDescription
            };
            await updateBriefingById(selectedBriefing._id, updatedBriefing);
            setBriefings(briefings.map(b => (b._id === selectedBriefing._id ? updatedBriefing : b)));
            toggleModal();
        } catch (error) {
            console.error(error);
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleOpenModal = (briefing) => {
        setSelectedBriefing(briefing);
        setEditedClientName(briefing.clientName);
        setEditedDescription(briefing.description);
        toggleModal();
    };

    return (
        <div className="briefingList-container">
            {briefings.map(briefing => (
                <div className="briefing-box" key={briefing._id}>
                    <h3>{briefing.clientName}</h3>
                    <p>{briefing.description}</p>
                    <p>{briefing.dateTime}</p>
                    <div className="options">
                        <button className="button-edit" onClick={() => handleOpenModal(briefing)}>Editar</button>
                        <button className="button-delete" onClick={() => handleDeleteBriefing(briefing._id)}>Excluir</button>
                    </div>
                </div>
            ))}
            <Modal isOpen={showModal} onClose={toggleModal}>
                <div className="modal-content">
                    <h2>Editando Briefing</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleEditBriefing();
                    }}>
                        <label>
                            <input
                                type="text"
                                placeholder="Nome do Cliente"
                                value={editedClientName}
                                onChange={(e) => setEditedClientName(e.target.value)}
                            />
                        </label>
                        <label>
                            <textarea
                                placeholder="Descrição"
                                value={editedDescription}
                                onChange={(e) => setEditedDescription(e.target.value)}
                            />
                        </label>
                        <button type="submit">Salvar Alterações</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default BriefingList;
