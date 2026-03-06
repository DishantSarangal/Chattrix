🔐 Chattrix

A real-time end-to-end encrypted messaging application built using the MERN stack.
Messages are encrypted on the client before being sent to the server, ensuring that only the intended recipient can decrypt and read them.

🛠 Tech Stack
<img width="471" height="605" alt="image" src="https://github.com/user-attachments/assets/cb09cba2-bb68-40dc-aed6-32058cd4748c" />


✨ Features

Real-time messaging using Socket.IO

End-to-End encrypted messages

JWT-based authentication

Online user presence tracking

Image sharing using Cloudinary

Secure password hashing with bcrypt

🔐 How Encryption Works

When a user signs up, a public/private key pair is generated on the client.

The public key is stored in the database, while the private key remains on the client.

When sending a message, the message is encrypted using the receiver's public key.

The encrypted message is sent to the server.

The receiver decrypts the message locally using their private key.

The server only stores encrypted ciphertext, ensuring message privacy.

⚙️ Installation
Clone the repository
git clone https://github.com/your-username/chattrix.git
cd chattrix
Backend Setup
cd backend
npm install
npm run dev
Frontend Setup
cd frontend
npm install
npm run dev
🚀 Future Improvements

Group chats

Message read receipts

File sharing

Redis for scalable socket sessions

Message reactions

Push notifications

📌 Project Goal

Chattrix was built to explore secure real-time communication systems using WebSockets, encryption, and scalable backend architecture.

The project focuses on implementing end-to-end encryption at the application level, ensuring that the server never has access to readable messages.

📄 License

This project is open source and available under the MIT License.
