// types/testimonials.ts

export interface TestimonialAuthor {
  name: string;
  avatar: string;
  rating: number;
}

export interface Testimonial {
  id: number;
  title: string;
  description: string;
  author: TestimonialAuthor;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface StarRatingProps {
  rating: number;
}