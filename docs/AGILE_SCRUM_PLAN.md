# 🏃 Agile Scrum Plan - VoiceCartApp

## 📊 Project Overview

**Project:** VoiceCartApp - Voice-Based Shopping Cart Application  
**Duration:** 4 Weeks (1 Month)  
**Sprint Duration:** 1 Week per Sprint  
**Total Sprints:** 4  
**Team Size:** 1 Developer (Solo)  
**Methodology:** Agile Scrum (Adapted for Solo Developer)  

---

## 🎯 Product Vision

**Vision Statement:**
> "Membuat aplikasi pencatatan belanja yang inovatif dengan voice recognition untuk memudahkan pengguna mencatat produk dan harga dengan cepat menggunakan suara mereka."

**Success Criteria:**
- ✅ User dapat menambah item via voice (Bahasa Indonesia)
- ✅ User dapat melihat list belanjaan
- ✅ User dapat mengedit/hapus item
- ✅ Data tersimpan secara persisten
- ✅ UI/UX intuitif dan menarik
- ✅ App stabil tanpa critical bugs

---

## 📋 Product Backlog (Prioritized)

### **Epic 1: Foundation & Setup** (Priority: P0)
- App icon & branding
- Splash screen
- Navigation setup
- UI theme implementation
- Basic project structure

### **Epic 2: Core UI Components** (Priority: P0)
- Home screen layout
- Cart screen layout
- Voice button component
- Cart item component
- Empty state component

### **Epic 3: Voice Recognition** (Priority: P0)
- Voice recognition integration
- Voice service layer
- Voice processing (parse product + price)
- Voice error handling

### **Epic 4: Cart Management** (Priority: P0)
- Cart state management (Context API)
- CRUD operations (Add/Edit/Delete)
- Cart persistence (AsyncStorage)
- Cart summary & calculations

### **Epic 5: Manual Input** (Priority: P1)
- Manual input form
- Input validation
- Voice/Manual mode toggle

### **Epic 6: Polish & Enhancement** (Priority: P2)
- Animations
- Error handling
- Loading states
- Performance optimization

---

## 📅 Sprint Planning

---

## 🏃‍♂️ **SPRINT 1: Foundation & Core UI**

**Sprint Goal:**  
> "Establish solid foundation with navigation, theme, and basic screen layouts"

**Duration:** Week 1 (Day 1-7)  
**Story Points:** 21 points  
**Focus:** Setup + UI Foundation  

### **Sprint Backlog:**

#### **Day 1: Monday** (Planning Day)
**Total: 3 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| ✅ Sprint Planning meeting (solo: 30 min) | - | - | - |
| ✅ Setup development environment check | 1 | - | Done |
| ✅ App icon update & integration | 2 | `feature/icon-update` | Done |
| Daily standup (self-reflection: 5 min) | - | - | - |

**Deliverables:**
- [x] New app icons displayed on device
- [x] Development environment ready

---

#### **Day 2: Tuesday** 
**Total: 3 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Fix TypeScript configuration | 1 | `chore/typescript-config` | Todo |
| Create & implement splash screen | 2 | `feature/splash-screen` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Splash screen displays on app launch
- [ ] No TypeScript warnings

**Acceptance Criteria:**
- Splash screen shows logo for 2-3 seconds
- Smooth transition to home screen
- Works on Android (& iOS if applicable)

---

#### **Day 3: Wednesday**
**Total: 5 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Setup React Navigation | 3 | `feature/navigation` | Todo |
| Create navigation structure (Stack) | 2 | `feature/navigation` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Navigation between Home & Cart screens works
- [ ] Navigation types defined in TypeScript

**Acceptance Criteria:**
- Can navigate from Home to Cart
- Back button works correctly
- Type-safe navigation with TypeScript

---

#### **Day 4: Thursday**
**Total: 5 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Implement complete theme system | 2 | `feature/ui-theme` | Todo |
| Create reusable Button component | 1 | `feature/ui-theme` | Todo |
| Create reusable Card component | 1 | `feature/ui-theme` | Todo |
| Create Input component | 1 | `feature/ui-theme` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Theme applied consistently across app
- [ ] Reusable components working

**Acceptance Criteria:**
- Colors match design (purple, dark theme)
- All components use theme system
- Components are type-safe

