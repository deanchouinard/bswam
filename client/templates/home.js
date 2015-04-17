Template.home.created = function() {
	console.log('Created the home template');
}

Template.home.rendered = function() {
	console.log('Rendered the home template');
//	this.$('p').html('Replace some text');
}

Template.home.destroyed = function() {
	console.log('Destroyed the home template');
}

Template.home.helpers({
	exampleHelper: function() {
		return new Spacebars.SafeString('This text came from a helper with some <strong>HTML</strong>.');
	},
	dataContextHelper: function() {
		return {
			someText: 'set using parent helper',
			someNested: {
				text: 'comes from "someNested.text"'
			}
		};
	}
});
