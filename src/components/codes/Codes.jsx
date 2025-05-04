import React from 'react';
import style from './codes.module.scss';
import Header from '../header/Header';

const Codes = () => {
  return (
    <div className={style.code}>
      <Header />
      <div className={style.content}>
        <div className={style.row}>
          <div className={style.imagePlaceholder}>
            <img 
              src="https://avatars.mds.yandex.net/i?id=5a6b306875aa14126990cdc541f3d9e3d90db1ce-5234508-images-thumbs&n=13" 
              alt="Code Example 1" 
            />
          </div>
          <div className={style.imagePlaceholder}>
            <img 
              src="https://videos.teamtreehouse.com/stills/TH-BuildBasicPHP-S2-V1-stills-8.jpg?token=6981a37d_367c1b9abcbec9969d0c090b07f3126076c0cd35" 
              alt="Code Example 2" 
            />
          </div>
        </div>

        <div className={style.row}>
          <div className={style.imagePlaceholder}>
            <img 
              src="https://avatars.mds.yandex.net/i?id=ba7e42a3ec80415bf01243908e267129_l-5319478-images-thumbs&n=13" 
              alt="Code Example 3" 
            />
          </div>
          <div className={style.imagePlaceholder}>
            <img 
              src="https://i2.wp.com/appdividend.com/wp-content/uploads/2019/08/PHP-Class-Example-Basics-Of-Class-In-PHP-Tutorial.png" 
              alt="Code Example 4" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Codes;
