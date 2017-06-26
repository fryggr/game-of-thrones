import React from 'react';
import PersonsGrid from './PersonsGrid.jsx';
import PersonAdd from './PersonAdd.jsx';
import PersonsEditor from './PersonsEditor.jsx';
// import persons from './persons.json';
import load from './load.js';

class PersonsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { persons: [] };

    this.handleSort = this.handleSort.bind(this);
    this.handlePersonDelete = this.handlePersonDelete.bind(this);
    this.handleSearchPerson = this.handleSearchPerson.bind(this);
    this.handleNoteAdd = this.handleNoteAdd.bind(this);

    this.loadData();
  }
  
  componentDidMount() {
    this.sortVariable = false;
  }

  loadData() {
    load(this.props.data, 'GET').then(persons => {
      this.initialData = JSON.parse(persons);
      this.setState({
        persons: this.initialData
      });
    });
  }

  handlePersonDelete(person) {
    const personId = person.id;
    const newPersons = this.state.persons.filter(function(person) {
        return person.id !== personId;
    });
    this.setState({ persons: newPersons });
  }
  
  handleSearchPerson(query) {
    this.setState({ persons: query });
  }
    
  handleNoteAdd(newPerson) {
    const newPersons = this.state.persons.slice();
    newPersons.unshift(newPerson);
    this.setState({ persons: newPersons });
  }
  
  handleSort(event) {
    const sortQuery = event.target.getAttribute('data-type');
    let direction = this.sortVariable ? 1 : -1;

    const sortPersons = (a, b) => {
      if (a[sortQuery] === b[sortQuery]) { return 0; }
      return a[sortQuery] > b[sortQuery] ? direction : direction * -1;
    };
    
    this.sortVariable = !this.sortVariable;

    const newPersons = this.state.persons.sort(sortPersons);
    this.setState({ persons: newPersons });
  }
  
  render() {
    // console.log(`PersonsApp: ${this.state.persons}`);
    return (
      <div className="notes-app">
        <PersonsEditor persons={this.initialData} onSearchPerson={this.handleSearchPerson}/>
        <PersonAdd onNoteAdd={this.handleNoteAdd} />
        <div className="row">
          <div className="col s12" id="container">
            <PersonsGrid persons={this.state.persons} onPersonDelete={this.handlePersonDelete} onPersonsSort={this.handleSort} />
          </div>
        </div>
      </div>
    );
  }
};

export default PersonsApp;