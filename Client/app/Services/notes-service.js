(function()
  {
  angular.module('notely')
      .service('NotesService', NotesService);

  NotesService.$inject=['$http'];
  function NotesService($http)
    {
    var _this = this;
    _this.notes = [];

    _this.fetch = function (callback)
      {
        //async - this will not wait before going to the next line
        // .success will wait until get finishes
      $http.get('http://localhost:3030')
          .success(function(notesData)
            {
            _this.notes = notesData;
            callback();
          });

    };
    _this.getNotes = function()
      {
      return _this.notes;
    };

  }
}());
