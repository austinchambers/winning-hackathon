
export interface clientItem {
    name: string,
    connections: Array<connectionItem>
}

export interface connectionItem {
  ourRep: string,
  theirRep: string,
  strength: number
}
