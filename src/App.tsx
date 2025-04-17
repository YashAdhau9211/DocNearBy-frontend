function App() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="shrink-0">
        {/* You can add an icon or image later */}
      </div>
      <div>
        <div className="text-xl font-medium text-black">MediConnect</div>
        <p className="text-slate-500">Symptom & Doctor Finder</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App