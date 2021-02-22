import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Chat from './components/Chat/Chat';
import Auth from './components/Auth/Auth';
import UserEditor from './components/AdminPages/UserEditor';
import UserList from './components/AdminPages/UserList';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Auth}/>
      <Route path="/chat" component={Chat} />
      <Route exact path="/adminpage" component={UserList}/>
      <Route path={["/adminpage/modal","/adminpage/modal/:id"]} component={UserEditor}/>
    </Switch>
    </div>
  );
}

export default App;
