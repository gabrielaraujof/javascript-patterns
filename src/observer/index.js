import Subject from './subject';
import Observer from './observer';

export default class Lab {
  static run() {
    const subject = new Subject();
    const obs1 = new Observer('Observer 1');
    const obs2 = new Observer('Observer 2');
    const obs3 = new Observer('Observer 3');

    subject.attach(obs1);
    subject.attach(obs2);
    subject.attach(obs3);

    subject.notify();

    subject.detach(obs2);

    const obs4 = new Observer('Observer 4');
    subject.attach(obs4);

    subject.notify();

    subject.detach(obs1);
    subject.detach(obs3);
    subject.detach(obs4);
  }
}
