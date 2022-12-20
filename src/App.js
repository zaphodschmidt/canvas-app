import Axios from 'axios'
import React, {useState} from "react"
import './App.css';

function App() {
  const [course,setCourse] = useState("")


  const getCourses = () => {
    Axios.get('https://canvas.colorado.edu/api/v1/courses/85828')
      .then((response)=> {
        console.log(response)
        setCourse(response.data)
      })
  }

  return (
    <div className="App">
      <button onClick={getCourses}>Touch</button> 
      {course}
    </div>
  );
}

export default App;
