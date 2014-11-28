import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveModel: function(model) {
      var route = this;
      model.save().then(function(model) {
        // redirect
        var editRoute = model.constructor.typeKey + '.edit';
        console.log('redirecting to ', editRoute);
        route.transitionTo(editRoute, model);
      }).catch(function(err) {
        console.log('rejected with', err);
      });
    }
  }
});
