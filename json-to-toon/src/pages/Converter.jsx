import { useState, useEffect, useMemo, useRef } from 'react'
import { encode } from '@toon-format/toon'
import yaml from 'js-yaml'
import { Copy, Check, ChevronDown, ChevronUp, Download, FileText, Trash2, Lightbulb } from 'lucide-react'
import { getEncoding } from 'js-tiktoken'

const enc = getEncoding('cl100k_base')

// Multiple examples that cycle through
const JSON_EXAMPLES = [
  // Example 1: User Profile
  `{
  "user": {
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "age": 28
  },
  "preferences": {
    "theme": "dark",
    "notifications": true
  },
  "tags": ["developer", "designer"]
}`,
  // Example 2: E-commerce Order
  `{
  "order": {
    "id": "ORD-2024-001",
    "customer": "John Doe",
    "total": 149.99,
    "items": [
      {
        "name": "Laptop",
        "price": 99.99,
        "quantity": 1
      },
      {
        "name": "Mouse",
        "price": 25.00,
        "quantity": 2
      }
    ],
    "shipping": {
      "address": "123 Main St",
      "city": "New York",
      "zip": "10001"
    },
    "status": "pending"
  }
}`,
  // Example 3: API Response
  `{
  "status": "success",
  "data": {
    "users": [
      {
        "id": 1,
        "username": "admin",
        "role": "administrator",
        "active": true
      },
      {
        "id": 2,
        "username": "user123",
        "role": "member",
        "active": true
      }
    ],
    "total": 2,
    "page": 1
  },
  "timestamp": "2024-11-21T12:00:00Z"
}`,
  // Example 4: Configuration File
  `{
  "app": {
    "name": "MyApp",
    "version": "1.0.0",
    "port": 3000,
    "database": {
      "host": "localhost",
      "port": 5432,
      "name": "mydb",
      "ssl": true
    },
    "cache": {
      "enabled": true,
      "ttl": 3600,
      "redis": {
        "host": "localhost",
        "port": 6379
      }
    },
    "logging": {
      "level": "info",
      "format": "json"
    }
  }
}`,
  // Example 5: Social Media Post
  `{
  "post": {
    "id": "post_12345",
    "author": {
      "id": "user_789",
      "name": "Sarah Williams",
      "verified": true
    },
    "content": "Just launched my new project! 🚀",
    "timestamp": "2024-11-21T10:30:00Z",
    "likes": 152,
    "comments": 23,
    "tags": ["coding", "launch", "project"],
    "media": [
      {
        "type": "image",
        "url": "https://example.com/image.jpg",
        "alt": "Project screenshot"
      }
    ],
    "visibility": "public"
  }
}`,
  // Example 6: Weather Data
  `{
  "location": {
    "city": "San Francisco",
    "country": "USA",
    "coordinates": {
      "lat": 37.7749,
      "lon": -122.4194
    }
  },
  "current": {
    "temperature": 18,
    "humidity": 65,
    "conditions": "partly cloudy",
    "wind": {
      "speed": 15,
      "direction": "NW"
    }
  },
  "forecast": [
    {
      "day": "Monday",
      "high": 20,
      "low": 12,
      "conditions": "sunny"
    },
    {
      "day": "Tuesday",
      "high": 19,
      "low": 13,
      "conditions": "cloudy"
    }
  ]
}`
]

const YAML_EXAMPLES = [
  // Example 1: User Profile
  `user:
  name: Bob Smith
  email: bob@example.com
  age: 32
preferences:
  theme: light
  notifications: false
tags:
  - engineer
  - architect`,
  // Example 2: E-commerce Product
  `product:
  id: PROD-456
  name: Wireless Headphones
  price: 79.99
  in_stock: true
  specifications:
    color: black
    battery_life: 20 hours
    wireless: true
    noise_cancelling: true
  ratings:
    average: 4.5
    count: 328
  categories:
    - electronics
    - audio
    - accessories`,
  // Example 3: Server Configuration
  `server:
  name: web-server-01
  environment: production
  resources:
    cpu: 4 cores
    memory: 16 GB
    storage: 500 GB
  network:
    ip: 192.168.1.100
    port: 443
    ssl: true
  services:
    - nginx
    - postgresql
    - redis
  monitoring:
    enabled: true
    alerts: true`,
  // Example 4: Blog Post Metadata
  `post:
  title: Getting Started with TOON Format
  author:
    name: Jane Developer
    email: jane@example.com
  published: 2024-11-21
  updated: 2024-11-21
  categories:
    - tutorials
    - programming
  tags:
    - toon
    - data-formats
    - optimization
  content:
    word_count: 1500
    reading_time: 7 minutes
  status: published
  featured: true`,
  // Example 5: Recipe Data
  `recipe:
  name: Chocolate Chip Cookies
  prep_time: 15 minutes
  cook_time: 12 minutes
  servings: 24
  ingredients:
    - flour: 2 cups
    - butter: 1 cup
    - sugar: 1 cup
    - eggs: 2
    - chocolate_chips: 2 cups
  instructions:
    - Preheat oven to 375°F
    - Mix butter and sugar
    - Add eggs and vanilla
    - Combine dry ingredients
    - Bake for 12 minutes
  nutrition:
    calories: 150
    fat: 8g
    carbs: 18g`,
  // Example 6: Task Management
  `project:
  name: Website Redesign
  status: in_progress
  priority: high
  tasks:
    - id: 1
      title: Design mockups
      assigned_to: Sarah
      status: completed
      due_date: 2024-11-15
    - id: 2
      title: Implement frontend
      assigned_to: Mike
      status: in_progress
      due_date: 2024-11-25
    - id: 3
      title: Testing
      assigned_to: Lisa
      status: pending
      due_date: 2024-11-30
  team:
    - Sarah
    - Mike
    - Lisa`
]

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

