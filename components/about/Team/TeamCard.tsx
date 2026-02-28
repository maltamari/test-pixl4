'use client';

import Image from 'next/image';
import { SocialLinks } from './SocialLinks';
import { TeamMember } from './team.constants';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="relative overflow-hidden bg-white rounded-3xl p-6 transition-all duration-500 hover:shadow-xl md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-200 md:h-80 md:w-64 md:shrink-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 256px"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between">
          {/* Name and Role */}
          <div>
            <h3 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {member.name}
            </h3>
            <p className="mb-6 text-base text-gray-600 md:text-lg">
              {member.role}
            </p>
            
            <div className="mb-6 h-px w-full bg-gray-200" />
            
            {/* Social Links */}
            <div className="mb-6">
              <SocialLinks socials={member.socials} />
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm leading-relaxed text-gray-700 md:text-base">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
