import React, { useState } from 'react';
import axios from 'axios';

const OrganisationSetup = ({ onNext }) => {
    const [companyName, setCompanyName] = useState('');
    const [websiteURL, setWebsiteURL] = useState('');
    const [description, setDescription] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [webpages, setWebpages] = useState([
        { title: 'Page 1', status: 'Scraped' },
        { title: 'Page 2', status: 'Pending' },
    ]);

    const fetchMetaDescription = async () => {
        try {
            const response = await axios.get(`https://api.linkpreview.net?key=YOUR_API_KEY&q=${websiteURL}`);
            setMetaDescription(response.data.description);
            setDescription(response.data.description); // Optionally set the description field
        } catch (error) {
            console.error("Error fetching meta description:", error);
            alert("Failed to fetch meta description.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle organization setup logic here
        console.log({ companyName, websiteURL, description });
        onNext(); // Proceed to the next step
    };

    return (
        <div className="organisation-setup">
            <h2>Setup Organisation</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                <input type="url" placeholder="Company Website URL" value={websiteURL} onChange={(e) => setWebsiteURL(e.target.value)} required />
                <button type="button" onClick={fetchMetaDescription}>Fetch Meta Description</button>
                <textarea placeholder="Company Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <h3>Meta Description: {metaDescription}</h3>
                <button type="submit">Submit</button>
            </form>
            <div className="webpages-status">
                <h3>Detected Webpages</h3>
                <ul>
                    {webpages.map((page, index) => (
                        <li key={index}>
                            {page.title} - {page.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrganisationSetup;