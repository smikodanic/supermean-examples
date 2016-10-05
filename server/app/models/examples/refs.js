/**
 * Actions on models refsPersonModel & refsStoryModel
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));


//person model
var RefsPersonSchema = require('./schema/RefsPerson');
var refsPersonModel = mongoose.model('refsPersonMD', RefsPersonSchema);

//story model
var RefsStorySchema = require('./schema/RefsStory');
var refsStoryModel = mongoose.model('refsStoryMD', RefsStorySchema);




/* *** ACTIONS *** */

/*
 * Empty collections 'refs_story' & 'refs_person' before examples.
 */
module.exports.emptyCollections = function () {
    'use strict';
    var promis1 = refsPersonModel.removeAsync();
    var promis2 = refsStoryModel.removeAsync();

    return BPromise.all([promis1, promis2]).timeout(3000, 'Operation timed out!!!');
};


/*
 * Save person then story.
 * Both savings can be performed in parallel
 */
module.exports.savePersonThenStoryAsync = function (docPerson, docStory) {
    'use strict';

    //defining docs
    var person = new refsPersonModel(docPerson);
    var story = new refsStoryModel(docStory);

    //define story._creator
    story._creator = person._id;

    //saving is performed in parralel (results are  promises)
    var promisPerson = person.saveAsync();
    var promisStory = story.saveAsync();

    //get resulting promise and return it to router
    return BPromise
        .all([promisPerson, promisStory])
        .timeout(3000, 'TimeOutErr: One or more docs are not inserted!');

};




/*
 * Save story then person.
 * first save story (_id will be automatically assigned) -> take story._id and define person.stories arr -> save person
 */
module.exports.saveStoryThenPersonAsync = function (docPerson, docStory) {
    'use strict';

    //defining docs to be inserted
    var person = new refsPersonModel(docPerson);
    var story = new refsStoryModel(docStory);

    //first validate person doc because we don't want to save story if person is not valid
    //To make intentionall error make person.age = 'should be number';
    return person.validateAsync()
        .then(function () {

            return story.saveAsync() //saving story
                .then(function (savedStory) {

                    //fill person.stories array
                    person.stories.push(savedStory._id);

                    return person.saveAsync()  //saving person
                        .then(function (savedPerson) {
                            var savedArr = [savedStory, savedPerson];
                            return savedArr; //this will be eturned to router as fulfilled value of promise
                        });
                });
        });

};


/*
 * Get person with populated story data.
 */
module.exports.getPerson = function (person_id) {
    'use strict';

    // var query = refsPersonModel.findById(person_id).populate('stories');
    // var query = refsPersonModel.findById(person_id).populate('stories', 'title'); //populate only with story.title

    var query = refsPersonModel.findById(person_id)
        .populate({
            path: 'stories',
            match: {title: {$regex: /IVAN/ig}},
            select: 'title -_id', //remove _id
            options: {limit: 1} //limit results in stories array
        });
    /*
    {
        "_id": 3,
        "updated_at": "2016-07-29T12:53:45.061Z",
        "created_at": "2016-07-29T12:53:45.061Z",
        "name": "Ivanko",
        "age": 23,
        "__v": 0,
        "stories": [
          {
            "title": "Ivan story bla bla"
          }
        ]
    }
     */


    return query;
};



/*
 * Usage of execPopulate() e.g. execPopulateAsync()
 */
module.exports.execPopulatePerson = function (person_id) {
    'use strict';

    var query = refsPersonModel.findOne().sort('-updated_at').execAsync()
        .then(function (doc) {
            console.log('OriginalDOC: ' + JSON.stringify(doc.inspect(), null, 2));

            doc.populate({
                path: 'stories',
                match: {},
                select: 'title -_id', //remove _id
                options: {limit: 1} //limit results in stories array
            });


            return doc.execPopulate().catch((err) => {throw err});
        });

    return query;
};



/*
 * Delete person doc and all refrenced story docs.
 * Use middleware .pre('remove', delFunction) inside RefsPerson schema.
 */
module.exports.removePerson = function (person_id) {
    'use strict';

    //WARNING:This will not activate 'pre' middleware defined in RefsPerson schema because remove() must be applied to doc, not to model.
    // return refsPersonModel.findByIdAndRemoveAsync(person_id);

    return refsPersonModel.findOneAsync({_id: person_id})
        .then(function (personDoc) {

            if (personDoc) {
                return personDoc.remove(); //this removal will activate pre middleware and story will be deleted too
            } else {
                throw new Error('person_id does not exists in database!');
            }
        });
};



/*
 * Delete story doc and linked data in person doc.
 * Delete story and delete it from person.stories[] array.
 */
module.exports.removeStory = function (story_id) {
    'use strict';

    return refsStoryModel.findOneAndRemoveAsync({_id: story_id})
        .then(function (delStoryDoc) {
            console.log('delStoryDoc: ' + JSON.stringify(delStoryDoc, null, 2));
            if (!delStoryDoc) throw new Error('None doc is deleted! story_id does not exists in refs_story collection');

            return refsPersonModel.findOne().elemMatch('stories', {$eq: delStoryDoc._id})
                .execAsync()
                .then(function (personDoc) {
                    if (!personDoc) throw new Error('No person doc.');

                    //removing story_id from person.stories[] array
                    var index = personDoc.stories.indexOf(delStoryDoc._id);
                    personDoc.stories.splice(index, 1);

                    console.log('personDoc: ' + JSON.stringify(personDoc, null, 2));

                    //update person
                    var person2 = new refsPersonModel(personDoc); //assign save() to doc
                    return person2.saveAsync()
                        .then(function (updatedPersonDoc) {
                            var toRouter = [delStoryDoc, updatedPersonDoc];
                            console.log('toRouter' + JSON.stringify(toRouter, null, 2));
                            return toRouter; //this will be returned to router
                        });

                })
                .catch(function (err) {
                    // return BPromise.reject(err); //use this or just
                    throw err;
                });

        });
};
