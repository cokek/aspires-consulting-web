import type { Metadata } from 'next'
import ScrollToTop from '@/app/components/atoms/ScrollToTop'

export const metadata: Metadata = {
  title: 'Terms of Use | Aspires Training and Consulting',
}

export default function TermsOfUse() {
  return (
    <main className="flex-1 px-4 py-20 flex flex-col gap-8
    md:px-10
    xl:w-[1154px] xl:mx-auto xl:px-0
    ">
      <ScrollToTop />
      <h1>Terms of Use</h1>
      <p className="text-sm text-text/60">Last updated: June 2026</p>

      <section className="flex flex-col gap-3">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the Aspires platform, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>2. Use of the Platform</h2>
        <p>Aspires provides a platform connecting individuals with verified professionals. You agree to use the platform only for lawful purposes and in a manner that does not infringe the rights of others.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>3. Professional Listings</h2>
        <p>All professionals listed on Aspires have been vetted and approved by our team. However, Aspires does not guarantee the outcome of any consultation and is not liable for advice given by professionals on the platform.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>4. Payments</h2>
        <p>Consultation fees are set by individual professionals and are clearly displayed on their profiles. Payments are made directly to the professional. Aspires is not responsible for disputes arising from payment transactions.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>5. Intellectual Property</h2>
        <p>All content on this platform, including text, images, and branding, is the property of Aspires Training and Consulting. You may not reproduce or distribute any content without prior written permission.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>6. Limitation of Liability</h2>
        <p>Aspires shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform or reliance on information provided by professionals listed on it.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>7. Content Accuracy</h2>
        <p>We make reasonable efforts to ensure that the information presented on this website — including professional profiles, service descriptions, and consultation fees — is accurate and up to date. However, we do not guarantee the completeness or currency of any information displayed, and details are subject to change without notice.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>8. Changes to Terms</h2>
        <p>We may revise these Terms of Use at any time. Updates will be posted on this page. Continued use of the platform after changes are posted constitutes your acceptance of the new terms.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>9. Contact Us</h2>
        <p>For questions about these Terms, contact us at <a href="mailto:aspiresconsultingservices@gmail.com" className="text-primary hover:text-hover transition-colors">aspiresconsultingservices@gmail.com</a>.</p>
      </section>
    </main>
  )
}
