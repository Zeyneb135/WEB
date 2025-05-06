import React from 'react'
import style from './information.module.scss'
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa'
import Header from '../header/Header'

const Information = () => {
    
  return (
    <div className={style.information}>
        <Header/>
      <div>
      <h1 className={style.title}><FaCode className={style.icon} /> PHP nədir?</h1>

{/* 1-ci section */}
<section className={style.section}>
  <div className={style.text}>
    <h2><FaServer className={style.icon} /> PHP haqqında ümumi məlumat</h2>
    <p>
      PHP — "Hypertext Preprocessor" sözünün qısaltmasıdır və server tərəfində işləyən skript dilidir.
      PHP ilə dinamik veb saytlar və tətbiqlər yaratmaq mümkündür. Bu dil HTML ilə birgə işləyə bilir və istifadəçiyə interaktiv təcrübə təqdim edir.
      PHP açıq mənbəli və istifadəsi pulsuzdur. Sadə sintaksisi ilə yeni başlayanlar üçün çox uyğundur.
      WordPress, Joomla və Drupal kimi sistemlər də PHP ilə yazılmışdır.
    </p>
    <p>
      PHP əsasən serverdə icra olunur və nəticəsi HTML formasında istifadəçiyə göstərilir. 
      Məsələn, istifadəçi brauzerdə PHP faylını açdıqda, PHP kodları serverdə emal olunur və nəticədə yalnız HTML çıxışı istifadəçiyə təqdim olunur.
    </p>
  </div>
  <div className={style.image}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Scheme_dynamic_page_en.svg/1500px-Scheme_dynamic_page_en.svg.png?client-side_scripting1170609848" alt="PHP haqqında ümumi məlumat şəkli" />
  </div>
</section>

{/* 2-ci section */}
<section className={style.section}>
  <div className={style.image}>
    <img src="https://avatars.mds.yandex.net/i?id=f445cfc3d8c4e5582384019e03990b9a4a58a886-5501896-images-thumbs&n=13" alt="PHP istifadə sahələri şəkli" />
  </div>
  <div className={style.text}>
    <h2><FaDatabase className={style.icon} /> PHP ilə nələr mümkündür?</h2>
    <p>
      PHP ilə çoxlu funksionallıqlar yaratmaq mümkündür:
    </p>
    <ul>
      <li>İstifadəçi qeydiyyatı və giriş sistemləri</li>
      <li>Form məlumatlarının göndərilməsi və emalı</li>
      <li>MySQL və digər məlumat bazaları ilə əlaqə</li>
      <li>Online mağazalar və məhsul kataloqları</li>
      <li>Məlumatların oxunması, yazılması və silinməsi</li>
      <li>Forumlar, bloqlar və sosial şəbəkələr</li>
    </ul>
    <p>
      PHP güclü və çevik bir dildir. Dünyada milyonlarla sayt PHP ilə hazırlanmışdır və bu gün də geniş şəkildə istifadə olunmaqdadır.
    </p>
  </div>
</section>
      </div>
    </div>
  )
}

export default Information
