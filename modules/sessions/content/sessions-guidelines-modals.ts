/**
 * Copy for Sessions “Guidelines” modals.
 * Design refs (Dev Mode):
 * @see https://www.figma.com/design/PBbuPRB1M6hXrVa2BLIv0B/Guru-Ma-Approved-version--Copy-?node-id=295-1947 — Online Zoom
 * @see https://www.figma.com/design/PBbuPRB1M6hXrVa2BLIv0B/Guru-Ma-Approved-version--Copy-?node-id=281-3720 — Offline session
 */
export type SessionsGuidelinesModalVariant = "online" | "offline";

/** One numbered block; optional subtitle (e.g. YouTube Live) restarts numbering at 1. */
export type SessionsGuidelinesContentBlock = {
  subtitle?: string;
  bullets: string[];
};

export type SessionsGuidelinesModalCopy = {
  title: string;
  intro?: string;
  blocks: SessionsGuidelinesContentBlock[];
};

export const sessionsGuidelinesModalCopy: Record<SessionsGuidelinesModalVariant, SessionsGuidelinesModalCopy> = {
  online: {
    title: "Online Zoom",
    blocks: [
      {
        bullets: [
          "Join the session at least 5 minutes in advance. Test your internet connection.",
          "Your audio will be muted on joining and video will be disabled for all participants.",
          "To speak or ask a question, click the Hand Raise reaction. You will be unmuted when your turn arrives.",
          "Use the chat box to send your message if there are audio-related technical issues.",
          "Don’t share the link with unknown people. If anyone is keen to listen in, ask them to register."
        ]
      },
      {
        subtitle: "YouTube Live",
        bullets: [
          "Click the link and wait for the live session to begin at the scheduled time.",
          "Use the chat box for your messages or questions. Our volunteers at the venue will bring them into the Q&A during the live session."
        ]
      }
    ]
  },
  offline: {
    title: "Offline session",
    blocks: [
      {
        bullets: [
          "Kindly reach the venue 15 minutes in advance. This gives you time to use the restroom, find a seat and settle down, and a few minutes to listen to music and bhajans.",
          "Put your phone on silent mode or switch it off. Don’t answer phone calls while the discourse is on—step out of the room if needed.",
          "Don’t chat with other participants once the discourse has started.",
          "Find a comfortable seat—on a chair or on the carpet. Seating is first come, first served.",
          "If you wish to speak, raise your hand. Our volunteer will bring the microphone so everyone can hear your question or sharing.",
          "There isn’t a formal dress code; general guidelines are shared once you register.",
          "Bring your own notebook and pen if you wish to take notes. A recording of the entire session won’t be made available.",
          "If you have questions, speak to the volunteers at the registration desk at the venue.",
          "Food is arranged for participants joining the in-person discourses—please plan accordingly."
        ]
      }
    ]
  }
};
