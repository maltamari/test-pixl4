# Awards Section - Refactored

## 📁 Component Structure

```
awards/
├── AwardsSection.tsx       # Main component (orchestrator)
├── AwardsTableHeader.tsx   # Table column headers
├── AwardsList.tsx          # List wrapper with hover state
└── AwardRow.tsx            # Individual award row

icons/
└── StarIcon.tsx            # Star icon component

constants/
└── awards.constants.ts     # Awards data and configuration
```

## 🎯 Architecture

### Component Hierarchy

```
AwardsSection (Main)
├── SectionHeader (Shared)
├── AwardsTableHeader
│   └── Header columns (Project, Year, Award)
└── AwardsList
    └── AwardRow (×5)
        ├── Background slide animation
        ├── StarIcon
        ├── Project name
        ├── Year
        └── Award name
```

## 📦 Key Improvements

### Before (Original)
```typescript
// Single file: ~180 lines
// All logic inline
// Hardcoded headers
// Repeated classes
```

### After (Refactored)
```typescript
// Main component: ~35 lines
// 5 focused components
// Centralized constants
// Reusable pieces
```

**Code Reduction:** ~80% in main component

## 🔧 Components Breakdown

### 1. AwardsSection.tsx (Main)
**Purpose:** Orchestrate the section  
**Lines:** ~35  
**Responsibilities:**
- Use `SectionHeader`
- Render table structure
- Manage scroll reveal

### 2. AwardsTableHeader.tsx
**Purpose:** Column headers  
**Lines:** ~30  
**Responsibilities:**
- Render column headers
- Handle alignment
- Dynamic colSpan

### 3. AwardsList.tsx
**Purpose:** Manage hover state  
**Lines:** ~25  
**Responsibilities:**
- Track hovered award
- Map through awards
- Pass hover state to rows

### 4. AwardRow.tsx
**Purpose:** Individual award row  
**Lines:** ~60  
**Responsibilities:**
- Background slide animation
- Display award data
- Handle hover interactions
- Color transitions

### 5. StarIcon.tsx
**Purpose:** Award star icon  
**Lines:** ~20  
**Responsibilities:**
- SVG star component
- Hover color change
- Accessible

## 📊 Data Structure

### Award Interface
```typescript
interface Award {
  id: string;
  project: string;
  year: string;
  award: string;
}
```

### Table Header
```typescript
interface TableHeader {
  label: string;
  colSpan: number;
  align?: 'left' | 'center' | 'right';
}
```

## 📝 Usage

### Basic Usage
```typescript
import AwardsSection from '@/components/awards/AwardsSection';

export default function Page() {
  return <AwardsSection />;
}
```

### Adding New Award

Edit `constants/awards.constants.ts`:

```typescript
export const AWARDS_DATA: Award[] = [
  // ... existing awards
  {
    id: '6',
    project: 'NEW PROJECT',
    year: '2026',
    award: 'YOUR AWARD NAME',
  },
];
```

### Customizing Table Headers

```typescript
export const AWARDS_TABLE_HEADERS = [
  { label: 'Work :', colSpan: 5 },
  { label: 'Date :', colSpan: 3, align: 'center' },
  { label: 'Recognition :', colSpan: 4, align: 'right' },
];
```

## 🎨 Styling

### Grid Layout
```css
Total: 12 columns
├─ Project: 5 columns (left-aligned)
├─ Year: 3 columns (center-aligned)
└─ Award: 4 columns (right-aligned)
```

### Hover Animation
```
Default State:
- Background: transparent
- Text: black/gray
- Scale-Y: 0 (hidden)

Hover State:
- Background: black (slides from bottom)
- Text: white
- Scale-Y: 100 (visible)
- Duration: 700ms
```

### Color Transitions
```typescript
Project:  black → white
Year:     gray-500 → white
Award:    gray-400 → white
Star:     black → white

Duration: 500ms
```

## ✨ Features

### Background Animation
- ✅ Slides from bottom to top
- ✅ `origin-bottom` for animation
- ✅ `scale-y-0` to `scale-y-100`
- ✅ 700ms smooth transition
- ✅ `ease-out` timing

### Text Transitions
- ✅ All text changes color on hover
- ✅ 500ms transition
- ✅ Synchronized with background

### Star Icon
- ✅ SVG for crisp rendering
- ✅ Matches text color
- ✅ Smooth transition

### Responsive
- ✅ Adjusts text sizes on mobile
- ✅ Maintains grid proportions
- ✅ Readable on all screens

## 🎯 Animation Breakdown

### Timeline

```
User hovers over row:

0ms:
├─ Background: scale-y-0 (at bottom)
└─ Text: original colors

200ms:
├─ Background: scale-y-50 (halfway)
└─ Text: transitioning colors

500ms:
├─ Background: scale-y-75
└─ Text: white

700ms:
├─ Background: scale-y-100 (full height)
└─ Text: white (complete)
```

### CSS Classes

