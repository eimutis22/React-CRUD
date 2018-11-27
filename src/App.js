import React, { Component } from 'react';
import ReportItem from './ReportItem';
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
      reports: JSON.parse(localStorage.getItem('reports'))
    };

    this.onDelete = this.onDelete.bind(this);
  }
  
  componentWillMount() {
    const reports = this.getReports();    

    this.setState({reports});
  }

  getReports() {
    return this.state.reports;
  }

  onDelete(id) {
    const reports = this.getReports();

    const filteredReports = reports.filter(report => {
      return report.id != id;
    });

    this.setState({ reports: filteredReports });
    console.log(filteredReports);
  }

  render() {
    return (
      <div className="App">
        <h1>Reports</h1>
        {
          this.state.reports.map(report => {
            return(
              <ReportItem 
                key={report.id}
                {...report}
                onDelete={this.onDelete}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
