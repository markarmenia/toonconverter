const About = () => {
    return (
        <div className="page-container">
            <h1>About TOON Converter - JSON & YAML to TOON Format Converter</h1>

            <section>
                <h2>What is TOON Converter?</h2>
                <p>
                    TOON Converter is a free, open-source web application designed to help developers, data scientists,
                    and AI/ML engineers convert their structured data from JSON (JavaScript Object Notation) and YAML
                    (YAML Ain't Markup Language) formats into Token-Oriented Object Notation (TOON). As artificial
                    intelligence and large language models (LLMs) continue to evolve, the need for token-efficient data
                    formats has become increasingly important.
                </p>
            </section>

            <section>
                <h2>Understanding TOON Format</h2>
                <p>
                    Token-Oriented Object Notation (TOON) is a revolutionary data serialization format specifically
                    optimized for Large Language Models, including GPT-4, Claude, Gemini, and other AI systems. Unlike
                    traditional formats like JSON and YAML, TOON minimizes token usage while maintaining data structure
                    and readability. This optimization is crucial for:
                </p>
                <ul>
                    <li><strong>Reducing API Costs:</strong> Lower token consumption means reduced costs when using LLM APIs</li>
                    <li><strong>Faster Processing:</strong> Fewer tokens result in quicker processing times and responses</li>
                    <li><strong>Context Window Optimization:</strong> Fit more data within LLM context windows</li>
                    <li><strong>Improved Performance:</strong> Enhanced efficiency in AI-powered applications and workflows</li>
                </ul>
            </section>

            <section>
                <h2>Why Choose TOON Converter?</h2>
                <p>
                    Our JSON to TOON converter and YAML to TOON converter tool offers several advantages for modern
                    development workflows:
                </p>
                <ul>
                    <li><strong>100% Client-Side Processing:</strong> All conversions happen in your browser - your data never leaves your device</li>
                    <li><strong>Real-Time Conversion:</strong> Instant conversion as you type or paste your data</li>
                    <li><strong>Syntax Validation:</strong> Automatic validation for JSON and YAML input formats</li>
                    <li><strong>Customizable Output:</strong> Configure indentation (2 or 4 spaces) and delimiters (comma, semicolon, pipe, or tab)</li>
                    <li><strong>Zero Cost:</strong> Completely free to use with no registration or subscription required</li>
                    <li><strong>Open Source:</strong> Transparent codebase available on GitHub for community contributions</li>
                    <li><strong>Cross-Platform:</strong> Works on any device with a modern web browser</li>
                </ul>
            </section>

            <section>
                <h2>Who Benefits from TOON Format?</h2>
                <p>
                    TOON Converter is designed for a wide range of professionals working with AI and data:
                </p>
                <ul>
                    <li><strong>AI/ML Engineers:</strong> Optimize data for training and fine-tuning language models</li>
                    <li><strong>Data Scientists:</strong> Prepare datasets for LLM-based analysis and processing</li>
                    <li><strong>Software Developers:</strong> Build token-efficient applications using GPT, Claude, or Gemini APIs</li>
                    <li><strong>API Developers:</strong> Reduce token costs in LLM API integrations</li>
                    <li><strong>Researchers:</strong> Process large datasets efficiently within context window limits</li>
                    <li><strong>DevOps Engineers:</strong> Optimize configuration files for AI-powered infrastructure tools</li>
                </ul>
            </section>

            <section>
                <h2>Key Features</h2>
                <p>
                    TOON Converter provides a comprehensive set of features for seamless data format conversion:
                </p>
                <ul>
                    <li>Support for both JSON and YAML input formats</li>
                    <li>Automatic format detection and validation</li>
                    <li>Real-time syntax highlighting for improved readability</li>
                    <li>One-click copy to clipboard functionality</li>
                    <li>Customizable formatting options (indentation and delimiters)</li>
                    <li>Error detection and helpful error messages</li>
                    <li>Dark mode interface for comfortable extended use</li>
                    <li>Responsive design for desktop, tablet, and mobile devices</li>
                </ul>
            </section>

            <section>
                <h2>Privacy & Security</h2>
                <p>
                    We take your data privacy seriously. TOON Converter operates entirely in your browser using
                    client-side JavaScript. This means:
                </p>
                <ul>
                    <li>Your data is never uploaded to our servers or any third-party services</li>
                    <li>No data collection, tracking, or analytics on your conversions</li>
                    <li>Complete privacy for sensitive or proprietary data</li>
                    <li>Works offline once the page is loaded</li>
                    <li>No cookies or persistent storage of your data</li>
                </ul>
            </section>

            <section>
                <h2>Open Source & Community</h2>
                <p>
                    TOON Converter is built on the open-source TOON format specification. We believe in transparency
                    and community-driven development. You can:
                </p>
                <ul>
                    <li>View and contribute to the source code on <a href="https://github.com/toon-format/toon" target="_blank" rel="noreferrer">GitHub</a></li>
                    <li>Report bugs or request features through GitHub Issues</li>
                    <li>Participate in discussions about the TOON format specification</li>
                    <li>Fork and customize the converter for your specific needs</li>
                    <li>Contribute to improving the TOON ecosystem</li>
                </ul>
            </section>

            <section>
                <h2>Get Started Today</h2>
                <p>
                    Ready to optimize your data for Large Language Models? Head over to our <a href="/">Converter</a> page
                    to start converting JSON and YAML to TOON format. No installation, no registration - just paste
                    your data and convert instantly.
                </p>
                <p>
                    For detailed instructions on using the converter, visit our <a href="/docs">Documentation</a> page.
                    If you have questions or need support, feel free to <a href="/contact">Contact Us</a>.
                </p>
            </section>
        </div>
    )
}

export default About
