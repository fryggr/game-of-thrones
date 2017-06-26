import React from 'react';
// import persons from './persons.json';

class PersonsEditor extends React.Component {
  
  componentDidMount() {
    this.select = this.refs.select;    
  }

  handleSearchPerson(event) {

    const searchQuery = event.target.value.toLowerCase();
    
    const filterAllPersons = (obj) => {
      return Object.keys(obj).some((key) => {
        const searchValue = (obj[key]+'').toLowerCase();
        return searchValue.includes(searchQuery);
      });
    };
    
    const filterSelectPersons = (obj) => {
      return obj[this.select.value].toLowerCase().includes(searchQuery);
    };
    
    this.select.value == 'all' 
      ? this.persons = this.props.persons.filter(filterAllPersons)
      : this.persons = this.props.persons.filter(filterSelectPersons)
    
    this.props.onSearchPerson(this.persons);
    
  }
    
  render() {
    
    return (
      <div className="person-editor">
        <div className="row">
          <div className="input-field col s4">
            <input type="text" placeholder="Поиск" onChange={this.handleSearchPerson.bind(this)} />
          </div>
            <div className="input-field col s4">
              <select ref="select">
                <option value="all" defaultValue="">Все поля</option>
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