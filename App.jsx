import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calval, setCalVal] = useState("");
  const onButtonClick = (buttonTaxt) => {
    if (buttonTaxt === "C") {
      setCalVal("");
    } else if (buttonTaxt === "=") {
      const result = eval(calval);
      setCalVal(result);
    } else {
      const newDisplayValue = calval + buttonTaxt;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calval}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
