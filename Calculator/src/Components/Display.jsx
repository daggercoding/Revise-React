import style from "./Display.module.css"
function Display({display})
{
    return(
        <>
        <input className={style.display} type="text" value={display} readOnly></input>
        </>
    )
}
export default Display;