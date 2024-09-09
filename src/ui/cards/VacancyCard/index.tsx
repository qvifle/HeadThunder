import React, { FC } from "react";
import VacancyCardSallary from "./VacancyCardSallary";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
} from "@nextui-org/react";

interface VacancyCardProps extends CardProps {
  vacancy: Vacancy;
}

const VacancyCard: FC<VacancyCardProps> = ({ vacancy, ...rest }) => {
  return (
    <Card isBlurred className="bg-neutral-100/60" {...rest}>
      <CardHeader className="flex flex-col items-start">
        <h3 className="text-xl font-medium leading-6">{vacancy.title}</h3>
        <h5 className="text-xs leading-4 text-neutral-500 mb-2">
          {vacancy.location}
        </h5>
      </CardHeader>
      <CardBody className="pt-0">
        <p className="text-sm text-neutral-700">{vacancy.description}</p>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="flex justify-between w-full items-center">
          <VacancyCardSallary {...vacancy} />

          <Button color="primary" size="sm">
            Apply
          </Button>
        </div>
      </CardFooter>
    </Card>
    // <li
    //   className={cn(
    //     "bg-neutral-50 rounded-lg border shadow-sm border-neutral-200 p-2",
    //     className
    //   )}
    //   {...rest}>
    //   <h3 className="text-xl font-medium leading-6">{vacancy.title}</h3>
    //   <h5 className="text-xs leading-4 text-neutral-500 mb-2">
    //     {vacancy.location}
    //   </h5>
    //   <p className="text-sm text-neutral-700 mb-4">{vacancy.description}</p>
    //   <div className="flex justify-between items-center">
    //     <VacancyCardSallary {...vacancy} />
    //     <button className="bg-sky-500 active:bg-sky-600 duration-200  text-neutral-50 p-1 rounded-lg text-sm">
    //       Apply
    //     </button>
    //   </div>
    // </li>
  );
};

export default VacancyCard;
