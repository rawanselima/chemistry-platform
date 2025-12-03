import Table from "@/compontents/common/Table";
import TitleDashboard from "@/compontents/common/TitleDashboard";
import type { ReceiptsProps } from "@/typs";
import { FcMoneyTransfer } from "react-icons/fc";
const Receipt = () => {
  const columns = [
    { key: "invoiceId", label: "رقم الفاتورة" },
    { key: "totalPrice", label: "إجمالي السعر", style: "font-bold py-3" },
    { key: "discount", label: "التخفيض" },
    { key: "courseName", label: "الكورسات" },
    { key: "paymentTime", label: "وقت الدفع", style: "text-gray text-sm" },
    { key: "paymentMethod", label: "طريقة الدفع", style: "text-purple" },
  ] satisfies { key: keyof ReceiptsProps; label: string; style?: string }[];

  const receipts: ReceiptsProps[] = [
    {
      id: "1",
      invoiceId: "INV-1001",
      totalPrice: 850,
      discount: 50,
      courseName: "كورس المعادلات",
      paymentTime: "2025-01-15 14:32",
      paymentMethod: "Visa",
    },
    {
      id: "2",
      invoiceId: "INV-1002",
      totalPrice: 420,
      discount: 0,
      courseName: "كورس المعادلات",
      paymentTime: "2025-01-15 14:32",
      paymentMethod: "visa",
    },
    {
      id: "3",
      invoiceId: "INV-1003",
      totalPrice: 1200,
      discount: 100,
      courseName: "كورس المعادلات",
      paymentTime: "2025-02-02 19:50",
      paymentMethod: "Cash",
    },
    {
      id: "4",
      invoiceId: "INV-1004",
      totalPrice: 150,
      discount: 10,
      courseName: "كورس المعادلات",
      paymentTime: "2025-01-15 14:32",
      paymentMethod: "cash",
    },
  ];

  return (
    <main>
      <section className="mt-10">
        <TitleDashboard>
          <FcMoneyTransfer className="mt-2" />
          راجع فواتيرك و الحسابات الماليه
        </TitleDashboard>
      </section>
      <section className="bg-white mt-5">
        <Table<ReceiptsProps> columns={columns} data={receipts} />
      </section>
    </main>
  );
};

export default Receipt;
