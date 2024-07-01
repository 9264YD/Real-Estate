import "./chat.scss";
import {useState} from "react";

function Chat() {
  const [chat,setChat] = useState(true)

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
          <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Yolanda Yang</span>
            <p>
              I want to inspect the house.
            </p>
          </div>
          <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Yolanda Yang</span>
            <p>
              Is the house available?
            </p>
          </div>
          <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Yolanda Yang</span>
            <p>
              How much is the house?
            </p>
          </div>
          <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Yolanda Yang</span>
            <p>
              When can I inspect the house?
            </p>
          </div>
      </div>
      {chat && (
        <div className="chatBox">
        <div className="top">
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            Yolanda Yang
          </div>
          <span className="close" onClick={()=>setChat(null)}>X</span>
        </div>
        <div className="center">
          <div className="chatMessage">
            <p>I am available next Tuesday.</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>When can I inspect the house?</p>
            <span>2 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>About 3 million</p>
            <span>2 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>How much is the house?</p>
            <span>3 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>Yes. The house is still available.</p>
            <span>3 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>Is the house still available?</p>
            <span>3 hour ago</span>
          </div>
        </div>
        <div className="bottom">
          <textarea></textarea>
          <button>Send</button>
        </div>
      </div>)}
    </div>
    );
}

export default Chat;