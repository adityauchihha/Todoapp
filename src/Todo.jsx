import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import {db} from './firebase'
   function Todo(){
      const [pyt, setPyt] = useState('');
      const [tasks,setTasks]=useState([]);
      function handleChange(e){
        setPyt(e.target.value);
      }
    const handleSubmit=async(e)=>{
   
      setTasks(t=>[...t, pyt]);
      await addDoc(collection(db,"Todo"),{
                things:pyt,
                done:false
              });
       
       
      
      
          
        
       
       
      } 
  





      
    return(<>
      <div className="add-lists">
        <input type="text" value={pyt} placeholder="Add a todo" onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className='display'>
          <ul>
            {tasks.map((task,index)=>
          <li key={index}>{task}</li>
          )}
          </ul>
      </div>
      </>
    );
}
export default Todo