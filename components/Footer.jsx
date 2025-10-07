import Link from "next/link";

const Footer = () => {
  const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6654 4.66699L8.67136 8.48499C8.46796 8.60313 8.23692 8.66536 8.0017 8.66536C7.76647 8.66536 7.53544 8.60313 7.33203 8.48499L1.33203 4.66699M2.66536 2.66699H13.332C14.0684 2.66699 14.6654 3.26395 14.6654 4.00033V12.0003C14.6654 12.7367 14.0684 13.3337 13.332 13.3337H2.66536C1.92898 13.3337 1.33203 12.7367 1.33203 12.0003V4.00033C1.33203 3.26395 1.92898 2.66699 2.66536 2.66699Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.22003 11.045C9.35772 11.1082 9.51283 11.1227 9.65983 11.086C9.80682 11.0493 9.93692 10.9636 10.0287 10.843L10.2654 10.533C10.3896 10.3674 10.5506 10.233 10.7357 10.1404C10.9209 10.0479 11.125 9.99967 11.332 9.99967H13.332C13.6857 9.99967 14.0248 10.1402 14.2748 10.3902C14.5249 10.6402 14.6654 10.9794 14.6654 11.333V13.333C14.6654 13.6866 14.5249 14.0258 14.2748 14.2758C14.0248 14.5259 13.6857 14.6663 13.332 14.6663C10.1494 14.6663 7.09719 13.4021 4.84675 11.1516C2.59631 8.90119 1.33203 5.84894 1.33203 2.66634C1.33203 2.31272 1.47251 1.97358 1.72256 1.72353C1.9726 1.47348 2.31174 1.33301 2.66536 1.33301H4.66536C5.01899 1.33301 5.35812 1.47348 5.60817 1.72353C5.85822 1.97358 5.9987 2.31272 5.9987 2.66634V4.66634C5.9987 4.87333 5.9505 5.07749 5.85793 5.26263C5.76536 5.44777 5.63096 5.60881 5.46536 5.73301L5.15336 5.96701C5.03098 6.06046 4.94471 6.1934 4.90923 6.34324C4.87374 6.49308 4.89122 6.65059 4.9587 6.78901C5.86982 8.63959 7.36831 10.1362 9.22003 11.045Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3346 6.66634C13.3346 9.99501 9.64197 13.4617 8.40197 14.5323C8.28645 14.6192 8.14583 14.6662 8.0013 14.6662C7.85677 14.6662 7.71615 14.6192 7.60064 14.5323C6.36064 13.4617 2.66797 9.99501 2.66797 6.66634C2.66797 5.25185 3.22987 3.8953 4.23007 2.89511C5.23026 1.89491 6.58681 1.33301 8.0013 1.33301C9.41579 1.33301 10.7723 1.89491 11.7725 2.89511C12.7727 3.8953 13.3346 5.25185 13.3346 6.66634Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.0013 8.66634C9.10587 8.66634 10.0013 7.77091 10.0013 6.66634C10.0013 5.56177 9.10587 4.66634 8.0013 4.66634C6.89673 4.66634 6.0013 5.56177 6.0013 6.66634C6.0013 7.77091 6.89673 8.66634 8.0013 8.66634Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.004 2.003C6.487 2.003 2 6.49 2 12.006c0 2.116.67 4.077 1.818 5.68L2 22l4.434-1.785A9.91 9.91 0 0 0 12.004 22c5.517 0 10.004-4.487 10.004-9.994 0-5.517-4.487-10.003-10.004-10.003ZM12 20.07a8.01 8.01 0 0 1-4.089-1.119l-.292-.173-2.627 1.058.686-2.732-.178-.282A8.024 8.024 0 0 1 4.003 12c0-4.417 3.582-8 8.001-8s8.001 3.583 8.001 8c0 4.417-3.582 8.07-8.005 8.07Zm4.526-5.58c-.249-.124-1.473-.727-1.7-.81-.228-.084-.395-.125-.56.124-.166.25-.644.81-.789.978-.146.167-.29.188-.54.063-.25-.124-1.056-.388-2.012-1.238-.744-.663-1.246-1.48-1.392-1.73-.145-.25-.015-.385.109-.51.113-.113.25-.292.374-.437.124-.146.166-.25.25-.415.083-.166.041-.312-.021-.437-.063-.125-.56-1.351-.767-1.851-.204-.49-.41-.424-.56-.432h-.48a.923.923 0 0 0-.667.312c-.228.25-.873.853-.873 2.083 0 1.23.894 2.418 1.02 2.584.125.166 1.757 2.692 4.26 3.774.595.257 1.058.411 1.42.526.597.19 1.139.163 1.569.099.479-.07 1.473-.602 1.68-1.185.207-.582.207-1.08.145-1.186-.063-.105-.228-.166-.478-.29Z" fill="#25D366" />
    </svg>
  );

  const linkSections = [
    {
      title: "PRODUCTS",
      links: [
        { text: "Nike", path: '/', icon: null },
        { text: "Jordan", path: '/', icon: null },
        { text: "Vans", path: '/', icon: null },
        { text: "Gucci", path: '/', icon: null },
      ],
    },
    {
      title: "WEBSITE",
      links: [
        { text: "Home", path: '/', icon: null },
        { text: "Become Plus Member", path: '/pricing', icon: null },
        { text: "Create Your Store", path: '/create-store', icon: null },
      ],
    },
    {
      title: "CONTACTS",
      links: [
        // Website / map pin
        { text: "collshenr.com", path: "https://collshenr.com", icon: MapPinIcon },
        // Phone
        { text: "+254704448259", path: "tel:+254704448259", icon: PhoneIcon },
        // WhatsApp
        { text: "+254704448259", path: "https://wa.me/254704448259", icon: WhatsAppIcon },
      ],
    },
  ];

  const socialIcons = [{ icon: WhatsAppIcon, link: "https://wa.me/254704448259" }];

  return (
    <footer className="mx-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-slate-500/30 text-slate-500">
          <div>
            <Link href="/" className="text-4xl font-semibold text-slate-700">
              <span className="text-green-600">shoe</span>craft
              <span className="text-green-600 text-5xl leading-0">.</span>
            </Link>
            <p className="max-w-[410px] mt-6 text-sm">Welcome to ShoeCraft — your ultimate destination for premium footwear.</p>
            <div className="flex items-center gap-3 mt-5">
              {socialIcons.map((item, i) => (
                <Link
                  href={item.link}
                  key={i}
                  className="flex items-center justify-center w-10 h-10 bg-slate-100 hover:scale-105 hover:border border-slate-300 transition rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5 text-sm ">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-medium text-slate-700 md:mb-5 mb-3">{section.title}</h3>
                <ul className="space-y-2.5">
                  {section.links.map((link, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {link.icon && <link.icon />}
                      <Link href={link.path} className="hover:underline transition" target={link.path.startsWith("http") ? "_blank" : undefined} rel={link.path.startsWith("http") ? "noopener noreferrer" : undefined}>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="py-4 text-sm text-slate-500">Copyright 2025 © shoecraft All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
