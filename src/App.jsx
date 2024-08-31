import { useState, useEffect } from "react";
import { boolean, count, evaluate } from "mathjs";
import "./App.css";


function App() {

  function Calculator() {

    const [valuePicked, setValue] = useState('');
    const [history, setHistory] = useState([]);
    let result = "";

    const clickHandler = (e) =>{
      let value = e.target.value
      setValue(valuePicked.concat(value))
    }

    const clearDisplay = () => {
      setValue('')
    }

    const equal = () => {
      try {
        result = String(parseFloat(evaluate(valuePicked)).toFixed(3));
        setValue(result);
        setHistory([...history, valuePicked + " = " + result]);
        
      } catch (error) {
        setValue("Sintax Error");
      }
    }
        

    // ****************************** Reset Historial Button
    function reset(){
      setHistory([])
    }  
    

    return (
      <div className="calculatorBody">

        <input type="text" placeholder="0" className="display" value={valuePicked}/>

        <div className="numbers">         
  
          <input type="button" className="number1" onClick={clickHandler} value="1"/>
          <input type="button" className="number2" onClick={clickHandler} value="2"/>
          <input type="button" className="number3" onClick={clickHandler} value="3"/>
          <input type="button" className="number4" onClick={clickHandler} value="4"/>
          <input type="button" className="number5" onClick={clickHandler} value="5"/>
          <input type="button" className="number6" onClick={clickHandler} value="6"/>
          <input type="button" className="number7" onClick={clickHandler} value="7"/>
          <input type="button" className="number8" onClick={clickHandler} value="8"/>
          <input type="button" className="number9" onClick={clickHandler} value="9"/>
          <input type="button" className="number0" onClick={clickHandler} value="0"/>


          <input type="button" className="sum" onClick={clickHandler} value="+"/>
          <input type="button" className="difference" onClick={clickHandler} value="-"/>
          <input type="button" className="multiplication" onClick={clickHandler} value="*"/>
          <input type="button" className="division" onClick={clickHandler} value="/"/>
          <input type="button" className="module" onClick={clickHandler} value="%"/>
          <input type="button" className="dot" onClick={clickHandler} value="."/>
          <input type="button" className="equal" onClick={equal} value="="/>
          <input type="button" className="openParenthesis" onClick={clickHandler} value="("/>
          <input type="button" className="closeParenthesis" onClick={clickHandler} value=")"/>
          <input type="button" className="reset" onClick={clearDisplay} value="C"/>

        </div>

        <div className="historialSection">
          <div className="resetButtonSection">
            <button className="resetHistorialButton" onClick={reset}>Reset</button>
          </div>
          <div className="history">
            <h3 className="historyTitle" >Operations Historial</h3>
            <ul>
              {history.map((operation, index) => (
                <li><b>{`Op${index+1}: `}</b>{`${operation}`}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Calculator />
    </>
  );
}

export default App;
