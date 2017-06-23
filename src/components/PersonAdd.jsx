import React from 'react';

class PersonAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      queryName: '',
      queryDescription: '',
      queryReason: '',
      queryKiller: '',
      queryWeapon: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }
 
  handleTextChange(event) {
    const stateTarget = event.target.getAttribute("id");
    this.setState({ 
      [stateTarget]: event.target.value
    });
  }
  
  handleNoteAdd(event) {
    var newPerson = {
      name: this.state.queryName,
      id: Date.now(),
      description: this.state.queryDescription,
      reason: this.state.queryReason,
      killer: this.state.queryKiller,
      weapon: this.state.queryWeapon
    };
    this.props.onNoteAdd(newPerson);
    this.setState({ 
      queryName: '',
      queryDescription: '',
      queryReason: '',
      queryKiller: '',
      queryWeapon: '' 
    });
  }
  
  render() {
    return (
      <div className="row person-add">
        <div className="col s12">          
            <div className="row">
              <div className="input-field col s4">
                <input 
                  placeholder="Имя персонажа" 
                  type="text" 
                  className="validate"
                  value={this.state.queryName}
                  id="queryName"
                  onChange={(event) => this.handleTextChange(event)}
                />
              </div>
              <div className="input-field col s8">
                <input 
                  placeholder="Описание персонажа" 
                  type="text" 
                  className="validate"
                  value={this.state.queryDescription}
                  id="queryDescription"
                  onChange={(event) => this.handleTextChange(event)}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input 
                  placeholder="Причина смерти" 
                  type="text" 
                  className="validate"
                  value={this.state.queryReason}
                  id="queryReason"
                  onChange={(event) => this.handleTextChange(event)}
                />
              </div>
              <div className="input-field col s4">
                <input 
                  placeholder="Кем убит" 
                  type="text" 
                  className="validate"
                  value={this.state.queryKiller}
                  id="queryKiller"
                  onChange={(event) => this.handleTextChange(event)}
                />
              </div>
              <div className="input-field col s4">
                <input 
                  placeholder="Орудие убийства" 
                  type="text" 
                  className="validate"
                  value={this.state.queryWeapon}
                  id="queryWeapon"
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