## 🧑‍💻 Contribution Guidelines

Please follow these coding standards to keep the codebase consistent, clean, and professional.

#### 📁 Folder & File Naming

|Type|Format|Example|
|----|------|-------|
|Folders|lowercase-dash|user-profile
|Files|lowercase-dash|primary-button.tsx

> #### ✅ Do not use camelCase or PascalCase in file/folder names.

#### 🧠 Code Naming Conventions

|Item|Format|Example|
|----|------|-------|
|Variables|camelCase|userList|
|Functions|camelCase|getUserData|
Props|camelCase|onSubmit|
Components|PascalCase|UserCard|

#### 🧱 Project Structure

|Folder|Description|
|------|-----------|
|/app|→ App router structure|
|/components|→ Shared + UI components|
|/hooks|→ Custom React hooks|
|/lib|→ Helpers and utilities|
|/styles|→ Global styles (e.g., Tailwind)|
|/types|→ Global type declaration files|
|/public|→ Static assets (images, fonts)|
|/assets|→ Dynamic assets (images)|

> #### Use the /types folder for:

- Custom global types
- Shared interfaces
- API response definitions

#### ✅ Commit Message Format
Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

#### 🚀 Before Submitting a Pull Request
- Follow folder & file naming standards
- Use camelCase and PascalCase in code appropriately
- Place types in /types/ directory
- Format code with Prettier (npm run format)
- Remove any console logs or debug code
- Reuse existing components when applicable
