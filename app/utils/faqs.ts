export interface Faq {
   id: number
   slug: string
   q: string
   a: string
}

export const faqs: Faq[] = [
   { id: 1, slug: 'doanh-nghiep-mat-kha-nang-thanh-toan-la-gi', q: 'Doanh nghiệp mất khả năng thanh toán được hiểu như thế nào?', a: 'Là tình trạng doanh nghiệp không thực hiện nghĩa vụ thanh toán khoản nợ trong thời hạn 03 tháng kể từ ngày đến hạn thanh toán. Đây là căn cứ để yêu cầu mở thủ tục phá sản.' },
   { id: 2, slug: 'ai-co-quyen-nop-don-yeu-cau-mo-thu-tuc-pha-san', q: 'Ai có quyền và nghĩa vụ nộp đơn yêu cầu mở thủ tục phá sản?', a: 'Chủ nợ không có bảo đảm hoặc có bảo đảm một phần, người lao động và công đoàn, cổ đông hoặc nhóm cổ đông có quyền nộp đơn. Đồng thời, người đại diện theo pháp luật của doanh nghiệp có nghĩa vụ nộp đơn khi doanh nghiệp mất khả năng thanh toán.' },
   { id: 3, slug: 'trinh-tu-giai-quyet-mot-vu-pha-san', q: 'Trình tự giải quyết một vụ phá sản gồm những bước nào?', a: 'Gồm: nộp đơn và thụ lý đơn; ra quyết định mở thủ tục phá sản; kiểm kê tài sản và lập danh sách chủ nợ; triệu tập Hội nghị chủ nợ; áp dụng thủ tục phục hồi hoặc tuyên bố phá sản; và cuối cùng là thanh lý, phân chia tài sản.' },
   { id: 4, slug: 'pha-san-khac-giai-the-o-diem-nao', q: 'Phá sản khác giải thể doanh nghiệp ở điểm nào?', a: 'Giải thể là việc chấm dứt hoạt động một cách chủ động khi doanh nghiệp vẫn có khả năng thanh toán; còn phá sản do tòa án giải quyết khi doanh nghiệp mất khả năng thanh toán, theo trình tự tố tụng chặt chẽ.' },
   { id: 5, slug: 'quan-tai-vien-la-ai', q: 'Quản tài viên là ai và đảm nhiệm công việc gì?', a: 'Quản tài viên là cá nhân hành nghề quản lý, thanh lý tài sản trong quá trình giải quyết phá sản. Họ quản lý tài sản, giám sát hoạt động kinh doanh, đại diện cho doanh nghiệp trong một số giao dịch và báo cáo cho thẩm phán.' },
   { id: 6, slug: 'dieu-kien-hanh-nghe-quan-tai-vien', q: 'Điều kiện để hành nghề quản tài viên là gì?', a: 'Cá nhân là luật sư, kiểm toán viên, hoặc người có trình độ cử nhân luật, kinh tế, kế toán, tài chính với ít nhất 05 năm kinh nghiệm, được cấp chứng chỉ hành nghề quản tài viên theo quy định.' },
   { id: 7, slug: 'thu-lao-quan-tai-vien-do-ai-chi-tra', q: 'Thù lao của quản tài viên do ai chi trả?', a: 'Thù lao được xác định trên cơ sở giá trị tài sản thu được và mức độ phức tạp của vụ việc, do thẩm phán quyết định và được chi trả từ tài sản của doanh nghiệp mất khả năng thanh toán.' },
   { id: 8, slug: 'quyen-loi-nguoi-lao-dong-khi-pha-san', q: 'Quyền lợi của người lao động được xử lý ra sao khi doanh nghiệp phá sản?', a: 'Các khoản tiền lương, trợ cấp thôi việc, bảo hiểm xã hội và các quyền lợi khác của người lao động được ưu tiên thanh toán trước các khoản nợ không có bảo đảm.' },
   { id: 9, slug: 'thu-tu-uu-tien-thanh-toan', q: 'Thứ tự ưu tiên thanh toán khi phân chia tài sản?', a: 'Lần lượt: chi phí phá sản; khoản nợ lương và quyền lợi người lao động; nghĩa vụ tài chính với Nhà nước và các khoản nợ khác; cuối cùng là phần còn lại cho chủ sở hữu.' },
   { id: 10, slug: 'hoi-nghi-chu-no-hop-le-khi-nao', q: 'Hội nghị chủ nợ được coi là hợp lệ khi nào?', a: 'Hội nghị chủ nợ hợp lệ khi có số chủ nợ tham gia đại diện cho ít nhất 51% tổng số nợ không có bảo đảm và có sự tham gia của quản tài viên.' },
   { id: 11, slug: 'mot-vu-pha-san-keo-dai-bao-lau', q: 'Một vụ phá sản thường kéo dài bao lâu?', a: 'Thời gian phụ thuộc vào quy mô tài sản, số lượng chủ nợ và mức độ tranh chấp; thực tế thường kéo dài từ vài tháng đến vài năm.' },
   { id: 12, slug: 'chi-phi-pha-san-gom-nhung-khoan-nao', q: 'Chi phí phá sản bao gồm những khoản nào?', a: 'Bao gồm lệ phí nộp đơn, chi phí thù lao quản tài viên và các chi phí phục vụ kiểm kê, định giá, bảo quản và bán tài sản của doanh nghiệp.' }
]

export function getFaqBySlug(slug: string): Faq | undefined {
   return faqs.find((f) => f.slug === slug)
}
