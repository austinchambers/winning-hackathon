/**
 * Represents one client
 */
export class Connection {


  constructor (
    public ourRepresentative: string,
    public theirRepresentative: string,
    public strength: number

  ) { }
}
