export interface NavItem {
  label: string;
  id: string;
  isButton?: boolean;
  children?: { label: string; id: string }[];
}

export interface Executive {
  name: string;
  role: string;
  /** Optional photo path. Without it an initials placeholder is shown. */
  image?: string;
  quote?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  category: 'Academic' | 'Cultural' | 'Social';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}