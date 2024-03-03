import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-4 md:top-6 w-full z-30  pb-4 md:pb-6 [border-image:linear-gradient(to_right,transparent,theme(colors.cyan.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.cyan.300/.16),transparent)1] dark:shadow-none">
      <div className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative flex items-center justify-between gap-x-2 h-12 rounded-lg px-3
           shadow bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
            style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
            {/* Border with dots in corners */}
            <div
              className="absolute bg-cyan-500/15 dark:bg-gray-800/50 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[10px] 
              before:bg-[length:10px_10px] before:[background-position:top_center,bottom_center] before:bg-no-repeat 
              before:[background-image:radial-gradient(circle_at_center,theme(colors.cyan.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.cyan.500/.56)_1px,transparent_1px)] 
              dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)] 
              after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:bg-[length:10px_10px] after:[background-position:top_center,bottom_center] after:bg-no-repeat 
              after:[background-image:radial-gradient(circle_at_center,theme(colors.cyan.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.cyan.500/.56)_1px,transparent_1px)] 
              dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)]"

              aria-hidden="true"
            />
            {/* Site branding */}
            <div className="flex-1">
              {/* Logo */}
              <Link href="/" style={{
                fontWeight: '700'
              }} className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-cyan-100 dark:hover:bg-gray-800/30 py-1.5 px-3">
                ℵALPHWIKI <span className="text-cyan-400 italic">BETA</span>

              </Link>
            </div>
            {/* Navigation links */}
            <nav className="flex justify-center">
              <ul className="flex items-center sm:gap-x-3 text-sm font-medium">
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-cyan-100 dark:hover:bg-gray-800/30 py-1.5 px-3"
                    href="/tokens"
                  >
                    Tokens
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-cyan-100 dark:hover:bg-gray-800/30 py-1.5 px-3"
                    href="/updates"
                  >
                    Ecosystem
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-cyan-100 dark:hover:bg-gray-800/30 py-1.5 px-3"
                    href="/updates"
                  >
                    Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-cyan-100 dark:hover:bg-gray-800/30 transition-colors py-1.5 px-3"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-cyan-100 dark:hover:bg-gray-800/30 transition-colors py-1.5 px-3"
                    href="/contact"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Light switch */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
