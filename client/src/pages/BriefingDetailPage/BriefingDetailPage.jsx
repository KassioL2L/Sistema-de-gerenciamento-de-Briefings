import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext'; 
import BriefingDetail from '../../components/BriefingDetail/BriefingDetail';
import './BriefingDetailPage.css';

function BriefingDetailPage() {
    const { user } = useAuth(); 
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (!user) {
            setMessage('Usuário não está logado. Redirecionando para login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000); 
        }
    }, [user, navigate]); 

    return (
        <div className="briefing-detail-container">
            {!user && <h1>{message}</h1>} 
            {user && <BriefingDetail/>} 
        </div>
    );
}

export default BriefingDetailPage;
