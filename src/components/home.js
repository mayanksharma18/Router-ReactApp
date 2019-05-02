import React from "react";

const Home=()=>{

    return (
        <div>
  <div class="jumbotron jumbotron-fluid">
  
  <div class="container">
  <div class="row">
  <div class="col-sm-8">
    <h1 class="display-4">MERN for Dummies</h1>
    </div>
    <div class="col-sm-4">
    <div class="row" style={{margin:'15px'}}>
    <div class="col">
    <button type="button" class="btn btn-primary">SignUp</button>
    </div>
    <div class="col">
    <button type="button" class="btn btn-primary">Login</button>
    </div>
    </div>
    </div>
  </div>
  </div>
</div>
<div class="container">
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>“ANYONE WHO STOPS LEARNING IS OLD, WHETHER AT TWENTY OR EIGHTY.”</p>
      <cite>Learning is what keeps the mind young.</cite>
      <footer class="blockquote-footer"><b>HENRY FORD</b> </footer>
    </blockquote>
  </div>
</div>
    </div>
    </div>
    )
}

export default Home;