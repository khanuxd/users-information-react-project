import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import AllUsers from './Components/AllUsers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SingleUser from './Components/SingleUser';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const url = "https://jsonplaceholder.typicode.com/users/";

    axios
      .get(url)
      .then(res => setUsers(res.data));
  }, []);

  return (
    <Router>
      <main className="main-area">
        <h1>Users Information</h1>
        <Switch>
          <Route path="/:id">
            <SingleUser />
          </Route>
          <Route path="/" exact>
            <AllUsers users={users} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
