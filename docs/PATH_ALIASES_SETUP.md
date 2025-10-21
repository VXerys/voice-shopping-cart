# 📝 Setup Guide - TypeScript Path Aliases (Optional)

Jika Anda ingin menggunakan import paths yang lebih clean seperti:

```typescript
import { colors } from '@/theme';
import { Button } from '@components/common/Button';
```

Maka Anda perlu install dan setup babel-plugin-module-resolver.

## 🔧 Installation

```bash
npm install --save-dev babel-plugin-module-resolver
```

## ⚙️ Configuration

Edit `babel.config.js`:

```javascript
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@types': './src/types',
          '@constants': './src/constants',
          '@store': './src/store',
          '@theme': './src/theme',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
```

## ✅ TypeScript Config

File `tsconfig.json` sudah diupdate dengan path aliases yang sesuai.

## 🔄 Restart Metro

Setelah mengubah babel config, restart Metro bundler:

```bash
npm start -- --reset-cache
```

## 📦 Alternative - Tanpa Path Aliases

Jika tidak ingin setup path aliases, Anda bisa menggunakan relative imports:

```typescript
// Dari HomeScreen.tsx
import { colors } from '../../theme';
import { Button } from '../../components/common/Button';
```

---

**Note**: Path aliases adalah opsional dan tidak wajib. Project akan tetap berjalan dengan relative imports! 😊
