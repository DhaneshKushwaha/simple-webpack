import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // now lodash imported from locally
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());