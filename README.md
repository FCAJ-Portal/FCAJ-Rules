# TÀI LIỆU VẬN HÀNH

## Cách update rules

### Chuẩn bị môi trường

- Toàn bộ monorepo này sử dụng runtime tên là Bun, được phát triển bởi Anthropic.
- Cách tải: https://bun.com/docs/installation

> Sau khi tải xong, mở terminal lên và chạy: `bun --version`, nếu in ra phiên bản >= 1.4 là đúng.

### Chạy máy chủ dev

- Ở root (ở thư mục chính của repo sau khi clone, chưa có `cd` vào folder nào), chạy lệnh: `bun install` để tải các packages về node_modules

> Để dễ hiểu hơn, hãy tưởng tượng Bun là con lai của Node.js và npm

- Chạy dev server: `bun --filter @fcaj/rules dev`
- Truy cập `http://localhost:3003`

### Các cú pháp khi soạn file markdown có thể tham khảo thêm:

> Lưu ý, mặc định các syntax của Markdown đều chạy tốt

- [Cú pháp mở rông](https://useblume.dev/docs/content/syntax)
- [Componnent đặt biệt](https://useblume.dev/docs/content/components)

### Liên hệ khẩn cấp

- Trường hợp cần liên lạc khẩn cấp, hãy liên hệ với e Thọ thông qua:
  - WhatsApp: 0342397341
  - SĐT: 0342397341

## Một số quy ước chung

1. **Luôn luôn tạo PR, mặc dù có quyền được push thẳng vô main nhưng luôn luôn tạo PR**
2. File media sẽ nằm ở thư mục `apps/rules/assets/images`
3. Luôn luôn là folder, đừng gộp hết toàn bộ rules vào 1 trang, xem ví dụ chia ra ở `apps/rules/contents/violations`

## Cách push

