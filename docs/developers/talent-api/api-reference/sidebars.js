// sidebars.js (file utama di root proyek)

// Pastikan baris ini sudah benar
import apiSideBarItems from "./docs/developers/talent-api/api-reference/sidebar.js"; 

// ... sisanya
const sidebars = {
  // ...
  mySidebar: [
    // ...
    {
      type: "category",
      label: "API Reference - V2",
      link: {
        type: "doc",
        id: "developers/talent-api/api-reference/index",
      },
      items: apiSideBarItems, // Menggunakan array yang diimpor dari file baru
    },
    // ...
  ],
};

export default sidebars;
