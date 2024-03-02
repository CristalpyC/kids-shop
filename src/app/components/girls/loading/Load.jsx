import "./load.scss";

export const Load = ({isLoading, url}) => {
  return (
    <div className={isLoading ? "load__container" : "invisible"}>
        <img src={url} alt="" />
    </div>
  )
}
