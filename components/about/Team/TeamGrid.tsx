'use client';

import { TeamMember } from './team.constants';
import { TeamCard } from './TeamCard';

interface TeamGridProps {
  members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
      {members.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
}
