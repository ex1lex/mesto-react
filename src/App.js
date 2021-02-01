import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";
import Card from "./components/Card";
import Api from "./utils/Api";
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

  const [user, setUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([Api.getUserInfo(), Api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUser(userInfo);

        const cardList = initialCards.map((item) => {
          return (
            <div className="gallery__item" key={item._id}>
              <Card
                name={item.name}
                src={item.link}
                likesCount={item.likes.length}
                onClickCard={handleCardClick}
              />
            </div>
          );
        });
        setCards(cardList);
      })
      .catch(Api.catch);
  });

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        cards={cards}
        user={user}
      />
      <Footer />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        btnText="Сохранить"
        isOpen={isOpenEditAvatar}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        btnText="Сохранить"
        isOpen={isOpenEditProfile}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="add-card"
        title="Новое место"
        btnText="Создать"
        isOpen={isOpenAddPlace}
        onClose={closeAllPopups}
      />

      <ImagePopup
        name="detail-card"
        selectedCard={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
