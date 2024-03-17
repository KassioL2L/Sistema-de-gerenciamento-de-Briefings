import { useState } from 'react';
import  BriefingForm  from '../BriefingForm/BriefingForm'; 

const Header = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <header>
            <h1>Gerenciamento de Briefing</h1>
            <button onClick={toggleForm}>Cadastrar Briefing</button>
            {showForm && <BriefingForm />}
        </header>
    );
};
export default Header;
