import {
  MultithreadItComponent,
  MultithreadItEventsHandler
} from 'multithread-it';

import { addData } from '../../actions';
import * as ActionTypes from '../../actions/ActionTypes';

const COMP_ID = 'FORM-ADDER';

export class Component extends MultithreadItComponent {

  render() {
    return (
      <form name="example-mi" data-submit={COMP_ID}>
        <p className="control">
          <input type="text" className="input" name="title" placeholder="title"/>
        </p>
        <p className="control">
          <input type="text" className="input" name="description" placeholder="description"/>
        </p>
        <button type="submit" className="button is-primary" >Add</button>
      </form>
    );
  }
}

export class EventsHandlers extends MultithreadItEventsHandler {
  constructor(workerStore) {
    super(workerStore);

    this.addEventHandlers(
      'submit',
      e => this._onSubmit(e)
    );
  }

  _onSubmit(e) {
    const target = e.target;
    if (target['data-submit'] === COMP_ID) {
      e.preventDefault();
      const title = target.title.value;
      const description = target.description.value;
      this._worker.dispatchEvent(
        ActionTypes.ADD_VALUE,
        {title: title, description: description}
      );
    }
  }
}
