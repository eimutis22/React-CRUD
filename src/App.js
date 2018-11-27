import React, { Component } from 'react';
import './App.css';

const reports = [
  {
    id: 1,
    timestamp: '2018-11-20',
    product: 'broadband',
    issue: 'slow',
    town: 'sligo',
    caller_phone_number: null
  },
  {
    id: 2,
    timestamp: '2018-11-20',
    product: 'broadband',
    issue: 'not_working',
    town: 'dublin',
    caller_phone_number: null
  },
  {
    id: 3,
    timestamp: '2018-11-22',
    product: 'landline',
    issue: 'not_working',
    town: 'sligo',
    caller_phone_number: null
  },
];

localStorage.setItem('reports', JSON.stringify(reports));

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reports: []
    };
  }
  
  componentWillMount() {
    this.getReports();    
  }

  getReports() {
    const localReports = JSON.parse(localStorage.getItem('reports'));
    this.state.reports = localReports;
    console.log('Reports: ', this.state.reports);
  }

  render() {
    return (
      <div className="App">
        <h1>Reports</h1>
        {
          this.state.reports.map(report => {
            return(
              <div key={report.id}>
                <span>{report.timestamp}</span> | <span>{report.product}</span> | <span>{report.issue}</span> | <span>{report.town}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
