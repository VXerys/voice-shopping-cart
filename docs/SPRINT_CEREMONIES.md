# 🎭 Sprint Ceremonies Guide - VoiceCartApp

## 📋 Overview

Sprint ceremonies are structured meetings/activities dalam Scrum untuk ensure transparency, collaboration, dan continuous improvement.

**Adapted untuk Solo Developer:** Ceremonies tetap dilakukan untuk build discipline & professional habits, tapi simplified & time-efficient!

---

## 🗓️ Sprint Ceremonies Overview

| Ceremony | When | Duration (Solo) | Purpose |
|----------|------|-----------------|---------|
| Sprint Planning | Monday AM | 30-60 min | Decide what to build this sprint |
| Daily Standup | Every morning | 5 min | Track daily progress |
| Sprint Review | Friday PM | 30 min | Demo what was built |
| Sprint Retrospective | Friday PM | 30 min | Learn & improve |

---

## 1️⃣ Sprint Planning

### 📅 When: Monday Morning (Start of Sprint)
### ⏱️ Duration: 30-60 minutes
### 🎯 Goal: Plan sprint backlog & commit to sprint goal

### Agenda:

#### Part 1: Sprint Goal (15 min)
```markdown
Questions to answer:
1. What is the main objective this sprint?
2. What value will we deliver?
3. What is success for this sprint?

Example Sprint 1 Goal:
"Establish solid foundation with navigation, theme, 
and basic screen layouts so development can move fast in Sprint 2"
```

#### Part 2: Backlog Selection (20 min)
```markdown
1. Review Product Backlog
   - What are the highest priority items?
   - What items align with sprint goal?

2. Select Sprint Backlog Items
   - Pick items that fit in 1 week
   - Consider dependencies
   - Don't over-commit!

3. Estimate Story Points
   - Use planning poker (even solo!)
   - 1 SP = 1-2 hours
   - 2 SP = 2-4 hours
   - 3 SP = 4-6 hours
   - 5 SP = 6-8 hours
   - 8 SP = too big, break down!
```

#### Part 3: Task Breakdown (15 min)
```markdown
For each backlog item:
1. Break into smaller tasks
2. Identify dependencies
3. Estimate time
4. Assign priority

Example:
Epic: Splash Screen (2 SP)
Tasks:
  - [ ] Create SplashScreen component (30 min)
  - [ ] Add logo asset (15 min)
  - [ ] Implement navigation after delay (30 min)
  - [ ] Test on device (30 min)
  Total: ~2 hours = 2 SP ✓
```

#### Part 4: Commitment (5 min)
```markdown
Questions:
1. Can I realistically complete this in 1 week?
2. Do I have all the knowledge/tools needed?
3. Are there any risks/blockers?

Commitment:
"I commit to completing [X] story points this sprint,
focused on [sprint goal]."
```

### 📝 Template for Sprint Planning:

```markdown
## Sprint X Planning Session

**Date:** ___/___/2025
**Sprint Duration:** Week X (Day X-Y)

### Sprint Goal:
[One clear sentence describing what you'll achieve]

### Sprint Backlog:

| Item | Story Points | Priority | Dependencies |
|------|-------------|----------|--------------|
| Task 1 | 2 SP | P0 | None |
| Task 2 | 3 SP | P0 | Task 1 |
| Task 3 | 2 SP | P1 | None |

**Total Committed SP:** ___ SP
**Expected Completion:** ___% (be realistic!)

### Risks & Mitigation:
- Risk 1: [description] → Mitigation: [plan]
- Risk 2: [description] → Mitigation: [plan]

### Success Criteria:
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

### Ready to Start? ✅
```

---

## 2️⃣ Daily Standup

### 📅 When: Every Morning (Same time daily)
### ⏱️ Duration: 5 minutes (strict!)
### 🎯 Goal: Stay focused & accountable

### The 3 Questions:

```markdown
1. What did I accomplish yesterday?
   → Be specific: "Implemented voice button component"
   
2. What will I work on today?
   → One clear goal: "Build voice service layer"
   
3. Any blockers or challenges?
   → If yes: document & plan to resolve
   → If no: just say "none"
```

### How to Do Solo Standup:

#### Option 1: Written Log (Recommended)
```markdown
Update SPRINT_TRACKING.md daily:

#### Day X: [Day of Week]
**Date:** ___/___/2025

**Yesterday:** [What you completed]
**Today:** [What you'll do]
**Blockers:** [Any issues]

**Mood:** 😊 Good / 😐 Okay / 😓 Struggling
```

#### Option 2: Voice Memo
- Record 1-min voice memo answering 3 questions
- Save in project folder /logs/standups/
- Good practice for articulating progress

#### Option 3: Accountability Partner
- Find fellow student/developer
- Daily 5-min call or text exchange
- Mutual accountability

