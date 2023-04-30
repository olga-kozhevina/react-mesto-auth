import React, { useState, useEffect } from 'react';
import logo from '../images/logo.svg';
import menu from '../images/header-menu-sign.svg';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
    const { loggedIn, email, logOut, onClose } = props;

    // переменные состояния для ширины экрана
    const [width, setWidth] = useState(window.innerWidth);

    // переменные состояния для значка меню
    const [showMenu, setShowMenu] = useState(true);

    // переменные состояния для развернутого меню
    const [showUnfoldedMenu, setShowUnfoldedMenu] = useState(false);


    const location = useLocation();
    const textLink = (location.pathname === '/sign-in') ? 'Регистрация' : 'Войти';
    const buttonText = loggedIn ? 'Выйти' : textLink;
    const pathLink = (location.pathname === '/sign-in') ? '/sign-up' : '/sign-in';

    // добавляем слушатель для реагирования на ширину экрана
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    // функция для смены значка меню на его содержимое
    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => {
          const newShowMenu = !prevShowMenu;
          if (!newShowMenu) {
            setShowUnfoldedMenu(true);
          }
          return newShowMenu;
        });
      };
          
    return (
        <header className="header">
            {loggedIn && showUnfoldedMenu && width < 600 && (
                <div className='header__unfold-menu'>
                    <p className="header__unfold-email">{email}</p>
                    <button className="header__link header__logout header__unfold-logout" onClick={logOut}>{buttonText}</button>
                </div>
            )}
<div className='header__main'>
            <img src={logo} alt="Логотип Место" className="header__logo" />

            <div className="header__links">
                {!loggedIn && width < 600 && (
                    <Link to={pathLink} className="header__link header__logout">{buttonText}</Link>
                )}
                {!loggedIn && width >= 600 && (
                    <Link to={pathLink} className="header__link header__logout">{buttonText}</Link>
                )}
                
{loggedIn && width < 600 && (
    <>
        {showMenu ? (
            <img src={menu} alt="Значок меню" className='header__menu-sign' onClick={toggleMenu} />
        ) : (
            <button
                className="popup__menu-close-button"
                type="button"
                onClose={toggleMenu}
                onClick={() => {
                    setShowUnfoldedMenu(false);
                    setShowMenu(true);
                }}
            ></button>
        )}
    </>
)}
                {loggedIn && width >= 600 && (
                    <p className="header__email">{email}</p>
                )}
                {loggedIn && width >= 600 && (
                    <button className="header__link header__logout" onClick={logOut}>{buttonText}</button>
                )}
            </div>
        </div>
    </header>
)
}

export default Header;