import loginImg from '../assets/rock-in.webp';
import { LoginForm } from '../components/forms/LoginForm.tsx';

const Login = () => {
  return (
    <main className="relative overflow-x-clip lg:pt-12">
      <section className="padding-y grid grid-cols-1 lg:grid-cols-2 max-container">
        <div className="w-full h-[46rem] bg-slate-50 overflow-clip aspect-video rounded-lg hidden lg:flex">
          <img
            src={loginImg}
            alt="Guitarrista emocionado"
            loading="lazy"
            className="object-cover w-full aspect-video brightness-75 animate-opacity"
          />
        </div>
        <div className="max-container md:padding-x flex items-center py-6">
          <LoginForm />
        </div>
      </section>
    </main>
  );
};

export default Login;
