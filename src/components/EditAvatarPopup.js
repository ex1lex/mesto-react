import PopupWithForm from "./PopupWithForm";
import React from "react";

export default function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  const handleSubmit = (e) => {
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });

    avatarRef.current.value = "";

    e.preventDefault();
  };

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="dialog__input"
        name="inputNewImageUrl"
        placeholder="Ссылка на новый аватар"
        required
        ref={avatarRef}
      />
      <span className="dialog__error-label" id="inputNewImageUrlError"></span>
      <button
        type="submit"
        onClick={handleSubmit}
        form="editAvatarForm"
        className="dialog__submit"
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}
