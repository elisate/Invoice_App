import { useState } from 'react'
import './App.css';
import './Array.css';

import Invoicelist from './Invoicelist';
import { Link } from 'react-router-dom';

function Callform() {

  const [code, setCode] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  let [id,setId] = useState(String(Invoicelist.length+1));

  const Add_item  = (e) => {
    e.preventDefault();
    const item = {id,code,date,name,amount,status};
    
  if (item==="") {
    return(
      <div>
        <h1>add all filds</h1>
      </div>
    )
  }else{
    setId = String(Invoicelist.length+1);
    Invoicelist.push(item);

    
    Invoicelist.push(item);
     console.log(Invoicelist);
    localStorage.setItem("data",Invoicelist);
   
    alert('Invoice added successfull');
  }
  
  }
  
  

  return (
     
    <div className="big_form">
      <form onSubmit={Add_item}>
    <div>
      <h6 style={{color:'blueviolet'}}>Bill form</h6>
        <h6>street Address</h6>
        <div>
   <div>
        <input type="text" 
        
        className="text_type"
        ></input>  </div>

    </div>
      </div><br></br>

      <div>
      <div>
 <div className="f2">
        <div>
            City<br></br>
            <input type="text" 

            
             className="text_type2" 
            
            
            ></input>
        </div>
        <div>
            Post Code<br></br>
            <input type="text"   className="text_type2" 

value={code}
onChange={(e) => setCode(e.target.value)}
            
            
            
            
        ></input>

        </div>
        <div>
        country<br></br>
        <input type="text" name="United kingdom"  className="text_type2" >
        </input>    
        </div>
    
    </div>
    </div>
      </div>

      <div>
      <h6 style={{color:'blueviolet'}}>Bill to</h6>
        Client 's name<br/> 
      

        <input type="text" 
        
        className="text_type"
        value={name}
        onChange={(e) => setName(e.target.value)}

        ></input>


        Client 's Email<br/> 
        <input type="text" placeholder="e.g. email@example.com" className="text_type3"/><br/>
        Streat Address<br/> 
        <div>
   <div>
        <input type="text" 
        
        className="text_type"
        ></input>  </div>

    </div>
      </div><br/>

     

      <div>
      <div>
 <div className="f2">
        <div>
            City<br></br>
            <input type="text" 

            
             className="text_type2" 
            
            
            ></input>
        </div>
        <div>
            Post Code<br></br>
            <input type="text"   className="text_type2" 

            
        ></input>

        </div>
        <div>
        country<br></br>
            <input type="text" name="United kingdom"  className="text_type2" >
                </input>    
        </div>
    
    </div>
    </div>
      </div><br/>

      <div>
        <h6>Invoice Date</h6>
      <input type="date" id="invoiceDate" className="text_type"
        
        name="date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        
        />
        
   
      </div>

      <div>
    status
        <select
    id="status"
    className="text_type"
    name="status"

    value={status}
    onChange={(e) => setStatus(e.target.value)}
   
  >
     
    <option value="paid" >paid</option> 
    <option value="pending" >pending</option> 
    <option value="draft" >draft</option>
  
  </select>
        </div> <br/>
        <div>
          Amount<br/>
    <input type="text" placeholder="e.g. Graphic Design Service" className="text_type3"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
/>
        </div><br/>
        <div>
        <div>
<h4>Item List</h4>
<div className="subitem">
<div>Item Name</div>
<div>Qty</div>
<div>Price</div>
<div>Total</div>
</div><br/>


<button type="submit" className="addbutton"
><b>+ Add New Item</b></button>
</div>
        </div><br></br>
      <div>
      <div className="Formend">
      

<Link to='/back'><div> <button className='discard'>Discard</button></div></Link>

<div className="draftsend">
<div> 
<button type="submit"className="draft" >Save As Draft</button>
</div>
<div> 
<button type="submit" className="save"
onSubmit={Add_item }
>Save & Send</button>
</div></div>

    </div>


      </div>
      <div></div>
    
      </form>
    </div>
   
  )
}

export default Callform
