import {
  MultithreadItComponent
} from 'multithread-it';

const COMP_ID = 'LIST';

export class Component extends MultithreadItComponent {

  render(datas) {
    const dataElement = data => <tr><td>{data.title}</td><td>{data.description}</td></tr>;

    return (
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {datas.map(dataElement)}
        </tbody>
      </table>
    );
  }
}
