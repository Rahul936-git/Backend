Digital Signature

1.) Content - HashCode
2.) Encrypt the HashCode    ==>   https://emn178.github.io/online-tools/sha256.html

Result => Digital Signature 

Digital Signature is used for JWT (json web token)

JWT: Header.payload.Digital Signature  

https://www.jwt.io/

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.  eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

payload store user simple information not sensative information like username, email

payload:{ username, email}

(Header+Payload)=>HashCode
Encrypt it with key

header and payload are unencrypted ; you can check it in Base64 => https://www.base64decode.org/

(Encrypt the Hashcode)=>Digital Signature 

Encrypt key is present in server

HashCode is one way while Encryption decryption can be both way with keys

cookie parser npm   // npm i cookie-parser
jwd token npm       // npm i jsonwebtoken