```typescript
// Background animation
className={`
  absolute inset-0 
  origin-bottom           // Animation starts from bottom
  bg-black 
  transition-transform 
  duration-700           // 700ms animation
  ease-out              // Smooth deceleration
  ${isHovered ? 'scale-y-100' : 'scale-y-0'}
`}

// Text transitions
className={`
  transition-colors 
  duration-500          // 500ms color change
  ${isHovered ? 'text-white' : 'text-black'}
`}
```

## 🔄 Comparison with Other Sections

| Feature | Services | Work | Awards |
|---------|----------|------|--------|
| **Header** | SectionHeader ✅ | SectionHeader ✅ | SectionHeader ✅ |
| **Layout** | List | Grid | Table |
| **Components** | 6 | 3 | 5 |
| **Animation** | Hover effects | Stacked cards | Slide background |
| **Hover Effect** | Image + clip-path | None | Background slide |

## ✅ Best Practices Applied

### 1. Component Separation
- ✅ Single responsibility
- ✅ Reusable row component
- ✅ Isolated hover logic
- ✅ Clean prop interfaces

### 2. Constants
- ✅ All awards data centralized
- ✅ Easy to add/remove awards
- ✅ Type-safe interfaces
- ✅ Configurable headers

### 3. Animations
- ✅ Smooth transitions
- ✅ Proper timing functions
- ✅ origin-bottom for slide effect
- ✅ Synchronized colors

### 4. TypeScript
- ✅ Full type coverage
- ✅ Proper interfaces
- ✅ Type-safe props

## 🎨 Customization Guide

### Change Column Widths

```typescript
// In constants/awards.constants.ts
export const AWARDS_TABLE_HEADERS = [
  { label: 'Project :', colSpan: 6 },  // Wider project
  { label: 'Year :', colSpan: 2 },     // Narrower year
  { label: 'Award :', colSpan: 4 },
];

// Update AwardRow.tsx accordingly:
<div className="col-span-6">  // Was col-span-5
<div className="col-span-2">  // Was col-span-3
<div className="col-span-4">  // Same
```

### Change Animation Speed

```typescript
// In AwardRow.tsx

// Faster background
duration-500  // Was duration-700

// Faster text
duration-300  // Was duration-500
```

### Change Animation Direction

```typescript
// Slide from top instead of bottom
origin-top      // Was origin-bottom
scale-y-100     // Start at top
```

### Add Border on Hover

```typescript
// In AwardRow.tsx
<div className={`
  border-l-4 
  ${isHovered ? 'border-white' : 'border-transparent'}
  transition-all duration-500
`}>
```

### Change Background Color

```typescript
// In AwardRow.tsx
bg-blue-600     // Instead of bg-black
bg-gradient-to-r from-blue-600 to-purple-600  // Gradient
```

## 🐛 Troubleshooting

### Animation not smooth
**Solution:** Check `transition-transform duration-700 ease-out`

### Text doesn't change color
**Solution:** Verify `transition-colors duration-500`

### Background doesn't slide
**Solution:** Ensure `origin-bottom` is set

### Headers not aligned
**Solution:** Check `colSpan` values total to 12

## 📦 Files Structure

```
components/awards/
├── AwardsSection.tsx       (35 lines)
├── AwardsTableHeader.tsx   (30 lines)
├── AwardsList.tsx          (25 lines)
└── AwardRow.tsx            (60 lines)

components/icons/
└── StarIcon.tsx            (20 lines)

constants/
└── awards.constants.ts     (80 lines)

Total: ~250 lines (vs original ~180 lines)
But much better organized!
```

## 🎨 Design Tokens

```typescript
// Colors
Background: black (on hover)
Project: black → white
Year: gray-500 → white
Award: gray-400 → white
Star: black → white

// Spacing
Row Padding: py-8 (md:py-10)
Gap: gap-4
Border: border-b border-gray-200

// Typography
Project: text-xl (md:text-xl)
Year: text-lg (md:text-xl)
Award: text-base (md:text-lg lg:text-xl)
Headers: text-sm (md:text-xl)

// Animations
Background: duration-700 ease-out
Text: duration-500
Origin: bottom
```

## 💡 Advanced Patterns

### Pattern 1: Stagger Animation

```typescript
// In AwardsList.tsx
{awards.map((award, index) => (
  <AwardRow
    delay={index * 50}  // Stagger by 50ms
  />
))}

// In AwardRow.tsx
style={{
  transitionDelay: `${delay}ms`
}}
```

### Pattern 2: Click Handler

```typescript
// In AwardRow.tsx
<div
  onClick={() => window.open(award.link, '_blank')}
  className="cursor-pointer"
>
```

### Pattern 3: Active State

```typescript
const [activeId, setActiveId] = useState<string | null>(null);

<AwardRow
  isActive={activeId === award.id}
  onClick={() => setActiveId(award.id)}
/>
```

---

**Awards section is clean, animated, and production-ready! 🏆**
