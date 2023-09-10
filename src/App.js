import { useState } from 'react';
import './App.css';


const courses = [
  {
    id: 1,
    name: "Html, Css",
  },
  {
    id: 2,
    name: "ReactJs",
  },
  {
    id: 3,
    name: "PHP",
  },
]

function App() {

  //input
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  // function handleSubmit() {
  //   console.log(
  //     {
  //       name: name,
  //       email: email
  //     }
  //   );
  // }


  const [check, setCheck] = useState(1);


  return (

    <div className="App">
        {
          courses.map(course => (
            <div key={course.id}>
              <input 
                type='radio'
                checked={check === course.id}
                onChange={() => setCheck(course.id)}
              />
              {course.name}
            </div>
          ))
        }
    </div>
  );

}

export default App;
