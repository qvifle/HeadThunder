import formatSalary from "@/utils/helpers/formatSallary";
import { FC } from "react";

interface VacancyCardSallaryProps
  extends Pick<Vacancy, "sallaryAt" | "sallaryEnd"> {}

const VacancyCardSallary: FC<VacancyCardSallaryProps> = ({
  sallaryAt,
  sallaryEnd,
}) => {
  return (
    <p className="text-md font-medium">
      {formatSalary(sallaryAt)}$ - {formatSalary(sallaryEnd)}$
    </p>
  );
};

export default VacancyCardSallary;
