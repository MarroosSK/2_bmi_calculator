import { useContext } from 'react'
import { BmiContext } from '../../context/bmiContext'
import {Button, Image} from "react-bootstrap"
import WeightPic from "../../assets/Wavy_Lst-05_Single-04.png"
import { useNavigate } from 'react-router-dom'

const BmiResults = () => {
    const navigate = useNavigate()
    const {showResult, showQuestion, bmi, message,  handleReload, switchPlans,   fatOrSkinny, handleRedirect} = useContext(BmiContext)
  
    return showResult ? (
          <div className='mt-5 w-100'>
          <h6>Your results:</h6>
          <div className='result_text'>
            <p>Your body mass index (bmi) is {bmi}, which indicates, that {message}</p>
          </div>
          {
              showQuestion && (
                  <>
                  <h2>Would you like some tips how to {switchPlans  ? "reduce weight?" : "gain weight?"}</h2>
                  <Button variant="success" className="bmi-btn-yellow mx-2" onClick={handleRedirect}>Yes</Button>
                  <Button variant="danger" className="bmi-btn-yellow" onClick={handleReload}>No, close</Button>
                  </>
              )
          }
          {
              fatOrSkinny === "skinny" && navigate("/weightUp")
          }
          {
              fatOrSkinny === "fat" && navigate("/weightDown")
          }
          </div>
        ) : <div className='w-100'>
        <Image src={WeightPic} className='img-fluid' style={{width: "21rem"}}/>
        </div>

}

export default BmiResults