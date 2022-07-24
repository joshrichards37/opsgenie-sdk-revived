require('../configure');
const opsgenie = require('../..');

opsgenie.configure({
  host: 'https://api.opsgenie.com',
  api_key: 'yourApiKey',
});

const list_alert_logs_identifier = {
  identifier: '5', // should be custom to your created alert
  identifierType: 'tiny',
};

const list_params = {
  offset: '1496838477430_1498839315423029794',
  direction: 'next',
  limit: '5',
  order: 'desc',
};

opsgenie.alertV2.listAlertLogs(list_alert_logs_identifier, list_params, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('List Alert Logs Response');
    console.log(result);
  }
});
