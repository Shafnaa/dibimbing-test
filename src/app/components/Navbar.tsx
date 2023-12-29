import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white py-6">
      <div className="max-w-screen-lg flex flex-row justify-between items-center mx-auto">
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              as={Link}
              href="/"
              fontSize={"large"}
              fontWeight={800}
            >
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Link href="/create">New Notes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
