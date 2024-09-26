import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 p-6 md:p-12">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Terms and Conditions
      </h1>
      <hr className="mb-6" />
      <p>
        Welcome to 6Lytes. By using our website and purchasing our products, you
        agree to comply with and be bound by the following terms and conditions.
        Please read them carefully before using our services.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. General Information</h2>
      <p>
        These Terms and Conditions apply to all users of this website and
        customers of 6Lytes. By accessing our website or purchasing from us, you
        agree to these terms. If you do not agree with these terms, please do
        not use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6">2. Products and Services</h2>
      <p>
        All descriptions of products and their prices are subject to change at
        any time without notice. We strive to ensure that all product
        descriptions and images are as accurate as possible; however, we cannot
        guarantee that all product information is entirely free of errors.
      </p>
      <p>We reserve the right to:</p>
      <ul className="list-disc list-inside ml-4">
        <li>
          Limit the sales of our products to any person, geographic region, or
          jurisdiction.
        </li>
        <li>Discontinue any product at any time.</li>
        <li>Limit the quantities of any products or services that we offer.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. Orders and Payments</h2>
      <p>
        By placing an order on our website, you agree to provide current,
        complete, and accurate purchase information. We reserve the right to
        refuse or cancel your order if any fraudulent or unauthorized activity
        is suspected.
      </p>
      <p>
        We accept payments through various secure methods. Please ensure that
        your payment information is valid and authorized before completing a
        purchase.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Shipping and Delivery</h2>
      <p>
        We aim to process and ship orders as quickly as possible. However,
        delivery times are estimates and subject to changes due to external
        factors beyond our control (such as courier delays or unforeseen
        events).
      </p>
      <p>
        6Lytes is not responsible for shipping delays once the product has been
        handed over to the courier service.
      </p>

      <h2 className="text-xl font-semibold mt-6">6. Limitation of Liability</h2>
      <p>
        In no case shall 6Lytes, our directors, employees, or affiliates, be
        liable for any direct, indirect, incidental, punitive, or consequential
        damages arising from your use of this website or purchase of our
        products. This includes, but is not limited to, errors, omissions, or
        inaccuracies in product descriptions, delays in product delivery, or any
        other service-related issues.
      </p>

      <h2 className="text-xl font-semibold mt-6">7. Intellectual Property</h2>
      <p>
        All content on this website, including but not limited to logos, text,
        graphics, images, and product descriptions, is the property of 6Lytes.
        You may not reproduce, duplicate, or resell any part of this website or
        its contents without prior written permission from us.
      </p>

      <h2 className="text-xl font-semibold mt-6">8. Governing Law</h2>
      <p>
        These Terms and Conditions, and any separate agreements whereby we
        provide you services, shall be governed by and construed in accordance
        with the laws of Pakistan.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        9. Changes to Terms and Conditions
      </h2>
      <p>
        We reserve the right to modify or update these terms at any time. Any
        changes will be posted on this page, and your continued use of our
        website constitutes acceptance of those changes.
      </p>

      <h2 className="text-xl font-semibold mt-6">10. Contact Information</h2>
      <p>
        If you have any questions regarding these terms, please contact us at:
      </p>
      <p>
        Email:{" "}
        <a href="mailto:support@6lytes.com" className="text-blue-500">
          support@6lytes.com
        </a>
      </p>

      <p>Thank you for visiting 6Lytes!</p>
    </div>
  );
};

export default TermsAndConditions;
