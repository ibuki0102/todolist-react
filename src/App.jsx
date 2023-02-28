import './App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage, TodoPage, LoginPage, SignUpPage } from './pages';
import { AuthProvider } from 'contexts/AuthContext';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <AuthProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="todos" element={<TodoPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </div>
  );
}

export default App;
