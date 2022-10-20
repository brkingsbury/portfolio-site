import { NavLink } from "react-router-dom";
import './componentStyles.scss';

function CardContainer(props: any) {
  return (
    <div className="card-container">
      <h3>
        <NavLink to={props.link}>
          {props.header}
        </NavLink>
      </h3>
      <Card img={props.img} />
      <p className="card-details">
        {props.description}
      </p>
    </div >
  )
}

function Card(props: any) {
  return (
    <div className="card">
      <img src={props.img} />
    </div>
  )
}

export { Card, CardContainer };