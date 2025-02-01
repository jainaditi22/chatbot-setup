import React from 'react';

const IntegrationSuccess = ({ onExploreAdmin, onStartChat }) => {
    return (
        <div className="integration-success">
            <h2>Integration Successful!</h2>
            <div className="confetti">
                🎉🎉🎉
            </div>
            <button onClick={onExploreAdmin}>Explore Admin Panel</button>
            <button onClick={onStartChat}>Start Talking to Your Chatbot</button>
            <div className="social-media">
                <button>Share on Facebook</button>
                <button>Share on Twitter</button>
            </div>
        </div>
    );
};

export default IntegrationSuccess;