import React from 'react';
import './HomeCatagory.css'
import webdev from '../../Assets/Top-catagory/webdev.png'
import gamedev from '../../Assets/Top-catagory/gamedev.png'
import mobiledev from '../../Assets/Top-catagory/mobiledev.png'
import clouddev from '../../Assets/Top-catagory/clouddev.png'

const HomeCatagory = () => {
  return (
    <>
      <div className="category-head grid py-16 pl-20">
        <p className="head-o text-blue-500 font-semibold">TOP CATEGORIES</p>
        <h2 className="head-tile text-4xl font-bold">Browse Popular Category</h2>
      </div>
      <div className='category-section text-center 
  grid grid-cols-4 justify-center pb-5 justify-items-center '>

        {/* category one  */}
        <div className="category  bg-blue-50 grid justify-center
    justify-items-center shadow-slate-100 rounded-lg hover:scale-105 delay-50 duration-100 ">
          <div className="category-data pt-3 grid justify-items-center">
            <div className="category-img bg-white rounded-full grid justify-items-center">
              <img className='img' src={webdev} alt="" />
            </div>
            <div className="category-info">
              <div className="category-title">
                <h2 className='font-bold'>Web Development
                  <br />
                  <span className='font-normal'>50+ Courses</span>
                </h2>
              </div>
              <div className="category-dis"></div>
            </div>
          </div>
        </div>

        {/* category two  */}
        <div className="category  bg-yellow-50 grid justify-center
    justify-items-center shadow-slate-100 rounded-lg hover:scale-105 delay-50 duration-100 ">
          <div className="category-data pt-3 grid justify-items-center">
            <div className="category-img bg-white rounded-full grid justify-items-center">
              <img className='img' src={gamedev} alt="" />
            </div>
            <div className="category-info">
              <div className="category-title">
                <h2 className='font-bold'>Game Development
                  <br />
                  <span className='font-normal'>40+ Courses</span>
                </h2>
              </div>
              <div className="category-dis"></div>
            </div>
          </div>
        </div>

        {/* category three  */}
        <div className="category  bg-blue-50 grid justify-center
    justify-items-center shadow-slate-100 rounded-lg hover:scale-105 delay-50 duration-100 ">
          <div className="category-data pt-3 grid justify-items-center">
            <div className="category-img bg-white rounded-full grid justify-items-center">
              <img className='img' src={clouddev} alt="" />
            </div>
            <div className="category-info">
              <div className="category-title">
                <h2 className='font-bold'>Cloud Development
                  <br />
                  <span className='font-normal'>32+ Courses</span>
                </h2>
              </div>
              <div className="category-dis"></div>
            </div>
          </div>
        </div>

        {/* category four  */}
        <div className="category  bg-amber-50 grid justify-center
    justify-items-center shadow-slate-100 rounded-lg hover:scale-105 delay-50 duration-100 ">
          <div className="category-data pt-3 grid justify-items-center">
            <div className="category-img bg-white rounded-full grid justify-items-center">
              <img className='img' src={mobiledev} alt="" />
            </div>
            <div className="category-info">
              <div className="category-title">
                <h2 className='font-bold'>Mobile Development
                  <br />
                  <span className='font-normal'>70+ Courses</span>
                </h2>
              </div>
              <div className="category-dis"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCatagory;