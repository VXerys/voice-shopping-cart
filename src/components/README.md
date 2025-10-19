# Components

Struktur folder components:

## common/
Komponen-komponen reusable yang bersifat umum:
- `Button.tsx` - Custom button component
- `Input.tsx` - Custom input component
- `Card.tsx` - Card component
- `Header.tsx` - Header component
- dll.

## cart/
Komponen-komponen yang spesifik untuk fitur cart:
- `CartItem.tsx` - Single cart item component
- `CartList.tsx` - List of cart items
- `CartSummary.tsx` - Cart summary (total items, total price)
- `EmptyCart.tsx` - Empty cart state
- dll.

## voice/
Komponen-komponen yang spesifik untuk fitur voice:
- `VoiceButton.tsx` - Voice recording button
- `VoiceIndicator.tsx` - Voice recording indicator/animation
- `VoiceExamples.tsx` - Voice input examples
- dll.

## Struktur lengkap:
```
components/
  ├── common/
  │   ├── Button.tsx
  │   ├── Input.tsx
  │   ├── Card.tsx
  │   └── Header.tsx
  ├── cart/
  │   ├── CartItem.tsx
  │   ├── CartList.tsx
  │   ├── CartSummary.tsx
  │   └── EmptyCart.tsx
  └── voice/
      ├── VoiceButton.tsx
      ├── VoiceIndicator.tsx
      └── VoiceExamples.tsx
```
