"use client";

import BgShapes from "@/components/bg-shapes";
import VerticalLines from "@/components/vertical-lines";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import HeaderTest from "@/components/ui/header-test";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <VerticalLines /> */}
      <div style={{ opacity: '0.3' }}>
      <BgShapes />
      </div>

      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
