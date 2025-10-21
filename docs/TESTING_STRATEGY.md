# 🧪 Testing Strategy - VoiceCartApp

## 📋 Overview

Testing approach untuk ensure VoiceCart MVP berkualitas dan maintainable.

---

## 🎯 Testing Philosophy

**Quality over Quantity:**
- Focus on critical paths
- Test core business logic
- Don't over-test UI (for MVP)

**Testing Pyramid:**
```
        /\
       /E2E\      <- Few (Critical flows only)
      /------\
     /  INT   \   <- Some (API/Service integration)
    /----------\
   /   UNIT     \ <- Most (Pure functions, utilities)
  /--------------\
```

---

## 📊 Test Coverage Goals

### MVP Phase (Sprint 1-4):
- **Unit Tests**: 60% coverage (core logic)
- **Integration Tests**: 30% coverage (services)
- **E2E Tests**: 2-3 critical flows

### Post-MVP:
- **Unit Tests**: 80%+
- **Integration Tests**: 50%+
- **E2E Tests**: 5-10 flows

---

## 🧩 Unit Tests

**What to test:**
- ✅ Voice parsing logic (`parseVoiceInput`)
- ✅ Cart calculations (`calculateTotal`)
- ✅ Utility functions (`formatCurrency`, `generateId`)
- ✅ Custom hooks logic
- ✅ Redux/Context reducers

**Example:**
```typescript
// __tests__/utils/helpers.test.ts
describe('parseVoiceInput', () => {
  it('should parse product name and price', () => {
    const input = "Apel dua puluh ribu";
    const result = parseVoiceInput(input);
    expect(result).toEqual({
      product: "Apel",
      price: 20000
    });
  });
  
  it('should handle various number formats', () => {
    expect(parseVoiceInput("Jeruk 15000")).toEqual({
      product: "Jeruk",
      price: 15000
    });
  });
});
```

---

## 🔗 Integration Tests

**What to test:**
- ✅ Voice service with @react-native-voice
- ✅ AsyncStorage operations
- ✅ Cart context with persistence
- ✅ API calls (if any)

**Example:**
```typescript
// __tests__/services/VoiceService.test.ts
describe('VoiceService', () => {
  it('should start voice recognition', async () => {
    await VoiceService.start();
    expect(Voice.start).toHaveBeenCalledWith('id-ID');
  });
});
```

---

## 🌐 E2E Tests (Manual for MVP)

**Critical Flows:**
1. **Voice Input Flow**
   - Open app → Tap mic → Speak → Item added to cart
   
2. **Manual Input Flow**
   - Open app → Tap manual → Fill form → Add to cart
   
3. **Budget Tracking Flow**
   - Set budget → Add items → See budget decrease → Get warning

**Tool:** Manual testing on real device (Sprint 4)

**Post-MVP:** Detox or Appium for automation

---

## 📅 Testing Schedule

### Sprint 1 (Foundation):
- [ ] Setup Jest environment
- [ ] Write first test (example)
- [ ] Add test script to package.json

### Sprint 2 (Voice & Cart):
- [ ] Unit tests for `parseVoiceInput`
- [ ] Unit tests for cart calculations
- [ ] Integration test for voice service

### Sprint 3 (Storage):
- [ ] Integration tests for AsyncStorage
- [ ] Unit tests for cart persistence logic

### Sprint 4 (Polish):
- [ ] Manual E2E testing
- [ ] Bug fixes based on tests
- [ ] Final test run before release

---

## 🛠️ Tools

- **Unit/Integration:** Jest + React Native Testing Library
- **Mocking:** Jest mocks for Voice & AsyncStorage
- **E2E (Future):** Detox or Maestro
- **Coverage:** Jest coverage reports

---

## ✅ Definition of Done (Testing Perspective)

Feature is done when:
- ✅ Unit tests written & passing
- ✅ Integration tests (if applicable) passing
- ✅ Manual testing on device completed
- ✅ No critical bugs
- ✅ Code review passed

---

## 📝 Test Commands

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run watch mode
npm test -- --watch

# Run specific file
npm test helpers.test.ts
```

---

## 🎯 Priority (MVP)

**Must Have:**
- ✅ Voice parsing tests (critical!)
- ✅ Cart calculation tests
- ✅ Utility function tests

**Nice to Have:**
- Voice service integration test
- AsyncStorage integration test

**Post-MVP:**
- E2E automation
- Visual regression testing
