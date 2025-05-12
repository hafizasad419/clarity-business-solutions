import { ourTeam } from "../homeItems"



function OurTeam() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Get to know our amazing Team
                    </h2>
                    <p className="text-gray-600">
                        placeholder paragraph is going to be written here.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {ourTeam.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            <div className="h-64 overflow-hidden bg-c-zinc">
                                <img
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {member.name}
                                </h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam