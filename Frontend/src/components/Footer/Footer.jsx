
import Logo from "../Logo";

export default function Footer(){
    return(

      <footer className="bg-slate-900 text-slate-300">
  <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

    <div>
      <div className="text-2xl font-bold text-sky-400"><Logo  /></div>
      <p className="mt-3 text-sm">
        A modern blog platform for sharing ideas and stories.
      </p>
    </div>

    <div>
      <h3 className="font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a className="hover:text-sky-400" href="#">Home</a></li>
        <li><a className="hover:text-sky-400" href="#">Blogs</a></li>
        <li><a className="hover:text-sky-400" href="#">About</a></li>
        <li><a className="hover:text-sky-400" href="#">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-4">Legal</h3>
      <ul className="space-y-2 text-sm">
        <li><a className="hover:text-sky-400" href="#">Privacy Policy</a></li>
        <li><a className="hover:text-sky-400" href="#">Terms</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-4">Newsletter</h3>
      <input
        type="email"
        placeholder="Your email"
        className="w-full px-4 py-2 rounded bg-slate-800 text-sm mb-3 focus:outline-none"
      />
      <button className="w-full bg-sky-400 text-slate-900 py-2 rounded font-semibold hover:bg-sky-500">
        Subscribe
      </button>
    </div>

  </div>

  <div className="border-t border-slate-800 text-center py-4 text-sm text-slate-400">
    © 2026 Blogify. All rights reserved.
  </div>
</footer>

    );
}