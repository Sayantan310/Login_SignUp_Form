import './App.css'
import Login_and_SignUp from './Components/Login_and_SignUp'

import { useAtom } from 'jotai'

import { logged_in_status } from './store/Logged_in_data'
import Navbar from './Components/Navbar'
import { role_data } from './store/Roles'
import LandingPage from './Components/Landing_page'
function App() {

  const [isLoggedIn, setIsLoggedIn] = useAtom(logged_in_status)
  const [currentRole, setRole] = useAtom(role_data)
  

  return (
    <>
      <div className="main w-full h-full">
        <Navbar/>
        {isLoggedIn ? (
          <>
          <LandingPage/>
          </>
        ):
        <Login_and_SignUp/>}
           
      </div>
    </>
  )
}

export default App
