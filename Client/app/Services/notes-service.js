(function() {
  angular.module('notely')
    .service('NotesService', NotesService);

  NotesService.$inject = ['$http'];
  function NotesService($http) {
    var _this = this;
    _this.notes = [];

    _this.fetch = function() {
      return $http.get('http://localhost:3030/notes')
        .then(
          //success
          function(response) {
            _this.notes = response.data;
          },

        //failure
        function(response) {
          console.log('aww, snap:' + response);
        }
      );
    };

    _this.getNotes = function() {
      return _this.notes;
    };

    _this.create = function (note) {
      return $http.post('http://localhost:3030/notes', {
        note: note
      }).then(function(response) {
        _this.notes.unshift(response.data.note);
      });
    };

    _this.findById = function(noteId) {
      for (var i = 0; i < _this.notes.length; i++) {
        //if ids match return note
        if (_this.notes[i]._id === noteId) {
          return angular.copy(_this.notes[i]);
        }
      }
      return {};
    };

  }
}());
