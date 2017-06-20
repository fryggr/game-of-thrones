import React from 'react';
import persons from './persons.json';

class PersonsEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { persons };

    this.handleSearchPerson = this.handleSearchPerson.bind(this);
  }
  
  componentDidMount() {
    let input = this.refs.input;
    this.select = this.refs.select;
    input.oninput = this.handleSearchPerson;
    alert(persons);
  }

  handleSearchPerson(event) {
    let searchQuery = event.target.value.toLowerCase();
    
    let filterAllPersons = (obj) => {
      let validEntries = false;
      for (let key in obj) {
        let searchValue = (obj[key]+'').toLowerCase();
        if (searchValue.indexOf(searchQuery) !== -1) {
          validEntries = true;
          break;
        } 
      };
      if (validEntries == true) {
        validEntries = false;
        return true;
      }
      else {
        return false;
      }
    };
    
    let filterSelectPersons = (obj) => {
      let searchValue = obj[this.select.value].toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    };
    
    if (this.select.value == 'all') {
      var persons = this.state.persons.filter(filterAllPersons);
    }
    else {
      persons = this.state.persons.filter(filterSelectPersons);
    }
    this.props.onSearchPerson(persons);
    
  }
    
  render() {
    return (
      <div className="person-editor">
        <div className="row">
          <div className="input-field col s4">
            <input type="text" name="tags" id="tags" placeholder="Поиск" ref="input"/>
          </div>
            <div className="input-field col s4">
              <select ref="select">
                <option value="all" selected="">Все поля</option>
                <option value="name">Имя персонажа</option>
                <option value="description">Описание персонажа</option>
                <option value="reason">Причина смерти</option>
                <option value="killer">Кем убит</option>
                <option value="weapon">Орудие убийства</option>
              </select>
            </div>
          <div className="input-field col s4">
            <button className="btn waves-effect waves-light" type="button" id="add-person">Добавить персонажа</button>
          </div>
        </div>
      </div>
    );
  }
};

export default PersonsEditor;