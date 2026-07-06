import StatCard from "./StatCard";

export default function DashBoardStat({ recruiterStats = [] }) {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-10 mt-5">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {recruiterStats.map((item, index) => (
                    <div
                        key={index}
                        className="
              transform transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-[1.02]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
            "
                    >
                        <StatCard
                            title={item.title}
                            value={item.value}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}