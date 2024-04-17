import React from 'react';

const OurPartners = () => {
    return (
        <div className="p-6">
            <h2 className="text-center text-xl  mb-4">
                Need Online Marketing Solutions? Check out our partners!
            </h2>
            <div className="flex justify-center gap-4">
                <div className="w-1/3 p-4 border rounded shadow hover:shadow-2xl hover:ring-2 hover:ring-red-500 transition-shadow duration-300">
                    <h3 className="text-xl  mb-2">
                    <a href="https://seaver-marketing-group.web.app/" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                        Seaver Marketing Group
                    </a>
                        </h3>
                    <p className="text-gray-600">
                        Email marketing specialists based out of Colorado.
                    </p>
                    
                </div>
                <div className="w-1/3 p-4 border rounded shadow hover:shadow-2xl hover:ring-2 hover:ring-red-500 transition-shadow duration-300">
                    <h3 className="text-xl  mb-2">Nathaly Aviles</h3>
                    <p className="text-gray-600">
                        Social media management marketing based out of Nashville, TN.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurPartners;
