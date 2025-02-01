import React, { useState } from 'react';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const Registration = ({ onNext }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider);
            onNext(); // Proceed to the next step after successful login
        } catch (error) {
            console.error("Error during Google sign-in:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredential.user);
            alert('Verification email sent! Please check your inbox.');
            onNext(); // Proceed to the next step
        } catch (error) {
            console.error("Error during registration:", error);
            alert(error.message);
        }
    };

    return (
        <div className="registration-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="text" placeholder="Verification Code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} required />
                <button type="submit">Submit</button>
                <button type="button" onClick={handleGoogleSignIn}>Continue with Google</button>
            </form>
        </div>
    );
};

export default Registration;