import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';

const ghImg = require('../images/github.png');
const twImg = require('../images/twitter.png');
const diImg = require('../images/discord.png');
const whiteLogo = require('../images/logo_white.png');

export default class NavMenu extends React.Component<{}, {}> {
    render() {
        return <nav>
            <div className="">
                <section className="nav-left">
                    <div className="logo">
                        <NavLink to={'/'}><img src={whiteLogo} alt="NadekoBot_Logo" /></NavLink>
                    </div>
                    <div className="social github">
                        <a target="_blank" href={'https://github.com/Kwoth/nadekobot'}><img src={ghImg} alt="NadekoBot_Github_Logo" /></a>
                    </div>
                    <div className="social discord">
                        <a target="blank" href={'https://discord.gg/nadekobot'}><img src={diImg} alt="NadekoBot_Discord_Logo" /></a>
                    </div>
                    <div className="social twitter">
                        <a target="blank" href={'https://twitter.com/TheNadekoBot'}><img src={twImg} alt="NadekoBot_Twitter_Logo" /></a>
                    </div>
                </section>
                <section className="nav-middle">
                    <NavLink exact to={'/'} activeClassName='active'> Home </NavLink>
                    <NavLink to={'/commands'} activeClassName='active'>
                        Command List
                    </NavLink>
                </section>
                <section className="nav-right">
                    {<div className="login"><a href="/account/login">Login</a></div>}
                </section>
            </div>
        </nav>;
    }
}
