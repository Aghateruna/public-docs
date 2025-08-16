// docs/developers/talent-api/api-reference/sidebar.js

// File ini mengekspor sebuah array (daftar item) yang akan digunakan
// sebagai sidebar untuk bagian "API Reference".

module.exports = [
  // Link ke halaman otentikasi
  {
    type: 'doc',
    id: 'developers/talent-api/authentication',
    label: 'Authentication',
  },

  // Kategori untuk versi API V2
  {
    type: 'category',
    label: 'API V2',
    link: {
      type: 'doc',
      id: 'developers/talent-api/api-reference/index',
    },
    items: [
      // Daftar semua endpoint API di bawah kategori ini
      'developers/talent-api/api-reference/users',
      'developers/talent-api/api-reference/talents',
      // Anda bisa menambahkan endpoint lain di sini
    ],
  },
];
