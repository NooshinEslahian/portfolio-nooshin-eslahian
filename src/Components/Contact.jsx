import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z5ij2p9",
        "template_8tt2uy9",
        form.current,
        "-Xyn_HZTHkE0HSQxX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="mt-[30px] p-4">
      <hr className="w-[100%] mb-[40px]" />
      <div className="grid lg:gap-14 lg:grid-cols-2 gap-8 border-5 p-6 ">
        <div className="bg-slate-100 container h-[290px] flex flex-row  flex-wrap overflow-hidden justify-center p-5 shadow-lg dark:shadow-gray-400 rounded-[10px] duration-300 ease-in-out hover:scale-110  dark:text-blue-950  ">
          <h2 className="text-[20px] font-semibold text-blue-950 relative left-[-60px] ">
            contact Us :
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form-control-card flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="FullName..."
              className="w-2/3 mx-[20px] border-2 rounded-md hover:border-red-400 duration-300"
              name="user_name"
              required
            />

            <input
              type="email"
              placeholder="Email..."
              className="w-2/3 mx-[20px] border-2 rounded-md hover:border-red-400 duration-300"
              name="user_email"
              required
            />

            <input
              type="text"
              placeholder="Subject..."
              className="w-2/3 mx-[20px] border-2 rounded-md hover:border-red-400 duration-300"
              name="subject"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows=""
              className="w-2/3 mx-[20px] border-2 rounded-md hover:border-red-400 duration-300"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded w-[120px] h-[40px] mx-[20px] text-[12px]"
            >
              Send Message
            </button>
          </form>
        </div>

        <div  className="bg-slate-100 container h-[290px] flex flex-row  flex-wrap overflow-hidden justify-start p-5 shadow-lg dark:shadow-gray-400 rounded-[10px] duration-300 ease-in-out hover:scale-110  dark:text-blue-950  ">
          <div className="form-control-card flex flex-col gap-4 bg-white mb-[15px] rounded-[10px]">
            <p className="p-5 text-blue-950 font-semibold">My Email-address : nooshin.eslahianappleid@gmail.com</p>
          </div>
          <div className=" form-control-card flex flex-col gap-4 bg-white mb-[15px] rounded-[10px]">
            <p className="p-5 text-blue-950 font-semibold">My Phone-Number : 0937-5091055</p>
          </div>
          <div className=" form-control-card flex flex-col gap-4 bg-white mb-[15px] rounded-[10px]">
            <p className="p-5 text-blue-950 font-semibold">My address : Iran-Tehran-Darabad</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
