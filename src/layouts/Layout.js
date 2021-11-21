import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth-context';

const Layout = ({ exact, path, component: Component, ...props }) => {
    const authCtx = useContext(AuthContext);
    return (
        <Route
            exact={exact}
            path={path}
            render={() => {
                const userPages = <>
                    <main >
                        <Component {...props} />
                    </main>
                </>;

                if (authCtx.currentUser) {
                    return userPages;
                } else {
                    return <Redirect to='/login' />
                }
            }}
        />
    )
}

export default Layout
