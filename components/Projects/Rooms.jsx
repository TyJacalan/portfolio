import { motion } from "framer-motion";
import Image from "next/image";
import Dialog from "../Dialog";

const Rooms = () => {
  return (
    <>
      <Dialog
        title="Rooms"
        trigger={
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
              className="object-cover hover:-rotate-2 hover:scale-105 transition-transform"
            />
          </motion.div>
        }
      >
        <div class="flex flex-col gap-2 mt-4 text-sm text-center">
          <div className="p-6 sm:px-24">
            <p class="text-muted">
              A messaging application that uses an api built by Avion School
            </p>
          </div>
          <div class="h-auto w-fit mx-auto overflow-hidden rounded-md mb-6">
            <Image
              src="/rooms.jpeg"
              alt="Rooms"
              height={360}
              width={500}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-6 sm:px-24 bg-gradient-to-b from-primary to-accent">
            <h3 class="text-xl">Highlights</h3>
            <h4 class="font-bold">User Authentication</h4>
            <p>
              Implemented user authentication using React Router to control
              access to different parts of the application.
            </p>
            <h4 class="font-bold">Messaging and Channel Creation</h4>
            <p>
              Built messaging and channel creation features using React Hooks
              for efficient state management. Users can create new channels, add
              other users to channels, send direct messages, and communicate
              within channels.
            </p>
            <h4 class="font-bold">API handling</h4>
            <p>
              Used the Provider Pattern to manage API interactions and data flow
              within the application, helping in maintaining a clean codebase
              and efficient data management.
            </p>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Rooms;
