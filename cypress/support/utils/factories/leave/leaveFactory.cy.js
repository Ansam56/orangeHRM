import { faker } from "@faker-js/faker";

export default class leaveFactory {
  static addLeaveTypeInfo({ name, situational }) {
    return {
      name: name || `${faker.word.adjective()} leave`,
      situational: situational || faker.datatype.boolean(),
    };
  }
}
