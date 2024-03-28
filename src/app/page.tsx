import NostrProvider from "@/components/NostrProvider";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col w-96 px-8 py-10 shadow-lg rounded-lg bg-white">
        <NostrProvider />
      </div>
    </main>
  );
}
