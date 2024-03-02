export const metadata = {
  title: "Faq - Creative",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";

export default function Faq() {
  const faqs = [
    {
      title: "When the software will be released?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title:
        "Are there any limits to the number of exported tools from Waitlist?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title: "Do you provide any support?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title: "What does the term “per software” mean in the License?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: true,
    },
    {
      title: "How is Waitlist different from X?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title: "What happens if I don't renew my license after one year?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title: "How does billing work?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title: "What is your cancellation or refund policy?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
  ];

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Let's talk about software"
              description="Here we provide answers for the most common questions. From registering and accessing your account to payments and paid subscriptions."
            >
              Quick Answers
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
