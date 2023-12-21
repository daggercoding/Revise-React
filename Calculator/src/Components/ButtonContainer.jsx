import style from "./ButtonContainer.module.css"
function ButtonContainer({handlerOnClick})
{
    let button = ["C",1,2,"+",3,4,"-",5,6,"/",7,8,"*",9,0,"="]
    return(
        
        <div className={style.buttonContainer}>
        {button.map((symbol)=>{
            return <button key={symbol} className={style.button} onClick={()=>handlerOnClick(symbol)}>{symbol}</button>
        })}
      </div>
    )

}
export default ButtonContainer;