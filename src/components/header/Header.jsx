import React from 'react'
import style from './header.module.scss'
import { FaChevronLeft } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa";
import { FaQuestionCircle, FaCode, FaLaptopCode } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate('/') 
    }



    return (
        <div className={style.header}>
            <div className={style.head}>
                <div className={style.logo} onClick={handleLogoClick}>
                    <li><FaChevronLeft /></li>
                    <h1>PHP</h1>
                    <li><RxSlash /></li>
                    <li><FaChevronRight /></li>
                </div>
                <nav className={style.icons}>
                    <ul>
                        <li>
                            <a href="/info">
                                <FaQuestionCircle />
                                <span>PHP nədir?</span>
                            </a>
                        </li>
                        <li>
                            <a href="/operator">
                                <FaCode />
                                <span>Operatorlar</span>
                            </a>
                        </li>
                        <li>
                            <a href="/code">
                                <FaLaptopCode />
                                <span>Kod nümunələri</span>
                            </a>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    )
}

export default Header