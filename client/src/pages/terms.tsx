import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[{ label: "Terms of Service" }]} />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">
            <strong>Effective Date:</strong> August 9, 2024
          </p>
        </div>

        <Card className="p-8">
          <CardContent className="p-0 prose prose-gray max-w-none">
            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using SaiVortex services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Eligibility</h2>
                <p>
                  You must be at least 18 years old to use our services. By using our services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Services Description</h2>
                <p>
                  SaiVortex provides technology solutions including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hardware solutions and repair services</li>
                  <li>Software development and installation</li>
                  <li>Project development and documentation</li>
                  <li>Document services and media creation</li>
                  <li>Brand and social media management</li>
                  <li>Event organizing and digital invitations</li>
                  <li>Student services and academic support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">4. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information when using our services</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt the services or servers</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">5. User Accounts</h2>
                <p>
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for any activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is due according to the agreed terms for each service</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>Price changes will be communicated in advance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Intellectual Property</h2>
                <p>
                  The service and its original content, features, and functionality are and will remain the exclusive property of SaiVortex and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">8. AI Usage Disclaimer</h2>
                <p>
                  Our services may utilize artificial intelligence and automated tools to enhance efficiency and quality. While we strive for accuracy, AI-generated content is reviewed by our experts before delivery. We make no warranties regarding the perfection of AI-assisted work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Service Availability</h2>
                <p>
                  We aim to provide uninterrupted service but cannot guarantee 100% uptime. We reserve the right to modify, suspend, or discontinue any part of our services with or without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Limitation of Liability</h2>
                <p>
                  In no event shall SaiVortex, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless SaiVortex from and against any and all claims, damages, obligations, losses, liabilities, costs, debt, and expenses (including attorney's fees) arising from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">12. Termination</h2>
                <p>
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">13. Governing Law</h2>
                <p>
                  These Terms shall be interpreted and governed by the laws of India. Any disputes arising from these terms shall be subject to the jurisdiction of Indian courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">14. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">15. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p><strong>SaiVortex</strong></p>
                  <p>Email: saivortex.dev@gmail.com</p>
                  <p>Phone: +91 6301133456</p>
                  <p>Founded: 2024</p>
                  <p>Founder: Saicharan Bhuthkuri</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">16. Severability</h2>
                <p>
                  If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect. These Terms constitute the entire agreement between us regarding our service.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
