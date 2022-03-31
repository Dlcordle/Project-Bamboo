
export class User {
  id: number;
  fname: string;
  lname: string;
  username: string;
  pwd: string;
  email: string;

  constructor(
    id: number=0,
    fname: string='',
    lname: string='',
    username: string='',
    pwd: string='',
    email: string='',
) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.username = username;
    this.pwd = pwd;
    this.email = email;
  }

  valid() {
    return (this.fname.trim() && this.lname.trim() && this.username.trim() && this.email.trim() &&this.pwd.trim())
  }
  validLogIn() {
    return (this.username.trim() && this.pwd.trim())
  }

}
