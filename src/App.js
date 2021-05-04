import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return(
    <ChatEngine
      height="100vh"
      projectID="443eaa57-95f6-4e88-8d93-afdcc65c9792"
      userName="Pritam"
      userSecret="1234567890"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />

    
  );
}

export default App;
