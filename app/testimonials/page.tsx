import Image from "next/image";
import TestimonialHero from "../components/testimonials.tsx/TestimonialHero";
import TestimonialsIntro from "../components/testimonials.tsx/TestimonialsIntro";
import TestimonialsReview from "../components/testimonials.tsx/TestimonialsReview";

export default function Testimonial() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <TestimonialHero />
            <TestimonialsIntro />
            <TestimonialsReview />
        </div>
    );
}
