import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import './App.scss';

const App = () => {
  return (
    // useRoutes() may be used only in the context of a <Router> component 에러 발생하여 <BrowserRouter> 추가
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
