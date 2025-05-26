
import React from 'react';
import { Member } from './types';
import { MemberCard } from '../MemberCard';

interface MemberSelectorProps {
  members: Member[];
  onMemberToggle: (memberId: string) => void;
  allowMultiple?: boolean;
  className?: string;
}

const MemberSelector: React.FC<MemberSelectorProps> = ({
  members,
  onMemberToggle,
  allowMultiple = false,
  className = '',
}) => {
  const handleMemberClick = (memberId: string) => {
    onMemberToggle(memberId);
  };

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member.name}
          isSelected={member.selected || false}
          onClick={() => handleMemberClick(member.id)}
        />
      ))}
    </div>
  );
};

export default MemberSelector;
