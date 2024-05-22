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
// import NewMap from "@/components/newmap";
import dynamic from 'next/dynamic';
const NewMap = dynamic(() => import('@/components/newmap'), { ssr: false });

export default function Home() {

  let MapContainerHeight = '700px'
  return (
    <section>
      <div className="pt-12 pb-12 md:pt-24 md:pb-20">
        <div className="px-4 sm:px-6 ">

          {/* MAP HERE */}
          <div style={{ height: 'auto', margin: 'auto', display: 'flex', }}>
            <div style={{ margin: 'auto' ,  width: '100%', maxWidth: '100vw',  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, }}>
            {/* <Map /> */}
            <NewMap />
            </div>
           
          </div>

          <div style={{ position: 'absolute', bottom: '20px', left: '0px', right: '0px' }}>
            <Stats />
            <div className="">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mt-6">
            <div className="text-sm text-neutral-700 dark:text-neutral-400">
              {/* open in a new link */}
              <p style={{ fontSize: '13px' }}>© AlphNodes. Powegreen by <a className="text-green-500" href="https://notrustverify.ch" target="_blank" rel="noopener noreferrer">No Trust Verify</a> & <a className="text-green-500" href="https://x.com/pushvalue" target="_blank" rel="noopener noreferrer">Push Value</a></p>
            </div>
          </div>
        </div>
      </div>
          </div>
          {/* <PageHeader
            className="mb-12"
            title="Your Gateway to the Alephium Ecosystem"
            firstText="Your Gateway to the "
            alph="Alephium"
            secondText=" Ecosystem"
            description="Embark on your Alephium journey today. Access the tools, insights, and community support to unlock the full potential of your blockchain endeavors."
          >
            ALPH<span className="text-neutral-300 mx-1">·</span>
          </PageHeader>

          <CardLinks /> */}

          {/* <Calculator /> */}
        </div>
      </div>
    </section>
  );
}
