
import './App.css';
import MainPage from "./Pages/MainPage"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from  "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import Skills from './Pages/Skills';
function App() {
  return (

    <div className="App">
     <MainPage/>
     <BrowserRouter>
<Routes>
<Route path='/' element={<Home/>} > </Route>
<Route path='/About' element={<About/>} > </Route>
<Route path='/Services' element={<Services/>} > </Route>
<Route path='/Contact' element={<Contact/>} > </Route>
<Route path='/Skills' element={<Skills/>} > </Route>

</Routes>

</BrowserRouter>
     
    </div>
  );
}

export default App;
