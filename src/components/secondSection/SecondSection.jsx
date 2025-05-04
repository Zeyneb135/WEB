import React from 'react';
import style from './secondSection.module.scss';
import { FaServer, FaDatabase, FaRegFileAlt, FaChalkboardTeacher } from 'react-icons/fa'; // PHP ilə əlaqəli ikonlar

const SecondSection = () => {
  return (
    <div className={style.second}>
      <div className={style.card}>
        <div className={style.icon}>
          <FaServer />
        </div>
        <h3>Server Tərəfli Dil</h3>
        <p>PHP server tərəfdə işləyir və HTML ilə birlikdə dinamik veb səhifələr yaradır.</p>
      </div>

      <div className={style.card}>
        <div className={style.icon}>
          <FaDatabase />
        </div>
        <h3>Məlumat Bazası Əlaqəsi</h3>
        <p>PHP ilə MySQL kimi məlumat bazalarına qoşulmaq mümkündür.</p>
      </div>

      <div className={style.card}>
        <div className={style.icon}>
          <FaRegFileAlt />
        </div>
        <h3>Form Məlumatlarının Emalı</h3>
        <p>PHP, istifadəçilərdən alınan form məlumatlarını emal edərək nəticələri göstərir.</p>
      </div>

      <div className={style.card}>
        <div className={style.icon}>
          <FaChalkboardTeacher />
        </div>
        <h3>Dinamik Veb Səhifələr</h3>
        <p>PHP ilə istifadəçilərə fərqli və dinamik veb səhifələr təqdim edilir.</p>
      </div>
    </div>
  );
};

export default SecondSection;
