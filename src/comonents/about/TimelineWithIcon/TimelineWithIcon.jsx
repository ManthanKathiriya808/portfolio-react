const timelineData = [
  {
    title: "B.Tech, Information Technology",
    subtitle: "Gujarat Technological University - Gyanmanjari Insititute of Technology, Bhavnagar",
  },
  {
    title: "Web Developer",
    subtitle: "Specialized in full-stack development with expertise in React.js, Node.js, Express, MongoDB and modern web technologies.",
  },
  {
    title: "Software Engineer",
    subtitle: "Implemented responsive designs, optimized application performance.",
  },
];

export default function VerticalTimeline() {
  return (
    <div className="  text-white py-10 ">
      <div className="relative ml-6 pl-6 border-l-[3px] border-[#C27AFF]">
        {timelineData.map((item, index) => (
          <div key={index} className="relative mb-10">
            {/* Dot on the Line */}
            <span className="absolute -left-[1.05rem] top-1 w-4 h-4 rounded-full bg-[#C27AFF] border-2 border-[#0A0A0A]"></span>

            {/* Content */}
            <h3 className="text-lg font-bold text-[#C27AFF]">{item.title}</h3>
            <p className="text-[16px] text-gray-200 mt-1 leading-relaxed">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
