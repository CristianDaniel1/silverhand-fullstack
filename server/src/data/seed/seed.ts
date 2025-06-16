import { BcryptAdapter } from '../../config/bcrypt.adapter';
import { prisma } from '../postgres';
import { instrumentsData, usersData } from './data';

(async () => {
  await main();

  await prisma.$disconnect();
})();

async function main() {
  await Promise.all([
    prisma.$transaction([
      prisma.orderItem.deleteMany(),
      prisma.order.deleteMany(),
    ]),
    prisma.$transaction([
      prisma.cartItem.deleteMany(),
      prisma.cart.deleteMany(),
    ]),
  ]);

  await Promise.all([prisma.instrument.deleteMany(), prisma.user.deleteMany()]);

  const users = await Promise.all(
    usersData.map(async user => ({
      ...user,
      password: await BcryptAdapter.hashAsync(user.password),
    }))
  );

  await Promise.all([
    prisma.user.createMany({
      data: users,
    }),
    prisma.instrument.createMany({
      data: instrumentsData,
    }),
  ]);
}
