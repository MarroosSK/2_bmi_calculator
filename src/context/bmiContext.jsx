import  { createContext, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export const BmiContext = createContext();

export const BmiContextProvider = ({children}) =>{

    //BMI
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')
  
      //show results
      const [showResult, setShowResult] = useState(false)
  
      //switchPlan
      const [switchPlans, setSwitchPlans] = useState(false)
  
      //show question
      const [showQuestion, setShowQuestion] = useState(true)
      
      const [fatOrSkinny, setFatOrSkinny] = useState("")
      const [hideForm, setHideForm] = useState(true)
  
      const handleSubmit = (e) =>{
  
          e.preventDefault()
         
          if ((weight < 20 || weight >= 220 || weight === "" ) || (height < 100 || height >=250 || height === "" )) {
            toast("Please enter a valid weight and height!", { type: "error" });
          } else {
            let bmi = (weight / height / height * 10000)
            setBmi(bmi.toFixed(1))
            setShowResult(true)

            if (bmi < 18.4) {
              setMessage('You are underweight.')
              setSwitchPlans(false)
              setShowQuestion(true)
            } else if (bmi >= 18.5 && bmi < 24.9) {
              setMessage('You are a healthy weight.')
              setShowQuestion(false)
            } else {
              setMessage('You are overweight.')
              setSwitchPlans(true)
              setShowQuestion(true)
            }
          }
           }    
           

         
           const handleReload = () =>{
             window.location.reload()
             setShowResult(false)
           }
           
           const handleRedirect = () =>{
            if(switchPlans)  {
                setHideForm(false)
                setShowQuestion(false)
                setFatOrSkinny("fat")
            } else {
                setHideForm(false)
                setShowQuestion(false)
                setFatOrSkinny("skinny")
        
            }
        }
      return (
          <BmiContext.Provider value={{weight, height, setHeight, setWeight, showResult, message, bmi, handleSubmit, handleReload, switchPlans, showQuestion, setShowQuestion,
          fatOrSkinny, setFatOrSkinny, hideForm, setHideForm, handleRedirect}}>
              {children}
          </BmiContext.Provider>
      )
  }

BmiContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};