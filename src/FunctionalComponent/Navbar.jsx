import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props){
 let[search,setSearch]=useState("")

  function postSearch(e){
    e.preventDefault()
    props.changeSearch(search)
   setSearch("")
  }

    return (
      <>
      <nav className=" background navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-light" onClick={()=>props.changeSearch("")} href="#">NewsApp</NavLink>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="material-symbols-outlined text-light">
menu
</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><NavLink className="nav-link text-light" onClick={()=>props.changeSearch("")}  to="/All">All</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" onClick={()=>props.changeSearch("")}  to="/Politics">Politics</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" onClick={()=>props.changeSearch("")}  to="/Crime">Crime</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" onClick={()=>props.changeSearch("")}  to="/Science">Science</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" onClick={()=>props.changeSearch("")}  to="/Sports">Sports</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" onClick={()=>props.changeSearch("")}  to="/Technology">Technology</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" onClick={()=>props.changeSearch("")}  to="/Entertainment">Entertainment</NavLink></li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item " onClick={()=>props.changeSearch("")}  to="/Cricket">Cricket</NavLink></li>
            <li><NavLink className="dropdown-item " onClick={()=>props.changeSearch("")}  to="/IPL">IPL</NavLink></li>
            <li><NavLink className="dropdown-item " onClick={()=>props.changeSearch("")}  to="/India">India</NavLink></li>
            <li><NavLink className="dropdown-item " onClick={()=>props.changeSearch("")}  to="/International">International</NavLink></li>
            <li><NavLink className="dropdown-item " onClick={()=>props.changeSearch("")}   to="/Jokes">Jokes</NavLink></li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item "onClick={()=>props.changeLanguage("hi")}>Hindi</button></li>
            <li><button className="dropdown-item " onClick={()=>props.changeLanguage("en")}>English</button></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>postSearch(e)}>
        <input className="form-control me-2" value={search} onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


      </>
    )
  }


