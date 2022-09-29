import { Routes, Route, Link } from "react-router-dom";

export function Menu(){

    return(
        <>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Link class="navbar-brand" href="#">Navbar</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
            <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Historia">Historia</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Integrantes">Integrantes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Albumes">Albumes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Footer">Footer</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
        </>
    )
}