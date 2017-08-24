import { Connection } from './connection';

/**
 * Represents one client
 */
export class Client {


  constructor (
    public name: string,
    public connections: Array<Connection>
  ) { }
}
