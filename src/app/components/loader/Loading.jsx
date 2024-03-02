import "./load.scss";

export const Loading = ({isLoading, imgUrl, imgClass}) => {
  return (
    <div className={isLoading ? "loading__container" : "invisible"}>
        <img className={imgClass} src={imgUrl} alt="" />
    </div>
  )
}
