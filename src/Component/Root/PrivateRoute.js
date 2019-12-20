import React from "react";
import { Route, Redirect } from "react-router-dom";
import {AppString} from './../Const'


const PrivateRoute = ({ component: Component, showToast, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        localStorage.getItem(AppString.ID) ? (
        <Component showToast={showToast} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