---

#### **Day 5: Friday**
**Total: 5 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Build Home screen layout | 3 | `feature/home-screen` | Todo |
| Build Cart screen layout | 2 | `feature/cart-screen` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Home screen UI complete (without functionality)
- [ ] Cart screen UI complete (without data)

**Acceptance Criteria:**
- Home screen has header, voice button area, cart preview
- Cart screen has list area, summary section
- Responsive layout, looks good on various screen sizes

---

#### **Weekend: Sprint Review & Retrospective**

**Saturday Morning:**
- [ ] Sprint Review (30 min)
  - Demo all completed features
  - Take screenshots/video
  - Update documentation

- [ ] Sprint Retrospective (30 min)
  - What went well?
  - What could be improved?
  - Action items for next sprint

**Sunday:**
- [ ] Rest & optional catch-up
- [ ] Prepare for Sprint 2

---

### **Sprint 1 - Definition of Done:**
- [ ] All tasks completed & tested
- [ ] All PRs merged to master
- [ ] No critical bugs
- [ ] Code reviewed (self-review)
- [ ] Documentation updated
- [ ] App runs without crashes

---

## 🏃‍♂️ **SPRINT 2: Voice Recognition**

**Sprint Goal:**  
> "Implement voice recognition functionality and voice input UI components"

**Duration:** Week 2 (Day 8-14)  
**Story Points:** 21 points  
**Focus:** Voice Feature (Core MVP Feature)  

### **Sprint Backlog:**

#### **Day 8: Monday** (Planning Day)
**Total: 3 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Sprint 2 Planning | - | - | Todo |
| Install voice recognition library | 1 | `chore/voice-library-setup` | Todo |
| Setup permissions (Android/iOS) | 2 | `chore/voice-library-setup` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Voice library installed & configured
- [ ] Microphone permissions working

---

#### **Day 9: Tuesday**
**Total: 5 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Create VoiceButton component | 2 | `feature/voice-button` | Todo |
| Create VoiceIndicator component | 2 | `feature/voice-indicator` | Todo |
| Add voice examples UI | 1 | `feature/voice-examples` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Voice button with mic icon works
- [ ] Recording indicator animates
- [ ] Voice examples displayed

**Acceptance Criteria:**
- Button shows different states (idle, recording, processing)
- Animation plays during recording
- Examples help users understand voice input format

---

#### **Day 10: Wednesday**
**Total: 5 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Build voice recognition service | 3 | `feature/voice-service` | Todo |
| Create useVoiceRecognition hook | 2 | `feature/voice-hook` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Voice service can start/stop recording
- [ ] Hook provides voice state & controls
- [ ] Transcription returns text

**Acceptance Criteria:**
- Service starts recording on button press
- Service stops after timeout or manual stop
- Returns transcribed text in Bahasa Indonesia
- Handles errors gracefully

---

#### **Day 11: Thursday**
**Total: 5 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Implement voice text parsing | 3 | `feature/voice-processing` | Todo |
| Extract product name from voice | 1 | `feature/voice-processing` | Todo |
| Extract price from voice | 1 | `feature/voice-processing` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Parser extracts product & price from text
- [ ] Handles various input formats

**Acceptance Criteria:**
- "mangga lima puluh ribu" → {name: "mangga", price: 50000}
- "apel 3 ribu" → {name: "apel", price: 3000}
- "jeruk dua puluh lima ribu" → {name: "jeruk", price: 25000}
- Handles edge cases (no price mentioned, unclear format)

---

#### **Day 12: Friday**
**Total: 3 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Add voice error handling | 2 | `fix/voice-error-handling` | Todo |
| Integration testing (voice → parse) | 1 | - | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Error messages for timeout
- [ ] Error messages for permission denied
- [ ] End-to-end voice input works

**Acceptance Criteria:**
- User sees helpful error messages
- App doesn't crash on errors
- Can retry after error

---

#### **Weekend: Sprint Review & Retrospective**

**Saturday:**
- [ ] Sprint 2 Review
  - Demo voice recording
  - Show parsing results
  - Video recording for portfolio

- [ ] Sprint 2 Retrospective
  - Voice recognition challenges?
  - Parsing accuracy?
  - Improvements needed?

**Sunday:**
- [ ] Rest
- [ ] Optional: Improve voice parsing accuracy

