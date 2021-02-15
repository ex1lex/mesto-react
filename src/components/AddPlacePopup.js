import PopupWithForm from "./PopupWithForm";
import React from "react";

export default function AddPlacePopup(props) {
  const [name, setName] = React.useState();
  const [link, setLink] = React.useState();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  const handleSubmit = (e) => {
    props.onAddPlace({
      name: name,
      link: link,
    });

    e.preventDefault();
  };

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="dialog__input"
        name="inputTitle"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        onChange={handleNameChange}
      />
      <span className="dialog__error-label" id="inputTitleError"></span>
      <input
        type="url"
        className="dialog__input"
        name="inputImageUrl"
        placeholder="Ссылка на картинку"
        required
        onChange={handleLinkChange}
      />
      <span className="dialog__error-label" id="inputImageUrlError"></span>
      <button
        type="submit"
        onClick={handleSubmit}
        form="addCardForm"
        className="dialog__submit"
      >
        Создать
      </button>
    </PopupWithForm>
  );
}
