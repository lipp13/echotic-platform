# 🎫 EchoTic - Premium Concert Ticket Booking Platform

![EchoTic Banner](https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop)

EchoTic adalah platform pemesanan tiket konser musik modern dengan konsep **premium concert experience** yang menggabungkan estetika **"Concert Night / Neon Stage Light"** dan **"Festival Poster Art"**.

Project ini dirancang untuk menghadirkan pengalaman digital yang menyerupai atmosfer konser asli melalui visual neon, layout editorial, animasi interaktif, dan sistem pemesanan tiket yang immersive.

EchoTic berfokus pada pengalaman pengguna mulai dari menemukan event konser, memilih kategori tiket, melakukan checkout, hingga mendapatkan **digital e-ticket**.

---

# 🌐 Live Demo

🚀 **Website Preview:**  
[EchoTic Platform](https://echotic-platform.vercel.app/)

---

# 👥 Project Collaborators

Project ini dikembangkan secara kolaboratif oleh:

<table>
<tr>

<td align="center">
<a href="https://github.com/lipp13">
<img src="https://github.com/lipp13.png" width="100px;" alt="Alif Alfathar"/>
<br />
<sub><b>Alif Alfathar</b></sub>
</a>
<br />

Frontend Developer

</td>

<td align="center">
<a href="https://github.com/FarrasKhairy">
<img src="https://github.com/FarrasKhairy.png" width="100px;" alt="Farras Khairy"/>
<br />
<sub><b>Farras Khairy</b></sub>
</a>
<br />

Backend Developer

</td>

</tr>
</table>

---

# 🎨 Design Concept & Visual Identity

EchoTic menggunakan konsep visual:

## 🌑 Dark Neon Atmosphere

Color palette:

- Background Black `#07070a`
- Acid Green `#ccff00`
- Hot Pink `#ff0055`
- Cyber Cyan `#00f0ff`

Konsep ini terinspirasi dari suasana konser malam, festival musik, dan stage lighting modern.

---

## 📰 Festival Poster Art Direction

Inspirasi desain:

- Concert poster design
- Music festival branding
- Editorial magazine layout
- Industrial typography
- Modern nightlife aesthetic

---

## ✨ Visual Experience

Implementasi visual:

- Large typography headline
- Asymmetric grid layout
- Neon glow effect
- Grain / noise texture
- Smooth page transition
- Interactive micro interaction
- Motion-based UI animation

---

# ⚡ Main Features

## 🏠 1. Landing Page

Halaman utama dengan pengalaman visual konser modern.

Features:

- Interactive 3D hologram ticket
- Neon hero section
- Real-time countdown event
- Featured concert showcase
- Genre filtering
- How It Works section
- Fan testimonial section

---

## 🎵 2. Event Directory

Katalog konser dengan sistem pencarian dan filter.

Features:

- Search berdasarkan:
  - Artist
  - Event name
  - Venue

- Filter:
  - Genre
  - Location
  - Date

- Sorting:
  - Cheapest ticket
  - Highest ticket
  - Upcoming event

- Animated event cards

---

## 🎤 3. Event Detail Page

Informasi lengkap mengenai konser.

Features:

- Artist information
- Event description
- Venue details
- Ticket categories
- Interactive seat selection
- Google Maps integration
- Ticket availability

---

## 🎟️ 4. Checkout Flow

Alur pembelian tiket dengan sistem multi-step.

Flow:

```
Attendee Information
        ↓
Payment Selection
        ↓
Transaction Processing
        ↓
Digital Ticket Generated
```

Features:

- Form validation
- Ticket summary
- Payment simulation
- QR payment display
- Order confirmation

---

## 🎫 5. Digital E-Ticket

Sistem tiket digital setelah transaksi.

Features:

- Digital ticket card
- Unique ticket ID
- QR Code generator
- Barcode simulation
- Download ticket
- Share ticket

---

## 👤 6. User Dashboard

Dashboard pengguna untuk mengelola tiket konser.

Features:

- User profile
- Active tickets
- Previous concerts
- Ticket history
- Membership badge

---

# 🛠️ Tech Stack

## Frontend

| Technology | Usage |
|------------|-------|
| Next.js 16 | React Framework (App Router) |
| JavaScript JSX | Main Language |
| Tailwind CSS v4 | Styling System |
| Framer Motion | Animation & Interaction |
| React Three Fiber | 3D Experience |
| Drei | Three.js Helper |
| Lucide React | Icon Library |

---

## Development Tools

| Tool | Usage |
|------|-------|
| Git | Version Control |
| GitHub | Repository Management |
| npm | Package Manager |
| Vercel | Deployment |

---

# 📁 Project Structure

```
/app
 ├─ layout.js
 ├─ page.js
 │
 ├─ login/
 │   └─ page.js
 │
 ├─ register/
 │   └─ page.js
 │
 ├─ events/
 │   ├─ page.js
 │   └─ [id]/
 │        └─ page.js
 │
 ├─ checkout/
 │   └─ page.js
 │
 ├─ ticket/
 │   └─ [id]/
 │        └─ page.js
 │
 └─ dashboard/
     └─ page.js


/components

 ├─ ui/
 │
 │  ├─ Button.jsx
 │  ├─ Card.jsx
 │  ├─ Modal.jsx
 │  ├─ Toast.jsx
 │  ├─ Countdown.jsx
 │  ├─ NoiseFilter.jsx
 │  ├─ Marquee.jsx
 │  └─ Decor3D.jsx
 │
 └─ sections/
    
    ├─ Navbar.jsx
    ├─ Footer.jsx
    ├─ Hero3D.jsx
    └─ SeatMap.jsx


/data

 └─ mockData.js


/lib

 └─ utils.js
```

---

# 🗄️ Database Preparation

Saat ini EchoTic menggunakan **mock data**, namun struktur database telah disiapkan untuk pengembangan full-stack.

Database:

```
echotic_db
```

---

## Database Tables

### users

Menyimpan data pengguna.

```
id
name
email
password
role
created_at
```

---

### venues

Menyimpan informasi venue konser.

```
id
name
address
city
capacity
```

---

### events

Menyimpan data konser.

```
id
title
artist
genre
date
venue_id
description
```

---

### ticket_categories

Kategori tiket konser.

```
id
event_id
name
price
capacity
sold
```

---

### orders

Data transaksi tiket.

```
id
user_id
ticket_id
order_code
payment_status
```

---

### seats

Data kursi konser.

```
id
event_id
section
row
seat_number
status
```

---

# 🚀 Installation

Clone repository:

```bash
git clone https://github.com/lipp13/echotic-platform.git
```

Masuk folder project:

```bash
cd echotic-platform
```

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Run development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 📌 Development Notes

EchoTic saat ini merupakan frontend prototype dengan simulasi:

- Concert event database
- Ticket purchasing
- Payment flow
- User dashboard
- Digital ticket generation


Project ini dapat dikembangkan menjadi:

- Full-stack ticketing platform
- Real payment integration
- Authentication system
- Real-time seat availability
- Admin event management

---

# 🔮 Future Development

## Backend Integration

Planned:

- Node.js API
- Express backend
- MySQL database
- Authentication system

---

## Payment Integration

Planned:

- Midtrans
- QRIS Payment
- Virtual Account

---

## Admin Dashboard

Planned:

- Create event
- Manage ticket
- Manage transaction
- Sales analytics

---

## Real-time Features

Planned:

- Seat locking system
- Live ticket availability
- Notification system

---

# 🤝 Contribution

Project ini dibuat untuk eksplorasi:

- Modern UI/UX Design
- Next.js Architecture
- Interactive Web Experience
- Ticket Booking System
- Frontend Engineering


---

# 📜 License

This project is created for educational and portfolio purposes.

© 2026 EchoTic Team
