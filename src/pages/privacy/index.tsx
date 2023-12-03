import Footer from '@/components/Footer';
import SimpleHeader from '@/components/SimpleHeader';
import PolicySection from '@/components/PolicySection';
import JoinUsSection from '@/components/JoinUsSection';


export default function Terms() {
  return (
    <main>
      <SimpleHeader
        title="Privacy Policy"
      />
      <PolicySection>
        <h2>Introduction</h2>
        <p>The purpose of this Privacy Policy ("Policy") is to inform you about how Advertrek LTD ("Company", "we", "us", or "our") collects, uses, and protects your personal data when you use our services. This Policy applies to our Clients, Users, and Data Subjects, as well as our Processors and third-party partners.</p>
        <h2>Definitions</h2>
        <p><b>Company</b>: Advertrek LTD, a Registered Company</p>
        <p><b>Platform</b>: The services we provide to Clients via <a href="https://advertrek.com">https://advertrek.com</a></p>
        <p><b>Clients</b>: Our primary clients are Advertisers and Publishers who utilize the Platform.</p>
        <p><b>User</b>: An individual who interacts with an advertisement.</p>
        <p><b>Data</b> Subject: The person about whom personal data relates.</p>
        <p><b>Processor</b>: Technology providers who maintain a data processing agreement with the Company.</p>
        <h2>Personal Data</h2>
        <p>We collect Personally Identifiable Information ("PII") such as your name, username, phone number, email address, and physical address. This information is held for no more than one year before it is deleted.</p>
        <h2>Information Collected for Client's Accounts</h2>
        <p><b>Registration Information</b>: Your first and last name, mailing address, phone number, email address, Skype contact, and other similar contact details.</p>
        <p><b>Technical / Access Information</b>: Details including your IP address, User-Agent, and activity logs are stored for fraud prevention and security auditing.</p>
        <h2>Information Collected Relating to Users and Advertising</h2>
        <p><b>Device and Connection Information</b>: Details including your IP address, User-Agent, and activity logs.</p>
        <p><b>Contextual Information</b>: URLs of websites or names of applications accessed.</p>
        <h2>Your Rights as a Resident of the European Economic Area (EEA)</h2>
        <p>If you are located in the EEA, you have certain rights regarding your personal data, including the right to request access, correct, amend, delete, or port your data to another service provider. Your data may be used for the following legitimate interests:</p>
        <ul>
          <li>To provide Clients with services related to our Platform.</li>
          <li>To prevent risk and fraud on our Platform.</li>
          <li>To provide communications, marketing, and advertising.</li>
          <li>To provide reporting and analytics.</li>
          <li>To help Clients integrate with third-party platforms.</li>
        </ul>
        <h2>Consent, Data Subject Requests, Opting-Out, and Right of Access</h2>
        <p>You may revoke our permission at any time by visiting Settings inside your account, or request logs based on your personal access.</p>
        <h2>Children's Online Privacy Protection Act Compliance (COPPA)</h2>
        <p>Our Platform and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.</p>
        <h2>Data Retention</h2>
        <p>We may retain other data within our databases for up to six months unless otherwise required by specific legal obligations, dispute settlements, or contract enforcement.</p>
        <h2>Security Measures</h2>
        <p><b>Physical Measures</b>: Our infrastructure is secured by 24/7 on-site guards, and building access is secured by keycard entry.</p>
        <p><b>Technical Measures</b>: We use HTTPS protocol for data encryption.</p>
        <h2>Data Breach</h2>
        <p>In case of a data breach, we will make timely efforts to notify affected individuals and relevant authorities.</p>
        <h2>Disclosure to Third Parties</h2>
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li>To prevent illegal activities, suspected fraud, or violations of Terms of Service.</li>
          <li>To conform to legal requirements or respond to lawful court orders.</li>
        </ul>
        <h2>Cookies</h2>
        <p>We use cookies, web beacons, tags, scripts, and similar technology for various purposes, including analytics and advertising.</p>
        <h2>Changes to the Privacy Policy</h2>
        <p>We may update this Policy from time to time. Your continued use of our services constitutes acceptance of any changes.</p>
        <h2>Contact Us</h2>
        <p>For any questions about this Privacy Policy, you may contact us at <a href="mailto:contact@advertrek.com">contact@advertrek.com</a>.</p>
      </PolicySection>
      <JoinUsSection />
      <Footer />
    </main>
  );
}
