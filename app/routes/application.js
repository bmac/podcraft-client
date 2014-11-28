import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveModel: function(model) {
      model.save().then(function() {
        // redirect
      }).catch(Ember.K);
    }
  }
});
