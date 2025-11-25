import Table from "@/compontents/common/Table";
import TitleDashboard from "@/compontents/common/TitleDashboard";
import { FcMoneyTransfer } from "react-icons/fc";
const Receipt = () => {
  const columns = [
    { key: "invoiceId", label: "رقم الفاتورة" },
    { key: "totalPrice", label: "إجمالي السعر", style: "font-bold py-3" },
    { key: "discount", label: "التخفيض" },
    { key: "items", label: "الكورسات" },
    { key: "paymentTime", label: "وقت الدفع", style: "text-gray text-sm" },
    { key: "paymentMethod", label: "طريقة الدفع", style: "text-purple" },
  ];

  const receipts = [
    {
      invoiceId: "INV-1001",
      totalPrice: 850,
      discount: 50,
      items: "كورس المعادلات",
      paymentTime: "2025-01-15 14:32",
      paymentMethod: "Visa",
    },
    {
      invoiceId: "INV-1002",
      totalPrice: 420,
      discount: 0,
      items: "كورس المعادلات",
      paymentTime: "2025-01-15 14:32",
      paymentMethod: null,
    },
    {
      invoiceId: "INV-1003",
      totalPrice: 1200,
      discount: 100,
      items: "كورس المعادلات",
      paymentTime: "2025-02-02 19:50",
      paymentMethod: "Cash",
    },
    {
      invoiceId: "INV-1004",
      totalPrice: 150,
      discount: 10,

      items: "كورس المعادلات",
      paymentTime: "2025-01-15 14:32",
      paymentMethod: null,
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
        <Table columns={columns} data={receipts} />
      </section>
    </main>
  );
};

export default Receipt;
