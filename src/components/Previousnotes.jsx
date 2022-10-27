import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const Previousnotes = ({notelist}) => {

  return(
    <section id="accordions">
        <h2>Previous note</h2>
    {notelist.map((data, index)=> {
        return (
          <details>
            <summary>{data.date}</summary>
          </details>
        );

    })}
    </section>

  );

};

export default Previousnotes;