### 🎯 Why Daily Standup Matters:

✅ **Prevents procrastination** - Daily commitment  
✅ **Tracks progress** - See if falling behind  
✅ **Identifies blockers early** - Fix before too late  
✅ **Builds discipline** - Professional habit  
✅ **Self-reflection** - Am I on track?

### 🚨 Red Flags to Watch:

```markdown
🚩 "Yesterday: Tried to fix bug" (3 days in a row)
   → Blocker! Need different approach or help

🚩 "Today: Will continue working on feature"
   → Not specific enough. What exactly?

🚩 "No progress yesterday"
   → Why? Valid reason or procrastination?

🚩 Blockers ignored day after day
   → Will derail sprint! Address immediately
```

---

## 3️⃣ Sprint Review

### 📅 When: Friday Afternoon (End of Sprint)
### ⏱️ Duration: 30 minutes
### 🎯 Goal: Demo what was built & gather feedback

### Agenda:

#### Part 1: Sprint Summary (5 min)
```markdown
Quick recap:
- Sprint goal: [was it achieved?]
- Story points: [X completed / Y committed]
- Features completed: [list]
- Features incomplete: [list with reasons]
```

#### Part 2: Demo (15 min)
```markdown
Show what you built:
1. Prepare demo script (what to show)
2. Record screen or take screenshots
3. Walk through each feature
4. Highlight key functionality
5. Show it working on real device

Demo Tips:
- Start with working build
- Show happy path first
- Then show edge cases
- Point out UX details
- Mention technical challenges solved
```

#### Part 3: Feedback Collection (5 min)
```markdown
Self-assessment:
1. What works well?
2. What needs improvement?
3. What surprised you?
4. What would users say?

If showing to others:
- Show to friend/family
- Ask: "Is this clear? Easy to use?"
- Document feedback
```

#### Part 4: Next Sprint Preview (5 min)
```markdown
Quick look ahead:
- What's coming in next sprint?
- Any carryover items?
- New priorities?
```

### 📝 Template for Sprint Review:

```markdown
## Sprint X Review

**Date:** ___/___/2025

### Sprint Goal: [goal]
**Achieved?** ☐ Yes ☐ Partially ☐ No

### Metrics:
- **Story Points Committed:** ___ SP
- **Story Points Completed:** ___ SP
- **Velocity:** ___%

### Completed Features:
1. ✅ Feature 1 - [brief description]
2. ✅ Feature 2 - [brief description]
3. ✅ Feature 3 - [brief description]

### Incomplete Features:
1. ❌ Feature X - [reason: ran out of time]
2. ❌ Feature Y - [reason: blocked by dependency]

### Demo:
- **Screenshots:** [link to screenshots folder]
- **Screen Recording:** [link to video]
- **Demo Notes:** [what works, what's impressive]

### Feedback Received:
- From self: [your assessment]
- From others: [if shown to anyone]

### Technical Highlights:
- Challenge overcome: [example]
- New skill learned: [example]
- Proud moment: [example]

### Areas for Improvement:
1. [Improvement 1]
2. [Improvement 2]

### Definition of Done Met?
- [ ] All completed features meet DoD
- [ ] Code merged to master
- [ ] Documentation updated
- [ ] No critical bugs

### Sprint Rating: ___/10

### Next Sprint Preview:
Focus: [brief description of Sprint X+1 goal]
```

---

## 4️⃣ Sprint Retrospective

### 📅 When: Friday Afternoon (After Sprint Review)
### ⏱️ Duration: 30 minutes
### 🎯 Goal: Learn from sprint & improve next one

### Agenda:

#### Part 1: Gather Data (5 min)
```markdown
Collect information:
- Sprint velocity (actual vs planned)
- Time spent per task
- Blockers encountered
- Mood/energy throughout sprint
```

#### Part 2: Generate Insights (15 min)

Use the **"Starfish" Retrospective Format:**

```markdown
1. ⭐ KEEP DOING (What went well)
   - What should we continue?
   - What gave us energy?
   - What was efficient?
   
   Examples:
   - "Daily standup at 9am worked great"
   - "Breaking tasks into 1-2 hour chunks"
   - "Testing on device every day"

2. 🚀 START DOING (New ideas)
   - What should we try?
   - What could improve things?
   - What's missing?
   
   Examples:
   - "Start writing tests alongside code"
   - "Review code before committing, not after"
   - "Take breaks every 2 hours"

3. 🛑 STOP DOING (What didn't work)
   - What drained energy?
   - What was waste of time?
   - What caused problems?
   
   Examples:
   - "Stop over-committing story points"
   - "Stop working late nights (less productive)"
   - "Stop skipping manual testing"

4. 🔼 MORE OF (What worked, but need more)
   - What was good but insufficient?
   - Where to increase effort?
   
   Examples:
   - "More time reading documentation"
   - "More code reviews (self-review longer)"
   - "More testing edge cases"

5. 🔽 LESS OF (What to reduce)
   - What was okay but too much?
   - Where to decrease effort?
   
   Examples:
   - "Less time in analysis paralysis"
   - "Less perfectionism on first iteration"
   - "Less multitasking"
```

