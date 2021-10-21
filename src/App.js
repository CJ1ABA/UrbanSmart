import { connect } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import AuthForm from './components/Authy/Authy';
import { Home } from './components';
import { PrivateRoute, PublicRoute } from './components';

function App({ session, sysLogIn }) {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <PublicRoute isAuth={session} exact path='/'>
              <AuthForm />
            </PublicRoute>
            <PrivateRoute isAuth={session} exact path='/profile'>
              <Home login={sysLogIn} />
            </PrivateRoute>
            <PublicRoute isAuth={session} path='*'>
              <h1>404 page</h1>
            </PublicRoute>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    session: state.session,
    sysLogIn: state.sysLogIn,
  }
};
function mapDispatchToProps(dispatch) {
  return {

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

