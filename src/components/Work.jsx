import WorkItem from "./WorkItem.jsx";

const data = [
    {
        year: 2020,
        title: '标题',
        duration: '时长',
        details: '详情'
    },
    {
        year: 2020,
        title: '标题',
        duration: '时长',
        details: '详情'
    },
    {
        year: 2020,
        title: '标题',
        duration: '时长',
        details: '详情'
    },
    {
        year: 2020,
        title: '标题',
        duration: '时长',
        details: '详情'
    }
]
const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {
                data.map((item, idx) => (
                    <WorkItem
                        key={idx}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}/>
                ))
            }
        </div>
    );
};

export default Work;
