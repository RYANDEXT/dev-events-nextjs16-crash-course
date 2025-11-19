// Centralized app constants
// Events data is designed to be imported directly into components like EventCard
// Images reference files inside public/images so they can be used with next/image as "/images/<filename>"

export type EventItem = {
  title: string;
  image: string; // path relative to the public directory, e.g., "/images/event1.png"
  slug: string;
  location: string;
  date: string; // human-friendly date for display
  time: string; // human-friendly time for display
};

// A curated set of real or popular developer events. Dates are set to upcoming editions
// relative to 2025-11-19 so they appear realistic in demos.
export const events: EventItem[] = [
  {
    title: "AWS re:Invent 2025",
    image: "/images/event1.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV, USA",
    date: "Dec 1–5, 2025",
    time: "All day",
  },
  {
    title: "KubeCon + CloudNativeCon Europe 2026",
    image: "/images/event2.png",
    slug: "kubecon-eu-2026",
    location: "Milan, Italy",
    date: "Mar 31–Apr 3, 2026",
    time: "All day",
  },
  {
    title: "Google Cloud Next 2026",
    image: "/images/event3.png",
    slug: "google-cloud-next-2026",
    location: "San Francisco, CA, USA",
    date: "Apr 7–9, 2026",
    time: "All day",
  },
  {
    title: "JSNation 2026",
    image: "/images/event4.png",
    slug: "jsnation-2026",
    location: "Amsterdam, Netherlands",
    date: "Jun 11–12, 2026",
    time: "09:00–17:30",
  },
  {
    title: "React Summit 2026",
    image: "/images/event5.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands + Online",
    date: "Jun 18–19, 2026",
    time: "09:00–18:00",
  },
  {
    title: "Open Source Summit North America 2026",
    image: "/images/event6.png",
    slug: "oss-summit-na-2026",
    location: "Vancouver, Canada",
    date: "Jul 13–15, 2026",
    time: "All day",
  },
  {
    title: "ETHGlobal Hackathon: NYC 2026",
    image: "/images/event-full.png",
    slug: "ethglobal-nyc-2026",
    location: "New York, NY, USA",
    date: "Sep 25–27, 2026",
    time: "48-hour hackathon",
  },
  {
    title: "Next.js Conf 2026",
    image: "/images/event3.png",
    slug: "nextjs-conf-2026",
    location: "Los Angeles, CA, USA + Online",
    date: "Oct 6, 2026",
    time: "10:00–17:00 PDT",
  },
];
