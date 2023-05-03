/* global loggedUser projectInfo projectName */

import 'nwl-components/dist/style.css';
import ProjectPage from '../components/ProjectPage.vue';
import config from '../nwl-components-config';
import { createApp } from 'vue';

const app = createApp(ProjectPage, {project: projectInfo, projectName});
app.provide('config', config);
app.provide('user', loggedUser);
app.provide('displaySettings', true);

app.mount('#app');
