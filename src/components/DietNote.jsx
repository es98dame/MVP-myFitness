import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaUtensils } from 'react-icons/fa';
import DietModal from './DietModal.jsx';


const DiteNote = () => {
  const [show, setShow] = useState(false); // modal show

  return(
    <div>
      <section id="mainicon">
        <h2>Calorie Counter</h2>
          <FaUtensils fontSize="10em" className="note" data-target="modal-example" onClick={() => { setShow(!show); }}/>
      </section>
      {show ? <DietModal handleClose={() => { setShow(false); }}/> : ''}
    </div>
  );
};

export default DiteNote;