#### Part 3: Decide on Actions (10 min)
```markdown
From insights, create 3-5 action items:

Action Item Format:
- [ ] **Action:** [Specific, actionable item]
      **Why:** [Reason/benefit]
      **How:** [Concrete steps]
      **When:** [Next sprint]
      **Success Metric:** [How to measure]

Example:
- [ ] **Action:** Write unit tests for all utility functions
      **Why:** Caught 2 bugs late that tests would have caught early
      **How:** Write test first, then implementation (TDD)
      **When:** During Sprint 2 development
      **Success Metric:** 60% test coverage by end of Sprint 2
```

### 📝 Template for Sprint Retrospective:

```markdown
## Sprint X Retrospective

**Date:** ___/___/2025

### Sprint Metrics:
- Velocity: ___%
- Completed: ___ / ___ SP
- Blockers: ___ (number)
- Avg hours per day: ___
- Overall energy: 😊 High / 😐 Medium / 😓 Low

### ⭐ KEEP DOING (Continue):
1. ___
2. ___
3. ___

### 🚀 START DOING (New):
1. ___
2. ___
3. ___

### 🛑 STOP DOING (Remove):
1. ___
2. ___
3. ___

### 🔼 MORE OF (Increase):
1. ___
2. ___

### 🔽 LESS OF (Decrease):
1. ___
2. ___

### 📚 Key Learnings:

**Technical:**
- Learned: ___
- Struggled with: ___
- Mastered: ___

**Process:**
- Estimation accuracy: ___%
- Time management: [notes]
- Focus/productivity: [notes]

**Personal Growth:**
- Strengths demonstrated: ___
- Areas to improve: ___
- Confidence level: [1-10]: ___

### 🎯 Action Items for Sprint X+1:

1. [ ] **Action 1**
   - Why: ___
   - How: ___
   - Success metric: ___

2. [ ] **Action 2**
   - Why: ___
   - How: ___
   - Success metric: ___

3. [ ] **Action 3**
   - Why: ___
   - How: ___
   - Success metric: ___

### Sprint Adjustments:
- Story points capacity: ___ → ___ SP
- Daily standup time: [keep / adjust]
- Testing approach: [changes]
- Break frequency: [changes]

### Sprint Rating: ___/10

### Energy Level Going into Next Sprint:
😊 High - Ready to go!
😐 Medium - Need a good weekend rest
😓 Low - Consider lighter sprint or break

### Notes:
[Any other observations, thoughts, feelings]
```

---

## 🎓 Solo Developer Best Practices

### 1. Don't Skip Ceremonies
```markdown
Temptation: "I'm solo, I can skip this"
Reality: Ceremonies build discipline & clarity

Minimum: Do all 4 ceremonies every sprint
Ideal: Make them habit, not chore
```

### 2. Use Templates
```markdown
Create templates for each ceremony
→ Faster to complete
→ Don't forget important parts
→ Easy to compare sprints
```

### 3. Track Over Time
```markdown
Keep all sprint logs
→ See improvement over time
→ Learn from patterns
→ Portfolio evidence!
```

### 4. Be Honest
```markdown
Don't inflate numbers
Don't hide struggles
Document real challenges
→ This is LEARNING, not performance review
```

### 5. Find Accountability
```markdown
Share sprint reviews with:
- Fellow students
- Online communities
- Mentors
- GitHub (public commits)

Knowing someone might see = motivation!
```

---

## 📊 Ceremony Tracking

Track your ceremony completion:

| Sprint | Planning | Standup (days) | Review | Retro | Total |
|--------|---------|---------------|--------|-------|-------|
| 1      | ☐       | ☐☐☐☐☐ (0/5)  | ☐      | ☐     | 0/7   |
| 2      | ☐       | ☐☐☐☐☐ (0/5)  | ☐      | ☐     | 0/7   |
| 3      | ☐       | ☐☐☐☐☐ (0/5)  | ☐      | ☐     | 0/7   |
| 4      | ☐       | ☐☐☐☐☐ (0/5)  | ☐      | ☐     | 0/7   |

**Goal:** 100% ceremony completion!

---

## 💡 Remember

> **"Ceremonies aren't overhead. They're the framework that keeps you on track, learning, and improving every sprint."**

Even solo, these rituals:
- ✅ Keep you accountable
- ✅ Force reflection
- ✅ Build professional habits
- ✅ Create documentation trail
- ✅ Improve estimation skills
- ✅ Celebrate progress!

**Do them consistently = See results!** 🚀
