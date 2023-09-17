export interface NotificationProps {
    profilePic: string;
    unread: boolean;
    profileName: string;
    timeStamp: string;
    reaction: string;
    link?: string;
    message?: string;
    commentedImage?: string;
    id?: number;
}

export interface NotificationListProps {
    listOfNotifications: NotificationProps[];
}
