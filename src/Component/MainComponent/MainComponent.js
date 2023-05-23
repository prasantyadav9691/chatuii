import React from 'react';
import "./MainComponent.css"
import Nav from '../Nav/Nav';
import ChatBody from '../Chatbody/Chatbody';
function MainComponent() {
  return (
      <div className="main">
    <Nav/>
    <ChatBody/>
        </div>
  )
}

export default MainComponent
