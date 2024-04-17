import React from 'react';

const CaseStudies = () => {
    return (
        
        <div className="relative">
            <h1 className='text-4xl text-center  py-4'>Click to Read these Case Studies!</h1>
            <div className='py-8 px-32'>
                <p className='py-8 px-8 text-2xl bg-gray-100 text-center shadow-black shadow-md '>
                    
                🚀 Dive into our case studies and see the difference. 🚀
                

                    <br></br>
                    <br></br>
                        With the help from Akira Web Solutions, these businesses are unlocking their digital potential.
                    From AI chatbots enhancing customer engagement and support to custom website designs and strategic search engine optimization,
                     our expertise is your advantage.  
                     <br></br>
                     <br></br>
                     <span className=' text-2xl text-center '>Schedule a meeting today to explore how we can bring exceptional value to your business</span>
                     <div className='items-center'>
                     <button onClick={handleViewContact} className="bg-[#FF0033] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-purple-400">Contact Us</button>
                    </div>
                    <br></br>
                </p>

            </div>

             {selectedModal && <Modal  image={getImageForModal(selectedModal)} content={renderModalContent(selectedModal)} onClose={() => setSelectedModal(null)} />}
            <div className="flex justify-center space-x-4 ">
                <div 
                    className="w-1/3 h-auto bg-gray-100 p-4 rounded cursor-pointer shadow-black shadow-sm hover:shadow-xl"
                    onClick={() => setSelectedModal('kroeger')}
                >
                    <img src={KroegerRealEstate} alt="Kroeger Real Estate Website Redesign" className="w-full h-auto rounded mb-4"/>
                    <h2 className="text-2xl  mb-2">Kroeger Real Estate: A Modern Transformation</h2>
                    <p>In 2023, we revitalized the Kroeger Real Estates website, bringing it to the forefront of modern design...</p>
                </div>

                <div 
                    className="w-1/3 h-auto bg-gray-100 p-4 rounded cursor-pointer shadow-black shadow-sm hover:shadow-xl"
                    onClick={() => setSelectedModal('bitcoinbay')}
                >
                    <img src={BitcoinBayBot} alt="Bitcoinbay AI Chatbot Solution" className="w-full h-auto rounded mb-4"/>
                    <h2 className="text-2xl  mb-2">Bitcoinbay: AI-Powered Customer Service</h2>
                    <p>We introduced an AI-driven chatbot for Bitcoinbay...</p>
                </div>

                <div 
                    className="w-1/3 h-auto bg-gray-100 p-4 rounded cursor-pointer shadow-black shadow-sm hover:shadow-xl"
                    onClick={() => setSelectedModal('seaver')}
                >
                    <img src={SeaverMarketing1} alt="SeaverMarketingGroup Website Design" className="w-full h-auto rounded mb-4"/>
                    <h2 className="text-2xl  mb-2">Seaver Marketing Group: A Digital Revamp</h2>
                    <p>For SeaverMarketingGroup, we crafted a website...</p>
                </div>
            </div>
         

        </div>
    );
}

export default CaseStudies;
