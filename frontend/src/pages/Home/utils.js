export function useCustomHook() {
  const departmentList = ["All", "Marketing", "IT", "Law", "Financial services", "Engineering", "Education and training"];
  const sortList = [
    { key: "default", name: "Default" },
    { key: "salaryMinToMax", name: "Salary min to max"},
    { key: "salaryMaxToMin", name: "Salary max to min" },
    { key: "positionNameAtoZ", name: "Position name A - Z" },
  ];
  return {
    departmentList,
    sortList
  };
}
