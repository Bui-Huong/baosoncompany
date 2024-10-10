import React from 'react';

const ContactComponent = () => {
    return (
        <div className="relative bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    {/*<PhoneIcon className="h-5 w-5 text-gray-600" />*/}
                    <span className="ml-2 text-sm">0338559513</span>
                </div>
                <div className="flex items-center">
                    {/*<MailIcon className="h-5 w-5 text-gray-600" />*/}
                    <span className="ml-2 text-sm">Ext: 0338559513</span>
                </div>
            </div>
            <div className="mt-4">
                <div className="bg-yellow-200 p-4 rounded-md">
                    <h3 className="font-semibold">Trụ sở chính - Hà Nội</h3>
                    <p className="text-sm">Đông Anh- Hà Nội</p>
                    <p className="text-sm">Tel: 0338559513</p>
                </div>
                {/* Repeat the block above for each contact location */}
            </div>
            {/* Assuming the map is a background of the component */}
            {/* ... */}
        </div>
    );
};

export default ContactComponent;
