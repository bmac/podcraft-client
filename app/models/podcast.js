import DS from 'ember-data';

var attr = DS.attr;
export default DS.Model.extend({
  feedUrl: attr('string'),
  title: attr('string'),
  link: attr('string'),
  language: attr('string', {defaultValue: 'language'}),
  copyright: attr('string'),
  subtitle: attr('string'),
  author: attr('string'),
  explicit: attr('boolean'),
  summary: attr('string'),
  description: attr('string'),
  image: attr('string'),
  
  episodes: DS.hasMany('episodes')
});
