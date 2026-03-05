Chattrix


A real-time end-to-end encrypted chat application built using the MERN stack.
Messages are encrypted on the client before being sent to the server, ensuring only the intended recipient can decrypt and read them.

Tech Stack

Frontend

React.js

Zustand

Socket.IO Client

Axios

Tailwind CSS

Backend

Node.js

Express.js

MongoDB (Mongoose)

Socket.IO

JWT Authentication

bcrypt

Security

TweetNaCl for public/private key encryption

Features

Real-time messaging using Socket.IO

End-to-end encrypted messages

JWT-based authentication

Online user presence tracking

Image sharing via Cloudinary

Secure password hashing with bcrypt

How Encryption Works

When a user signs up, a public/private key pair is generated on the client.

The public key is stored in the database, while the private key remains on the client.

Messages are encrypted using the receiver's public key before being sent to the server.

The receiver decrypts the message locally using their private key.

The server only stores encrypted ciphertext.

Installation

Clone the repository

git clone https://github.com/your-username/chattrix.git
cd chattrix

Install dependencies

Backend

cd backend
npm install
npm run dev

Frontend

cd frontend
npm install
npm run dev
Future Improvements

Group chats

Message read receipts

File sharing

Redis for scalable socket sessions
