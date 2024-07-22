import React, { useState } from 'react';
import styles from './MessageAria.module.css'

const MessageAria = (props) => {
const [inputMessage, setInputMessage] = useState('');


const handleChenge = ({target:{value}})=>{
    setInputMessage (value);
}

const handleSubmit =(event)=>{
    event.preventDefault();
    props.sendMessage(inputMessage);
    setInputMessage('');

}

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles['form-wrapper']}>
                <textarea 
                value = {inputMessage}
                onChange={handleChenge}
                className={styles['input']}
                />
                <button type='submit' className={styles['submit-button']}>Send</button>

            </form>


        </div>
    );
}

export default MessageAria;
