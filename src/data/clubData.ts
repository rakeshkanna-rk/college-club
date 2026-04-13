export interface Domain {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Lead {
  id: string;
  name: string;
  role: string;
  image: string;
  domain: string;
  contact?: string;
  links?: {
    linkedin?: string;
    portfolio?: string;
    instagram?: string;
  };
}

export interface LeadArchive {
  year: string;
  leads: Lead[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  driveLink: string;
  image?: string;
  tag?: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}

export const domains: Domain[] = [
  {
    id: "photography",
    name: "Photography",
    description: "Capturing club moments and visual stories with precision and creativity.",
    icon: "Camera",
  },
  {
    id: "videography",
    name: "Videography",
    description: "Filming events and motion content to bring stories to life.",
    icon: "Video",
  },
  {
    id: "video-editing",
    name: "Video Editing",
    description: "Cutting, refining, and producing polished videos for a cinematic experience.",
    icon: "Film",
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    description: "Creating posters, branding, and visual identity that stands out.",
    icon: "Palette",
  },
  {
    id: "web-dev",
    name: "Web Development",
    description: "Building digital experiences and club sites with modern technologies.",
    icon: "Code",
  },
  {
    id: "documentation",
    name: "Documentation",
    description: "Reports, records, and structured content management for all club activities.",
    icon: "FileText",
  },
];

export const leads: Lead[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Club President",
    domain: "Overall Management",
    image: "https://picsum.photos/seed/lead1/400/400",
    links: {
      linkedin: "#",
      portfolio: "#",
    }
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Technical Lead",
    domain: "Web Development",
    image: "https://picsum.photos/seed/lead2/400/400",
    links: {
      linkedin: "#",
    }
  },
  {
    id: "3",
    name: "Jordan Smith",
    role: "Creative Head",
    domain: "Graphic Design",
    image: "https://picsum.photos/seed/lead3/400/400",
    links: {
      instagram: "#",
    }
  },
  {
    id: "4",
    name: "Elena Gilbert",
    role: "Media Lead",
    domain: "Photography",
    image: "https://picsum.photos/seed/lead4/400/400",
  },
];

export const leadArchive: LeadArchive[] = [
  {
    year: "2025–26",
    leads: leads,
  },
  {
    year: "2024–25",
    leads: [
      {
        id: "a1",
        name: "Marcus Thorne",
        role: "President",
        domain: "Management",
        image: "https://picsum.photos/seed/past1/400/400",
      },
      {
        id: "a2",
        name: "Lila Vance",
        role: "Vice President",
        domain: "Operations",
        image: "https://picsum.photos/seed/past2/400/400",
      }
    ]
  },
  {
    year: "2023–24",
    leads: [
      {
        id: "b1",
        name: "David Miller",
        role: "President",
        domain: "Management",
        image: "https://picsum.photos/seed/past3/400/400",
      }
    ]
  }
];

export const events: Event[] = [
  {
    id: "1",
    title: "Tech-X 2024",
    description: "The biggest annual technical symposium featuring workshops, hackathons, and guest lectures.",
    date: "March 15, 2024",
    driveLink: "#",
    image: "https://picsum.photos/seed/event1/800/450",
    tag: "Symposium",
  },
  {
    id: "2",
    title: "Code-A-Thon",
    description: "A 24-hour intense coding competition to solve real-world problems using technology.",
    date: "January 20, 2024",
    driveLink: "#",
    image: "https://picsum.photos/seed/event2/800/450",
    tag: "Hackathon",
  },
  {
    id: "3",
    title: "Design Workshop",
    description: "A hands-on session on UI/UX principles and modern graphic design tools.",
    date: "December 10, 2023",
    driveLink: "#",
    image: "https://picsum.photos/seed/event3/800/450",
    tag: "Workshop",
  },
];

export const videos: Video[] = [
  {
    id: "1",
    title: "Tech-X Highlights",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://picsum.photos/seed/vid1/360/640",
  },
  {
    id: "2",
    title: "Club Orientation 2024",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://picsum.photos/seed/vid2/360/640",
  },
  {
    id: "3",
    title: "Workshop Teaser",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://picsum.photos/seed/vid3/360/640",
  },
  {
    id: "4",
    title: "Member Showcase",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://picsum.photos/seed/vid4/360/640",
  },
  {
    id: "5",
    title: "Behind the Scenes",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://picsum.photos/seed/vid5/360/640",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "1", url: "https://picsum.photos/seed/gal1/800/600", caption: "Team Meeting" },
  { id: "2", url: "https://picsum.photos/seed/gal2/600/800", caption: "Event Setup" },
  { id: "3", url: "https://picsum.photos/seed/gal3/800/800", caption: "Workshop Session" },
  { id: "4", url: "https://picsum.photos/seed/gal4/800/600", caption: "Hackathon Night" },
  { id: "5", url: "https://picsum.photos/seed/gal5/600/600", caption: "Award Ceremony" },
  { id: "6", url: "https://picsum.photos/seed/gal6/800/600", caption: "Group Photo" },
];
