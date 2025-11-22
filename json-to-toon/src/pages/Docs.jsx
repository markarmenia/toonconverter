const Docs = () => {
    return (
        <div className="page-container">
            <h1>Documentation - How to Use TOON Converter</h1>

            <section>
                <h2>Getting Started with TOON Converter</h2>
                <p>
                    TOON Converter is designed to be intuitive and easy to use. Whether you're converting JSON to TOON
                    or YAML to TOON, the process is straightforward and takes just a few seconds. This documentation
                    will guide you through all features and help you get the most out of the converter.
                </p>
            </section>

            <section>
                <h2>Step-by-Step Conversion Guide</h2>

                <h3>1. Access the Converter</h3>
                <p>
                    Navigate to the <a href="/">Converter page</a>. You'll see two side-by-side panels: the input
                    panel on the left and the output panel on the right.
                </p>

                <h3>2. Choose Your Input Format</h3>
                <p>
                    Use the tabs at the top of the input panel to select between:
                </p>
                <ul>
                    <li><strong>JSON:</strong> For JavaScript Object Notation data</li>
                    <li><strong>YAML:</strong> For YAML Ain't Markup Language data</li>
                </ul>

                <h3>3. Input Your Data</h3>
                <p>
                    Paste or type your JSON or YAML data into the input panel. The converter will automatically:
                </p>
                <ul>
                    <li>Validate your syntax in real-time</li>
                    <li>Display any errors or formatting issues</li>
                    <li>Highlight your code for better readability</li>
                </ul>

                <h3>4. Configure Output Options</h3>
                <p>
                    Customize your TOON output using the options in the TOON panel header:
                </p>
                <ul>
                    <li><strong>Indentation:</strong> Choose between 2 spaces (default) or 4 spaces</li>
                    <li><strong>Delimiter:</strong> Select from Comma (,), Semicolon (;), Pipe (|), or Tab</li>
                </ul>

                <h3>5. Copy the TOON Output</h3>
                <p>
                    Click the "Copy" button in the TOON panel to copy the converted output to your clipboard.
                    You'll see a confirmation message when the copy is successful.
                </p>
            </section>

            <section>
                <h2>Understanding TOON Format</h2>
                <p>
                    Token-Oriented Object Notation (TOON) is optimized for Large Language Models (LLMs) like GPT-4,
                    Claude, Gemini, and others. Here's what makes TOON special:
                </p>

                <h3>Key Characteristics</h3>
                <ul>
                    <li><strong>Compact Syntax:</strong> Reduced token count compared to JSON and YAML</li>
                    <li><strong>Structured Format:</strong> Maintains clear hierarchical relationships</li>
                    <li><strong>Human Readable:</strong> Easy to read and understand despite optimization</li>
                    <li><strong>LLM Optimized:</strong> Designed specifically for AI model consumption</li>
                </ul>

                <h3>When to Use TOON</h3>
                <p>
                    Consider using TOON format in these scenarios:
                </p>
                <ul>
                    <li>Sending data to LLM APIs (OpenAI GPT, Anthropic Claude, Google Gemini)</li>
                    <li>Preparing training data for language models</li>
                    <li>Optimizing context window usage in LLM applications</li>
                    <li>Reducing API costs in AI-powered systems</li>
                    <li>Building efficient RAG (Retrieval-Augmented Generation) pipelines</li>
                    <li>Fine-tuning models with token-efficient datasets</li>
                </ul>
            </section>

            <section>
                <h2>Converter Features</h2>

                <h3>Real-Time Validation</h3>
                <p>
                    The converter automatically validates your JSON and YAML input as you type. If there are syntax
                    errors, you'll see clear error messages highlighting the issue and its line number.
                </p>

                <h3>Syntax Highlighting</h3>
                <p>
                    Both input and output panels feature syntax highlighting to make your data more readable and
                    errors easier to spot. Different elements (keys, values, strings, numbers) are color-coded
                    for clarity.
                </p>

                <h3>One-Click Copy</h3>
                <p>
                    The Copy button in the TOON output panel allows you to instantly copy the converted data to your
                    clipboard. Perfect for quickly pasting into your code, API calls, or LLM prompts.
                </p>

                <h3>Dual Format Support</h3>
                <p>
                    Switch seamlessly between JSON and YAML input formats using the tab selector. The converter
                    handles both formats with equal proficiency.
                </p>

                <h3>Customizable Formatting</h3>
                <p>
                    Tailor the TOON output to match your preferences or requirements:
                </p>
                <ul>
                    <li><strong>2-space indentation:</strong> More compact, saves tokens (recommended for LLMs)</li>
                    <li><strong>4-space indentation:</strong> More readable for human review</li>
                    <li><strong>Comma delimiter:</strong> Standard format (default)</li>
                    <li><strong>Semicolon delimiter:</strong> Alternative separation for special use cases</li>
                    <li><strong>Pipe delimiter:</strong> Useful for database-style formatting</li>
                    <li><strong>Tab delimiter:</strong> For TSV-like output compatible with spreadsheet tools</li>
                </ul>
            </section>

            <section>
                <h2>Example Conversions</h2>

                <h3>JSON to TOON Example</h3>
                <p>
                    <strong>Input (JSON):</strong>
                </p>
                <pre style={{ backgroundColor: 'var(--editor-bg)', padding: '1rem', borderRadius: '6px', overflow: 'auto' }}>
                    {`{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "skills": ["JavaScript", "Python", "React"]
}`}
                </pre>
                <p>
                    <strong>Output (TOON):</strong>
                </p>
                <pre style={{ backgroundColor: 'var(--editor-bg)', padding: '1rem', borderRadius: '6px', overflow: 'auto' }}>
                    {`name: John Doe,
age: 30,
email: john@example.com,
skills: [JavaScript, Python, React]`}
                </pre>

                <h3>YAML to TOON Example</h3>
                <p>
                    <strong>Input (YAML):</strong>
                </p>
                <pre style={{ backgroundColor: 'var(--editor-bg)', padding: '1rem', borderRadius: '6px', overflow: 'auto' }}>
                    {`name: John Doe
age: 30
email: john@example.com
skills:
  - JavaScript
  - Python
  - React`}
                </pre>
                <p>
                    <strong>Output (TOON):</strong>
                </p>
                <pre style={{ backgroundColor: 'var(--editor-bg)', padding: '1rem', borderRadius: '6px', overflow: 'auto' }}>
                    {`name: John Doe,
age: 30,
email: john@example.com,
skills: [JavaScript, Python, React]`}
                </pre>
            </section>

            <section>
                <h2>Best Practices</h2>

                <h3>For Optimal Token Efficiency</h3>
                <ul>
                    <li>Use 2-space indentation instead of 4-space when sending data to LLMs</li>
                    <li>Choose comma delimiters for standard TOON format</li>
                    <li>Remove unnecessary whitespace from your input before conversion</li>
                    <li>Use shorter, descriptive key names when structuring your original data</li>
                </ul>

                <h3>For Maximum Readability</h3>
                <ul>
                    <li>Use 4-space indentation for data that humans will review</li>
                    <li>Keep hierarchical structures clear and well-organized</li>
                    <li>Use consistent formatting throughout your document</li>
                </ul>

                <h3>For Data Validation</h3>
                <ul>
                    <li>Always validate your JSON/YAML input before conversion</li>
                    <li>Check for proper escaping of special characters</li>
                    <li>Verify nested structures are correctly formatted</li>
                    <li>Test the TOON output with your target LLM before production use</li>
                </ul>
            </section>

            <section>
                <h2>Supported Data Types</h2>
                <p>
                    TOON Converter handles all standard JSON and YAML data types:
                </p>
                <ul>
                    <li><strong>Strings:</strong> Text values with proper quote handling</li>
                    <li><strong>Numbers:</strong> Integers and floating-point values</li>
                    <li><strong>Booleans:</strong> true/false values</li>
                    <li><strong>Arrays:</strong> Ordered lists of values</li>
                    <li><strong>Objects:</strong> Nested key-value pairs</li>
                    <li><strong>Null:</strong> Null values</li>
                    <li><strong>Nested Structures:</strong> Deep hierarchies of objects and arrays</li>
                </ul>
            </section>

            <section>
                <h2>Troubleshooting</h2>

                <h3>Common Issues</h3>
                <p>
                    <strong>Invalid JSON/YAML Error:</strong> Double-check your syntax, especially:
                </p>
                <ul>
                    <li>Matching quotes and brackets</li>
                    <li>Proper comma placement in JSON</li>
                    <li>Correct indentation in YAML</li>
                    <li>No trailing commas in JSON</li>
                </ul>

                <p>
                    <strong>Output Not Generating:</strong> Ensure:
                </p>
                <ul>
                    <li>Your input is valid JSON or YAML</li>
                    <li>You've selected the correct input format tab</li>
                    <li>There are no syntax errors in the input</li>
                </ul>

                <p>
                    <strong>Copy Not Working:</strong> Try:
                </p>
                <ul>
                    <li>Manually selecting and copying the text</li>
                    <li>Checking your browser permissions for clipboard access</li>
                    <li>Using a different browser if the issue persists</li>
                </ul>
            </section>

            <section>
                <h2>Keyboard Shortcuts</h2>
                <p>
                    Speed up your workflow with these keyboard shortcuts:
                </p>
                <ul>
                    <li><strong>Ctrl/Cmd + V:</strong> Paste into input field</li>
                    <li><strong>Ctrl/Cmd + A:</strong> Select all text in focused panel</li>
                    <li><strong>Tab:</strong> Insert indentation in input field</li>
                </ul>
            </section>

            <section>
                <h2>Browser Compatibility</h2>
                <p>
                    TOON Converter works on all modern web browsers:
                </p>
                <ul>
                    <li>Google Chrome (recommended)</li>
                    <li>Mozilla Firefox</li>
                    <li>Microsoft Edge</li>
                    <li>Safari</li>
                    <li>Opera</li>
                    <li>Brave</li>
                </ul>
                <p>
                    For the best experience, we recommend using the latest version of your preferred browser.
                </p>
            </section>

            <section>
                <h2>API & Integration</h2>
                <p>
                    Currently, TOON Converter is a web-based tool. If you need programmatic access or want to integrate
                    TOON conversion into your applications, you can:
                </p>
                <ul>
                    <li>Check out the <a href="https://github.com/markarmenia/toonconverter" target="_blank" rel="noreferrer">TOON format specification</a> on GitHub</li>
                    <li>Implement TOON parsers in your preferred programming language</li>
                    <li>Contribute to or use existing TOON libraries in the ecosystem</li>
                </ul>
            </section>

            <section>
                <h2>Need More Help?</h2>
                <p>
                    If you have questions that aren't covered in this documentation, please:
                </p>
                <ul>
                    <li>Visit our <a href="/contact">Contact page</a> to reach out</li>
                    <li>Check the <a href="https://github.com/markarmenia/toonconverter" target="_blank" rel="noreferrer">GitHub repository</a> for technical details</li>
                    <li>Open an issue on GitHub for bug reports or feature requests</li>
                    <li>Review our <a href="/about">About page</a> for more information about TOON</li>
                </ul>
            </section>
        </div>
    )
}

export default Docs
