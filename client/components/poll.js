Template.poll.events({
    'click .vote': function (event) {
        event.preventDefault();
        console.log($(event.currentTarget).parent('.poll'));
        var pollID = $(event.currentTarget).parent('.poll').data('id');
        var voteID = $(event.currentTarget).data('id');
        var voteString = 'choices.' + voteID + '.votes';
        var action = {};
        action[voteString] = 1;
        
        console.log(pollID);
        console.log(voteID);
        console.log(voteString);
        console.log(action);
        
        Polls.update({
            _id: pollID
        }, {
            $inc: action
        });
    }
});
