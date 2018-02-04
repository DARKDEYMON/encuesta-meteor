Template.body.helpers({
    polls: function () {
        return Polls.find();
    }
});

// agrega index a cada item 
Template.registerHelper('indexedArray', function (context, options) {
    if (context) {
        return context.map(function (item, index) {
            item._index = index;

            //console.log(context);
            //console.log(options);

            //console.log(item);
            //console.log(index);
            return item;
        });
    }
});
