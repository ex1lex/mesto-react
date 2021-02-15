import editIconPath from "../images/edit.svg";
import Card from "./Card";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const user = React.useContext(CurrentUserContext);

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
            <button
              type="button"
              className="profile__avatar-btn"
              onClick={props.onEditAvatar}
            >
              <img
                className="profile__edit-icon"
                src={editIconPath}
                alt="иконка редактирования аватара"
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
        {props.cards.map((item) => {
          return (
            <Card
              key={item._id}
              item={item}
              onClickCard={props.onCardClick}
              onCardDelete={props.onCardDelete}
              onCardLike={props.onCardLike}
            />
          );
        })}
      </div>
    </main>
  );
}
