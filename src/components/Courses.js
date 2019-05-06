import React from "react";
import {Link} from 'react-router-dom'

const catalog=[
    {
     img:"https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg",
     name:"mongoDB",
     cat:"Web Development"
    },
    {
        img:"https://expressjs.com/images/express-facebook-share.png",
        name:"Express JS",
        cat:"Web Development"
       },
       {
        img:"https://process.filestackapi.com/cache=expiry:max/resize=width:1050/compress/5KdzhvGRG61WMQhBa1Ql",
        name:"React",
        cat:"Web Development"
       },
       {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
        name:"React",
        cat:"Web Development"
       },
]

const Courses = () => {
 
    return (
        
    <div>
        <header class="bg-primary text-center py-5 mb-4">
        <div class="container">
          <h1 class="font-weight-light text-white">Life Changing Courses</h1>
        </div>
      </header>
      <div class="grid-container">
      <div class="row">
       {catalog.map((i)=>
          
           
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-0 shadow">
                 <Link to={`/courses/${i.name}`}>
                  <img src={i.img} class="card-img-top" height="120px" width="120px"alt="..."/>
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">{i.name}</h5>
                    <div class="card-text text-black-50">{i.cat}</div>
                  </div>
                  </Link>
                </div>
              </div>
              
              
             )}</div>
             </div>
             </div>
             
             

    )}
        
export default Courses;