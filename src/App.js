import './App.css';
// import Header from './components/Header'
import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

const App = () => {
  const [state, setState] = useState({message: '', name: ''});
  const [chat, setChat] = useState([]);


  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
  }, [state])



  const onTextChange = event => {
     setState({...state, [event.target.name]: event.target.value})
  }


  const onMessageSubmit = event => {
    event.preventDefault()
    const { name, message } = state
    socket.emit('message', {name, message})
    setState({ message: '', name })
  }



  const renderChat = () => {
     return chat.map(({name, message}, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
     ))
  }


  return (
    <div className="container">
      {/* <Header /> */}
      <div className='card'>
        <form onSubmit={onMessageSubmit}>
          <h2>chat</h2>

          <div className='name-field'>
            <input type='text' name='name' onChange={event => onTextChange(event)} value={state.name} label='Name'/>
          </div>

          <div className='message-field'>
            <input type='text' name='message' onChange={event => onTextChange(event)} value={state.message} label='Message'/>
          </div>

          <button>Send</button>
        </form>

        <div className="render-chat">
          <h1>Chat log</h1>
          {renderChat()}
        </div>
      </div>
    </div>
  );
}

export default App;
