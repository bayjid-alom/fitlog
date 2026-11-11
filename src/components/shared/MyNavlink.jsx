import React from 'react';
import { NavLink } from 'react-router';

const MyNavlink = ({ to, children, onClick }) => {

    return (
        <NavLink
            to={to}
            end={to === "/"}
            onClick={onClick}
            className={({ isActive }) =>
                `rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors duration-200 ${
                    isActive
                        ? "bg-[#1C2817] text-[#C6FF00]"
                        : "text-gray-400 hover:text-white"
                }`
            }
        >
            {children}
        </NavLink>
    );
};

export default MyNavlink;
