/* eslint-disable max-len */
import Footer from '@/components/Footer';
import SimpleHeader from '@/components/SimpleHeader';
import PolicySection from '@/components/PolicySection';
import JoinUsSection from '@/components/JoinUsSection';


export default function Terms() {
  return (
    <main>
      <SimpleHeader
        title="Privacy Policy for Atlantes.io"
        subtitle="Last Updated: January 2, 2024"
      />
      <PolicySection>
        <h2>Introduction:</h2>
        <p>
          At Adwirk GmbH, operating Atlantes.io, we prioritize your privacy and the security of your personal data (&quot;Personal Data&quot;). This Privacy Policy outlines how we collect, use, disclose, and protect your information across our platform, including our related services, functionalities, applications, and content. Your interaction with Atlantes.io signifies your agreement to this Privacy Policy. If you disagree with any part, please cease using our services immediately.
        </p>

        <h2>Collection of Personal Data:</h2>
        <p>
          &quot;Personal Data&quot; refers to any information relating to an identifiable person. Depending on your interactions with us, this may include:
        </p>
        <ul>
          <li>
            Account and profile information (e.g., email, blockchain wallet addresses).
          </li>
          <li>
            Transaction details, including payment information processed by thirdparty vendors.
          </li>
          <li>
            Contact information from third-party services (e.g., Telegram, Discord).
          </li>
          <li>
            Technical and usage data, such as IP addresses, device information, and browsing patterns, collected via server logs and cookies.
          </li>
          <li>
            Marketing preferences and communication history.
          </li>
        </ul>
        <p>
          We may also collect information from public records, social media, and blockchain transactions associated with a wallet address.
        </p>

        <h2>Purposes for Processing Your Personal Data:</h2>
        <p>
          We process your Personal Data for purposes including:
        </p>
        <ul>
          <li>
            Delivering and personalizing our services.
          </li>
          <li>
            Developing and improving our offerings.
          </li>
          <li>
            Communicating with you about service updates and marketing messages.
          </li>
          <li>
            Managing our business operations and complying with legal requirements.
          </li>
          <li>
            Facilitating account registration and transactions.
          </li>
        </ul>

        <h2>Disclosure of Personal Data:</h2>
        <p>
          Your Personal Data may be shared with:
        </p>
        <ul>
          <li>
            Service providers and vendors aiding our service delivery.
          </li>
          <li>
            Potential business partners or parties involved in business asset transactions.
          </li>
          <li>
            Government and law enforcement agencies, as required by law.
          </li>
          <li>
            Any other entity with your express consent.
          </li>
        </ul>

        <h2>Data Security:</h2>
        <p>
          We implement measures to protect your Personal Data but cannot guarantee absolute security against unauthorized access or cyber threats.
        </p>

        <h2>Children’s Privacy:</h2>
        <p>
          Atlantes.io is not intended for individuals under 18. We do not knowingly collect data from children without parental consent.
        </p>

        <h2>Cookies and Tracking:</h2>
        <p>
          We use cookies to enhance website functionality, personalize content, and analyze site traffic. You can control cookie settings through your browser.
        </p>

        <h2>Your Choices and Rights:</h2>
        <p>
          You have rights regarding your Personal Data, including access, correction, and deletion. Contact us to exercise these rights or to withdraw consent for data processing.
        </p>

        <h2>Non-Targeting of European Individuals:</h2>
        <p>
          We do not deliberately target our services at individuals in Europe and comply with relevant non-European regulations.
        </p>

        <h2>Changes to This Privacy Policy:</h2>
        <p>
          We reserve the right to update this policy and will notify you of significant changes. Regularly review this policy to stay informed.
        </p>

        <h2>Contacting Us:</h2>
        <p>
          For questions and concerns about our Privacy Policy or your Personal Data, contact&nbsp;
          <a href="mailto:support@atlantes.io">support@atlantes.io</a>
        </p>

        <h2>Conclusion:</h2>
        <p>
          Your privacy is of utmost importance to us at Atlantes.io, developed by Adwirk GmbH. We are committed to safeguarding your information and enhancing yourexperience with our services.
        </p>

      </PolicySection>
      <JoinUsSection />
      <Footer />
    </main>
  );
}
