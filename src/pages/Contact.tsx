export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <form className="space-y-4">
        <div>
          <label className="block mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded" required />
        </div>

        <div>
          <label className="block mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded" required />
        </div>

        <div>
          <label className="block mb-2">Message</label>
          <textarea className="w-full px-4 py-2 border rounded" rows={5} required />
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
}