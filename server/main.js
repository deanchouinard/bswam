Meteor.startup(function() {
  console.log('Server started');
  if(Meteor.users.find().count() === 0) {
    console.log('Created admin user');
    var userId = Accounts.createUser({
      username: 'johndoe',
      email: 'johndoe@example.com',
      password: '1234',
        profile: {
          name: 'John Doe'
        }
    });

    Meteor.users.update(userId, {$set: {
      roles: {admin: true},
    }})
  };
  if(Posts.find().count() == 0) {
    console.log('Adding dummy posts');

    var dummyPosts = [
    {
      title: 'My First entry',
      slug: 'my-first-entry',
      description: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet...',
      timeCreated: moment().subtract(7, 'days').unix(),
      author: 'John Doe'
    },

    {
      title: 'My Second entry',
      slug: 'my-second-entry',
      description: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet...',
      timeCreated: moment().subtract(5, 'days').unix(),
      author: 'John Doe'
    },

    {
      title: 'My Third entry',
      slug: 'my-third-entry',
      description: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet...',
      timeCreated: moment().subtract(3, 'days').unix(),
      author: 'John Doe'
    },

    {
      title: 'My Fourth entry',
      slug: 'my-fourth-entry',
      description: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet...',
      timeCreated: moment().subtract(2, 'days').unix(),
      author: 'John Doe'
    },

    {
      title: 'My Fifth entry',
      slug: 'my-fifth-entry',
      description: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet...',
      timeCreated: moment().subtract(1, 'days').unix(),
      author: 'John Doe'
    },
  ];

  _.each(dummyPosts, function(post) {
    Posts.insert(post);
  });
  }
});

