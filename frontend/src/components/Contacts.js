import React, { Component } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {contacts: [] };
    }

    componentDidMount() {
        fetch('http://localhost:3001/contacts')
          .then(response => response.json())
          .then(data => this.setState({ contacts: data.contacts }));
    }

    onSortAsc(event, sortKey) {
        const sorted = this.state.contacts
        sorted.sort((a,b) =>  (a[sortKey] - b[sortKey]))
        this.setState({sorted})
    }
    onSortDesc(event, sortKey) {
        const sorted = this.state.contacts
        sorted.sort((a,b) => (b[sortKey] - a[sortKey]))
        this.setState({sorted})
    }
    onSortAscState(event, sortKey) {
      const sorted = this.state.contacts
      sorted.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
      this.setState({sorted})
    }
    onSortDescState(event, sortKey) {
      const sorted = this.state.contacts
      sorted.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
      this.setState({sorted})
    }
   
    
    render() {
        const { contacts } = this.state;
        const contactSize = contacts.length
        const states = []
        contacts.map (contact =>(
         states.push(contact.contactState)
        ))
        const counts1 = Object.create(null)
        states.forEach(btn => {
          counts1[btn] = counts1[btn] ? counts1[btn] + 1 : 1;
        })
        


        return (
            <div> 
                <table class="rux-table" >
                  <caption><h1>{contactSize} Total contacts</h1>
                  <h1>{Object.entries(counts1).map(([key, val]) => 
                    <h2 key={key}>{key}: {val}</h2>
                    )}</h1>
                  </caption>
                <thead>
                  <tr>
                    <th>Contact Name<ArrowUpwardIcon onClick={e => this.onSortAsc(e, 'contactName')}/><ArrowDownwardIcon onClick={e => this.onSortDesc(e, 'contactName')} /></th>
                    <th>Contact Status</th>
                    <th>Begin Timestamp</th>
                    <th>End Timestamp</th>
                    <th>Contact State<ArrowUpwardIcon onClick={e => this.onSortAscState(e, 'contactState')}/><ArrowDownwardIcon onClick={e => this.onSortDescState(e, 'contactState')} /></th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <tr class="rux-table__column-head" key={contact.id}>
                      <td>{contact.contactName}</td>
                      <td>{contact.contactStatus}</td>
                      <td>{contact.contactBeginTimestamp}</td>
                      <td>{contact.contactEndTimestamp}</td>
                      <td>{contact.contactState}</td>
                    </tr>
                  ))}
                </tbody>
              </table>          
          </div>

        );
    }

}

export default Contacts;