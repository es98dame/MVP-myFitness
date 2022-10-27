import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaAppleAlt } from 'react-icons/fa';
import RecipeModal from './RecipeModal.jsx';

const RecipeList = () => {
  const [show, setShow] = useState(false); // modal show

  return(
    <div>
      <section id="mainicon">
        <h2>Recipe Book</h2>
          <FaAppleAlt fontSize="10em" className="note" data-target="modal-example" onClick={() => { setShow(!show); }}/>
      </section>
      {show ? <RecipeModal handleClose={() => { setShow(false); }}/> : ''}
    </div>
  );
};

export default RecipeList;