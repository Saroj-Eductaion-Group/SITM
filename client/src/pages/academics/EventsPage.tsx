import React from 'react';
import Img1 from '../../assets/images/events/eventImg1.jpeg';
import Img2 from '../../assets/images/events/eventImg2.jpeg';
import Img3 from '../../assets/images/events/eventImg3.jpeg';
import Img4 from '../../assets/images/events/eventImg4.jpeg';
import Img5 from '../../assets/images/events/eventImg5.jpeg';
import Img6 from '../../assets/images/events/eventImg6.jpeg';
import Img7 from '../../assets/images/events/eventImg7.jpeg';
import Img9 from '../../assets/images/events/eventImg9.jpeg';
import Img10 from '../../assets/images/events/eventImg10.jpeg';

/**
 * Defines the structure for an image object.
 */
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

// 1. Define the image data for the gallery
const eventImages: GalleryImage[] = [
  { id: 1, src: Img1, alt: 'A view of the event venue' },
  { id: 2, src: Img2, alt: 'Attendees networking and discussing' },
  { id: 3, src: Img3, alt: 'The main speaker on stage' },
  { id: 4, src: Img4, alt: 'Catering and food station display' },
  { id: 5, src: Img5, alt: 'Group photo of the event team' },
  { id: 6, src: Img6, alt: 'A candid shot of the audience' },
  { id: 7, src: Img7, alt: 'A candid shot of the audience' },
  { id: 9, src: Img9, alt: 'A candid shot of the audience' },
  { id: 10, src: Img10, alt: 'A candid shot of the audience' },
];

/**
 * EventPage component that displays an event title and an image gallery with a blue theme.
 */
const EventPage: React.FC = () => {
  return (
    // Added bg-blue-50 to the container for a light blue page background
    <div className="event-page-container bg-blue-50 min-h-screen">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-14">
        
        {/* Title with Blue Accent */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 pb-4 border-b-4 border-blue-500 inline-block pr-4 md:pt-6">
          Our Latest Event Highlights 
        </h1>

        {/* 2. Image Gallery Section */}
        <section className="image-gallery">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventImages.map((image) => (
              <div 
                key={image.id} 
                className="
                  gallery-item 
                  overflow-hidden 
                  rounded-xl 
                  shadow-lg           /* Base shadow */
                  bg-white             /* White background for contrast */
                  transition 
                  transform 
                  hover:scale-[1.02] 
                  hover:shadow-2xl      /* Deeper shadow on hover */
                  hover:ring-4          /* Blue ring on hover */
                  hover:ring-blue-400
                  duration-300
                "
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover" 
                  style={{ minHeight: '256px' }} 
                />
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default EventPage;