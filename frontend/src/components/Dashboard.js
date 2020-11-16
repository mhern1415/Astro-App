import React, { useState } from 'react';
import Contacts from './Contacts'
import Alerts from './Alerts'


const Dashboard = () => {
    const [alertsVisible, setAlerts] = useState(true);
    const [contactsVisible, setContacts] = useState(true);

    function hideAlerts(){
        setAlerts(false);
    }
    function showAlerts(){
        setAlerts(true);
    }
    function hideContacts(){
        setContacts(false);
    }

    return (
        
        <div>
            <div className= "toggle">
            <button class="rux-button toggle" onClick={hideAlerts}>Hide Alerts</button>
            <button class="rux-button toggle" onClick={showAlerts}>Show Alerts</button>
            </div>
            {alertsVisible ? <Alerts/> : null}
            <Contacts/>
            
        </div>
    )
}

export default Dashboard;