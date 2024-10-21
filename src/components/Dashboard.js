// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-grey">
      <h1 className="text-2xl font-bold mb-4">Your Dashboard</h1>
      <p className="text-grey-dark">Welcome back, [User's Name]!</p>
      <h2 className="text-xl mt-6">Saved Internships</h2>
      {/* Map through saved internships and display them */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example card for saved internships */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-bold">Internship Title</h3>
          <p>Short description of the internship.</p>
          <button className="mt-2 bg-primary text-white p-2 rounded">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
