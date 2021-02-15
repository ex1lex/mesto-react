export default function PopupWithForm(props) {
  const openClass = props.isOpen ? "dialog_show" : "";

  const overlayClickHandle = (e) => {
    if (
      e.target.classList.contains("dialog") ||
      e.target.classList.contains("dialog__form") ||
      e.target.classList.contains("dialog__content-card")
    ) {
      props.onClose();
    }
  };

  return (
    <div
      className={`dialog dialog_${props.name} ${openClass}`}
      onClick={overlayClickHandle}
    >
      <div className="dialog__form">
        <form
          action="#"
          className="dialog__content"
          id={props.name}
          name={props.name}
          onSubmit={props.onSubmit}
          noValidate
        >
          <h3 className="dialog__title">{props.title}</h3>
          {props.children}
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
