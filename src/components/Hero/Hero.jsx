import Container from "../Container/Container";
import Button from "../Button/Button";
import heroImg from "../../assets/hero.jpg";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
  ];

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-base-100 via-purple-50/20 to-cyan-50/20 pt-20 md:pt-24"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative z-10 py-6">
            {/* Left - Profile Image */}
            <div className="flex items-center order-1 md:order-2 flex-1 w-full justify-end">
              <div className="relative">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-300/30 via-pink-300/25 to-cyan-300/30 rounded-full blur-3xl -z-10 scale-110" />

                {/* Image Container with Border */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-primary/50 backdrop-blur-sm max-w-[440px]">
                  <img
                    src={heroImg}
                    alt="Rakibul Islam"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-2 md:order-1 flex-1">
              {/* Greeting */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-base-content/70 font-medium">
                  Hello, I'm
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-base-content leading-tight">
                  Rakibul Islam
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-base-content/75 leading-relaxed max-w-xl">
                  I'm a MERN Stack Developer based in Bangladesh. I specialize
                  in building modern, scalable, and high-performance web
                  applications using MongoDB, Express, React, and Node.js.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=1bGZvYnbQUxohwmJiug-NPv4gzws5Ja1K"
                  download
                >
                  <Button
                    variant="primary"
                    size="md"
                    className="flex items-center justify-center gap-2 group"
                  >
                    <HiDownload className="group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-purple-100/40 backdrop-blur rounded-xl p-4 text-center hover:bg-purple-100/60 transition-all duration-300"
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-base-content">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-base-content/70 mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
