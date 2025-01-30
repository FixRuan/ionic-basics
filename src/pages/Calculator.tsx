import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { arrowBack} from "ionicons/icons";
import "./Calculator.css"
import { useState } from "react";

function Test(){
  const [input, setInput] = useState<string>("");

  const slice = () => {
    setInput(input.slice(0,-1));
  }

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Erro");
    }
  };

  return(
    <IonPage>
      <IonContent>
        <div className="container">
          <div className="calculator-output">
            <span>{input}</span>
          </div>
          <div className="calculator-buttons">
            <IonButton color="danger" shape="round" size="large" className="span-2" onClick={clearInput}>
              C
            </IonButton>

            <IonButton color="dark" shape="round" size="large" onClick={slice}>
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>

            <IonButton color="warning" shape="round" size="large" onClick={() => handleClick("/")}>
              &divide;
            </IonButton>

            <IonButton color="dark" shape="round" size="large" onClick={() => handleClick("7")}>
              7
            </IonButton>

            <IonButton color="dark" shape="round" size="large" onClick={() => handleClick("8")}>
              8
            </IonButton>

            <IonButton color="dark" shape="round" size="large" onClick={() => handleClick("9")}>
              9
            </IonButton>

            <IonButton color="warning" shape="round" size="large" onClick={() => handleClick("*")}>
              *
            </IonButton>

            <IonButton color="dark" shape="round" size="large" onClick={() => handleClick("4")}>
              4
            </IonButton>

            <IonButton color="dark" shape="round" size="large" onClick={() => handleClick("5")}>
              5
            </IonButton>

            <IonButton color="dark" shape="round" size="large" onClick={() => handleClick("6")}>
              6
            </IonButton>

            <IonButton color="warning" shape="round" size="large" onClick={() => handleClick("-")}>
              -
            </IonButton>

            <IonButton color="dark" shape="round" size="large" onClick={() => handleClick("1")}>
              1
            </IonButton>

            <IonButton color="dark" shape="round" size="large" onClick={() => handleClick("2")}>
              2
            </IonButton>

            <IonButton color="dark" shape="round" size="large" onClick={() => handleClick("3")}>
              3
            </IonButton>

            <IonButton color="warning" shape="round" size="large" onClick={() => handleClick("+")}>
              +
            </IonButton>

            <IonButton color="dark" shape="round" size="large" className="span-2" onClick={() => handleClick("0")}>
              0
            </IonButton>

            <IonButton color="dark" shape="round" size="large" onClick={() => handleClick(".")}>
              .
            </IonButton>

            <IonButton color="warning" shape="round" size="large" onClick={calculateResult}>
              =
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Test;
