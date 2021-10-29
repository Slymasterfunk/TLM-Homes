import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import IndexPage from './pages/IndexPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Route path='/' exact component={IndexPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
