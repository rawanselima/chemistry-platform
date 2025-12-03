import PaginationDiv from "@/compontents/common/Pagination";
import Table from "@/compontents/common/Table";
import TitleDashboard from "@/compontents/common/TitleDashboard";
import Form from "@/pattern/form/Form";
import type { ReceiptsProps } from "@/typs";
import { FcMoneyTransfer } from "react-icons/fc";
const TeacherReceipt = () => {
  const columns = [
    { key: "invoiceId", label: "رقم الفاتورة" },
    { key: "studentName", label: "اسم الطالب", style: "font-bold text-simon" },
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
      studentName: "فوزي السيد",
      totalPrice: 850,
      discount: 50,
      courseName: "كورس المعادلات",
      paymentTime: "2025-01-15 14:32",
      paymentMethod: "Visa",
    },
    {
      id: "15",
      invoiceId: "INV-1001",
      studentName: "فوزي السيد",
      totalPrice: 850,
      discount: 50,
      courseName: "كورس المعادلات",
      paymentTime: "2025-01-15 14:32",
      paymentMethod: "Visa",
    },
    {
      id: "16",
      invoiceId: "INV-1001",
      studentName: "فوزي السيد",
      totalPrice: 850,
      discount: 50,
      courseName: "كورس المعادلات",
      paymentTime: "2025-01-15 14:32",
      paymentMethod: "Visa",
    },
  ];

  return (
    <main>
      <section className="mt-10 flex items-center justify-between bg-white p-5 rounded-lg border-1 border-light-purple mb-5">
        <TitleDashboard style="!mb-0">
          <FcMoneyTransfer /> الفواتير و الحسابات الماليه
        </TitleDashboard>
        <Form>
          <Form.Input
            type="search"
            name="searchName"
            placeholder="ابحث عن اسم الطالب"
            style="w-60"
          />
        </Form>
      </section>
      <section className="bg-white my-5">
        <Table<ReceiptsProps> columns={columns} data={receipts} />
      </section>

      <PaginationDiv />
    </main>
  );
};

export default TeacherReceipt;
