"use client";

import React from "react";

const Profile = () => {
  const handleLogout = () => {
    // Example logic for logging out
    // Clear user data from localStorage or cookies
    localStorage.removeItem("authToken"); // Adjust based on your auth implementation
    alert("You have been logged out."); // Inform the user
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="max-w-md p-6 bg-white rounded-lg shadow">
        <h1 className="text-xl font-semibold text-center text-gray-800 mb-4">
          Welcome to Your Profile!
        </h1>
        <p className="text-center text-gray-600 mb-6">
          This is your profile page.
        </p>
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Logout
        </button>
      </section>
    </div>
  );
};

export default Profile;
