import portfolio from "./data/portfolio";
import PortfolioItem from "./PortfolioItem";
// import Title from "./Title";

function Portfolio() {
  return (
    <div className="flex flex-column md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <Title>Projects</Title> */}
        {portfolio.map((project) => (
          <PortfolioItem
            key={project.id}
            imgUrl={project.imgUrl}
            title={project.title}
            type={project.type}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
