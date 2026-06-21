import RobotProfilImage from '../assets/robot.png';
import UserProfilImage from '../assets/user.png';
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
  return (
    <div 
      className={sender === 'user' 
      ? 'chat-message-user' 
      : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfilImage}/>
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img src={UserProfilImage}/>
      )}
    </div>
  );
}