import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import SignUpForm from "./components/SignUpForm";
import { Switch, Route, useHistory } from "react-router-dom";
import { useEffect } from "react";


const App = () => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      history.replace("/login");
    }
  }, [history]);
  
  return(

    
    <Switch>
      <Route path="/sign-up">
        <SignUpForm />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/">
        <ChatEngine
          height="100vh"
          projectID="443eaa57-95f6-4e88-8d93-afdcc65c9792"
          userName={localStorage.getItem("username")}
          userSecret={localStorage.getItem("password")}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
      </Route>
    </Switch>      
  );
}

export default App;
