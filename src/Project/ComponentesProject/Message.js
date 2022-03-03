//import './message.module.css';
import { useState, useEffect } from 'react';

function Message ({ msg }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        }
        
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false)
        }, 6000);

        return () => clearTimeout(timer);

    }, [msg])

    return (
        <div>
            {visible && (
                <div className='message'> {msg} </div>
            )}
        </div>
    )
}
export default Message;