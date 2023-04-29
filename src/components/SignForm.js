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
                <form
                    className="form"
                    name="signform"
                    onSubmit={handleSubmit} >
                    <h3 className="form__title">{title}</h3>
                    <fieldset className="form__inputs">
                        <input
                            type="email"
                            className="form__input"
                            id="email-input"
                            name="email"
                            required=""
                            placeholder="Email"
                            value={email}
                            onChange={handleEmail} />
                        <span className="popup__error email-input-error"></span>
                        <input
                            type="password"
                            className="form__input"
                            id="password-input"
                            name="password"
                            required=""
                            placeholder="Пароль"
                            minLength={8}
                            maxLength={50}
                            value={password}
                            onChange={handlePassword} />
                        <span className="popup__error password-input-error"></span>
                        </fieldset>

                    <button
                        className="form__submit-button"
                        type="submit">{buttonText}</button>
                    {isRegister && <span className="form__subtitle">Уже зарегистрированы? <Link to="/sign-in" className="form__link">Войти</Link></span>}
                </form>
    )
}

export default SignForm;