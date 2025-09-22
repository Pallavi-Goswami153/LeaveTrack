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
// import { LeaveApprovals } from "./Components/LeaveApprovals.jsx";
import { LoginPage } from "./Components/LoginPage.jsx";
import { DashboardScreen } from "./Pages/DashboardScreen.jsx";
import { ApplyLeaveScreen } from "./Pages/ApplyLeaveScreen.jsx";
import { LeaveHistoryScreen } from "./Pages/LeaveHistoryScreen.jsx";
// import { AdminLeaveApprovals } from "./Pages/AdminLeaveApprovals.jsx";
import { AdminDashboardScreen } from "./Pages/adminDashboardScreen.jsx";
import { ProviderLeave } from "./Components/ContextLevve.jsx";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashboardScreen/>}/>
        <Route path="/leaveform" element={<ApplyLeaveScreen/>}/>
        <Route path="/leavehistory" element={<LeaveHistoryScreen/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboardScreen/>}/>
        {/* <Route path="/leave-approvals" element={<AdminLeaveApprovals/>}/> */}
      </Routes>
     
    </>
  )
}

export default App
