// components 
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion 
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import WeatherApp from '../../components/WeatherApp';


const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
              variants={fadeIn('up', 0.2)} 
              initial="hidden" 
              animate="show" 
              exit="hidden" 
              className='h2 xl:mt-12'
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" 
              animate="show" 
              exit="hidden" 
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              Lorem ipsum dolor sit, amet consectetur, consectetur adipiscing elit. A eveniet dignissimos distinctio tempore harum laudantium.
            </motion.p>
          </div>
          
          {/* slider  */}
          <motion.div
            variants={fadeIn('down', 0.6)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"  
            className='w-full xl:max-w-[65%] h-[435px] overflow-y-scroll'
          >
            <WorkSlider />
            {/* <div className="flex flex-wrap">
                <div className="w-full">
                    <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray-600">
                        <div className="px-6 py-6 relative">
                            <div className="flex mb-4 justify-between items-center">
                                <div>
                                    <h5 className="mb-0 font-medium text-xl">Delhi,IN</h5>
                                    <h6 className="mb-0">April 04 2021</h6><small>Cloudy</small>
                                </div>
                                <div className="text-right">
                                    <h3 className="font-bold text-4xl mb-0"><span>39&deg;</span></h3>
                                </div>
                            </div>
                            <div className="block sm:flex justify-between items-center flex-wrap">
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Temp</span><small className="px-2 inline-block">39.11&nbsp;&deg;</small></div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Feels like</span><small className="px-2 inline-block">33.33&nbsp;&deg;</small></div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Temp min</span><small className="px-2 inline-block">24.9&nbsp;&deg;</small></div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Temp max</span><small className="px-2 inline-block">39&nbsp;&deg;</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap"><span className="inline-block px-3"><small>Forecast</small></span></div>
                        <div className="px-6 py-6 relative">
                          <div className="text-center justify-between items-center flex" style={{flexFlow: 'initial'}}>
                            <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Sun</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" /><span className="block my-1">38.3&deg;</span></div>
                            <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Mon</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" /><span className="block my-1">38.3&deg;</span></div>
                            <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Tue</span><img src="https://i.imgur.com/BQbzoKt.png" className="block w-8 h-8" /><span className="block my-1">39.9&deg;</span></div>
                            <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Wed</span><img src="https://i.imgur.com/BQbzoKt.png" className="block w-8 h-8" /><span className="block my-1">40.1&deg;</span></div>
                            <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Thu</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" /><span className="block my-1">41.5&deg;</span></div>
                            <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Fri</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" /><span className="block my-1">40.1&deg;</span></div>
                            <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Sat</span><img src="https://i.imgur.com/BQbzoKt.png" className="block w-8 h-8" /><span className="block my-1">38&deg;</span></div>
                          </div>
                        </div>
                      <table class="min-w-full text-sm text-gray-400">
                        <thead class="bg-gray-800 text-xs uppercase font-medium">
                          <tr>
                            <th></th>
                            <th scope="col" class="px-6 py-3 text-left tracking-wider">
                              Club
                            </th>
                            <th scope="col" class="px-6 py-3 text-left tracking-wider">
                              MP
                            </th>
                            <th scope="col" class="px-6 py-3 text-left tracking-wider">
                              W
                            </th>
                            <th scope="col" class="px-6 py-3 text-left tracking-wider">
                              L
                            </th>
                            <th scope="col" class="px-6 py-3 text-left tracking-wider">
                              NRR
                            </th>
                            <th scope="col" class="px-6 py-3 text-left tracking-wider">
                              Pts
                            </th>
                            <th scope="col" class="px-6 py-3 text-left tracking-wider">
                              Last 5
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-gray-800">
                          <tr class="bg-black bg-opacity-20">
                            <td class="pl-4">
                              1
                            </td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <img class="w-5" src="https://ssl.gstatic.com/onebox/media/sports/logos/JTre94vh6WJeLmIL-Dfc1g_48x48.png" alt="" />
                              <span class="ml-2 font-medium">MI</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              14
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              9
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              5
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              +1.107
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              18
                            </td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-red-500"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                            </td>
                          </tr>
                          <tr>
                            <td class="pl-4">
                              2
                            </td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <img class="w-5" src="https://ssl.gstatic.com/onebox/media/sports/logos/TjudW-BaNE2HcD_6cOWC7Q_48x48.png" alt="" />
                              <span class="ml-2 font-medium">DC</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              14
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              9
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              5
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              +1.107
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              18
                            </td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-red-500"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                            </td>
                          </tr>
                          <tr>
                            <td class="pl-4">
                              3
                            </td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <img class="w-5" src="https://ssl.gstatic.com/onebox/media/sports/logos/G9q07ZXPVbPkXOagStz3Yw_48x48.png" alt="" />
                              <span class="ml-2 font-medium">SRH</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              14
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              9
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              5
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              +1.107
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              18
                            </td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-red-500"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                            </td>
                          </tr>
                          <tr>
                            <td class="pl-4">
                              4
                            </td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <img class="w-5" src="https://ssl.gstatic.com/onebox/media/sports/logos/MxXIt0k-eorEn6yOhD-KBA_48x48.png" alt="" />
                              <span class="ml-2 font-medium">RCB</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              14
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              9
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              5
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              +1.107
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              18
                            </td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-red-500"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                              </svg>
                              <svg class="w-4 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                            </td>
                          </tr>
                        </tbody>
                      </table>					
                    </div>
                </div>
            </div> */}
            
            <WeatherApp/>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
