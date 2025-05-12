import { faqData } from './faqData';
import FAQItem from './FAQItem';

const FAQs = () => {
    return (
        <section className="bg-black">
            <div className='py-20 mx-auto w-full md:max-w-3xl px-8'>
                <h2 className="h2 text-white mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQs