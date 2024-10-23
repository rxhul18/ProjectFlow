export default function ProjectCard({ project }) {
  return (
    <div className="w-full  px-2 mb-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-semibold">{project.name}</h5>
            <a
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
              href={`/projects/${project.id}`}
            >
              View
            </a>
          </div>
          <p className="text-sm mt-2">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
