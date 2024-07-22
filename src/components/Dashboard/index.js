import React, { useEffect, useReducer, useState } from 'react';
import DialogList from '../DialogList';
import Chat from '../Chat';
import MessageAria from '../MessageArea';
import styles from './Dashboard.module.css';
import { getMessages } from '../../api/getMessages';
import UserContext from '../../contexts/UserContext';
import CONSTANTS from '../../constants';
import reducer from '../../reducers/messangerReducer';

const {LOAD, ERRROR, ADD} = CONSTANTS.CHAT_MESSAGES;



const Dashboard = () => {

    const [user, setUser] = useState({
        id: 1,
        fullName: 'Jonh Doe',
        imageSrc: './male-face.jpg'
    })

    const [state, dispatch] = useReducer(reducer, {
        messages: [],
        error: null
    });

    useEffect(() => {
        getMessages()
            .then(data => {
                const action = {
                    type: LOAD,
                    data
                }
                dispatch(action)
            })
            .catch(error => {
                const action = {
                    type: ERRROR,
                    error
                }
                dispatch(action)
            })

    }, [])

    const addNewMessage = (data) => {
        const action = {
            type: ADD,
            message: {
                body: data,
                user
            }
        }
        dispatch(action)

    }

    return (
        <UserContext.Provider value={user}>
            <main className={styles.container}>
                {state.error && <div>Oooops! Error </div>}
                <DialogList />
                <div className={styles['chat-wrapper']}>
                    <Chat messages={state.messages} />
                    <MessageAria sendMessage={addNewMessage} />
                </div>
            </main>
        </UserContext.Provider>

    );
}

export default Dashboard;
