import React from "react";

const Courses = () => {

    return (
<div>
        <header class="bg-primary text-center py-5 mb-4">
        <div class="container">
          <h1 class="font-weight-light text-white">Life Changing Courses</h1>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class=" col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
              <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg" class="card-img-top" alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title mb-0">mongoDB</h5>
                <div class="card-text text-black-50">Web Development</div>
              </div>
            </div>
          </div>
          <div class=" col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
              <img src="https://expressjs.com/images/express-facebook-share.png" class="card-img-top" alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Express JS</h5>
                <div class="card-text text-black-50">Web Development</div>
              </div>
            </div>
          </div>
         </div>
         <div class="row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
              <img src="https://process.filestackapi.com/cache=expiry:max/resize=width:1050/compress/5KdzhvGRG61WMQhBa1Ql" class="card-img-top" alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title mb-0">React</h5>
                <div class="card-text text-black-50">Web Development</div>
              </div>
            </div>
          </div>
         
          <div class="col-xl-3 col-md-6 mb-4 ">
            <div class="card border-0 shadow">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" class="card-img-top" alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Node JS</h5>
                <div class="card-text text-black-50">Web Development</div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    
 </div>
 
    )
}

        
export default Courses;