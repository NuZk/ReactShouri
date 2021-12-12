/* Basic Header html structure */

import React from 'react';
import InputOne from './InputOne'

// Parametrinä lisaaTiedot funktio, sekä tiedot array
function Body({lisaaTiedot, tiedot}) {
  //{/* future hook logic will go here */}

  return (
    <section className='keho'>
        <div>{tiedot.firstName}</div>
        <div className='keskellä'>
            {/* lisääTiedotInput lähettää funktion inputOne tiedostoon. lisaaTiedot kutsuu app.js funktiota */}
            <InputOne lisaaTiedotInput={(data) => lisaaTiedot(data)}/>
        </div>
        <div>Tämä on oikea reuna</div>
    </section>
  );
}

export default Body;