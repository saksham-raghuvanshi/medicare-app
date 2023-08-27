import useTitle from "../Hooks/useTitle";

const Contact = () => {
  useTitle("Contact");
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact-us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Got a technical issue? want to send feedback about a beta feature? Let
          us Know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
            />
            <div className="mt-5">
              <label htmlFor="subject" className="form__label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Let us known how we can help you"
                className="form__input mt-1"
              />
            </div>
            <div className="sm:col-span-2 mt-5">
              <label htmlFor="message" className="form__label">
                Your Message
              </label>
              <textarea
                type="text"
                id="message"
                rows="6"
                placeholder="Leave a commeny"
                className="form__input mt-1"
              />
            </div>
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
