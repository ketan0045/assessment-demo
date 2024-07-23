import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const changePassword = () => {
    navigate("/changepasswPage")
  }

  const viewProfile = () => {
    navigate("/viewProfiPage")
  }



  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark  fluid ml-5 mr-5">
      <a class="navbar-brand ml-3" href="/dashBoard" > Demo</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <a class="nav-link ml-3" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ml-3" href="/about">about</a>
          </li>
        </ul>
        <p class="form-inline my-2 my-lg-0 mr-5">

          <li class="nav-item dropdown form-control mr-sm-2 mt-1 ml-3">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbM1QHmS7hpDV5dFUOWanesGXvSNgMHTjfdt2XSWK4kw&s" alt="Avatar" style={{ width: '30px', borderRadius: '50%', marginRight: '8px' }} />
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{ marginLeft: "-2%" }}>
              <a class="dropdown-item" onClick={viewProfile}>View Profile</a>
              <a class="dropdown-item" onClick={changePassword}>Change Password</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href='/'>Sign out</a>
            </div>
          </li>

        </p>
      </div>
    </nav>
  )
}

export default Header
