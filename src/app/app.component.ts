
import controller from './app.controller'
import './app.component.scss'
console.log(controller)

const appComponent = {
  template: require('./app.component.html'),
  controller
};

export default appComponent;
