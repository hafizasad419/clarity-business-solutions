import React from 'react'

function ProjectIdeas() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Innovative Project Ideas?
                        </h2>
                        <p className="text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and industry.
                            Lorem Ipsum has been the industry's
                        </p>
                    </div>
                    <div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Newsletter
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Subscribe to our newsletter to get the latest Prettifier news
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-c-zinc"
                                />
                                <button className="btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectIdeas