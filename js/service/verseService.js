app.service('verseService', function($http, $q, fb) {

  this.refGetVerses = function() {
    return new Firebase(fb.url + '/home')
  }
  this.refgetMemorize = function() {
    return new Firebase(fb.url + '/memorize')
  }

  //firebase

  var toMemorizeArr = [{
    topic: 'Love',
    reference: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. - John 3:16"
  }, {
    topic: 'Bible Verse',
    reference: 'But those who wait on the Lord shall renew their strength; they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint. - Isaiah 40:31'
  }, {
    topic: 'Bible Verse',
    reference: 'But He answered and said, “It is written, ‘Man shall not live by bread alone, but by every word that proceeds from the mouth of God. - Matthew 4:4'
  }, {
    topic: 'Bible Verse',
    reference: 'The name of the Lord is a strong tower, the righteous run to it and are safe. - Proverbs 18:10'
  }, {
    topic: 'Bible Verse',
    reference: 'If any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him - James 1:5'
  }];
  //end of verse array

  console.log(toMemorizeArr);



  // var toMemorizeArr = [];


  this.memorizeArr = function() {
    return toMemorizeArr;
  }

  this.addToMemArr = function(verseGet) {
    toMemorizeArr.push({
      theVerse: verseGet
    });
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

  var memorizedArr = [{
    topic: 'Poetry',
    reference: 'Two roads diverged in a wood, and I— I took the one less traveled by, And that has made all the difference. - Robert Frost'
  }, {
    topic: 'Inspiration',
    reference: 'People will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou'
  }, {
    topic: 'Angular JS',
    reference: "Framework is the paradigm on how you organize your code."
  }, {
    topic: 'Inspiration',
    reference: 'The silence of the soul makes more distinct the voice of God. - Ellen White'
  }, {
    topic: 'Angular JS',
    reference: 'ng-click is a function that gets called when the user clicks'
  }, {
    topic: 'JQuery',
    reference: 'JQuery is a DOM manipulation libary.  Its not a framework.'
  }];

  this.memorized = function() {
    return memorizedArr;
  }

  this.ok = function(data, index) {
    console.log('service', toMemorizeArr[index].reference,
      data);
    if (toMemorizeArr[index].reference === data) {
      memorizedArr.unshift(toMemorizeArr[index]);
      toMemorizeArr.splice(index, 1);
    }
  };



});
