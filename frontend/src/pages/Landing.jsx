import React from 'react';

// Landing Page Component
const LandingPage=()=> {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Connect. Communicate. <span className="text-yellow-300">Collaborate.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Experience the future of messaging with Inboxly – where seamless communication meets powerful collaboration tools.
          </p>
          <div className="space-x-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Core Features Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Powerful Features for Modern Communication
          </h2>
          
          {/* Messaging Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-blue-600">💬 Advanced Messaging</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Direct & Group Chats</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• 1:1 direct messaging</li>
                  <li>• Unlimited group chats</li>
                  <li>• Threaded replies</li>
                  <li>• Message reactions 😊</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">✏️</div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Rich Text & Code</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Rich text formatting</li>
                  <li>• Markdown support</li>
                  <li>• Code snippets</li>
                  <li>• Edit & delete messages</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">👁️</div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Live Indicators</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Typing indicators</li>
                  <li>• Presence status</li>
                  <li>• Read receipts</li>
                  <li>• Delivery status</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Media & Attachments */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-purple-600">📎 Media & Attachments</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">📁</div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">File Management</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• File and image uploads with instant previews</li>
                  <li>• Local disk or S3-compatible storage</li>
                  <li>• Automatic metadata extraction</li>
                  <li>• Smart link previews</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🔗</div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Smart Previews</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Rich link previews with thumbnails</li>
                  <li>• Image gallery view</li>
                  <li>• Document preview support</li>
                  <li>• Metadata-rich attachments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Real-time Features */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-green-600">⚡ Real-time & Offline</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Lightning Speed</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Socket.IO WebSockets</li>
                  <li>• Instant message delivery</li>
                  <li>• Zero-delay updates</li>
                  <li>• Real-time synchronization</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Offline Support</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Message queueing</li>
                  <li>• Local caching</li>
                  <li>• Auto-sync on reconnect</li>
                  <li>• Seamless experience</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🔄</div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Multi-Device Sync</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Cross-platform sync</li>
                  <li>• Device continuity</li>
                  <li>• Unified experience</li>
                  <li>• Cloud synchronization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Enterprise-Grade Security & Integration
          </h2>
          
          {/* Security Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-red-600">🔐 Security & Moderation</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">JWT Authentication</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Protected API endpoints</li>
                  <li>• Secure token validation</li>
                  <li>• Session management</li>
                  <li>• Auto-refresh tokens</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">👑</div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Role-Based Access</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Admin controls</li>
                  <li>• User permissions</li>
                  <li>• Granular access</li>
                  <li>• Security policies</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🛠️</div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Content Moderation</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Content filters</li>
                  <li>• Reporting system</li>
                  <li>• Automated detection</li>
                  <li>• Community guidelines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Integration Features */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-indigo-600">🔗 Integration & Extensibility</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">Developer APIs</h4>
                <ul className="text-gray-600 space-y-3">
                  <li>• <span className="font-semibold">REST APIs</span> for all operations</li>
                  <li>• <span className="font-semibold">GraphQL</span> support for flexible queries</li>
                  <li>• <span className="font-semibold">Node.js & React SDKs</span> for easy integration</li>
                  <li>• <span className="font-semibold">Direct embedding</span> with code-level hooks</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">Plugins & Automation</h4>
                <ul className="text-gray-600 space-y-3">
                  <li>• <span className="font-semibold">Plugin system</span> for custom features</li>
                  <li>• <span className="font-semibold">Bot integration</span> and automation</li>
                  <li>• <span className="font-semibold">Webhooks</span> for external systems</li>
                  <li>• <span className="font-semibold">CRM integration</span> and notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin & Analytics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Admin & Analytics Dashboard</h2>
            <p className="text-xl text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              Comprehensive management tools and insights to help you understand and optimize your communication workflows.
            </p>
            
            {/* Admin Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">👨‍💼</div>
                <div className="text-2xl font-bold text-orange-600 mb-2">Admin Panel</div>
                <ul className="text-gray-600 text-left space-y-2">
                  <li>• User management</li>
                  <li>• Conversation oversight</li>
                  <li>• System configuration</li>
                  <li>• Access controls</li>
                </ul>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">📊</div>
                <div className="text-2xl font-bold text-green-600 mb-2">Analytics</div>
                <ul className="text-gray-600 text-left space-y-2">
                  <li>• Message volume tracking</li>
                  <li>• Active user metrics</li>
                  <li>• Engagement insights</li>
                  <li>• Performance reports</li>
                </ul>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">💾</div>
                <div className="text-2xl font-bold text-purple-600 mb-2">Data Management</div>
                <ul className="text-gray-600 text-left space-y-2">
                  <li>• Export utilities</li>
                  <li>• Backup systems</li>
                  <li>• Data retention</li>
                  <li>• Compliance tools</li>
                </ul>
              </div>
            </div>
            
            {/* Key Metrics Display */}
            <div className="grid md:grid-cols-4 gap-6 mt-16">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500">
                <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
                <div className="text-gray-600 text-lg font-semibold">Messages Daily</div>
                <div className="text-sm text-gray-500 mt-1">Processed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500">
                <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                <div className="text-gray-600 text-lg font-semibold">Active Teams</div>
                <div className="text-sm text-gray-500 mt-1">Monthly</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-purple-500">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600 text-lg font-semibold">Uptime</div>
                <div className="text-sm text-gray-500 mt-1">Guaranteed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-orange-500">
                <div className="text-3xl font-bold text-orange-600 mb-2">50ms</div>
                <div className="text-gray-600 text-lg font-semibold">Latency</div>
                <div className="text-sm text-gray-500 mt-1">Average</div>
              </div>
            </div>
            
            {/* About Inboxly - Enhanced */}
            <div className="mt-20 p-10 bg-white rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">About Inboxly</h3>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Founded with a vision to revolutionize digital communication, Inboxly brings together the best of messaging, collaboration, and productivity tools in one seamless platform.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We're committed to creating technology that brings people closer together, no matter where they are in the world. Our enterprise-grade features ensure your communication is secure, scalable, and efficient.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">🚀</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Enterprise Ready</div>
                      <div className="text-gray-600 text-sm">Built for scale and security</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">🌍</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Global Reach</div>
                      <div className="text-gray-600 text-sm">Supporting teams worldwide</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold">⚡</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Lightning Fast</div>
                      <div className="text-gray-600 text-sm">Real-time performance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Communication?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join millions of users who trust Inboxly for their messaging needs. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;