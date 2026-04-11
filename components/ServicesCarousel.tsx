"use client";

import { Children, useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServicesCarouselProps {
  children: React.ReactNode;
  slideClassName?: string;
}

export default function ServicesCarousel({
  children,
  slideClassName = "min-w-0 flex-[0_0_100%] pl-3",
}: ServicesCarouselProps) {
  const slides = useMemo(() => Children.toArray(children), [children]);
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 3200,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: slides.length > 2,
      dragFree: false,
      skipSnaps: false,
    },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-end gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-[#293796] hover:text-[#293796] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-[#293796] hover:text-[#293796] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next service"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden pb-3 pt-1" ref={emblaRef}>
        <div className="-ml-3 flex items-stretch">
          {slides.map((_, index) => (
            <div key={index} className={slideClassName}>
              <div className="h-full">{slides[index]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              selectedIndex === index
                ? "w-8 bg-[#293796]"
                : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
