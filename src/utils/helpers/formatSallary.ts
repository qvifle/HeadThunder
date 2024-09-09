function formatSalary(salary: number) {
  return new Intl.NumberFormat("en-US").format(salary);
}

export default formatSalary;
