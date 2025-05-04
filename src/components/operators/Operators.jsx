import React from 'react'
import style from './operators.module.scss'
import Header from '../header/Header'

const Operators = () => {
    return (
        <div className={style.operator}>
            <Header />
            <div className={style.content}>
                <h1 className={style.title}>PHP Operatorları</h1>

                <section>
                    <h2 className={style.subTitle}>Aritmetik Operatorlar</h2>
                    <p className={style.description}>Aritmetik operatorlar, rəqəmlər üzərində riyazi əməliyyatlar aparmağa imkan verir.</p>
                    <div className={style.imagePlaceholder}>
                        <img 
                            src="https://www.devopsschool.com/blog/wp-content/uploads/2021/05/PHP-operators-types.png" 
                            alt="Aritmetik Operatorlar" 
                        />
                    </div>
                </section>

                <section>
                    <h2 className={style.subTitle}>Qarşılaşdırma Operatorları</h2>
                    <p className={style.description}>Qarşılaşdırma operatorları, iki dəyəri müqayisə edərək doğru (true) və ya yanlış (false) nəticə qaytarır.</p>
                    <div className={style.imagePlaceholder}>
                        <img 
                            src="https://2.bp.blogspot.com/-_y-nizjpP5k/TeoSib7RTcI/AAAAAAAAAIQ/BWPExZKNiWA/s1600/operator+php2.jpg" 
                            alt="Qarşılaşdırma Operatorları" 
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Operators
