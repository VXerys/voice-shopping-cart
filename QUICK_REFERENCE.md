# 🚀 Quick Reference - VoiceCartApp

## 📂 Import Paths

```typescript
// Theme
import { colors, typography, spacing } from '@/theme';

// Types
import { CartItem, InputMode, VoiceRecognitionResult } from '@/types';

// Constants
import { APP_NAME, VOICE_EXAMPLES, FEATURES } from '@/constants';

// Utils
import { formatCurrency, generateId, parseVoiceInput } from '@/utils/helpers';

// Components
import { Button } from '@/components/common/Button';
import { VoiceButton } from '@/components/voice/VoiceButton';
import { CartItem } from '@/components/cart/CartItem';

// Hooks
import { useVoiceRecognition } from '@/hooks/useVoiceRecognition';
import { useCart } from '@/hooks/useCart';
```

## 🎨 Theme Usage

```typescript
// Colors
backgroundColor: colors.background
color: colors.text
borderColor: colors.primary

// Typography
fontSize: typography.fontSize.xl
fontWeight: typography.fontWeight.bold

// Spacing
padding: spacing.md
margin: spacing.lg
```

## 🛠️ Common Patterns

### Format Currency
```typescript
import { formatCurrency } from '@/utils/helpers';

const price = 50000;
const formatted = formatCurrency(price); // "Rp 50.000"
```

### Generate ID
```typescript
import { generateId } from '@/utils/helpers';

const id = generateId(); // "1729353600000-abc123def"
```

### Cart Item Structure
```typescript
const item: CartItem = {
  id: generateId(),
  name: 'Mangga',
  quantity: 5,
  price: 50000,
  timestamp: new Date(),
};
```

## 📱 Screen Template

```typescript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '@/theme';

const ScreenName = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Your content here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
});

export default ScreenName;
```

## 🎯 Component Template

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '@/theme';

interface ComponentProps {
  title: string;
  onPress?: () => void;
}

export const ComponentName: React.FC<ComponentProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.backgroundCard,
    borderRadius: 12,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
});
```

## 🔧 Common Commands

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run tests
npm test

# Lint
npm run lint

# Clear cache
npm start -- --reset-cache
```

## 📝 Naming Conventions

### Files
- Components: `PascalCase.tsx` (Button.tsx, VoiceButton.tsx)
- Screens: `PascalCase.tsx` (HomeScreen.tsx)
- Utilities: `camelCase.ts` (helpers.ts, voiceRecognitionService.ts)
- Types: `index.ts` atau `types.ts`
- Styles: `ScreenName.styles.ts`

### Variables & Functions
```typescript
// camelCase
const userName = 'John';
const isRecording = false;
function handlePress() {}

// PascalCase untuk Components
const VoiceButton = () => {};

// UPPER_CASE untuk constants
const MAX_ITEMS = 100;
```

## 🎨 Color Palette

```
Primary:        #6c63ff  (Purple)
Primary Dark:   #5a52d5
Primary Light:  #8e85ff
Background:     #1a1a2e  (Dark Blue)
Accent:         #e94560  (Pink/Red)
Text:           #ffffff  (White)
Text Secondary: #a0a0a0  (Gray)
```

## 📦 Useful Dependencies

```json
{
  "@react-navigation/native": "^6.x.x",
  "@react-navigation/stack": "^6.x.x",
  "@react-native-voice/voice": "^3.x.x",
  "@react-native-async-storage/async-storage": "^1.x.x",
  "react-native-vector-icons": "^10.x.x"
}
```

---

**Tips**: Simpan file ini untuk reference cepat saat coding! 📌
