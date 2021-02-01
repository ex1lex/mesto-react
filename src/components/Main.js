import editIconPath from "../images/edit.svg";
import Card from "./Card";
import Api from "../utils/api";
import React from "react";

export default function Main(props) {
  const [user, setUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([Api.getUserInfo(), Api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUser(userInfo);
        setCards(initialCards);
      })
      .catch(Api.catch);
  }, []);

  return (
    <main className="content">
      <section className="profile-container">
        <div className="profile">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src={user.avatar}
              alt="Аватар профиля"
            />
            <button type="button" className="profile__avatar-btn">
              <img
                className="profile__edit-icon"
                src={editIconPath}
                alt="иконка редактирования аватара"
                onClick={props.onEditAvatar}
              />
            </button>
          </div>

          <div className="profile__info">
            <div className="profile__header">
              <h1 className="profile__title">{user.name}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__subtitle">{user.about}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile-container__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <div className="gallery">
        {cards.map((item) => {
          return (
            <Card
              id={item._id}
              name={item.name}
              src={item.link}
              likesCount={item.likes.length}
              onClickCard={props.onCardClick}
            />
          );
        })}
      </div>
    </main>
  );
}
