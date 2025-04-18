import React from 'react';



function Main2() {
  const downloadBroucher = () => {
    const anchor = document.createElement('a');
    anchor.href = brochu;
    anchor.download = 'broucher.pdf';
    anchor.click();
  };

  return (
    <div className=' pb-5 bg-gradient-to-br from-indigo-800 to-gray-800'>
      <div className='container'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:text-light mt-5 flex flex-col justify-center">
            <span className='text-info'>You need to know..</span>
            <h1 className='font-bold text-3xl lg:text-5xl mb-4 text-white'>About Viswa</h1>
            <p className='text-white text-lg lg:text-xl'>
              
            Viswa Public School, founded in 2022, is dedicated to providing quality education and holistic development. The school emphasizes academic excellence, critical thinking, and ethical values. It boasts modern infrastructure, including advanced science labs, spacious classrooms, a well-stocked library, and comprehensive sports facilities. Springdale aims to empower students with knowledge and skills for a successful future.
            </p>
            <button className="bg-primary p-2 lg:px-6 lg:py-3 rounded-lg text-lg font-bold mt-5 text-light" onClick={downloadBroucher}>
              Download Brochure
            </button>
          </div>
          <div className="lg:mt-0 mt-5 flex justify-center items-center">
            <a href="https://www.wolverhampton.gov.uk/sites/default/files/2023-01/Job%20ref%203-2023%20SDP%20-%20Recruitment%20brochure.pdf" download="broucher.pdf">
              <img src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='lg:w-full rounded-lg' alt="Brochure" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
