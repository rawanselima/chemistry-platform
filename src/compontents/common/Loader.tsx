import Spinner from "./Spinner";

export default function Loader() {
  return (
    <main className="min-h-screen bg-transparent w-full flex justify-center items-center">
      <Spinner color="purple" />
    </main>
  );
}
