import BlurredShade from '@src/Components/UI/BlurredShade'
import OutlinedButton from '@src/Components/UI/OutlinedButton'

function InfoAndCta({ title, description, buttonText, to }) {
    return (
        <section className="py-16 md:py-24 bg-gray-50 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="h2 text-gray-700">
                        {title}
                    </h2>
                    <p className="text-gray-500 text-xl">
                        {description}
                    </p>
                    <div className="flex justify-center mt-10">
                        <OutlinedButton
                            type='link'
                            to={to}
                            text={buttonText}
                        />
                    </div>
                </div>

                <BlurredShade />

            </div>
        </section>
    )
}

export default InfoAndCta