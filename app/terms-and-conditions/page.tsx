import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions | Bhairav Painting Service",
  description: "Terms & Conditions for Bhairav Painting Service — service engagement, quotations, payments and liability terms.",
}

export default function TermsAndConditionsPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-black" style={{color:"#1B2B8A"}}>Terms & Conditions</h1>
        <p className="mt-2 text-sm" style={{color:"#6b7280"}}>Last updated: August 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed" style={{color:"#374151"}}>

          <div>
            <p>These Terms & Conditions govern your use of the website <a href="https://bhairavpaintingservice.vercel.app" className="underline" style={{color:"#1B2B8A"}}>bhairavpaintingservice.vercel.app</a> and any painting services booked through it or through Bhairav Painting Service directly. By using this website or engaging our services, you agree to these terms.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{color:"#1B2B8A"}}>Site Visit & Quotation</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>We provide a free site visit and written quotation before any work begins.</li>
              <li>Quotations are based on the site condition, area, and scope discussed at the time of the visit. Any change in scope after work starts may affect the final quotation.</li>
              <li>Quoted prices are valid for a limited period from the date of the quotation, after which rates may be revised.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{color:"#1B2B8A"}}>Payment Terms</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Payment terms (advance, milestone, and final payment) will be agreed upon in writing before work begins.</li>
              <li>Final payment is due on satisfactory completion of the agreed scope of work.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{color:"#1B2B8A"}}>Project Timelines</h2>
            <p>Estimated timelines are shared at the time of quotation. Timelines may vary due to weather conditions, site accessibility, material availability, or scope changes requested by the customer.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{color:"#1B2B8A"}}>Materials & Workmanship</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>We use paints and materials as agreed with the customer at the time of quotation.</li>
              <li>Any warranty on workmanship or materials will be as communicated in writing for that specific project.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{color:"#1B2B8A"}}>Cancellations</h2>
            <p>Customers may cancel a scheduled site visit or project before work commences by informing us in advance. Any amount paid for work already completed or materials already procured is non-refundable.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{color:"#1B2B8A"}}>Limitation of Liability</h2>
            <p>Bhairav Painting Service will take reasonable care while carrying out work at the customer's premises. We are not liable for pre-existing structural or surface issues not identified as part of the agreed scope, or for delays caused by factors outside our control.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{color:"#1B2B8A"}}>Changes to These Terms</h2>
            <p>We may update these Terms & Conditions from time to time. The latest version will always be available on this page.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{color:"#1B2B8A"}}>Contact Us</h2>
            <p>Bhairav Painting Service</p>
            <p>Shop No. 03, H. No. 167/4, Gr. Floor, Near Devji Nagar Bus Stop, Opp Muthoot Finance, Narpoli, Bhiwandi - 421302, Maharashtra</p>
            <p>Phone: <a href="tel:+919158800517" className="underline" style={{color:"#1B2B8A"}}>+91 9158800517</a></p>
            <p>Email: <a href="mailto:bhairavpaintingservice@gmail.com" className="underline" style={{color:"#1B2B8A"}}>bhairavpaintingservice@gmail.com</a></p>
          </div>

        </div>

        <div className="mt-10">
          <Link href="/" className="text-sm font-semibold" style={{color:"#1B2B8A"}}>← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
