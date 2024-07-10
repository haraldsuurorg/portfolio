import React from 'react';

import { linkedin, facebook } from '../assets/';

const Footer = () => {
    return (
        <div className="flex justify-center items-center pb-8 gap-8">
            <a href="https://www.linkedin.com/in/haraldsuurorg/" target="_blank">
                <img src={linkedin} alt="linkedin" className="w-7 h-7 contain" />
            </a>

            <a href="https://www.facebook.com/haraldsuurorg/" target="_blank">
                <img src={facebook} alt="facebook" className="w-7 h-7 contain" />
            </a>
        </div>
    );
}

export default Footer