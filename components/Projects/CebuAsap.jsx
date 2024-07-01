import { motion } from "framer-motion";
import Image from "next/image";
import Dialog from "../Dialog";

const CebuAsap = () => {
  return (
    <>
      <Dialog
        title="Cebu Asap Advertising & Events"
        trigger={
          <motion.div
            initial={{ opacity: 0, translateX: "-25%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{
              delay: 2.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex h-full w-full rounded-md overflow-hidden"
          >
            <Image
              src="/cebuasap.png"
              alt="CebuAsap"
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
              A landing page for a company seeking to pioneer the future of
              events and advertising, crafting immersive experiences and
              cutting-edge campaigns that brings brands to life and cativate
              diverse audiences.
            </p>
          </div>
          <div class="h-auto w-fit mx-auto overflow-hidden rounded-md mb-6">
            <Image
              src="/cebuasap.jpeg"
              alt="CebuAsap"
              height={360}
              width={500}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-6 sm:px-24 bg-gradient-to-b from-primary to-accent">
            <p>
              Since it&apos;s founding in 1994, Cebu Asap Advertising and Events
              has established itself as the creative powerhouse of the VisMin
              region with a clientele that includes some of the countries
              largest companies including Toyota, PLDT, and the Department of
              Tourism.
            </p>
            <p>
              Cebu Asap Advertising and Events approached me while they were
              rebranding. Their goal was clear: they needed a website that would
              reflect their innovative spirit and long-standing reputation for
              excellence. I sought a design that would be sleek, modern, and
              align with their values. The website aims to blend their rich
              history with thier forward-thinking vision, ensuring that they
              remain at the forefront of the industry.
            </p>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CebuAsap;
