import PrimaryButton from "@src/Components/UI/PrimaryButton";
import { charlie } from "@src/assets/images";


function HeroSection() {
    return (
        <section className="bg-hero-gradient text-white ">
            <div className="container mx-auto px-4 md:py-12 md:relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center md:place-items-start">
                    {/* HERO LEFT */}
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1 rounded-full text-sm font-medium  border border-c-zinc backdrop-blur-sm bg-c-zinc/20">
                            Integration, Automation, Insight.
                        </div>
                        <h1 className="hidden md:block text-5xl lg:text-6xl font-extrabold leading-tight ">
                            We Empower
                            <br />
                            Your Business
                            <br />
                            Success.
                        </h1>
                        <h1 className="md:hidden text-5xl font-extrabold">
                            We Empower
                            <br />
                            Your Business
                            <br />
                            Success.
                        </h1>
                        <p className="text-lg hidden md:block">
                            Solutions as unique as your business.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <PrimaryButton
                                type="link"
                                to="/contact"
                                text="Get Started"
                                iconSize={16}
                            />
                        </div>
                    </div>

                    {/* HERO RIGHT */}
                    <div className="relative w-full flex justify-end">
                        <img
                            src={charlie}
                            alt="Charlie"
                            className="w-64 md:w-80 opacity-90 pointer-events-none md:absolute -top-2 -mr-4 md:-mr-32"
                        />
                    </div>


                </div>
            </div>
        </section>
    )
}

export default HeroSection