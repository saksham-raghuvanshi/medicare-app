const Home = () => {
  return (
    <>
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help patients live a healthy, longer life
                  </h1>
                  <p className="text_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer non accumsan sem. Aenean imperdiet erat eu nisi
                    ultricies facilisis. Etiam ut velit dolor. Quisque lobortis
                    nisl a vestibulum aliquet.
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
