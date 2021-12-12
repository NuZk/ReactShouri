import React, {useState} from "react";
import './App.css';
import Header from './komponentit/Header';
import Body from './komponentit/Body';

function App() {
  // Tietoa backendistä 
  /*
  const [data, setData] = useState("Perse perse");

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
  */

  // Tiedot on tallennettava, setTiedot on funktio jolla päivitetään
  // muuttuja "tiedot" ylläpitää listaa kaikista tiedoista
  const [tiedot, setTiedot] = useState(["testi1", "testi2", "testi3"]);

  //Lokkaa on tulevaa dataa bodysta
  const lokkaa = (data) =>{
    console.log(data);
    const uudet = {...data}       // Ei suoraan uutta, vaan välivaiheen kautta
    setTiedot([...tiedot, uudet]) // Lisätään kaikki vanhat + uusi tieto
  }

  return(
    <div className="App">
      <Header />
      {/* lokkaa tuo tiedot bodysta (lisaaTiedot on lähetettävä funktio). tiedot on lähetettävä array*/}
      <Body lisaaTiedot={(data) => lokkaa(data)} tiedot={tiedot[tiedot.length-1]}/>
    </div>
  );

}

export default App;
