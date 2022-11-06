import React from 'react';
import {useState} from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default function Menu({jobs}){
  const [choice, setChoice] = useState(0);
  const { company, dates, duties, title } = jobs[choice];

  return(
    <>
    <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setChoice(index)}
                className={`job-btn ${index === choice && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
    </div>

   <div className='job-info'>
   <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
   </div>
   </>
  )
};