import React, { useState } from 'react';
import Modal from 'react-modal';

const imageGroups = {
  Images: [
    'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1554042317-efd62f19bc95?q=80&w=1382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661714237361-a00d47700c9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661714230832-357978a0c440?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1680807868955-805266ef99f0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more images here
  ],
  Videos: [
    'https://www.youtube.com/embed/xziV_K45jZs',
    'https://www.youtube.com/embed/NA_QWOC4wNk',
    'https://www.youtube.com/embed/NA_QWOC4wNk',
  ],
};

// Set app root for accessibility
Modal.setAppElement('#root');

const TabbedGallery = () => {
  const [activeTab, setActiveTab] = useState('Images');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % imageGroups.Images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      (prev - 1 + imageGroups.Images.length) % imageGroups.Images.length
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(imageGroups).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-all font-semibold ${
              activeTab === tab
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activeTab === 'Images' &&
          imageGroups.Images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover object-center"
              />
            </div>
          ))}

        {activeTab === 'Videos' &&
          imageGroups.Videos.map((videoUrl, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <iframe
                src={videoUrl}
                title={`Video ${index + 1}`}
                allowFullScreen
                className="w-full h-48 rounded-lg"
              ></iframe>
            </div>
          ))}
      </div>

      {/* Modal for enlarged image with slider */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        className="relative bg-white rounded-lg shadow-xl p-4 w-full max-w-4xl mx-auto outline-none"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-xl bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          ✕
        </button>

        <div className="flex items-center justify-between">
          <button onClick={prevImage} className="text-3xl p-2 hover:text-indigo-600">‹</button>
          <img
            src={imageGroups.Images[currentImageIndex]}
            alt="Enlarged"
            className="max-h-[70vh] mx-auto rounded-lg"
          />
          <button onClick={nextImage} className="text-3xl p-2 hover:text-indigo-600">›</button>
        </div>
      </Modal>
    </div>
  );
};

export default TabbedGallery;
