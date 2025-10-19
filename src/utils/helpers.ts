/**
 * Format number to Indonesian Rupiah currency
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

/**
 * Generate unique ID
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Parse voice input to extract product name and price
 * Example: "mangga lima puluh ribu" -> { name: "mangga", price: 50000 }
 */
export const parseVoiceInput = (text: string): { name: string; price: number | null } => {
  // TODO: Implement voice parsing logic
  // Ini adalah placeholder, implementasi sebenarnya akan lebih kompleks
  return {
    name: text,
    price: null,
  };
};
