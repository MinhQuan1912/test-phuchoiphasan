export interface Announcement {
   slug: string
   title: string
   type: string
   date: string
   address: string
   manager: string
   court: string
}

export const ANNOUNCEMENT_TYPES = ['Mở thủ tục', 'Tuyên bố phá sản'] as const

export const ANNOUNCEMENT_COURTS = [
   'TAND khu vực 2 - Hà Nội',
   'TAND khu vực 1 - Đà Nẵng',
   'TAND khu vực 1 - TP. Hồ Chí Minh',
] as const

export const announcements: Announcement[] = [
   { slug: 'nam-phu', title: 'Công ty CP Đầu tư Nam Phú', type: 'Mở thủ tục', date: '13/07/2026', address: '12 Nguyễn Huệ, Quận 1, TP.HCM', manager: 'Ông Nguyễn Văn An – VPQTV Minh Khai', court: 'TAND khu vực 1 - TP. Hồ Chí Minh' },
   { slug: 'abc', title: 'Công ty TNHH Thương mại ABC', type: 'Mở thủ tục', date: '12/07/2026', address: 'KCN Sóng Thần, TP. Dĩ An, Bình Dương', manager: 'Bà Trần Thị Bình – VPQTV Đại Tín', court: 'TAND khu vực 1 - TP. Hồ Chí Minh' },
   { slug: 'dai-phat', title: 'Công ty CP Xây dựng Đại Phát', type: 'Tuyên bố phá sản', date: '11/07/2026', address: '88 Trần Duy Hưng, Cầu Giấy, Hà Nội', manager: 'Ông Lê Quang Dũng – VPQTV Hà Thành', court: 'TAND khu vực 2 - Hà Nội' },
   { slug: 'minh-quang', title: 'Công ty TNHH Công nghệ Minh Quang', type: 'Mở thủ tục', date: '10/07/2026', address: '25 Phạm Hùng, Nam Từ Liêm, Hà Nội', manager: 'Bà Phạm Thị Hoa – VPQTV Hà Thành', court: 'TAND khu vực 2 - Hà Nội' },
   { slug: 'hong-an', title: 'Công ty TNHH Dệt may Hồng Ân', type: 'Tuyên bố phá sản', date: '09/07/2026', address: 'KCN Amata, TP. Biên Hòa, Đồng Nai', manager: 'Ông Võ Thành Nam – VPQTV Đồng Tâm', court: 'TAND khu vực 1 - TP. Hồ Chí Minh' },
   { slug: 'tan-thanh', title: 'Công ty CP Địa ốc Tân Thành', type: 'Tuyên bố phá sản', date: '08/07/2026', address: '45 Điện Biên Phủ, Quận 3, TP.HCM', manager: 'Ông Nguyễn Văn An – VPQTV Minh Khai', court: 'TAND khu vực 1 - TP. Hồ Chí Minh' },
   { slug: 'phu-thinh', title: 'Công ty TNHH Gỗ Phú Thịnh', type: 'Tuyên bố phá sản', date: '07/07/2026', address: 'KCN Nam Tân Uyên, Bình Dương', manager: 'Bà Trần Thị Bình – VPQTV Đại Tín', court: 'TAND khu vực 1 - TP. Hồ Chí Minh' },
   { slug: 'tan-tien', title: 'Công ty CP Thực phẩm Tân Tiến', type: 'Mở thủ tục', date: '06/07/2026', address: 'KCN Long Thành, Đồng Nai', manager: 'Ông Võ Thành Nam – VPQTV Đồng Tâm', court: 'TAND khu vực 1 - TP. Hồ Chí Minh' },
   { slug: 'bien-xanh', title: 'Công ty CP Du lịch Biển Xanh', type: 'Mở thủ tục', date: '05/07/2026', address: '30 Võ Nguyên Giáp, Sơn Trà, Đà Nẵng', manager: 'Bà Hoàng Thị Mai – VPQTV Sông Hàn', court: 'TAND khu vực 1 - Đà Nẵng' },
   { slug: 'truong-son', title: 'Công ty TNHH Vận tải Trường Sơn', type: 'Tuyên bố phá sản', date: '03/07/2026', address: '210 Nguyễn Văn Linh, Hải Châu, Đà Nẵng', manager: 'Bà Hoàng Thị Mai – VPQTV Sông Hàn', court: 'TAND khu vực 1 - Đà Nẵng' },
   { slug: 'thanh-dat', title: 'Công ty CP Cơ khí Thành Đạt', type: 'Mở thủ tục', date: '02/07/2026', address: 'KCN Tân Bình, TP.HCM', manager: 'Ông Nguyễn Văn An – VPQTV Minh Khai', court: 'TAND khu vực 1 - TP. Hồ Chí Minh' },
   { slug: 'tan-phu', title: 'Công ty TNHH Nhựa Tân Phú', type: 'Tuyên bố phá sản', date: '01/07/2026', address: 'KCN VSIP II, Bình Dương', manager: 'Bà Trần Thị Bình – VPQTV Đại Tín', court: 'TAND khu vực 1 - TP. Hồ Chí Minh' },
]

export function getAnnouncementBySlug(slug: string): Announcement | undefined {
   return announcements.find((a) => a.slug === slug)
}

export function announcementSummary(a: Announcement): string {
   switch (a.type) {
      case 'Mở thủ tục':
         return `Đã có quyết định mở thủ tục phá sản đối với ${a.title}. Các chủ nợ thực hiện việc nộp giấy đòi nợ cho quản tài viên trong thời hạn 30 ngày kể từ ngày đăng thông báo này.`
      case 'Tuyên bố phá sản':
         return `Đã có quyết định tuyên bố ${a.title} phá sản. Việc thanh lý và phân chia tài sản được thực hiện theo thứ tự ưu tiên quy định tại Luật Phá sản.`
      default:
         return `Thông báo liên quan đến thủ tục phá sản của ${a.title}.`
   }
}
