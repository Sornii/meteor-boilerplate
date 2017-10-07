import { SyncedCron } from 'meteor/percolate:synced-cron';

const EXAMPLE_CRON_NAME = 'Example cron';

SyncedCron.config({
  collectionName: 'crons',
});

SyncedCron.add({
  name: 'Remove example history',
  schedule(parser) {
    return parser.text('every 5 minutes');
  },
  job() {
    SyncedCron._collection.remove({ name: EXAMPLE_CRON_NAME });
  },
});

SyncedCron.add({
  name: EXAMPLE_CRON_NAME,
  schedule(parser) {
    return parser.text('every 5 seconds');
  },
  job() {
    return { "test": true };
  },
});
