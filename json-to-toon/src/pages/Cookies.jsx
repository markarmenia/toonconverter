const Cookies = () => {
    return (
        <div className="page-container">
            <h1>Cookie Policy - TOON Converter</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

            <section>
                <h2>Introduction to Our Cookie Policy</h2>
                <p>
                    This Cookie Policy explains how TOON Converter uses cookies and similar technologies when you
                    visit our website. We're committed to transparency about our data practices, and this policy
                    will help you understand what cookies are, how we use them, and what choices you have.
                </p>
            </section>

            <section>
                <h2>What Are Cookies?</h2>
                <p>
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile phone)
                    when you visit websites. They help websites remember information about your visit, making your
                    next visit easier and the site more useful to you.
                </p>
                <p>
                    There are different types of cookies:
                </p>
                <ul>
                    <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                    <li><strong>Permanent Cookies:</strong> Cookies that remain on your device until they expire or you delete them</li>
                    <li><strong>First-Party Cookies:</strong> Cookies set by the website you're visiting</li>
                    <li><strong>Third-Party Cookies:</strong> Cookies set by other websites and services (we don't use these)</li>
                </ul>
            </section>

            <section>
                <h2>Our Cookie Usage</h2>
                <p>
                    TOON Converter uses <strong>minimal cookies</strong> and takes a privacy-first approach. Here's
                    exactly what we do and don't do:
                </p>

                <h3>What We DO NOT Use</h3>
                <ul>
                    <li>❌ <strong>Advertising Cookies:</strong> We don't serve ads or use advertising cookies</li>
                    <li>❌ <strong>Tracking Cookies:</strong> We don't track your behavior across websites</li>
                    <li>❌ <strong>Analytics Cookies:</strong> We don't use Google Analytics, Facebook Pixel, or similar services</li>
                    <li>❌ <strong>Third-Party Cookies:</strong> We don't allow third parties to set cookies through our site</li>
                    <li>❌ <strong>Social Media Cookies:</strong> We don't use social media tracking cookies</li>
                    <li>❌ <strong>Marketing Cookies:</strong> We don't use cookies for marketing or retargeting</li>
                </ul>

                <h3>What We May Use</h3>
                <p>
                    We use browser <strong>Local Storage</strong> (not technically cookies, but similar) for:
                </p>
                <ul>
                    <li>✅ <strong>Preference Storage:</strong> Saving your tab selection (JSON or YAML)</li>
                    <li>✅ <strong>Format Settings:</strong> Remembering your chosen indentation and delimiter preferences</li>
                    <li>✅ <strong>UI State:</strong> Maintaining your interface preferences for a better user experience</li>
                </ul>
                <p>
                    <strong>Important:</strong> This local storage data:
                </p>
                <ul>
                    <li>Stays only on your device</li>
                    <li>Is never transmitted to our servers</li>
                    <li>Can be cleared anytime through your browser settings</li>
                    <li>Does not contain any of your conversion data</li>
                </ul>
            </section>

            <section>
                <h2>Essential Technical Cookies</h2>
                <p>
                    We may use strictly necessary cookies that are essential for the website to function properly.
                    These might include:
                </p>
                <ul>
                    <li><strong>Security Cookies:</strong> To protect against spam and abuse</li>
                    <li><strong>Load Balancing:</strong> To distribute traffic across servers</li>
                    <li><strong>Session Management:</strong> To maintain your connection during your visit</li>
                </ul>
                <p>
                    These cookies are necessary for the basic functionality of the website and cannot be disabled
                    in our systems.
                </p>
            </section>

            <section>
                <h2>Cookie Categories We DON'T Use</h2>

                <h3>Performance and Analytics Cookies</h3>
                <p>
                    Unlike many websites, we deliberately choose NOT to use performance or analytics cookies. This means:
                </p>
                <ul>
                    <li>We don't track page views with Google Analytics</li>
                    <li>We don't measure user engagement with analytics tools</li>
                    <li>We don't collect statistics about how you use our site</li>
                </ul>
                <p>
                    We believe your privacy is more important than detailed usage statistics.
                </p>

                <h3>Advertising and Targeting Cookies</h3>
                <p>
                    We do not display advertisements and therefore do not use any advertising or targeting cookies:
                </p>
                <ul>
                    <li>No ad network cookies</li>
                    <li>No retargeting or remarketing cookies</li>
                    <li>No behavioral advertising cookies</li>
                    <li>No conversion tracking cookies</li>
                </ul>

                <h3>Social Media Cookies</h3>
                <p>
                    We do not integrate social media plugins that would set cookies:
                </p>
                <ul>
                    <li>No Facebook cookies</li>
                    <li>No Twitter/X tracking</li>
                    <li>No LinkedIn analytics</li>
                    <li>No social sharing buttons with tracking</li>
                </ul>
            </section>

            <section>
                <h2>Local Storage vs. Cookies</h2>
                <p>
                    TOON Converter primarily uses browser Local Storage rather than traditional cookies. Here's the difference:
                </p>

                <h3>Cookies:</h3>
                <ul>
                    <li>Sent to the server with every HTTP request</li>
                    <li>Have expiration dates</li>
                    <li>Limited to 4KB of data</li>
                    <li>Can be first-party or third-party</li>
                </ul>

                <h3>Local Storage:</h3>
                <ul>
                    <li>Stays entirely on your device - never sent to servers</li>
                    <li>Persists until explicitly cleared</li>
                    <li>Can store more data (typically 5-10MB)</li>
                    <li>Only accessible by the same domain</li>
                </ul>

                <p>
                    We prefer Local Storage because it:
                </p>
                <ul>
                    <li>Keeps your data on your device</li>
                    <li>Doesn't increase the size of network requests</li>
                    <li>Gives you more control</li>
                    <li>Is more transparent and privacy-friendly</li>
                </ul>
            </section>

            <section>
                <h2>Managing Your Cookie Preferences</h2>

                <h3>Browser Settings</h3>
                <p>
                    Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul>
                    <li>View which cookies are stored on your device</li>
                    <li>Delete cookies individually or all at once</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies (which may affect website functionality)</li>
                    <li>Set your browser to notify you when cookies are set</li>
                </ul>

                <h3>How to Clear Local Storage</h3>
                <p>
                    To clear the local storage data TOON Converter uses:
                </p>
                <ul>
                    <li><strong>Chrome:</strong> Settings → Privacy and Security → Clear Browsing Data → Cookies and Site Data</li>
                    <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data → Clear Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data → Remove All</li>
                    <li><strong>Edge:</strong> Settings → Privacy, Search, and Services → Clear Browsing Data</li>
                </ul>

                <h3>Using Private/Incognito Mode</h3>
                <p>
                    If you use TOON Converter in private/incognito mode:
                </p>
                <ul>
                    <li>No local storage data will be saved after you close the window</li>
                    <li>Your preferences won't be remembered between sessions</li>
                    <li>You'll have maximum privacy</li>
                </ul>
            </section>

            <section>
                <h2>Third-Party Services</h2>
                <p>
                    We want to be completely transparent: we do not use any third-party services that set cookies
                    on our website. This includes:
                </p>
                <ul>
                    <li>No Google Analytics or other analytics platforms</li>
                    <li>No advertising networks</li>
                    <li>No social media widgets with tracking</li>
                    <li>No third-party chat services</li>
                    <li>No A/B testing tools</li>
                    <li>No heat mapping or session recording tools</li>
                </ul>
                <p>
                    When you click on external links (like our GitHub repository), you'll be subject to those
                    websites' cookie policies, not ours.
                </p>
            </section>

            <section>
                <h2>Cookie Consent</h2>
                <p>
                    Because we use only essential technical cookies and local storage for functionality, we don't
                    require a cookie consent banner. Here's why:
                </p>
                <ul>
                    <li>We don't use cookies for tracking or advertising</li>
                    <li>The local storage we use is essential for the tool to function</li>
                    <li>Under GDPR, essential cookies don't require consent</li>
                    <li>You can clear local storage at any time through your browser</li>
                </ul>
                <p>
                    By using TOON Converter, you consent to the use of essential local storage for saving your
                    preferences. This is necessary for the basic functionality of the tool.
                </p>
            </section>

            <section>
                <h2>GDPR Compliance</h2>
                <p>
                    Our minimal cookie usage aligns with GDPR requirements:
                </p>
                <ul>
                    <li><strong>No consent needed:</strong> We only use essential, functional storage</li>
                    <li><strong>No profiling:</strong> We don't build user profiles</li>
                    <li><strong>No cross-site tracking:</strong> No tracking across websites</li>
                    <li><strong>Data minimization:</strong> We collect only what's necessary for functionality</li>
                    <li><strong>User control:</strong> You can clear data anytime</li>
                    <li><strong>Transparency:</strong> This policy clearly explains our practices</li>
                </ul>
            </section>

            <section>
                <h2>California Cookie Law (CalOPPA)</h2>
                <p>
                    California's Online Privacy Protection Act requires disclosure of cookie usage. As outlined in
                    this policy:
                </p>
                <ul>
                    <li>We use minimal local storage for essential functionality</li>
                    <li>We do not use cookies for tracking or advertising</li>
                    <li>We do not sell personal information</li>
                    <li>You can clear stored data through your browser settings</li>
                </ul>
            </section>

            <section>
                <h2>Do Not Track (DNT) Signals</h2>
                <p>
                    Since TOON Converter doesn't track users anyway, Do Not Track (DNT) browser signals are
                    effectively honored by default. We don't track you regardless of your DNT settings because:
                </p>
                <ul>
                    <li>We don't use analytics tools</li>
                    <li>We don't use tracking cookies</li>
                    <li>All processing happens client-side</li>
                    <li>We don't collect behavioral data</li>
                </ul>
            </section>

            <section>
                <h2>Updates to This Cookie Policy</h2>
                <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for
                    legal, operational, or regulatory reasons. The "Last updated" date at the top of this page shows
                    when the policy was last revised.
                </p>
                <p>
                    If we make significant changes, we'll provide notice on our website. However, our commitment to
                    minimal cookie usage and user privacy will remain unchanged.
                </p>
            </section>

            <section>
                <h2>Questions About Cookies</h2>
                <p>
                    If you have questions about our use of cookies or local storage, please:
                </p>
                <ul>
                    <li>Email us at: support@toon-converter.com</li>
                    <li>Visit our <a href="/contact">Contact page</a></li>
                    <li>Check our <a href="/privacy">Privacy Policy</a> for more information</li>
                    <li>Review our <a href="https://github.com/toon-format/toon" target="_blank" rel="noreferrer">open-source code</a></li>
                </ul>
            </section>

            <section>
                <h2>Summary</h2>
                <p>
                    In plain language, here's our cookie commitment:
                </p>
                <ul>
                    <li>✅ We use minimal local storage for essential functionality only</li>
                    <li>✅ We don't use tracking cookies</li>
                    <li>✅ We don't use advertising cookies</li>
                    <li>✅ We don't use analytics cookies</li>
                    <li>✅ We don't share data with third parties</li>
                    <li>✅ You can clear all stored data through your browser</li>
                    <li>✅ Your conversion data never reaches our servers</li>
                </ul>
                <p>
                    TOON Converter is designed to be a privacy-respecting tool for converting JSON and YAML to TOON
                    format for Large Language Models. Our minimal cookie usage reflects our commitment to your privacy.
                </p>
            </section>
        </div>
    )
}

export default Cookies
