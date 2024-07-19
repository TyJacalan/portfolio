import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Chip from "../Chip";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../Dialog";

import { FaGithub } from "react-icons/fa";

const technologies = ["ReactJs", "Tailwind CSS", "Shadcn", "Axios"];

const Rooms = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <motion.div
            initial={{ opacity: 0, translateY: "25%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 2.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex h-full w-full rounded-md overflow-hidden"
          >
            <Image
              src="/rooms.png"
              alt="Rooms"
              height={360}
              width={500}
              className="object-cover hover:scale-105 transition-transform"
            />
          </motion.div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Rooms</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4 mt-4 text-sm text-center">
              <div className="flex flex-row items-center justify-center gap-4">
                <Link
                  href="https://github.com/TyJacalan/slack-app"
                  target="_blank"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://rooms-navy.vercel.app/"
                  target="_blank"
                  className="underline hover:font-semibold"
                >
                  Live
                </Link>
              </div>
              <div className="text-muted">
                A messaging application that uses an API built by Avion School
              </div>
              <div className="flex flex-row flex-wrap justify-center gap-2 text-xs">
                {technologies.map((technology, index) => (
                  <Chip key={index}>{technology}</Chip>
                ))}
              </div>
              <div className="h-auto w-fit mx-auto overflow-hidden rounded-md mb-6">
                <Image
                  src="/rooms.jpeg"
                  alt="Rooms"
                  height={360}
                  width={500}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 mb-6">
                <h3 className="text-xl">Highlights</h3>
                <h4 className="font-bold">User Authentication</h4>
                <p>
                  Implemented user authentication using React Router to control
                  access to different parts of the application.
                </p>
                <h4 className="font-bold">Messaging and Channel Creation</h4>
                <p>
                  Built messaging and channel creation features using React
                  Hooks for efficient state management. Users can create new
                  channels, add other users to channels, send direct messages,
                  and communicate within channels.
                </p>
                <h4 className="font-bold">API handling</h4>
                <p>
                  Used the Provider Pattern to manage API interactions and data
                  flow within the application, helping in maintaining a clean
                  codebase and efficient data management.
                </p>
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Rooms;
