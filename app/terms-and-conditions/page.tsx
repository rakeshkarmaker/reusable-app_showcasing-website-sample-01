import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export default function TermsAndConditions() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="mb-12">
          <h1 className="heading-section text-4xl md:text-5xl mb-4 text-ink">Terms & Conditions – Mercy</h1>
          <p className="text-ink/50 text-sm">Effective Date: June 24, 2026</p>
        </div>

        <div className="space-y-8 text-ink/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">Legal</h2>
            <p>Please read these Terms & Conditions carefully before using the Mercy app. By downloading, installing, or using Mercy, you agree to be bound by these Terms.</p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Contents</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Acceptance of Terms</li>
              <li>Description of Service</li>
              <li>Eligibility</li>
              <li>Acceptable Use</li>
              <li>User-Generated Content</li>
              <li>Intellectual Property</li>
              <li>Disclaimer of Warranties</li>
              <li>Limitation of Liability</li>
              <li>Changes to Terms</li>
              <li>Contact Us</li>
            </ol>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By downloading, installing, or using the Mercy mobile application ("App"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, please do not use the App.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and Kodevio Limited ("Company", "we", "us", or "our").
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">2. Description of Service</h2>
            <p className="mb-4">Mercy is a Christian faith and devotion application that provides:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Daily Bible verses with reflections and prayers.</li>
              <li>An AI-powered spiritual guidance chat feature.</li>
              <li>A community prayer wall for sharing and praying for requests.</li>
              <li>The ability to share verse cards via the device share sheet.</li>
            </ul>
            <p>
              The App is intended for spiritual encouragement and devotional purposes only. It is not a substitute for professional spiritual counseling, medical advice, mental health support, or other professional services.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">3. Eligibility</h2>
            <p className="mb-4">
              The App is available to users of all ages. However, users under the age of 13 should have parental guidance when using Community features.
            </p>
            <p>
              By using the App, you represent that your use complies with all applicable laws and regulations in your jurisdiction.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">4. Acceptable Use</h2>
            <p className="mb-4">You agree to use the App only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Post content that is hateful, abusive, or discriminatory.</li>
              <li>Use the App to harass, threaten, or harm other users.</li>
              <li>Submit spam, advertisements, or promotional content on the Community Prayer Wall.</li>
              <li>Attempt to reverse-engineer, decompile, or tamper with the App.</li>
              <li>Use the App in any way that could damage, disable, or impair our servers or networks.</li>
              <li>Impersonate any person or organization.</li>
            </ul>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">5. User-Generated Content</h2>
            <p className="mb-4">
              When you submit a prayer request to the Community Prayer Wall, you grant Kodevio Limited a non-exclusive, royalty-free, worldwide license to display that content within the App.
            </p>
            <p className="mb-4">
              You are solely responsible for the content you submit. We reserve the right to remove any content that violates these Terms or that we deem inappropriate, at our sole discretion.
            </p>
            <p>
              Prayer requests are displayed without personally identifiable information and are intended to be anonymous expressions of faith and need.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">6. Intellectual Property</h2>
            <p className="mb-4">
              The App, including its design, logos, graphics, text, and software, is owned by Kodevio Limited and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              Bible verses are sourced from publicly available Scripture and are used for non-commercial, devotional purposes. All rights to the underlying translations belong to their respective copyright holders.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">7. Disclaimer of Warranties</h2>
            <p className="mb-4 uppercase">
              The App is provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p className="mb-4">
              We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
            <p>
              The AI chat responses are generated for spiritual encouragement and do not constitute theological, psychological, medical, legal, or professional advice.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">8. Limitation of Liability</h2>
            <p className="mb-4 uppercase">
              To the fullest extent permitted by law, Kodevio Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.
            </p>
            <p>
              Our total liability to you for any claims arising from the use of the App shall not exceed the amount you paid, if any, for access to the App.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">9. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to update these Terms at any time. We will notify users of significant changes through an in-app notice or by updating the "Effective Date" at the top of this page.
            </p>
            <p>
              Your continued use of the App after any changes become effective constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <hr className="border-ink/10" />

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">10. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:legal@kodevio.com" className="text-ink underline hover:text-ink/80 transition-colors">legal@kodevio.com</a></p>
            <p className="mb-2"><strong>Website:</strong> <a href="https://mercydaily.com" className="text-ink underline hover:text-ink/80 transition-colors" target="_blank" rel="noopener noreferrer">https://mercydaily.com</a></p>
            <p className="mb-8"><strong>Company:</strong> Kodevio Limited</p>
            
            <p className="text-sm border-t border-ink/10 pt-8">© 2026 Kodevio Limited. All rights reserved.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
