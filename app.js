
function App (){
  return (
    <React.Fragment>
      <Nav/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </React.Fragment>
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

function Footer (){
  return(
    <footer className="page-footer light-green darken-1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
  )
}


ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
