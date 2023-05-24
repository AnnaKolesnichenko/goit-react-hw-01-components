import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

import './App.css';
import user from'./components/Profile/user.json';
import data from './components/Statistics/data.json';

function App() {
  return (
    <div className="App">
      <Profile 
        username={user.username} 
        tag={user.tag} 
        location={user.location} 
        avatar={user.avatar} 
        stats={user.stats}
      />

      <Statistics 
        title="Upload Stats"
        stats={data}
      />
    </div>
  );
}

export default App;
