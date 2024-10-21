import React, { useState } from 'react';
import { useAuth } from '../AuthContext'; // Import the custom hook

const Auth = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Example user data, replace with actual authentication logic
        const userData = { username, password };
        login(userData); // Call login function from context
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded shadow">
            <h2 className="text-2xl mb-5">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded p-2"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded p-2"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Auth;
