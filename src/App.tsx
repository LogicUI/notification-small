import React, { useState } from 'react';
import Header from './components/Header/Header';
import NotificationList from './components/NotificationList/NotificationList';
import { NotificationProps } from './Interfaces/Interfaces';
import images from './assets/assets';

const App = (): JSX.Element => {
    const [notifcationList, setNotifcationList] = useState<NotificationProps[]>([
        {
            profilePic: images.MarkAvatar,
            unread: true,
            link: 'My first tournament today!',
            profileName: 'Mark Webber',
            timeStamp: '1m ago',
            reaction: 'reacted to your recent post',
            id: 1
        },
        {
            profilePic: images.AngelaAvatar,
            unread: true,
            profileName: 'Angela Gray',
            timeStamp: '5m ago',
            reaction: 'followed you',
            id: 2
        },
        {
            profilePic: images.JacobAvatar,
            unread: true,
            profileName: 'Jacob Thompson',
            timeStamp: '1 day ago',
            link: 'Chess Club',
            reaction: 'has joined your group',
            id: 3
        },
        {
            profilePic: images.RickyAvatar,
            unread: false,
            profileName: 'Rizky Hasanuddin',
            timeStamp: '5 days ago',
            reaction: 'sent you a private message',
            message:
                "Hello, thanks  for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game.",
            id: 4
        },
        {
            profilePic: images.KimberlyAvatar,
            unread: false,
            profileName: 'Kimberly Smith',
            timeStamp: '1 week ago',
            reaction: 'commented on your picture',
            commentedImage: images.ChessImg,
            id: 5
        },
        {
            profilePic: images.NathanAvatar,
            unread: false,
            profileName: 'Nathan Peterson',
            timeStamp: '2 weeks ago',
            reaction: 'reacted to your recent post',
            link: '5 end-game strategies to increase your win rate',
            id: 6
        },
        {
            profilePic: images.AnnaAvatar,
            unread: false,
            profileName: 'Anna Kim',
            timeStamp: '2 weeks ago',
            reaction: 'left the group',
            link: 'Chess Club',
            id: 7
        }
    ]);

    const onReadClick = (): void => {
        const newNotificationList = notifcationList.map((profile) => ({
            ...profile,
            unread: false
        }));
        setNotifcationList(newNotificationList);
    };

    return (
        <article className="flex justify-center items-center w-100 md:mt-16  ">
            <article className="main-background max-w-3xl w-100 bg-white px-4 py-rounded rounded-lg">
                <Header onReadClick={onReadClick} />
                <main className="App ">
                    <NotificationList listOfNotifications={notifcationList} />
                </main>
            </article>
        </article>
    );
};

export default App;
