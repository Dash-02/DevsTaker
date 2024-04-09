import React from "react";
import './Main.css';
import imgSrc from '../assets/img/image.png';

function Main() {
  return (
    <>
      <div className="container">
        <img className="img" src={imgSrc} alt="ball" />
        <div className="content">
          <h1 className="title">DevsTaker</h1>
          <p className="text-p">Попробуйте версии приложения на русском и английском:</p>
          <div className="btn-div">
            <button className="btn"><b>Скачать</b></button>
            <button className="btn">Download</button>
            {/* <div className="btn-shadow"></div> */}
          </div>
        </div>
    </div>
    <div className="description">
        <div className="text">
            <p>Воспользуйтесь моментом, делайте</p>
            <p>заметки с DevsTaker!</p>
        </div>
    </div>
    </>    
  );
}

export default Main;