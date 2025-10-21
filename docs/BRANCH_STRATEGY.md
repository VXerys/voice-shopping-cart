# 🌳 Branch Strategy - VoiceCartApp

## 📋 Overview

Project VoiceCartApp menggunakan **Feature Branch Workflow** dengan conventional commits untuk memastikan kode terstruktur, mudah di-review, dan professional.

---

## 🎯 Branch Structure

### **Main Branches (Permanent)**

#### 1. `master` - Production Branch
- **Purpose**: Code yang sudah production-ready
- **Protection**: 
  - ✅ Require PR review (min 1 reviewer)
  - ✅ Require passing CI/CD
  - ❌ No direct push allowed
- **Merge from**: `develop` (via release PR) atau `hotfix/*`
- **Deploy**: Setiap merge akan trigger production build

#### 2. `develop` - Development Branch (Optional, Recommended untuk tim)
- **Purpose**: Integration branch untuk semua fitur
- **Protection**: Require PR review
- **Merge from**: `feature/*`, `fix/*`
- **Merge to**: `master` (via release)

---

## 🔀 Temporary Branches

### **Feature Branches** (`feature/*`)
Format: `feature/<feature-name>`

**Purpose**: Develop fitur baru

**Examples untuk VoiceCartApp:**
- `feature/splash-screen` - Splash screen implementation
- `feature/voice-input` - Voice recognition UI & logic
- `feature/manual-input` - Manual input form
- `feature/cart-management` - Cart CRUD operations
- `feature/voice-processing` - Voice text parsing & NLP
- `feature/storage-integration` - AsyncStorage implementation
- `feature/navigation` - React Navigation setup
- `feature/ui-theme` - Complete UI theming
- `feature/cart-summary` - Cart total & summary
- `feature/empty-state` - Empty cart UI
- `feature/animations` - UI animations & transitions

**Workflow:**
```bash
git checkout master
git pull origin master
git checkout -b feature/splash-screen
# ... implement feature
git add .
git commit -m "feat(ui): add splash screen with brand logo"
git push -u origin feature/splash-screen
# Create PR to master
```

---

### **Fix Branches** (`fix/*`)
Format: `fix/<issue-description>`

**Purpose**: Bug fixes yang tidak urgent

**Examples:**
- `fix/icon-rendering` - Fix icon display issue
- `fix/voice-timeout` - Fix voice recognition timeout
- `fix/cart-calculation` - Fix price calculation bug
- `fix/storage-persistence` - Fix data not saving

**Workflow:**
```bash
git checkout master
git pull origin master
git checkout -b fix/voice-timeout
git commit -m "fix(voice): increase timeout to 10s for better UX"
git push -u origin fix/voice-timeout
```

---

### **Hotfix Branches** (`hotfix/*`)
Format: `hotfix/<critical-issue>`

**Purpose**: Critical production bugs (merge langsung ke master)

**Examples:**
- `hotfix/app-crash-on-launch` - App crashes
- `hotfix/data-loss` - User data lost

**Workflow:**
```bash
git checkout master
git checkout -b hotfix/app-crash-on-launch
# ... fix critical bug
git commit -m "fix(critical): prevent crash on null voice result"
git push -u origin hotfix/app-crash-on-launch
# Create PR to master (fast-track review)
```

---

### **Chore Branches** (`chore/*`)
Format: `chore/<task-description>`

**Purpose**: Maintenance, config, dependencies

**Examples:**
- `chore/typescript-config` - Update tsconfig
- `chore/eslint-setup` - Setup ESLint
- `chore/dependency-update` - Update packages
- `chore/ci-setup` - GitHub Actions setup

**Workflow:**
```bash
git checkout -b chore/typescript-config
git commit -m "chore(config): add ignoreDeprecations for TS path aliases"
```

---

### **Docs Branches** (`docs/*`)
Format: `docs/<documentation-update>`

**Purpose**: Documentation only

**Examples:**
- `docs/readme-update` - Update README
- `docs/api-documentation` - Add API docs
- `docs/contributing-guide` - Add CONTRIBUTING.md

---

### **Refactor Branches** (`refactor/*`)
Format: `refactor/<component-or-module>`

**Purpose**: Code refactoring tanpa mengubah behavior

**Examples:**
- `refactor/voice-service` - Refactor voice service
- `refactor/cart-context` - Improve state management
- `refactor/component-structure` - Reorganize components

---

## 📦 Branch Roadmap untuk VoiceCartApp

### **Phase 1: Foundation & Setup** (Current)
Estimasi: 1-2 minggu

1. ✅ `feature/icon-update` - App icon update
2. ⏳ `chore/typescript-config` - Fix TypeScript config
3. ⏳ `feature/splash-screen` - Splash screen
4. ⏳ `feature/navigation` - React Navigation setup
5. ⏳ `feature/ui-theme` - Complete theme system
6. ⏳ `chore/ci-setup` - GitHub Actions for PR checks

---

### **Phase 2: Core UI Components** 
Estimasi: 2-3 minggu

7. `feature/home-screen` - Home screen layout
8. `feature/cart-screen` - Cart screen layout
9. `feature/voice-button` - Voice input button component
10. `feature/voice-indicator` - Voice recording indicator
11. `feature/cart-item-component` - Cart item card
12. `feature/empty-cart-state` - Empty cart UI
13. `feature/header-component` - App header

---

### **Phase 3: Voice Recognition**
Estimasi: 2-3 minggu

