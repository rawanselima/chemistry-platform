import { useSearchParams } from "react-router-dom";

export default function useFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("levelId") || "all";

  const setFilter = (newValue: number | string) => {
    if (newValue !== "all") {
      searchParams.set("levelId", String(newValue));
    } else {
      searchParams.set("levelId", "all");
    }
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  return { setFilter, currentFilter };
}
