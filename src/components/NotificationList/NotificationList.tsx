import React from 'react';
import Notification from '../Notification/Notification';
import { NotificationListProps } from '../../Interfaces/Interfaces';

const NotificationList = ({ listOfNotifications }: NotificationListProps): JSX.Element => {
    return (
        <article>
            {listOfNotifications.map((profileNotification) => {
                const { id, ...rest } = profileNotification;
                return <Notification key={id} {...rest} />;
            })}
        </article>
    );
};

export default NotificationList;
