import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Home from './components/Home';


 // const PrivateRoute = ({ element }) => {
 //     const user = localStorage.getItem('user');
 //     return user ? element : <Navigate to="/login" />;
 // };

const App = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/"  element={<Home />} />
        </Routes>
    </Router>
);

export default App;