import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <main>
        
      </main>
    </>
  );
}
