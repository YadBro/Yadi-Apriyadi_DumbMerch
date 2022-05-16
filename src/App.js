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
import { UserProvider } from './context/User';
import Category from './pages/Category';
import PrivateRoute from './PrivateRoute';
import EditCategory from './pages/EditCategory';

function App() {
  return (
    <>
      <LoginProvider>
        <UserProvider>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='profile' element={<ProfilePage />}/>
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Register />}/>
            <Route path='product-detail' element={<DetailPage />}/>
            <Route path='/' element={<PrivateRoute />}>
              <Route exact path='category' element={<Category/>}/>
              <Route path='category/edit' element={<EditCategory />}/>
            </Route>
          </Routes>
        </UserProvider>
      </LoginProvider>
    </>
  );
}

export default App;
