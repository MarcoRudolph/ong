import Image from "next/image";
import HeaderImage from "../components/HeaderImage";
import PricingList from "@/components/PricingList";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col items-center justify-start w-full">
        <PricingList />
        {/* Add other components below as needed */}
      </main>
    </div>
  );
}
