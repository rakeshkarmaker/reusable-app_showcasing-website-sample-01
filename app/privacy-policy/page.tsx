import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="mb-12">
          <h1 className="heading-section text-4xl md:text-5xl mb-4 text-ink">Privacy Policy – Mercy</h1>
          <p className="text-ink/50 text-sm">Effective Date: June 24, 2026</p>
        </div>

        <div className="space-y-8 text-ink/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">Privacy</h2>
            <p className="mb-6">We are committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights.</p>
            
            <h3 className="text-lg font-semibold text-ink mb-4">Our Commitment</h3>
            <div className="space-y-4">
              <div>
                <strong className="text-ink flex items-center gap-2">🔒 No Account Required</strong>
                <p>Mercy requires no login or personal registration to use.</p>
              </div>
              <div>
                <strong className="text-ink flex items-center gap-2">🚫 No Selling Data</strong>
                <p>We never sell your data to third parties. Ever.</p>
              </div>
              <div>
                <strong className="text-ink flex items-center gap-2">📱 On-Device Storage</strong>
                <p>Your prayer history is stored locally on your device.</p>
              </div>
              <div>
                <strong className="text-ink flex items-center gap-2">✝️ Faith First</strong>
                <p>Your spiritual journey is private. We treat it with reverence.</p>
              </div>
            </div>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">1. Overview</h2>
            <p className="mb-4">
              This Privacy Policy describes how Kodevio Limited ("we", "us", or "our") collects, uses, and shares information when you use the Mercy mobile application.
            </p>
            <p>
              Mercy is designed with privacy in mind. The App does not require you to create an account or provide any personally identifiable information (PII) to access its core features.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">2. Data We Collect</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr className="border-b border-ink/20">
                    <th className="py-3 pr-4 font-semibold text-ink">Data Type</th>
                    <th className="py-3 pr-4 font-semibold text-ink">What It Is</th>
                    <th className="py-3 pr-4 font-semibold text-ink">Collected</th>
                    <th className="py-3 font-semibold text-ink">Linked to You</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-ink">Prayer Requests</td>
                    <td className="py-3 pr-4">Text submitted to the community wall</td>
                    <td className="py-3 pr-4">Yes</td>
                    <td className="py-3">No</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-ink">Chat Messages</td>
                    <td className="py-3 pr-4">Messages sent to the AI Ask feature</td>
                    <td className="py-3 pr-4">Yes</td>
                    <td className="py-3">No</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-ink">Prayed IDs Cache</td>
                    <td className="py-3 pr-4">IDs of prayer requests you've prayed for</td>
                    <td className="py-3 pr-4">Device only</td>
                    <td className="py-3">No</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-ink">Device Identifiers</td>
                    <td className="py-3 pr-4">No device ID is collected or transmitted</td>
                    <td className="py-3 pr-4">No</td>
                    <td className="py-3">No</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-ink">Location Data</td>
                    <td className="py-3 pr-4">The App does not request or use location</td>
                    <td className="py-3 pr-4">No</td>
                    <td className="py-3">No</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-ink">Contacts / Mic / Camera</td>
                    <td className="py-3 pr-4">Not requested or accessed</td>
                    <td className="py-3 pr-4">No</td>
                    <td className="py-3">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">3. How We Use Information</h2>
            <p className="mb-4">The limited data that is transmitted to our servers is used solely to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Deliver the daily Bible verse content to your device.</li>
              <li>Process and display community prayer requests anonymously.</li>
              <li>Generate AI-powered spiritual guidance responses based on your chat messages.</li>
              <li>Record aggregate prayer counts (not linked to individual users).</li>
            </ul>
            <p>
              We do not use your data for advertising, profiling, marketing campaigns, or any purpose beyond delivering the core App features.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">4. Local Storage</h2>
            <p className="mb-4">
              The App uses SharedPreferences (local on-device storage) to remember which prayer requests you have already prayed for. This information never leaves your device and is not sent to our servers.
            </p>
            <p>
              You can clear this data at any time by uninstalling the App.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">5. Third-Party Services</h2>
            <p className="mb-4">
              Mercy connects to our own backend API at api.mercy.kodevio.com to fetch Bible content, community prayer requests, and AI responses. No data is shared with third-party analytics providers, advertisers, or data brokers.
            </p>
            <p>
              The App may use the iOS Share Sheet to share verse cards, which is handled entirely by iOS and is not controlled by us.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">6. Children's Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under 13. Because Mercy requires no registration or account, no personal data is collected from any user, including minors. We encourage parents to supervise use of the Community Prayer Wall feature by younger users.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">7. Your Rights</h2>
            <p className="mb-4">
              Since Mercy does not collect personally identifiable information, there is no personal profile to access, correct, or delete. However, you may:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Uninstall the App at any time to remove all locally cached data.</li>
              <li>Contact us to request removal of any prayer request content you submitted.</li>
            </ul>
            <p>
              Users in the European Economic Area (EEA) or California may have additional rights under GDPR or CCPA. Please contact us for more details.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">8. Security</h2>
            <p>
              All communication between the App and our backend is conducted over HTTPS (encrypted). We implement industry-standard security practices to protect data in transit and at rest on our servers.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the "Effective Date" at the top of this page. We encourage you to review this page periodically.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">10. Contact Us</h2>
            <p className="mb-4">If you have questions or concerns about this Privacy Policy, please reach out to us:</p>
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@kodevio.com" className="text-ink underline hover:text-ink/80 transition-colors">privacy@kodevio.com</a></p>
              <p className="mb-2"><strong>Website:</strong> <a href="https://mercydaily.com" className="text-ink underline hover:text-ink/80 transition-colors" target="_blank" rel="noopener noreferrer">https://mercydaily.com</a></p>
              <p className="mb-8"><strong>Company:</strong> Mercy Daily Limited</p>
            
            <p className="text-sm border-t border-ink/10 pt-8">© 2026 Mercy Daily Limited. All rights reserved.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
