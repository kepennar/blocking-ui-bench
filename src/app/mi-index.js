// Polyfills
// import 'babel-polyfill';


import { App as MiApp } from 'multithread-it';

import { EventsHandlers as ContainerEventsHandlers } from './mi-components/Container';
import AppWorker from 'worker!./worker';

document.addEventListener('DOMContentLoaded',() => {
  // Multithread-it app
  MiApp(
    document.getElementById('mi-app'),
    ContainerEventsHandlers,
    AppWorker
  );
});
