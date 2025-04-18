import React from 'react';

const aboutData = [
  {
    name: "John Doe",
    description: "Principal",
    image: "https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    quote: "Welcome to our school community! We are dedicated to fostering a nurturing environment that promotes academic and personal growth. Join us in making a positive impact.",
   
  },
  {
    name: "Jane Smith",
    description: "Vice Principal",
    image: "https://ichef.bbci.co.uk/news/943/cpsprodpb/1f5c/live/316a9df0-e05b-11ed-bc98-4bd262d15a9f.jpg", 
    quote: "Together, we can achieve greatness. Let’s work hand-in-hand to shape the future and build a thriving school environment.",
   
  },
  {
    name: "Emily Johnson",
    description: "English Teacher",
    image: "https://t4.ftcdn.net/jpg/03/13/37/31/360_F_313373132_b9Az7XaGLRvSLHXlINXBIGPMIOLok8ZB.jpg", 
    quote: "Teaching is not just about imparting knowledge; it's about inspiring a love for learning and encouraging growth.",
   
  },
  {
    name: "Michael Brown",
    description: "Mathematics Teacher",
    image: "https://www.shutterstock.com/image-photo/smiling-cheerful-young-adult-african-600nw-1850821510.jpg", 
    quote: "Mathematics is the language of the universe. Let's unlock its secrets together.",
   
  },
  {
    name: "Sophia Davis",
    description: "Science Teacher",
    image: "https://media.istockphoto.com/id/1171197670/photo/mid-adult-teacher-poses-for-portrait-in-classroom.jpg?s=612x612&w=0&k=20&c=lBqeVyIQKsBn4bIGVgRQdoE_FHc0bx58HIOVqraHTfY=", 
    quote: "Science is a journey of discovery. Let's explore and learn together.",
    
  },
  {
    name: "David Wilson",
    description: "Computer Science Teacher",
    image: "https://media.istockphoto.com/id/685132245/photo/mature-businessman-smiling-over-white-background.webp?b=1&s=170667a&w=0&k=20&c=XKyPqI4mZGKQLoUXMqJKkJ3Ovm69rIWG-sq_UstDyY4=", 
    quote: "Technology is transforming our world. Let's harness its potential and shape the future.",
    
  }
];

function Faculty() {
  const principal = aboutData.find(member => member.description === "Principal");
  const vicePrincipal = aboutData.find(member => member.description === "Vice Principal");
  const otherFaculty = aboutData.filter(member => member.description !== "Principal" && member.description !== "Vice Principal");

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className="text-4xl font-bold text-center mb-16 text-indigo-800">Our Faculty</h1>

     
      <div className="grid md:grid-cols-2 gap-8 mb-16">
       
        {principal && (
          <div className=" rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={principal.image} alt={principal.name} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{principal.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{principal.name}</h2>
                <p className="mt-2 text-gray-500">{principal.quote}</p>
                
              </div>
            </div>
          </div>
        )}

        
        {vicePrincipal && (
          <div className=" rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={vicePrincipal.image} alt={vicePrincipal.name} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">{vicePrincipal.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{vicePrincipal.name}</h2>
                <p className="mt-2 text-gray-500">{vicePrincipal.quote}</p>
              
              </div>
            </div>
          </div>
        )}
      </div>

     
      {otherFaculty.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">Our Dedicated Faculty</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherFaculty.map((data, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img className="h-56 w-full object-cover" src={data.image} alt={data.name} />
                <div className="p-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.description}</div>
                  <h3 className="mt-1 text-xl leading-tight font-medium text-black">{data.name}</h3>
                  <p className="mt-2 text-gray-500">{data.quote}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Faculty;
