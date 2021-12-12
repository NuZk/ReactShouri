/* Basic Header html structure */

import React from 'react';
import Pelaaja from './Pelaaja'

// Parametrinä lisaaTiedot funktio, sekä tiedot array
function PelaajaLista({tiedot, delTieto}) {
  return (
        tiedot.map(tiedot => {
            return <Pelaaja key={tiedot.firstName+tiedot.lastName} tieto={tiedot} delTieto={delTieto}/>
        })
  );
}

export default PelaajaLista;