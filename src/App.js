import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import './App.css';
import GetAllUsers from './Screens/GetAllUsers';
import GetAllFaculty from './Components/GetAllFaculty';
import Home from './Screens/Home'
import Faculty from './Screens/Faculty';
import FacultyDashboard from './Screens/FacultyDashboard';
import StudentList from './Components/StudentList';
import StudentList2 from './Components/StudentList2';
import CourseList from './Components/CourseList'
import SubjectList from './Components/SubjectList';
import AssignedFacultyList from './Components/AssignedFacultyList';
import AttendenceList from './Components/AttendenceList'
import AttendenceList2 from './Components/AttendenceList2'
import AdminDashboard from './Screens/AdminDashboard';
import FacultyLogin  from './Screens/FacultyLogin';
import AdminLogin from './Screens/AdminLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/FacultyLogin" component={FacultyLogin} />
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/AdminDashboard" component={AdminDashboard} />
          <Route path="/GetAllUsers" component={GetAllUsers} />
          <Route path="/GetAllFaculty" component={GetAllFaculty} />
          <Route path="/Faculty" component={Faculty} />

          <Route path="/FacultyDashboard" component={FacultyDashboard} />
          <Route path="/StudentList" component={StudentList} />
          <Route path="/StudentList2" component={StudentList2} />
          <Route path="/CourseList" component={CourseList} />
          <Route path="/SubjectList" component={SubjectList} />
          <Route path="/AssignedFacultyList" component={AssignedFacultyList} />
          <Route path="/AttendenceList" component={AttendenceList} />
          <Route path="/AttendenceList2" component={AttendenceList2} />
          
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
