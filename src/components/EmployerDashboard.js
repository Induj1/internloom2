import React from 'react';

const EmployerDashboard = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Employer Dashboard</h1>
      <p>Welcome to your dashboard! Here you can manage your job postings and view applicants.</p>
      {/* Display current job postings */}
      <h2 className="text-xl mt-6">Current Job Postings</h2>
      {/* Example card for job postings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-bold">Job Posting Title</h3>
          <p>Short description of the job.</p>
          <button className="mt-2 bg-blue-500 text-white p-2 rounded">View Applicants</button>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
