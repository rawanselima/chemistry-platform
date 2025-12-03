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
  label: string | React.JSX.Element;
  operation?: string;
  function: (row: T) => void;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  actions?: Action<T>[];
}

const GeneralTable = <T extends { id: string | number }>({
  columns,
  data,
  actions,
}: TableProps<T>) => {
  return (
    <Table className="bg-white">
      <TableHeader className="bg-dark-purple font-bold text-white text-lg">
        <TableRow className="hover:bg-dark-purple">
          {columns.map((column) => (
            <TableCell key={column.key as string} className="p-4">
              {column.label}
            </TableCell>
          ))}
          {actions && <TableCell className="p-4"> الإجراءات </TableCell>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id as string} className="border h-15">
            {columns.map((column) => (
              <TableCell
                key={column.key as string}
                className={`border px-4 py-2 text-[16px] ${column.style}`}
              >
                {column.key === "img" ? (
                  <img
                    src={String(item[column.key])}
                    alt={column.label}
                    className="w-20 h-15 object-fit"
                  />
                ) : (
                  String(item[column.key])
                )}
              </TableCell>
            ))}

            {actions && (
              <TableCell className="border h-20 px-4 py-2 flex items-center gap-2">
                {actions.map((action) =>
                  typeof action.label === "string" ? (
                    <Button
                      style="outline"
                      size="medium"
                      width="fit"
                      onClick={() => action.function(item)}
                    >
                      {action.label}
                    </Button>
                  ) : (
                    <button
                      className={`p-2 text-xl rounded cursor-pointer ${
                        action.operation === "view"
                          ? "bg-light-purple text-purple"
                          : action.operation === "edit"
                          ? "bg-blue-100 text-blue-900"
                          : action.operation === "students"
                          ? "bg-green-100 text-green-900"
                          : "text-red-900 bg-red-100"
                      } `}
                      onClick={() => action.function(item)}
                    >
                      {action.label}
                    </button>
                  )
                )}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GeneralTable;
