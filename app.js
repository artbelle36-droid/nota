// 你的作品頁面（依序）
// 把檔名換成你的圖片即可
const PAGES = [
  { src: "assets/pages/001.jpg", caption: "作品 01｜標題 / 年份 / 媒材" },
  { src: "assets/pages/002.jpg", caption: "作品 02｜標題 / 年份 / 媒材" },
  { src: "assets/pages/003.jpg", caption: "作品 03｜標題 / 年份 / 媒材" },
  { src: "assets/pages/004.jpg", caption: "作品 04｜標題 / 年份 / 媒材" }
]

const book = document.getElementById('book')

function makePage({src, caption}, i){
  const page = document.createElement('div')
  page.className = 'page'

  const img = document.createElement('img')
  img.loading = 'lazy'
  img.alt = caption || `Page ${i+1}`
  img.src = src

  const no = document.createElement('div')
  no.className = 'pageno'
  no.textContent = String(i + 1).padStart(2,'0')

  page.appendChild(img)
  page.appendChild(no)

  if(caption){
    const cap = document.createElement('div')
    cap.className = 'caption'
    cap.textContent = caption
    page.appendChild(cap)
  }

  return page
}

// 1) 注入頁面
PAGES.forEach((p, i) => book.appendChild(makePage(p, i)))

// 2) 啟動翻頁
$(book).turn({
  width: book.clientWidth,
  height: book.clientHeight,
  autoCenter: true,
  gradients: true,
  elevation: 50,
})

// 3) 控制按鈕
document.getElementById('prev').addEventListener('click', () => $(book).turn('previous'))
document.getElementById('next').addEventListener('click', () => $(book).turn('next'))

// 4) 視窗縮放時更新尺寸
let resizeTimer
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    const w = book.clientWidth
    const h = book.clientHeight
    $(book).turn('size', w, h)
  }, 200)
})
