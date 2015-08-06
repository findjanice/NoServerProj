app.service('verseService', function($http, $q, fb) {

  this.refGetVerses = function() {
    return new Firebase(fb.url + '/home')
  }
  this.refgetMemorize = function() {
    return new Firebase(fb.url + '/memorize')
  }

  //firebase

  var verses = [{
    topic: 'Love',
    verseId: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
    reference: '- John 3:16'

  }, {
    topic: 'Hope',
    verseId: 'But those who wait on the Lord shall renew their strength; they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint.',
    reference: '- Isaiah 40:31'
  }, {
    topic: 'Faith',
    verseId: 'But He answered and said, “It is written, ‘Man shall not live by bread alone, but by every word that proceeds from the mouth of God.',
    reference: '- Matthew 4:4'
  }, {
    topic: 'Fear',
    verseId: 'The name of the Lord is a strong tower, the righteousness run to it and are safe.',
    reference: '- Proverbs 18:10'
  }, {
    topic: 'Wisdom',
    verseId: 'If any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him',
    reference: '- James 1:5'
  }];
  //end of verse array



  this.verseGet = function() {
    return verses;
  };

  var toMemorizeArr = [];


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

  this.typeToMemArr = function(typeVerse) {
    toMemorizeArr.push({
      theTypeVerse: typeVerse
    })
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

  var memorizedArr = [];

  this.memorized = function() {
    return memorizedArr;
  }

  this.ok = function(data, index) {
    console.log('service', toMemorizeArr[index].theTypeVerse, data);
    if (toMemorizeArr[index].theTypeVerse === data) {
      memorizedArr.push(toMemorizeArr[index]);
      // toMemorizeArr.splice(index, 1);
    }
  };

});
