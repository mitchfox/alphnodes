import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function Footer() {
  return (
    <footer className="border-t [border-image:linear-gradient(to_right,transparent,theme(colors.green.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.green.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none">
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center py-8">
            <div className="text-sm text-gray-700 dark:text-gray-400">
              {/* open in a new link */}
              <p>© AlphNodes</p>
              <p>Powered by <a className="text-green-500" href="https://notrustverify.ch" target="_blank" rel="noopener noreferrer">No Trust Verify</a> & <a className="text-green-500" href="https://x.com/pushvalue" target="_blank" rel="noopener noreferrer">Push Value</a></p>
              {/* Built by{" "} */}
              {/* <a
                className="font-medium text-green-500 hover:underline"
                href="https://www.linkedin.com/in/mitch-fox"
                target="_blank"
              >
                @mitch
              </a>{" "} */}
              {/* &amp;{" "}
              <a
                className="font-medium text-green-500 hover:underline"
                href="https://twitter.com/DavidePacilio"
                target="_blank"
              >
                @davidepacilio.
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
