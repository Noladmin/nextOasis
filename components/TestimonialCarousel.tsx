"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  quote: string;
  author?: string;
  company?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up new interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <div className="relative w-full px-8 sm:px-12 md:px-0">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 px-2 sm:px-4"
            >
              <div className="max-w-4xl mx-auto">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  company={testimonial.company}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-[#293796]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-12 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#293796]" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-[#293796]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

