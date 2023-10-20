
import {FaCircle} from'react-icons/fa';
import { useState } from 'react';
import './Array.css';
import './Divisionformat.css';
import './App.css';
import {AiFillPlusCircle} from 'react-icons/ai';
 function Head() {

    const[openform,setOpenform]=useState(false)
    function handleClick(){
        console.log('clicked')
        setOpenform(prevopenform=>!prevopenform)
    }
  return (
    <div>
<div className="head">
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


    </div>
  )
}export default Head
