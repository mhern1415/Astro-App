import React from 'react';
import Contacts from './Contacts'
import Alerts from './Alerts'
import { ReactComponent as AstroLogo } from "../static/img/astro-logo-small-dark.svg";
import { RuxClock } from '@astrouxds/rux-clock/rux-clock.js';
import { RuxGlobalStatusBar } from '@astrouxds/rux-global-status-bar/rux-global-status-bar.js';





const Dashboard = () => {
    return (
        <div>
            <rux-global-status-bar appname="Astro App" class="light-theme">
        <AstroLogo />
       
        <rux-clock timezone='America/Los_Angeles' hideDate ></rux-clock>


        </rux-global-status-bar>
            <button class="rux-button">Submit</button>
            <button class="rux-button rux-button--icon">
  <rux-icon class="rux-icon rux-button__icon" icon="caution" color="white"></rux-icon>
  Button with Icon using Astro UXDS Icon Web Component
</button>

        <Contacts/>
        <Alerts/>
        

        </div>
    )
}

export default Dashboard;