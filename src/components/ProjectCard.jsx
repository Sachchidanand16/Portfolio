export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={`/projects/${project.image}`} 
        alt={project.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-gray-600">{project.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex space-x-4">
          <a href={project.demo} className="text-blue-600 hover:underline">Live Demo</a>
          <a href={project.code} className="text-gray-600 hover:underline">View Code</a>
        </div>
      </div>
    </div>
  )
}