import signUpImg from '../assets/rock-concert.webp';
import { RegisterForm } from '../components/forms/RegisterForm.tsx';

const SignUp = () => {
  return (
    <main className="relative overflow-x-clip lg:pt-12">
      <section className="padding-y flex justify-center max-container">
        <div className="max-container md:padding-x flex items-center py-6">
          <div className="hidden lg:block fixed top-0 left-0 w-full z-[-1] h-full overflow-clip">
            <img
              src={signUpImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
};

export default SignUp;
