# CLAUDE.md

Hướng dẫn này giúp AI coding assistants đọc hiểu nhanh website công khai (Frontend) của hệ thống Quản Tài Viên VN (PHTS) và sửa đúng vị trí, đúng quy ước hiện có.

## Lệnh Thường Dùng

```bash
pnpm dev          # Nuxt dev server, cổng 3000 (mặc định)
pnpm build        # Build production (SSR)
pnpm generate     # Static generate
pnpm preview      # Xem thử bản build
```

Chạy lệnh **bên trong thư mục `Frontend/`**. Đây là pnpm workspace riêng, tách khỏi `Admin` và `backend`.

## Tổng Quan

Website công khai giới thiệu dịch vụ, đăng Tin tức và Thông báo phá sản. Dùng **Nuxt 4 (SSR mặc định)**, Vue 3, @nuxt/ui 4, Tailwind CSS 4, @vueuse/nuxt, @nuxt/fonts.

| Nhóm | Công nghệ |
| --- | --- |
| Framework | Nuxt 4 (SSR), Vue 3, Vue Router |
| UI | @nuxt/ui 4, Tailwind CSS 4, icon qua @iconify-json/* |
| Tiện ích | @vueuse/nuxt (`useWindowScroll`…), @nuxt/fonts |

**Trạng thái hiện tại:** Frontend đang chạy chủ yếu bằng **dữ liệu tĩnh/mock trong code** (chưa nối API `backend`). Chưa có `stores/` hay `composables/`, chưa cấu hình `apiBase`. Xem mục "Khi tích hợp Backend" trước khi thêm phần gọi API.

## Cấu Trúc Thư Mục (`app/` là srcDir)

```text
app/
  app.vue
  layouts/default.vue        # Header fixed + <slot/> + nút cuộn-lên + Footer
  components/layout/
    header.vue               # Nav desktop + dropdown Dịch vụ, menu mobile (Teleport), tìm kiếm, dark mode
    footer.vue               # Liên hệ, danh mục, dịch vụ, bản đồ
  pages/
    index.vue                # Trang chủ: hero, tin nổi bật + sidebar (Mới cập nhật · Thông báo mới nhất), dịch vụ, timeline "Quy trình phá sản" (11 bước)
    tin-tuc/                 # index (list dạng card) · [slug] (chi tiết)
    thong-bao-pha-san/       # index (list card + lọc theo loại) · [slug] (chi tiết)
    dich-vu/                 # pha-san · phuc-hoi · tu-van · quan-ly-tai-san
    ve-chung-toi.vue
    cau-hoi-thuong-gap.vue   # FAQ (UAccordion + lọc + tìm kiếm)
  utils/announcements.ts     # Nguồn dữ liệu Thông báo dùng chung (mock) + type + helper
  assets/
    css/main.css
    theme/color.css          # Biến màu (primary…)
    theme/breakpoint.css     # Breakpoint tùy biến
```

Auto-import chuẩn Nuxt (components, composables, utils). Component layout tham chiếu qua tiền tố thư mục, vd `<LayoutHeader/>`, `<LayoutFooter/>`.

## Mô Hình Nội Dung

Giống toàn hệ thống: Tin tức và Thông báo là hai "loại" nội dung. Trên Frontend:

- **Thông báo phá sản** phân theo **2 loại**: `Mở thủ tục` và `Tuyên bố phá sản` (hằng `ANNOUNCEMENT_TYPES` trong `utils/announcements.ts`), lọc bằng nút — **không** lọc theo Tòa án.
- Dữ liệu Thông báo tập trung ở `app/utils/announcements.ts` (mảng `announcements` + `getAnnouncementBySlug` + `announcementSummary`). Trang chủ, trang danh sách và trang chi tiết **import chung** file này để không lệch dữ liệu — import tường minh: `import { announcements } from '~/utils/announcements'`.
- Trình bày phân biệt theo ngữ cảnh: trang danh sách `/thong-bao-pha-san` dùng **card giống trang tin tức**; trang chủ chỉ hiện **danh sách gọn 5 mục trong sidebar** (ảnh + tiêu đề + `loại · ngày` dạng chữ thường, không badge, không nút "Xem tất cả").

## Quy Ước Giao Diện / Tailwind

- **Ưu tiên class canonical của Tailwind 4**, tránh giá trị tùy ý `[...]` khi đã có class chuẩn (vd `px-4.5` thay `px-[18px]`, `min-w-190` thay `min-w-[760px]`). Chỉ giữ `[...]` khi không có tương đương chuẩn: cỡ chữ `text-[15px]`, `border-[1.5px]`, tỉ lệ `aspect-[16/8.2]`, grid template `grid-cols-[minmax(...)]`, `transition-[width]`.
- Hỗ trợ **dark mode** xuyên suốt (`dark:` + `UColorModeButton`); style cặp light/dark cho mọi khối mới.
- Màu thương hiệu qua biến `primary` (class `text-primary`, `bg-primary`, `border-primary`…), định nghĩa trong `assets/theme/`.
- **Responsive**: mobile-first, dùng breakpoint `sm/md/lg`; bảng rộng bọc `overflow-x-auto`; layout 2 cột gộp 1 cột trên mobile; body không được cuộn ngang.
- Icon dùng `<UIcon name="..."/>` (Iconify) hoặc `i-lucide-*`; ảnh placeholder hiện dùng `picsum.photos`.

## Quy Ước Khi Sửa Code

- Trang mới: đặt trong `app/pages/` theo route tiếng Việt (slug không dấu), khai báo `useHead({ title })`.
- Header/Footer: cập nhật danh sách nav/danh mục trong `header.vue` (`nav`) và `footer.vue` (`categories`, `service`) khi thêm route công khai.
- Dữ liệu dùng ở nhiều nơi: tách ra `app/utils/*` (kèm `interface` + helper) và import chung, theo mẫu `announcements.ts` — không copy mảng dữ liệu vào từng page.
- Trang chi tiết theo slug: dùng `useRoute().params.slug`, không thấy → `throw createError({ statusCode: 404, fatal: true })`; đặt `definePageMeta({ key: r => r.path })` nếu cần setup chạy lại khi điều hướng client-side giữa các slug.
- Giữ phong cách SFC hiện có (script setup + `useHead`), không đổi cấu trúc layout mặc định nếu không cần.

## Khi Tích Hợp Backend

Hiện chưa nối API. Khi bắt đầu nối `backend` (REST, cổng 3001, envelope `{ success, message, data }`):

1. Thêm `runtimeConfig.public.apiBase` vào `nuxt.config.ts` (vd `http://localhost:3001/api`).
2. Endpoint công khai đã có sẵn: `GET /articles` (lọc `?kind=NEWS|NOTICE&category=&page=&limit=`), `GET /articles/:slug`, `GET /categories?kind=`.
3. Có thể mượn mẫu wrapper `$fetch`/envelope từ project `Admin` (`app/composables/useApi.ts`) — nhưng Frontend là SSR nên dùng `useFetch`/`useAsyncData` cho dữ liệu render sẵn, cẩn thận state phía server.
4. Thay dần dữ liệu mock (`utils/announcements.ts`, mảng inline trong page) bằng dữ liệu API, giữ nguyên component trình bày.

## Debug Guide

| Vấn đề | Kiểm tra trước |
| --- | --- |
| Dev chạy nhầm cổng 3000 khi định mở app khác | Chạy `pnpm dev` trong đúng thư mục; `Admin` ở 3002, `backend` ở 3001 |
| Header/logo vỡ trên mobile | `components/layout/header.vue` (chiều cao logo vs `h-16 lg:h-20`) |
| Menu mobile không đóng | `header.vue` (`mobileOpen`, watch `route.path`, khóa scroll body) |
| Lệch dữ liệu Thông báo giữa các trang | Đảm bảo mọi trang import `app/utils/announcements.ts`, không dùng bản copy |
| Class Tailwind cảnh báo canonical | Đổi `[...]` sang class chuẩn khi có tương đương |
| Trang trắng | Kiểm tra page có nội dung (một số trang `dich-vu/*` hiện là stub rỗng) |

## Hard Constraints

- Dữ liệu chung tách ra `utils/*` và import chung — không nhân bản mảng dữ liệu vào nhiều page.
- Không đổi shape dữ liệu Thông báo (`utils/announcements.ts`) mà không cập nhật cả trang chủ, danh sách và chi tiết.
- Giữ style light/dark + responsive cho mọi khối mới.
- Khi nối API, giữ đúng envelope `{ success, message, data }` của backend.

## Lưu Ý Hiện Trạng

- 4 trang `app/pages/dich-vu/*` (pha-san, phuc-hoi, tu-van, quan-ly-tai-san) hiện **rỗng** (chỉ có `<div>`), dù header/footer đã link tới — cần bổ sung nội dung.
- Toàn bộ tin tức / thông báo đang là dữ liệu mock trong code, chưa lấy từ `backend`.
