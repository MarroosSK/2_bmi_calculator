import PropTypes from "prop-types";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { DarkModeContext } from "../../context/darkContext";

const WeightCard = ({tip}) => {

    const {toggleDark} = useContext(DarkModeContext)

    const darkCards = toggleDark ? "dark-card" : ""

  return (
    <Card style={{ width: '25rem', height: "25rem" }} className={`border-0 p-0 ${darkCards}`}>
    <Card.Img variant="top" src={tip.picture} alt={tip.title} style={{height: "10rem"}} />
    <Card.Body>
      <Card.Title className="h6">{tip.title}</Card.Title>
      <Card.Text style={{fontSize: "12px"}}>
      {tip.info}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

WeightCard.propTypes = {
    tip: PropTypes.shape({
      title: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    }).isRequired,
  };

export default WeightCard