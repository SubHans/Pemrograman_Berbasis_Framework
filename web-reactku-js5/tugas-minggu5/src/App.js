import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function NestingAuthExample() {
  return(
    <Router>
      <nav class="navbar navbar navbar-expand-lg navbar-dark bg-danger">
        <div class="container">
          <a class="navbar=brand" href="#"  style={{ color: 'white' }}>AutoCar</a>
          <button class="navbar-toggler " type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
            
            <span class="navbar-toggler-icon"></span>
          </button>  
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav ml-auto" >
              <li class="nav-item" style={{ color: 'white' }}>
                <a class="nav-link" >
                  <Link to="/home">HOME</Link>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/prodact">Jenis Mobil</Link>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item ml-2 mt-2">
              <AuthButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />

      <Switch>
        <Route  path="/home">
          <Home />
        </Route>
        <Route  path="/login">
          <LoginPage />
        </Route>
        <Route  path="/prodact">
          <Prodact />
        </Route>
        <PrivateRoute path="/private">
          <ProtectedPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

const fakeAuth={
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: {pathname: "/"}};

  return fakeAuth.isAuthenticated ? (
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push(from));
        }}
      >
        Sign out
      </button>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({children, ...rest}){
  return (
    <Route 
    {...rest}
    render={({ location }) =>
    fakeAuth.isAuthenticated ? (
      children
    ) : (
      <Redirect
      to={{
        pathname: "/login",
        state: {from:location}
      }}
      />
    )
    }
    />
  );
}

function ProtectedPage() {
  return <h3>Private</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: {pathname: "/prodact"}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <center>
      <p>You must log in to view the page at {from.pathname}</p>
      <button type="button" class="btn btn-success" onClick={login}>Log in</button>
      </center>
    </div>
  );
}

function Home(){
  const isLoggedIn = fakeAuth.isAuthenticated;
  return(
    <div>
      <center>
          <div class="container">
          <img src="https://cdns.klimg.com/otosia.com/p/bank/2018/05/04/kumpulan-mobil-murah-terbaik-mei-2018-96726f.jpg"
          alt="content"/>
          <h5> Hallo Semuanya!</h5>
          <br></br><p>Selamat Datang Di AutoCar.</p>
        </div>
      </center>
    </div>
  );
}

function Prodact(){
  let { path, url } = useRouteMatch();
  const isLoggedIn = fakeAuth.isAuthenticated;
  if (isLoggedIn == true) {
    return(
      <div>
        <center>
          <h4>All Product</h4>
          <div class="card card-group">
            <div class="card">
            <Link to={`${url}/Honda Jazz MT	Rp 256,5 Juta (Harga OTR)	5 Kursi, 1497 cc, 118 hp, Bensin`}>
              <img src="https://imgcdn.oto.com/medium/gallery/exterior/14/1799/honda-jazz-front-angle-low-view-630959.jpg"
              alt="Mobil Sedan" /><br></br>
              <h5>Honda Jazz</h5>
              </Link>
            </div>

            <div class="card">
            <Link to={`${url}/Honda HRV 1.5L S	Rp 306 Juta (Harga OTR) 5 Kursi, 1497 cc, 118 hp, Bensin`}>
              <img src="https://imgcdn.oto.com/medium/gallery/exterior/14/1970/honda-hr-v-front-angle-low-view-470426.jpg"
              alt="Mobil SUV" /><br></br>
              <h5>Honda HRV</h5>
              </Link>
            </div>

            <div class="card">
            <Link to={`${url}/Honda Civic 1.5L Turbo	Rp 536,5 Juta (Harga OTR) 5 Kursi, 1498 cc, 171 hp, Bensin`}>
              <img src="https://imgcdn.oto.com/medium/gallery/exterior/14/1323/honda-civic-front-angle-low-view-413329.jpg"  
              alt="Mobil Sport"/>
              <br></br>
              <h5>Honda Civic</h5>
              </Link>
              <br></br>
              <br/>
            </div>
          </div>
          <br></br>

          <div className="bgLink">
          <Switch>
            <Route exact path="{path}">
              <h3>Please Choose Your Goods!</h3>
            </Route>

            <Route path={`${path}/:prodactId`}>
                <Prodacts />
            </Route>
          </Switch>
          </div>
        </center>
      </div>
    );
  }
  return (
    <div>
      <center>
        <h2>AutoCar</h2>
      <Link to="/login">
      <button className="btn btn-warning">Go to login page</button>
      </Link>
      </center>
    </div>
  );
}

function Prodacts(){
  let {prodactId} = useParams();

  return (
    <div>
      <h3>{prodactId}</h3>
    </div>
  );
}

//<img id="firstHeadlineImage" class="img img-fluid d-block mx-auto" src="https://www.mainbasket.com/thumbs/extra-large/uploads/post/2017/09/97decda7b690b95269b66afe46a254b5.jpg">