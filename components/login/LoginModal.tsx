import React, { useState } from 'react';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<Props> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Login</h2>
          <button onClick={onClose}>X</button>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input type="password" id="password" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
