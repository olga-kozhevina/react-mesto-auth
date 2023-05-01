import React from 'react';

function PopupWithForm(props) {
    const { title, name, buttonText, children, isOpen, onClose, onSubmit, download, downloadText } = props;
    
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button
                    className="popup__close-button"
                    onClick={onClose}></button>
                <h3 className="popup__heading">{title}</h3>
                <form noValidate
                    className="popup__form"
                    name={name}
                    onSubmit={onSubmit} 
                 >
                    {children}
                    <button
                        className="popup__submit-button"
                        type="submit" 
                    >{download ? downloadText : buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
