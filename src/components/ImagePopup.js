export default function PopupWithForm(props) {
  const openClass =
    props.selectedCard.src && props.selectedCard.name ? "dialog_show" : "";

  return (
    <div
      className={`dialog dialog_${props.name} ${openClass}`}
      onClick={props.onClose}
    >
      <div className="dialog__content-card" onClick={props.onClose}>
        <img
          src={props.selectedCard.src}
          alt={props.selectedCard.name}
          className="dialog__img-card"
        />
        <h2 className="dialog__title-card">{props.selectedCard.name}</h2>
        <button
          type="submit"
          className="dialog__close-button dialog__close-button_card"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}
