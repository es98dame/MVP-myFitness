import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaDumbbell } from 'react-icons/fa';
import NoteModal from './NoteModal.jsx';


const DailyNote = () => {
  const [show, setShow] = useState(false); // modal show

  return(
    <div>
      <section id="mainicon">
        <h2>Workout Journal</h2>
          <FaDumbbell fontSize="10em" className="note" data-target="modal-example" onClick={() => { setShow(!show); }}/>
      </section>
      {show ? <NoteModal handleClose={() => { setShow(false); }}/> : ''}
    </div>
  );
};

export default DailyNote;