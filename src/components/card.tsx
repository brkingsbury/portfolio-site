import './componentStyles.scss';

function CardContainer(props: any) {
  return (
    <div className="card-container">
      <h3>{props.header}</h3>
      <Card txt={props.txt}/>
      <div className="card-details">
        <p className="description">{props.description}</p>
        <a>Github</a>
        <p className="built">Built with: Angular</p>
      </div>
    </div>
  )
}

function Card(props: any) {
  return (
    <div className="card">
      <p>{props.txt}</p>
    </div>
  )
}

export {Card, CardContainer};