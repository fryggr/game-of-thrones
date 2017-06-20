import React from 'react';

class Person extends React.Component {
  render() {
    return (
      <tr>
        <td> {this.props.name} </td>
        <td> {this.props.description} </td>
        <td> {this.props.reason} </td>
        <td> {this.props.killer} </td>
        <td> {this.props.weapon} </td>
        <td className="delete"><a className="btn-floating  grey lighten-1" onClick={this.props.onDelete}><i className="material-icons">delete</i></a></td>
      </tr>
    );
  }
};

export default Person;