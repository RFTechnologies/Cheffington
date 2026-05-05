// app/privacy/page.tsx
import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="pt-12 pb-20 max-sm:py-8">
      <div className="page-width">
        <div className="">
          <div className="">
            <h1 className="title text-center sm:mb-16 mb-1.5">Privacy Policy</h1>
            <div className="font-bold text-sm tracking-[-8%] leading-normal">
              <p className="mb-1.5">
                Last Updated December 30, 2024 (Effective January 1, 2025).
              </p>
              <p className="mb-1.5">
                This Privacy Policy describes our policies on the collection, use, and disclosure of information about you in connection with your use of our services, including those offered through our websites, communications (e.g., emails, phone calls, and texts), and mobile applications (collectively, the &quot;Service&quot;). The terms &quot;we&quot;, &quot;us&quot;, and &quot;Cheffington&quot; refer to: (i) Cheffington Inc., a Delaware corporation with its headquarters in Nevada City, California.
              </p>
              <p className="mb-1.5">
                When you use the Service, you consent to our collection, use, and disclosure of information about you as described in this Privacy Policy. We may translate this Privacy Policy into other languages for your convenience. Nevertheless, any inconsistencies among the different versions will be resolved in favor of the English version available here.
              </p>

              {/* Table of Contents */}
              <div className="my-1.5">
                <h2 className="text-sm font-bold my-1.5">TABLE OF CONTENTS</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Information We Collect and How We Use It</li>
                  <li>Cookies</li>
                  <li>Third Parties</li>
                  <li>Controlling Your Personal Data</li>
                  <li>Data Retention and Account Termination</li>
                  <li>Children</li>
                  <li>Security</li>
                  <li>Contact Information</li>
                  <li>Modifications to This Privacy Policy</li>
                  <li>US: Your Privacy Rights</li>
                  <li>European Residents: Your Privacy Rights and International Data Transfer</li>
                </ul>
              </div>

              {/* Section 1 - Information We Collect */}
              <Section title="INFORMATION WE COLLECT AND HOW WE USE IT">
                <p className="mb-1.5">
                  We may collect, transmit, and store information about you in connection with your use of the Service, including any information you send to or through the Service. We use that information to provide the Service&apos;s functionality, fulfill your requests, improve the Service&apos;s quality, engage in research and analysis relating to the Service, personalize your experience, track usage of the Service, provide feedback to third party businesses that are listed on the Service, display relevant advertising, market the Service, provide customer support, message you, back up our systems, allow for disaster recovery, enhance the security of the Service, and comply with legal obligations. Even when we do not retain such information, it still must be transmitted to our servers initially and stored long enough to process.
                </p>

                <Subsection title="Account Information">
                  <p>When you create a Cheffington account, we store and use the information you provide during that process, such as the first and last name you enter, email address, zip code, physical address, and any other information you may provide during the account creation process, such as a gender, phone number, or birth date. We may publicly display the first name and last initial that you provide, as well as any photo or other content you submit through the account creation process, as part of your account profile. We also store and use any preferences you provide to personalize your user experience, including dining and activity preferences. You can later modify some of the account information you provide through your account settings. If you believe that someone has created an unauthorized account using your personal information, you can request its removal by flagging it.</p>
                </Subsection>

                <Subsection title="Public Content">
                  <p>Your contributions to the Service are intended for public consumption and are therefore viewable by the public, including your photos, ratings, reviews, tips, lists, bookmarks and collections, compliments, Ask the Community posts, Cheffington Talk posts, and edits to business page information. Your account profile (e.g., first name, last initial, city, neighborhood, the month and year you created your Cheffington account, profile photos and list of friends on Cheffington) is also intended for public consumption, as is some of your other activity through the Service, like how you vote on other people&apos;s contributions (e.g., useful, funny, cool, helpful, or not helpful), which contributions you like, where you check-in (including when friends on Cheffington tag you in their own check-ins), which contributions or users you follow, and which businesses you follow. You can limit the public visibility of some of these activities through your account settings.</p>
                </Subsection>

                <Subsection title="Contacts">
                  <p>You can invite others to join or become your friend on Cheffington by providing us with their contact information, or by allowing us to access contacts from your computer, mobile device, or third party sites to select which individuals you want to invite. If you allow us to access your contacts, we will transmit information about your contacts to our servers long enough to process your invitations or friend requests.</p>
                </Subsection>

                <Subsection title="Communications">
                  <p>When you sign up for an account or use certain features, you are opting to receive messages from other users, businesses, and Cheffington. You can manage some of your messaging preferences through your account settings, but note that you cannot opt out of receiving certain administrative, transactional, or legal messages from Cheffington. For example, if you make a reservation, order food, place yourself on a waitlist, or request a quote or otherwise contact a business through the Service, we, or the business you are interacting with through Cheffington, may send you messages about your transaction using any contact information you provide, including through SMS to your phone number. We may also track your actions in response to the messages you receive from us or through the Service, such as whether you deleted, opened, or forwarded such messages, and share that information with other parties to your messages (for example, to let them know if you have viewed their message). When a user requests a quote or similar information from one or more businesses through the Service, in addition to the request, we may disclose to those businesses information about the status of the user&apos;s requests, such as whether any business has responded to the request, the type of response provided (for example, whether the user received a quote or a request for more information), and whether the user has responded to any business&apos;s reply. If a business elects to share its availability or schedule with users through the Service, that information may be used for the purpose of determining availability and/or scheduling appointments. If you exchange messages with others through the Service, we may store them in order to process and deliver them, allow you to manage them, and we may review and disclose them in connection with investigations related to use of the Service, as well as our efforts to improve the Service. We may not deliver messages that we believe are objectionable, such as spam messages, fraudulent solicitations, or requests to post, exchange, or remove reviews for compensation. If you send or receive messages through the Service via SMS, we may log phone numbers, phone carriers, and the date and time that any messages were processed. Carrier message and data rates may apply. We may also store information that you provide through communications with us, including from phone calls, letters, emails and other electronic messages, or in person. Any of our communications with you, including any phone calls, may be monitored and recorded for quality purposes. If you are a representative of a business listed on Cheffington, or use a phone number associated now or previously with such a business, we may contact you, including by phone or email, using the contact information you provide us, make publicly available, or that we have on record for your business.</p>
                </Subsection>

                <Subsection title="Transactions">
                  <p>If you initiate a transaction through the Service, such as making a reservation, joining a waitlist, making an appointment, or making a purchase, we will collect and store information you provide associated with your transaction, such as your name, phone number, address, email, and payment information, as well as any other information you provide relating to the transaction or request, in order to process your transaction, send you communications related to the transaction, and to facilitate future transactions. We may also use aggregated or anonymized information regarding those transactions for analytics purposes and to improve Cheffington&apos;s services. This information may be shared with third parties, and third parties may share such information with us, for the same purposes. When you submit credit card numbers and other sensitive payment information, that information is encrypted using industry standard technology. If you write reviews about businesses with which you transact through the Service, we may publicly display the fact that you transacted with those businesses in connection with such reviews. For example, if you make a dining reservation through the Service and later write a review about your dining experience, we may publicly display the fact that you made your reservation through the Service in connection with that review.</p>
                </Subsection>

                <Subsection title="Activity">
                  <p>We store information about your use of the Service, such as your search activity, the pages you view, the date and time of your visits, businesses you call using our mobile applications, and reservations, purchases, or transactions you make through the Service. We also store information that your computer or mobile device may provide to us in connection with your use of the Service, such as your browser type, type of computer or mobile device, browser language, IP address, WiFi information such as SSID, mobile carrier, phone number, unique device identifier, advertising identifier, location (including geolocation, beacon based location, and GPS location), and requested and referring URLs and mobile applications. We may also receive and store your location whenever our mobile applications are running, including when running in the background, if you enable our mobile apps to access such information in the course of using the Service. You may be able to limit or disallow our use of certain data through your device or browser settings, for example you may be able to limit or disallow our collection, use or sharing of location data or mobile advertising identifiers by adjusting the settings for our applications in iOS or Android privacy settings.</p>
                </Subsection>

                <Subsection title="Different Devices">
                  <p>You may access the Service through different devices (e.g., your mobile phone, personal computer, or other internet connected device) and different platforms (e.g., through the Cheffington website or Cheffington mobile apps). The information that we collect and store through those different uses may be cross-referenced and combined, and your contributions through one Cheffington platform will typically be similarly visible and accessible through all other Cheffington platforms.</p>
                </Subsection>

                <Subsection title="Professional Information">
                  <p>If you represent a business on Cheffington, we may collect and display information about you related to your business activities, such as a business name that may incorporate your individual name, or a publicly available business address that is also used as a home address. We will also collect and display information about your professional background that you choose to share with us through the Service, such as information about your professional licenses or certifications, or your professional history or specialties.</p>
                </Subsection>

                <Subsection title="Sensitive Personal Information">
                  <p>In the course of using the Service, you may choose to allow Cheffington to collect and store sensitive personal information about you, such as your precise geolocation. You may choose to share other sensitive personal information through the content you share on Cheffington, for example, when leaving a review, sending a direct message, or otherwise sharing information on Cheffington. You may be able to limit or disallow our collection, use or sharing of location data by adjusting the settings for our applications in iOS or Android privacy settings. You can remove content that may include sensitive personal information through your account settings.</p>
                </Subsection>
              </Section>

              {/* Section 2 - Cookies */}
              <Section title="COOKIES">
                <p className="mb-1.5">
                  We, and our third-party service providers, may use cookies, web beacons, tags, scripts, local shared objects such as HTML5 and Flash (sometimes called &quot;flash cookies&quot;), advertising identifiers (including mobile identifiers such as Apple&apos;s Identifier for Advertisers (&quot;IDFA&quot;) or Google&apos;s Advertising ID (&quot;GAID&quot;)) and similar technology (&quot;Cookies&quot;) in connection with your use of the Service, third party websites, and mobile applications. Cookies may contain unique identifiers, and reside, among other places, on your computer or mobile device, in emails we send to you, and on our web pages. Cookies may transmit information about you and your use of the Service, such as your browser type, search preferences, IP address, data relating to advertisements that have been displayed to you or that you have interacted with, and the date and time of your use. Cookies may be persistent or stored only during an individual session.
                </p>
                <p className="mb-1.5 ">Manage cookies</p>
                <p className="mb-1.5">The purposes for which we use Cookies in the Service include:</p>

                <div className="overflow-x-auto my-1.5">
                  <table className="min-w-full border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-3 py-1 text-left font-bold">Purpose</th>
                        <th className="border border-gray-300 px-3 py-1 text-left font-bold">Explanation</th>
                      </tr>

                    </thead>
                    <tbody>
                      <tr key="processes">
                        <td className="border border-gray-300 px-3 py-1 align-top ">Processes</td>
                        <td className="border border-gray-300 px-3 py-1">Intended to make the Service work in the way you expect. We use a Cookie that tells us whether you have already signed into your account.</td>
                      </tr>
                      <tr key="auth">
                        <td className="border border-gray-300 px-3 py-1 align-top ">Authentication, Security, and Compliance</td>
                        <td className="border border-gray-300 px-3 py-1">Intended to prevent fraud, protect your data from unauthorized access, and comply with legal requirements. For example, we use Cookies to determine if you are logged in.</td>
                      </tr>
                      <tr key="preferences">
                        <td className="border border-gray-300 px-3 py-1 align-top ">Preferences</td>
                        <td className="border border-gray-300 px-3 py-1">Intended to remember information about how you prefer the Service to behave and look. For example, we use a Cookie that tells us whether you have declined to allow us to send push notifications to you.</td>
                      </tr>
                      <tr key="notifications">
                        <td className="border border-gray-300 px-3 py-1 align-top ">Notifications</td>
                        <td className="border border-gray-300 px-3 py-1">Intended to allow or prevent notices of information or options that could improve your use of the Service. For example, we use a Cookie that stops us from showing you the signup notification if you have already seen it.</td>
                      </tr>
                      <tr key="advertising">
                        <td className="border border-gray-300 px-3 py-1 align-top ">Advertising</td>
                        <td className="border border-gray-300 px-3 py-1">Intended to make advertising more relevant to users and more valuable to advertisers. For example, we may use Cookies to serve you interest-based ads, such as ads that are displayed to you based on your visits to other websites, or to tell us if you have recently interacted with an ad.</td>
                      </tr>
                      <tr key="analytics">
                        <td className="border border-gray-300 px-3 py-1 align-top ">Analytics</td>
                        <td className="border border-gray-300 px-3 py-1">Intended to help us understand how visitors use the Service. For example, we use a Cookie that tells us how our search suggestions correlate to your interactions with the search page.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-1.5">
                  You can also set some Cookie preferences through your device or browser settings, but doing so may affect the functionality of the Service. The method for disabling Cookies may vary by device and browser, but can usually be found in your device or browser preferences or security settings. For example, iOS and Android devices each have settings which are designed to limit forms of ad tracking. Please note that changing any of these settings does not prevent the display of certain advertisements to you.
                </p>
              </Section>

              {/* Section 3 - Third Parties */}
              <Section title="THIRD PARTIES">
                <p className="mb-1.5">Third parties may share, receive or process information about you as follows:</p>

                <Subsection title="Advertisers">
                  <p>We may share some non-identifiable, de-identified or aggregated information from or about you with third parties in connection with advertising programs and data analytics. We also share certain information described below with businesses on Cheffington, who may or may not be advertisers.</p>
                </Subsection>

                <Subsection title="Content and Data Partners">
                  <p>We allow third party partners to use and display some of the public content available through the Service, such as your photos, reviews, and other information listed under &quot;Public Content&quot; in Section 1 above.</p>
                </Subsection>

                <Subsection title="Acquired Data">
                  <p>Cheffington may acquire information enabling us to identify and contact representatives of local businesses from third parties. Such acquired data may be combined with other data Cheffington receives from or about you, and used for the purposes described in Section 1 of this Privacy Policy.</p>
                </Subsection>

                <Subsection title="Cheffington's Service Providers">
                  <p>We rely on third-party service providers to support or provide services for us in connection with your use of the Service, such as food delivery services, communications and hosting, security and fraud prevention, technical and customer support, tracking and reporting usage of the Service, quality assurance testing, payment processing, marketing, and other functions. We share information from or about you with these third party providers so that they can perform their services or complete your requests. For example, we may share your advertising identifiers (e.g., your IDFA, GAID, or a cryptographic hash of your email address) with third party service providers that help us facilitate Cheffington&apos;s advertising programs and measure and report their effectiveness, including with third parties that help determine the efficacy of Cheffington&apos;s advertising programs by combining information they receive about you from other sources than the Service. Cheffington shares personal information with its service providers subject to obligations consistent with this Privacy Policy, and on the condition that personal information is only used on Cheffington&apos;s behalf and pursuant to our instructions. You may be able to limit our access to some of this information through your mobile device settings, as described in Section 2 above, or through the Service&apos;s settings. Cheffington&apos;s third party service providers may likewise share information with us that they obtain from or about you in connection with providing their services or completing your requests.</p>
                </Subsection>

                <Subsection title="Cheffington's role as a Service Provider">
                  <p>Cheffington collects, receives and processes certain information about you on behalf of businesses for which Cheffington is acting as a service provider. For example, when you make a restaurant reservation or join the waitlist through Cheffington, we collect your phone number, email address and reservation details on behalf of the business, and share that information with the business. Cheffington does not share information collected or received by Cheffington outside of its role as a service provider with the business or other third parties, unless otherwise disclosed in this Privacy Policy, or at your direction. Third parties may also share information about you with Cheffington in order for Cheffington to provide services to them. For example, Cheffington may receive information about you for the purposes of targeting advertising, to measure ad performance, or to facilitate links to restaurant loyalty programs or point of sale systems. Third parties&apos; collection, use and disclosure of your information is subject to such third party&apos;s own privacy policy and any relevant terms.</p>
                </Subsection>

                <Subsection title="Aggregate or Anonymous Information">
                  <p>We share user information in the aggregate with third parties, such as businesses that are listed on Cheffington and content distributors. For example, we disclose the number of users that have been exposed to or interacted with advertisements, or that we estimate visited the physical location of a particular business.</p>
                </Subsection>

                <Subsection title="Business Transfers">
                  <p>We share information from or about you with our parent companies, subsidiaries, joint ventures, or other companies under common control, and require them to also honor this Privacy Policy. If another company acquires Cheffington, or all or substantially all our assets, that company will possess the same information, and will collect, use, and disclose the information only as described in this Privacy Policy.</p>
                </Subsection>

                <Subsection title="Businesses on Cheffington">
                  <p>We may share information from or about you (such as your city, and if you provide it, your age and gender), your device type, and your use of the Service (such as which businesses you bookmark or call, or if you visit a business&apos;s URL) with businesses on Cheffington. You may adjust your account settings to increase or decrease the amount of information we share. Keep in mind that businesses can also view your public activity and posts, and may receive information from or about you when you transact or communicate with them, through Cheffington or otherwise, regardless of your settings (see Section 1 above).</p>
                  <p className="mt-1">Additionally, if you make a phone call to a business through or in connection with your use of the Service, we may share information about your call with the business that the business would have received had you called them directly, such as the date and time of your call and your phone number. You may be able to limit our ability to collect and share your phone number through your phone settings or phone service provider.</p>
                </Subsection>

                <Subsection title="Investigations and Legal Disclosures">
                  <p>We may investigate and disclose information from or about you if we have a good faith belief that such investigation or disclosure: (a) is reasonably necessary to comply with legal or law enforcement processes, such as a search warrant, subpoena, statute, judicial proceeding, or other legal process or law enforcement request; (b) is helpful to prevent, investigate, or identify possible wrongdoing in connection with the Service; or (c) protects our rights, reputation, property, or that of our users, affiliates, or the public, such as disclosures in connection with Cheffington&apos;s Consumer Alerts program. If you flag or otherwise complain to us about content through the Service, we may share the substance of your complaint with the contributor of that content in order to provide an opportunity for the contributor to respond.</p>
                </Subsection>

                <Subsection title="Links">
                  <p>The Service may link to third party-controlled websites, like a business&apos;s URL. Except as set forth herein, we do not share your personal information with them, and are not responsible for their privacy practices.</p>
                </Subsection>

                <Subsection title="Interaction With Third-Party Platforms">
                  <p>If you sign up for, or log into, Cheffington using a third-party platform like Facebook or Google, or link your Cheffington account with a third-party platform like Facebook, Instagram or Twitter, we may receive information about you from such third-party platform. If you post content to a third-party platform through the Service, that third-party platform will also receive that content, which will be visible to anyone that has access to it through that third-party platform. Some of our web pages utilize framing techniques to serve content to you from third-party platforms, while preserving the look and feel of the Service. In such cases, please note that the information you provide may be transmitted directly to the identified third party. If you interact with businesses through Cheffington, they will receive whatever information you choose to share with them, for example contact information you share through quote requests or direct messages to the business, or your phone number if you call the business.</p>
                </Subsection>

                <p className="mt-1.5">Cheffington may share information with third parties where you direct Cheffington to do so through the Service.</p>
              </Section>

              {/* Section 4 - Controlling Your Personal Data */}
              <Section title="CONTROLLING YOUR PERSONAL DATA">
                <p>Other users may be able to identify you, or associate you with your account, if you include personal information in the content you post publicly. You can reduce the risk of being personally identified by using the Service pseudonymously, though doing so could detract from the credibility of your contributions to the Service. Please also note that the messages you send or receive using the Service are only private to the extent that both you and the recipient(s) of your messages keep them private. For example, if you send a message to another user, that user may choose to publicly post it. We may access, review, and disclose such messages in connection with investigations related to use of the Service, as well as with our efforts to improve the Service.</p>
              </Section>

              {/* Section 5 - Data Retention */}
              <Section title="DATA RETENTION AND ACCOUNT TERMINATION">
                <p>We will remove certain public posts from view and/or dissociate them from your account profile, but we may retain information about you for the purposes authorized under this Privacy Policy unless prohibited by law. For example, we may retain information to prevent, investigate, or identify possible wrongdoing in connection with the Service or to comply with legal obligations. We may also maintain residual copies of your personal information in our backup systems. Please note that businesses cannot remove their business pages, ratings, or reviews by closing their accounts. Cheffington retains information for as long as reasonably necessary for the purposes for which it was collected, or as otherwise permitted or required by law.</p>
              </Section>

              {/* Section 6 - Children */}
              <Section title="CHILDREN">
                <p>The Service is intended for general audiences and is not directed to children under 13. We do not knowingly collect personal information from children under 13. Although use of Cheffington by children is unlikely, if you become aware that a child has provided us with personal information without parental consent, please contact us. If we become aware that a child under 13 has provided us with personal information without parental consent, we take steps to remove such information and terminate the child&apos;s account.</p>
              </Section>

              {/* Section 7 - Security */}
              <Section title="SECURITY">
                <p>We use various safeguards to protect the personal information submitted to us, both during transmission and after we receive it. However, no method of transmission over the Internet or via mobile device, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
              </Section>

              {/* Section 8 - Contact Information */}
              <Section title="CONTACT INFORMATION">
                <p>You may contact us online concerning our Privacy Policy, or write to us at the following addresses:</p>
                <p className="mt-1.5">If you are not a European Resident:</p>
                <p>Cheffington, Attn: Data Privacy Manager PO Box 1062</p>
                <p>Nevada City, California 95959</p>
              </Section>

              {/* Section 9 - Modifications */}
              <Section title="MODIFICATIONS TO THIS PRIVACY POLICY">
                <p>We may modify this Privacy Policy from time to time. If we make material changes to this Privacy Policy, we will notify you by email and/or by posting a notice on the Service prior to or on the effective date of the changes. By continuing to access or use the Service after those changes become effective, you acknowledge the revised Privacy Policy.</p>
              </Section>

              {/* Section 10 - US Privacy Rights */}
              <Section title="US: YOUR PRIVACY RIGHTS">
                <p>Cheffington does not sell your personal information and will not do so in the future without providing you with notice and an opportunity to opt-out of such sale as required by law. Similarly, we do not offer financial incentives associated with our collection, use, or disclosure of your personal information. Cheffington does not knowingly sell or share the personal information of consumers under 16 years of age.</p>
                <p className="mt-1.5">We do not disclose your personal information to third parties for the purpose of directly marketing their goods or services to you unless you request such disclosure. Cheffington may engage in &quot;targeted advertising&quot; as that term is defined by statute. We recognize Global Privacy Control signals (&quot;GPC&quot;) in regulated states, as required by law if your browser supports this functionality.</p>
                <p className="mt-1.5">Cheffington collects various categories of personal information when you use the Service, including identifiers, commercial information, internet or other electronic network or device activity information, geolocation data, and professional information.</p>
                <p className="mt-1.5">A more detailed description of the information Cheffington collects and how we use it is provided above in Section 1 (Information We Collect and How We Use It). Section 3 (Third Parties) describes the categories of third parties with whom we share personal information, and what information may be shared under different circumstances.</p>
                <p className="mt-1.5">Residents of certain states may have additional rights around Cheffington&apos;s collection, use, and sharing of their personal information.</p>
              </Section>

              {/* Section 11 - European Residents */}
              <Section title="EUROPEAN RESIDENTS: YOUR PRIVACY RIGHTS AND INTERNATIONAL DATA TRANSFER">
                <p className="mb-1.5">If you are a European Resident, you have the right to access your personal data, and the right to request that we correct, update, or delete your personal data. You can object to the processing of your personal information, ask us to restrict processing of your personal information, and request portability of your personal information.</p>
                <p className="mb-1.5">Similarly, if we have collected and processed your personal information with your consent, then you can withdraw your consent at any time. Withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
                <p className="mb-1.5">The Service generally provides you with a reasonable means to view and change your profile information and you can opt-out of marketing communications at any time by clicking on the &quot;unsubscribe&quot; or &quot;opt-out&quot; link in the marketing emails we send you or in your account settings. If you have any questions or comments about the processing of your personal information, you may contact us as described in Section 8 above.</p>
                <p className="mb-1.5">For European Residents, please note that the personal information we obtain from or about you may be transferred, processed, and stored outside of the EEA, United Kingdom or Switzerland for the purposes described in this Privacy Policy, including in the United States of America.</p>
                <p className="mb-1.5">We take the privacy of our users seriously and therefore take steps to safeguard your information, including ensuring an adequate level of data protection in accordance with E.U. and United Kingdom standards in effect as of the date of this Privacy Policy. These steps include use of Standard Contractual Clauses for transfers of personal information between our group companies, which require all group companies to protect European Residents&apos; personal information in accordance with applicable data protection laws. We have implemented similar appropriate safeguards with our third party service providers and partners and further details can be provided upon request.</p>
                <p className="mb-1.5">For European Residents, our legal basis for collecting and using the information described above will depend on the specific information concerned and the context in which we collect it. We, however, will normally collect personal information from you only where we have your consent to do so, where we need the personal information to perform a contract with you, or where the processing is in our legitimate interests and not overridden by your data protection interests or fundamental rights and freedoms. In some cases, we may also have a legal obligation to collect personal information from you or may otherwise need the personal information to protect your vital interests or those of another person (for instance, to prevent, investigate, or identify possible wrongdoing in connection with the Service or to comply with legal obligations). If we ask you to provide personal information to comply with a legal requirement or to perform a contract with you, we will make this clear at the relevant time and advise you whether the provision of your personal information is mandatory or not (as well as of the possible consequences if you do not provide your personal information).</p>
                <p className="mb-1.5">If we collect and use your personal information in reliance on our legitimate interests (or those of any third party), this interest will typically be to operate our Services, communicate with you in relation to our Services, or for our other legitimate commercial interests, for instance, when responding to your queries, to analyze and improve our platform, engage in marketing, or for the purposes of detecting or preventing fraud.</p>
                <p>If you have questions about or need further information concerning the legal basis on which we collect and use your personal information, please contact us at the address listed above in Section 8 (Contact Information).</p>
              </Section>

              {/* Copyright Footer */}
              <div className="text-sm mt-1.5 ">
                <p>Ad Choices Terms of Service</p>
                <p className="mt-1.5">Last Updated on March 18 2026.</p>
                <p className="mt-1.5">Copyright © 2024 Cheffington Inc., PO Box 1062 Nevada City, CA 95959</p>
              </div>

              {/* Additional Terms for Business Accounts */}
              <div className="mt-1.5 ">
                <h2 className="text-sm font-bold mb-1.5">ADDITIONAL TERMS FOR BUSINESS ACCOUNTS</h2>
                <p className="mb-1.5">Last Updated on July 10, 2024.</p>
                <p className="mb-1.5">The following terms (&quot;Business Terms&quot;), in addition to the Terms of Service above, govern your access to and use of your Business Account. In the event of any conflict between these Business Terms and the Terms of Service, the Business Terms apply. If you have purchased products or services from Cheffington on behalf of your business (e.g., advertising or business tools), the terms of that purchase apply in the event of any conflict with these Business Terms. Capitalized words used but not defined in these Business Terms have the meanings described in the Terms of Service. By creating, accessing, or using your Business Account, you are agreeing to these Business Terms and concluding a legally binding contract with Cheffington. You are not authorized to create, access, or use a Business Account if you do not agree to these Business Terms.</p>
                <div className=" my-1.5">
                  <p className="">PLEASE READ THESE BUSINESS TERMS CAREFULLY AS THEY REQUIRE THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN TRIALS OR CLASS ACTIONS, AND ALSO LIMIT THE REMEDIES AVAILABLE TO YOU IN THE EVENT OF A DISPUTE.</p>
                </div>
                <p className="mb-1.5">In the event of any termination of these Business Terms, whether by you or us, these Business Terms in their entirety will continue in full force and effect.</p>

                <h3 className="text-sm font-bold mt-1.5 mb-1">REQUIREMENTS, REPRESENTATIONS AND WARRANTIES</h3>
                <p className="mb-1.5">In order to access or use the Services, you agree that:</p>
                <ul className="list-disc pl-6 space-y-1 mb-1.5">
                  <li>you have the authority to act on behalf of the business or businesses associated with or claimed through your Business Account and bind any such business (including any corresponding business entity) to the Business Terms (such business or businesses, your &quot;Business&quot;);</li>
                  <li>your access to or use of the Business Site will only be in your capacity as an authorized representative of your Business;</li>
                  <li>you will not use the Consumer Site for business activities, including but not limited to flagging reviews or messaging people who have reviewed your Business;</li>
                  <li>your Business complies with applicable laws and does not offer, advertise, sell, or lease illegal products and/or services;</li>
                  <li>you grant Cheffington a non-transferable, non-exclusive, royalty-free limited license to display your public website on the Services, or allow for its display through iframes or other framing technology;</li>
                  <li>you agree that we may contact you, including by phone or email, using the contact information you provide us, make publicly available, or that we have on record for your business, and that our communications (including phone calls) with you may be monitored and recorded for quality purposes;</li>
                  <li>you understand that we may display health score information for your Business, and may place a Consumer Alert regarding that health score, on the business page for your Business;</li>
                  <li>you understand and agree that we may share certain aggregate or otherwise deidentified information about your responses to Request a Quote leads with other Businesses, for example, the number of total Businesses responding to the lead and the speed of those responses;</li>
                  <li>you understand and acknowledge that: (a) non-disparagement clauses in certain consumer contracts, such as clauses that seek to restrict or prohibit reviews (including provisions that penalize consumers for posting reviews) about your Business, are prohibited under California law (Cal. Civil Code § 1670.8) and under the federal Consumer Review Fairness Act (15 U.S. Code § 45b) and you will not include such clauses in your consumer contracts; and (b) you may not attempt to enforce any non-disparagement or &apos;gag&apos; clause against a consumer under any circumstances whether or not such clauses are barred under applicable law; and</li>
                  <li>you understand and acknowledge that Cheffington, through its Consumer Alerts, may publicly notify consumers about any attempt to enforce any non-disparagement or &apos;gag&apos; clause against a consumer under any circumstances.</li>
                </ul>

                <p className="mb-1.5">You represent and warrant that you will not, and will not authorize or induce any other party, to:</p>
                <ul className="list-disc pl-6 space-y-1 mb-1.5">
                  <li>offer incentives of any kind, such as discounts, freebies, refunds, gift cards, contest entries, offers, or deals in exchange for the posting of reviews of your Business, or to prevent or remove reviews, and you understand and acknowledge that Cheffington, through its Consumer Alerts, may publicly notify consumers about such incentives and other attempts to obtain, prevent, or remove reviews;</li>
                  <li>solicit or ask for reviews from your customers;</li>
                  <li>write reviews or vote on Content (e.g., voting user reviews as useful, funny, or cool) for your Business or your Business&apos;s competitors;</li>
                  <li>pay or induce anyone to post, refrain from posting, or remove reviews, or otherwise attempt to circumvent Cheffington&apos;s Recommendation Software (defined below) or fraud detection systems;</li>
                  <li>attempt to generate automated, fraudulent, or otherwise invalid ad impressions, inquiries, conversions, ad clicks, or other actions;</li>
                  <li>use any automated means or form of scraping or data extraction to access, query or otherwise collect Cheffington data, content and/or reviews from the Consumer Site or the Business Site, except as expressly permitted by Cheffington (for example, as described at www.Cheffington.com/robots.txt);</li>
                  <li>use any Cheffington trademark or service mark in any manner without Cheffington&apos;s prior written consent; or</li>
                  <li>misrepresent your identity or affiliation to anyone in connection with Cheffington.</li>
                </ul>

                <p className="mb-1.5">You understand and acknowledge that Cheffington allows consumers to post Content about your Business, including photos, ratings, and reviews. You understand and acknowledge that Cheffington employs automated software in an effort to showcase the most reliable and useful reviews while displaying other reviews less prominently (&quot;Recommendation Software&quot;). You understand and acknowledge that while Cheffington uses its Recommendation Software to identify potentially less helpful reviews, the Recommendation Software may sometimes suppress legitimate reviews or fail to detect illegitimate reviews. You understand and acknowledge that any purchase of advertising or other paid features from Cheffington will not influence the Recommendation Software or otherwise allow or enable You, directly or indirectly, to alter reviews or impact whether, where, or how reviews appear on Cheffington.</p>

                <p className="mb-1.5">The following Sections 2 and 3 apply if you are a resident of the United States or Canada only:</p>

                <h3 className="text-sm font-bold mt-1.5 mb-1">DISCLAIMERS AND LIMITATIONS OF LIABILITY</h3>
                <p className="mb-1.5">PLEASE READ THIS SECTION CAREFULLY SINCE IT LIMITS THE LIABILITY OF THE CHEFFINGTON ENTITIES TO YOU. FOR CLARITY, THE BELOW APPLIES IN ADDITION TO THE DISCLAIMERS AND LIMITATIONS OF LIABILITY DETAILED IN SECTION 12 OF THE TERMS.</p>
                <p>The federal Communications Decency Act (47 U.S. Code § 230) limits the liability of interactive computer services, like Cheffington, for their role in publishing third-party Content, including consumer reviews. Additionally, anti-SLAPP laws, such as Cal. Civ. Proc. Code § 425.16 in California, may require you to pay Cheffington&apos;s attorneys&apos; fees if you attempt to impose such liability on Cheffington through legal proceedings.</p>

                <h3 className="text-sm font-bold mt-1.5 mb-1">DISPUTE RESOLUTION AND CHOICE OF LAW</h3>
                <p className="mb-1.5">FOR CLARITY, THIS SECTION GOVERNS ANY BUSINESS CLAIM BROUGHT BY YOU OR CHEFFINGTON. ANY CLAIM NOT SUBJECT TO THIS SECTION IS INSTEAD GOVERNED BY SECTION 13 OF THE TERMS.</p>
                <p>This provision is subject to the California Arbitration Act. Except for Excluded Business Claims, any claim, controversy or cause of action arising out of or relating to: (a) these Terms, or the breach thereof; or (b) your access to or use of your Business Account and/or Business Site (each such controversy or claim, a &quot;Business Claim&quot;), shall be settled through final and binding Arbitration to be administered by National Arbitration and Mediation (&quot;NAM&quot;) and governed by NAM&apos;s Comprehensive Dispute Resolution Rules and Procedures in effect at the time such claim is filed. You agree that any Business Claim arises from a business transaction and shall not be governed by the NAM rules, forms, or fees applicable to consumer transactions. Any award of the arbitrator is final and binding. If you have a question about the arbitration process or to obtain a current copy of the Comprehensive Dispute Resolution Rules and Procedures and/or fee schedule, NAM&apos;s Commercial Dept. can be contacted at (800) 358-2550 or by NAM&apos;s website at www.namadr.com. The arbitrator will not have the power to commit errors of law, and the award may be vacated or corrected through judicial review by a court of competent jurisdiction under the California Arbitration Act for any such error.</p>
              </div>

              {/* Infringement Policies */}
              <div className="mt-1.5 ">
                <h2 className="text-sm font-bold mb-1.5">Infringement Policies</h2>
                <p className="mb-1.5">Last Updated on March 18, 2026</p>
                <p className="mb-1.5">We do not take kindly to those who abuse the intellectual property rights of others. If you believe that your copyright or trademark is being infringed on the Site, please send us a written notice with the following information:</p>
                <ul className="list-disc pl-6 space-y-1 mb-1.5">
                  <li>Identification of the copyrighted or trademarked work that you claim has been infringed;</li>
                  <li>Identification of the allegedly infringing content, and information reasonably sufficient to permit Cheffington to locate it on the Site (e.g., the URL for the web page on which the content appears);</li>
                  <li>A statement by you that you have a good faith belief that the use of the content identified in your notice in the manner complained of is not authorized by the copyright/trademark owner, its agent, or the law;</li>
                  <li>A statement by you that you attest, under penalty of perjury, that the information in your notice is accurate and that you are the copyright/trademark owner or authorized to act on the owner&apos;s behalf; and</li>
                  <li>Your physical or electronic signature, together with your contact information (address, telephone number and, if available, email address).</li>
                </ul>
                <p className="mb-1.5">At the same time, we do not take kindly to those who abuse the scope of their own intellectual property rights. If you believe that your content should not have been removed for alleged copyright or trademark infringement, you may send us a written counter-notice with the following information:</p>
                <ul className="list-disc pl-6 space-y-1 mb-1.5">
                  <li>Identification of the copyrighted or trademarked work that was removed, and the location on the Site where it would have been found prior to its removal;</li>
                  <li>A statement, under penalty of perjury, that you have a good faith belief that the content was removed as a result of a mistake or misidentification. For trademark disputes only: information reasonably sufficient to explain why you believe you are not infringing the trademarked work;</li>
                  <li>A statement that you consent either to the jurisdiction of (a) the Federal District Court for the judicial district in which your address is located if you live in the United States, or (b) any judicial district in which Cheffington is located if you live outside the United States. Please also include a statement that you will accept service of process from the person who sent the original infringement notice to Cheffington, or an agent of such person;</li>
                  <li>Your physical or electronic signature, together with your contact information (address, telephone number and, if available, email address).</li>
                </ul>
                <p className="mb-1.5">We will respond to all such notices and comply with applicable law. We reserve the right to remove content alleged to be infringing without prior notice and at our sole discretion. We also reserve the right to terminate a user&apos;s account if the user is determined to be a repeat infringer.</p>
                <p className="mb-1.5">You can send us your copyright or trademark notices in the following ways. By mail, courier, or fax:</p>
                <p>Cheffington</p>
                <p>Attn: Copyright Agent PO Box 1062</p>
                <p>Nevada City, CA 95959</p>
                <p className="mt-1.5">Through our online form: Contact Us</p>
              </div>

              {/* Final Copyright */}
              <div className="text-sm mt-1.5 ">
                <p>Copyright © 2024 Cheffington Inc., PO BOX 1062 NEVADA CITY, CA 95959</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components (matching your Terms page styling)
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="my-1.5">
      <h2 className="text-sm font-bold my-1.5">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-1.5">
      <h3 className="text-sm font-bold my-1">{title}</h3>
      <div className="text-sm">{children}</div>
    </div>
  );
}