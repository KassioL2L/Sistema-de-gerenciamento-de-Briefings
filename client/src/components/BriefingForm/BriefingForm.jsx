import  { useState } from 'react';
import { updateBriefingById, createBriefing } from '../../services/api';

/* eslint-disable react/prop-types */
const BriefingForm = ({ id }) => { 
    const [clientName, setclientName] = useState('');
    const [description, setdescription] = useState('');
    const [dateTime] = useState(new Date().toISOString()); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const briefingData = {
            id, 
            clientName,
            description,
            dateTime,
        };

        try {
            // Check if briefingid exists, if so, update the briefing
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setclientName(e.target.value)}
                    placeholder="Nome do Cliente"
                />
                <textarea
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                    placeholder="Descrição"
                />
                <p>Data/Hora: {new Date(dateTime).toLocaleString()}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};



export default BriefingForm;
