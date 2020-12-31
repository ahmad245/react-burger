import React from 'react'
import Navbar from '../Navbar/Navbar';

const layout=(props)=>(
 <React.Fragment>
     <Navbar/>
     <main>
         {props.children}
     </main>
 </React.Fragment>
);

export default layout;