---

### **Sprint 2 - Definition of Done:**
- [ ] Can record voice in Bahasa Indonesia
- [ ] Can parse simple product + price
- [ ] Errors handled gracefully
- [ ] All PRs merged
- [ ] Manual testing passed

---

## 🏃‍♂️ **SPRINT 3: Cart Management & Storage**

**Sprint Goal:**  
> "Implement cart functionality with full CRUD operations and data persistence"

**Duration:** Week 3 (Day 15-21)  
**Story Points:** 21 points  
**Focus:** Cart Feature (Core MVP Feature)  

### **Sprint Backlog:**

#### **Day 15: Monday** (Planning Day)
**Total: 3 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Sprint 3 Planning | - | - | Todo |
| Setup Cart Context API | 2 | `feature/cart-context` | Todo |
| Define cart state structure | 1 | `feature/cart-context` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] CartContext & CartProvider setup
- [ ] useCart hook created
- [ ] Cart state types defined

---

#### **Day 16: Tuesday**
**Total: 5 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Implement Add to Cart | 2 | `feature/cart-crud` | Todo |
| Implement Remove from Cart | 1 | `feature/cart-crud` | Todo |
| Implement Update Cart Item | 2 | `feature/cart-crud` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] addItem() function works
- [ ] removeItem() function works
- [ ] updateItem() function works

**Acceptance Criteria:**
- Voice input adds item to cart
- Can delete item from cart
- Can edit item quantity/price
- UI updates immediately

---

#### **Day 17: Wednesday**
**Total: 5 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Build CartItem component | 2 | `feature/cart-item-component` | Todo |
| Build CartList component | 1 | `feature/cart-list` | Todo |
| Build EmptyCart component | 1 | `feature/empty-cart` | Todo |
| Build CartSummary component | 1 | `feature/cart-summary` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Cart items display correctly
- [ ] Empty state shows when cart is empty
- [ ] Summary shows total items & price

**Acceptance Criteria:**
- Each cart item shows name, price, quantity
- Can delete item from list
- Empty cart shows helpful message
- Total calculation is correct

---

#### **Day 18: Thursday**
**Total: 5 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Create AsyncStorage service | 2 | `feature/storage-service` | Todo |
| Implement save cart to storage | 2 | `feature/cart-persistence` | Todo |
| Implement load cart from storage | 1 | `feature/cart-persistence` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Cart saves automatically
- [ ] Cart loads on app start
- [ ] Data persists after app restart

**Acceptance Criteria:**
- Add items → Close app → Reopen app → Items still there
- Storage service handles errors
- Cart syncs with storage on every change

---

#### **Day 19: Friday**
**Total: 3 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Integration: Voice → Cart | 2 | - | Todo |
| Cart screen polishing | 1 | - | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Full flow works: Voice → Parse → Add to Cart
- [ ] Cart screen fully functional
- [ ] All CRUD operations tested

**Acceptance Criteria:**
- Say "mangga lima puluh ribu" → Appears in cart
- Can view all items in cart screen
- Can edit/delete items
- Data persists

---

#### **Weekend: Sprint Review & Retrospective**

**Saturday:**
- [ ] Sprint 3 Review
  - Demo full voice-to-cart flow
  - Show data persistence
  - Test on real device

- [ ] Sprint 3 Retrospective
  - Cart state management working well?
  - Storage issues?
  - Performance concerns?

**Sunday:**
- [ ] Rest
- [ ] Fix any critical bugs found

---

### **Sprint 3 - Definition of Done:**
- [ ] Complete voice-to-cart flow working
- [ ] All CRUD operations functional
- [ ] Data persists after app restart
- [ ] No critical bugs
- [ ] All PRs merged

---

## 🏃‍♂️ **SPRINT 4: Manual Input & Polish**

**Sprint Goal:**  
> "Add manual input option and polish the app for production readiness"

**Duration:** Week 4 (Day 22-28)  
**Story Points:** 18 points  
**Focus:** Polish & MVP Completion  

### **Sprint Backlog:**

#### **Day 22: Monday** (Planning Day)
**Total: 3 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Sprint 4 Planning | - | - | Todo |
| Create manual input UI | 2 | `feature/manual-input-ui` | Todo |
| Add input mode toggle | 1 | `feature/input-mode-toggle` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Manual input form working
- [ ] Toggle between voice/manual modes

