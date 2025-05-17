export default function Home() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sachchidanand Jha
        </h1>
        <h2 className="text-xl text-blue-600 mb-8">
          Full Stack Developer | UI/UX Enthusiast
        </h2>
        
        <div className="flex justify-center space-x-4 mb-12">
          <a href="https://github.com/Sachchidanand16" className="text-gray-700 hover:text-blue-600">
            <i className="fab fa-github text-2xl"></i>
          </a>
          {/* Add other social links */}
        </div>

        <div className="prose prose-lg mx-auto">
          <p>Welcome to my portfolio! I build...</p>
          {/* Add your intro */}
        </div>
      </div>
    </section>
  )
}
