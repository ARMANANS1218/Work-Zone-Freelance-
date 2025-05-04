import React from "react";
import Marquee from "react-fast-marquee";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
      {
        name: "Niloy Mazumdar",
        role: "Founder",
        feedback: "I am thrilled with the professionalism and the iOS app developed by the team. Their attention to detail and commitment to excellence is commendable.",
        stars: 4,
        avatar: "https://images.unsplash.com/photo-1502767089025-6572583495b9?auto=format&fit=crop&w=80&h=80&q=80"
      },
      {
        name: "Abdur Rohman",
        role: "CEO",
        feedback: "Working with Shohelon on our app project was an absolute pleasure. The team exceeded our expectations in every way.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80"
      },
      {
        name: "Sheikh Hasin",
        role: "PM",
        feedback: "I cannot speak highly enough of the professionalism and expertise demonstrated throughout our collaboration.",
        stars: 4,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"
      },
      {
        name: "Ibrahim Khalil",
        role: "COO",
        feedback: "Their commitment to quality and responsiveness to feedback was outstanding. The final product exceeded our expectations.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=80&h=80&q=80"
      },
      {
        name: "Aisha Rahman",
        role: "Product Manager",
        feedback: "Working with the team was seamless. They understood our vision quickly and delivered a product that exceeded our expectations.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&h=80&q=80"
      },
      {
        name: "Liam Patel",
        role: "CTO",
        feedback: "The development process was smooth and efficient. Communication was clear throughout, and the final result was polished and production-ready.",
        stars: 4,
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&h=80&q=80"
      },
      {
        name: "Sophia Zhang",
        role: "Marketing Director",
        feedback: "Their professionalism and attention to detail stood out. The app not only looks great but also performs flawlessly.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80"
      },
      {
        name: "Carlos Mendez",
        role: "Founder",
        feedback: "One of the best teams I’ve worked with. They took our idea and elevated it with their expertise.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&h=80&q=80"
      },
      {
        name: "Emily Thomas",
        role: "Operations Lead",
        feedback: "We saw a significant increase in user engagement after launch. The UI/UX design was outstanding.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&h=80&q=80"
      },
      {
        name: "Daniel Kim",
        role: "CEO",
        feedback: "These folks are top-notch. From planning to execution, they handled every phase with professionalism.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1502767089025-6572583495b9?auto=format&fit=crop&w=80&h=80&q=80"
      },
      {
        name: "Fatima Noor",
        role: "UX Designer",
        feedback: "Collaborating with them was inspiring. They’re great listeners, talented developers, and super reliable.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&h=80&q=80"
      }
    ];
    
function TestimonialCard({ name, role, feedback, stars, avatar }) {
  return (
    <div className="bg-white rounded-xl shadow-md border-b-4 border-green-500 p-6 h-80  text-2xl w-[400px] m-4 flex-shrink-0">
      <div className=" text-gray-600 mb-4 text-lg">
        <FaQuoteLeft className="inline mr-2 text-lg text-gray-400" />
        <strong>Very Solid!!</strong>
        <p className="mt-2">{feedback}</p>
      </div>
      <div className="flex items-center justify-between mt-4 text-xl">
        <div className="flex items-center space-x-2">
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-bold text-sm">{name}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
        <div className="text-yellow-500 flex">
          {Array.from({ length: stars }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <div className="bg-[#f9f6f2] py-12">
      <h2 className="text-center text-black text-[60px] font-bold mb-2">Testimonial</h2>
      <p className="text-center text-sm text-gray-600 mb-10">
        Received 4.8/5 Stars in Over 10,000+ Reviews.
      </p>

      {/* Top Marquee - Left to Right */}
      <Marquee speed={40} direction="left" gradient={false}>
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </Marquee>

      {/* Bottom Marquee - Right to Left */}
      <Marquee speed={40} direction="right" gradient={false} className="mt-6">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={`bottom-${idx}`} {...t} />
        ))}
      </Marquee>
    </div>
  );
}
