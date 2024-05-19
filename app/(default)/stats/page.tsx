
import getAllPosts from "@/lib/getAllPosts";
import CardLinks from "@/components/ui/card-links";

export const metadata = {
  title: "Alph Nodes - Ecosystem",
  description: "Embark on your Alephium journey today. Access the tools, insights, and community support to unlock the full potential of your blockchain endeavors.",
};

import PageHeaderAlt from "@/components/page-header-alt";
import Cta from "@/components/cta";
import Posts from "@/app/(default)/updates/posts";

export default async function Ecosystem() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;
  Cta
  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-36 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeaderAlt
              title="Statistics"
              description="From Data to Insights, explore the Alephium ecosystem under the hood."
            >
              Ecosystem
            </PageHeaderAlt>
    
          </div>
          <CardLinks />
        </div>
      </section>

      {/* <Posts posts={posts} />
      <Cta /> */}
    </>
  );
}
