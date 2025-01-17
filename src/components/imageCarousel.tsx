"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button } from "@/components/ui/button";
import "@splidejs/react-splide/css";

const slides = [
  {
    title: "Submit Your Abstracts Today",
    subtitle: "Submission Deadline is January 2nd!",
    bgColor: "from-blue-900 to-blue-600",
    buttonText: "SUBMIT NOW",
    buttonLink: "#",
  },
  {
    title: "Discover IEEE Resources",
    subtitle: "Access the latest research and technology",
    bgColor: "from-purple-900 to-blue-600",
    buttonText: "LEARN MORE",
    buttonLink: "#",
  },
  {
    title: "Join Our Community",
    subtitle: "Connect with technology professionals worldwide",
    bgColor: "from-blue-800 to-purple-600",
    buttonText: "JOIN NOW",
    buttonLink: "#",
  },
];

const ImageCarousel = () => {
  return (
    <div>
      <Splide
        options={{
          type: "fade",
          rewind: true,
          arrows: true,
          pagination: true,
          autoplay: true,
          interval: 5000,
          speed: 1000,
        }}
        className="relative [&_.splide__pagination]:bottom-6 [&_.splide__pagination__page]:bg-white [&_.splide__pagination__page.is-active]:bg-blue-400"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div
              className={`relative h-[500px] w-full bg-gradient-to-r ${slide.bgColor}`}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }}
              />
              <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
                {/* Title */}
                <h2 className="mb-4 text-5xl font-extrabold tracking-wide leading-tight md:text-6xl lg:text-7xl drop-shadow-lg">
                  {slide.title}
                </h2>
                {/* Subtitle */}
                <p className="mb-8 text-2xl font-light tracking-wide leading-relaxed md:text-3xl lg:text-4xl drop-shadow-md">
                  {slide.subtitle}
                </p>
                {/* Button */}
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full bg-white px-8 text-[#00629B] hover:bg-blue-50"
                >
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ImageCarousel;
