import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import UpdateProd from "./components/updateproduct.component";
import ListProducts from "./components/listProducts.component";
import AddProd from "./components/createproduct.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import User from "./components/user.component";
import Landing from "./components/landing.component";
import Home from "./components/home.component";
import Admin from "./components/admin.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import EventBus from "./common/EventBus";
import Coupons from "./components/Coupons";
import Amazon from "./components/Amazon";
import StripeContainer from "./components/StripeContainer";
import getallusers from "./common/getallusers";
import Gpay from "./components/Gpay";
import PaymentForm from "./components/PaymentForm";
import updateprod from "./components/updateprod";
// import update1 from "./components/update1";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); 
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser} = this.state;

    return (
      <Router history={history}>
        <div>

<nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/landing"} className="navbar-brand">
              CouponCountry
            </Link>
            <div className="navbar-nav mr-auto">

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    Resource
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
               

                
              </div>
            )}
          </nav>

          <div className="container mt-3">
            <Switch>
            <Route exact path={["/", "/landing"]} component={Landing} />
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/home" component={Home} />
              {/* <Route exact path="/payment" component={payment} /> */}
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/user" component={User} />
              <Route exact path="/addproduct" component={AddProd} />
              <Route exact path="/listproducts" component={ListProducts} />
              <Route exact path="/updateproduct" component={UpdateProd} />
              <Route exact path="/Coupons" component={Coupons}/>
              <Route exact path="/Amazon" component={Amazon}/>
              <Route exact path="/getallusers" component={getallusers}/>
              <Route exact path="/StripeContainer" component={StripeContainer}/>
               <Route exact path="/Gpay" component={Gpay}/>
               <Route exact path="/updateprod" component={updateprod}/>
               {/* <Route exact path="/update1" component={update1}/> */}
              
              
              

            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);