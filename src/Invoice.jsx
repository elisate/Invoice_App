import {FaCircle} from'react-icons/fa';
import { useState } from 'react';
import './Array.css';
import './Divisionformat.css';
import './App.css';
// import './Image.jsx';
// import Form from './Form';
// import F from './F.jsx';
import Callform from './Callform.jsx'
import {AiFillPlusCircle} from 'react-icons/ai';
import './Image2.css';
import './Image.css';
import './Line&image.css';
import Invoicelist from './Invoicelist';
import Head from './Head';
import { Link } from 'react-router-dom';


 function Invoice() 
 { 
  const[openform,setOpenform]=useState(false)
  function handleClick(){
      console.log('clicked')
      setOpenform(prevopenform=>!prevopenform)
  }

  return (
    <div className="container">
  
      <div className="HEADO">
          <div>
          <b>Invoices</b><br/>
        <p style={{color:'blueviolet'}}>There are 6 invoices</p>
        </div>
        <div className="subhead2">Filter by status 
        <select id="selectOption"  style={{color:'indigo'}}>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div>
            <button type="submit" onClick={handleClick} className="subhead">
              <AiFillPlusCircle className="icon"/>&nbsp;
        New Invoice</button>
        </div></div><br></br><br></br>
        <div className="center">
        {openform ?<Callform/>:
    <div >
      {Invoicelist.map((item)=>(
            
            <div className="array" key={item.id}>
      <h3 className="bold">{item.code}</h3>
          <p>{item.date}</p>
          <p>{item.name}</p>
          <h3>{item.amount}</h3>
          <div className='status-button'>
           <button className={`text ${item.status.toLowerCase()}`}
         ><FaCircle/>
         {item.status}
          </button>
          </div>
          <Link to='/singlepage'>
          <button style={{
            background:'#1E2139',
            color:'inherit',
            border:'none',
            padding:'0.6rem 0.4rem ',
            borderRadius:'5px',
            cursor:'pointer',
            marginLeft:'-3rem'
          }}>{'>'} </button>
          </Link>
            </div>
          ))}</div>}</div>
     
    </div>
  )
}
export default Invoice
