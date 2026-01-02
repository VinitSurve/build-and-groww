// This is a placeholder for the GDG Cloud Pune logo. Replace with the actual logo image if available.
import Image from "next/image";

export default function GDGPuneLogo({ className = "" }) {
  return (
    <Image src="/GDG%20Pune%20Logo.webp" alt="GDG Cloud Pune Logo" width={36} height={36} className={className} />
  );
}
