import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";


const App = () => {
  // if(!localStorage.getItem('username')) return (
  //   <>
  //     <BrowserRouter><LoginForm/></BrowserRouter>
  //   </>
  // );
  return(
    // <ChatEngine
    //   height="100vh"
    //   projectID="443eaa57-95f6-4e88-8d93-afdcc65c9792"
    //   userName={localStorage.getItem('username')}
    //   userSecret={localStorage.getItem('password')}
    //   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    // />
    <Router>
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
  </Router>

    
  );
}

export default App;
