var archy = require('../');
var s = archy({
  name : 'beep',
  children : [
    'ity',
    {
      name : 'boop',
      children : [
        {
          name : 'o_O',
          children : [
            {
              name : 'oh',
              children : [ 'hello', 'puny' ]
            },
            'human'
          ]
        },
        'party\ntime!'
      ]
    }
  ]
}, undefined, { labelField: 'name', nodesField: 'children' });
console.log(s);
