/**
 * Directive toàn cục `v-reveal`: phần tử tự xuất hiện (fade + trượt) khi cuộn tới.
 *
 * Cách dùng trong template:
 *   <section v-reveal> ... </section>                     // mặc định trượt lên (reveal-up)
 *   <div v-reveal.left> ... </div>                        // hướng khác: .left / .right / .down / .zoom
 *   <div v-reveal :style="{ '--reveal-delay': i*70 + 'ms' }">  // so le theo index trong v-for
 *   <div v-reveal="150"> ... </div>                       // đặt độ trễ (ms) bằng giá trị binding
 *
 * SSR-safe: body plugin chạy cả server/client (đã guard document/window);
 * các hook mounted/unmounted của directive chỉ chạy trên client.
 */
export default defineNuxtPlugin((nuxtApp) => {
   const reduceMotion =
      import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

   // Bật trạng thái ẩn ban đầu chỉ khi có JS — tránh giấu nội dung với no-JS/SEO.
   if (import.meta.client) {
      document.documentElement.classList.add('reveal-ready')
   }

   const DIRECTIONS = ['up', 'down', 'left', 'right', 'zoom'] as const

   nuxtApp.vueApp.directive('reveal', {
      mounted(el: HTMLElement, binding) {
         // Hướng lấy từ modifier (v-reveal.left); mặc định trượt lên.
         const dir = DIRECTIONS.find((d) => binding.modifiers[d]) ?? 'up'

         // Độ trễ: ưu tiên giá trị binding, nếu không đã có thể đặt qua --reveal-delay inline.
         if (binding.value != null && binding.value !== '') {
            el.style.setProperty('--reveal-delay', `${binding.value}ms`)
         }

         // Người dùng tắt chuyển động → giữ nguyên nội dung hiển thị, không quan sát.
         if (reduceMotion) return

         // Để IntersectionObserver tự quyết định dựa trên hình học của chính nó
         // (nhất quán, không phụ thuộc thời điểm Nuxt cuộn trang khi điều hướng SPA).
         // Phần tử KHÔNG bị gắn trạng thái ẩn nếu nó đang/đã ở trong hoặc trên khung nhìn.
         const observer = new IntersectionObserver(
            (entries, obs) => {
               for (const entry of entries) {
                  const target = entry.target as HTMLElement

                  if (entry.isIntersecting) {
                     // Đang trong khung nhìn → hiện (animate nếu trước đó đã ẩn).
                     target.classList.add('is-visible')
                     obs.unobserve(target) // chỉ chạy một lần
                  } else if (entry.boundingClientRect.top < 0) {
                     // Nằm TRÊN khung nhìn: người dùng đã cuộn qua, HOẶC cửa sổ chưa
                     // cuộn về đầu sau điều hướng SPA. Hiện luôn, KHÔNG ẩn → tránh
                     // cảnh nội dung đang hiển thị bị biến mất.
                     target.classList.add('is-visible')
                     obs.unobserve(target)
                  } else {
                     // Nằm DƯỚI khung nhìn (chưa cuộn tới) → mới gắn trạng thái ẩn để
                     // có hiệu ứng khi cuộn tới. Phần tử đang khuất nên không gây nháy.
                     target.classList.add('reveal', `reveal-${dir}`)
                  }
               }
            },
            // rootMargin 0: bất kỳ pixel nào của phần tử lọt vào khung nhìn đều tính là
            // "đang hiển thị" → không ẩn nội dung mà người dùng đã nhìn thấy.
            { threshold: 0, rootMargin: '0px' }
         )

         observer.observe(el)
         ;(el as HTMLElement & { _revealObserver?: IntersectionObserver })._revealObserver =
            observer
      },

      unmounted(el: HTMLElement & { _revealObserver?: IntersectionObserver }) {
         el._revealObserver?.disconnect()
      },
   })
})
