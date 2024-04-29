import React from 'react';
import Header from '../../components/Header/Header';
import BriefingList from '../../components/BriefingList/BriefingList';
import './Home.css';

const Home = () => {
    return (
        <section className="home-container">
            <Header />
            <BriefingList />
        </section>
    );
}

export default Home;