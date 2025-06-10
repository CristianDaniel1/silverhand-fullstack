import samuraiGuitar from '../assets/silverhand-guitar.webp';
import guitarView from '../assets/playing-guitar-2.webp';
import guitarView2 from '../assets/other-img.webp';
import { ImageSlider } from '../components/ImageSlider.tsx';
import { ShopContainer } from '../components/instrumentShop/ShopContainer.tsx';

export const InstrumentShop = () => {
  return (
    <main className="relative overflow-x-clip">
      <div className="min-h-screen">
        <ImageSlider />
        <section className="padding-y max-container px-0 sm:padding-x">
          <h2 className="translate-x-3 sm:translate-x-0 text-3xl leading-tight xl:text-[3rem] pb-5 font-merry text-balance font-light underline-visual relative">
            Silver<span className="text-primary">Hand</span> Style
          </h2>
          <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-6 lg:pt-6">
            <div className="overflow-clip aspect-square">
              <a href="#shop">
                <img
                  src={samuraiGuitar}
                  alt="Guitarra Samurai"
                  loading="lazy"
                  width={395}
                  height={395}
                  className="w-full h-full object-cover brightness-75 hover:brightness-100 duration-300 aspect-square"
                />
              </a>
            </div>
            <div className="overflow-clip aspect-square">
              <a href="#shop">
                <img
                  src={guitarView}
                  loading="lazy"
                  alt="Guitarra de ilustração"
                  className="w-full h-full object-cover brightness-75 hover:brightness-100 duration-300 aspect-square"
                />
              </a>
            </div>
            <div className="overflow-clip aspect-square">
              <a href="#shop">
                <img
                  src={guitarView2}
                  loading="lazy"
                  alt="Guitarra de ilustração"
                  className="w-full h-full object-cover brightness-75 hover:brightness-100 duration-300 aspect-square"
                />
              </a>
            </div>
          </div>
        </section>
        <ShopContainer />
      </div>
    </main>
  );
};
