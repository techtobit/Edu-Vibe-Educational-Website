import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/LogIn/LogIn';
import SingUp from './Components/Auth/SingUp/SingUp'
import HomeBanner from './Components/Home/HomeBanner/HomeBanner';
import CourseServices from './Components/Home/HomeServices/CourseServices';
import SingleCourse from './Components/Home/HomeServices/SingleCourseData/SingleCourse';
import Footer from './Components/Shared/Footer/Footer';
import Navigation from './Components/Shared/Header/Navigation';
// import Footer from './Components/Shared/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<HomeBanner></HomeBanner>}></Route>
        <Route path='/home' element={<HomeBanner></HomeBanner>}></Route>
        <Route path='/services' element={<CourseServices></CourseServices>}></Route>
        <Route path='/services/:aboutCourse' element={<SingleCourse></SingleCourse>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
      </Routes>
      <CourseServices></CourseServices>
      <Footer></Footer>
    </div>
  );
};

export default App;