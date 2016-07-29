/**
 * GET /examples/mongoose/70refs...
 */

require('rootpath')();
var refs_model = require('server/app/models/examples/refs');
var errorsLib = require('server/app/lib/errorsLib');

//mongoose promisification
var Bpromise = require('bluebird');
Bpromise.promisifyAll(require('mongoose'));


/****************************************************
* GET /examples/mongoose/70refs-savepersonthenstory *
*****************************************************
* Save person then story. Two savings will be executed in parralel. */
module.exports.savepersonthenstory = function (req, res, next) {
    'use strict';

    //person to be saved
    var docPerson = {
        _id: 1,
        name: 'John',
        age: 33
    };

    //story to be saved
    var docStory = {
        title: 'John first story!!!',
        chapter: 22
    };


    refs_model.savePersonThenStoryAsync(docPerson, docStory)
        .spread(function (personIns, storyIns) {
            console.log('Inserted person: \n' + JSON.stringify(personIns, null, 2));
            console.log('Inserted story: \n' + JSON.stringify(storyIns, null, 2));
            res.send(
                'Inserted person: <pre>' + JSON.stringify(personIns, null, 2) + '</pre>' +
                'Inserted story: <pre>' + JSON.stringify(storyIns, null, 2) + '</pre>'
            );
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
CONSOLE:
Inserted person:
{
  "__v": 0,
  "updated_at": "2016-07-29T11:17:27.843Z",
  "created_at": "2016-07-29T11:17:27.843Z",
  "_id": 1,
  "name": "John",
  "age": 33,
  "stories": []
}
Inserted story:
{
  "__v": 0,
  "updated_at": "2016-07-29T11:17:27.844Z",
  "created_at": "2016-07-29T11:17:27.844Z",
  "_creator": 1,
  "title": "John first story!!!",
  "_id": "579b3b47d5ad921f1d8f0de5",
  "fans": []
}
 */



/*****************************************************
* GET /examples/mongoose/70refs-savestorythenperson  *
******************************************************
* Save story then person. Two savings will be executed serially one after another because we person needs story._id after story is saved.
* first save story (_id will be automatically assigned) -> take story._id and define person.stories arr -> save person */
module.exports.savestorythenperson = function (req, res, next) {
    'use strict';

    //person to be saved
    var docPerson = {
        _id: 3,
        name: 'Ivanko',
        age: 23
    };

    //story to be saved
    var docStory = {
        title: 'Ivan story bla bla',
        chapter: 12
    };


    refs_model.saveStoryThenPersonAsync(docPerson, docStory)
        .spread(function (savedStory, savedPerson) {
            console.log('Inserted story: \n' + JSON.stringify(savedStory, null, 2));
            console.log('Inserted person: \n' + JSON.stringify(savedPerson, null, 2));
            res.send(
                'Inserted story: <pre>' + JSON.stringify(savedStory, null, 2) + '</pre>' +
                'Inserted person: <pre>' + JSON.stringify(savedPerson, null, 2) + '</pre>'
            );
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
{
  "__v": 0,
  "updated_at": "2016-07-29T12:53:45.057Z",
  "created_at": "2016-07-29T12:53:45.057Z",
  "title": "Ivan story bla bla",
  "chapter": 12,
  "_id": "579b51d98417c192275fd2af",
  "fans": []
}
Inserted person:
{
  "__v": 0,
  "updated_at": "2016-07-29T12:53:45.061Z",
  "created_at": "2016-07-29T12:53:45.061Z",
  "_id": 3,
  "name": "Ivanko",
  "age": 23,
  "stories": [
    "579b51d98417c192275fd2af"
  ]
}
 */



/*****************************************************
* GET /examples/mongoose/70refs-getperson?person_id=3 *
******************************************************
* Get person populated with story data. E.g. person.stories[] will be populated with story.
* Notice how story _id in person.stories[] is replaced with full object. */
module.exports.getperson = function (req, res, next) {
    'use strict';

    var person_id = req.query.person_id;

    refs_model.getPerson(person_id).execAsync()
        .then(function (resultPerson) {
            console.log('Result with populated data: \n' + JSON.stringify(resultPerson, null, 2));
            res.send('Result with populated data: <pre>' + JSON.stringify(resultPerson, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
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
      "_id": "579b51d98417c192275fd2af",
      "updated_at": "2016-07-29T12:53:45.057Z",
      "created_at": "2016-07-29T12:53:45.057Z",
      "title": "Ivan story bla bla",
      "chapter": 12,
      "__v": 0,
      "fans": []
    }
  ]
}
 */


/*****************************************************
* GET /examples/mongoose/70refs-removeperson?person_id=3 *
******************************************************
* Delete person doc and all refrenced story docs.
* Use middleware .pre('remove', delFunction) inside RefsPerson schema. */
module.exports.deleteperson = function (req, res, next) {
    'use strict';

    var person_id = req.query.person_id;

    refs_model.removePerson(person_id)
        .then(function (removedPerson) {
            console.log('Removed person: \n' + JSON.stringify(removedPerson, null, 2));
            res.send('Removed person: <pre>' + JSON.stringify(removedPerson, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
CONSOLE:
Removed person:
{
  "_id": 1,
  "updated_at": "2016-07-29T15:57:20.391Z",
  "created_at": "2016-07-29T15:57:20.391Z",
  "name": "John",
  "age": 33,
  "__v": 0,
  "stories": []
}
 */



/*****************************************************
* GET /examples/mongoose/70refs-removestory *
******************************************************
* Delete story and delete it from person.stories[] array.*/
module.exports.deletestory = function (req, res, next) {
    'use strict';

    var story_id = req.query.story_id;

    refs_model.removeStory(story_id)
        .spread(function (delStoryDoc, updatedPersonDoc) {
            console.log('Removed story: \n' + JSON.stringify(delStoryDoc, null, 2));
            console.log('Updated person: \n' + JSON.stringify(updatedPersonDoc, null, 2));

            res.send(
                'Removed story: <pre>' + JSON.stringify(delStoryDoc, null, 2) + '</pre>' +
                'Updated person: <pre>' + JSON.stringify(updatedPersonDoc, null, 2) + '</pre>'
            );
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
Removed story:
{
  "_id": "579b9884ff18cdb85501530f",
  "updated_at": "2016-07-29T17:55:16.851Z",
  "created_at": "2016-07-29T17:55:16.851Z",
  "title": "Ivan story bla bla",
  "chapter": 12,
  "__v": 0,
  "fans": []
}
Updated person:
{
  "__v": 1,
  "age": 23,
  "name": "Ivanko",
  "created_at": "2016-07-29T17:55:16.862Z",
  "updated_at": "2016-07-29T17:55:26.239Z",
  "_id": 3,
  "stories": [] //notice that id "579b9884ff18cdb85501530f" is removed from 'stories'
}
 */
