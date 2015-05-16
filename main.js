Accounts.config({
  forbidClientAccountCreation: true
});

if(Meteor.isClient) {
  Meteor.subscribe("userRoles");

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
