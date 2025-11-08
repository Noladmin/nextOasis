import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Next Oasis | Get Your Free Quote | Southampton & Accra",
  description: "Get in touch with Next Oasis for web development, mobile app development, UI/UX design, and tech support services. Phone: +44 7939 542658. Located at Director Generals House, 15 Rockstone Place, SO15 2EP Southampton, UK and Accra, Ghana.",
  keywords: "contact Next Oasis, web development quote, mobile app consultation, digital agency contact, Next Oasis email, Southampton web developers, Accra app developers, IT consultation UK, digital agency Southampton, phone +44 7939 542658",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

