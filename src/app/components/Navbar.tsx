import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-screen-lg flex flex-row justify-between items-center mx-auto">
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} href="/">
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Link href="/new">New Notes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
