import {
  MultithreadItComponent,
  MultithreadItEventsHandler
} from 'multithread-it';

import * as Form from './Form';
import * as List from './List';

export class Container extends MultithreadItComponent {
  _datas = [];

  constructor(menuLinks) {
    super();

    this._form = new Form.Component();
    this._list = new List.Component();

  }

  onInit() {
    this.watch(
      state => state.default.datas,
      datas => this._datas = datas
    );
  }

  render() {
    return (
      <div>
        <h1 className="title is-1">Multithread-it app</h1>
        {this._form.render()}
        {this._list.render(this._datas)}
      </div>
    );
  }
}

export class EventsHandlers extends MultithreadItEventsHandler {
  constructor(workerStore) {
    super(workerStore);

    this._form = new Form.EventsHandlers(this._worker);
  }

  register(eventsMap) {
    this._form.register(eventsMap);
  }
}
