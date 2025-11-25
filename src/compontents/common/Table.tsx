import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Button from "./Button";

interface Column<T> {
  key: keyof T;
  label: string;
  style?: string;
}

interface Action<T> {
  label: string;
  function: (row: T) => void;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  actions?: Action<T>[];
}

const GeneralTable = <T,>({ columns, data, actions }: TableProps<T>) => {
  return (
    <Table>
      <TableHeader className="bg-dark-purple font-bold text-white text-lg">
        <TableRow className="hover:bg-dark-purple">
          {columns.map((column) => (
            <TableCell key={column.key as string} className="p-4">
              {column.label}
            </TableCell>
          ))}
          {actions && <TableCell className="p-4"> الافعال </TableCell>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id as string} className="border">
            {columns.map((column) => (
              <TableCell
                key={column.key as string}
                className={`border px-4 py-2 text-[16px] ${column.style}`}
              >
                {String(item[column.key])}
              </TableCell>
            ))}

            {actions && (
              <TableCell className="border px-4 py-2">
                {actions.map((action, actIndex) => (
                  <Button
                    style="outline"
                    size="medium"
                    width="fit"
                    onClick={() => action.function(item)}
                  >
                    {String(action.label)}
                  </Button>
                ))}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GeneralTable;
