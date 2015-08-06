app.service('dashboardService', function($http, $q) {

  var memoryTip = [
    '1. Rote Memorization - repeat, repeat, repeat',
    '2. List - make one and look at it over and over and over again.',
    '3. Pratice - out loud and eventually, without looking at the list.'
  ];

  this.memoryTips = function() {
    return memoryTip;
  };

  this.getQod = function() {
      var deffered = $q.defer();
      $http({
          url: 'http://quotesondesign.com/api/3.0/api-3.0.json',
          dataType: 'json',
          crossDomain: 'true',
          method: 'GET'
        })
        .then(function(data) {
          console.log(data);
          deffered.resolve({
            quote: data.data.quote,
            author: data.data.author
          })
        });
      return deffered.promise
    }
    //end service
})
