//import 'react-toastify/dist/react-toastify';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Routes from './routes';
//import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      
        <Routes/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
