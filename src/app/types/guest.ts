export interface Guest {
  id?: string; // <- Tambahkan ini agar guest.id tidak error
  fullName: string;
  address?: string;
  confirmationNumber: string;
  isComing?: boolean;
  totalAttendees?: number;
  message?: string;
  slug?: string;
}

export interface HeartPos {
  left: string;
  top: string;
  delay: string;
  duration: string;
}
