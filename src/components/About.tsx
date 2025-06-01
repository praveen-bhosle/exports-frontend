const About  = () => {
  return (
    <div className='text-[#1E1919] '>
      <div className='text-[#F7F5F2] bg-[#1F1919]  text-center text-6xl   py-32 px-4 font-serif   '>
        <div className=' leading-[70px] '>  Our mission is to  supply quality  products across  the globe  </div>
      </div>
      <div className=''>
        <video src='/promotional.MOV' autoPlay={true} loop muted />

      </div>
      <div className='flex flex-col gap-16 px-8 py-16 bg-[#F7F5F2]'>
        <div className='text-center text-black text-4xl  font-mono font-bold '> Our story  </div>
        <div className='text-2xl'>  Back in December 2024, our journey began with a goal to bring the highest quality makhana to people who value health and wellness. What started as a passion for creating healthy snack options has grown into a mission to make premium, nutrient-rich makhana easily accessible to everyone. </div>
        <div className='text-2xl'> In today's fast-paced world, finding snacks that are both healthy and satisfying can be a challenge. Most snacks are filled with empty calories, artificial additives, and unhealthy fats. We wanted to change that. </div>
        <div className='text-2xl'> We believe in a healthier way to snack  that nourishes your body without compromising on taste. Our makhana is not just a snack, it's a promise of quality, wellness, and sustainability. From sourcing the finest ingredients to ensuring every bite is fresh and flavorful, we focus on creating products that you can trust. </div>
        <div className='text-2xl'> At our core, we're here to help you make better snacking choices, stay energized throughout the day, and take a step toward a healthier lifestyle. Explore our range of premium makhana and experience the difference. </div>
      </div>
      <div>

        <div className='flex flex-col gap-16 px-8 py-16 text-[#F7F5F2] bg-[#1F1919]'>

          <div className='text-center text-4xl  font-mono font-bold '>
            Our team
          </div>
          <div>
            <img src='' alt='image' />
            Guruprasad Kulakarni, Co-founder and
          </div>
          <div>
          </div>
        </div>
        <div className='flex flex-col gap-16 px-8 py-16 '>
          <div className='text-center text-4xl font-bold  font-mono '>
            Board of Directors
          </div>

          <div>
            <img src='' alt='image' />
            Guruprasad Kulakarni, Co-founder and
          </div>
          <div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}


export default About ; 