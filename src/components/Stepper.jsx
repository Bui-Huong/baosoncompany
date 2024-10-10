
// Array of step titles
const steps = [
    { name: 'Tạo hợp đồng', completed: true },
    { name: 'Đang thực hiện', completed: false },
    { name: 'Đã thanh lý', completed: false },
];

const Stepper = () => {
    return (
        <div className="flex w-full py-2">
            {steps.map((step, index) => (
                <div className="flex-1" key={index}>
                    {/* Step indicator */}
                    <div className={`flex items-center ${index !== 0 ? '-ml-px' : ''}`}>
                        <div className="relative">
                            {/* Circle */}
                            <div
                                className={`rounded-full w-8 h-8 flex items-center justify-center ${step.completed ? 'bg-yellow-400' : 'bg-gray-200'}`}
                            >
                                {step.completed && (
                                    <svg className="w-4 h-4 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M7.629 14.571L4.357 11.3a1.003 1.003 0 00-1.414 1.414l4 4c.39.391 1.024.391 1.414 0l8-8a1.003 1.003 0 00-1.414-1.414L7.629 14.571z"/>
                                    </svg>
                                )}
                            </div>
                            {/* Text */}
                            <div className="absolute top-full w-32 text-xs font-medium text-center mt-1">{step.name}</div>
                        </div>
                    </div>
                    {/* Line connecting steps, not after the last step */}
                    {index !== steps.length - 1 && (
                        <div
                            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? 'border-yellow-400' : 'border-gray-200'}`}
                        ></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Stepper;