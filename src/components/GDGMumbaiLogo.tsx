// This is a placeholder for the GDG Cloud Mumbai logo. Replace with the actual logo image if available.
import Image from "next/image";

export default function GDGMumbaiLogo({ className = "" }) {
  return (
    <Image src="https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/GDG%20Cloud%20Mumbai%20Logo.jpg" alt="GDG Cloud Mumbai Logo" width={36} height={36} className={className} />
  );
}
