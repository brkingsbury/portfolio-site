import { NavLink } from "react-router-dom";
import Status from './status/status';
import './componentStyles.scss';
import './cardStyles.scss';

function CardContainer(props: any) {
  return (
    <div className="card-container">
      <figcaption className="card-details">
        <h3 className="card-header">
          <NavLink to={props.link}>
            {props.header}
          </NavLink>
        </h3>
        <p className="built-with">{props.code}</p>
        <Status status={props.status} />
      </figcaption>
      <Card img={props.img} alt={props.alt} />
    </div >
  )
}

function Card(props: any) {
  return (
    <figure className="card">
      <img src={props.img} alt={props.alt} className="card-image" />
      {/* <figcaption></figcaption> */}
    </figure>
  )
}

export { Card, CardContainer };