import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chpater_06/NotificationList';
import Accommodate from './chpater_07/Accommodate';
import ConfirmButton from './chpater_08/ConfirmButton';
import LandingPage from './chpater_09/LandingPage';
import AttendanceBook from './chpater_10/AttendanceBook';
import Signup from './chpater_11/SignUp';
import Calculator from './chpater_12/Calculator';



  ReactDOM.render(
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>,
    document.getElementById('root')
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
