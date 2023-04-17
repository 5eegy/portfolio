
const Tools = () => {

  const stackStyle = "text-purple-400 text-xs my-3"
  return (
    <div>
      <p className="text-sm text-yellow-400 mt-5 mb-3">{"<TOOLS/>"}</p>
      <ul className="list-disc text-purple-400 px-6">
        <li>
          <p className={stackStyle}>HTML</p>
        </li>

        <li>
          <p className={stackStyle}>CSS/SASS/Tailwind</p>
        </li>

        <li>
          <p className={stackStyle}>Javascript</p>
        </li>

        <li>
          <p className={stackStyle}>Typescript</p>
        </li>

        <li>
          <p className={stackStyle}>React</p>
        </li>

        <li>
          <p className={stackStyle}>NodeJS/ExpressJS</p>
        </li>

        <li>
          <p className={stackStyle}>MongoDB</p>
        </li>

      </ul>
    </div>
  );
};

export default Tools;
