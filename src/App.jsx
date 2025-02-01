import React, { useState } from 'react';
import Registration from './components/Registration';
import OrganisationSetup from './components/OrganisationSetup';
import ChatbotIntegration from './components/ChatbotIntegration';
import IntegrationSuccess from './components/IntegrationSuccess';
import IntegrationError from './components/IntegrationError';
import Login from './components/Login';

const App = () => {
    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    return (
        <div className="app">
            {step === 0 && <Registration onNext={nextStep} />}
            {step === 1 && <OrganisationSetup onNext={nextStep} />}
            {step === 2 && <ChatbotIntegration />}
            {step === 3 && <Login />}
        </div>
    );
};

export default App;