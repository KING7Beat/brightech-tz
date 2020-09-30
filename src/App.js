import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './assets/components/Login/index';
import Users from './assets/components/Users/index';
import Drivers from './assets/components/Drivers/index';
import Header from './assets/components/Header/index';
import Eror from './assets/components/Eror/index';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './assets/css/style.scss';


export default () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.test);

  useEffect(()=>{
    axios.get('./jsons/users.json').then(function (response) {
      dispatch({
        type: 'ADD_DATA_USERS',
        payload: response.data
      });
    });
    axios.get('./jsons/drivers.json').then(function (response) {
      dispatch({
        type: 'ADD_DATA_DRIVERS',
        payload: response.data
      });
    });
  }, []);


  return (
    <div className='container py-5'>
      <Router>
        {
          state.logged &&
          <Header></Header>
        }
        <Switch>
          <Route path={'/'} exact component={Login}></Route>
          <Route path={'/Users'} exact component={Users}></Route>
          <Route path={'/Drivers'} exact component={Drivers}></Route>
          <Route path='*' component={Eror}></Route>
        </Switch>
      </Router>
    </div>
  );
}