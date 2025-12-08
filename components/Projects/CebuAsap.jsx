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

const technologies = ["NextJS", "Typescript", "TailwindCSS", "Aceternity"];

const CebuAsap = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="h-full w-full">
          <motion.div
            initial={{ opacity: 0, translateX: "-25%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{
              delay: 2.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex h-full w-full items-center rounded-md overflow-hidden"
          >
            <Image
              src="/projects/cebuasap.png"
              alt="CebuAsap"
              height={360}
              width={500}
              className="object-cover hover:scale-105 transition-transform"
            />
          </motion.div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Cebu Asap Advertising & Events</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4 mt-4 text-sm text-center">
              <div className="flex flex-row items-center justify-center gap-4">
                <Link href="https://github.com/TyJacalan/asap" target="_blank">
                  <FaGithub />
                </Link>
                <Link
                  href="https://www.asapcebu.ph/"
                  target="_blank"
                  className="underline hover:font-semibold"
                >
                  Live
                </Link>
              </div>
              <div>
                <p className="text-muted">
                  A landing page for a company seeking to pioneer the future of
                  events and advertising, crafting immersive experiences and
                  cutting-edge campaigns that brings brands to life and
                  captivate diverse audiences.
                </p>
              </div>
              <div className="flex flex-row flex-wrap justify-center gap-2 text-xs">
                {technologies.map((technology, index) => (
                  <Chip key={index}>{technology}</Chip>
                ))}
              </div>
              <div className="h-auto w-fit mx-auto overflow-hidden rounded-md mb-6">
                <Image
                  src="/projects/cebuasap.jpeg"
                  alt="CebuAsap"
                  height={360}
                  width={500}
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-4 pb-6">
                  <p>
                    Since it&apos;s founding in 1994, Cebu Asap Advertising and
                    Events has established itself as the creative powerhouse of
                    the VisMin region with a clientele that includes some of the
                    countries largest companies including Toyota, PLDT, and the
                    Department of Tourism.
                  </p>
                  <p>
                    Cebu Asap Advertising and Events approached me while they
                    were rebranding. Their goal was clear: they needed a website
                    that would reflect their innovative spirit and long-standing
                    reputation for excellence. I sought a design that would be
                    sleek, modern, and align with their values. The website aims
                    to blend their rich history with thier forward-thinking
                    vision, ensuring that they remain at the forefront of the
                    industry.
                  </p>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CebuAsap;
