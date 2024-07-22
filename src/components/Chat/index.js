import React, { useEffect, useRef } from 'react';
import styles from './Chat.module.css';
import Message from '../Message';

const Chat = (props) => {

    const messageEndRef = useRef(null);

    useEffect(()=>{
        scrollToBottom();
    },[props.messages])

    const scrollToBottom =()=>{
        messageEndRef.current.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <div className={styles.container}>
            {props.messages.map(m=><Message key= {m.id} message = {m}/>)}
            <div ref = {messageEndRef}></div>
        </div>
    );
}

export default Chat;
