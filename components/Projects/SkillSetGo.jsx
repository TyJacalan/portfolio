import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Dialog from "../Dialog";

const SkillSetGo = () => {
  return (
    <>
      <Dialog
        title="SkillSetGo"
        trigger={
          <motion.div
            initial={{ opacity: 0, translateX: "50%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="flex h-full w-full rounded-md overflow-hidden"
          >
            <Image
              src="/SkillSetGo.jpg"
              alt="SkillSetGo"
              height={360}
              width={500}
              className="object-cover"
            />
          </motion.div>
        }
      >
        <div class="flex flex-col gap-2 mt-4 text-sm text-center">
          <div className="p-6 sm:px-24">
            <p class="text-muted">
              An appointment scheduling app tailored specifically for
              freelancers and clients in the Philippines.
            </p>
          </div>
          <div class="h-auto w-fit mx-auto overflow-hidden rounded-md mb-6">
            <Image
              src="/SkillSetGo.jpg"
              alt="SkillSetGo"
              height={360}
              width={500}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-6 sm:px-24 bg-gradient-to-b from-primary to-accent">
            <h3 class="text-xl">Highlights</h3>
            <h4 class="font-bold">Booking System</h4>
            <p>
              I built an appointment booking system, with a feature-rich
              calendar. Users can book appointments across multiple dates and
              freelancers to block specific dates. I used{" "}
              <Link
                href="https://github.com/activerecord-hackery/ransack"
                target="_blank"
                className="underline"
              >
                Ransack
              </Link>{" "}
              and{" "}
              <Link
                href="https://github.com/kaminari/kaminari"
                target="_blank"
                className="underline"
              >
                Kaminari
              </Link>{" "}
              for search and pagination of appointments.
            </p>
            <h4 class="font-bold">Payment Integration</h4>
            <p>
              I developed a ruby client for the{" "}
              <Link
                href="https://developers.paymongo.com/"
                target="_blank"
                className="underline"
              >
                Paymongo API
              </Link>
              , implementing their Payment Intent workflow. This allowed us to
              create a custom payment system for booking appointments.
            </p>
            <h4 class="font-bold">Notification System</h4>
            <p>
              I developed a notification system from scratch that enabled users
              to receive notifications related to their appointments.
            </p>
          </div>
          <div className="p-6 md:px-24 pb-12">
            SkillSetGo also includes user profile management, freelancer service
            management, email notifications, ratings and reviews, and a user
            role system. The full list of contributors for SkillSetGo can be
            found here{" "}
            <Link
              href="https://github.com/TyJacalan/booking-app/graphs/contributors"
              target="_blank"
              className="underline"
            >
              here.
            </Link>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SkillSetGo;
