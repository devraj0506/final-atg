import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList.jsx'
import Spinner from './components/Spinner';
import { BrowserRouter, Routes, Switch, Route, useParams } from 'react-router-dom'
import UserDetails from './components/UserDetails';
// import ErrorBoundary from './components/ErrorBoundary'
import Mix from './components/Mix';



function App() {
  const { id } = useParams();



  return (
    <div className="App">

      <BrowserRouter>

     
      
      <Routes>
     


      <Route exact path='/'
     element = {<UserList/>}
     />

      <Route path='user/:id'
      element = {<Mix/>}
      />



      </Routes>
      
      
      
      </BrowserRouter>
     {/* <UserList />
   
    <UserDetails /> */}

    
    </div>
  );
}

export default App;
