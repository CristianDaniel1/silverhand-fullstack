import loginImg from '../assets/rock-in.webp';
import { LoginForm } from '../components/forms/LoginForm.tsx';

export const Login = () => {
  return (
    <main className="relative overflow-x-clip lg:pt-12">
      <section className="padding-y grid grid-cols-1 lg:grid-cols-2 max-container">
        <div className="h-full w-full overflow-clip aspect-video rounded-lg hidden lg:flex">
          <img
            src={loginImg}
            alt="taças de vinho em cima de uma mesa"
            className="object-cover w-full h-full brightness-75 aspect-video animate-opacity"
          />
        </div>
        <div className="max-container md:padding-x flex items-center py-6">
          <LoginForm />
        </div>
      </section>
    </main>
  );
};
