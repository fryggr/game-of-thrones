import React from 'react';
import PersonsGrid from './PersonsGrid.jsx';
import PersonAdd from './PersonAdd.jsx';
import PersonsEditor from './PersonsEditor.jsx';
import persons from './persons.json';

class PersonsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { persons };

    this.handleSort = this.handleSort.bind(this);
    this.handlePersonDelete = this.handlePersonDelete.bind(this);
    this.handleSearchPerson = this.handleSearchPerson.bind(this);
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
  }
  
  componentDidMount() {
    this.sortVariable = false;
  }

  handlePersonDelete(person) {
    let personId = person.id;
    let newPersons = this.state.persons.filter(function(person) {
        return person.id !== personId;
    });
    this.setState({ persons: newPersons });
  }
  
  handleSearchPerson(query) {
    this.setState({ persons: query });
  }
    
  handleNoteAdd(newPerson) {
    let newPersons = this.state.persons.slice();
    newPersons.unshift(newPerson);
    this.setState({ persons: newPersons });
  }
  
  handleSort(event) {
    let sortQuery = event.target.getAttribute('data-type');

    let sortPersons = (a, b) => {
        let rowA = a[sortQuery];
        let rowB = b[sortQuery];
      if (this.sortVariable) {
        if (rowA > rowB) return 1
        else return -1;
      }
      if (rowA < rowB) return 1
      else return -1;
    };
    this.sortVariable = !this.sortVariable;
    let newPersons = this.state.persons.sort(sortPersons);
    this.setState({ persons: newPersons });
  }
  
  render() {
    return (
      <div className="notes-app">
        <PersonsEditor persons={this.state.persons} onSearchPerson={this.handleSearchPerson}/>
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