export default function Privacy() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <div className="mt-8 space-y-6 sm:space-y-8 text-base sm:text-lg text-muted-foreground">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              TidyRide ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our laundry services, website, and mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Billing and payment information</li>
              <li>Delivery address and preferences</li>
              <li>Service history and preferences</li>
              <li>Communications with our customer service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process your payments</li>
              <li>Communicate with you about your orders</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyze and improve our business operations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with service providers who assist in our operations, such as payment processors and delivery partners. We may also share information when required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to certain processing of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our practices, please contact us at privacy@tidyride.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}