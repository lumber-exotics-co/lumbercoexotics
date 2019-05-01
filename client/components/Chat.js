import React, { Component } from 'react';
import io from 'socket.io-client'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  addSocket: ws => {
    dispatch(actions.addSocket(ws));
  }
})

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    //initate socket connection for when user is directed to /chat endpoint
    const socket = io();

    socket.on('chat message', msg => {
      // console.log('from message', msg);
      socket.emit('msg', data)
    });
    // this.props.addSocket (socket);
  }

  handleClick (msg) {
    const msgArr = this.state.messages;
    msgArr.push(msg);
    // console.log('msg', msg);
    this.setState({messages: msgArr})
  }

  render() {
    return(
      <div>

        <input name='msg' type='text'></input>
        <button onClick={ (e) => {
          console.log(e.target.value)
          this.handleClick(e.target.value)
        } 
          }>Send</button>
      </div>
    )
  }
}


export default Chat;
// export default connect(mapDispatchToProps, null)(Chat)