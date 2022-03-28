import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/includes/Header'
import AddStudent from './components/student/AddStudent';
import ListStudents from './components/student/ListStudents';
import UpdateStudent from './components/student/UpdateStudent'
import StudentDetails from './components/student/StudentDetails';

function App() {
  return (
    <Router> 
      <Header/>
      <div className="container">
          <Routes> 
              <Route path="/students/create" exact element={<AddStudent/>} />
              <Route path='/' exact element={<ListStudents/>} />
              <Route path='/students' exact element={<ListStudents/>} />
              <Route path='/students/:id/edit' exact element={<UpdateStudent/>}/>
              <Route path='/students/:id' exact element={<StudentDetails/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
