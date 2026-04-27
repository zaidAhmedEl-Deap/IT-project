# IT-project
project about gaming 


![GitHub repo size](https://img.shields.io/github/repo-size/zaidAhmedEl-Deap/IT-project)
![GitHub contributors](https://img.shields.io/github/contributors/zaidAhmedEl-Deap/IT-project)

## Table of Contents
1. [عن المشروع](#-عن-المشروع)
2. [قواعد التكويد (BEM)](#-قواعد-التكويد)
3. [نظام التصميم (Design System)](#-نظام-التصمييم)
4. [العناصر المحجوزة (Global IDs)](#-العناصر-المحجوزة)
5. [طريقة العمل للفريق (Git Workflow)](#-طريقة-العمل)

## 🛠 قواعد التكويد

### 1️⃣ منهجية BEM (CSS)
نلتزم تماماً بنظام `Block__Element--Modifier`:
- **Block**: العنصر المستقل (`.navbar`)
- **Element**: جزء من البلوك (`.navbar__link`)
- **Modifier**: حالة مختلقة (`.navbar__link--active`)

### 2️⃣ التسمية (Naming)
- الـ **Classes**: تُكتب بأسلوب `kebab-case` فقط.
- الـ **JavaScript Variables**: تُكتب بأسلوب `camelCase`.


## Design system

### الألوان الأساسية
| اللون | الكود (Hex) | الاستخدام |
| :--- | :--- | :--- |
| **Primary Dark** | `#1a1a1a` | خلفية الموقع الأساسية |
| **Neon Accent** | `#00ffcc` | الروابط، الأزرار، وتأثيرات الـ Hover |
| **Text White** | `#ffffff` | النصوص الرئيسية |

### الخطوط (Fonts)
- **Montserrat**: للعناوين (Headings) والأزرار.
- **Inter**: للنصوص والفقرات (Body Text).


## 🔑 العناصر المحجوزة (Global)

### الـ IDs البرمجية
- `layout-switcher`: الـ Select المسئول عن تبديل الـ Layout.
- `main-search-input`:
 حقل البحث (يتم توجيه الـ Focus عليه تلقائياً).

- `auth-container`
ده شايل اللوجن واللوج اوت

- `logged-in-view`: الحاوية الخاصة ببيانات المستخدم المسجل.
- `logged-out-view`: الحاوية الخاصة بزر تسجيل الدخول.

- `user-name-display`
ده بيظهر اليوز بتاعنا 

- `nav-logout-btn` 
ده زرار تسجيل الخروج

- `search-focus`
الاي دي ده يتعمل لل مدخل بتاع السيرش عشان نقدر نوصله بالجافا اسكريبت

- `dropdown-login-item`
ده في حاله الريسبونسف بتاعت الناف بار

- `dropdown-logout-item` 
ده لحاله اللوج اوت بتاعته الناف بار
### 🔄 نظام التبديل بين الـ Layouts
الموقع بيدعم نمطين للعرض، بيتم التبديل بينهم عن طريق تغيير كلاس الـ `<body>`:

1. **Horizontal Mode** (`.layout-horizontal`):
   - النمط الافتراضي.
   - الناف بار يكون في الأعلى.
   - السايد بار الجانبي يكون مخفي.

2. **Sidebar Mode** (`.layout-sidebar`):
   - الناف بار العلوي يختفي أو يتحول لشكل بسيط.
   - السايد بار الجانبي يظهر كعنصر تحكم رئيسي.

 **تنبيه للمبرمجين:** عند كتابة تنسيقات تخص الـ Layout، يجب البدء بكلاس الأب:
`.layout-name .component-name { ... }`


### الكلاسات المساعدة (Utility Classes)
- `.u-hidden`: يستخدم لإخفاء أي عنصر برمجياً (`display: none !important`).


##  طريقة العمل (Git Workflow)

1. قبل أن تبدأ، تأكد من سحب آخر تحديث:
   `git pull origin main`
2. أنشئ Branch جديد لمهمتك:
   `git checkout -b task/your-feature-name`
3. بعد الانتهاء، ارفع التغييرات:
   `git add .`
   `git commit -m "feat: وصف مختصر لما قمت به"`
   `git push origin task/your-feature-name`