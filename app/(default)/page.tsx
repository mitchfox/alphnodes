export const metadata = {
  title: "Alph Nodes - Home",
  description: "Embark on your Alephium journey today. Access the tools, insights, and community support to unlock the full potential of your blockchain endeavors.",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";
import Calculator from "@/components/calculator/calculator";
import CardLinks from "@/components/ui/card-links";
import Map from "@/components/map";
import Stats from '@/components/ui/stats';

export default function Home() {

  return (
    <section>
      <div className="pt-32 pb-12 md:pt-24 md:pb-20">
        <div className="px-4 sm:px-6 ">

          {/* MAP HERE */}
          <div style={{ height: 'auto', margin: 'auto', display: 'flex' }}>
            <div style={{ margin: 'auto' ,  width: '90%', maxWidth: '1200px', 
            // maxHeight: '600px'
            }}>
            <Map />
            </div>
           
          </div>

          <div>
            <Stats />
          </div>
          {/* <PageHeader
            className="mb-12"
            title="Your Gateway to the Alephium Ecosystem"
            firstText="Your Gateway to the "
            alph="Alephium"
            secondText=" Ecosystem"
            description="Embark on your Alephium journey today. Access the tools, insights, and community support to unlock the full potential of your blockchain endeavors."
          >
            ALPH<span className="text-gray-300 mx-1">·</span>
          </PageHeader>

          <CardLinks /> */}

          {/* <Calculator /> */}
        </div>
      </div>
    </section>
  );
}
