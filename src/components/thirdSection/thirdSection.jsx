import React from 'react';
import style from './thirdSection.module.scss';

const ThirdSection = () => {
  return (
    <div className={style.third}>
        <div className={style.image}>
            <img 
              src="https://avatars.mds.yandex.net/i?id=f8aa754430e2df3e251ca384f07712e966f02986-10142109-images-thumbs&n=13" 
              alt="PHP" 
            />
        </div>
        <div className={style.info}>
            <h2>PHP-nin Üstünlükləri</h2>
            <ul>
                <li>
                    <h3>Sadə və Öyrənilməsi Asan</h3>
                    <p>PHP, sadə sintaksisə malikdir və yeni başlayanlar üçün çox uyğun bir dildir. HTML daxilində işləyə bildiyi üçün, veb inkişaf etdiriciləri üçün əlverişlidir.</p>
                </li>
                <li>
                    <h3>Açıq Mənbə (Open Source)</h3>
                    <p>PHP açıq mənbə kodlu bir dildir. Bu, proqramçılara onu pulsuz istifadə etməyə və öz layihələrinə inteqrasiya etməyə imkan verir. Həmçinin, çoxsaylı əlavələr və alətlər mövcuddur.</p>
                </li>
                <li>
                    <h3>Çoxsaylı Çərçivələr və Alətlər</h3>
                    <p>PHP üçün Laravel, Symfony, CodeIgniter, Zend kimi çoxsaylı məşhur çərçivələr mövcuddur. Bu çərçivələr inkişaf prosesini sürətləndirir və kodun səliqəli, strukturlaşdırılmış olmasını təmin edir.</p>
                </li>
                <li>
                    <h3>Çoxsaylı Məlumat Bazası Əlaqələri</h3>
                    <p>PHP, MySQL, PostgreSQL, MongoDB kimi müxtəlif məlumat bazaları ilə işləməyə imkan verir. Bu, inkişaf etdiricilərin veb tətbiqlərində dinamik məlumatlarla işləməsini asanlaşdırır.</p>
                </li>
                <li>
                    <h3>Yüksək Performans</h3>
                    <p>PHP, yüksək performanslı veb tətbiqləri yaratmaq üçün optimallaşdırılmışdır. Xüsusən, PHP ilə hazırlanan dinamik saytlar sürətli işləyir və yüksək trafikli veb saytlara xidmət göstərməkdə yaxşıdır.</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ThirdSection;
