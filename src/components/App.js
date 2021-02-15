import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import Api from "../utils/api";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
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

  const handleUpdateAvatar = (newAvatar) => {
    Api.setUserAvatar(newAvatar)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch(Api.catch);
  };

  const handleUpdateUser = (newInfo) => {
    Api.setUserInfo(newInfo)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch(Api.catch);
  };

  const handleCardDelete = (card) => {
    Api.deleteCard(card._id)
      .then((message) => {
        const newCards = cards.filter((item) => item._id !== card._id);
        setCards(newCards);
      })
      .catch(Api.catch);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);

    if (isLiked) {
      Api.deleteLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((item) =>
            item._id === card._id ? newCard : item
          );
          setCards(newCards);
        })
        .catch(Api.catch);
    } else {
      Api.setLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((item) =>
            item._id === card._id ? newCard : item
          );
          setCards(newCards);
        })
        .catch(Api.catch);
    }
  };

  const handleAddPlace = (card) => {
    Api.addNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(Api.catch);
  };

  React.useEffect(() => {
    Promise.all([Api.getUserInfo(), Api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setCurrentUser(userInfo);
        setCards(initialCards);
      })
      .catch(Api.catch);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <EditProfilePopup
        isOpen={isOpenEditProfile}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <EditAvatarPopup
        isOpen={isOpenEditAvatar}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <AddPlacePopup
        isOpen={isOpenAddPlace}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlace}
      />

      <ImagePopup
        name="detail-card"
        selectedCard={selectedCard}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
