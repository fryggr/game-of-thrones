import ReactDOM from 'react-dom';
import React from 'react';
import PersonsApp from './components/PersonsApp.jsx';

ReactDOM.render(
  <PersonsApp />,
  document.getElementById("mount-point")
  );
  
$(function() {
  $('select').material_select();
  
  $('#add-person').click(function() {
    $('.person-add').toggle();
  })
});
