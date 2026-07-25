# 🎫 EchoTic - Premium Concert Ticket Booking Platform

![EchoTic Banner](https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop)

EchoTic adalah platform pemesanan tiket konser musik modern dengan konsep **premium concert experience** yang menggabungkan estetika **"Concert Night / Neon Stage Light"** dan **"Festival Poster Art"**.

Project ini dirancang agar tidak terlihat seperti template website biasa, tetapi menghadirkan pengalaman digital yang menyerupai atmosfer konser asli melalui visual neon, layout editorial, animasi interaktif, dan sistem pemesanan tiket yang immersive.

EchoTic berfokus pada bagaimana sebuah platform ticketing dapat memberikan pengalaman pengguna mulai dari menemukan event, memilih tiket, melakukan checkout, hingga mendapatkan e-ticket digital.

---

# 🌐 Live Demo

```

```
🚀: [echotic-platfrom](https://echotic-platform.vercel.app/)
```

```

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

EchoTic menggunakan pendekatan desain:

### 🌑 Dark Neon Atmosphere

Menggunakan kombinasi:

- Background Black `#07070a`
- Acid Green `#ccff00`
- Hot Pink `#ff0055`
- Cyber Cyan `#00f0ff`

untuk menciptakan nuansa konser malam, stage lighting, dan festival modern.

### 📰 Festival Poster Art Direction

Inspirasi desain berasal dari:

- Poster konser underground
- Festival music branding
- Editorial magazine layout
- Industrial typography

### ✨ Visual Experience

Implementasi visual meliputi:

- Large typography headline
- Asymmetric grid layout
- Neon glow effect
- Grain / noise texture
- Smooth page transition
- Interactive micro interaction
- Motion-based UI animation

---

# ⚡ Main Features

## 1. 🏠 Landing Page

Halaman utama yang memperkenalkan pengalaman EchoTic.

Features:

- Interactive 3D hologram ticket
- Hero section dengan neon concert atmosphere
- Real-time countdown event
- Featured concert showcase
- Genre filtering
- Editorial "How It Works"
- Fan testimonial section

---

## 2. 🎵 Event Directory

Halaman katalog konser dengan sistem pencarian dan filter.

Features:

- Search berdasarkan:
  - Artist
  - Event name
  - Venue

- Filter berdasarkan:
  - Genre
  - Location
  - Date

- Sorting:
  - Lowest price
  - Highest price
  - Upcoming event

- Animated event cards

---

## 3. 🎤 Event Detail Page

Halaman detail konser dengan informasi lengkap.

Features:

- Artist information
- Event description
- Venue information
- Ticket categories
- Interactive seat selection
- Google Maps integration
- Ticket availability

---

## 4. 🎟️ Checkout Flow

Sistem pembelian tiket menggunakan multi-step flow.

Flow:

```
Attendee Information
        ↓
Payment Selection
        ↓
Transaction Processing
        ↓
Ticket Generated
```

Features:

- Form validation
- Ticket summary
- Payment simulation
- QR payment display
- Order confirmation

---

## 5. 🎫 Digital E-Ticket

Setelah transaksi berhasil user mendapatkan tiket digital.

Features:

- Digital ticket card
- Unique ticket ID
- QR Code generator
- Barcode simulation
- Download ticket button
- Share ticket

---

## 6. 👤 User Dashboard

Dashboard pengguna untuk mengelola tiket.

Features:

- User profile
- Active tickets
- Previous concerts
- Membership badge
- Ticket history

---

# 🛠️ Tech Stack

## Frontend

| Technology        | Usage                        |
| ----------------- | ---------------------------- |
| Next.js 16        | React Framework (App Router) |
| JavaScript JSX    | Main Programming Language    |
| Tailwind CSS v4   | Styling System               |
| Framer Motion     | Animation & Interaction      |
| React Three Fiber | 3D Web Experience            |
| Drei              | Three.js Helper Library      |
| Lucide React      | Icon System                  |

## Development Tools

| Tool   | Usage                 |
| ------ | --------------------- |
| Git    | Version Control       |
| GitHub | Repository Management |
| npm    | Package Management    |
| Vercel | Deployment Platform   |

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

Walaupun versi sekarang menggunakan mock data, struktur database telah dipersiapkan untuk pengembangan full-stack.

Database:

```
echotic_db
```

Planned tables:

### users

Menyimpan data akun pengguna.

```
id
name
email
password
role
created_at
```

### venues

Data lokasi konser.

```
id
name
address
capacity
city
```

### events

Informasi event konser.

```
id
title
artist
genre
date
venue_id
description
```

### ticket_categories

Kategori tiket.

```
id
event_id
name
price
capacity
sold
```

### orders

Data transaksi pembelian.

```
id
user_id
ticket_id
order_code
payment_status
```

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
git clone https://github.com/lipp13/echotic.git
```

Masuk ke folder project:

```bash
cd echotic
```

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Run development server:

```bash
npm run dev
```

Open browser:

```
http://localhost:3000
```

---

# 📌 Development Notes

EchoTic saat ini merupakan frontend prototype dengan sistem simulasi:

- Event database
- Ticket purchasing
- Payment process
- User dashboard
- Digital ticket generation

Architecture sudah disiapkan agar dapat dikembangkan menjadi:

- Full-stack ticketing platform
- Real payment integration
- Authentication system
- Real-time seat availability
- Admin event management

---

# 🔮 Future Development

Planned improvements:

### Backend Integration

- Node.js / Express API
- MySQL database
- Authentication system

### Payment Integration

- Midtrans
- QRIS Payment
- Virtual Account

### Admin Dashboard

- Create event
- Manage tickets
- Monitor transactions

### Real-time Features

- Seat locking
- Ticket availability updates
- Notification system

---

# 🤝 Contribution

Project ini dibuat untuk eksplorasi:

- Modern UI/UX Design
- Next.js Architecture
- Interactive Web Experience
- Ticket Booking System
- Frontend Engineering

Contribution dan improvement dapat dilakukan melalui repository collaborator.

---

# 📜 License

This project is created for educational and portfolio purposes.

© 2026 EchoTic Team
