
function App (){
  return (
      <Nav/>
  )
}

function Nav (){
  return(
    <div className="navigation">
        <nav>
          <div className="nav-wrapper light-green darken-1">
            <a href="#!" className="brand-logo center">Ron Formisano</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="hide-on-med-and-down">
              <li className= "right"><a href="https://github.com/gustylocuras" target="_blank">Books</a></li>
              <li><a href="https://www.linkedin.com/in/agustinalvarezescalante/" target="_blank">Home</a></li>
              <li><a href="#!">About</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li className="center">Welcome!</li>
          <li><a className="side-link" target="_blank" href="https://github.com/gustylocuras">Github</a></li>
          <li><a className="side-link" target="_blank" href="https://www.linkedin.com/in/agustinalvarezescalante/">Linkedin</a></li>

        </ul>
      </div>
  )
}


ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
