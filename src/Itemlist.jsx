import React from 'react'
import './Form.css';
 function Itemlist() {
  return (
    <div>
<h4>Item List</h4>
<div className="subitem">
<div>Item Name</div>
<div>Qty</div>
<div>Price</div>
<div>Total</div>
</div><br/>


<button type="submit" className="addbutton" ><b>+ Add New Item</b></button>
</div>

    
  )
}
export default Itemlist
