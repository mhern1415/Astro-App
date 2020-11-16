import React, { Component } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { RuxStatus } from '@astrouxds/rux-status/rux-status.js';


class Alerts extends Component {
    constructor(props) {
        super(props);

        this.state = {alerts: [] };

    }

    componentDidMount() {
        fetch('http://localhost:3001/alerts')
          .then(response => response.json())
          .then(data => this.setState({ alerts: data.alerts }));
    }

    onSortAsc(event, sortKey) {
        const sorted = this.state.alerts
        sorted.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
        this.setState({sorted})
    }
    onSortDesc(event, sortKey) {
        const sorted = this.state.alerts
        sorted.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
        this.setState({sorted})
    }
    render() {
        const { alerts } = this.state;
        const alertSize = alerts.length

        return (
            <div>            
                <table class="rux-table" >
                <caption><h1>{alertSize} Total Alerts</h1></caption>
                <thead>
                  <tr>
                    <th>Error ID</th>
                    <th>Error Severity<ArrowUpwardIcon onClick={e => this.onSortAsc(e, 'errorSeverity')}/><ArrowDownwardIcon onClick={e => this.onSortDesc(e, 'errorSeverity')} /></th>
                    <th>Error Message</th>
                    <th>Error Category<ArrowUpwardIcon onClick={e => this.onSortAsc(e, 'errorCategory')}/><ArrowDownwardIcon onClick={e => this.onSortDesc(e, 'errorCategory')} /></th>
                    <th>Error Time</th>
                  </tr>
                </thead>
                <tbody>
                  {alerts.map(alert => (
                    <tr class="rux-table__column-head" key={alert.id}>
                      <td>{alert.errorId}</td>
                      <td>{alert.errorSeverity === "caution" ? <rux-status status="caution"></rux-status> : alert.errorSeverity === "serious" ? <rux-status status="serious"></rux-status> : <rux-status status="critical"></rux-status> }{alert.errorSeverity}</td>
                      <td>{alert.errorMessage}</td>
                      <td>{alert.errorCategory}</td>
                      <td>{alert.errorTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
               {/* <li key={alert.id}>
                 <p>{alert.errorId}</p>
                 <p>{alert.errorSeverity}</p>
                 <p>{alert.errorMessage}</p>
                 <p>{alert.errorCategory}</p>
                 <p>{alert.errorTime}</p>

               </li> */}
            
          
          </div>

        );
    }

}

export default Alerts;