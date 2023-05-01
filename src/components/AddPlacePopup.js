import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { validateURL, validateInput } from '../utils/Validation';

function AddPlacePopup(props) {
    const { isOpen, onClose, onAddPlace, download, renderDownload } = props;

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    // переменные для вывод ошибок валидации
    const [nameError, setNameError] = useState('');
    const [linkError, setLinkError] = useState('');
    
    function handleName(evt) {
        const { value } = evt.target;
        setName(value);
        setNameError(validateInput(value));
    }

    function handleLink(evt) {
        const { value } = evt.target;
        setLink(value);
        setLinkError(validateURL(value));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        renderDownload();
        onAddPlace({
            name, link,
        });
    }

    useEffect(() => {
        setName('');
        setLink('');
        setNameError('');
        setLinkError('');
    }, [isOpen]);

    return (
        <PopupWithForm
            title="Новое место"
            name="add-card"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonText="Создать"
            download={download}
            downloadText="Сохранение..."
            children={
                <div className="popup__form" >
                    <input
                        type="text"
                        className="popup__input popup__input_type_card-name"
                        id="card-name"
                        name="name"
                        required
                        minLength="2"
                        maxLength="30"
                        placeholder="Название"
                        value={name}
                        onChange={handleName}
                         />
                    <span className={`popup__error card-name-error ${nameError && 'popup__error_active'}`}>{nameError}</span>
                    <input
                        type="url"
                        className="popup__input popup__input_type_image-src"
                        id="url"
                        name="link"
                        required
                        placeholder="Ссылка на картинку"
                        value={link}
                        onChange={handleLink} 
                         />
                    <span className={`popup__error url-error ${linkError && 'popup__error_active'}`}>{linkError}</span>
                </div>
            }
        />
    )
}

export default AddPlacePopup;
