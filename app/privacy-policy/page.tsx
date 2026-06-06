import type { Metadata } from 'next'
import ScrollToTop from '@/app/components/atoms/ScrollToTop'

export const metadata: Metadata = {
  title: 'Privacy Policy | Aspires Training and Consulting',
}

export default function PrivacyPolicy() {
  return (
    <main className="flex-1 px-4 py-20 flex flex-col gap-8
    md:px-10
    xl:w-[1154px] xl:mx-auto xl:px-0
    ">
      <ScrollToTop />
      <h1>Privacy Policy</h1>
      <p className="text-sm text-text/60">Last updated: June 2026</p>

      <section className="flex flex-col gap-3">
        <h2>1. No Personal Data Collected</h2>
        <p>This website does not collect, store, or process any personal information. There are no forms, sign-up flows, or account systems on this site. We do not receive your name, email address, or any other personal details through your use of this website.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>2. How Contact Works</h2>
        <p>Contact between you and a professional listed on this site takes place entirely off-site. Each professional&apos;s profile includes links to external services such as WhatsApp, email, LinkedIn, YouTube, and Instagram. When you click one of these links, you are directed to that third-party platform, and any interaction or information you share is governed by that platform&apos;s own privacy policy — not ours.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>3. Third-Party Links</h2>
        <p>This site contains links to external websites and platforms (including social media profiles and communication tools). Aspires Training and Consulting is not responsible for the privacy practices or content of those external services. We encourage you to review the privacy policy of any third-party platform you use.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>4. Cookies</h2>
        <p>This website does not use tracking, advertising, or analytics cookies. Your browser may store standard technical data as part of normal web browsing, but we do not set or access any cookies for the purpose of identifying or tracking you.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>5. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:aspiresconsultingservices@gmail.com" className="text-primary hover:text-hover transition-colors">aspiresconsultingservices@gmail.com</a>.</p>
      </section>
    </main>
  )
}
