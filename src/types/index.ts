// Cart Item interface
export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price?: number;
  timestamp: Date;
}

// Input mode type
export type InputMode = 'voice' | 'manual';

// Voice recognition result
export interface VoiceRecognitionResult {
  text: string;
  confidence?: number;
}

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  // Tambahkan screen lain di sini
};
