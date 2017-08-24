/**
 * Represents one client
 */
export class Client {


  constructor (
    public label: string,
    public value: {
      endDate: Date,
      startDate: Date
    },
    public favorite: boolean,
    public client: string,
  ) { }
}
