import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('podcast', function() {
      this.route('create');
      this.route('view', { path: ':podcast_id' });
      this.route('edit', { path: ':podcast_id/edit' });
  });

  this.route('episode', { path: '/episode/:episode_id' });
});

export default Router;
