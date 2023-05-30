import  { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { WeightCard } from '../../components'
import { weightGain } from '../../helpers/data'
import { BmiContext } from '../../context/bmiContext'



const WeightGainTips = () => {
    const navigate = useNavigate()
    const {handleReload} = useContext(BmiContext)


    const backToHome = () =>{
        navigate("/")
        handleReload()
    }
    return (
        <Container>
        <div className='d-flex justify-content-start justify-content-center justify-content-sm-start  mb-4'>
            <Button variant="secondary" type="submit" className="bmi-btn-yellow" onClick={backToHome}>Restart App</Button>
        </div>
        <Row>
          {
            weightGain.map((tip) => (
              <Col xs={12} sm={6} md={4} lg={3} className='d-flex justify-content-center' key={tip.id}>
                <WeightCard tip={tip} />
              </Col>
            ))
          }
        </Row>
      </Container>
  )
}

export default WeightGainTips