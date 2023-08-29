function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 dark:text-white md:mb-3 font-bolder">
        Gabriel
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
      <p className="text-md max-w-xl mb-6 font-bold">
        CS student with a focus on full-stack software development. I have
        gained expertise in both{" "}
        <span className="text-orange-500">front-end</span> and{" "}
        <span className="text-orange-500">back-end</span> technologies and their
        frameworks.I have also honed my skills in database management using
        relational and document databases. Throughout my academic journey, I
        have completed a few full-stack projects, showcasing my ability to
        create dynamic applications. I have also ventured into the exciting
        realm of <span className="text-orange-500">mobile</span> development
        using React Native, where I am still rapidly acquiring new skills.
        <br /> As I continue to expand my knowledge and gain hands-on
        experience, my goal is to become a versatile software engineer
        proficient in both web and mobile development. I am eager to collaborate
        on innovative projects and contribute to the ever-evolving world of
        software development
      </p>
    </div>
  );
}

export default Intro;
