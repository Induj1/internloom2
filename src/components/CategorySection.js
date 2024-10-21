import React from 'react';
import { BookOpen, MapPin, Briefcase, Star, Calendar } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    { icon: <BookOpen size={24} />, name: "Online" },
    { icon: <MapPin size={24} />, name: "Work From Home" },
    { icon: <Briefcase size={24} />, name: "Part-Time" },
    { icon: <Star size={24} />, name: "MBA" },
    { icon: <Calendar size={24} />, name: "Engineering" },
  ];

  return (
    <div className="container mx-auto px-4 mt-32 mb-12">
      <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <button key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-2">{category.icon}</div>
            <span className="text-gray-700">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
