import React from 'react';

/**
 * Represents a single social media link with its icon component.
 * Used in hero social icon groups and contact section.
 */
export interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

/**
 * Props for the SocialIcon component — identical shape to SocialLink,
 * kept as a named alias for explicit component prop typing.
 */
export type SocialIconProps = SocialLink;
