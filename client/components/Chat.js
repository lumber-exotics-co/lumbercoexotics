import React, { Component } from 'react';
import io from 'socket.io-client'
import { connect } from 'react-redux';
import * as actions from './../actions/index'

const mapDispatchToProps = dispatch => ({
  currentChange: (currMsg) => {
    dispatch(actions.currentChange(currMsg));
  },
  resetCurrent: (resetMsg) => {
    dispatch(actions.resetCurrent(resetMsg));
  }
})

const mapStateToProps = store => ({
  messageArr : store.messages.message,
  socket : store.messages.socket,
  currentMessage : store.messages.currentMessage
})

class Chat extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
 
  }

componentDidMount() {
    //initate socket connection for when user is directed to /chat endpoint
  
    this.props.socket.on('connection',  socket => {
    console.log('connection is live on client side.')
  })

  this.props.socket.on('chat', msg => {
    console.log('this is msg on client', msg);
    this.props.resetCurrent(msg);
  })
}





handleClick(e) {

  this.props.socket.emit('chat message', this.props.currentMessage);
  
  
  
  
  // this.props.resetCurrent(this.props.currentMessage)
}

  render() {
    const msgHistory = this.props.messageArr.map((el, i) => {
      return <div className="board" key={i}>{el}</div>
    })
    // const msgHistory = this.props.messageArr[this.props.messageArr.length - 1]
    return(
      <div id="msgBoard">
        {msgHistory}
        <input name='msg' type='text' onChange={(e) => this.props.currentChange(e.target.value)}></input>
        <button onClick={(e) => this.handleClick(e)}>Send</button>
        <div>I'm rendering</div>
      </div>
    )
  }
}


// export default Chat;
export default connect(mapStateToProps, mapDispatchToProps)(Chat);