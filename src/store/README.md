# Store

Folder untuk state management (Context API, Redux, Zustand, atau yang lain):

## Opsi 1: Context API (Recommended untuk project sederhana)
```
store/
  ├── CartContext.tsx
  └── index.ts
```

## Opsi 2: Redux Toolkit
```
store/
  ├── slices/
  │   └── cartSlice.ts
  ├── store.ts
  └── index.ts
```

## Opsi 3: Zustand (Lightweight alternative)
```
store/
  ├── cartStore.ts
  └── index.ts
```

Pilih salah satu sesuai kebutuhan project Anda.
