Template.contextExample.rendered = function() {
	console.log('Renderd context example', this.data);
};

Template.contextExample.helpers({
	logContext: function() {
		console.log('Context Log helper', this);

    return Session.get('randomNumber');
	}
});

Template.contextExample.events({
  'click button': function(){
    Session.set('randomNumber', Math.random(0,99));
  }
});

