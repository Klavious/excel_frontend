import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4">
      &copy; {new Date().getFullYear()} Excel Analyzer
    </footer>
  );
}

export default Footer;
