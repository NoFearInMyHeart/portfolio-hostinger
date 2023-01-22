import ProjectItem from "./ProjectItem.jsx";

const url = 'https://cdn.modesens.com/umedia/1708540s?w=800'
const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">
                Projects
            </h1>
            <p className="text-center py-8">
                虎扑01月22日讯 NBA常规赛，骑士114-102击败雄鹿。

                本场比赛，双方共计23次失误，其中雄鹿14次，骑士9次，雄鹿利用失误得分为12分，骑士利用失误得分为21分。

                雄鹿方面：霍勒迪6次，大洛、格雷森-阿伦各3次，波蒂斯、康诺顿各1次。

                骑士方面：莫布利4次，阿伦2次，加兰、勒韦尔、卢比奥各1次。

            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem url={url} title="Crypto App" />
                <ProjectItem url={url} title="Crypto App" />
                <ProjectItem url={url} title="Crypto App" />
                <ProjectItem url={url} title="Crypto App" />
            </div>
        </div>
    );
};

export default Projects;
