import GetAquoteHero from "@/components/get-a-quote/GetAquoteHero";
import QuoteSection from "@/components/get-a-quote/QuoteSection";


export default function AboutUs() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <GetAquoteHero />
            <QuoteSection />
        </div>
    );
}
