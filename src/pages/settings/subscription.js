import React, { useState, useEffect, useRef } from "react";
import { MoreVertical, Plus } from "lucide-react";

const Subscription = () => {
  const [showMenu, setShowMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(null);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "£15",
      period: "per hour/class",
      description: "Best value for consistent learning and skill growth.",
      renewalDays: 25,
      isCurrent: true,
      buttonText: "Cancel Subscription",
      buttonStyle: "bg-brand_secondary text-white hover:opacity-90",
    },
    {
      id: 2,
      name: "Recommended",
      price: "£15",
      period: "per hour/class",
      description: "Best value for consistent learning and",
      isCurrent: false,
      buttonText: "Upgrade Plan",
      buttonStyle: "bg-[#E3B62C] text-brand_secondary hover:opacity-90",
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      lastFour: "3423",
      expiry: "01/28",
      isDefault: true,
      logo: (
        <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xs">VISA</span>
        </div>
      ),
    },
    {
      id: 2,
      type: "Mastercard",
      lastFour: "3423",
      expiry: "01/28",
      isDefault: false,
      logo: (
        <div className="w-12 h-8 flex items-center justify-center">
          <div className="w-6 h-6 bg-red-500 rounded-full -mr-2"></div>
          <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-24 font-aileron_sb text-brand_secondary mb-8">
        Subscription & Payment
      </h1>

      {/* Plans Section */}
      <div className="mb-12">
        <h2 className="text-18 font-aileron_sb text-brand_secondary mb-6">
          Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-lg p-6 relative ${
                plan.isCurrent
                  ? "border-brand_primary"
                  : "border-neutral_stroke_2"
              }`}
            >
              {plan.renewalDays && (
                <div className="absolute top-4 right-4 bg-neutral_disabled text-brand_secondary text-12 font-aileron_r px-3 py-1 rounded-full">
                  {plan.renewalDays} days until renewal
                </div>
              )}
              <h3 className="text-20 font-aileron_sb text-brand_secondary mb-4">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-24 font-aileron_sb text-brand_secondary">
                  {plan.price}
                </span>
                <span className="text-14 font-aileron_r text-brand_secondary ml-2">
                  {plan.period}
                </span>
              </div>
              <p className="text-14 font-aileron_r text-brand_secondary mb-6">
                {plan.description}
              </p>
              <button
                className={`w-full py-3 rounded-lg text-14 font-aileron_sb transition-opacity ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-18 font-aileron_sb text-brand_secondary">
            Payment Methods
          </h2>
          <button className="flex items-center gap-2 text-brand_primary text-14 font-aileron_sb hover:opacity-80 transition-opacity">
            <Plus size={18} />
            Add Card
          </button>
        </div>

        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="border border-neutral_stroke_2 rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4 flex-1">
                {method.logo}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-14 font-aileron_sb text-brand_secondary">
                      {method.type} **** **** **** {method.lastFour}
                    </p>
                    {method.isDefault && (
                      <span className="bg-green-100 text-green-800 text-12 font-aileron_sb px-2 py-1 rounded">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-12 font-aileron_r text-brand_secondary">
                    Expire: {method.expiry}
                  </p>
                </div>
              </div>
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() =>
                    setShowMenu(showMenu === method.id ? null : method.id)
                  }
                  className="p-2 hover:bg-neutral_disabled rounded-full transition-colors"
                >
                  <MoreVertical size={20} className="text-brand_secondary" />
                </button>
                {showMenu === method.id && (
                  <div className="absolute right-0 top-full mt-2 bg-white border border-neutral_stroke_2 rounded-lg shadow-lg z-10 min-w-[150px]">
                    <button
                      onClick={() => setShowMenu(null)}
                      className="w-full text-left px-4 py-2 text-14 font-aileron_r text-brand_secondary hover:bg-neutral_disabled rounded-t-lg"
                    >
                      Set as Default
                    </button>
                    <button
                      onClick={() => setShowMenu(null)}
                      className="w-full text-left px-4 py-2 text-14 font-aileron_r text-red-600 hover:bg-neutral_disabled rounded-b-lg"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;

