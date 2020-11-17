import React, { useState } from 'react';
import Contacts from './Contacts'
import Alerts from './Alerts'
import Switch from "react-switch";


const Dashboard = () => {
    const [checkedAlerts, setAlertChecked] = useState(true);
    const [checkedContacts, setContactChecked] = useState(true);

    function toggleAlerts(checkedAlerts){
        setAlertChecked(checkedAlerts);
    }
    function toggleContacts(checkedContacts){
        setContactChecked(checkedContacts);
    }

    return (
        
        <div>
            <div className="toggle-1">
            <label>
                <span>Toggle Alerts Table  </span>
                    <Switch onColor="#005A8F" onChange={toggleAlerts} checked={checkedAlerts} />   
            </label>
            </div>
            <div className="toggle-2">
            <label>
                <span>Toggle Contacts Table  </span>
                    <Switch onColor="#005A8F" onChange={toggleContacts} checked={checkedContacts} />   
            </label>
            </div>
           <br></br>
           <br></br>
            {checkedAlerts ? <Alerts/> : null}
            <br></br>
            <br></br>
            {checkedContacts ? <Contacts/> : null}  
        </div>
    )
}

export default Dashboard;