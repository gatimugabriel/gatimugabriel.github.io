
function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 dark:text-white md:mb-3 font-bold">
                Gabriel
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
            <p className="text-md max-w-xl mb-6 font-bold">
                Full-stack developer with expertise in <span className="text-orange-500">front-end</span> and <span className="text-orange-500">back-end</span> technologies. Proficient in database management and mobile development using React Native. Passionate about creating dynamic applications and eager to contribute to innovative projects.
            </p>
        </div>
    );
}

export default Intro;
