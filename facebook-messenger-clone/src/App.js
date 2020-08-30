import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import Flipmove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  // console.log(input);
  // console.log(messages);

  // useEffect = run code on a condition in REACT
  // useState = variable in REACT(short term memory)

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc') // this will order the messages, & 
      // 'desc' descending will show the latest message on top list.
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
    });
  }, []);

  useEffect(() => {
    // const username = prompt('Please enter your name'), but React we can write the below codes.
    setUsername(prompt('Please enter your name'));
    // if its is blank [] inside the dependencies, this code will run once, when the app components loads
  }, []);

  const sendMessage = event => {
    event.preventDefault(); // this will prevent form to refreshing and shows the input messages.
    // all the logic to send a message goes here
    // [...messages this will keep the previous messages, and append other input messages.]
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() // this code will updates where the Firebase been hoisted.
    });
    // setMessages([...messages, { username: username, text: input }]); appending username and text

    // this codes clears input/messages after writing in the input form.
    setInput('');
  };
  return (
    <div className="App">
      {/* in the image of logo we are changing width=100 & height=100 is called "dynamic changing" */}
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=70&h=70"/>
      <h1>Hello World 🌎</h1>
      
      {/* this will print the username with welcome after setUsername prompt codes at line 32 */}
      <h2>Welcome {username}</h2>
      
      <form className='app__form'>
        <FormControl className='app__formControl'>
          {/* <InputLabel>Enter a message...</InputLabel> */}
          <Input className='app__input' placeholder='Enter a message...'
            value={input}
            onChange={event => setInput(event.target.value)}
          />
          {/* Button disabled={!input} will prevent from empty string, unless a word typed. */}
          <IconButton className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <Flipmove>
        {/* this map will loop thru each messages arrays and display it on the browser */}
        {messages.map(({id, message}) => (
          // <Message username={message.username} text={message.text}/>

          // this below codes is a person who is logged in, and differentiates from other
          // key={id} plays funny role in appearance of the messages.
          <Message key={id} username={username} message={message} />
          ))
        }
      </Flipmove>
    </div>
  );
}

export default App;
