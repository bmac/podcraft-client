import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  author: attr('string'),
  explicit: attr('boolean'),
  image: attr('string'),
  summary: attr('string'),
  mediaUrl: attr('string'),
  pubDate: attr('date'),
  
  podcast: DS.belongsTo('podcast')
});
