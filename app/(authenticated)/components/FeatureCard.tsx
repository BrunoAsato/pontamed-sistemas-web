import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { MdLayers, MdSave, MdDescription, MdPublic } from 'react-icons/md';

interface FeatureCardProps {
  icon: string;
  link: string;
  name: string;
  description: string;
}

const icons: { [key: string]: IconType } = {
  MdLayers,
  MdSave,
  MdDescription,
  MdPublic,
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  link,
  name,
  description,
}) => {
  const IconComponent = icons[icon];

  return (
    <Link href={link} className="block">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center transition-colors duration-300 hover:bg-gray-700 cursor-pointer">
        <div className="text-3xl text-red-500">
          {IconComponent && <IconComponent />}
        </div>
        <h3 className="text-xl font-bold mt-2">{name}</h3>
        <p className="text-gray-400 mt-1">{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
