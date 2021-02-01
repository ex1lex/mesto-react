export default function PopupWithForm(props) {
  const openClass = props.isOpen ? "dialog_show" : "";

  return (
    <div
      className={`dialog dialog_${props.name} ${openClass}`}
      onClick={props.onClose}
    >
      <div className="dialog__form" onClick={props.onClose}>
        <form
          action="#"
          className="dialog__content"
          id={props.name}
          name={props.name}
          noValidate
        >
          <h3 className="dialog__title">{props.title}</h3>
          {props.children}
          <button type="submit" form={props.name} className="dialog__submit">
            {props.btnText}
          </button>
        </form>
        <button
          type="submit"
          className="dialog__close-button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}
