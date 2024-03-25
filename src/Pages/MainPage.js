import React from 'react'
import './MainPage.css'


function MainPage() {
  return (
    <div>

<div className='navbar navbar-expand-lg bg-body-tertiary'>

<div className='container-fluid'>
<a className='navbar-brand text-primary' href="#">KhShohelRana</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" >
<span class="navbar-toggler-icon"></span>  
    </button>
    <div className='collapse navbar-collapse' id="navbarTogglerDemo03">

<form className='d-flex mx-auto mt-2' role='Search'> 
<input className='form-control' type="search" placeholder="Search" aria-label="Search">
</input>
<button className="btn btn-success " type="submit">
Search
</button>

</form>

<ul className='navbar-nav ms-auto mb-2 mb-lg-0 gap-3' id="navbarfromleft">
<li className='nav-item'> 
<a className="nav-link active"href='/'>Home</a>
 </li>
<li className='nav-item'>  
<a className="nav-link "href='/About'>About</a>
  </li>
<li className='nav-item'> 
<a className="nav-link "href='/Services'>Services</a>
 </li>
<li className='nav-item'> 
<a className="nav-link"href='/Contact'>Contact</a>
 </li>
 <li className='nav-item'> 
<a className="nav-link"href='/Skills'>Skills</a>
 </li>
<li className='nav-item dropdown'> 
<a className='nav-link dropdown-toggle' data-bs-toggle='dropdown' href="#">Dropdown</a>
<ul className='dropdown-menu'>
<li > 
<a className='dropdown-item '  href="#">Home</a> </li>
<li >  
<a className='dropdown-item'  href="#">About</a>  </li>
<li> 
<a className='dropdown-item'  href="#">Services</a> </li>
<li > 
<a className='dropdown-item'  href="#">Contact</a></li>

</ul>

</li>


</ul>

    </div>


</div>




</div>








    </div>
  )
}

export default MainPage