import './App.css'
import Login_and_SignUp from './Components/Login_and_SignUp'
import { role_data } from './store/Roles'
import { useAtom } from 'jotai'
function App() {
  const [currentRole, setRole] = useAtom(role_data)
  return (
    <>
      <div className="main w-full h-full">
        {currentRole? (<><div>{currentRole}</div></>):<Login_and_SignUp/>}   
      </div>
    </>
  )
}

export default App
