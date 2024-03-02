import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";

export default function Calculator() {
  return (
    <>
      <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.cyan.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.cyan.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.cyan.300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.cyan.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none mb-11">
        <div className="w-full max-w-xs mx-auto shrink-0">
          <form className="relative">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-3 bg-cyan-500/15 dark:bg-transparent dark:bg-gradient-to-b dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.cyan.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.cyan.500/.56)_1.5px,transparent_1.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.cyan.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.cyan.500/.56)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)]"
              aria-hidden="true"
            />
            <div className="space-y-3">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={14}
                    >
                      <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    className="form-input text-sm w-full pl-10 pr-4"
                    type="email"
                    placeholder="Select Token 1"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={14}
                    >
                      <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    className="form-input text-sm w-full pl-10 pr-4"
                    type="email"
                    placeholder="Select Token 2"
                    required
                  />
                </div>
              </div>
              <div>
                <button className="btn text-gray-100 bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white w-full">
                  Calculate
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          {/* Avatars */}
          <ul className="flex justify-center -space-x-2 mb-4">
            <li>
              <Image
                className="rounded-full"
                src={Avatar01}
                width={32}
                height={32}
                alt="Avatar 01"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar02}
                width={32}
                height={32}
                alt="Avatar 02"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar03}
                width={32}
                height={32}
                alt="Avatar 03"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar04}
                width={32}
                height={32}
                alt="Avatar 04"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar05}
                width={32}
                height={32}
                alt="Avatar 05"
              />
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            Join the{" "}
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              2.000+
            </span>{" "}
            members who have already signed up.
          </p>
        </div>
      </div>
    </>
  );
}
