import React from 'react';
import { NotificationProps } from '../../Interfaces/Interfaces';
import ProfileImage from './ProfileImage';
import ReactionText from './ReactionText';
import MessageSection from './MessageSection';

const Notification = ({
    profilePic,
    profileName,
    timeStamp,
    reaction,
    link,
    commentedImage,
    message,
    unread
}: NotificationProps): JSX.Element => (
    <article>
        <section className={`flex py-3 px-3 mb-3 ${unread ? 'bg-sky-50' : ''}`}>
            <ProfileImage src={profilePic} />
            <section className="ml-4 w-full">
                <ReactionText
                    profileName={profileName}
                    reaction={reaction}
                    link={link}
                    unread={unread}
                />
                <span className="text-sm text-lightGray">{timeStamp}</span>
                {message && <MessageSection message={message} />}
            </section>
            {commentedImage && <ProfileImage src={commentedImage} />}
        </section>
    </article>
);

export default Notification;
