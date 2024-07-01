import { motion } from "framer-motion";
import Image from "next/image";
import Dialog from "../Dialog";
import Link from "next/link";

const Erp = () => {
  return (
    <>
      <Dialog
        title="Enterprise Resource Planning System Project"
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
              src="/erp.png"
              alt="Erp System Project"
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
              A MVP for an all-in-one application to manage company resources
              and complex workflows.
            </p>
          </div>
          <div class="h-auto w-fit mx-auto overflow-hidden rounded-md mb-6">
            <Image
              src="/erp.jpeg"
              alt="Erp System Project"
              height={360}
              width={500}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-6 pb-12 sm:px-24 bg-gradient-to-b from-primary to-accent">
            <h3 class="text-xl">Highlights</h3>
            <h4 class="font-bold">User Role System</h4>
            <p>
              To manage user roles and access control, I used the{" "}
              <Link
                href="https://github.com/varvet/pundit"
                target="_blank"
                className="underline"
              >
                Pundit Gem
              </Link>
              . This allowed me to define and enforce permissions for different
              user types. To maintain control over user creation, I disabled
              public user registration and implemented an invitation-only
              system.
            </p>
            <h4 class="font-bold">Task Management System</h4>
            <p>
              The ERP System I developed serves a company with 50+ clients and
              over 100 employees. Each client has a dedicated team, and users
              can be assigned to multiple clients. To streamline task
              delegation, I created a robust task management system that
              supports bulk task creation, allowing tasks to be efficiently
              assigend to various clients and users simultaneously.
            </p>
            <h4 class="font-bold">Complex Querying System</h4>
            <p>
              The application features intricate model associations, such as
              Clients being associated with Organzations, which can have
              headquarters and offices built throug Locations. To handle these
              complex relationships, integrated{" "}
              <Link
                href="https://github.com/activerecord-hackery/ransack"
                target="_blank"
                className="underline"
              >
                Ransack
              </Link>{" "}
              , enabling advanced search and filtering capabilities across the
              interconnected models.
            </p>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Erp;
