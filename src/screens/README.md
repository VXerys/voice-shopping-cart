# Screens

Setiap screen memiliki folder sendiri dengan struktur:
- `[ScreenName].tsx` - Main component
- `[ScreenName].styles.ts` - Styles (StyleSheet)
- `types.ts` - Types yang spesifik untuk screen ini (opsional)

## HomeScreen/
Main screen dengan voice input dan cart preview:
- `HomeScreen.tsx` - Main home screen
- `HomeScreen.styles.ts` - Styles

## CartScreen/
Full cart view screen:
- `CartScreen.tsx` - Full cart screen
- `CartScreen.styles.ts` - Styles

## Struktur lengkap:
```
screens/
  ├── HomeScreen/
  │   ├── HomeScreen.tsx
  │   └── HomeScreen.styles.ts
  └── CartScreen/
      ├── CartScreen.tsx
      └── CartScreen.styles.ts
```
