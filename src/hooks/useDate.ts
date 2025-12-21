import { format } from "date-fns";
import { ar } from "date-fns/locale";

export default function useDate(date: number) {
  const formattedDate = format(date, "dd-MM-yyyy  hh:mm a", { locale: ar })
    .replace("ص", "صباحًا")
    .replace("م", "مساءً");

  return formattedDate;
}
