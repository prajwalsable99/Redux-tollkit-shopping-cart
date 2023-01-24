import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>

            <Route path='/' element={<Home />}></Route>
            <Route exact path='/cart' element={<Cart />}></Route>
          </Routes>

        </BrowserRouter>
      </Provider>
    </>



  );
}

export default App;
