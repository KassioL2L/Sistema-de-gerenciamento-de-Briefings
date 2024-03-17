
import { useEffect, useState } from 'react';
import { getAllBriefings } from '../../services/api';
import './BriefingList.css';

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
        <div  className="briefingList-container">
            {briefings.map(briefing => (
                <div  className="briefing-box" key={briefing.id}>
                    <h3>{briefing.clientName}</h3>
                    <p>{briefing.description}</p>
                    <p>{briefing.dateTime}</p>
                </div>
            ))}
        </div>
    );
};

export default BriefingList;