---

#### **Day 23: Tuesday**
**Total: 3 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Implement form validation | 2 | `feature/input-validation` | Todo |
| Manual input integration | 1 | - | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Form validates product name & price
- [ ] Manual input adds to cart

**Acceptance Criteria:**
- Required fields validated
- Price must be numeric
- Error messages clear
- Manual add works same as voice

---

#### **Day 24: Wednesday**
**Total: 4 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Add UI animations | 2 | `feature/animations` | Todo |
| Add loading states | 1 | `feature/loading-states` | Todo |
| Implement error boundaries | 1 | `feature/error-handling` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] Smooth animations for transitions
- [ ] Loading indicators during processing
- [ ] Error boundaries catch crashes

---

#### **Day 25: Thursday**
**Total: 4 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Comprehensive manual testing | 2 | - | Todo |
| Bug fixes | 2 | `fix/bug-fixes` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] All features tested end-to-end
- [ ] Critical bugs fixed

**Test Checklist:**
- [ ] Voice input works consistently
- [ ] Manual input works
- [ ] Cart operations (add/edit/delete) work
- [ ] Data persists
- [ ] Navigation works
- [ ] No crashes
- [ ] Performance is good

---

#### **Day 26: Friday**
**Total: 4 SP**

| Task | Story Points | Branch | Status |
|------|--------------|--------|--------|
| Performance optimization | 2 | `refactor/performance` | Todo |
| Code cleanup & refactoring | 1 | - | Todo |
| Documentation update | 1 | `docs/update` | Todo |
| Daily standup | - | - | - |

**Deliverables:**
- [ ] App performs smoothly
- [ ] Code is clean & maintainable
- [ ] README updated

---

#### **Weekend: Final Review & Release Prep**

**Saturday:**
- [ ] Sprint 4 Review
- [ ] Final demo of complete app
- [ ] Project Retrospective (entire month)
  - What went well?
  - What was challenging?
  - Lessons learned?
  - Future improvements?

**Sunday:**
- [ ] Create demo video
- [ ] Prepare release notes
- [ ] Optional: Submit to Play Store (if ready)

---

### **Sprint 4 - Definition of Done:**
- [ ] MVP complete & functional
- [ ] All features working
- [ ] No critical bugs
- [ ] Performance acceptable
- [ ] Documentation complete
- [ ] Ready for demo/release

---

## 📊 Sprint Metrics & Tracking

### **Velocity Tracking**

| Sprint | Planned SP | Completed SP | Velocity | Notes |
|--------|-----------|--------------|----------|-------|
| Sprint 1 | 21 | - | - | Foundation |
| Sprint 2 | 21 | - | - | Voice |
| Sprint 3 | 21 | - | - | Cart |
| Sprint 4 | 18 | - | - | Polish |
| **Total** | **81** | - | - | 4 weeks |

---

## 📋 Daily Standup Template (Self-Reflection)

**Duration:** 5 minutes every morning

**Questions:**
1. **What did I complete yesterday?**
   - List completed tasks

2. **What will I work on today?**
   - Today's focus & goals

3. **Any blockers or challenges?**
   - Technical issues
   - Need to learn something new
   - Stuck on problem

**Action:** Write answers in notebook or docs/DAILY_LOG.md

---

## 🎯 Story Point Reference

### **Story Point Scale:**

| Points | Effort | Time | Example |
|--------|--------|------|---------|
| 1 | Trivial | 0.5-1h | Fix typo, small config change |
| 2 | Easy | 2-3h | Simple component, basic feature |
| 3 | Medium | 4-6h | Complex component, service layer |
| 5 | Hard | 1 day | Feature with multiple parts |
| 8 | Very Hard | 1.5-2 days | Complex feature, integration |
| 13 | Epic | 3+ days | Break down into smaller stories |

---

## ✅ Definition of Done (DoD)

Setiap task dianggap selesai jika:

**Code Quality:**
- [ ] Code works as expected
- [ ] No TypeScript errors
- [ ] Follows code style guide
- [ ] No console errors

**Testing:**
- [ ] Manually tested on device
- [ ] All acceptance criteria met
- [ ] No regressions in existing features

