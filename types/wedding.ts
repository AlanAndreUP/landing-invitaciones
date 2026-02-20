export interface CoupleData {
  firstName: string;
  lastName: string;
  partnerFirstName: string;
  partnerLastName: string;
  initials: string;
}

export interface EventData {
  title: string;
  dateIso: string;
  dateLabel: string;
  timeLabel: string;
  city: string;
  venue: string;
  address: string;
  parking: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export interface RegistryStore {
  name: string;
  url: string;
}

export interface BankData {
  bank: string;
  holder: string;
  clabe: string;
  account: string;
  card: string;
}

export interface GiftRegistryData {
  message: string;
  stores: RegistryStore[];
  bank: BankData;
}

export interface DressCodeData {
  style: string;
  women: string;
  men: string;
  restrictedColors: string[];
  palette: string[];
  closingMessage: string;
}

export interface RSVPData {
  maxGuests: string;
  deadline: string;
  apiEndpoint: string;
  successMessage: string;
}

export interface LocationData {
  mapsUrl: string;
  wazeUrl: string;
  transport: string;
  parking: string;
}

export interface HotelData {
  name: string;
  address: string;
  phone: string;
  web: string;
  distance: string;
  price: string;
  amenities: string;
}

export interface FooterData {
  tagline: string;
  copyright: string;
}

export interface MusicData {
  trackTitle: string;
  artist: string;
  trackUrl: string;
}

export interface WalletData {
  enabled: boolean;
  url: string;
}

export interface WeddingData {
  couple: CoupleData;
  announcement: string[];
  event: EventData;
  ceremony: {
    place: string;
    time: string;
    mapsUrl: string;
    wazeUrl: string;
  };
  reception: {
    place: string;
    time: string;
    mapsUrl: string;
    wazeUrl: string;
  };
  timeline: TimelineItem[];
  dressCode: DressCodeData;
  giftRegistry: GiftRegistryData;
  rsvp: RSVPData;
  location: LocationData;
  hotels: HotelData[];
  footer: FooterData;
  music: MusicData;
  wallet: WalletData;
}
