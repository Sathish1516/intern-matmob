import React from 'react'
import "./Blog.css"

import {blog1,blog2,blog3} from "../../assets"


const Blog = () => {
  return (
    <section id="blog" >
         <h2 className="light">WHY MATMOB ?</h2>
      <div className="wrapper1">
       
        <div className="content-container">
          
            <div className="post">
              {/* <div className="tag"></div> */}
             
               <div className='img'><img src={blog1} alt="" /></div> 
              

              
                <h3 className="post-title">AVOID HAVING INVESMENT</h3>
               
                <div className='content' >   AVOID , Having 
                                                inversment by
                                                buying new product
                                                and shifting one place
                                                 to another</div>
                                                
              
            </div>
         
        </div>
        <div className="content-container">
          
          <div className="post">
            <div className="tag"></div>
           
              <img src={blog2} alt="" />
           

           
              <h3 className="post-title">NO NEED TO SHIFT</h3>
              <div className='content' >  No need to shift or
                                            relocation because 
                                            you can rent and get
                                            new product in new 
                                            location where you
                                            going to stay</div>
          
          </div>
       
      </div>
      <div className="content-container">
          
          <div className="post">
            <div className="tag"></div>
           
              <img src={blog3} alt="" />
           

          
              <h3 className="post-title">SAVING MONEY</h3>
              <div className='content' >   AVOID , Having 
                                            Saving Money, 
                                            no need of Inversment,
                                            no need of relocatoin, 
                                                transport charge,</div>
           
          </div>
       
      </div>

        {/* <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Posts
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default Blog