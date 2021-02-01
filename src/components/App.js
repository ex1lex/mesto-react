import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const [isOpenEditAvatar, setOpenEditAvatar] = React.useState(false);
  const [isOpenEditProfile, setOpenEditProfile] = React.useState(false);
  const [isOpenAddPlace, setOpenAddPlace] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setOpenEditAvatar(true);
  };

  const handleEditProfileClick = () => {
    setOpenEditProfile(true);
  };

  const handleAddPlaceClick = () => {
    setOpenAddPlace(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setOpenEditAvatar(false);
    setOpenEditProfile(false);
    setOpenAddPlace(false);
    setSelectedCard({});
  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isOpenEditAvatar}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          className="dialog__input"
          name="inputNewImageUrl"
          placeholder="Ссылка на новый аватар"
          required
        />
        <span className="dialog__error-label" id="inputNewImageUrlError"></span>
        <button type="submit" form="editAvatarForm" className="dialog__submit">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        btnText="Сохранить"
        isOpen={isOpenEditProfile}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="dialog__input"
          name="inputName"
          required
          minLength="2"
          maxLength="40"
          placeholder="Имя"
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
        />
        <span className="dialog__error-label" id="inputAboutError"></span>
        <button type="submit" form="editProfileForm" className="dialog__submit">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        btnText="Создать"
        isOpen={isOpenAddPlace}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="dialog__input"
          name="inputTitle"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="dialog__error-label" id="inputTitleError"></span>
        <input
          type="url"
          className="dialog__input"
          name="inputImageUrl"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="dialog__error-label" id="inputImageUrlError"></span>
        <button type="submit" form="addCardForm" className="dialog__submit">
          Создать
        </button>
      </PopupWithForm>

      <ImagePopup
        name="detail-card"
        selectedCard={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
