{
  /*
Note: This code includes an example of how to fetch data from an external JSON file that is hosted at https://raw.githubusercontent.com/cruip/cruip-dummy/main/waitlist-posts.json. To facilitate this, we've included a lib directory in the root which contains a function that can fetch the JSON content. Additionally, we've defined the Post types in the types.d.ts file located in the root.
*/
}

export const metadata = {
  title: "Alephium World - Updates",
  description: "Embark on your Alephium journey today. Access the tools, insights, and community support to unlock the full potential of your blockchain endeavors.",
};

import PageHeaderAlt from "@/components/page-header-alt";
import Cta from "@/components/cta";
import Posts from "@/app/(default)/updates/posts";

export default async function Updates() {

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-36 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeaderAlt
              title="Coming Soon"
              description="Rank and score updates and feature requests so you know you're working on the most impactful things."
            >
              What's New
            </PageHeaderAlt>
          </div>
        </div>
      </section>

      {/* <Posts posts={posts} />
      <Cta /> */}
    </>
  );
}
