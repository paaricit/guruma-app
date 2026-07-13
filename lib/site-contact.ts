/** Shared contact details — used in site footer and `/contact` hero. */
export const siteContact = {
  phone: "+91-9840539686",
  email: "vinita@iisht.in",
  address:
    "4th floor, no 4, Abhinav centre Old no 19, New, off Chamiers Road, Cooperative Colony, Chennai, Tamil Nadu 600018"
} as const;

const whatsAppPhoneDigits = siteContact.phone.replace(/\D/g, "");

/** Opens WhatsApp chat with the site phone and a default community join message. */
export const siteContactWhatsAppJoinUrl = `https://wa.me/${whatsAppPhoneDigits}?text=${encodeURIComponent(
  "I would like to join"
)}`;
