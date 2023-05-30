import  { useContext } from 'react'
import {Button, Form, InputGroup, FormLabel} from "react-bootstrap"
import { BmiContext } from '../../context/bmiContext'

const BmiForm = () => {
    const {handleSubmit, setHeight, setWeight,  handleReload,  hideForm} = useContext(BmiContext)
  

  return hideForm && (
      
          <Form onSubmit={handleSubmit} className="mt-5">
            <FormLabel>Enter your height and weight</FormLabel>
            <InputGroup className="mb-3" >
              <Form.Control aria-describedby="basic-addon1"  min={100} type="number" placeholder="Enter Height"  onChange={(e) => setHeight(e.target.value)}/>
              <InputGroup.Text id="basic-addon1" style={{width: "45px"}}>cm</InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3" >
              <Form.Control aria-describedby="basic-addon2" min={20} type="number" placeholder="Enter Weight"  onChange={(e) => setWeight(e.target.value)}/>
              <InputGroup.Text id="basic-addon2" style={{width: "45px"}}>kg</InputGroup.Text>
            </InputGroup>
            <div className="d-flex flex-column flex-sm-row justify-content-between">
              <Button variant="secondary" type="submit" className="bmi-btn-yellow">Calculate BMI</Button>
              <Button variant="secondary" className="bmi-btn-yellow" onClick={handleReload}>Reload</Button>
            </div>
          </Form>        
          )

  
}

export default BmiForm