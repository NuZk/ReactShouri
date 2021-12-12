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
  const [tiedot, setTiedot] = useState([{"firstName" : "terve", "lastName" : "sukunimi", "pelinumero" : "2", "joukkue" : "koti"}]);

  //Lokkaa on tulevaa dataa bodysta
  const lokkaa = (data) =>{
    const uudet = {...data}       // Ei suoraan uutta, vaan välivaiheen kautta
    setTiedot([...tiedot, uudet]) // Lisätään kaikki vanhat + uusi tieto
  }

  const deleteTieto = (id) => {
    //console.log("delete", id)
    setTiedot(tiedot.filter((tieto) => tieto.firstName+tieto.lastName !== id))
  }

  return(
    <div className="App">
      <Header />
      {/* lokkaa tuo tiedot bodysta (lisaaTiedot on lähetettävä funktio). tiedot on lähetettävä array*/}
      <Body lisaaTiedot={(data) => lokkaa(data)} tiedot={tiedot} delTieto={(data) => deleteTieto(data)}/>
    </div>
  );

}

export default App;
