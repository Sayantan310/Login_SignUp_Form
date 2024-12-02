import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { value } from '../store/Input_field'
import { dummy_data } from '../Local_data/data'
import { role_data } from '../store/Roles'

export default function Login_and_SignUp() {

    
    // state management declarations
    const [currentRole, setRole] = useAtom(role_data)
    const [text_Value, set_Text_Value] = useAtom(value)
    const [currentFormStatus, setFormStatus] = useState(true)
    
    // mount section
    useEffect(()=>{
      console.log(text_Value);
    },[text_Value])

    // functions declarations
    const text_change_handler = (field:string , value:string) =>{
      set_Text_Value((prevData) => ({
        ...prevData,
        [field]: value,
    }))}

    const clear_text_data_handler = ()=>{
      set_Text_Value({
        first_name : "",
        last_name : "",
        email : "",
        password : "",
        confirm_password : ""
      })
    }

    const login_validations_handler = ()=>{
      if(text_Value.email === "" || text_Value.password === ""){
        alert("please enter your email and password")
      }
      else{
        dummy_data.map((value)=>{
          if(value.email === text_Value.email && value.password === text_Value.password)
            if(value.role === 'admin')
              setRole("admin")
            else if(value.role === 'editor')
              setRole("editor")
            else if(value.role === 'viewer')
              setRole('viewer')
            else if(value.role === 'user')
              setRole('user')
        })
      }
    }

    const sign_up_handler = ()=>{
      if(text_Value.email === "" || text_Value.first_name === "" || text_Value.last_name === "" || text_Value.password === "" || text_Value.confirm_password === ""){
        alert("please fill all the fields to contiune with the signup process")
      }
      if(text_Value.password!== text_Value.confirm_password){
        alert("passwords and confirm password fields are not matching please try again!!!!")
      }
      
    }

    const currentFormStatus_handler = () => {
    if (currentFormStatus){
      setFormStatus(false)
      clear_text_data_handler()
    }
    else{
      setFormStatus(true)
      clear_text_data_handler()
    }}


  return (
    <div>
      <div className={!currentFormStatus?"box border w-96 min-h-max mx-auto mt-24 items-center justify-evenly flex flex-col":"box border w-96 h-96 mx-auto mt-40 items-center justify-evenly flex flex-col"}>
          <div className={!currentFormStatus?'toggle_button_field flex flex-row pt-5 pb-5' : 'toggle_button_field flex flex-row'}>
            <button onClick={currentFormStatus_handler} className={currentFormStatus ? 'heading text-black font-bold underline' : 'heading text-black font-bold'}>LOGIN</button>
            <button onClick={currentFormStatus_handler} className={!currentFormStatus ? "heading text-black font-bold ml-5 underline" : "heading text-black font-bold ml-5"}>SIGN UP</button>
          </div>
          <div className="input_box">
            {currentFormStatus === false && (
              <>
              <div className="first_name">
              <div className=' font-semibold mb-3'>First name</div>
              <input onChange={(e)=> text_change_handler("first_name",e.target.value)} value={text_Value.first_name} className=' border w-[15rem] mb-3 p-1 rounded-lg' type="text" />
            </div>
            <div className="last_name">
              <div className=' font-semibold mb-3'>Last name</div>
              <input onChange={(e)=> text_change_handler("last_name",e.target.value)} value={text_Value.last_name} className=' border w-[15rem] mb-3 p-1 rounded-lg' type="text" />
            </div>
              </>
              )}
            
            <div className="email_input_box">
              <div className=' font-semibold mb-3'>Email</div>
              <input onChange={(e)=> text_change_handler("email",e.target.value)} value={text_Value.email} className=' border w-[15rem] mb-3 p-1 rounded-lg' type="email" />
            </div>
            <div className="password_input_box">
              <div className=' font-semibold mb-3'>Password</div>
              <input onChange={(e)=> text_change_handler("password",e.target.value)} value={text_Value.password} className=' border w-[15rem] p-1 rounded-lg mb-3 hover:border-red-500' type="password" />
            </div>
            {currentFormStatus === false && (
              <>
              <div className="confirm_password_input_box">
              <div className=' font-semibold mb-3'>Confirm Password</div>
              <input onChange={(e)=> text_change_handler("confirm_password",e.target.value)} value={text_Value.confirm_password} className=' border w-[15rem] p-1 rounded-lg mb-3 hover:border-red-500' type="password" />
              </div>
              </>
            )}
          </div>
          {!currentFormStatus?<button onClick={sign_up_handler} className={!currentFormStatus?'border rounded-xl px-14 py-2 font-semibold hover:bg-black hover:text-white mt-3 mb-5':'border rounded-xl px-14 py-2 font-semibold hover:bg-black hover:text-white'}>SIGN UP</button>:<button onClick={login_validations_handler} className={!currentFormStatus?'border rounded-xl px-14 py-2 font-semibold hover:bg-black hover:text-white mt-3 mb-5':'border rounded-xl px-14 py-2 font-semibold hover:bg-black hover:text-white'}>LOGIN</button>}
        </div>
    </div>
  )
}
