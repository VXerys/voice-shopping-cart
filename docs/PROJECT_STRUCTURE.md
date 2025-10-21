# 📁 VoiceCartApp - Struktur Folder

## 📂 Struktur Project

```
VoiceCartApp/
├── src/
│   ├── App.tsx                    # ✅ Entry point aplikasi (sudah dibersihkan)
│   │
│   ├── components/                # 🧩 Reusable components
│   │   ├── common/               # Komponen umum (Button, Input, Card, dll)
│   │   ├── cart/                 # Komponen spesifik cart
│   │   └── voice/                # Komponen spesifik voice input
│   │
│   ├── screens/                   # 📱 Application screens
│   │   ├── HomeScreen/           # Main screen dengan voice input
│   │   │   ├── HomeScreen.tsx
│   │   │   └── HomeScreen.styles.ts
│   │   └── CartScreen/           # Full cart view
│   │       ├── CartScreen.tsx
│   │       └── CartScreen.styles.ts
│   │
│   ├── navigation/                # 🧭 Navigation setup
│   │   ├── AppNavigator.tsx
│   │   └── types.ts
│   │
│   ├── services/                  # 🔧 Service layer
│   │   ├── voiceRecognitionService.ts
│   │   ├── storageService.ts
│   │   └── apiService.ts
│   │
│   ├── hooks/                     # 🎣 Custom hooks
│   │   ├── useVoiceRecognition.ts
│   │   ├── useCart.ts
│   │   └── index.ts
│   │
│   ├── store/                     # 🗄️ State management
│   │   ├── CartContext.tsx       # (atau Redux/Zustand)
│   │   └── index.ts
│   │
│   ├── types/                     # 📝 TypeScript types & interfaces
│   │   └── index.ts              # ✅ Sudah ada (CartItem, InputMode, dll)
│   │
│   ├── constants/                 # 🔢 App constants
│   │   └── index.ts              # ✅ Sudah ada
│   │
│   ├── utils/                     # 🛠️ Utility functions
│   │   └── helpers.ts            # ✅ Sudah ada (formatCurrency, parseVoiceInput)
│   │
│   ├── theme/                     # 🎨 Theme configuration
│   │   ├── colors.ts             # ✅ Sudah ada
│   │   ├── typography.ts         # ✅ Sudah ada
│   │   ├── spacing.ts            # ✅ Sudah ada
│   │   └── index.ts              # ✅ Sudah ada
│   │
│   └── assets/                    # 🖼️ Static assets
│       ├── images/               # Images
│       └── icons/                # Icons
│
├── android/                       # Android native code
├── ios/                          # iOS native code
├── __tests__/                    # Unit tests
├── index.js                      # ✅ Entry point (sudah diupdate ke src/App.tsx)
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 File yang Sudah Siap Pakai

### ✅ Theme System
- `src/theme/colors.ts` - Color palette lengkap (primary, background, text, dll)
- `src/theme/typography.ts` - Font sizes, weights, line heights
- `src/theme/spacing.ts` - Consistent spacing values

### ✅ Types & Interfaces
- `src/types/index.ts`:
  - `CartItem` - Interface untuk item di cart
  - `InputMode` - Type untuk voice/manual mode
  - `VoiceRecognitionResult` - Interface untuk hasil voice recognition
  - `RootStackParamList` - Navigation types

### ✅ Constants
- `src/constants/index.ts`:
  - Voice examples dalam Bahasa Indonesia
  - App name & tagline
  - Feature constants

### ✅ Utils
- `src/utils/helpers.ts`:
  - `formatCurrency()` - Format ke Rupiah
  - `generateId()` - Generate unique ID
  - `parseVoiceInput()` - Parse voice input (placeholder)

### ✅ App Entry Point
- `src/App.tsx` - Clean template tanpa boilerplate
- `index.js` - Sudah diupdate mengarah ke `src/App.tsx`

## 📋 Next Steps - Yang Perlu Anda Buat

### 1️⃣ Components (Prioritas Tinggi)

#### common/
- [ ] `Button.tsx` - Reusable button dengan variants
- [ ] `Input.tsx` - Text input component
- [ ] `Card.tsx` - Card container
- [ ] `Header.tsx` - App header dengan logo & menu

#### voice/
- [ ] `VoiceButton.tsx` - Tombol microphone untuk voice input
- [ ] `VoiceIndicator.tsx` - Animasi saat recording
- [ ] `VoiceExamples.tsx` - Contoh voice input

#### cart/
- [ ] `CartItem.tsx` - Single cart item display
- [ ] `CartList.tsx` - List semua cart items
- [ ] `CartSummary.tsx` - Total items & price
- [ ] `EmptyCart.tsx` - Empty state

### 2️⃣ Screens

- [ ] `HomeScreen/HomeScreen.tsx` - Main screen dengan:
  - Header
  - Voice/Manual input toggle
  - Voice button
  - Cart preview (0 items)
  
- [ ] `CartScreen/CartScreen.tsx` - Full cart dengan:
  - Cart items list
  - Edit/Delete functionality
  - Total summary

### 3️⃣ Services

- [ ] `voiceRecognitionService.ts` - Voice recognition logic
  - Setup voice recognition library
  - Start/stop recording
  - Handle results
  
- [ ] `storageService.ts` - AsyncStorage wrapper
  - Save cart items
  - Load cart items
  - Clear cart

### 4️⃣ Hooks

- [ ] `useVoiceRecognition.ts` - Custom hook untuk voice
  - isRecording state
  - startRecording()
  - stopRecording()
  - transcription result
  
- [ ] `useCart.ts` - Custom hook untuk cart
  - cart items state
  - addItem()
  - removeItem()
  - updateItem()
  - clearCart()

### 5️⃣ State Management

- [ ] `store/CartContext.tsx` - Context API untuk cart state
  - CartProvider
  - useCartContext hook

### 6️⃣ Navigation

- [ ] `navigation/AppNavigator.tsx` - Setup React Navigation
  - Stack Navigator atau Tab Navigator
  - Home & Cart screens

## 📦 Dependencies yang Mungkin Diperlukan

```bash
# Navigation
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-gesture-handler

# Voice Recognition
npm install @react-native-voice/voice
# atau
npm install react-native-voice

# Storage
npm install @react-native-async-storage/async-storage

# Icons
npm install react-native-vector-icons

# Animations (optional)
npm install react-native-reanimated
```

## 🎨 Design System

Berdasarkan gambar yang Anda berikan:
- **Background**: Dark theme (#1a1a2e)
- **Primary**: Purple gradient (#6c63ff)
- **Accent**: Pink/Red (#e94560)
- **Text**: White primary, gray secondary

## 🚀 Quick Start

1. **Install dependencies** (jika belum):
   ```bash
   npm install
   ```

2. **Mulai coding** dari prioritas tertinggi:
   - Buat `HomeScreen.tsx` terlebih dahulu
   - Kemudian components yang dibutuhkan (VoiceButton, dll)
   - Setup voice recognition service
   - Implement cart functionality

3. **Run aplikasi**:
   ```bash
   # Android
   npm run android
   
   # iOS
   npm run ios
   ```

## 📝 Catatan

- Semua file template sudah include TypeScript types
- Color scheme sudah disesuaikan dengan design
- Folder structure mengikuti best practices React Native
- Siap untuk scale ke fitur yang lebih besar

---

**Happy Coding! 🎉**
