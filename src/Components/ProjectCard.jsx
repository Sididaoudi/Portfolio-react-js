// composant qui "dessine une card"

import { Button } from "./button";
import { Link } from "react-router";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

function ProjectCard({ img, title, urlWebsite, description }) {
  return (
    <li>
      <Card className="group relative mx-auto w-full max-w-sm pt-0 border-none rounded-none shadow-none bg-transparent ring-0">
        <img
          src={img}
          alt={title}
          className="relative z-20 h-[300px] w-full object-top"
        />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <a href={urlWebsite} target="_blank" rel="noreferrer">En savoir plus → {urlWebsite}</a>
        </CardFooter>
      </Card>
    </li>
  );
}

export default ProjectCard;
