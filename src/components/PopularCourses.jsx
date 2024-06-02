import React from 'react';
import './PopularCourses.css';

const PopularCourses = () => {
  const courses = [
    { title: "Web Development Bootcamp", instructor: "John Doe" },
    { title: "Business Fundamentals", instructor: "Jane Smith" },
    { title: "Data Science with Python", instructor: "Alice Johnson" },
  ];

  return (
    <section className="popular-courses">
      <h2>Popular Courses</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
