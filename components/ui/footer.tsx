import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="py-8 text-center">
            <div className="text-sm text-gray-700 dark:text-gray-400">
              {/* open in a new link */}
              <p>Alephium World</p>
              <p>Powered by <a className="text-green-500" href="https://notrustverify.ch" target="_blank" rel="noopener noreferrer">No Trust Verify</a> & <a className="text-green-500" href="https://x.com/pushvalue" target="_blank" rel="noopener noreferrer">Push Value</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
