import React from 'react';

const MessageSection = ({ message }: { message?: string }): JSX.Element => (
    <section
        className="text-sm mt-2 mb-4  md:w-custom-512 border border-gray-300 p-4 rounded cursor-pointer
    hover:bg-sky-50
    ">
        {message}
    </section>
);

export default MessageSection;
