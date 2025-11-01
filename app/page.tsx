'use client'

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="card">
        <h1>EGE</h1>
        <p className="subtitle">A Modern Interactive Experience</p>

        <div className="counter">{count}</div>

        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>

        <div className="features">
          <div className="feature">
            <h3>🚀 Fast</h3>
            <p>Built with Next.js for optimal performance and speed</p>
          </div>

          <div className="feature">
            <h3>🎨 Beautiful</h3>
            <p>Modern gradient design with smooth animations</p>
          </div>

          <div className="feature">
            <h3>📱 Responsive</h3>
            <p>Works perfectly on all devices and screen sizes</p>
          </div>
        </div>
      </div>
    </div>
  )
}
