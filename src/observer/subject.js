export default class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    const index = this.observers.findIndex(obj => obj === observer);
    this.observers.splice(index, 1);
  }

  notify() {
    console.log('Notifying observers!');
    this.observers.forEach(obs => obs.update());
  }
}
