(function() {
  angular.module('notely.notes', [
    'ui.router'
  ])
    .config(notesConfig);

notesConfig.$inject=['$stateProvider'];

function notesConfig($stateProvider)
  {
    $stateProvider

      .state('notes',
        {
          url: '/notes',
          //template: '<h1>Notely</h1><p>{{ message }}</p><div ui-view></div>',
          templateUrl: '/notes/notes.html',
          controller: NotesController
        })
        //child of notes
        .state('notes.form',{
          url: '/:noteId',
          templateUrl: '/notes/notes-form.html'
        });
  }

  NotesController.$inject=['$state', 'NotesService'];
  function NotesController($state, NotesService)
  {
    NotesService.fetch(function()
      {
        console.log("Notes: " + NotesService.getNotes().length);
      });
    $state.go('notes.form');
  }
})();
