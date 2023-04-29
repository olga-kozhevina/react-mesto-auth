import React from "react";
import tooltipOk from '../images/response-ok.png';
import tooltipFail from '../images/response-fail.png';

function InfoToolTip(props) {
    const { name, signedIn, isOpen, onClose } = props;

    const tooltip = signedIn ? tooltipOk : tooltipFail;
    const message = signedIn ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.';

    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
            <button
                className="popup__close-button"
                type="button"
                onClick={onClose}></button>
            <img className="popup__tooltip" src={tooltip} alt="Response icon" />
            <h3 className="popup__heading">{message}</h3>
        </div>
    </div>

    )
}

export default InfoToolTip;