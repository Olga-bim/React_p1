import React, { useState, useEffect } from 'react';
import Hello from './Hello'; // Предполагаем, что Hello — это компонент
import Home from './Home';   // Предполагаем, что Home — это компонент
import DisplayStudents from './DisplayStudents';

// const App = () => {
//       const [x, setx] = useState(0);
//       const [y, sety] = useState(0);
   
//       const [results, setResults] = useState({ sum: 0, min: 0, minu: 0 });
//       const myStyle = {color: "blue"}
//       const [color, setColor] = useState("black");

//       useEffect(() => {
//         setResults({
//           sum: x + y,
//           min: x - y,
//           minu: y - x,
//         });
//       }, [x, y]);


//      // Функция для генерации случайного цвета
//   const getRandomColor = () => {
//     const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     return randomColor;
//   };

//   // Получение цвета на основе значения
//   const getColor = (value) => {
//     return value > 0 ? getRandomColor() : value < 0 ? getRandomColor() : 'black';
//   };

//   return (
//     <div>
//        <h1 style={{ color: "red" }}>x = {x}</h1>
//       <h1 style={ myStyle }>y = {y}</h1>
//       <h1 style={{ color: getColor(results.sum) }}>x + y: {results.sum}</h1>
//       <h1 style={{ color: getColor(results.min) }}>x - y: {results.min}</h1>
//       <h1 style={{ color: getColor(results.minu) }}>y - x: {results.minu}</h1>

//       <button onClick={() => setx(x + 1)}>x add 1</button>
//       <button onClick={() => sety(y + 1)}>y add 1</button>
//       <button onClick={() => { setx(0); sety(0); }}>Reset</button>

//       <Hello />
//       <Home />
//     </div>
//   );
// };
const App2 = () => {
  const [students, setStudents] = useState([
    { email: "olga@gmail.com", age: 20 },
    { email: "kira@gmail.com", age: 10 },
  ]);

  const [newEmail, setNewEmail] = useState("");
  const [newAge, setNewAge] = useState("");
  const [searchLetter, setSearchLetter] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editAge, setEditAge] = useState("");
  const [showAll, setShowAll] = useState(false); // Состояние для показа всех студентов

  const filteredStudents = students.filter(student => 
    student.email.startsWith(searchLetter)
  );

  const addStudent = () => {
    if (newEmail && newAge) {
      setStudents([...students, { email: newEmail, age: parseInt(newAge, 10) }]);
      setNewEmail(""); // Сбрасываем поле ввода
      setNewAge("");   // Сбрасываем поле ввода
    }
  };

  const delStudent = (email) => {
    setStudents(students.filter(student => student.email !== email));
  };

  const updateStudent = () => {
    setStudents(students.map(student => 
      student.email === editEmail 
        ? { email: editEmail, age: editAge ? parseInt(editAge, 10) : student.age }
        : student
    ));
    setEditEmail(""); // Сбрасываем поле ввода
    setEditAge("");   // Сбрасываем поле ввода
  };

  return (
    <div>
      <h1>Student Management</h1>

      {students.map(stud =><DisplayStudents students ={stud}></DisplayStudents>)}


<hr></hr>
<hr></hr>
<hr></hr>
<hr></hr>

      {/* Поля для добавления студента */}
      <div>
        <label>
          Email: 
          <input 
            type="email" 
            value={newEmail} 
            onChange={(e) => setNewEmail(e.target.value)} 
          />
        </label>
        <label>
          Age: 
          <input 
            type="number" 
            value={newAge} 
            onChange={(e) => setNewAge(e.target.value)} 
          />
        </label>
        <button onClick={addStudent}>Add Student</button>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Hide All Students" : "Show All Students"}
        </button>
      </div>

      {/* Поле для поиска студента */}
      <div>
        <label>
          Search by first letter: 
          <input 
            type="text" 
            value={searchLetter} 
            onChange={(e) => setSearchLetter(e.target.value)} 
          />
        </label>
      </div>

      {/* Список студентов */}
      <div>
        <h2>Student List:</h2>
        <ul>
          {(showAll ? students : filteredStudents).map((student, index) => (
            <li key={index}>
              Email: {student.email}, Age: {student.age}
              <button onClick={() => delStudent(student.email)}>Remove</button>
              <button onClick={() => {
                setEditEmail(student.email);
                setEditAge(student.age);
              }}>Edit</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Форма для редактирования студента */}
      {editEmail && (
        <div>
          <h2>Edit Student</h2>
          <label>
            Email: 
            <input 
              type="email" 
              value={editEmail} 
              onChange={(e) => setEditEmail(e.target.value)} 
            />
          </label>
          <label>
            Age: 
            <input 
              type="number" 
              value={editAge} 
              onChange={(e) => setEditAge(e.target.value)} 
            />
          </label>
          <button onClick={updateStudent}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

// export default App;
export default App2
