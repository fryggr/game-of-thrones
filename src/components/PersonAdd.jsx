import React from 'react';

class PersonAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queryName: '' };

    this.handleTextChange = this.handleTextChange.bind(this);
  }
 
  handleTextChange(event) {
    this.setState({ queryName: event.target.value });
  }
  
  handleNoteAdd(event) {
    var newPerson = {
      name: this.state.queryName,
      id: Date.now(),
      description: '',
      reason: '',
      killer: '',
      weapon: ''
    };
    this.props.onNoteAdd(newPerson);
    this.setState({ queryName: '' });
  }
  
  render() {
    return (
      <div className="row person-add">
        <div className="col s12">
          
            <div className="row">
              <div className="input-field col s6">
                <input 
                  placeholder="Имя персонажа" 
                  type="text" 
                  className="validate"
                  value={this.state.queryName}
                  onChange={(event) => this.handleTextChange(event)}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button className="btn waves-effect waves-light" onClick={(event) => this.handleNoteAdd(event)}>Добавить</button>
              </div>
            </div>
          
        </div>
      </div>
    );
  }
};

export default PersonAdd;