# 🤝 Contributing to VoiceCartApp

Terima kasih atas minat Anda untuk berkontribusi! Dokumen ini berisi panduan untuk berkontribusi ke project VoiceCartApp.

---

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Branch Strategy](#branch-strategy)
3. [Commit Conventions](#commit-conventions)
4. [Pull Request Process](#pull-request-process)
5. [Code Style](#code-style)
6. [Testing](#testing)

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js >= 20
React Native 0.82
Android Studio / Xcode
```

### Setup
```bash
# Clone repository
git clone https://github.com/VXerys/voice-shopping-cart.git
cd voice-shopping-cart

# Install dependencies
npm install

# iOS only
cd ios && pod install && cd ..

# Run app
npm run android  # or npm run ios
```

---

## 🌳 Branch Strategy

### Branch Types

**Main Branch:**
- `master` - Production-ready code

**Development Branches:**
- `feature/*` - New features
- `fix/*` - Bug fixes
- `hotfix/*` - Critical production bugs
- `chore/*` - Maintenance tasks
- `docs/*` - Documentation
- `refactor/*` - Code refactoring
- `test/*` - Tests

### Branch Naming

Format: `<type>/<short-description>`

**Examples:**
- `feature/splash-screen`
- `fix/cart-calculation`
- `chore/update-deps`

**Rules:**
- Use lowercase
- Use hyphens for spaces
- Be descriptive but concise
- Max 3-4 words

---

## 📝 Commit Conventions

Kami menggunakan [Conventional Commits](https://www.conventionalcommits.org/).

### Format
```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting (no code change)
- `refactor` - Code refactoring
- `test` - Add/update tests
- `chore` - Maintenance
- `perf` - Performance improvement

### Scopes (Optional)
- `ui` - UI components
- `voice` - Voice recognition
- `cart` - Cart functionality
- `storage` - Data persistence
- `config` - Configuration
- `assets` - Images, icons, etc
- `navigation` - Navigation

### Examples

**Good commits:**
```bash
feat(voice): add voice recognition service
fix(cart): correct price calculation for multiple items
docs: update README with setup instructions
chore(deps): update react-native to 0.82.1
```

**Bad commits:**
```bash
update code
fix bug
WIP
asdf
```

### Commit Message Rules

**Subject line:**
- ✅ Present tense: "add" not "added"
- ✅ Lowercase
- ✅ No period at the end
- ✅ Max 72 characters

**Body (optional but recommended):**
- Explain WHAT and WHY, not HOW
- Wrap at 72 characters

---

## 🔄 Pull Request Process

### 1. Create Feature Branch
```bash
git checkout master
git pull origin master
git checkout -b feature/your-feature
```

### 2. Make Changes
- Write code
- Follow code style
- Add tests if applicable
- Update documentation

### 3. Commit Changes
```bash
git add .
git commit -m "feat(scope): add your feature"
```

### 4. Push Branch
```bash
git push -u origin feature/your-feature
```

### 5. Create Pull Request

**PR Title:** Same format as commit message
```
feat(voice): add voice recognition service
```

**PR Description Template:**
```markdown
## 🎯 What
Brief description of changes

## 🚀 Why
Explain the motivation for this change

## 🧪 Testing
- [ ] Tested on Android
- [ ] Tested on iOS (if applicable)
- [ ] Added unit tests
- [ ] Manual testing completed

## 📸 Screenshots/Video
(Add if UI changes)

## 📝 Notes
Any additional context or considerations
```

### 6. Code Review
- Address review comments
- Push updates to same branch
- Request re-review when ready

### 7. Merge
- PR must be approved by at least 1 reviewer
- All CI checks must pass
- Squash and merge (preferred)
- Delete branch after merge

---

## 💻 Code Style

### TypeScript
- Use TypeScript for all new code
- Define types/interfaces in `src/types/`
- Avoid `any` type

### React Native
```typescript
// ✅ Good
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';

interface Props {
  title: string;
  onPress: () => void;
}

export const MyComponent: React.FC<Props> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 18,
    color: colors.text,
  },
});
```

### File Naming
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Constants: `UPPER_SNAKE_CASE.ts`
- Styles: `ComponentName.styles.ts`

### Folder Structure
```
src/
  components/
    common/       # Reusable components
    cart/         # Cart-specific components
    voice/        # Voice-specific components
  screens/        # Screen components
  hooks/          # Custom hooks
  services/       # Business logic & API
  utils/          # Helper functions
  types/          # TypeScript types
  constants/      # App constants
  theme/          # Colors, typography, spacing
```

### Import Order
```typescript
// 1. React & React Native
import React from 'react';
import { View, Text } from 'react-native';

// 2. Third-party libraries
import { useNavigation } from '@react-navigation/native';

// 3. Local imports (absolute)
import { colors } from '@/theme';
import { CartItem } from '@/types';

// 4. Local imports (relative)
import { Button } from '../components/Button';
import styles from './HomeScreen.styles';
```

---

## 🧪 Testing

### Run Tests
```bash
npm test                 # Run all tests
npm test -- --watch      # Watch mode
npm test -- --coverage   # With coverage
```

### Writing Tests
```typescript
// Component.test.tsx
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Button title="Click me" onPress={() => {}} />);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button title="Click" onPress={onPress} />);
    
    fireEvent.press(getByText('Click'));
    expect(onPress).toHaveBeenCalled();
  });
});
```

---

## 🐛 Reporting Bugs

### Before Reporting
- Check existing issues
- Try latest version
- Reproduce the bug

### Bug Report Template
```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Device: [e.g. Pixel 6]
- OS: [e.g. Android 13]
- App Version: [e.g. 1.0.0]
```

---

## 💡 Feature Requests

### Feature Request Template
```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Any other context or screenshots.
```

---

## 📞 Questions & Support

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and discussions
- **Email**: [your-email@example.com]

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the project's license.

---

## 🙏 Thank You!

Your contributions make this project better. Thank you for taking the time to contribute!

---

**Happy Coding! 🚀**
