import { IonButton, IonContent,IonInput} from '@ionic/react';
import './Home.css';

import {useState} from "react";

function Home(){
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeName(e:any){
    setName(e.target.value);
  }

  function handleChangePassword(e:any){
    setPassword(e.target.value);
  }

  function clearForm(){
    setName("");
    setPassword("");
  }

  console.log(name);
  console.log(password);

  return (
      <IonContent>
        <div className="container">
          <IonInput class="inp" placeholder='Name' onIonChange={handleChangeName} value={name}/>
          <IonInput type="password" placeholder='Password' onIonChange={handleChangePassword} value={password}/>

          <div className='buttonContainer'>
            <IonButton className='btn' onClick={clearForm}>limpar</IonButton>
            <IonButton>ok</IonButton>
          </div>
        </div>
      </IonContent >
  );
};

export default Home;
