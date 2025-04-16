import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-blue-800">Viswa Public School </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nurturing young minds and shaping future leaders since 2022
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-blue-700">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Viswa, we are dedicated to fostering an environment of academic excellence, creativity, and holistic development. Our state-of-the-art facilities and passionate faculty ensure a quality education that empowers students to reach their full potential.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src="https://encyclopediaofarkansas.net/wp-content/uploads/2022/08/SpringdaleHS2_f.jpg" 
              alt="Viswa Public School Campus"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">Our Legacy</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Since our establishment in 2022, Viswa Public School has grown into a premier institution known for its commitment to educational excellence. We've continuously evolved, integrating modern teaching methodologies and expanding our curriculum to meet the changing needs of our students. Our nurturing and dynamic learning environment has built a reputation that spans decades.
          </p>
        </div>

        <div className="mt-20 text-center">
          <Link to="/events" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Explore Our Programs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;