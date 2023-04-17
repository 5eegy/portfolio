const Projects = () => {
  return (
    <div className="">
      <p className="mt-5 mb-2 text-sm text-yellow-400">{"<PROJECTS/>"}</p>

      <ProjComp
        name="musica"
        stacks="ReactJs, Tailwind, Firebase"
        info="Musica is a music streaming app created for users to upload and stream  their favourite songs."
        live="https://musicang.vercel.app"
        repo="https://github.com/segowo/musica"
      />

      <ProjComp
        name="venta"
        stacks="ReactJs, Tailwind, FramerMotion, Redux, Firebase, Paystac Integration"
        info="Venta is an e-commerce website where users are able to search for their favorite product, filter their search, add to cart and make payment with the Paystack platform"
        live="https://ventashop.netlify.app"
        repo="https://github.com/segowo/ventashop"
      />

      <ProjComp
        name="vanx"
        stacks="React, SASS & Typescript"
        info="Vanx is an AI assisted project where users get the latest news on a particular topic based on their Voice input, The AI can also read the news article to the users if the user likes."
        live="https://vanxnews.netlify.app"
        repo="https://github.com/segowo/vanxnews"
      />

      <ProjComp
        name="Robocht"
        stacks="HTML, CSS, Typescript, NodeJS & ExpressJS"
        info="Robocht is an AI platform that uses the OpenAI's API and it works exactly just like the ChatGPT"
        live="https://robocht.vercel.app"
        repo="https://github.com/segowo/robocht"
      />
    </div>
  );
};

export default Projects;

function ProjComp({
  name,
  info,
  stacks,
  live,
  repo,
}: {
  name: string;
  info: string;
  stacks: string;
  live: string;
  repo: string;
}) {
  return (
    <div className="my-5 text-xs">
      <a href={live} target="_blank" className="text-red-500 text-sm block mt-2 underline">
        {"<" + name + ">"}
      </a>
      <p className="text-purple-400">{info}</p>
      <p className="text-xs text-green-400 mt-4 mb-1">{"<stacks/>"}</p>
      <p className="text-purple-400">{stacks}</p>

      <a href={live} target="_blank" className="text-blue-400 block mt-2 underline">
        {"<livelink/>"}
      </a>

      <a href={repo} target="_blank" className="text-blue-400 block mt-2 underline">
        {"<repo/>"}
      </a>
    </div>
  );
}
