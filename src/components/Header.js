import React from 'react';
import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
    const { loggedIn, email, logOut } = props;

    const location = useLocation();
    const textLink = (location.pathname === '/sign-in') ? 'Регистрация' : 'Войти';
    const buttonText = loggedIn ? 'Выйти' : textLink;
    const pathLink = (location.pathname === '/sign-in') ? '/sign-up' : '/sign-in';

    return (
        <header className="header">
            <img src={logo} alt="Логотип Место" className="header__logo" />

        <div className="header__links">
            {loggedIn && <p className="header__email">{email}</p>}
            {!loggedIn && <Link to={pathLink} className="header__link header__logout">{buttonText}</Link>}
            {loggedIn && <button className="header__link header__logout" onClick={logOut}>{buttonText}</button>}
        </div>

        </header>
    )
}

export default Header;