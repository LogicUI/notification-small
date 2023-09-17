import React from 'react';
import { NotificationProps } from '../../Interfaces/Interfaces';

const ReactionText = ({
    profileName,
    reaction,
    link,
    unread
}: Partial<NotificationProps>): JSX.Element => (
    <p className="text-sm text-left w-64 md:w-full">
        <span className="font-family-extra-bold hover:text-customBlue cursor-pointer">
            {profileName}
        </span>
        <span className="ml-1">{reaction}</span>
        {link && (
            <span className="ml-1 font-family-bold text-gray hover:text-customBlue cursor-pointer">
                {link}
            </span>
        )}
        {unread && <span className="ml-2 w-2 h-2 rounded bg-custom-red inline-block"></span>}
    </p>
);

export default ReactionText;
