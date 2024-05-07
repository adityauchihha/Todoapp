/* import React,{useState, useEffect} from 'react'
import { collection, addDoc, getDocs} from "firebase/firestore"; 
import {db} from './firebase'
function Todo() {
  const [input,setInput]=useState();
  const [tasks, setTasks] = useState([]);

//Read the document
useEffect(()=>{
  const getTasks=async () =>{
  const querySnapshot = await getDocs(collection(db, "Kam"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  const dete=doc.data();
  const idi=doc.id;
  setTasks(t=>[...t,{id:idi, ...dete}]);
  //setTasks(t=>[...t,{id:doc.id,task:doc.data()}]);
});
  }
  
},[])

    function handleChange(e){
      setInput(e.target.value);
    }
    const handleClick = async()=>{
      if(input.trim()!==""){
        

// Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "Kam"), {
          kam_list:input,
        });
      

        //setTasks(t=>[...t, input]);
        setInput("");
      }
     
    };
  return (
    <div className='todo'>
        <div className="input">
          <input value={input} placeholder='Enter a task' onChange={handleChange} />
          <button onClick={handleClick}>Add Task</button>
        </div>
        <div className="display_task">
          {tasks.map((task)=>
        <li key={task.id}>{task}</li>
        )}
        </div>
    </div>
  )
}

export default Todo */
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { db } from './firebase';

function Todo() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  // Read the document
  useEffect(() => {
    const getTasks = async () => {
      const querySnapshot = await getDocs(collection(db, "Kam"));
      const fetchedTasks = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        fetchedTasks.push({ id, ...data });
      });
      setTasks(fetchedTasks);
    };
  
    getTasks();
  }, []);

  function handleChange(e) {
    setInput(e.target.value);
  }

  const handleClick = async () => {
    if (input.trim() !== '') {
      // Add a new document with a generated id.
      await addDoc(collection(db, "Kam"), {
        kam_list: input,
      });

      setInput('');
    }
  };

  const handleDelete = async (id) => {
  const delRef= doc(db,"Kam",id)
  deleteDoc(delRef)
  .then(()=>{
    console.log("The document has been deleted.")
  })
  .catch(error => {
    console.log(error);
})

};


  return (
    <div className='todo'>
      <div className="input">
        <input value={input} placeholder='Enter a task' onChange={handleChange} />
        <button onClick={handleClick}>Add Task</button>
      </div>
      <div className="display_task">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.kam_list} <button onClick={() => handleDelete(task.id)}>Delete</button></li>
            
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo;
