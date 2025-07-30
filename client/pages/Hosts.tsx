import { Link } from "react-router-dom";

export default function Hosts() {
  const hosts = [
    "agile.optimine.com",
    "campaign.optimine.com",
    "exchange.optimine.com",
    "keycloak-dev.optimine.com",
    "outlook.optimine.com",
    "smarter.optimine.com",
    "www.smarter.optimine.com",
  ];

  return (
    <div
      className="min-h-screen bg-atumcell-gray-50 relative"
      style={{ width: "210mm", height: "297mm", margin: "0 auto" }}
    >
      {/* Header */}
      <div className="w-full h-8 bg-atumcell-blue-info flex items-center px-6">
        <div className="w-3 h-full bg-atumcell-orange"></div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 max-w-lg min-h-[calc(297mm-88px)]">
        <div className="space-y-4">
          {/* Hosts Section */}
          <div className="space-y-2">
            <h2 className="text-sm font-helvetica text-atumcell-blue-primary tracking-tight">
              Hosts
            </h2>
            <div className="space-y-1">
              {hosts.map((host, index) => (
                <p
                  key={index}
                  className="text-xs font-roboto text-atumcell-black leading-4"
                >
                  {index + 1}. {host}
                </p>
              ))}
            </div>
          </div>

          {/* Data Leaks Section */}
          <div className="space-y-2">
            <h2 className="text-sm font-helvetica text-atumcell-blue-primary tracking-tight">
              Data Leaks
            </h2>
            <p className="text-xs font-roboto text-atumcell-black leading-4">
              Data leaks and cybersecurity exposures can take many forms. It is
              important for individuals, employees, and organizations to stay
              vigilant and take proactive steps to protect themselves against
              cyber threats.
            </p>
            <p className="text-xs font-roboto text-atumcell-black leading-4">
              The scan also reveals potential data leaks and exposure surfaces
              within the Optimine network, e.g., compromised email addresses.
              These findings highlight areas where sensitive information may be
              at risk of unauthorized access or exposure. Addressing these
              issues is crucial for maintaining data confidentiality and
              preventing potential data breaches.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-8 bg-atumcell-blue-info flex flex-row items-center justify-between px-6 py-1">
        <div className="w-12 h-4 flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/254533f027c7b904462815bb6bbf2f6fa236aec1?width=160"
            alt="Atumcell Logo"
            className="w-full h-auto"
          />
        </div>
        <p className="font-roboto text-xs text-atumcell-gray-100 tracking-wide text-center">
          Copyright © 2025 Atumcell Inc. All rights reserved. Client
          Confidential
        </p>
        <p className="font-roboto text-xs text-atumcell-gray-50 text-right">
          Page 08
        </p>
      </div>
    </div>
  );
}
