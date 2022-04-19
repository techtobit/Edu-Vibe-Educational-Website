import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainHomePage from './Components/Home/MainHome/MainHomePage'
import Login from './Components/Auth/LogIn/LogIn';
import SingUp from './Components/Auth/SingUp/SingUp'
import Blog from './Components/Home/Page/Blog/Blog';
import About from './Components/Home/Page/About/About'
import Contact from './Components/Home/Page/Contact/Contact'
import Footer from './Components/Shared/Footer/Footer';
import Navigation from './Components/Shared/Header/Navigation';
import PageNotFound from './Components/Home/Page/404/PageNotFound';
import CourseFutures from './Components/Home/CourseOverview/CourseFutures';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Courses from './Components/CoursesCoponent/Courses';
import DisplayCourse from './Components/Home/HomeServices/DisplayCourse';

const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<MainHomePage></MainHomePage>}></Route>
        <Route path='/home' element={<MainHomePage></MainHomePage>}></Route>
        <Route path='/courses' element={
          <RequireAuth>
            <Courses></Courses>
          </RequireAuth>
        }>
        </Route>
        <Route path='/courses/:aboutCourse' element={
          <CourseFutures></CourseFutures>}></Route>

        <Route path='/addCart' element={
          <RequireAuth>
            <CourseFutures></CourseFutures>
          </RequireAuth>
        }>
        </Route>

        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;