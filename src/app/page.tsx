export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Hello World
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
          Welcome to your Next.js application! This is a simple Hello World page 
          built with modern web technologies.
        </p>
        <div className="mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg">
          <p className="text-lg text-gray-700">
            🎉 Your application is up and running successfully!
          </p>
        </div>
      </div>
    </div>
  );
}