

import{RiArrowGoBackFill} from 'react-icons/ri'
import {FaCircle} from'react-icons/fa';
import React, { useState } from 'react';
import './Formpaid.css';
import { Link } from 'react-router-dom';
 function Formpaid1() {
    
  return (

    
        
<div className='endpaid'>
 <Link to='/goback'><div><RiArrowGoBackFill/> Go Back<br/></div></Link> 
    <br></br>
    <div className="holderel1">
    <div className="subhold">
    
 <div>
<button type="submit" className='paid'><FaCircle/>paid</button>
 </div>
 <div className='subhold1'>

 <div><button type="reset" className='edit'>Edit</button></div>
 <div><button type="reset" className='delete'>Delete</button></div>
 <div><button type="submit" className='mark'>Mark as Paid</button></div>
 </div></div>

</div><br></br>
<div className='hol2_hol3'>
<div className='holder2'>
   <div className='wordh1'>
<div>
<b>RT3080
</b><br/>
Re-branding
</div>

<div className='word1'>
106 Kendell Street,<br/>
Sharrington,<br/>
NR24 5WQ, <br/>
United Kingdom
<br/>
</div>
</div>
 <br/>
<div className='word'>
<div className='wordh2'>
     
    Invoice Date<br/>
    <b>2021-8-18</b><br></br>
    Payment Due<br/>
   <b>2021-8-19</b>
     </div>
    <div>
  Bill To<br/>
<b>Jensen Huang</b><br/>
19 Union Terrace,<br/>
London,<br/>
E1 3EZ,
    </div>
    <div>
    Sent to<br/>
    <b>jensenh@mail.com</b>
    </div>
    </div>
    
<br></br>
<div className='w3'>
<div className='wordh3'>
<div className='wh1'>
    <div>Item Name</div><div>QTY</div><div>Price</div><div>Total</div>

</div><br></br>
<div className='wh2'>
    <div><b>Brand Guidelines</b></div><div><b>1</b></div><div><b>£ 1800.9</b></div>
    <div><b>£ 1800.9</b></div>
</div>
</div>
<div className='wend'>
<div>Amount Due</div><div className='numwend'><b>£ 1800.9</b></div>
</div>
</div>
</div>
    </div></div>
    
  )
}
export default Formpaid1;
