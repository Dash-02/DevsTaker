import React, { useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './custom-alert.css';

import './Main.css';
import Loader from '../Loader/Loader.jsx';
import imgSrc from '../assets/img/image.png';
import fileApkRu from '../assets/files/ru/universal.apk';
import fileApkEn from '../assets/files/en/universal.apk';

function Main() {

  const [loading, setLoading] = useState(true);

  // Имитация загрузки
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const showAlertRu = () => {
    confirmAlert({
      title: 'Подтверждение',
      message: 'Вы уверены, что хотите загрузить русскоязычную версию DevsTaker?',
      buttons: [
        {
          label: 'Да',
          onClick: () => {
            const downloadLink = document.createElement('a');
            downloadLink.href = fileApkRu;
            downloadLink.download = 'universal.apk';
            downloadLink.click();
          }
        },
        {
          label: 'Отмена',
          onClick: () => {
            console.log('Вы нажали "Отмена"');
          }
        }
      ]
    });
  };


  const showAlertEn = () => {
    confirmAlert({
      title: 'Подтверждение',
      message: 'Вы уверены, что хотите загрузить англоязычную версию DevsTaker?',
      buttons: [
        {
          label: 'Да',
          onClick: () => {
            const downloadLink = document.createElement('a');
            downloadLink.href = fileApkEn;
            downloadLink.download = 'universal.apk';
            downloadLink.click();
          }
        },
        {
          label: 'Отмена',
          onClick: () => {
            console.log('Вы нажали "Отмена"');
          }
        }
      ]
    });
  };
  
  return (
    <>
    <Loader loading={loading} />
      <div className="container">
        <img className="img" src={imgSrc} alt="ball" />
        <div className="content">
          <h1 className="title">DevsTaker</h1>
          <p className="text-p">Попробуйте версии приложения на русском и английском:</p>
          <div className="btn-div">
            <button className="btn" onClick={showAlertRu}><b>Скачать</b></button>
            <button className="btn" onClick={showAlertEn}>Download</button>
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