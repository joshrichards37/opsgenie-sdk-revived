const opsgenie = require('../..');
require('../configure');

const list_params = {};

opsgenie.userV2.list(list_params, (error, users) => {
  if (error) {
    console.error(error);
  } else {
    console.log(users);
  }
});
