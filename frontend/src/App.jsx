import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {lazy, Suspense,useState, useEffect} from "react";
import ThemeContext from "./context/ThemeContext.js";
import {TaskFormContext} from "./context/TaskFormContext.js"
import {TaskContext} from "./context/TaskContext.js";
import SidebarContext from "./context/SidebarContext.js";
import SettingsContext from "./context/SettingsContext.js";
const Tasks = lazy(() => import("./pages/Tasks.jsx"));
// const Settings = lazy(() => import("./pages/Settings.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const RegistrationForm = lazy(() => import("./forms/RegistrationForm.jsx"));
const LoginForm = lazy(() => import("./forms/LoginForm.jsx"));
const HomeLayout = lazy(() => import("./layout/HomeLayout.jsx"));
const Complete = lazy(() => import("./TaskStatus/Complete.jsx"));
const Pending = lazy(() => import("./TaskStatus/Pending.jsx"));
const TaskList= lazy(() => import("./components/TaskList.jsx"));
const Calender= lazy(() => import("./pages/Calender.jsx"));
const HomeDashboard= lazy(() => import("./pages/HomeDashboard.jsx"));
import { useReducer } from "react";
import { taskReducer, initialState} from './reducer/taskReducer.js';
import {taskFormReducer, initialFormState} from './reducer/taskFormReducer.js';

import { Toaster, ToastBar} from "react-hot-toast";
import TaskForm from './forms/TaskForm.jsx';
function App() {
    
  const [openForm, setOpenForm] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [openSettings, setOpenSettings] = useState(false)
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [formState, dispatchForm] = useReducer(taskFormReducer, initialFormState);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const token = localStorage.getItem("token");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
}, [theme]);
  return (
    <div>
    
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <SettingsContext.Provider value={{openSettings,setOpenSettings}}>
        <TaskFormContext.Provider value={{formState,openForm,setOpenForm,dispatchForm}}>
        <TaskContext.Provider value={{taskList: state.taskList,dispatch }}>
        <SidebarContext.Provider value={{sideBarOpen,setSideBarOpen}}>
  <Toaster>
     {(t) => (
    <ToastBar
      toast={t}
      style={{
        border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
        ...t.style,
        animation: t.visible
          ? 'custom-enter 1s ease'
          : 'custom-exit 1s ease forwards',
      }}
    />
  )}
  </Toaster>
        <BrowserRouter>
        <Suspense fallback="Loading...">
          <Routes>
            <Route
              path="/"
              element={
                token ? <Navigate to="/home/tasks/all" replace /> : <Navigate to="/dashboard" replace />
              }
            />
            <Route path="/dashboard" element={<Dashboard theme={theme} />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />

            {/* parent route */}
            <Route path="/home" element={<HomeLayout theme={theme} />}>
            <Route path="homedashboard" element={<HomeDashboard />} />
             <Route index element={<Navigate to="tasks/all" replace />} />
    
              <Route path="tasks" element={<Tasks />}>
                 <Route index element={<Navigate to="all" replace />} />
                
                <Route path="all" element={<TaskList />} />
                <Route path="completed" element={<Complete />} />
                <Route path="pending" element={<Pending />} />
              </Route>
              <Route path="calender" element={<Calender />} />
              {/* <Route path="settings" element={<Settings />} /> */}
            </Route>

         
          </Routes>
          </Suspense>
        </BrowserRouter>
        </SidebarContext.Provider>
        </TaskContext.Provider>
        </TaskFormContext.Provider>
        </SettingsContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
