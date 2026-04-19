# Contributing to Yaqeen

First off, thank you for considering contributing to Yaqeen! It's people like you that make Yaqeen such a great platform for Islamic learning.

We welcome contributions of all kinds including but not limited to:
- Bug reports and fixes
- Feature suggestions and implementations
- Documentation improvements
- Code quality improvements
- Translations
- Testing and QA

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the [issue list](https://github.com/yourusername/yaqeen/issues) as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem** in as much detail as possible
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs if possible**
- **Include your environment details**: OS, browser, Node.js version, etc.

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/yourusername/yaqeen/issues). When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior** and **explain the expected behavior**
- **Explain why this enhancement would be useful**
- **List some other applications where this enhancement exists** if applicable

### Pull Requests

- Fill in the required template
- Include appropriate test cases
- Update documentation as needed
- Follow the styleguides below
- End all files with a newline

#### Pull Request Process

1. Fork the repository and create your branch from `main`
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to your fork: `git push origin feature/amazing-feature`
6. Open a Pull Request with a clear title and description
7. Link any related issues in the PR description
8. Ensure all CI/CD checks pass
9. Request review from maintainers

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - 🎨 `:art:` when improving the format/structure of the code
  - ⚡ `:zap:` when improving performance
  - 📝 `:memo:` when writing docs
  - 🐛 `:bug:` when fixing a bug
  - ✨ `:sparkles:` when introducing a new feature
  - ✅ `:white_check_mark:` when adding tests
  - 🔒 `:lock:` when dealing with security
  - ⬆️ `:arrow_up:` when upgrading dependencies
  - ⬇️ `:arrow_down:` when downgrading dependencies
  - 🗑️ `:wastebasket:` when removing code or files

**Example:**
```
✨ Add tafsir search functionality

- Implement full-text search for tafsir content
- Add search result highlighting
- Include relevance sorting

Fixes #123
```

### JavaScript/React Styleguide

- Use 2 spaces for indentation
- Use camelCase for variable and function names
- Use PascalCase for component names
- Use UPPER_SNAKE_CASE for constants
- Prefer functional components with hooks over class components
- Write JSDoc comments for functions and components
- Use meaningful variable names
- Keep functions small and focused (single responsibility principle)

**Example:**
```javascript
/**
 * Displays a Quranic verse with tafsir
 * @param {Object} props - Component props
 * @param {number} props.verseId - The verse identifier
 * @param {string} props.translation - Translation language
 * @returns {JSX.Element} Rendered verse component
 */
export function VerseCard({ verseId, translation }) {
  const [verse, setVerse] = useState(null);

  useEffect(() => {
    // Fetch verse data
  }, [verseId, translation]);

  if (!verse) return <div>Loading...</div>;

  return (
    <article className="verse-card">
      <p className="arabic-text">{verse.arabic}</p>
      <p className="translation">{verse.translations[translation]}</p>
      <p className="tafsir">{verse.tafsir}</p>
    </article>
  );
}
```

### CSS/Tailwind Styleguide

- Use Tailwind CSS utility classes for styling
- Avoid custom CSS when Tailwind utilities can be used
- Use meaningful class names for custom components
- Follow mobile-first responsive design approach
- Use `@media` queries only when Tailwind utilities are insufficient

**Example:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
  <card className="rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
    {/* Content */}
  </card>
</div>
```

### Documentation Styleguide

- Use Markdown for all documentation
- Use clear, concise language
- Include code examples where appropriate
- Link to related documentation
- Keep sentences and paragraphs short
- Use headers to organize content
- Include a table of contents for longer documents

## Development Setup

### Prerequisites
- Node.js 18.17 or later
- Git
- Your favorite code editor (VS Code recommended)

### Setup Steps

1. Fork and clone the repository
   ```bash
   git clone https://github.com/yourusername/yaqeen.git
   cd yaqeen
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a branch for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Make your changes and test
   ```bash
   npm run dev
   ```

5. Run linter to check code quality
   ```bash
   npm run lint
   ```

6. Build for production to ensure no errors
   ```bash
   npm run build
   ```

## Project Structure

Understanding the project structure will help you contribute more effectively:

```
yaqeen/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── design/                # Design files and mockups
├── public/                # Static assets
├── .eslintrc.json         # ESLint configuration
├── jsconfig.json          # JavaScript config
├── next.config.mjs        # Next.js config
├── postcss.config.mjs     # PostCSS config
└── tailwind.config.js     # Tailwind CSS config
```

## Testing

Before submitting a pull request:

1. Ensure your code passes linting
   ```bash
   npm run lint
   ```

2. Test your changes locally
   ```bash
   npm run dev
   ```

3. Build for production to catch any issues
   ```bash
   npm run build
   ```

4. Add tests for new functionality if applicable

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help organize and categorize issues and pull requests.

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on
- `in-progress` - Currently being worked on
- `review-needed` - Waiting for review

### Recognition

Contributors are recognized in:
- The project README.md
- Release notes
- GitHub contributor graph

Thank you for contributing to Yaqeen! 🙏

---

For more information, visit our [GitHub repository](https://github.com/yourusername/yaqeen) or contact us at contribute@yaqeen.dev.
