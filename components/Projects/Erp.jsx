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

const technologies = [
  "Ruby on Rails",
  "Turbo Stimulus",
  "Tailwind CSS",
  "Shadcn",
];

const Erp = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="h-full w-full">
          <motion.div
            initial={{ opacity: 0, translateY: "25%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 2.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex h-full w-full items-center rounded-md overflow-hidden"
          >
            <Image
              src="/erp.png"
              alt="Erp System Project"
              height={360}
              width={500}
              className="object-cover hover:scale-105 transition-transform"
            />
          </motion.div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Enterprise Resource Planning System Project</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4 mt-4 text-sm text-center">
              <div className="text-muted">
                A MVP for an all-in-one application to manage company resources
                and complex workflows.
              </div>
              <div className="flex flex-row flex-wrap justify-center gap-2 text-xs">
                {technologies.map((technology, index) => (
                  <Chip key={index}>{technology}</Chip>
                ))}
              </div>
              <div className="h-auto w-fit mx-auto overflow-hidden rounded-md mb-6">
                <Image
                  src="/erp.jpeg"
                  alt="Erp System Project"
                  height={360}
                  width={500}
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <h3 className="text-xl">Highlights</h3>
                  <h4 className="font-bold">User Role System</h4>
                  <p>
                    To manage user roles and access control, I used the{" "}
                    <Link
                      href="https://github.com/varvet/pundit"
                      target="_blank"
                      className="underline"
                    >
                      Pundit Gem
                    </Link>
                    . This allowed me to define and enforce permissions for
                    different user types. To maintain control over user
                    creation, I disabled public user registration and
                    implemented an invitation-only system.
                  </p>
                  <h4 className="font-bold">Task Management System</h4>
                  <p>
                    The ERP System I developed serves a company with 50+ clients
                    and over 100 employees. Each client has a dedicated team,
                    and users can be assigned to multiple clients. To streamline
                    task delegation, I created a robust task management system
                    that supports bulk task creation, allowing tasks to be
                    efficiently assigned to various clients and users
                    simultaneously.
                  </p>
                  <h4 className="font-bold">Complex Querying System</h4>
                  <p>
                    The application features intricate model associations, such
                    as Clients being associated with Organizations, which can
                    have headquarters and offices built through Locations. To
                    handle these complex relationships, I integrated{" "}
                    <Link
                      href="https://github.com/activerecord-hackery/ransack"
                      target="_blank"
                      className="underline"
                    >
                      Ransack
                    </Link>{" "}
                    , enabling advanced search and filtering capabilities across
                    the interconnected models.
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

export default Erp;
