import { Worker } from 'multithread-it';

import ActionsCreator from './actions-creator';
import * as reducers from '../reducers';

import { Container as ContainerComponent } from '../mi-components/Container';

const app = new ContainerComponent();
Worker.subscribeAppToChanges(app, ActionsCreator, reducers);
