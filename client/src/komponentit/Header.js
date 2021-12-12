/* Basic Header html structure */

import React from 'react';

function Header() {
  //{/* future hook logic will go here */}
  
  return (
    <header className='header'>
    <div className="logo">Logo</div>
    <ul className="links">
      <li onClick={() => {window.open("https://www.youtube.com/channel/UCc_FVzn5_ZLVo_Ye2_qN1og/featured")}} className="link-item">home</li>
      <li className="link-item">about</li>
      <li className="link-item">join</li>
    </ul>
    </header>
  );
}

export default Header;
