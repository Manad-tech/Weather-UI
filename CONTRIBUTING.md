# 🌤️ Weather-UI — Contributing Guide

Thank you for your interest in contributing to **Weather-UI**!  
We’re thrilled to have you join our open-source community — especially during **Hacktoberfest** 💻🎉  

This document includes:
- Contribution guidelines  
- Code of conduct  
- Pull request template  

---

## 🧰 Project Setup

### 1. Fork the Repository
Click the **Fork** button at the top-right of the repo page to create your own copy under your GitHub account.

### 2. Clone Your Fork
```bash
git clone https://github.com/<your-username>/Weather-UI.git
cd Weather-UI
3. Create a New Branch
Always create a new branch for your work:

bash
Copy code
git checkout -b feature/your-feature-name
Examples:

feature/add-dark-theme

fix/api-error

docs/improve-readme

4. Install Dependencies
Ensure you have Node.js (v14+) and npm or yarn installed.

bash
Copy code
npm install
# or
yarn install
5. Start the Development Server
bash
Copy code
npm run dev
# or
yarn dev
Then open http://localhost:5173.

🧠 Development Guidelines
Code Style
Use consistent indentation (2 spaces).

Use meaningful variable and component names.

Follow React functional component and hooks best practices.

Run ESLint before committing (if enabled).

Commit Messages
Use clear, descriptive commit messages:

✅ feat: add dark mode toggle

🐛 fix: API data fetch issue

📝 docs: update README
Avoid generic ones like “update” or “fix bug”.

Testing
If the repo includes tests:

bash
Copy code
npm test
Please write tests for new features whenever possible.

Review Checklist
No console logs.

No unused imports.

Responsive design verified.

Code is readable and documented.

🪄 Submitting Your Changes
Stage and Commit

bash
Copy code
git add .
git commit -m "feat: describe your change"
Push Your Branch

bash
Copy code
git push origin feature/your-feature-name
Open a Pull Request

Go to: https://github.com/skepttalk/Weather-UI

Click “Compare & pull request”

Fill in the PR template below

🏷️ Hacktoberfest Guidelines
This project is Hacktoberfest-friendly! 🎃
You can earn contributions by submitting meaningful pull requests like:

Fixing bugs 🐞

Improving UI or UX 🎨

Adding themes or animations ✨

Updating documentation 📘

Refactoring or cleaning up code 🧹

Make sure your PR:

Is useful

Has a clear description

Does not contain spam or empty commits

💡 Ideas for Contributions
Add more weather conditions (icons, dynamic backgrounds)

Add unit toggles (°C ↔ °F)

Add search by city / country

Add offline or caching support

Add color themes or transitions

Improve error handling and loading UI

Add localization / i18n

Write better docs or examples

📜 CODE OF CONDUCT
Our Pledge
We are committed to providing a friendly, safe, and welcoming environment for everyone, regardless of background, identity, or experience.

Our Standards
Examples of positive behavior:

Being respectful and inclusive

Giving constructive feedback

Focusing on what is best for the community

Examples of unacceptable behavior:

Harassment or personal attacks

Discriminatory comments

Trolling or spamming

Enforcement
Project maintainers have the right to remove, edit, or reject contributions that violate this Code of Conduct.
Serious violations may result in banning from participation.

Contact
For any concerns, please reach out to:

GitHub: @skepttalk

Issues Page: Weather-UI Issues

📨 PULL REQUEST TEMPLATE
When you open a Pull Request (PR), please follow this template:

🎯 Description
Explain what your PR does (fixes, features, docs, etc.)

Example: “Added dark theme toggle to the WeatherCard component.”

✅ Type of Change
 Bug fix 🐞

 New feature ✨

 UI enhancement 🎨

 Documentation update 📝

 Code cleanup 🧹

📸 Screenshots (if applicable)
(Attach screenshots or screen recordings to show your change.)

🔍 How Has This Been Tested?
Describe how you tested your changes (e.g., browsers, devices, manual testing, etc.)

🧩 Checklist
 My code follows the project style.

 I have commented my code where necessary.

 I have tested my changes locally.

 My changes do not break existing features.

 I’ve added relevant documentation or screenshots.

🗒️ Additional Notes
(Optional) Anything else reviewers should know.

🤝 Maintainers
GitHub: @skepttalk

Repo: Weather-UI

If you have any questions, feel free to:

Open an issue

Start a discussion

Join us in making Weather-UI better for everyone 🌤️

🎉 Happy Coding & Happy Hacktoberfest!
“Open source is not just code — it’s community.” 💙

yaml
Copy code

---

### 📄 How to Use
1. Create a file in your forked repo:
Weather-UI/CONTRIBUTING.md

sql
Copy code
2. Paste all of the above content into it.
3. Commit and push:
```bash
git add CONTRIBUTING.md
git commit -m "docs: add complete contributing guide for Hacktoberfest"
git push origin main
Open a PR — and you’ll be officially contributing 🎉