
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/login'
import AuthPage from './pages/private-route'
import ProfilePage from './pages/profile'
import RegisterPage from './pages/register'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/profile' element={
          <AuthPage>
            <ProfilePage/>
          </AuthPage>
        }/>
      </Routes>
    </div>
  )
}

export default App
