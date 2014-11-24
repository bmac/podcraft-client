import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    podcast: { embedded: 'always' }
  },

  normalize: function(type, data) {
    if (typeof data === 'number') {
      return {
        id: data
      };
    }
    return this._super.apply(this, arguments);
  }
});
