import React, { useState } from 'react';
import IntegrationSuccess from './IntegrationSuccess';
import IntegrationError from './IntegrationError';

const ChatbotIntegration = () => {
    const [integrationStatus, setIntegrationStatus] = useState(null); // null, 'success', 'error'

    const testChatbot = () => {
        // Simulate success or error for demonstration
        const isSuccess = Math.random() > 0.5; // Randomly simulate success or error
        setIntegrationStatus(isSuccess ? 'success' : 'error');
    };

    const handleExploreAdmin = () => {
        alert('Navigating to Admin Panel...');
    };

    const handleStartChat = () => {
        alert('Starting chat with the chatbot...');
    };

    return (
        <div className="chatbot-integration">
            <h2>Chatbot Integration & Testing</h2>
            <button onClick={testChatbot}>Test Chatbot</button>
            <button onClick={() => alert('Integrate on Your Website')}>Integrate on Your Website</button>
            <div className="feedback">
                <p>Chatbot not working as intended? <a href="#">Share feedback</a></p>
            </div>

            {integrationStatus === 'success' && (
                <IntegrationSuccess onExploreAdmin={handleExploreAdmin} onStartChat={handleStartChat} />
            )}
            {integrationStatus === 'error' && <IntegrationError />}
        </div>
    );
};

export default ChatbotIntegration;