export const Card = () => {
  return (
    <div className="bg-white w-1/4 rounded-2xl h-auto shadow">
        <div className="bg-card-bg bg-no-repeat bg-cover h-32 w-full rounded-t-2xl"></div>
        <div>
          <div> 
            <p><span className="font-bold tracking-wide antialiased text-blue-desat">Victor Crest</span><span className="text-blue-dark">26</span></p>
          </div>
          <div className="text-sm text-blue-dark">London</div>
        </div>
        <div className="border border-solid border-t-1 border-grey-dark border-opacity-25 p-5">
          <div className="flex flex-row">
            <div className="stats-col">
              <p className="font-bold tracking-wider">80k</p>
              <p className="text-grey-dark text-xs">Followers</p>
            </div>
            <div className="stats-col">
              <p className="font-bold tracking-wider">803k</p>
              <p className="text-grey-dark text-xs">Likes</p>
            </div>
            <div className="stats-col">
              <p className="font-bold tracking-wider">1.4k</p>
              <p className="text-grey-dark text-xs">Photos</p>
            </div>
          </div>
        </div>
    </div>
  )
}