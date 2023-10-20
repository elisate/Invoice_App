
import Beginer from "./beginer.jsx";
import Invoice from "./Invoice.jsx";
import Formpaid1 from "./Formpaid1.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Callform from "./Callform.jsx";
import Head from "./Head.jsx";
function App() {
  return (
      <div className="bigcontainer">
        {/* <Head/> */}
    <div><Beginer/></div> 
      
       <Routes>
 

<Route path="/" element={<Invoice/>
}/>
<Route path='singlepage' element ={<Formpaid1/>}/>

 <Route path='goback'  element={<Invoice/>}/>  
 <Route path='back' element={<Invoice/>}/>  

</Routes>
  
     </div>
  )
}

export default App
