// types/blog.types.ts

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  readingTime: string;
  image: string;
  slug: string;
}

export interface BlogSectionProps {
  /**
   * Blog heading items (e.g., "OUR BLOG")
   */
  headingItems?: Array<{ text: string; className: string }>;
  
  /**
   * Rotating texts for horizontal scroll
   */
  rotatingTexts?: string[];
  
  /**
   * List of blog posts
   */
  posts: BlogPost[];
  
  /**
   * Show featured post (large on left)
   * @default true
   */
  showFeatured?: boolean;
  
  /**
   * Maximum posts to display
   * @default undefined (show all)
   */
  maxPosts?: number;
  
  /**
   * Background color
   * @default undefined
   */
  backgroundColor?: string;
  
  /**
   * Scroll text color
   * @default '#e8e8e8'
   */
  scrollTextColor?: string;
}