const Converter = () => {
  const [activeTab, setActiveTab] = useState('json') // 'json' | 'yaml'
  const [inputContent, setInputContent] = useState('')
  const [toonOutput, setToonOutput] = useState('')
  const [error, setError] = useState('')
  const [copiedInput, setCopiedInput] = useState(false)
  const [copiedOutput, setCopiedOutput] = useState(false)

  // Example index for cycling through examples
  const [jsonExampleIndex, setJsonExampleIndex] = useState(0)
  const [yamlExampleIndex, setYamlExampleIndex] = useState(0)

  // New options
  const [indentation, setIndentation] = useState(2)
  const [delimiter, setDelimiter] = useState(',')

  // Token stats
  const inputTokens = useMemo(() => enc.encode(inputContent).length, [inputContent])
  const outputTokens = useMemo(() => enc.encode(toonOutput).length, [toonOutput])

  // Refs for scroll synchronization
  const inputLineNumbersRef = useRef(null)
  const inputTextareaRef = useRef(null)
  const outputLineNumbersRef = useRef(null)
  const outputTextareaRef = useRef(null)

  const handleInputScroll = () => {
    if (inputLineNumbersRef.current && inputTextareaRef.current) {
      inputLineNumbersRef.current.scrollTop = inputTextareaRef.current.scrollTop
    }
  }

  const handleOutputScroll = () => {
    if (outputLineNumbersRef.current && outputTextareaRef.current) {
      outputLineNumbersRef.current.scrollTop = outputTextareaRef.current.scrollTop
    }
  }

  useEffect(() => {
    if (!inputContent.trim()) {
      setToonOutput('')
      setError('')
      return
    }

    try {
      let parsed
      if (activeTab === 'json') {
        parsed = JSON.parse(inputContent)
      } else {
        parsed = yaml.load(inputContent)
      }

      const converted = encode(parsed, {
        indent: indentation,
        delimiter: delimiter
      })
      setToonOutput(converted)
      setError('')
    } catch (err) {
      // console.error('Conversion error:', err)
      setError(err.message)
      setToonOutput('')
    }
  }, [inputContent, activeTab, indentation, delimiter])

  const handleInputChange = (e) => {
    setInputContent(e.target.value)
  }

  const handleFileUpload = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = activeTab === 'json' ? '.json' : '.yaml,.yml'

    input.onchange = async (e) => {
      const file = e.target.files[0]
      if (!file) return

      try {
        const text = await file.text()
        setInputContent(text)
      } catch (err) {
        console.error('File processing error:', err)
        setError(`Error processing file: ${err.message}`)
      }
    }

    input.click()
  }

  const handleDownload = () => {
    if (!toonOutput) return

    const blob = new Blob([toonOutput], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'output.toon'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const clearAll = () => {
    setInputContent('')
    setToonOutput('')
    setError('')
  }

  const loadExample = () => {
    if (activeTab === 'json') {
      // Load current JSON example and increment index
      setInputContent(JSON_EXAMPLES[jsonExampleIndex])
      setJsonExampleIndex((jsonExampleIndex + 1) % JSON_EXAMPLES.length)
    } else {
      // Load current YAML example and increment index
      setInputContent(YAML_EXAMPLES[yamlExampleIndex])
      setYamlExampleIndex((yamlExampleIndex + 1) % YAML_EXAMPLES.length)
    }
  }


  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setInputContent('') // Clear input when switching tabs
    setToonOutput('') // Clear output when switching tabs
    setError('') // Clear any errors
  }

  const copyToClipboard = async (text, isInput) => {
    if (!text) return
    try {
      await navigator.clipboard.writeText(text)
      if (isInput) {
        setCopiedInput(true)
        setTimeout(() => setCopiedInput(false), 2000)
      } else {
        setCopiedOutput(true)
        setTimeout(() => setCopiedOutput(false), 2000)
      }
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const faqs = [
    {
      question: "What is TOON?",
      answer: "TOON (Token-Oriented Object Notation) is a data format designed to be more efficient for Large Language Models (LLMs) to process and generate compared to JSON or YAML."
    },
    {
      question: "Why should I use TOON?",
      answer: "TOON reduces the token count for structured data, which can lower costs and improve latency when working with LLM APIs. It also aims to be more human-readable in some contexts."
    },
    {
      question: "Is my data safe?",
      answer: "Yes! All conversions happen entirely within your browser. No data is sent to any server."
    },
    {
      question: "Can I convert TOON back to JSON?",
      answer: "Currently, this tool supports one-way conversion from JSON/YAML to TOON. A decoder is planned for future releases."
    }
  ]

  return (
    <div className="main-content">
      <div className="hero-section">
        <h1 className="hero-title">
          TOON Converter
        </h1>
        <p className="hero-subtitle">
          Free TOON converter that reduces LLM token usage with TOON format.<br />
          Fast, secure, and privacy-focused JSON/YAML to TOON conversion for optimized AI interactions.
        </p>
      </div>

      {error && (
        <div style={{
          padding: '12px 20px',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '8px',
          color: '#ef4444',
          marginBottom: '20px',
          fontSize: '14px'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <div className="converter-grid">
        {/* Input Section */}
        <div className="editor-container">
          <div className="editor-header">
            <div className="editor-tabs">
              <button
                className={`editor-tab ${activeTab === 'json' ? 'active' : ''}`}
                onClick={() => handleTabChange('json')}
              >
                JSON
              </button>
              <button
                className={`editor-tab ${activeTab === 'yaml' ? 'active' : ''}`}
                onClick={() => handleTabChange('yaml')}
              >
                YAML
              </button>
            </div>
            <div className="editor-actions">
              <button className="action-btn" onClick={loadExample} title="Load Example">
                <Lightbulb size={14} style={{ marginRight: '4px' }} />
                <span className="btn-text">Example</span>
              </button>
              <button className="action-btn" onClick={handleFileUpload} title="Load File">
                <FileText size={14} style={{ marginRight: '4px' }} />
                <span className="btn-text">Load File</span>
              </button>
              <button className="action-btn" onClick={clearAll} title="Clear All">
                <Trash2 size={14} style={{ marginRight: '4px' }} />
                <span className="btn-text">Clear All</span>
              </button>
              <button
                className="action-btn"
                onClick={() => copyToClipboard(inputContent, true)}
                title="Copy Input"
              >
                {copiedInput ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>
          </div>
          <div className="editor-content">
            <div className="line-numbers" ref={inputLineNumbersRef}>
              {inputContent.split('\n').map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <textarea
              ref={inputTextareaRef}
              onScroll={handleInputScroll}
              value={inputContent}
              onChange={handleInputChange}
              placeholder={`Paste your ${activeTab.toUpperCase()} here...`}
              spellCheck="false"
            />
          </div>
        </div>

        {/* Output Section */}
        <div className="editor-container">
          <div className="editor-header">
            <div className="editor-tabs">
              <button className="editor-tab active">
                TOON
              </button>
            </div>
            <div className="editor-actions">
              <div className="settings-group" style={{ display: 'flex', gap: '8px', marginRight: '8px', borderRight: '1px solid var(--border-color)', paddingRight: '8px' }}>
                <select
                  value={indentation}
                  onChange={(e) => setIndentation(Number(e.target.value))}
                  className="action-select"
                  title="Indentation"
                >
                  <option value={2}>2 Spaces</option>
                  <option value={4}>4 Spaces</option>
                </select>
                <select
                  value={delimiter}
                  onChange={(e) => setDelimiter(e.target.value)}
                  className="action-select"
                  title="Delimiter"
                >
                  <option value=",">Comma (,)</option>
                  <option value=";">Semi (;)</option>
                  <option value="|">Pipe (|)</option>
                  <option value={"\t"}>Tab (\t)</option>
                </select>
              </div>
              <button className="action-btn" onClick={handleDownload} disabled={!toonOutput}>
                <Download size={14} style={{ marginRight: '4px' }} />
                <span className="btn-text">Download</span>
              </button>
              <button
                className="action-btn"
                onClick={() => copyToClipboard(toonOutput, false)}
              >
                {copiedOutput ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>
          </div>
          <div className="editor-content">
            <div className="line-numbers" ref={outputLineNumbersRef}>
              {toonOutput.split('\n').map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <textarea
              ref={outputTextareaRef}
              onScroll={handleOutputScroll}
              value={toonOutput}
              readOnly
              placeholder="Your result will be shown here."
              spellCheck="false"
            />
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-label">{activeTab.toUpperCase()} Tokens</span>
          <span className="stat-value">{inputTokens}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">TOON Tokens</span>
          <span className="stat-value">{outputTokens}</span>
        </div>
        <div className="stat-item highlight">
          <span className="stat-label">Saved</span>
          <span className="stat-value">
            {inputTokens - outputTokens} tokens ({inputTokens > 0 ? Math.round(((inputTokens - outputTokens) / inputTokens) * 100) : 0}%)
          </span>
        </div>
      </div>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Converter
