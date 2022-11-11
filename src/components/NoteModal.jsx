import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import moment from 'moment';
import {getDailynotes, postDailynotes} from '../helpers.js';
import Previousnotes from './Previousnotes.jsx';

const NoteModal = ({handleClose}) => {

  const [mark, setMark] = useState([]); // date list
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [notelist, setNotelist] = useState([]);


  useEffect(()=>{
    getDailynotes()
    .then((res) => {
      const datelist = [];
      res.map((data)=> datelist.push(moment(data.date).utc().format("YYYY-MM-DD")));
      setMark(datelist);
      setNotelist(res);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);

  const submitClick = (e) => {
    e.preventDefault();
    let dataObj = {date: date , description : description};
    postDailynotes(dataObj)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

  const descriptionChange = (e) => {
   setDescription(e.target.value);
  }

  const dateChange = (e) => {
    setDate(e.target.value);
   }

  return(
    <dialog open>
    <article>
    <a
      aria-label="Close"
      className="close"
      data-target="modal-example"
      onClick={() => {handleClose();}}>
    </a>
    <h5>“A little progress each day adds up to big results”</h5>
    <main className="container">
      <div>
        <Calendar onChange={onChange} value={value} locale="en-EN"
        tileContent={({ date, view }) => {
        if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
        return (
                <div className="dot"></div>
          );
          }
        }}/>
        {/* <div classNameName="text-gray-500 mt-4">
           {moment(value).format("YYYY-MM-DD")}
         </div> */}
      </div>

      <section id="accordions">
        <h2>Previous note</h2>
      {notelist.map((data, index)=> {
        if(moment(data.date).utc().format("YYYY-MM-DD") === moment(value).utc().format("YYYY-MM-DD") )
        return (
          <details key={index}>
            <summary>{moment(data.date).utc().format("YYYY-MM-DD")}</summary>
            <p id="just-line-break">{data.description}</p>
          </details>
        );
       })}
      </section>

        {/* {notelist.length === 0 ? '' : <Previousnotes notelist={notelist}/>} */}

      <div>
        <form>
          {/* <label for="search">Search</label>
          <input type="search" id="search" name="search" placeholder="Search"> */}
          <h2>Add new note</h2>
          <label>Type</label>
          <select id="select" name="select">
            <option value="" selected>Select…</option>
            <option value="weight">Weight</option>
            <option value="cardio">Cardio</option>
          </select>

          <label>Note</label>
          <textarea id="description" name="text" placeholder="Text" onChange={descriptionChange}/>

          {/* <label>Strength
            <input type="range" min="0" max="100" value="50" id="range" name="range"/>
          </label> */}

          <div className="grid">

            <label >Date
              <input type="date" id="date" name="date" onChange={dateChange}/>
            </label>

            <label>Start Time
              <input type="time" id="time" name="time"/>
            </label>

            <label>End Time
              <input type="time" id="time" name="time"/>
            </label>

          </div>

          <input type="reset" value="Reset" />
          <input type="submit" value="Submit" onClick={submitClick}/>

        </form>
      </div>

    </main>
  </article>
</dialog>
  );
};

export default NoteModal;