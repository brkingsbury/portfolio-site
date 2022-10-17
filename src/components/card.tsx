import './componentStyles.scss';
import external from '../assets/icons/external-link.svg';
import github from '../assets/icons/github.svg';

  function CardContainer(props: any) {
    return (
      <div className="card-container">
        <h3>{props.header}</h3>
        <Card img={props.img} />
        <div className="card-details">
          <p>{props.built}</p>
          {props.url &&
            <a className="url" href={props.url}>Website<img src={external}/></a>
          }
          {!props.url &&
            <span></span>
          }
          <a className="git" href={props.git}>Github<img src={github}/></a>
        </div>
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