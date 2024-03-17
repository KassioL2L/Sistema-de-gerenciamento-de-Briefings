import { useState } from 'react';
import { updateBriefingById, createBriefing } from '../../services/api';
import './BriefingForm.css';

/* eslint-disable react/prop-types */
const BriefingForm = ({ id }) => {
    const [clientName, setClientName] = useState('');
    const [description, setDescription] = useState('');
    const [dateTime] = useState(new Date().toISOString());

    const generateId = () => {
        return Math.floor(Math.random() * 1000000); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Gere um novo ID se o ID não estiver definido
        const newId = id || generateId();

        const briefingData = {
            id: newId,
            clientName,
            description,
            dateTime,
        };

        try {
            // Check if briefing id exists, if so, update the briefing
            if (id) {
                await updateBriefingById(id, briefingData);
            } else {
                await createBriefing(briefingData);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Nome do Cliente"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descrição"
                />
                <p>Data/Hora: {new Date(dateTime).toLocaleString()}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BriefingForm;
