# senseitachi-no-hirumi

## Lần đầu chạy

- Cài đặt thư viện ở thư mục gốc và 2 thư mục `be`, `fe`.
- Di chuyển vào thư mục `be`
- Tạo 1 file `.env` từ file `.env-example` và chèn các giá trị vào đó.
- Chạy `npm install`


## Thiết lập database
- Chuẩn bị db server postgresql, tạo db_url: 
- Chạy lệnh `npx prisma migrate dev --name init` để khởi tạo db.
- Chạy lệnh `npx prisma generate` để khởi tạo prisma client.
- Tham khảo file `package.json` ở thư mục gốc để tham khảo các lệnh.
