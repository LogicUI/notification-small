import React, { useState } from 'react';

import './header.css';

interface HeaderProps {
    onReadClick: () => void;
}

const Header = ({ onReadClick }: HeaderProps): JSX.Element => {
    const [counter, setCounter] = useState<number>(3);

    return (
        <header className="flex justify-between items-center w-100 py-6 px-1">
            <section className="flex space-x-4 items-center">
                <span className="font-family-extra-bold text-xl">Notifications</span>
                <span className="notification-number font-family-bold">{counter}</span>
            </section>
            <h2
                onClick={(): void => {
                    onReadClick();
                    setCounter(0);
                }}
                className="font-family-normal hover:text-customBlue
            cursor-pointer
            ">
                Mark all as read
            </h2>
        </header>
    );
};
export default Header;
