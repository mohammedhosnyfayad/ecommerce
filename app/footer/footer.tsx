export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold">shops</h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Your trusted place to discover quality products with a simple
              and enjoyable shopping experience.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              About Us
            </h3>

            <p className="text-sm leading-7 text-gray-400">
              We provide a wide range of products with a focus on quality,
              value, and a smooth shopping experience.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p>Email: support@example.com</p>
              <p>Phone: +20 100 000 0000</p>
              <p>Egypt</p>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}