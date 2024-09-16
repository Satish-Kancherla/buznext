"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import VantaEffect from "./VantaEffect";
import emailjs from "@emailjs/browser";
// import Swal from 'sweetalert2';
import { CloudIcon, CodeIcon, DatabaseIcon, MenuIcon, SunIcon, MoonIcon, Globe, Megaphone, Handshake, UserCog } from "lucide-react";

export function Component() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [activeLink, setActiveLink] = useState("home");
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.scrollY + window.innerHeight / 2;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute("id");
                }
            });

            setActiveLink(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = "service_xx1ntvh";
        const templateId = "template_8rvpufj";
        const publicKey = "bHgOHvPxGz-xtb6Lm";

        const templateParams = {
            from_name: formData.name, // Use the entered name for from_name
            to_name: "Stratize",
            message: formData.message,
            email: formData.email, // Include email if needed
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
        // Swal.fire({
        //     title: "Sent",
        //     text: "Your request has been sent",
        //     icon: "success",
        // });

        setTimeout(function () {
            window.location.reload();
        }, 4000);
    };

    return (
        <div className={`flex flex-col min-h-screen ${isDarkMode ? "bg-primary text-secondary" : "bg-white text-black"}`}>
            <header className="fixed top-0 left-0 right-0 bg-primary text-secondary py-2 px-6 md:py-4 md:px-10 shadow-lg z-50">
                <div className="container mx-auto flex items-center justify-between">
                    <Link href="#home" className="flex items-center gap-2 cursor-none" prefetch={false}>
                        <img src="logo1.png" className="h-12" alt="Logo" />
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-lg font-semibold">
                        <Link
                            href="#home"
                            onClick={() => setActiveLink("home")}
                            className={`${activeLink === "home" ? "font-bold text-accent" : ""} hover:text-accent transition`}
                            prefetch={false}
                        >
                            Home
                        </Link>
                        <Link
                            href="#services"
                            onClick={() => setActiveLink("services")}
                            className={`${activeLink === "services" ? "font-bold text-accent" : ""} hover:text-accent transition`}
                            prefetch={false}
                        >
                            Services
                        </Link>
                        <Link
                            href="#about"
                            onClick={() => setActiveLink("about")}
                            className={`${activeLink === "about" ? "font-bold text-accent" : ""} hover:text-accent transition`}
                            prefetch={false}
                        >
                            About
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setActiveLink("contact")}
                            className={`${activeLink === "contact" ? "font-bold text-accent" : ""} hover:text-accent transition`}
                            prefetch={false}
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle navigation menu">
                            <MenuIcon className="h-6 w-6" />
                        </Button>
                        {/* <Button
              variant="outline"
              size="icon"
              aria-label="Toggle dark mode"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </Button> */}
                    </div>
                </div>
            </header>

            <main className="flex-1">
                <section id="home" className="relative min-h-[200px] h-auto z-0">
                    <VantaEffect />
                </section>

                <section id="services" className={`py-20 md:py-32 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="space-y-8 text-center">
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>

                            <p className="md:text-lg">Stratize offers a wide range of services to help businesses succeed in the digital age.</p>
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="rounded-lg bg-card p-6 border-red-500">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                                        <CodeIcon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold">Web Development</h3>
                                    <p className="text-muted">
                                        Custom software solutions crafted by our experienced developers to meet your unique business needs.
                                    </p>
                                </div>
                                <div className="rounded-lg bg-card p-6 drop-shadow-xl">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                                        <UserCog className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold">Profile Optimization</h3>
                                    <p className="text-muted">Harness the power of your data with our advanced analytics and business intelligence services.</p>
                                </div>
                                <div className="rounded-lg bg-card p-6 shadow-sm">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                                        <Handshake className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold">Business Advisory</h3>
                                    <p className="text-muted">Navigate cloud migration and optimization with guidance from our expert cloud consultants.</p>
                                </div>
                                <div className="rounded-lg bg-card p-6 shadow-sm">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                                        <Megaphone className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold">Marketing</h3>
                                    <p className="text-muted">Elevate your brand with data-driven marketing strategies and solutions.</p>
                                </div>
                                <div className="rounded-lg bg-card p-6 shadow-sm">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                                        <Globe className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold">SEO</h3>
                                    <p className="text-muted">Enhance your online visibility and drive growth with our tailored SEO strategies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className={`py-20 md:py-32 ${isDarkMode ? "bg-dark-muted text-white" : "bg-light-muted text-black"}`}>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Us</h2>
                                <p className="md:text-lg">
                                    At Stratize., we're not just service providers; we're your partners in success. Our focus is on delivering high-quality,
                                    personalized solutions that exceed expectations. Whether you're a startup seeking to establish a strong market presence or a
                                    professional aiming to elevate your career profile, we've got you covered.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="p5.jpg"
                                    width="500"
                                    height="400"
                                    alt="About Image"
                                    className="mx-auto rounded-lg object-cover"
                                    style={{ aspectRatio: "500/400", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className={`py-20 md:py-32 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Get in Touch</h2>
                                <p className="text-lg md:text-xl lg:text-2xl mt-4">Have a question or want to learn more? Contact us today.</p>
                            </div>
                            <form onSubmit={handleSubmit} className="bg-card shadow-2xl p-6 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black font-semibold">
                                    <Input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} className="w-full outline-none border-none" />
                                    <Input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="w-full border-none" />
                                </div>
                                <Textarea
                                    placeholder="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full mt-4 text-black font-semibold border-none"
                                    rows={5}
                                />
                                <Button type="submit" className="mt-4 w-full focus:bg-slate-900">
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-primary text-secondary py-4 text-center">
                <p>&copy; 2024 Stratize. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
