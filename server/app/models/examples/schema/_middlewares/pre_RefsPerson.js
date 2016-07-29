/**
 * pre middlewares for RefsPerson schema
 */



/**
 * delete all stories linked to person
 * person._id === story._creator
 */
module.exports.delLinkedStories = function (next) {
    'use strict';


    //this.model('refsStoryMD') === refsStoryModel   (defined in  models/refs.js by var refsStoryModel = mongoose.model('refsStoryMD', RefsStorySchema);)
    this.model('refsStoryMD').remove({_creator: this._id}) //this._id is person._id
        .then(function (removedStories) {
            console.log('REMOVED STORIES: \n', JSON.stringify(removedStories, null, 2));
        });

    next();
};
