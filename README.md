# 🛒 VoiceCart

<div align="center">

![VoiceCart Logo](./src/assets/images/logo-splashscreen.png)

### Belanja Lebih Mudah, Cukup dengan Suara! 🎤

**VoiceCart** mengubah cara Anda mencatat belanjaan. Tidak perlu lagi repot mengetik - cukup sebutkan produk dan harganya, aplikasi akan mencatat semuanya untuk Anda.

[![React Native](https://img.shields.io/badge/React%20Native-0.82-61DAFB?style=flat&logo=react)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

[Fitur](#-kenapa-voicecart) • [Cara Pakai](#-cara-pakai) • [Dokumentasi](#-dokumentasi) • [Kontribusi](#-kontribusi)

</div>

---

## 💡 Apa itu VoiceCart?

Pernah belanja di pasar atau supermarket sambil bingung mencatat apa yang sudah dibeli? **VoiceCart** hadir sebagai solusinya!

Aplikasi ini menggabungkan **teknologi voice recognition** dengan interface yang simpel, memudahkan Anda mencatat belanjaan hanya dengan bicara. Dirancang khusus untuk pengguna Indonesia dengan dukungan **Bahasa Indonesia** penuh.

---

## ✨ Kenapa VoiceCart?

### 🎤 **Voice Input - Hands-free Shopping**
Lagi bawa belanjaan? Cukup bicara:  
*"Mangga lima puluh ribu"* → Langsung masuk ke cart!

### ✏️ **Manual Input - Fleksibel**
Prefer mengetik? No problem! Manual input tetap tersedia untuk Anda yang suka cara tradisional.

### 💾 **Auto Save - Nggak Bakal Hilang**
Data otomatis tersimpan di device. Mau tutup aplikasi? Tenang, semua data aman!

### 🎨 **UI Modern & Eye-Friendly**
Dark theme yang elegan, nyaman di mata, dan mudah digunakan.

### ⚡ **Ringan & Cepat**
Aplikasi yang lightweight, tidak membebani HP Anda.

---

## 🎯 Fitur-Fitur

### ✅ Sudah Ada (v0.1.0)

- Custom app icon dengan brand identity
- Struktur project yang rapi dan scalable
- TypeScript untuk code yang lebih aman
- Complete theme system (colors, typography, spacing)

### 🚀 Coming Soon (v1.0.0)

- **Voice Recognition** dengan Bahasa Indonesia
- **Smart Parsing** - Otomatis pisahkan nama produk dan harga
- **Cart Management** - Edit, hapus, atur belanjaan
- **Total Otomatis** - Hitung total belanja secara real-time
- **Riwayat Belanja** - Lihat history belanja sebelumnya
- **Export List** - Share list belanjaan ke WhatsApp/lainnya
- **Dark/Light Mode** - Pilih tema sesuai selera

---

## 📸 Preview

> 🎨 **Screenshots akan segera ditambahkan!**  
> Saat ini kami sedang fokus membangun fitur-fitur utama.

---

## 🚀 Cara Pakai

### Untuk Pengguna

1. **Download** aplikasi dari Play Store (coming soon!)
2. **Buka** aplikasi VoiceCart
3. **Tekan** tombol microphone
4. **Sebutkan** produk dan harganya
5. **Done!** Produk masuk ke cart

### Untuk Developer

**Clone & Setup:**

```bash
git clone https://github.com/VXerys/voice-shopping-cart.git
cd voice-shopping-cart
npm install
```

**Run Development:**

```bash
# Android
npm run android

# iOS
npm run ios
```

**Commands Lainnya:**

```bash
npm test              # Run tests
npm run lint          # Check code quality
npm start             # Start Metro bundler
```

---

## 📚 Dokumentasi

Butuh info lebih detail? Cek folder **`/docs`** untuk dokumentasi lengkap!

### 📋 Planning & Development

| Dokumen | Isi |
|---------|-----|
| [AGILE_SCRUM_PLAN.md](./docs/AGILE_SCRUM_PLAN.md) | 📅 Sprint planning selama 1 bulan |
| [SPRINT_TRACKING.md](./docs/SPRINT_TRACKING.md) | ✅ Progress tracking per sprint |
| [DEVELOPMENT_CHECKLIST.md](./docs/DEVELOPMENT_CHECKLIST.md) | 📝 Checklist fitur yang sudah & belum selesai |
| [BRANCH_STRATEGY.md](./docs/BRANCH_STRATEGY.md) | 🌳 Workflow Git & branching |
| [BRANCH_SUMMARY.md](./docs/BRANCH_SUMMARY.md) | 📊 Roadmap 40+ branches |

### 🛠️ Technical Reference

| Dokumen | Isi |
|---------|-----|
| [PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md) | 📁 Struktur folder lengkap |
| [QUICK_REFERENCE.md](./docs/QUICK_REFERENCE.md) | ⚡ Code snippets & quick tips |
| [SETUP_COMPLETE.md](./docs/SETUP_COMPLETE.md) | ✨ Summary setup awal project |
| [PATH_ALIASES_SETUP.md](./docs/PATH_ALIASES_SETUP.md) | 🔧 Setup TypeScript path aliases |

### 🤝 Untuk Contributors

- [CONTRIBUTING.md](./CONTRIBUTING.md) - Panduan kontribusi
- Conventional Commits untuk commit message
- Feature branch workflow
- PR review process

---

## 🏗️ Teknologi

**Built with:**

- ⚛️ **React Native 0.82** - Cross-platform mobile framework
- 📘 **TypeScript 5.8** - Type-safe JavaScript
- 🎤 **Voice Recognition** - @react-native-voice/voice (planned)
- 💾 **AsyncStorage** - Local data persistence
- 🧪 **Jest** - Unit testing
- 🎨 **Custom Theme System** - Consistent UI/UX

---

## 📅 Timeline Development

**Target:** 4 minggu (1 bulan), dibagi jadi 4 sprint

| Sprint | Fokus | Status |
|--------|-------|--------|
| **Sprint 1** | Foundation, Navigation, UI Theme | 🔄 In Progress |
| **Sprint 2** | Voice Recognition & Cart Logic | ⏳ Next |
| **Sprint 3** | Manual Input & Data Storage | ⏳ Planned |
| **Sprint 4** | Polish, Testing, Bug Fixing | ⏳ Planned |

> 💡 Detail lengkap: [AGILE_SCRUM_PLAN.md](./docs/AGILE_SCRUM_PLAN.md)

---

## 🗺️ Roadmap

### Phase 1: MVP (Minimum Viable Product)

- [x] Project setup & structure
- [x] App icon & branding
- [x] Dokumentasi lengkap
- [ ] Splash screen
- [ ] Navigation
- [ ] Voice input UI
- [ ] Cart screen
- [ ] Basic cart operations
- [ ] Data persistence

### Phase 2: Enhancement

- [ ] Voice recognition implementation
- [ ] Smart parsing (NLP)
- [ ] Manual input form
- [ ] Edit & delete items
- [ ] Shopping history
- [ ] Export functionality

### Phase 3: Production

- [ ] Complete testing
- [ ] Performance optimization
- [ ] User onboarding flow
- [ ] Play Store submission
- [ ] Marketing materials

---

## 🤝 Kontribusi

Mau ikut kontribusi? **Awesome!** 🎉

Kami sangat welcome dengan kontribusi dari siapa saja, baik itu:

- 🐛 **Bug reports** - Nemu bug? Report!
- 💡 **Feature ideas** - Punya ide fitur keren? Share!
- 🔧 **Code contributions** - Submit PR!
- 📖 **Documentation** - Bantu improve docs!

**Cara Kontribusi:**

1. Fork repo ini
2. Buat branch: `git checkout -b feature/fitur-keren`
3. Commit: `git commit -m 'feat: tambah fitur keren'`
4. Push: `git push origin feature/fitur-keren`
5. Buat Pull Request

> 📖 Baca [CONTRIBUTING.md](./CONTRIBUTING.md) untuk detail lengkap!

**Commit Convention:**

```
feat: menambah fitur baru
fix: perbaiki bug
docs: update dokumentasi
chore: maintenance
```

---

## 🐛 Known Issues

- ✅ ~~Icon tidak muncul~~ - Fixed!
- ✅ ~~TypeScript deprecation warning~~ - Fixed!

Ada bug lain? [Report di sini](https://github.com/VXerys/voice-shopping-cart/issues)!

---

## 👨‍💻 Author

**VXerys**

Passionate mobile developer yang suka bikin aplikasi yang mempermudah hidup orang banyak 🚀

- 🐙 GitHub: [@VXerys](https://github.com/VXerys)
- 📦 Repo: [voice-shopping-cart](https://github.com/VXerys/voice-shopping-cart)

---

## 🙏 Terima Kasih

Terima kasih kepada:

- **React Native Team** - Framework yang luar biasa
- **Community Contributors** - Yang sudah & akan kontribusi
- **You!** - Yang baca README ini sampai habis 😄

---

## 📞 Butuh Bantuan?

- 📖 **Dokumentasi**: Cek folder [/docs](./docs/)
- 🐛 **Bug Report**: [Open Issue](https://github.com/VXerys/voice-shopping-cart/issues)
- 💬 **Diskusi**: [GitHub Discussions](https://github.com/VXerys/voice-shopping-cart/discussions)

---

## 📄 License

Project ini menggunakan **MIT License** - feel free to use!

---

<div align="center">

### ⭐ Suka project ini?

**Star repository ini** untuk support development! 🚀

---

**Made with ❤️ di Indonesia**

*Belanja jadi lebih mudah dengan VoiceCart!*

</div>
