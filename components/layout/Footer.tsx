import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">AI Swadesh</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Learn in-demand skills with practical courses, live workshops, real-world projects and career-focused programs.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Removed for Stability */}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">All Courses</Link></li>
              <li><Link href="/programs" className="hover:text-blue-400 transition-colors">Career Programs</Link></li>
              <li><Link href="/workshops" className="hover:text-blue-400 transition-colors">Live Workshops</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-slate-400">Email:</span>
                <a href="mailto:support@aiswadesh.com" className="ml-2 hover:text-blue-400 transition-colors">support@aiswadesh.com</a>
              </li>
              <li className="flex items-start">
                <span className="text-slate-400">Phone:</span>
                <span className="ml-2">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-400">Address:</span>
                <span className="ml-2">Bengaluru, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} AI Swadesh. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-slate-400">
            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
