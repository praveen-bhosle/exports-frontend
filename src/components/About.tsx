const About = () => {
  return (
    <div className='bg-[#F7F5F2] text-[#1E1919] dark:bg-gray-900 dark:text-gray-100'>
      
      <div className='text-center py-40 px-4 font-serif text-white text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-wide'>
          Our mission is to supply quality products across the globe
      </div>


      <div className='flex flex-col gap-12 px-8 py-20 lg:px-24'>
        <div className='text-center text-4xl lg:text-5xl font-mono font-bold text-gray-800 dark:text-gray-200'>
          Our Story
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xl text-gray-700 dark:text-gray-300'>
          <div className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            Back in December 2024, our journey began with a goal to bring the highest quality makhana to people who value health and wellness. What started as a passion for creating healthy snack options has grown into a mission to make premium, nutrient-rich makhana easily accessible to everyone.
          </div>
          <div className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            In today's fast-paced world, finding snacks that are both healthy and satisfying can be a challenge. Most snacks are filled with empty calories, artificial additives, and unhealthy fats. We wanted to change that.
          </div>
          <div className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            We believe in a healthier way to snack that nourishes your body without compromising on taste. Our makhana is not just a snack, it's a promise of quality, wellness, and sustainability. From sourcing the finest ingredients to ensuring every bite is fresh and flavorful, we focus on creating products that you can trust.
          </div>
          <div className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            At our core, we're here to help you make better snacking choices, stay energized throughout the day, and take a step toward a healthier lifestyle. Explore our range of premium makhana and experience the difference.
          </div>
        </div>
      </div>
      <div className='bg-[#1F1919] text-[#F7F5F2] dark:bg-gray-800 dark:text-gray-100 py-20 px-8 lg:px-24'>
        <div className='text-center text-4xl lg:text-5xl font-mono font-bold mb-16'>
          Our Team
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center'>
          <div className='flex flex-col items-center gap-4'>
            <img 
              src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop' 
              alt='Guruprasad Kulakarni' 
              className='rounded-full w-40 h-40 object-cover border-4 border-white dark:border-gray-700' 
            />
            <div className='text-xl font-semibold'>Guruprasad Kulakarni</div>
            <div className='text-lg text-gray-400'>Co-founder</div>
          </div>
          {/* Add more team members here */}
          <div className='flex flex-col items-center gap-4'>
            <img 
              src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop' 
              alt='Jane Doe' 
              className='rounded-full w-40 h-40 object-cover border-4 border-white dark:border-gray-700' 
            />
            <div className='text-xl font-semibold'>Jane Doe</div>
            <div className='text-lg text-gray-400'>Lead Operations</div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <img 
              src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crops' 
              alt='John Smith' 
              className='rounded-full w-40 h-40 object-cover border-4 border-white dark:border-gray-700' 
            />
            <div className='text-xl font-semibold'>John Smith</div>
            <div className='text-lg text-gray-400'>Head of Marketing</div>
          </div>
        </div>
      </div>

      {/* Board of Directors Section */}
      <div className='py-20 px-8 lg:px-24'>
        <div className='text-center text-4xl lg:text-5xl font-mono font-bold mb-16 text-gray-800 dark:text-gray-200'>
          Board of Directors
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center'>
          <div className='flex flex-col items-center gap-4'>
            <img 
              src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop' 
              alt='Board Member 1' 
              className='rounded-full w-40 h-40 object-cover border-4 border-gray-300 dark:border-gray-700' 
            />
            <div className='text-xl font-semibold'>Guruprasad Kulakarni</div>
            <div className='text-lg text-gray-600 dark:text-gray-400'>Co-founder & Board Member</div>
          </div>
          {/* Add more board members here */}
          <div className='flex flex-col items-center gap-4'>
            <img 
              src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop' 
              alt='Board Member 2' 
              className='rounded-full w-40 h-40 object-cover border-4 border-gray-300 dark:border-gray-700' 
            />
            <div className='text-xl font-semibold'>Emily White</div>
            <div className='text-lg text-gray-600 dark:text-gray-400'>Independent Director</div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <img 
              src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop' 
              alt='Board Member 3' 
              className='rounded-full w-40 h-40 object-cover border-4 border-gray-300 dark:border-gray-700' 
            />
            <div className='text-xl font-semibold'>David Chen</div>
            <div className='text-lg text-gray-600 dark:text-gray-400'>Financial Advisor</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;