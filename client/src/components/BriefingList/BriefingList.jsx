
import { useEffect, useState } from 'react';
import { getAllBriefings } from '../../services/api';

const BriefingList = () => {
    const [briefings, setBriefings] = useState([]);

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

    return (
        <div>
            {briefings.map(briefing => (
                <div key={briefing.id}>
                    <h3>{briefing.clientName}</h3>
                    <p>{briefing.description}</p>
                    <p>{briefing.dateTime}</p>
                </div>
            ))}
        </div>
    );
};

export default BriefingList;
