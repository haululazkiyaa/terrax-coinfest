![WhatsApp Image 2024-08-23 at 14 39 57](https://github.com/user-attachments/assets/e74299ea-b9dd-4c8a-b063-ed5ee6ae48c0)


# Terrax: Secure your property, get your e-certificate now!

Conventional property transaction methods still require time, labor, and money. Long, complicated, and expensive processes are key barriers to real estate investing. Property ownership certificates are also vulnerable to manipulation, loss, and other security vulnerabilities. This affects the real estate economy, fostering fraud and uncertainty.

TerraX innovates to solve these pressing concerns. TerraX uses the newest blockchain technology to streamline property transactions. This improves user experience and saves time and resources. TerraX's electronic certifications protect property ownership records, which eliminates manipulation, loss, and other security threats by providing tamper-proof and secure records, boosting transaction confidence.

## Screenshoot
![WhatsApp Image 2024-08-23 at 14 54 38](https://github.com/user-attachments/assets/394a36c8-df8e-4c8c-aaba-20dbd3359cc4)

![WhatsApp Image 2024-08-23 at 14 55 00](https://github.com/user-attachments/assets/b527c9ae-4eef-42b2-9d6b-a54a785bd3d7)

![WhatsApp Image 2024-08-23 at 14 58 25](https://github.com/user-attachments/assets/fb049e03-58f0-4e8d-9c5a-f76a94cf4eb1)


## Tech Stack

*Dfx Version: 0.16.0*

*Frontend:* React, NextJS, TailwindCSS

*Server:* Azle SmartContract, Internet Identity

*Storage:* Firebase Storage

## HOW TO RUN (Locally)

You will need:

- NodeJS 18.\* or higher https://nodejs.org/en/download/
- Internet Computer dfx CLI https://internetcomputer.org/docs/current/developer-docs/setup/install/

Install:

- clone this repository

bash
git clone https://github.com/haululazkiyaa/terrax-coinfest


- Open command terminal: Enter the commands to start dfx local server in background:

bash
  cd terrax-coinfest
  dfx start --clean --background


- Enter the commands to install dependencies, deploy canister and run Next.js dev server:

bash
  npm install
  dfx deploy
  npm run dev


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

NEXT_PUBLIC_IC_HOST: You can obtain this value by running 'dfx start,' and it will appear as shown in the console for example "http://localhost:4943."

NEXT_PUBLIC_TERRAX_CANISTER_ID: You can obtain this after running 'dfx deploy', and it will appear as shown in the console for example: bd3sg-teaaa-aaaaa-qaaba-cai.

NEXT_PUBLIC_INTERNET_IDENTITY_CANISTER_ID: You can obtain this after running 'dfx deploy', and it will appear in the console for example: bkyz2-fmaaa-aaaaa-qaaaq-cai.

NEXT_PUBLIC_MAPS_API_KEY: To obtain this, you can register on https://console.developers.google.com or use my API key for testing purposes only\
(Google Maps API key: AIzaSyCdRzRUfbYXGhOLvo3f5KQLQOvupPY3FUA).

## Access Your App

You can access the frontend via http://localhost:3000 for default port

## Generate Dummy Properties

- Open command terminal: Enter the commands to generate dummies in canister:

bash
 dfx canister call terrax generateDummyProperties


## Mainnet
- Front end: https://pbqjr-oqaaa-aaaag-all5a-cai.icp0.io/
- Backend Candid: https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=pgrpf-diaaa-aaaag-all5q-cai

## Resources
- Github https://github.com/haululazkiyaa/terrax-coinfest
- Demo Video https://youtu.be/DUxZy5RNMy8
- Slide Deck https://drive.google.com/drive/folders/1DLzijONwIXCZ7hdlsVK0WBaBX-2qyr20?usp=share_link

## Oisy Wallet
qb2r5-fs3ib-2z3mi-rk2we-albrp-v472m-a4dsi-zz6u3-7mbhu-f64k2-pae

## Authors

Team Participants: 
- @indrmhesa | Backend Developer
- @haululazkiyaa | Frontend Developer
- @nazwatk | UI/UX & Graphic Designer
- @fawazalrasyid | Backend Developer 
- @caecarryo | Business

Discord
1.⁠ ⁠Haulul : broulya
2.⁠ ⁠⁠Fawaz : fawstival
3.⁠ ⁠⁠Nazwa : Nazwa1212
4.⁠ ⁠⁠Nata : Nataaa
5.⁠ ⁠⁠Indra : indramahesa

## Feedback:
What We're Proud Of:
Even as beginners, we didn’t shy away from the challenges. Our commitment to learning and adapting quickly allowed us to create something we truly believe in. We developed a solution with TerraX that has the potential to make a real difference in the property transaction industry, tackling critical issues like fraud and inefficiency.

## Challenges Faced:
- ⁠Technical Integration: Ensuring that all components of TerraX worked seamlessly together was a significant challenge. We had to overcome various technical obstacles, particularly in integrating blockchain for secure and efficient transactions.
- ⁠Balancing Learning and Development: Balancing the need to learn new skills with the demands of developing a working solution was tough. Time management became critical as we juggled between understanding new technologies and applying them effectively.


## What We Learned:
- On-Chain Development: We learned how to develop a fully on-chain application, which was an invaluable experience for us as beginners.
- ⁠Time Management and Collaboration: We improved our time management skills and learned the importance of effective collaboration during the hackathon, both of which were crucial to our success.


Thank you to the Coinfest Asia community and the Chain Fusion ICP team for organizing such an incredible event. Your efforts have brought together innovative minds and provided a fantastic platform for collaboration and growth. We truly appreciate the opportunity to be a part of this experience. Thank you!