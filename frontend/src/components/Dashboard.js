import React, { useState } from 'react';
import Contacts from './Contacts'
import Alerts from './Alerts'
import Switch from "react-switch";


const Dashboard = () => {
    const [checkedAlerts, setChecked] = useState(true);
    const [contactsVisible, setContacts] = useState(true);

    function toggleAlerts(checkedAlerts){
        setChecked(checkedAlerts);
    }

    return (
        
        <div>
            <label>
                <span>Toggle Alerts Table  </span>
                    <Switch onChange={toggleAlerts} checked={checkedAlerts} />   
            </label>
           <br></br>
           <br></br>
            {checkedAlerts ? <Alerts/> : null}
            <Contacts/>
            
        </div>
    )
}

export default Dashboard;