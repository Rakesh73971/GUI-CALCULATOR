import Display from './components/Display'
import ButtonNumbers from './components/ButtonNumbers'
import './App.css'
import { useState } from 'react'

function App() {
  const [calVal,setCalVal] = useState("")
  const onButtonClick = (buttontext) =>{
    if (buttontext == "C"){
      setCalVal('')
    }else if(buttontext == "="){
      let result = eval(calVal)
      setCalVal(result)
    }else{
      let DisplaynewVal = calVal + buttontext;
      setCalVal(DisplaynewVal)
    }
  }

  return (
    <div className="calculator">
      <Display displayVal = {calVal} />
      <ButtonNumbers onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
