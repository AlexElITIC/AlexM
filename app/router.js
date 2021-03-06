import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lab',{path:'/lab'});
  this.route('login',{path:'/'});
  this.route('carrot', function() {
    this.route('detail', {path: '/:id'});
  });
  this.route('product', function() {});
});

export default Router;
