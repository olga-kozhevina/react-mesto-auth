import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignForm(props) {
    const { title, buttonText, onSubmit, isRegister } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(evt) {
        setEmail(evt.target.value);
    }

    function handlePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit({ email, password });
    }

    return (
            <div className="popup">
            <div className="popup__container">
                <h3 className="popup__heading">{title}</h3>
                <form
                    className="popup__form"
                    name="signform"
                    onSubmit={handleSubmit} >
                                    <div className="popup__form">
                    <input
                        type="email"
                        className="popup__input"
                        id="email-input"
                        name="email"
                        required=""
                        placeholder="Email"
                        onChange={handleEmail} />
                    <span className="popup__error"></span>
                    <input
                        type="password"
                        className="popup__input"
                        id="password-input"
                        name="password"
                        required=""
                        placeholder="Пароль"
                        minLength={8}
                        maxLength={50}
                        onChange={handlePassword} />
                    <span className="popup__error"></span>
                </div>

                    <button
                        className="popup__submit-button"
                        type="submit">{buttonText}</button>
                    {isRegister && <span className="popup__error">Уже зарегистрированы? <Link to="/sign-in" className="popup__subtitle">Войти</Link></span>}
                </form>
            </div>
        </div>
    )
}

export default SignForm;