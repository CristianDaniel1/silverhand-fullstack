import profileBackgroundImg from '../assets/guitar-img-2.webp';
import profileIcon from '../assets/profile.jpg';
import { ProfileInfo } from '../components/profile/profileInfo.tsx';
import { firstNameFormat } from '../utils/stringFormatters.ts';
import { EmailIcon } from '../components/icons/EmailIcon.tsx';
import { useState } from 'react';
import { MyOrders } from '../components/orders/myOrders.tsx';
import { partialDateFormatter } from '../utils/formatting.ts';
import { useAuth } from '../hooks/queries/useAuth.ts';

type TabProfile = 'My Orders' | 'Profile Details';

export const Profile = () => {
  const { userAuth } = useAuth();
  const [currentTab, setCurrentTab] = useState<TabProfile>('My Orders');

  function handleClickTab(tab: TabProfile) {
    setCurrentTab(tab);
  }

  const isTabInMyOrders = currentTab === 'My Orders';
  const isTabInDetails = currentTab === 'Profile Details';

  if (userAuth) {
    return (
      <main className="relative overflow-x-clip lg:pt-12 min-h-screen">
        <section className="padding-y max-container w-full">
          <div className="md:padding-x flex items-center justify-center sm:py-6">
            <div className="hidden lg:block fixed top-0 left-0 w-full z-[-1] h-full overflow-clip">
              <img
                src={profileBackgroundImg}
                alt="guitarra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" px-6 md:px-12 py-12 w-full md:w-[47rem] rounded-md animate-[slide-up_0.5s_ease-in-out_backwards] bg-white z-[2]">
              <div className="sm:flex items-center gap-8 pb-6 sm:pb-10">
                <div className="size-[6.25rem] mx-auto sm:mx-0 mb-8 sm:mb-0">
                  <img
                    src={profileIcon}
                    alt="Foto de perfil"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative flex-1">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-merry flex-1 text-center sm:text-left pb-6 sm:pb-4 overflow-hidden">
                      Olá, {firstNameFormat(userAuth!.name)}
                    </h2>
                    <div className="flex gap-2 text-secundary/70 items-center font-medium">
                      <EmailIcon />
                      e-mail:{' '}
                      <span className="text-primary font-medium">
                        {userAuth!.email}
                      </span>
                    </div>
                  </div>
                  <div className="hidden absolute top-0 right-0 sm:grid grid-cols-1 pt-2 sm:pt-0 sm:justify-items-end">
                    <p className="text-sm">Criado em:</p>
                    <div className="font-medium ">
                      {partialDateFormatter(userAuth!.createdAt)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 py-10 border-t border-secundary/20">
                <button
                  className={`border font-medium border-secundary/20 py-3 px-4 ${
                    isTabInMyOrders
                      ? 'bg-primary/90 text-secundary'
                      : 'hover:border-primary hover:text-primary duration-200'
                  }`}
                  onClick={() => handleClickTab('My Orders')}
                >
                  Meus Pedidos
                </button>
                <button
                  className={`border font-medium border-secundary/20 py-3 px-4 ${
                    isTabInDetails
                      ? 'bg-primary/90 text-secundary'
                      : 'hover:border-primary hover:text-primary duration-200'
                  }`}
                  onClick={() => handleClickTab('Profile Details')}
                >
                  Detalhes do Perfil
                </button>
              </div>
              {isTabInDetails && <ProfileInfo userInfo={userAuth!} />}
              {isTabInMyOrders && <MyOrders userId={userAuth!.id} />}
            </div>
          </div>
        </section>
      </main>
    );
  }
};
