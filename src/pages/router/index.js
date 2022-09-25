import React from 'react';
import { Route, Switch, BrowserRouter, useHistory } from 'react-router-dom';
import routes from './routes';
import css from './style.module.css';

const RouteWrapper = ({ component: Component, goBack, ...rest }) => (
    <Route {...rest}>
      <Component goBack={goBack} />
    </Route>
  );

const BrowserContent = () => {

    const navigate = useHistory();

    const goBack = () => navigate.goBack();

    return (
        <div className={css.appContent}>
            <Switch>
                {routes.map(route => (
                    <RouteWrapper
                        key={route.path}
                        path={route.path}
                        component={route.component}
                        exact
                        goBack={goBack}
                    />
                ))}
            </Switch>
        </div>
    );
};

const Router = () => (
    <BrowserRouter>
        <BrowserContent />
    </BrowserRouter>
);

export default Router;