var express = require('express');
var notelyServerApp = express();

notelyServerApp.get('/', function(req, res)
  {
    res.json([
      {
        title: 'Harcdoded Note',
        body_html: 'Cool note.  Aww shucks!'
      },
      {
        title: 'Another hardcoded note',
        body_html: "Ain't life grand!"
      }
    ]);

  });

  notelyServerApp.listen(3030, function()
  {
    console.log('Listening on http://Localhost:3030');
  });