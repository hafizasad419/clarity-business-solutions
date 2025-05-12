import List from '@src/Components/UI/List'
import { infoItems } from '../homeItems';

function HowWeWork() {

    const histogramData = [40, 60, 80, 100, 70, 90, 150, 180, 170, 140, 110, 60, 70, 55, 50];


    return (
        <section className="bg-white py-6 md:py-6">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-26 items-center">
                {/* Left: Info Section */}
                <div className="w-full lg:w-1/2">
                    <List
                        heading="How We Work"
                        items={infoItems} />
                </div>

                {/* Right: Histogram Block */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">


                    <section className='flex flex-col'>
                        <p className="text-gray-600 text-base mb-4 leading-relaxed">
                            We provide expert startup mentoring and inclusive consulting
                            designed to elevate your business and strengthen its value
                            proposition.
                        </p>
                        <div className="max-w-md p-6 bg-gray-200 rounded-2xl shadow-lg relative">
                            {/* Text  */}

                            {/* Rating and Circles */}
                            <div className="flex flex-col justify-between">
                                <div className="flex justify-start">
                                    <div className=" w-8 h-8 rounded-full bg-black/10" />
                                    <div className=" w-8 h-8 rounded-full bg-black/20" />
                                    <div className=" w-8 h-8 rounded-full bg-black/30" />
                                </div>

                                <div className="">
                                    {/* RATINGS STAR */}
                                    <div className="flex items-center text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                        <p className="ml-1 text-gray-600 font-semibold">
                                            5
                                        </p>
                                    </div>
                                    <p className="ml-2 text-gray-600 font-semibold">
                                        (10K+reviews)
                                    </p>
                                </div>
                            </div>

                            {/* Histogram Section */}

                            <div className="flex justify-evenly mb-6 h-48 items-end">
                                {histogramData.map((height, i) => {
                                    const middleStart = Math.floor(histogramData.length / 2) - 3;
                                    const middleEnd = middleStart + 6;
                                    const isMiddle = i >= middleStart && i < middleEnd;

                                    return (
                                        <div
                                            key={i}
                                            className={`w-6 rounded-full ${isMiddle ? 'bg-gradient-to-t from-c-zinc to-cyan-200' : 'bg-gray-100'}`}
                                            style={{ height: `${height}px` }}
                                        />
                                    )

                                })}
                            </div>

                            {/* Stats Section */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">14+</p>
                                    <p className="text-gray-600 text-sm">Awards Winning</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-3 h-3 bg-cyan-400 rounded-full mr-2" />
                                    <p className="text-gray-600 text-sm">
                                        Exceeded Target by 23%
                                    </p>
                                </div>
                            </div>
                        </div>

                    </section>



                </div>
            </div>
        </section>
    )
}

export default HowWeWork