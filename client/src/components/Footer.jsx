import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-200 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-700">
          &copy; {new Date().getFullYear()} Purrfect Paws. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
