import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/LogIn/LogIn';
import SingUp from './Components/Auth/SingUp/SingUp'
import HomeBanner from './Components/Home/HomeBanner/HomeBanner';
import CourseServices from './Components/Home/HomeServices/CourseServices';
import SingleCourse from './Components/Home/HomeServices/SingleCourseData/SingleCourse';
import Blog from './Components/Home/Page/Blog/Blog';
import About from './Components/Home/Page/About/About'
import Contact from './Components/Home/Page/Contact/Contact'
import Footer from './Components/Shared/Footer/Footer';
import Navigation from './Components/Shared/Header/Navigation';

const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<HomeBanner></HomeBanner>}></Route>
        <Route path='/home' element={<HomeBanner></HomeBanner>}></Route>
        <Route path='/services' element={<CourseServices></CourseServices>}>
        </Route>
        <Route path='/services/:aboutCourse' element={<SingleCourse></SingleCourse>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;