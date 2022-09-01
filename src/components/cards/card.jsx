function Card(props) {
  return (
    <div className="card">
      {console.log(props)}
      <div className="card-image">
        <img
          width={130}
          height={110}
          src="/img/card/t-shirt.png"
          alt="staff"
        ></img>
      </div>
      <h3>Мужская футболка "Tommy hilfiger"</h3>
      <div className="card-price">
        <div className="card-bottom">
          <h4>Цена:</h4>
          <p>10000руб</p>
        </div>
        <img height={32} width={32} src="/img/card/Group 91.png"></img>
      </div>
    </div>
  );
}
export default Card;
