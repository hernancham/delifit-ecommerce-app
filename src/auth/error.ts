export class LoginAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
  }
}
