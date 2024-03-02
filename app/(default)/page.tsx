export const metadata = {
  title: "Home - Creative",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";
import Calculator from "@/components/calculator/calculator";
import CardLinks from "@/components/ui/card-links";

export default function Home() {

  return (
    <section>
      <div className="pt-32 pb-12 md:pt-36 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="Your Gateway to the Alephium Ecosystem"
            firstText="Your Gateway to the "
            alph="Alephium"
            secondText=" Ecosystem"
            description="Embark on your Alephium journey today. Access the tools, insights, and community support to unlock the full potential of your blockchain endeavors."
          >
            ALPH<span className="text-gray-300 mx-1">·</span>
          </PageHeader>

          <CardLinks />

          {/* <Calculator /> */}
        </div>
      </div>
    </section>
  );
}
