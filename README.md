# Blockchain Studio Indonesia
We are Educational And Open Course To Making Understand All About Protocol Blockchain For Indonesia

## Fitur Blog (Features)

- Easy styling customization with [Tailwind 2.0](https://blog.tailwindcss.com/tailwindcss-v2)
- Near perfect lighthouse score - (98% Performance)
- Lightweight, 43kB first load JS, uses Preact in production build
- Mobile-friendly view
- Light and dark theme
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Server-side syntax highlighting with [rehype-prism](https://github.com/mapbox/rehype-prism)
- Math display supported via [KaTeX](https://katex.org/)
- Automatic image optimization via [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- Flexible data retrieval with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- Support for tags - each unique tag will be its own page
- Support for nested routing of blog posts
- Projects page
- SEO friendly with RSS feed, sitemaps and more!


## Cara Berkontribusi Tulisan / Artikel (How To Contribution)
silahkan email kami [dev@blockchains.studio](mailto:dev@blockchains.studio)

### Development

Pertama clone repositori ini kemudian masuk kefolder dan lakukan installasi dependensi dengan perintah (npm install), kemudian jalankan development server:

```bash
npm start
# or
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) dengan browser default anda dan lihat hasilnya.

Anda dapat mulai mengedit dan menambahkan konten halaman di `data/blog`. dan setelah selesai silahkan push ke master

## Postingan

### Frontmatter

Frontmatter silahkan ikuti tutorial [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Saat ini 7 bidang yang dapat diisi.

```
title (wajib)
date (wajib)
tags (wajib, boleh berisi array kosong)
lastmod (opsional)
draft (opsional)
summary (opsional)
images (opsional, jika tidak ada maka otomatis diset default ke socialBanner di konfigurasi siteMetadata)
```

Ini adalah contoh post (penulisan) frontmatter:

```
---
title: 'Belajar Blockchain Dan Mengerti Cara Kerjanya'
date: '2021-07-22'
lastmod: '2021-07-23'
tags: ['blockchain', 'tutorial', 'guide']
draft: false
summary: 'Blockchain adalah teknologi cryptography yang terdiri dari hash transaksi atau block yang kemudian dicatat dibuku besar , yakni blockchain.'
images: ['/static/images/belajar/blockchain.png', '/static/images/belajar/blockchain.png']
---
```


### Compose

Jalankan `node ./scripts/compose.js` untuk bootstrap postingan baru.

Ikuti perintah interaktif untuk membuat postingan dengan materi depan yang sudah diisi sebelumnya.

## Our Sponsor

[Near Protocol](https://near.org/) adalah platform aplikasi terdesentralisasi yang cukup aman untuk mengelola aset bernilai tinggi seperti uang atau identitas dan cukup berkinerja untuk membuat mereka berguna untuk orang sehari-hari, menempatkan kekuatan dari web terbuka di tangan mereka.
