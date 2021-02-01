import editIconPath from "../images/edit.svg";

export default function Main(props) {
  return (
    <main className="content">
      <section className="profile-container">
        <div className="profile">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src={props.user.avatar}
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
              <h1 className="profile__title">{props.user.name}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__subtitle">{props.user.about}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile-container__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <div className="gallery">{props.cards}</div>
    </main>
  );
}
