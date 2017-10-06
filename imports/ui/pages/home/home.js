import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import '../../components/taskAdd/taskAdd';
import '../../components/taskList/taskList';

import './home.html';

Template.home.onCreated(function homeOnCreated() {
});

Template.home.helpers({});
