import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Chip from "../Chip";
import Dialog from "../Dialog";

import { FaGithub } from "react-icons/fa";

const technologies = [
  "Ruby on Rails",
  "Turbo Stimulus",
  "Tailwind CSS",
  "Shadcn",
];

const AvionFi = () => {
  return (
    <>
      <Dialog
        title="AvionFi"
        trigger={
          <>
            <motion.div
              initial={{ opacity: 0, translateY: "25%" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: 2.2,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex h-full w-full"
            >
              <Image
                src="/avionfi.png"
                alt="AvionFi"
                height={360}
                width={500}
                className="object-cover hover:-rotate-2 hover:scale-105 transition-transform"
              />
            </motion.div>
            <motion.img
              initial={{ opacity: 0, rotate: -20, translateX: "100%" }}
              whileInView={{ opacity: 1, rotate: 0, translateX: "0%" }}
              transition={{
                delay: 1.2,
                duration: 1.2,
                ease: "easeInOut",
              }}
              src="/leaf_blurred.png"
              alt="leaf"
              height={150}
              width={150}
              className="absolute top-0 right-[-15%] sm:right-[-10%] object-cover"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 200, translateX: "-100%" }}
              whileInView={{ opacity: 1, rotate: 180, translateX: "0%" }}
              transition={{
                delay: 1.2,
                duration: 1.2,
                ease: "easeInOut",
              }}
              src="/leaf_blurred.png"
              alt="leaf"
              height={200}
              width={200}
              className="absolute top-0 left-[-20%] sm:left-[-15%] object-cover"
            />
          </>
        }
      >
        <div class="flex flex-col gap-4 mt-4 text-sm text-center">
          <div className="flex flex-row items-center justify-center gap-4">
            <Link
              href="https://github.com/TyJacalan/trading-app"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </div>
          <div className="px-6 sm:px-24">
            <p class="text-muted">
              A stock trading application that leverages real-world stock market
              information data from{" "}
              <Link
                href="https://github.com/dblock/iex-ruby-client"
                target="_blank"
                className="underline"
              >
                IEX api
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-row justify-center gap-2 text-xs">
            {technologies.map((technology, index) => (
              <Chip key={index}>{technology}</Chip>
            ))}
          </div>
          <div class="h-auto w-fit mx-auto overflow-hidden rounded-md mb-6">
            <Image
              src="/avionfi.jpeg"
              alt="AvionFi"
              height={360}
              width={500}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-6 sm:px-24 bg-gradient-to-b from-primary to-accent">
            <h3 class="text-xl">Highlights</h3>
            <h4 class="font-bold">User Authentication</h4>
            <p>
              I used the{" "}
              <Link
                href="https://github.com/heartcombo/devise"
                target="_blank"
                className="underline"
              >
                Devise Gem
              </Link>{" "}
              to set up authentication, complete with email confirmation. I
              customized the Devise controllers to create separate
              authentication routes for traders and admins.
            </p>
            <h4 class="font-bold">Admin Console</h4>
            <p>
              Admins have a dedicated console where they can perform all the
              CRUD actions they need for different models. I used ActiveMailer
              to send email notifications for certain actions and built an admin
              dashboard with{" "}
              <Link href="https://chartkick.com/" target="_blank">
                Chartkick
              </Link>{" "}
              to display key data visually.
            </p>
            <h4 class="font-bold">Transaction System</h4>
            <p>
              I used ActiveRecord Transacions to manage buying and selling
              stocks. This system maps stocks, create transactions, and updates
              the user&apos;s wallet balance efficiently.
            </p>
          </div>
          <div className="p-6 md:px-24 pb-12">
            AvionFi was a duo project with{" "}
            <Link
              href="https://github.com/cimafrancamae"
              target="_blank"
              className="underline"
            >
              Mae Ann Cimafranca,
            </Link>{" "}
            who implemented the portfolio and stock market views, including
            displaying real-time prices, charts, and news.
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AvionFi;
