import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const LandingPage = () => {
  const [certificateVisibile, setCertificateVisible] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();

  if (!certificateVisibile) {
    return (
      <div className="p-4 sm:p-6 lg:p-10 flex flex-col gap-12 font-inter bg-gradient-to-b from-gray-50 to-white dark:from-[#121212] dark:to-[#1e1e1e] min-h-screen">
        
       
        <div className="text-center space-y-4">
          <h1 className="font-montserrat font-extrabold tracking-wide text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-gray-900 dark:text-white">
            Premium Makhana
          </h1>
          <p className="font-poppins tracking-wide leading-relaxed text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300">
            for Local & Global Markets
          </p>
        </div>

       
        <div className=" rounded-2xl bg-white dark:bg-[#212121] shadow-xl p-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-montserrat text-gray-900 dark:text-white mb-6">
            Products
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            <div
              className="bg-[#FFF5F0] dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer p-4 flex flex-col gap-4"
              onClick={() => navigate('/app/?quality=handpicked')}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-poppins">
                Handpicked Makhana
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Carefully selected for superior quality, handpicked makhana offers unmatched taste, purity, and freshness, ensuring the best snacking and health experience.
              </p>
              <img src="/handpickedMakhana.jpeg" className="rounded-lg object-cover" alt="Handpicked Makhana" />
            </div>

            
            <div
              className="bg-[#F0F8FF] dark:bg-gray-700 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer p-4 flex flex-col gap-4"
              onClick={() => navigate('/app?quality=semi-handpicked')}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-poppins">
                Semi Handpicked Makhana
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Partially screened for better quality, semi-handpicked makhana balances affordability and refinement, delivering a satisfying snacking option.
              </p>
              <img src="/semihandpicked.jpg" className="rounded-lg object-cover" alt="Semi Handpicked Makhana" />
            </div>

            
            <div
              className="bg-[#FFF0F5] dark:bg-gray-600 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer p-4 flex flex-col gap-4"
              onClick={() => navigate('/app?quality=machine-picked')}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-poppins">
                Machine Picked Makhana
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Standard quality makhana processed in bulk, offering an economical option with a good taste and nutrition for everyday use.
              </p>
              <img src="/handpicked.jpg" className="rounded-lg object-cover" alt="Machine Picked Makhana" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#212121] p-6 rounded-2xl shadow-md">
            <h3 className="font-montserrat text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Makhana?</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li> <span className='font-bold'>Low in Calories:            </span> <span>Helps in weight management and makes it an ideal guilt-free snack.                    </span> </li>
            <li> <span className='font-bold'>Rich in Antioxidants:       </span> <span>Fights free radicals, prevents cell damage, and slows down aging.</span> </li>
            <li> <span className='font-bold'>High Magnesium Content:     </span> <span>Supports heart health, regulates blood pressure, and promotes better nerve function.</span> </li>
            <li> <span className='font-bold'>Good Source of Protein:     </span> <span>Aids in muscle growth, repair, and overall body strength.</span> </li>
            <li> <span className='font-bold'>Low Glycemic Index:         </span> <span>Helps manage blood sugar levels, making it suitable for people with diabetes.</span> </li>
            <li> <span className='font-bold'>High Fiber Content:         </span> <span>Improves digestion, prevents constipation, and promotes a healthy gut.</span> </li>
            <li> <span className='font-bold'>Rich in Calcium:            </span> <span>Strengthens bones and teeth, supporting better skeletal health.</span> </li>
            <li> <span className='font-bold'>Gluten-Free:                </span> <span>Suitable for people with gluten intolerance or celiac disease.</span> </li>
            <li> <span className='font-bold'>Anti-Aging Properties:      </span> <span>Promotes healthy skin and reduces wrinkles by combating aging signs.</span> </li>
            <li> <span className='font-bold'>Natural Detoxifier:         </span> <span>Cleanses the liver and kidneys, promoting better organ health.</span> </li>
            <li> <span className='font-bold'>Sleep-Inducing Properties:  </span> <span>Improves sleep quality with its calming effect.</span> </li>
            <li> <span className='font-bold'>Energy Boosting:            </span> <span>Provides sustained energy without causing sugar spikes.</span> </li>
            <li> <span className='font-bold'>Anti-Inflammatory:          </span> <span>Helps reduce chronic inflammation and pain.</span> </li>
            <li> <span className='font-bold'>Supports Hormonal Balance:  </span> <span>Particularly beneficial for women by balancing hormones naturally.</span> </li>
            <li> <span className='font-bold'>Stress-Relieving Properties:</span> <span>Reduces stress and anxiety with its calming and soothing effect.</span> </li> 
            </ul>
          </div>

          <div className="bg-white dark:bg-[#212121] p-6 rounded-2xl shadow-md">
            <h3 className="font-montserrat text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why buy from us?</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li> <span className='font-bold'> Premium-Quality Makhana:        </span><span>We offer a wide selection of high-quality makhana, available in sizes ranging from 4 mm to over 6.5 mm, catering to various preferences and needs.</span></li>
            <li> <span className='font-bold'> Variety of Textures and Colors: </span><span>Our makhana is available in different textures and vibrant colors, providing a diverse range of options for all customers.</span></li>
            <li> <span className='font-bold'> Handpicked Selection:           </span><span>Whether you prefer machine-picked, handpicked, or semi-handpicked makhana, each product is carefully selected to ensure the highest level of freshness and quality.</span></li>
            <li> <span className='font-bold'> Commitment to Organic Practices:</span><span>Our makhana is produced using organic farming methods, ensuring it is grown naturally without the use of harmful chemicals.</span></li>
            <li> <span className='font-bold'> Ideal Growing Conditions:       </span><span>Grown in the optimal environmental conditions of Bihar, our makhana benefits from the  perfect climate  of the region  for high-quality production.</span></li>
            <li> <span className='font-bold'> Certified Buisness:         </span> <span> We are a fully certified and licensed business, ensuring quality and trustworthiness in every aspect of our operations. </span> </li>
            <li> <span className='font-bold'> Reliable Suppliers:         </span> <span> Our network of trusted suppliers guarantees a consistent supply of premium-quality makhana.</span> </li>
            <li> <span className='font-bold'> Global Reach:               </span> <span> We are certified to export our products internationally, ensuring seamless delivery across borders.</span> </li>
            <li> <span className='font-bold'> Strong Network:             </span> <span> With established contacts in the industry, we ensure smooth operations and quick problem-solving at every step.</span> </li>
            <li> <span className='font-bold'> Quality Assurance:          </span> <span> We adhere to the highest standards of quality, ensuring that every product delivered meets customer expectations.</span> </li>
            <li> <span className='font-bold'> Customer-Centric Approach:  </span> <span> Our focus is always on providing the best experience to our customers, from order placement to delivery.</span> </li>
            <li> <span className='font-bold'> Experienced Team:           </span> <span> Our team of professionals brings years of expertise, ensuring efficient management and superior service.</span> </li>
            <li> <span className='font-bold'> Sustainability Focus:       </span> <span> We  are committed to environmentally friendly practices, ensuring that our operations are sustainable and responsible.</span> </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-[#212121] p-6 rounded-2xl shadow-md">
          <h3 className="font-montserrat text-2xl font-bold mb-4 text-gray-900 dark:text-white">Certifications</h3>
          <p className="font-bold">Certificate of Incorporation</p>
          <button
            className="mt-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold px-6 py-3 rounded-xl transition duration-300"
            onClick={() => setCertificateVisible(true)}
          >
            View Certificate
          </button>
        </div>

        <div className="bg-white dark:bg-[#212121] p-6 rounded-2xl shadow-md">
          <h3 className="font-montserrat text-2xl font-bold mb-4 text-gray-900 dark:text-white">Testimonials</h3>
          <p className="italic text-gray-600 dark:text-gray-300">"The makhana was incredibly fresh and tasty, loved by our entire family!"</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-4 md:p-8">
        <button
          className="mb-4 flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-red-500 transition"
          onClick={() => setCertificateVisible(false)}
        >
          <img
            src="/close.svg"
            style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
            alt="close"
            width={20}
            height={20}
          />
          Close
        </button>
        <img src="/certificate1.png" alt="certificateImage" className="rounded-xl shadow-lg w-full" />
      </div>
    );
  }
};

export default LandingPage;
