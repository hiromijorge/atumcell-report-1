import { Link } from "react-router-dom";

export default function CompromisedEmails() {
  const emailData = [
    { email: "adam.bischoff@optimine.com", breachDate: "2016-09-01" },
    { email: "duckling6@optimine.com", breachDate: "2008-07-01" },
    { email: "jim.beirne@optimine.com", breachDate: "2012-05-05" },
    { email: "mark.palony@optimine.com", breachDate: "2018-06-01" },
    { email: "sara.savoy@optimine.com", breachDate: "2016-09-01" },
    { email: "rob@optimine.com", breachDate: "2018-07-23" },
    { email: "abischoff@optimine.com", breachDate: "2024-02-28" },
    { email: "adambischoff@optimine.com", breachDate: "2024-02-28" },
    { email: "albert.guralnik@optimine.com", breachDate: "2024-02-28" },
    { email: "alexander.martin@optimine.com", breachDate: "2023-11-04" },
    { email: "alexandralatanision@optimine.com", breachDate: "2024-02-28" },
    { email: "allen.hong@optimine.com", breachDate: "2016-09-01" },
    { email: "ann.winblad@optimine.com", breachDate: "2024-02-28" },
    { email: "chris.schmitt@optimine.com", breachDate: "2018-07-23" },
    { email: "christine@optimine.com", breachDate: "2024-02-28" },
    { email: "christopher.schmitt@optimine.com", breachDate: "2016-09-01" },
    { email: "cinnamon@optimine.com", breachDate: "2024-02-28" },
    { email: "david.keyes@optimine.com", breachDate: "2016-09-01" },
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
          {/* Introduction */}
          <div className="space-y-2">
            <h2 className="text-sm font-helvetica text-atumcell-blue-primary tracking-tight">
              Compromised Email Addresses
            </h2>
            <p className="text-xs font-roboto text-atumcell-black leading-4">
              Email addresses can pose significant security risks to a business
              when used to log in to third-party websites. If the email address
              is compromised, it can be used to gain access to sensitive
              information, and potentially impact the entire business.
              Additionally, phishing attacks and password breaches can expose
              the email address to unauthorized access.
            </p>
            <p className="text-xs font-roboto text-atumcell-black leading-4">
              Often, employees use the same or similar passwords on third-party
              systems that they use on corporate systems. Hackers may use
              passwords from third-party breaches to attempt to compromise
              systems.
            </p>
          </div>

          {/* Email Table */}
          <div className="space-y-2">
            <h3 className="text-sm font-helvetica text-atumcell-blue-primary tracking-tight">
              Compromised Email Addresses
            </h3>
            <div className="border border-atumcell-black overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-atumcell-blue-info">
                    <th className="px-2 py-1 text-left text-xs font-helvetica font-bold text-white border-r border-atumcell-black">
                      Email
                    </th>
                    <th className="px-2 py-1 text-left text-xs font-helvetica font-bold text-white">
                      Breach Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {emailData.map((item, index) => (
                    <tr key={index} className="bg-atumcell-gray-50">
                      <td className="px-2 py-1 text-xs font-roboto text-atumcell-black border-r border-b border-atumcell-black">
                        {item.email}
                      </td>
                      <td className="px-2 py-1 text-xs font-roboto text-atumcell-black border-b border-atumcell-black">
                        {item.breachDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Priority Actions */}
          <div className="space-y-2">
            <h3 className="text-sm font-helvetica text-atumcell-blue-primary tracking-tight">
              Priority Actions
            </h3>
            <div className="space-y-1">
              <p className="text-xs font-roboto text-atumcell-black leading-4">
                Based on the security assessment of Optimine, the following
                actions are recommended as priorities:
              </p>
              <p className="text-xs font-roboto text-atumcell-black leading-4">
                1. Update Axios to the latest version to patch the
                vulnerability.
              </p>
              <p className="text-xs font-roboto text-atumcell-black leading-4">
                2. Review and update any other dependencies with known
                vulnerabilities Atumcell offers a service to verify that
                vulnerabilities have been remediated successfully.
              </p>
            </div>
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
          Page 09
        </p>
      </div>
    </div>
  );
}
