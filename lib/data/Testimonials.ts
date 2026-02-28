// data/testimonials.data.ts

import { Testimonial } from "@/types/testimonials";

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    title: 'Results-Driven Approach...',
    description: 'We saw immediate results in our online visibility and engagement. Their strategies are effective, data-driven, and tailored to our needs.',
    author: {
      name: 'Emily Carter',
      avatar: '/avatars/emily.jpg',
      rating: 4.9,
    },
  },
  {
    id: 2,
    title: 'Innovative Solutions...',
    description: 'They consistently deliver fresh ideas and innovative solutions that keep our brand ahead of the curve. A true asset to our business.',
    author: {
      name: 'James Lawson',
      avatar: '/avatars/james.jpg',
      rating: 5.0,
    },
  },
  {
    id: 3,
    title: 'Outstanding Creativity...',
    description: 'The team brought our vision to life with a level of creativity and precision that exceeded expectations. Our brand now stands out in a crowded market.',
    author: {
      name: 'Sarah Mitchell',
      avatar: '/avatars/sarah.jpg',
      rating: 5.0,
    },
  },
  {
    id: 4,
    title: 'Reliable Partner...',
    description: 'From concept to launch, they were with us every step of the way. Their professionalism and attention to detail made the entire process seamless.',
    author: {
      name: 'Daniel Roberts',
      avatar: '/avatars/daniel.jpg',
      rating: 4.9,
    },
  },
];