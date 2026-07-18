import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <div className="container mx-auto space-y-10 px-4 pb-20">
                <div className="flex flex-col gap-10 lg:flex-row">
                    <div className="w-full lg:w-2/3">
                        <h2 className="mb-4 text-2xl font-bold">Latest Questions</h2>
                        <LatestQuestions />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h2 className="mb-4 text-2xl font-bold">Top Contributors</h2>
                        <TopContributers />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
