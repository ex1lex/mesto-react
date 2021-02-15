import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const user = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    props.onUpdateUser({
      name: name,
      about: description,
    });

    e.preventDefault();
  };

  React.useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user]);

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      btnText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="dialog__input"
        name="inputName"
        required
        minLength="2"
        maxLength="40"
        placeholder="Имя"
        value={String(name)}
        onChange={handleNameChange}
      />
      <span className="dialog__error-label" id="inputNameError"></span>
      <input
        type="text"
        className="dialog__input"
        name="inputAbout"
        required
        minLength="2"
        maxLength="200"
        placeholder="Описание"
        value={String(description)}
        onChange={handleDescriptionChange}
      />
      <span className="dialog__error-label" id="inputAboutError"></span>
      <button
        type="submit"
        onClick={handleSubmit}
        form="editProfileForm"
        className="dialog__submit"
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}
