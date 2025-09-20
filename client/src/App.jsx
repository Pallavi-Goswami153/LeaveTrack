// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from './Components/Dashboard.jsx';
import {LeaveHistory} from "./Components/LeaveHistory.jsx";
import {LeaveForm} from "./Components/LeaveForm.jsx";
import { AdminDashboard } from "./Components/AdminDashboard.jsx";
import { LeaveApprovals } from "./Components/LeaveApprovals.jsx";
import { LoginPage } from "./Components/LoginPage.jsx";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/leaveform" element={<LeaveForm/>}/>
        <Route path="/leavehistory" element={<LeaveHistory/>}/>
        <Route path="/admin-dashboard" element={<LeaveHistory/>}/>
        <Route path="/leave-approvals" element={<LeaveApprovals/>}/>
      </Routes>
    </>
  )
}

export default App
