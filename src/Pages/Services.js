import React from 'react'
import './Services.css'

export default function Services() {
  return (
   <div>

  <div className='row g-0' >

<div className='col-lg-4'>

<div class="card m-5 rounded-5 shadow-lg" >
  <img src="appdeveloper.jpg" class="card-img-top" alt="..." style={{height:230}}/>
  <div class="card-body">
    <h5 class="card-title">Android Development</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary rounded-5">Project Details</a>
  </div>
</div>
</div>
<div className='col-lg-4'>

<div class="card m-5 rounded-5 shadow-lg"  >
  <img src="webdeveloper.jpg" class="card-img-top" alt="..." style={{height:230}}/>
  <div class="card-body">
    <h5 class="card-title">Web Development</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary rounded-5">Project Details</a>
  </div>
</div>
</div>
<div className='col-lg-4'>
  <div class="card m-5 rounded-5 shadow-lg" >
  <img src="graphicdesigner.jpg" class="card-img-top" alt="..." style={{height:230}}/>
  <div class="card-body">
    <h5 class="card-title">Graphic Designe</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary rounded-5">Project Details</a>
  </div>
</div></div>

  </div>


   </div>
  )
}
