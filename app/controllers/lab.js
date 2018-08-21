import Ember from 'ember';

export default Ember.Controller.extend({
	cat: 'pelusa',

	weekDays : [
		{day:'lunes',
		number:1,
		'mi propiedad':'hola'},
		{day:'martes',
		number:2,
		'mi propiedad':'hola'},
		{day:'miercoles',
		number:3,
		'mi propiedad':'hola'},
		{day:'jueves',
		number:4,
		'mi propiedad':'hola'},
		{day:'viernes',
		number:5,
		'mi propiedad':'hola'},
		{day:'sabado',
		number:6,
		'mi propiedad':'hola'},
		{day:'domingo',
		number:7,
		'mi propiedad':'hola'}
	],
tweets:[],
	actions:
	 {
		doSomething()
		{
			var cat= this.get('cat');
			console.log(cat);
		},
		myLuckyDay(){
			var weekDays= this.get('weekDays');
			var luckyDay=this.get('luckyDay');
			var n = Math.floor(Math.random() * weekDays.length);
			this.set('luckyDay',weekDays.objectAt(n)['day']);
		},
		addDay(){
			var newDay=this.get('newDay');
			var weekDays=this.get('weekDays');

			weekDays.pushObject({
				day:newDay,
				//number:weekDays.length+1,
				'mi propiedad':'hola'
			});
		},
		addTweet(){
			var newTweet=this.get('newTweet');
			var tweets=this.get('tweets');

			tweets.pushObject({
				user:'Alex',
				tweet:newTweet
			});
			this.set('newTweet',"");
		},
		deleteTweet(tweet){
			var tweets=this.get('tweets');
			let result = confirm('deseas borrar este tweet: '+ tweet.tweet)

			if (result) {
				tweets.removeObject(tweet);
			}

		}
	}
});
