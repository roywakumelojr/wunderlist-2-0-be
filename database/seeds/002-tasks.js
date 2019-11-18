let moment = require('moment');

exports.seed = function(knex) {

  return knex('tasks').insert([

    {
      user_id: '1',
      title: 'Create a marketing page',
      completed: 'false',
      created_at: moment().format('MM-DD-YYYY'),
    }, 

    {
      user_id: '1',
      title: 'Create a react app', 
      completed: 'false', 
      created_at: moment().format('MM-DD-YYYY'),
    }, 
    {
      user_id: '1',
      title: 'Create a Node Api', 
      completed: 'false', 
      created_at: moment().format('MM-DD-YYYY'),
    },
    {
      user_id: '2',
      title: 'Create a marketing page',
      completed: 'true',
      created_at: moment().format('MM-DD-YYYY'),
    }, 

    {
      user_id: '2',
      title: 'Create a react app', 
      completed: 'true', 
      created_at: moment().format('MM-DD-YYYY'),
    }, 
    {
      user_id: '3',
      title: 'Create a Node Api', 
      completed: 'true', 
      created_at: moment().format('MM-DD-YYYY'),
    },
  ]);
    
};
