"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import VantaEffect from "./VantaEffect";

export function Component() {
  const [activeLink, setActiveLink] = useState("service");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 right-0 bg-black text-white py-4 px-6 md:py-6 md:px-10 shadow-lg z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BriefcaseIcon className="h-6 w-6" />
            <span className="text-lg font-bold">MarketMinds</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              onClick={() => handleSetActive("services")}
              className={`${
                activeLink === "services" ? "font-semibold text-yellow-400" : ""
              } hover:text-yellow-300 transition`}
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#team"
              onClick={() => handleSetActive("team")}
              className={`${
                activeLink === "team" ? "font-semibold text-yellow-400" : ""
              } hover:text-yellow-300 transition`}
              prefetch={false}
            >
              Team
            </Link>
            <Link
              href="#testimonials"
              onClick={() => handleSetActive("testimonials")}
              className={`${
                activeLink === "testimonials"
                  ? "font-semibold text-yellow-400"
                  : ""
              } hover:text-yellow-300 transition`}
              prefetch={false}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              onClick={() => handleSetActive("contact")}
              className={`${
                activeLink === "contact" ? "font-semibold text-yellow-400" : ""
              } hover:text-yellow-300 transition`}
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex">
            Get a Quote
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation menu"
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1 pt-[70px]">
        {" "}
        {/* Adjust top padding based on navbar height */}
        <section className="relative min-h-[200px] h-auto z-0">
          <VantaEffect />
        </section>
        {/* <section className="bg-gradient-to-r from-blue-500 to-green-500 h-screen content-center text-white py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
              Unlock Your Financial Potential
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mt-4">
              Trusted financial consulting for businesses of all sizes.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-600">
                Get Started
              </Button>
            </div>
          </div>
        </section> */}
        <section
          id="services"
          className="bg-gray-200 py-12 md:py-20 lg:py-28 relative z-10 clear-both"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Our Services
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                Tailored solutions to meet your financial needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <ServiceCard
                icon={<InfoIcon className="h-8 w-8 text-blue-600" />}
                title="Financial Analysis"
                description="Comprehensive financial analysis to identify opportunities and mitigate risks."
              />
              <ServiceCard
                icon={<BriefcaseIcon className="h-8 w-8 text-blue-600" />}
                title="Strategic Planning"
                description="Develop tailored financial strategies to achieve your business goals."
              />
              <ServiceCard
                icon={<WalletIcon className="h-8 w-8 text-blue-600" />}
                title="Investment Management"
                description="Optimize your investment portfolio for long-term growth and stability."
              />
            </div>
          </div>
        </section>
        <section id="team" className="bg-gray-100 py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Meet Our Team
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                Experienced financial experts dedicated to your success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              <TeamMember
                name="John Doe"
                title="Financial Advisor"
                description="John has over 15 years of experience in the financial industry, specializing in investment strategies and portfolio management."
                fallback="JD"
              />
              <TeamMember
                name="Sarah Miller"
                title="Financial Analyst"
                description="Sarah has a deep understanding of financial markets and provides insightful analysis to help clients make informed decisions."
                fallback="SM"
              />
              <TeamMember
                name="Michael Johnson"
                title="Tax Specialist"
                description="Michael's expertise in tax planning and compliance helps clients maximize their financial efficiency."
                fallback="MJ"
              />
              <TeamMember
                name="Lisa Wang"
                title="Financial Planner"
                description="Lisa's comprehensive financial planning expertise helps clients achieve their long-term financial goals."
                fallback="LW"
              />
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="bg-gray-200 py-12 md:py-20 lg:py-28"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                What Our Clients Say
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                Hear from the people who trust us with their finances.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <Testimonial
                quote="MarketMinds has been an invaluable partner in helping us navigate the complex financial landscape. Their expertise and personalized approach have been instrumental in our company's growth."
                name="John Bauer"
                title="CEO, Acme Corp"
                fallback="JB"
              />
              <Testimonial
                quote="I've been working with MarketMinds for years, and their attention to detail and commitment to my financial success have been unparalleled. I highly recommend their services to any business looking to optimize their finances."
                name="Emily Martinez"
                title="CFO, Globex Inc"
                fallback="EM"
              />
              <Testimonial
                quote="MarketMinds has been a game-changer for our business. Their strategic financial guidance has helped us make informed decisions and achieve our goals. I couldn't recommend them highly enough."
                name="Tom Lee"
                title="Founder, Startup X"
                fallback="TL"
              />
            </div>
          </div>
        </section>
      </main>
      <footer
        id="contact"
        className="bg-primary h-screen content-center  py-12 md:py-20 lg:py-28"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Get in Touch
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mt-4">
                Have a question or want to learn more? Contact us today.
              </p>
            </div>
            <form className="bg-white shadow-2xl p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
              </div>
              <Textarea
                placeholder="Message"
                className="w-full mt-4"
                rows={5}
              />
              <Button type="submit" className="mt-4">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M16 10h4v4h-4z" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="8" />
    </svg>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-card rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-muted-foreground text-center mt-2">{description}</p>
    </div>
  );
}

function TeamMember({ name, title, description, fallback }) {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="h-20 w-20 mb-4">
        <AvatarImage src="https://via.placeholder.com/150" alt={name} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-semibold text-center">{name}</h3>
      <p className="text-muted-foreground text-center">{title}</p>
      <p className="text-muted-foreground text-center mt-2">{description}</p>
    </div>
  );
}

function Testimonial({ quote, name, title, fallback }) {
  return (
    <div className="p-6 bg-card rounded-lg shadow-md">
      <blockquote className="italic text-center">{quote}</blockquote>
      <div className="flex items-center justify-center mt-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://via.placeholder.com/100" alt={name} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div className="ml-4 text-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
}
