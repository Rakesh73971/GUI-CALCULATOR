import styles from "./ButtonNumbers.module.css"

function ButtonNumbers({onButtonClick}){
    let numbers = ['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.']
    return (
        <div className={styles.ButtonContainer}>
            {numbers.map(number => <button onClick={()=>onButtonClick(number)}
             className={styles.Button} key={number}>
                {number}</button>)}
        </div>
    )
}

export default ButtonNumbers;