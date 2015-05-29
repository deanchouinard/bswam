Accounts.config({
  forbidClientAccountCreation: true
});

if(Meteor.isClient) {
  Meteor.subscribe("userRoles");


//  ReactiveTimer = new Tracker.Dependency;

//  Meteor.setInterval(function() {
//    ReactiveTimer.changed();
//  }, 10000);

//  Tracker.autorun(function() {
//    ReactiveTimer.depend();
//    console.log('Function re-run');
//  });

//  Tracker.autorun(function(c) {
//    var example = Session.get('mySessionExample');
//    if(!c.firstRun) {
//      if(Session.equals('mySessionExample', 'stop')) {
//        alert('We stopped the reactive Function');
//        c.stop();
//      } else {
//        alert(example);
//      }
//    }
//  });
}
