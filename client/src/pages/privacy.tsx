import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[{ label: "Privacy Policy" }]} />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">
            <strong>Effective Date:</strong> August 9, 2024 | <strong>Last Updated:</strong> August 9, 2025
          </p>
        </div>

        <Card className="p-8">
          <CardContent className="p-0 prose prose-gray max-w-none">
            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
                <p>
                  SaiVortex ("we," "our," or "us") collects information you provide directly to us, such as when you create an account, contact us, or use our services. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Project requirements and technical specifications</li>
                  <li>Communication records and correspondence</li>
                  <li>Payment and billing information</li>
                  <li>Usage data and website analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Send you technical notices, updates, security alerts, and administrative messages</li>
                  <li>Communicate with you about products, services, and promotional offers</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Information Sharing and Disclosure</h2>
                <p>
                  We may share information about you in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your consent or at your direction</li>
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations or protect rights and safety</li>
                  <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                </ul>
                <p className="mt-3">
                  We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes without your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Retention</h2>
                <p>
                  We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Rights and Choices</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt out of promotional communications</li>
                  <li>Request a copy of your data</li>
                  <li>Lodge a complaint with relevant authorities</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, please contact us at saivortex.dev@gmail.com or call +91 6301133456.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar technologies to collect usage data, remember your preferences, and improve your experience. You can control cookies through your browser settings, but disabling them may affect some functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Information</h2>
                <p>
                  If you have any questions about this privacy policy or our practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p><strong>SaiVortex</strong></p>
                  <p>Email: saivortex.dev@gmail.com</p>
                  <p>Phone: +91 6301133456</p>
                  <p>Founded: 2024</p>
                  <p>Founder: Saicharan Bhuthkuri</p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
