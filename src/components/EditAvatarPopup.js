import React, { useRef, useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { validateURL } from '../utils/Validation';

function EditAvatarPopup(props) {

  const { isOpen, onClose, onUpdateAvatar, download, renderDownload } = props;
  const avatarRef = useRef(null);

  const [link, setLink] = useState('');
  
  // переменные для вывод ошибок валидации
  const [linkError, setLinkError] = useState('');

function handleLink(evt) {
  const { value } = evt.target;
  setLink(value);
  setLinkError(validateURL(value));
}

  function handleSubmit(evt) {
    evt.preventDefault();
    renderDownload();
    onUpdateAvatar(avatarRef.current.value);
  }

  useEffect(() => {
    if (isOpen) {
      avatarRef.current.value = '';
    };
    setLink('');
    setLinkError('');
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      download={download}
      downloadText="Обновление..."
      children={
        <div className="popup__form">
          <input
            type="url"
            className="popup__input popup__input_type_avatar"
            id="urlav"
            name="url"
            placeholder="Ссылка на картинку"
            value={link}
            onChange={handleLink} 
            required=""
            ref={avatarRef} />
          <span className={`popup__error urlav-error ${linkError && 'popup__error_active'}`}>{linkError}</span>
        </div>
      }
    />
  )
}

export default EditAvatarPopup;
