export interface IStudent {
  studentNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
}
export class Student implements IStudent {
  public readonly studentNumber: string;
  public firstName: string;
  public lastName: string;
  public department: string;
  public email: string;
  public phone: string;

  constructor(
    studentNumber: string,
    firstName: string,
    lastName: string,
    department: string,
    email: string,
    phone: string
  ) {
    this.studentNumber = studentNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.email = email;
    this.phone = phone;
  }
}