import Footer from './Artoftesting/Footer';
import Navber from './Artoftesting/Navber';  // Navber import এখানে
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './component/CartContext';
import RoutesPage from './Routes/RoutesPage';
import AuthProvider from './Auth/AuthProvider';


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <div className='min-h-screen flex flex-col'>
          <Navber />  
          
          <main className='flex-grow'>
            <RoutesPage />
          
          </main>

          <Footer />
        </div>
      </CartProvider>
     </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

