import { useRef, useState } from "react";
import { toast } from "sonner";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";
import { TextMaskReveal } from "./TextMaskReveal";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending message...");

    // Simulate email sending
    setTimeout(() => {
      toast.success("Message sent successfully!", { id: toastId });
      setFormData({ name: "", email: "", message: "" });
      form.current.reset();
    }, 1500);

    /* Uncomment for actual emailjs integration
    emailjs
      .sendForm(
        "service_hbp47fl",
        "template_jb2jogd",
        form.current,
        "PR07K8CX4TXAFdHfO"
      )
      .then(
        (result) => {
          toast.success("Email Successfully Sent!", { id: toastId });
          setFormData({ name: "", email: "", message: "" });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send email.", { id: toastId });
        }
      );
    */
  };

  return (
    <div className="min-h-screen  py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <TextMaskReveal
            text="Get In Touch"
            splitByWord={true}
            fontSize="text-5xl  md:text-6xl lg:text-7xl 2xl:text-8xl"
            className="text-primary uppercase font-bold leading-tight text-pretty mb-6 md:mb-8"
            delayPerItem={0.08}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Info Section */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ready to discuss your project or have a question? I'm here to
                help! Reach out via the contact form or email. Let's turn your
                ideas into reality.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="group flex items-start gap-4 p-5 rounded-xl bg-zinc-900/50 border cursor-pointer border-zinc-800 hover:border-secondary transition-all duration-300">
                <div className="p-3 rounded-lg bg-secondary group-hover:bg-secondary/70 duration-500 cursor-pointer transition-colors">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-primary font-foregen font-semibold mb-1">
                    Location
                  </h3>
                  <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>

              <a
                href="https://wa.me/8801568260699"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group flex items-start gap-4 p-5 rounded-xl bg-zinc-900/50 border cursor-pointer border-zinc-800 hover:border-secondary transition-all duration-300">
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-secondary/70 duration-500 transition-colors">
                    <IconBrandWhatsapp className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h3 className="text-primary font-foregen font-semibold mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-400 text-sm">+8801568260699</p>
                  </div>
                </div>
              </a>

              <a
                href="mailto:asibhasanriyad@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group flex items-start gap-4 p-5 rounded-xl bg-zinc-900/50 border cursor-pointer border-zinc-800 hover:border-secondary transition-all duration-300">
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-secondary/70 duration-500 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h3 className="text-primary font-foregen font-semibold mb-1">
                      Email
                    </h3>
                    <p className="text-gray-400 text-sm">
                      asibhasanriyad@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-primary font-foregen font-semibold mb-4">
                Follow Me
              </h3>
              <div className="flex gap-3">
                {[
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/abdullahbinashraf77",
                  },

                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/eshak_ahmed/",
                  },
                  { icon: Linkedin, href: "linkedin.com/in/eshakmahmed" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-secondary hover:bg-secondary hover:text-black transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-white  transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-foregen text-primary mb-2">
              Send a Message
            </h3>
            <p className="text-gray-400 mb-8">What do you want to ask?</p>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3  border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3  border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3  border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-secondary/90 text-white cursor-pointer hover:bg-secondary/70  font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative font-foregen font-normal z-10 flex items-center justify-center gap-2">
                  Get In Touch
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
