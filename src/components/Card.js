export default function Card(props) {
  const likes = props.likesCount > 0 ? props.likesCount : "";

  const handleClick = () => {
    props.onClickCard({ src: props.src, name: props.name });
  };

  return (
    <>
      <img
        src={props.src}
        alt="картинка галереи"
        className="gallery__img"
        onClick={handleClick}
      />
      <button className="gallery__trash" type="button"></button>
      <div className="gallery__label">
        <h2 className="gallery__title">{props.name}</h2>
        <div>
          <button type="button" className="gallery__like"></button>
          <p className="gallery__like-count">{likes}</p>
        </div>
      </div>
    </>
  );
}
