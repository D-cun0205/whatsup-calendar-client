import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './components/main/Main.js';
import LoginPage from './pages/LoginPage.js';

const App = () => {
  return (
    // useRoutes() may be used only in the context of a <Router> component 에러 발생하여 <BrowserRouter> 추가
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route exact path="/main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
