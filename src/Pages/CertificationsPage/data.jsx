export const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud",
    image: "/certificates/AWS Certified Solutions Architect - Associate certificate.webp",
    description:
      "Validates expertise in designing distributed systems and scalable, highly available, and fault-tolerant applications on AWS.",
  },
  {
    id: 2,
    title: "AWS Basics",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud",
    image: "/certificates/aws-basics.webp",
    description:
      "Covers foundational AWS concepts including core services, cloud architecture, and the AWS global infrastructure.",
  },
  {
    id: 3,
    title: "Docker for Beginners",
    issuer: "Docker / Online Platform",
    category: "DevOps",
    image: "/certificates/Docker for Beginners.webp",
    description:
      "Introduction to containerization with Docker — building, running, and managing containers and images.",
  },
  {
    id: 4,
    title: "Kubernetes Crash Course",
    issuer: "Online Platform",
    category: "DevOps",
    image: "/certificates/kubernates crash course certificate.webp",
    description:
      "Hands-on overview of Kubernetes for container orchestration, covering pods, deployments, services, and cluster management.",
  },
];

export const categoryColors = {
  Cloud: {
    badge: "from-orange-500 to-amber-600",
    glow: "shadow-orange-500/20",
    border: "hover:border-orange-500/30",
    dot: "bg-orange-500",
  },
  DevOps: {
    badge: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
    border: "hover:border-cyan-500/30",
    dot: "bg-cyan-500",
  },
};

