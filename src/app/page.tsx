import Navbar from "~/components/navbar";
import PremiumPricingCard from "~/components/pricing/premiumPricingCard";
import StandardPricingCard from "~/components/pricing/standardPricingCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-4">
      <Navbar />

      <div className="mx-auto flex gap-10">
        <StandardPricingCard />
        <PremiumPricingCard />
      </div>
    </div>
  );
}
