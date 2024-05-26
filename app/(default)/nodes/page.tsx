

import NodeTable from "./node-table";

export const metadata = {
  title: "Alephium World - Nodes",
  description: "Embark on your Alephium journey today. Access the tools, insights, and community support to unlock the full potential of your blockchain endeavors.",
};


import PageHeaderAlt from "@/components/page-header-alt";
// import Cta from "@/components/cta";
// import Posts from "@/app/(default)/updates/posts";


export default async function Updates() {

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-36 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeaderAlt
              title="Alephium Nodes"
              description="View a list of statistics from all nodes contributing to the Alephium network."
            >
              Nodes
            </PageHeaderAlt>

        </div>
        </div>

        <NodeTable />
    
      </section>

    
      {/* <Posts posts={posts} /> */}
      {/* <Cta /> */}
    </>
  );
}
