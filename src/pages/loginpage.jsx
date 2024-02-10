import React  ,{useState} from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Login } from '../components/Loginandregisterpage/Login'
import { Register } from '../components/Loginandregisterpage/Register'




const Loginpage = () => {


    const [currentForm,setCurrentForm] = useState('login');
  
    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
  return (
    <>
    <Header/>
    <div className = "App">
        
        {
          currentForm ==="login"?<Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
        }
      </div>
    <Footer/>
    </>

  )
}

export default Loginpage