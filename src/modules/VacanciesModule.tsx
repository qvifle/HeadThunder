"use client";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import data from "@/data/vacancies.json";
import VacancyCard from "@/ui/cards/VacancyCard";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button, Input, Pagination } from "@nextui-org/react";
import { useDebounce } from "@uidotdev/usehooks";

const VacanciesModule = () => {
  const [vacancies, setVacancies] = useState(data);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const getData = () => {
    const start = (page - 1) * limit;
    return vacancies.slice(start, start + limit);
  };

  const getMaxPage = () => {
    const countOfVacancies = vacancies.length;
    return Math.ceil(countOfVacancies / limit);
  };

  const filterBySearchValue = (value: string, array: Vacancy[]) => {
    return array.filter(
      (el) =>
        el.title.toLowerCase().includes(value.toLowerCase()) ||
        el.location.toLowerCase().includes(value.toLowerCase())
    );
  };

  // const getArrayFromLen = (length: number) => {
  //   return Array.from({ length: length }, (_, i) => i + 1);
  // };

  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // smooth scroll
      });
    }, 100);
  };

  useEffect(() => {
    if (!debouncedSearchValue) {
      setVacancies(data);
      return;
    }
    setVacancies(filterBySearchValue(debouncedSearchValue, data));
  }, [debouncedSearchValue]);

  return (
    <section className="flex h-full  flex-col justify-between">
      <div>
        <h1 className="text-3xl text-neutral-950 font-semibold mb-4">
          Vacancies
        </h1>

        <Input
          onChange={(e) => setSearchValue(e.target.value)}
          className="mb-4 w-full max-w-[400px] sm:mx-auto"
          endContent={
            <Search className="w-4 h-4" size={16} color="rgb(10 10 10)" />
          }
          placeholder="Frontend developer"
        />

        <ul className="grid min-[500px]:grid-cols-2 gap-2 mb-2 sm:grid sm:grid-cols-3 lg:grid-cols-4">
          {getData().map((vacancy, key) => (
            <VacancyCard key={key} vacancy={vacancy} />
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <Pagination
          page={page}
          onChange={(p) => {
            setPage(p);
            handleScrollToTop();
          }}
          classNames={{
            item: "bg-neutral-50 text-neutral-900",
            base: "p-0 m-0",
          }}
          isCompact
          total={getMaxPage()}
          initialPage={1}
        />

        <Dropdown>
          <DropdownTrigger>
            <Button
              className="bg-neutral-50"
              variant="bordered"
              size="sm"
              color="primary">
              Max on page: {limit}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            selectionMode="single"
            disallowEmptySelection
            selectedKeys={[limit.toString()]}
            onSelectionChange={(e) => {
              const newLimit = parseInt(e.currentKey as string);
              setLimit(newLimit);
            }}
            onAction={() => setPage(1)}>
            <DropdownItem key={12}>12</DropdownItem>
            <DropdownItem key={24}>24</DropdownItem>
            <DropdownItem key={48}>48</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </section>
  );
};

export default VacanciesModule;
