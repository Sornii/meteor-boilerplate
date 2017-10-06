import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app-body';

import '../../ui/pages/home/home';

FlowRouter.route('/', {
  name: 'home',
  action: () => BlazeLayout.render('App_body', { content: 'home' }),
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('invalid', {});
  },
};
