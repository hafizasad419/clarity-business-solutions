import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "@src/Components/FormikFields/TextField";
import { ArrowRight } from "lucide-react";
import ReusableHeroSection from "@src/Components/UI/ReusableHeroSection";
import PrimaryButton from "@src/Components/UI/PrimaryButton";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("First name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, actions) => {
    console.log("Form Data", values);
    actions.setSubmitting(false);
    actions.resetForm();
    // Trigger toast or API call here
  };

  return (
    <main>
      {/* Hero Section */}
      <ReusableHeroSection
        title="Get in touch"
        subtitle="Custom Solutions, Business Automation and Insights"
      />

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Work Together</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us:</h3>
                  <p className="text-gray-600">
                    Based in Victoria, BC, we work with businesses across Vancouver Island,
                    in Vancouver, across Canada and the US and beyond.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email:</h3>
                  <a href="mailto:marcus@claritybusinesssolutions.ca" className="text-c-zinc hover:underline">
                    marcus@claritybusinesssolutions.ca
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone:</h3>
                  <p className="text-gray-600">
                    (604) 243-3383 (CA)
                    <br />
                    (220) 272-3383 (USA)
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Contact us</h3>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form className="space-y-6">

                    <TextField
                      field="name"
                      label_text="Name"
                      placeholder="Your name"
                    />

                    <TextField
                      field="email"
                      label_text="Email"
                      type="email"
                      placeholder="Email"
                    />

                    <TextField
                      field="message"
                      label_text="Message"
                      type="textarea"
                      placeholder="Brief explanation of services needed"
                    />

                    <PrimaryButton
                      text={"Send Message"}
                      type="submit"
                    />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
