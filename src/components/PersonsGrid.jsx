import React from 'react';
import Person from './Person.jsx';

class PersonsGrid extends React.Component {
  
  render() {
    let onPersonDelete = this.props.onPersonDelete;
    let onPersonsSort = this.props.onPersonsSort;
    return (
      <table className="bordered">
        <thead>
          <tr onClick={onPersonsSort}>
            <th data-type="name">Имя персонажа</th>
            <th data-type="description">Описание персонажа</th>
            <th data-type="reason">Причина смерти</th>
            <th data-type="killer">Кем убит</th>
            <th data-type="weapon">Орудие убийства</th>
            <th>Удалить персонажа</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.persons.map(el =>
              <Person
                key={el.id}
                name={el.name}
                description={el.description}
                reason={el.reason}
                killer={el.killer}
                weapon={el.weapon}
                onDelete={onPersonDelete.bind(null, el)}
              />
            ) 
          }
        </tbody>
      </table>
      );
  }
};

export default PersonsGrid;