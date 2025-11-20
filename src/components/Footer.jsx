import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 mt-auto">
            <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Nanda Pascua. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
