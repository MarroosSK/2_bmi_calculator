import { useContext } from 'react'
import {MdDarkMode, MdLightMode} from "react-icons/md"
import { DarkModeContext } from '../../context/darkContext'

const Title = () => {

  const {toggleDark, setToggleDark} = useContext(DarkModeContext)

  return (
    <>
      <div className='d-flex flex-column flex-sm-row justify-content-between  align-items-center'>
        <div>
          <h6 className='heading'>BMI Calculator</h6>
          <div className='border-bottom w-100'></div>
        </div>
        <div onClick={() => setToggleDark(!toggleDark)}>
            {
              toggleDark ? <MdLightMode size={25} /> : <MdDarkMode size={25} />
            }
        </div>
      </div>
    </>
  )
}

export default Title