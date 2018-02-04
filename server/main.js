import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
      if (Polls.find().count() === 0) { 
        var samplePolls = [
          {
            question: 'Meteor.js es Asombroso?',
            choices: [
              { text: 'Claro que si!', votes: 0 },
              { text: 'Yeahh', votes: 0 },
              { text: 'No. Prefiero JS plano', votes: 0 }
            ]
          },
          {
            question: 'Qué porcentaje le das a Bootstrap?',
            choices: [
              { text: '10% si', votes: 0 },
              { text: '50% si', votes: 0 },
              { text: '100% si', votes: 0 }
            ]
          }
        ];
        _.each(samplePolls, function(poll) {
          Polls.insert(poll);
        });
    }
});
