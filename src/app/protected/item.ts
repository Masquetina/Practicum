import { Comment } from "./comment";

export class Item {
  constructor(public name: string, public description: string, public comments: Comment[]) {

  }
}