14. `chore/voice-recognition-setup` - Install & setup voice library
15. `feature/voice-service` - Voice recognition service
16. `feature/voice-hook` - useVoiceRecognition hook
17. `feature/voice-processing` - Parse voice to product+price
18. `feature/voice-examples` - Voice input examples UI
19. `fix/voice-timeout` - Handle timeout & errors

---

### **Phase 4: Cart Management**
Estimasi: 1-2 minggu

20. `feature/cart-context` - Cart state management
21. `feature/cart-crud` - Add/remove/update cart items
22. `feature/cart-summary` - Total calculation & display
23. `feature/storage-service` - AsyncStorage integration
24. `feature/cart-persistence` - Save/load cart from storage

---

### **Phase 5: Manual Input**
Estimasi: 1 minggu

25. `feature/manual-input-ui` - Manual input form
26. `feature/input-validation` - Form validation
27. `feature/input-toggle` - Voice/Manual mode toggle

---

### **Phase 6: Polish & Enhancement**
Estimasi: 2-3 minggu

28. `feature/animations` - UI animations & transitions
29. `feature/haptic-feedback` - Haptic feedback for interactions
30. `feature/error-handling` - Comprehensive error handling
31. `feature/loading-states` - Loading indicators
32. `refactor/code-optimization` - Performance optimization
33. `docs/user-guide` - User documentation
34. `chore/app-signing` - Setup release signing
35. `chore/app-store-prep` - Prepare for store submission

---

### **Phase 7: Testing & Quality**
Estimasi: 1-2 minggu

36. `test/unit-tests` - Add unit tests
37. `test/integration-tests` - Add integration tests
38. `fix/bug-fixes` - Fix bugs from testing
39. `docs/changelog` - Create CHANGELOG.md

---

## 📊 Branch Naming Conventions

### **Prefix Rules:**
```
feature/  → New features
fix/      → Bug fixes
hotfix/   → Critical production bugs
chore/    → Maintenance & tooling
docs/     → Documentation
refactor/ → Code refactoring
test/     → Testing
style/    → UI/UX styling only
perf/     → Performance improvements
```

### **Naming Best Practices:**
✅ **Good:**
- `feature/voice-input`
- `fix/cart-calculation-error`
- `chore/update-dependencies`

❌ **Bad:**
- `my-feature` (no prefix)
- `feature/Feature1` (capitalize)
- `update_icon` (underscore)
- `fix-bug` (not descriptive)

---

## 🔄 Workflow Summary

### **Standard Feature Development:**
```bash
# 1. Start from master
git checkout master
git pull origin master

# 2. Create feature branch
git checkout -b feature/splash-screen

# 3. Develop & commit
git add .
git commit -m "feat(ui): add splash screen with logo"

# 4. Push to remote
git push -u origin feature/splash-screen

# 5. Create PR on GitHub
# (Add description, screenshots, testing notes)

# 6. After PR approved & merged
git checkout master
git pull origin master
git branch -d feature/splash-screen
```

---

## 📈 Estimasi Total Development

**Total Branches Estimated:** ~35-40 branches

**Total Timeline:** 3-4 bulan (part-time) atau 6-8 minggu (full-time)

**Breakdown:**
- Phase 1 (Foundation): 6 branches
- Phase 2 (UI Components): 7 branches
- Phase 3 (Voice Recognition): 6 branches
- Phase 4 (Cart Management): 5 branches
- Phase 5 (Manual Input): 3 branches
- Phase 6 (Polish): 8 branches
- Phase 7 (Testing): 4 branches

---

## 💡 Tips untuk Branch Management

### **1. Keep Branches Small**
- ✅ 1 branch = 1 concern/feature
- ✅ Easier to review
- ✅ Faster to merge
- ✅ Less merge conflicts

### **2. Regular Sync**
```bash
# Sync dengan master secara regular
git checkout feature/your-branch
git fetch origin
git rebase origin/master
```

### **3. Clean Up After Merge**
```bash
# Delete local branch
git branch -d feature/branch-name

# Delete remote branch (otomatis via GitHub PR)
git push origin --delete feature/branch-name
```

### **4. Use Draft PRs**
- Buat PR sebagai "Draft" saat masih WIP
- Convert to "Ready for review" saat selesai

### **5. Write Good PR Descriptions**
Template PR description:
```markdown
## 🎯 What
Brief description of changes

## 🚀 Why
Why this change is needed

## 🧪 Testing
- [ ] Manual testing on Android
- [ ] Manual testing on iOS
- [ ] Unit tests added

## 📸 Screenshots
(Add screenshots here)

## 📝 Notes
Any additional context
```

---

## 🔐 Branch Protection Rules (Recommended)

### **For `master` branch:**
```yaml
Settings → Branches → Branch protection rules

✅ Require pull request reviews before merging (1 approval)
✅ Require status checks to pass before merging
✅ Require branches to be up to date before merging
✅ Include administrators (enforce for everyone)
❌ Allow force pushes (NEVER)
✅ Require linear history (optional, cleaner history)
```

---

## 📚 Related Documentation

- [CONTRIBUTING.md](./CONTRIBUTING.md) - How to contribute
- [COMMIT_CONVENTIONS.md](./COMMIT_CONVENTIONS.md) - Commit message style
- [PR_TEMPLATE.md](../.github/PULL_REQUEST_TEMPLATE.md) - PR template

---

## 🎓 Learning Resources

- [Git Flow vs Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

**Last Updated:** October 19, 2025  
**Project:** VoiceCartApp  
**Maintainer:** @VXerys
