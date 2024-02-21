import "./actionsStyle.scss";

export const ActionsForm = () => {
  return (
    <div className='actions__container'>
        <ul>
            <li>
                <span>→</span>POST
            </li>
            <li>
                <span>→</span>PUT
            </li>
            <li>
                <span>→</span>DELETE
            </li>
        </ul>
    </div>
  )
}
