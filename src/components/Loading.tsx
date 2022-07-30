export const Loading = () => {
  return(
    <div className="flex h-screen bg-base-300">
      <div className="m-auto space-y-3">
        <p className="text-4xl text-center font-bold">Loading...</p>
        <progress className="progress w-full" />
      </div>
    </div>
  )
};
