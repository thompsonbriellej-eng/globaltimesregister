export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} The Global Times Register. All rights reserved.</p>
        <p className="mt-2">
          Independent reporting for a connected world.
        </p>
      </div>
    </footer>
  );
}
