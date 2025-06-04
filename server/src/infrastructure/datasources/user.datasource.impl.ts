import { RegisterUserDto } from '../../application/auth/dtos/register-user.dto';
import { UpdateUserDto } from '../../application/users/dtos/update-user.dto';
import { prisma } from '../../data/postgres';

import { UserDatasource } from '../../domain/datasources/user.datasource';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../shared/errors/custom.error';

export class UserDatasourceImpl implements UserDatasource {
  async create(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const usersExists = await prisma.user.findFirst({
      where: {
        OR: [{ email: registerUserDto.email }, { cpf: registerUserDto.cpf }],
      },
    });

    if (usersExists)
      throw CustomError.conflict(`Já existe um usuário com esses dados`);

    const user = await prisma.user.create({
      data: registerUserDto,
    });

    return UserEntity.fromObject(user);
  }

  async getAll(): Promise<UserEntity[]> {
    const users = await prisma.user.findMany();

    return users.map(user => UserEntity.fromObject(user));
  }

  async findById(id: string): Promise<UserEntity> {
    const user = await prisma.user.findFirst({
      where: { id },
    });

    if (!user)
      throw CustomError.notFound(`Usuário com id ${id} não foi encontrado`);

    return UserEntity.fromObject(user);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const userEmail = await prisma.user.findFirst({
      where: { email },
    });

    if (!userEmail) {
      throw CustomError.badRequest(
        'Dado(s) fornecido(s) esta(ão) incorreto(s)'
      );
    }

    return UserEntity.fromObject(userEmail);
  }

  async findByCpf(cpf: string): Promise<UserEntity> {
    const userCpf = await prisma.user.findFirst({
      where: { cpf },
    });

    if (!userCpf) {
      throw CustomError.notFound(`Usuário com CPF ${cpf} não foi encontrado`);
    }

    return UserEntity.fromObject(userCpf);
  }

  async updateById(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const { id, values } = updateUserDto;
    const user = await this.findById(id);

    const { cpf, email } = values as { cpf: string; email: string };

    if (email && user.email !== email) {
      const existingEmail = await prisma.user.findUnique({ where: { email } });

      if (existingEmail) {
        throw CustomError.conflict(
          `Já existe um usuário com o e-mail ${email}`
        );
      }
    }

    if (cpf && user.cpf !== cpf) {
      const existingCpf = await prisma.user.findUnique({ where: { cpf } });

      if (existingCpf) {
        throw CustomError.conflict(`Já existe um usuário com o CPF ${cpf}`);
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: updateUserDto.id },
      data: values,
    });

    return UserEntity.fromObject(updatedUser);
  }

  async deleteById(id: string): Promise<UserEntity> {
    await this.findById(id);

    const deleted = await prisma.user.delete({
      where: { id },
    });

    return UserEntity.fromObject(deleted);
  }
}
