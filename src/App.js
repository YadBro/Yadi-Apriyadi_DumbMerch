import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Routes } from 'react-router-dom';
import './assets/css/style.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfilePage from './pages/ProfilePage';
import DetailPage from './pages/DetailPage';
import { LoginProvider } from './context/AuthenticatedContext';
import Category from './pages/Category';
import PrivateRoute from './PrivateRoute';
import EditCategory from './pages/EditCategory';
import ProductList from './pages/ProductList';
import EditProduct from './pages/EditProduct';
import Complain from './pages/Complain';
import IsAdminRoute from './IsAdminRoute';

function App() {
  return (
    <>
      <LoginProvider>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Register />}/>
            <Route path='product-detail' element={<DetailPage />}/>
            <Route exact path='/' element={<PrivateRoute />}>
              <Route path='complain' element={<Complain />}/>
              <Route path='profile' element={<ProfilePage />}/>

              <Route exact path='/' element={<IsAdminRoute />}> 
                <Route exact path='category' element={<Category/>}/>
                <Route path='category/edit' element={<EditCategory />}/>
                <Route path='product-list' element={<ProductList />}/>
                <Route path='product-list/edit' element={<EditProduct />}/>
              </Route>

            </Route>
          </Routes>
      </LoginProvider>
    </>
  );
}

export default App;
