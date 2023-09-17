import React from 'react';

const ProfileImage = ({ src }: { src: string }): JSX.Element => (
    <img src={src} className="w-10 h-10  cursor-pointer" alt="Profile of the user" />
);

export default ProfileImage;
