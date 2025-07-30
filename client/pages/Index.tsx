import { Link } from "react-router-dom";

export default function Index() {
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
      <div className="flex flex-col items-center justify-center h-[calc(297mm-88px)] px-6 py-8">
        <div className="flex flex-col items-center gap-3 max-w-lg w-full">
          {/* Logo */}
          <div className="w-32 h-auto flex items-center justify-center mb-3">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c52c70394373198f0a266e687ad93661a340c713?width=472"
              alt="Atumcell Logo"
              className="w-full h-auto max-w-[128px]"
            />
          </div>

          {/* Report Title */}
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-helvetica font-normal text-atumcell-blue-primary leading-tight tracking-tight">
              Cybersecurity
              <br />
              Diligence Report
            </h1>
            <p className="text-sm font-helvetica text-atumcell-blue-primary mt-2">
              23 July 2025
            </p>
          </div>

          {/* Domain */}
          <p className="text-sm font-roboto text-atumcell-black text-center">
            optimine.com
          </p>

          {/* Version */}
          <p className="text-xs font-roboto text-atumcell-black text-center">
            Version: 1.0
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-8 w-full max-w-lg">
          <div className="border border-atumcell-gray-200 rounded-lg p-3 bg-white">
            <h3 className="font-helvetica font-bold text-xs text-atumcell-gray-900 mb-2">
              Contact Us
            </h3>
            <p className="font-roboto text-xs text-atumcell-gray-500 leading-relaxed mb-2">
              For questions regarding this report or to discuss remedying
              identified vulnerabilities, please contact us at the following:
            </p>
            <p className="font-roboto text-xs leading-relaxed">
              <span className="text-atumcell-gray-500">David Williams: </span>
              <span className="text-atumcell-blue-primary">d@atumcell.com</span>
              <span className="text-atumcell-gray-500"> or </span>
              <span className="text-atumcell-blue-primary">
                (617) 671-8810.
              </span>
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
          Page 13
        </p>
      </div>
    </div>
  );
}
