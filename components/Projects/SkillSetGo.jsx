import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Chip, Separator } from "@/components/Common";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/Common/Dialog";

import { FaGithub } from "react-icons/fa";

const technologies = [
  "Ruby on Rails",
  "Turbo Stimulus",
  "Tailwind CSS",
  "Shadcn",
];

const SkillSetGo = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="h-full w-full">
          <motion.div
            initial={{ opacity: 0, translateY: "-25%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 2.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex h-full w-full items-center rounded-md overflow-hidden"
          >
            <Image
              src="/projects/skillsetgo.png"
              alt="SkillSetGo"
              height={360}
              width={500}
              className="object-cover hover:scale-105 transition-transform"
            />
          </motion.div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>SkillSetGo</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4 mt-4 text-sm text-center">
              <div className="text-muted">
                An appointment scheduling app tailored specifically for
                freelancers and clients in the Philippines.
              </div>
              <div className="flex flex-row flex-wrap justify-center gap-2 text-xs">
                {technologies.map((technology, index) => (
                  <Chip key={index}>{technology}</Chip>
                ))}
              </div>
              <div className="h-auto w-fit mx-auto overflow-hidden rounded-md mb-6">
                <Image
                  src="/projects/skillsetgo.jpeg"
                  alt="SkillSetGo"
                  height={360}
                  width={500}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">Highlights</h3>
                <h4 className="font-bold">Booking System</h4>
                <p>
                  I built an appointment booking system, with a feature-rich
                  calendar. Users can book appointments across multiple dates
                  and freelancers to block specific dates. I used{" "}
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
                <h4 className="font-bold">Payment Integration</h4>
                <p>
                  I developed a ruby client for the{" "}
                  <Link
                    href="https://developers.paymongo.com/"
                    target="_blank"
                    className="underline"
                  >
                    Paymongo API
                  </Link>
                  , implementing their Payment Intent workflow. This allowed us
                  to create a custom payment system for booking appointments.
                </p>
                <h4 className="font-bold">Notification System</h4>
                <p>
                  I developed a notification system from scratch that enabled
                  users to receive notifications related to their appointments.
                </p>
              </div>
              <Separator />
              <div class="mb-6">
                SkillSetGo also includes user profile management, freelancer
                service management, email notifications, ratings and reviews,
                and a user role system. The full list of contributors for
                SkillSetGo can be found{" "}
                <Link
                  href="https://github.com/TyJacalan/booking-app/graphs/contributors"
                  target="_blank"
                  className="underline"
                >
                  here
                </Link>
                .
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SkillSetGo;
