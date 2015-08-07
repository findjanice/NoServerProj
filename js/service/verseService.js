app.service('verseService', function($http, $q, fb) {

  this.refGetVerses = function() {
    return new Firebase(fb.url + '/home')
  }
  this.refgetMemorize = function() {
    return new Firebase(fb.url + '/memorize')
  }

  //firebase

  var toMemorizeArr = [{
    topic: 'Javascript Vocab',
    reference: "Lazy loading, also known as dynamic function loading, is a mode that allows a developer to determine what dependent files should not be loaded by default."

  }, {
    topic: 'Javascript',
    reference: "0! means zero factorial and is equal to 1"

  }, {
    topic: 'CSS',
    reference: "CSS is a style sheet language used for describing the look and formatting of a document written in a markup language"

  }, {
    topic: 'Inspirational',
    reference: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. - John 3:16"

  }, {
    topic: 'Bible Verse',
    reference: 'But those who wait on the Lord shall renew their strength; they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint. - Isaiah 40:31'
  }, {
    topic: 'Bible Verse',
    reference: 'The name of the Lord is a strong tower, the righteous run to it and are safe. - Proverbs 18:10'
  }, {
    topic: 'Bible Verse',
    reference: 'If any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him - James 1:5'
  }];
  //end of verse array

  var memorizedArr = [{
    topic: 'Poetry',
    reference: 'Two roads diverged in a wood, and I— I took the one less traveled by, And that has made all the difference. - Robert Frost',
    date: "August 5, 2015"

  }, {
    topic: 'Inspiration',
    reference: 'People will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou',
    date: "August 5, 2015"
  }, {
    topic: 'Angular JS',
    reference: "Framework is the paradigm on how you organize your code.",
    date: "August 4, 2015"
  }, {
    topic: 'Inspiration',
    reference: 'The silence of the soul makes more distinct the voice of God. - Ellen White',
    date: "August 2, 2015"
  }, {
    topic: 'Angular JS',
    reference: 'Ng-click is a function that gets called when the user clicks',
    date: "August 2, 2015"

  }, {
    topic: 'JQuery',
    reference: 'JQuery is a DOM manipulation libary.  Its not a framework.',
    date: "August 2, 2015"
  }];


  this.memorizeArr = function() {
    return toMemorizeArr;
  }

  this.addToMemArr = function(verseGet) {
    toMemorizeArr.push({
      reference: verseGet.reference,
      topic: verseGet.topic,
      date: new Date()
    });
    console.log('this is to memorize', toMemorizeArr);
    verseGet = {
      verseid: 'not in list',
      reference: ''
    };

    return toMemorizeArr;
  };

  this.typeToMemArr = function(data) {
    toMemorizeArr.unshift(data)
    console.log('this is type', toMemorizeArr)
    return toMemorizeArr;
  };

  this.totalToMemorize = function() {
    return toMemorizeArr.length;
  }

  this.totalMemorized = function() {
    return memorizedArr.length;
  }

  this.toDeleteMem = function(index) {
    toMemorizeArr.splice(index, 1);
  }

  this.memorized = function() {
    return memorizedArr;
  }

  this.ok = function(data, index) {
    console.log('service', toMemorizeArr[index].reference,
      data);
    if (toMemorizeArr[index].reference === data) {
      memorizedArr.unshift({
        topic: toMemorizeArr[index].topic,
        reference: toMemorizeArr[index].reference,
        date: new Date()
      });

      toMemorizeArr.splice(index, 1);
      console.log(memorizedArr);
    }
  };



});
