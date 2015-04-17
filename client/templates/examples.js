Template.contextExample.rendered = function() {
	console.log('Renderd context example', this.data);
};

Template.contextExample.helpers({
	logContext: function() {
		console.log('Context Log helper', this);
	}
});

