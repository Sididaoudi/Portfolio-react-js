function Hero() {
  return (
    <section className="bg-slate-400 mt-10">
      {/*Div container */}
      <div className="flex justify-center p-5 m-5">
        {/*Div Title + intro */}
        <div>
          <h1 className="font-bold text-lg text-center">Sidi Daoudi</h1>
          <div className="flex flex-col gap-3 mt-3">
            <p>
              Développeur web <span className="font-bold">React Js.</span>
            </p>
            <p>
              Je suis passionné par le web et j'ai pu développer des compétences
              grâce à mes stages et formations.
            </p>
            <p>
              Je me suis spécialisé en ReactJS car j'aime le front-end.
            </p>
            {/* <button>Vous trouverez mes projets personnels</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
