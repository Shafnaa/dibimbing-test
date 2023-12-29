import { Card, CardHeader, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Note } from "../type";
import Link from "next/link";

const NotesCard = ({ data }: { data: Note }) => {
  return (
    <Card height={"inherit"} className="p-2">
      <CardHeader as={Link} href={`/${data.id}`}>
        <Heading size={"md"}>{data.title}</Heading>
      </CardHeader>
      <Divider />
      <Text>{data.body}</Text>
    </Card>
  );
};

export default NotesCard;
