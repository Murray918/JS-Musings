// andrew likes vanilla-ice-cream
// interface IceCreamTasteGraph {
//     people: Person[]
// }

class Person {
  constructor(name: string) {
    this.name = name;
  }

  addFlavorNode(flavor: string): void {
    this.flavorNodes = [...this.flavorNodes, new FlavorNode(flavor)];
  }
}

class FlavorNode {
  constructor(flavor: string) {
    this.flavor = flavor;
  }
}

class Graph {
  // this is the "interface for the class"
  people: Person[];
  flavor: FlavorNode[];
  edges: [string, string][];

  // this is the class itself
  constructor() {
    this.people = [];
    this.flavor = [];
    this.edges = [];
  }

  addPerson(name: string): Person {
    const newPerson = new Person(name);
    this.people.push(newPerson);
    return newPerson;
  }

  getPerson(person: string): Person {
    return this.people.find((currentPerson) => currentPerson.name === person);
  }

  addFlavor(flavor: string): FlavorNode {
    const newFlavor = new FlavorNode(flavor);
    this.flavor.push(newFlavor);
    return newFlavor;
  }

  getFlavor(flavor: string): FlavorNode {
    return this.flavor.find((currentFlavor) => currentFlavor.flavor === flavor);
  }

  addTasteEdge(person, flavor) {
    const newPerson = this.addPerson(person);
    const newFlavorNode = this.addFlavor(flavor);
    this.edges = [...this.edges, [newPerson.name, newFlavorNode.flavor]];
  }

  getFlavorFriends() {
    return this.edges.reduce((friends: any, edge: [string, string]) => {
      //
    }, []);
  }
}

const party = new Graph();
party.addTasteEdge("Andrew", "Rocky Road");
party.addTasteEdge("Shahzad", "Chocolate");
party.addTasteEdge("Mel", "Rocky Road");
party.addTasteEdge("Caleb", "Chocolate");
party.addTasteEdge("Daniel", "Vanilla");
party.addTasteEdge("Chris", "Chocolate");
party.addTasteEdge("Francis", "Birthday Cake"); //?
party.edges; //?
party; //?

interface Person {
  name: string;
  flavorNodes: FlavorNode[];
}

interface FlavorNode {
  flavor: string;
}
