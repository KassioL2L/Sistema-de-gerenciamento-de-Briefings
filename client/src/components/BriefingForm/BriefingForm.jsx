import { useState } from 'react';
import { updateBriefingById, createBriefing } from '../../services/api';
import './BriefingForm.css';

const BriefingForm = ({ id, onCloseModal }) => {
    const [clientName, setClientName] = useState('');
    const [description, setDescription] = useState('');
    const [dateTime] = useState(new Date().toISOString());

    const generateId = () => Math.floor(Math.random() * 1000000);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newId = id || generateId();
        const briefingData = { id: newId, clientName, description, dateTime };
        try {
            await createBriefing(briefingData);
            onCloseModal();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Nome do Cliente" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
                <p>Data/Hora: {new Date(dateTime).toLocaleString()}</p>
                <button type="submit">Criar</button>
            </form>
        </div>
    );
};

export default BriefingForm;
