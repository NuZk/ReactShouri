/* Basic Header html structure */

import React, { useState } from 'react';
import InputOne from './InputOne'
import PelaajaLista from './PelaajaLista';
import Radio from '@mui/material/Radio'

// Parametrinä lisaaTiedot funktio, sekä tiedot array
function Body({lisaaTiedot, tiedot, delTieto}) {
  const [selectedValue, setSelectedValue] = useState("koti")

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }

  //const lisattyPuoli = [...data, {"joukkue": "koti"}]
  const lisaaPuoli = (data) =>{
    const joukkue = selectedValue
    data = {...data, "joukkue" : joukkue}
    lisaaTiedot = lisaaTiedot(data)
  }

  return (
    <section className='keho'>
        <div className='pelaajalista'>
          <h1>Kotijoukkue
            <Radio
            checked={selectedValue === "koti"}
            onChange={handleChange}
            value="koti"
            name="radio-nupikat"
            inputProps={{ 'aria-label':'koti'}}
            />
            </h1>
          <PelaajaLista tiedot={tiedot.filter(tieto => tieto.joukkue === "koti")} delTieto={delTieto}/>
        </div>
        <div className='keskellä'>
            {/* lisääTiedotInput lähettää funktion inputOne tiedostoon. lisaaTiedot kutsuu app.js funktiota */}
            <InputOne lisaaTiedotInput={(data) => lisaaPuoli(data)}/>
        </div>
        <div className='pelaajalista'>
          <h1><Radio
            checked={selectedValue === "vieras"}
            onChange={handleChange}
            value="vieras"
            name="radio-nupikat"
            inputProps={{ 'aria-label':'vieras'}}
            />
            Vierasjoukkue</h1>
            <PelaajaLista tiedot={tiedot.filter(tieto => tieto.joukkue === "vieras")} delTieto={delTieto}/>
        </div>
    </section>
  );
}

export default Body;