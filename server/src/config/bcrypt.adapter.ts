import { compare, genSalt, hash } from 'bcryptjs';

export class BcryptAdapter {
  static async hashAsync(password: string) {
    const salt = await genSalt();
    return hash(password, salt);
  }

  static async compareAsync(password: string, hashed: string) {
    return compare(password, hashed);
  }
}
