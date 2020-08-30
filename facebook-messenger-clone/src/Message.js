import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';
                    // props destructuring
const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username; // this checks, if the user is logged in and equivalent, 
        //then this will be true, it will differentiate with colors from css.
    
    return (
            // Card className='message'
            
            // ``backtick means will give styling every message, but ${isUser && 
            // 'message__user'} means only the logged in user will have this class of styling.
            <div ref={ref} className={`message ${isUser && 'message__user'}`}>
                <Card className={isUser ? 'message__userCard' : 'message__guestCard'}> 
                    <CardContent>
                        <Typography
                            color='white'
                            variant='h5'
                            component='h2'
                        >
                            {/* {props.username}: {props.text} */}
                            
                            {/* this codes says if it is not user show the name, and otherwise don't show the name. */}
                            {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
    )
})
// Card is to make app beautiful from material.ui
export default Message;
