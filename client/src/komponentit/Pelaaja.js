/* Basic Header html structure */

import React from 'react';
import { Button } from '@material-ui/core'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

// Parametrinä lisaaTiedot funktio, sekä tiedot array
function Pelaaja({tieto, delTieto}) {
  //{/* future hook logic will go here */}

  return (
    <div className='pelaaja'>
        <Button className='pelaajabutton' variant="outlined">{tieto.firstName} {tieto.lastName} {tieto.pelinumero}        
        </Button>
        <IconButton className='deleteicon' onClick={() => {delTieto(tieto.firstName+tieto.lastName)}} aria-label='delete'>
                <DeleteIcon />
            </IconButton>
    </div>
  );
}

export default Pelaaja;