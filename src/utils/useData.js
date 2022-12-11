import { useEffect, useState } from "react";
import fetchData from "./fetchData";

const useData = () => {
  const [candidates, setCandidates] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [refreshReports, setRefreshReports] = useState(false)

  useEffect(() => {
    fetchData("candidates", setCandidates);
    fetchData("companies", setCompanies);
    fetchData("users", setUsers);
  }, []);

  useEffect(() => {
    // ovo ce da posalje jedan poziv vise
    fetchData("reports", setReports);
  }, [refreshReports]);

  return { candidates, companies, reports, users, refreshReports, setRefreshReports };
};

export default useData;
