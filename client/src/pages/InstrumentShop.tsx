import samuraiGuitar from '../assets/silverhand-guitar.webp';
import guitarView from '../assets/playing-guitar-2.webp';
import guitarView2 from '../assets/other-img.webp';
import { ImageSlider } from '../components/ImageSlider.tsx';
import { ShopContainer } from '../components/instrumentShop/ShopContainer.tsx';

const classes =
  'absolute w-full top-0 h-full flex justify-center items-center font-merry text-2xl xs:text-3xl sm:text-5xl opacity-0 hover:opacity-100 duration-500 hover:text-slate-100 transition-all txt-shadow';

const InstrumentShop = () => {
  return (
    <main className="relative overflow-x-clip">
      <div className="min-h-screen">
        <ImageSlider />
        <section className="padding-y max-container px-0 sm:padding-x">
          <h2 className="translate-x-3 sm:translate-x-0 text-3xl leading-tight xl:text-[3rem] pb-5 font-merry text-balance font-light underline-visual relative">
            Silver<span className="text-primary">Hand</span> Style
          </h2>
          <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-6 lg:pt-6">
            <div className="overflow-clip aspect-square relative">
              <a href="#shop">
                <img
                  src={samuraiGuitar}
                  alt="Guitarra Samurai"
                  loading="lazy"
                  width={395}
                  height={395}
                  className="w-full h-full object-cover brightness-75 aspect-square"
                />
                <div className={classes}>
                  <span className="text-3xl xs:text-5xl sm:text-7xl text-primary">
                    S
                  </span>
                  mokin'
                </div>
              </a>
            </div>
            <div className="overflow-clip aspect-square relative">
              <a href="#shop">
                <img
                  src={guitarView}
                  loading="lazy"
                  alt="Guitarra de ilustração"
                  className="w-full h-full object-cover brightness-75 aspect-square"
                />
                <div className={classes}>
                  <span className="text-3xl xs:text-5xl sm:text-7xl text-primary">
                    S
                  </span>
                  ilver
                </div>
              </a>
            </div>
            <div className="overflow-clip aspect-square relative">
              <a href="#shop">
                <img
                  src={guitarView2}
                  loading="lazy"
                  alt="Guitarra de ilustração"
                  className="w-full h-full object-cover brightness-75 aspect-square"
                />
                <div className={classes}>
                  <span className="text-3xl xs:text-5xl sm:text-7xl text-primary">
                    S
                  </span>
                  tyle
                </div>
              </a>
            </div>
          </div>
        </section>
        <ShopContainer />
      </div>
    </main>
  );
};

export default InstrumentShop;
