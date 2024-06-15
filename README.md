# BudgetWise - A Web-Based Financial Allocation Tool

**BudgetWise** adalah aplikasi web yang dirancang untuk membantu pengguna mengelola alokasi dana mereka berdasarkan preferensi risiko masing-masing. Apakah Anda tipe konservatif yang lebih suka keamanan atau tipe agresif yang mencari peluang besar, BudgetWise siap membantu Anda membuat keputusan keuangan yang lebih baik.

## Fitur Utama

Pengelolaan Keuangan yang Disesuaikan: Tentukan alokasi dana Anda dengan mudah berdasarkan profil risiko, baik konservatif maupun agresif.
Antarmuka Pengguna Dinamis: Dibangun dengan React, BudgetWise menawarkan pengalaman pengguna yang responsif dan intuitif.
Manajemen Keadaan dengan Jotai: Gunakan state management yang efisien dengan Jotai untuk memastikan performa aplikasi yang cepat dan lancar.
Backend yang Handal dengan Supabase: Data pengguna disimpan dan dikelola dengan aman menggunakan Supabase, memberikan Anda akses cepat dan aman ke informasi keuangan Anda.
Instalasi
Ikuti langkah-langkah berikut untuk menginstal dan menjalankan BudgetWise di lingkungan lokal Anda:

## Kloning Repository ini

```bash
git clone https://github.com/username/BudgetWise.git
cd BudgetWise
Instalasi Dependensi

Pastikan Anda memiliki Node.js yang telah terinstal. Kemudian jalankan:

bash
npm install
Konfigurasi Environment Variables

Buat file .env di root directory proyek dan tambahkan variabel-variabel berikut (gantilah dengan detail Supabase Anda):

env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_KEY=your-supabase-anon-key
Jalankan Aplikasi

bash
npm run dev
Aplikasi akan berjalan di http://localhost:5173.

Teknologi yang Digunakan
React: Library JavaScript untuk membangun antarmuka pengguna yang efisien dan responsif.
Jotai: Library state management untuk manajemen state yang ringan dan fleksibel.
Supabase: Backend as a Service yang menyediakan solusi database yang cepat dan aman dengan integrasi langsung ke aplikasi.

Struktur Proyek
bash

BudgetWise/
│
├── public/                 # Berkas-berkas publik seperti index.html
│
├── src/                    # Sumber kode utama aplikasi
│   ├── assets/             # Berkas aset seperti gambar, ikon
│   ├── components/         # Komponen React yang dapat digunakan kembali
│   ├── hooks/              # Custom hooks untuk state dan data fetching
│   ├── pages/              # Halaman utama aplikasi
│   ├── state/              # Manajemen state dengan Jotai
│   ├── utils/              # Fungsi-fungsi utilitas
│   └── App.js              # Komponen utama aplikasi
│
├── .env                    # Variabel environment (harus dibuat sendiri)
├── package.json            # Dependensi dan skrip untuk npm
└── README.md               # Dokumentasi ini
```

## Cara Penggunaan

Registrasi dan Login: Pengguna dapat mendaftar dan masuk ke aplikasi untuk mengakses fitur pengelolaan keuangan.
Tentukan Profil Risiko: Pilih preferensi risiko Anda (konservatif atau agresif) untuk menerima rekomendasi alokasi dana yang sesuai.
Atur Alokasi Dana: Gunakan aplikasi untuk mengatur dana Anda ke berbagai kategori seperti kebutuhan utama, investasi, dana darurat, dan pembelian barang impian.
Pantau dan Sesuaikan: Lihat laporan keuangan dan sesuaikan alokasi dana Anda sesuai dengan perubahan tujuan atau situasi keuangan Anda.
Kontribusi
Kami menyambut kontribusi dari komunitas! Jika Anda ingin berkontribusi pada BudgetWise, silakan ikuti langkah-langkah berikut:

## Fork repository ini.

Buat branch baru (git checkout -b feature-branch).
Lakukan perubahan dan commit (git commit -m 'Add new feature').
Push ke branch (git push origin feature-branch).
Buat pull request dan jelaskan perubahan Anda.
