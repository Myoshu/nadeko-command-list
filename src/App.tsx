import * as React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import CommandList from './components/CommandList';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <NavMenu />
        <Switch>
          <Route path="/commands" component={CommandList} />
        </Switch>
      </div>
    );
  }
}

export default App;
