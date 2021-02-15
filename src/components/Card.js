import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";

export default function Card(props) {
  const user = React.useContext(CurrentUserContext);

  const isOwn = props.item.owner._id === user._id;

  const isLike = props.item.likes.some((item) => item._id === user._id);

  const likes = props.item.likes.length > 0 ? props.item.likes.length : "";

  const handleClick = () => {
    props.onClickCard({ src: props.item.link, name: props.item.name });
  };

  const handleLikeClick = () => {
    props.onCardLike(props.item);
  };

  const handleTrashClick = () => {
    props.onCardDelete(props.item);
  };

  return (
    <div className="gallery__item">
      <img
        src={props.item.link}
        alt="картинка галереи"
        className="gallery__img"
        onClick={handleClick}
      />
      {isOwn ? (
        <button
          className="gallery__trash"
          type="button"
          onClick={handleTrashClick}
        ></button>
      ) : (
        ""
      )}

      <div className="gallery__label">
        <h2 className="gallery__title">{props.item.name}</h2>
        <div>
          <button
            type="button"
            className={`gallery__like ${isLike ? "gallery__like_active" : ""}`}
            onClick={handleLikeClick}
          ></button>
          <p className="gallery__like-count">{likes}</p>
        </div>
      </div>
    </div>
  );
}
