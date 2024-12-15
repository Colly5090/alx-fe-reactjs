import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-center border-t border-gray-300">
      <p className="text-sm sm:text-base text-gray-600">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
