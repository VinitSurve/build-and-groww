"use client";

  import React, { useEffect, useState, useRef } from "react";
  import gsap from "gsap";

  /* ================= DATA (UNCHANGED) ================= */

  const developers = [
    {
      name: "Vinit Surve",
      title: "Full Stack Developer",
      affiliation: "GDG OC Organizer • GDG Cloud Mumbai Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Vinit%20Surve.webp",
      github: "https://github.com/VinitSurve",
      linkedin: "https://www.linkedin.com/in/surve-vinit/",
      email: "survevinit56@gmail.com",
    },
    {
      name: "Abdullah Shaikh",
      title: "Developer & Product Designer",
      affiliation: "GDG Cloud Mumbai Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/abdullah.webp",
      github: "https://github.com/elite24shaikh",
      linkedin: "https://www.linkedin.com/in/abdullahs24",
      email: "hello.abdullabdev@gmail.com",
    },
    {
      name: "Yash Agrawal",
      title: "Developer & Data Scientist",
      affiliation: "GDG Cloud Mumbai Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/yash-agrawal.webp",
      github: "https://github.com/agrawal-yash",
      linkedin: "https://www.linkedin.com/in/yash-agrawal04",
      email: "agrawal.yash.g@gmail.com",
    },
    {
      name: "Durgesh Keshri",
      title: "GDG Cloud Mumbai Member",
      affiliation: "",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Durgesh%20Keshri.webp",
      github: "https://github.com/Durgeshkeshri",
      linkedin: "https://www.linkedin.com/in/durgesh-keshri-89712b201/",
      email: "durgeshkeshri7@gmail.com",
    },
    {
      name: "Nupur Bhoir",
      title: "UI UX & Graphics Designer",
      affiliation: "GDG Cloud Mumbai Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Nupur%20Bhoir.webp",
      github: "https://github.com/Nupurbhoir",
      linkedin: "https://www.linkedin.com/in/nupur-bhoir-ab1499329/",
      email: "nupurbhoir21@gmail.com",
    },
    {
      name: "Anuj chandak",
      title: "Design Member",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/anuj%20chandak.webp",
      email: "anujchandakji2803@gmail.com",
    },
    {
      name: "Rohan Sunil Borse",
      title: "Management",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/ROHAN%20BORSE.webp",
      github: "https://github.com/rohan730",
      linkedin:
        "https://www.linkedin.com/in/rohan-borse-b0232b223",
      email: "rohanborse7171@gmail.com",
    },
    {
      name: "Yash Bhausaheb Bade",
      title: "Management",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Yash%20Bade.webp",
      github: "https://github.com/yashbade-ctrl",
      linkedin:
        "https://www.linkedin.com/in/yash-bade-2b5916337",
      email: "yash.b.bade@gmail.com",
    },
    {
      name: "Grishma Thakare",
      title: "Full Stack Dev",
      affiliation: "GDG Cloud Mumbai Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Grishma%20Thakur.webp",
      github: "https://github.com/grishma-blip",
      linkedin:
        "https://www.linkedin.com/in/grishma-thakare-793732285/",
      email: "grishmathakare21@gmail.com",
    },
    {
      name: "Siddharth Reddy",
      title: "Full Stack Dev & Editor",
      affiliation: "GDG Cloud Mumbai Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Siddharth%20Reddy.webp",
      github: "https://github.com/SidReddy-24",
      linkedin: "https://www.linkedin.com/in/the-siddharth-reddy",
      email: "sidreddy.onwork@gmail.com",
    },
    {
      name: "Sumedh Patil",
      title: "Developer",
      affiliation: "GDG Cloud Mumbai Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Sumedh.webp",
      github: "https://github.com/Sumedh1102",
      linkedin: "linkedin.com/in/sumedh-patil-640512251",
      email: "psumedh31@gmail.com",
    },
    {
      name: "Varun Kakapuri",
      title: "Management",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/varun%20kakapuri.webp",
      github: "https://github.com/Viisek",
      linkedin: "https://www.linkedin.com/in/varunkakapuri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "varun.kakapuri@gmail.com",
    },
    {
      name: "Darshan Prakash Chavan",
      title: "Designer",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Darshan%20Chavan.webp",
      github: "https://github.com/DarshanChavan28",
      linkedin: "www.linkedin.com/in/darshan-chavan-0200528d",
      email: "darshanchavan0228@gmail.com",
    },
    {
      name: "Abhisar Choubey",
      title: "Developer",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Abhisar%20Choubey.webp",
      github: "https://github.com/forkzen",
      linkedin: "https://www.linkedin.com/in/abhisar-choubey",
      email: "abhisar.choubey@gmail.com",
    },
    {
      name: "Khushi Rahane ",
      title: "Data Scientist",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/sleepy%20koala.webp",
      github: "https://github.com/KhushiRahane",
      linkedin: "https://www.linkedin.com/in/khushi-rahane-26718b28a/",
      email: "khushirahane74@gmail.com",
    },
    {
      name: "Darp Lalani",
      title: "Full Stack Dev",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Lalani%20Darp.webp",
      github: "https://github.com/darplalani08",
      linkedin: "https://www.linkedin.com/in/darplalani0",
      email: "lalanidarp08@gmail.com",
    },
    {
      name: "Soha Kulkarni ",
      title: "UI/UX Designer",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/SOHA.webp",
      github: "https://github.com/sohakulkarni20",
      linkedin: "https://www.linkedin.com/in/soha-kulkarni-66782a255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "24010066@pvgcoet.ac.in",
    },
    {
      name: "Priyal Sathe",
      title: "Backend Developer",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/img%20-%20mei.webp",
      github: "https://github.com/PriyalSathe",
      linkedin: "https://www.linkedin.com/in/priyal-sathe",
      email: "canzeesathe11@gmail.com",
    },
    {
      name: "Omkar Davare",
      title: "Frontend Developer",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Omkar%20Davare.webp",
      github: "https://github.com/omkarr001-ai",
      linkedin: "https://www.linkedin.com/in/omkar-davare-488b9330a/",
      email: "omkardavare69@gmail.com",
    },
    {
      name: "Vinayak Govindalwar",
      title: "Frontend Developer",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Vinayak%20Govindalwar.webp",
      linkedin: "https://www.linkedin.com/in/vinayak-govindalwar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "Vinayakgovindalwar@gmail.com",
    },
    {
      name: "Swarnim Shamgaonkar",
      title: "Frontend Developer",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Swarnim%20Shamgaonkar.webp",
      github: "https://github.com/Swarnim31",
      linkedin: "https://www.linkedin.com/in/swarnim-shamgaonkar-b725472b1/",
      email: "swarnimsham@gmail.com",
    },
    {
      name: "Arth Onkar Dhavale ",
      title: "Frontend Developer",
      affiliation: "GDG Cloud Pune Member",
      image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Arth%20Dhavale.webp",
      github: "https://github.com/ArthDhavale",
      linkedin: "https://www.linkedin.com/in/arth-dhavale-053136309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "arth.o.dhavale@gmail.com",
    },
  ];

  /* ================= COMPONENT ================= */

  export default function DevelopersSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    const [activeDevId, setActiveDevId] = useState<number | null>(null);

    /* ================= GSAP - ONE TIME ANIMATION ================= */

    useEffect(() => {
      if (hasAnimated.current) return;

      const cards = cardsRef.current?.querySelectorAll(".dev-photo");
      if (!cards) return;

      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.08,
        }
      );

      hasAnimated.current = true;
    }, []);

    /* ================= RENDER ================= */

    return (
      <section ref={sectionRef} className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-semibold text-white">Our Team</h2>
            <p className="text-gray-400 mt-2">
              Meet the team behind this initiative
            </p>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {developers.map((d, i) => (
              <div
                key={i}
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest("a")) return;
                  setActiveDevId(activeDevId === i ? null : i);
                }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl cursor-pointer"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="dev-photo w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className={`absolute left-0 right-0 bottom-0 p-3 z-20 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
                    activeDevId === i
                      ? "opacity-0"
                      : "opacity-100 group-hover:opacity-0"
                  }`}
                >
                  <div className="text-white font-semibold">{d.name}</div>
                </div>

                <div
                  className={`absolute left-0 right-0 bottom-0 p-4 z-30 transform transition-transform duration-400 bg-black/95 ${
                    activeDevId === i ? "translate-y-0" : "translate-y-full"
                  } group-hover:translate-y-0`}
                >
                  <div className="text-indigo-500 font-semibold">{d.title}</div>
                  <div className="text-gray-300 text-sm mt-1">
                    {d.affiliation}
                  </div>

                  <div className="mt-3 flex gap-2 flex-wrap">
                    {d.github && (
                      <a
                        href={d.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-gray-800 px-3 py-1 rounded-full text-white hover:bg-gray-700 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {d.linkedin && (
                      <a
                        href={d.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-blue-600 px-3 py-1 rounded-full text-white hover:bg-blue-500 transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                    <a
                      href={`mailto:${d.email}`}
                      className="text-xs bg-red-600 px-3 py-1 rounded-full text-white hover:bg-red-500 transition-colors"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }