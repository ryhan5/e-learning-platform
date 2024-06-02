import React from 'react';
import './CourseCategories.css';

const CourseCategories = () => {
  const categories = ["Development", "Business", "Design", "Marketing", "Data Science"];

  return (
    <section className="categories">
      <h2>Course Categories</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">{category}</div>
        ))}
      </div>
    </section>
  );
};

export default CourseCategories;
