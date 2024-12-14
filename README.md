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
- Chạy lệnh node -e "console.log(require('crypto').randomBytes(64).toString('hex'))" để JWT_SECRET dưới be
- Đối với BE, thì thực hiện login (viết request login, đã có route trong be) -> copy token -> vào request -> Authorization -> Bearer Token -> Paste token đã copy vào là chạy được
- xem db: npx prisma studio
- tạo tài khoản cloudinary và copy các thông số trong example vào .env của mình
