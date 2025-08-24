import Footer from './Artoftesting/Footer';
import Navber from './Artoftesting/Navber';  // Navber import এখানে
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './component/CartContext';
import RoutesPage from './Routes/RoutesPage';



function App() {
  return (
    <BrowserRouter>
    
      <CartProvider>
        <div className='min-h-screen flex flex-col'>
          <Navber />  
          
          <main className='flex-grow'>
            <RoutesPage />
          
          </main>

          <Footer />
        </div>
      </CartProvider>
    
    </BrowserRouter>
  );
}

export default App;