**Documentation:**
- [ ] Code comments (if complex logic)
- [ ] README updated (if needed)
- [ ] CHANGELOG updated

**Git & PR:**
- [ ] Committed with conventional commit message
- [ ] Pushed to feature branch
- [ ] PR created & reviewed (self-review)
- [ ] PR merged to master
- [ ] Branch deleted after merge

---

## 🚨 Risk Management

### **Identified Risks:**

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Voice recognition accuracy low | High | Medium | - Test with multiple voices<br>- Provide manual fallback<br>- Improve parsing logic |
| Performance issues | Medium | Low | - Profile early<br>- Optimize renders<br>- Use memo/callback |
| Scope creep | High | High | - Stick to sprint backlog<br>- Move extras to backlog<br>- Focus on MVP |
| Technical blockers | Medium | Medium | - Google/Stack Overflow<br>- Check documentation<br>- Ask in communities |
| Time management | High | High | - Use time tracking<br>- Daily standups<br>- Adjust sprint backlog if needed |

---

## 📈 Success Metrics

### **Sprint-level Metrics:**

**Track these every sprint:**
- [ ] Sprint velocity (story points completed)
- [ ] Number of bugs found
- [ ] Number of PRs merged
- [ ] Code coverage (if writing tests)
- [ ] Sprint goal achieved? (Yes/No)

### **Project-level Metrics:**

**Track at end of month:**
- [ ] Total features completed
- [ ] Total bugs fixed
- [ ] Lines of code written
- [ ] App performance metrics
- [ ] User satisfaction (if beta testing)

---

## 🎓 Learning Goals

**Skills to develop during project:**
- [ ] React Native best practices
- [ ] Voice recognition integration
- [ ] State management (Context API)
- [ ] AsyncStorage & data persistence
- [ ] Git workflow & branching
- [ ] Agile/Scrum methodology
- [ ] Project management

---

## 📚 Resources

**During Development:**
- React Native Docs: https://reactnative.dev
- React Navigation: https://reactnavigation.org
- Voice Recognition: @react-native-voice/voice docs
- Scrum Guide: https://scrumguides.org
- Git Flow: https://www.atlassian.com/git/tutorials

---

## 📝 Sprint Templates

### **Sprint Planning Template:**
```markdown
## Sprint X Planning

**Sprint Goal:** [One sentence goal]

**Sprint Duration:** [Start Date] - [End Date]

**Team Capacity:** [Hours available]

**Sprint Backlog:**
- [ ] Story 1 (SP)
- [ ] Story 2 (SP)
- [ ] Story 3 (SP)

**Total Story Points:** X SP
```

### **Sprint Review Template:**
```markdown
## Sprint X Review

**Date:** [Date]

**Sprint Goal:** [Goal]
**Achieved:** [Yes/No]

**Completed Stories:**
- [x] Story 1
- [x] Story 2

**Incomplete Stories:**
- [ ] Story 3 (reason)

**Demo:**
- [Screenshots/Video]

**Feedback:**
- [Notes]
```

### **Sprint Retrospective Template:**
```markdown
## Sprint X Retrospective

**Date:** [Date]

**What went well? ✅**
- Item 1
- Item 2

**What could be improved? 🔄**
- Item 1
- Item 2

**Action Items for Next Sprint: 🎯**
- [ ] Action 1
- [ ] Action 2

**Key Learnings: 📚**
- Learning 1
- Learning 2
```

---

## 🎉 Project Completion Checklist

**End of 4 Sprints:**
- [ ] All MVP features completed
- [ ] App tested on real devices
- [ ] Documentation complete
- [ ] Demo video recorded
- [ ] Screenshots taken
- [ ] README polished
- [ ] CHANGELOG created
- [ ] Code pushed to GitHub
- [ ] Optional: Play Store submission
- [ ] Celebrate! 🎊

---

**Good luck with your 4-week Agile Scrum journey! 🚀**

**Remember:**
- Stay focused on sprint goals
- Don't skip daily standups (even solo)
- Review & retrospect every sprint
- Adjust backlog as needed
- Have fun building! 😊

---

**Last Updated:** October 21, 2025  
**Project:** VoiceCartApp  
**Methodology:** Agile Scrum (Solo Adapted)  
**Duration:** 4 Weeks | 4 Sprints
