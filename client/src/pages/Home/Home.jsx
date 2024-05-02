import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext'; 
import Header from '../../components/Header/Header';
import BriefingList from '../../components/BriefingList/BriefingList';
import './Home.css';

const Home = () => {
    const { user } = useAuth(); 
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (!user) {
            setMessage('Usuário não está logado. Redirecionando para login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000); // Atraso de 2 segundos antes do redirecionamento
        }
    }, [user, navigate]);

    return (
        <section className="home-container">
            {!user && <h1>{message}</h1>} 
            {user && <Header />}  
            {user && <BriefingList />}  
        </section>
    );
}

export default Home;
