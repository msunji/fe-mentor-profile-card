export const Card = () => {
  return (
    <div className="bg-white w-1/4 rounded-2xl">
      <div>
        <div className="bg-card-bg bg-no-repeat bg-cover h-32 w-full rounded-t-2xl"></div>
        <div>
          <p className="font-bold tracking-wide antialiased">Victor Crest</p>
        </div>
        <div className="border border-solid border-t-1 border-grey-dark border-opacity-25">
          <div className="flex flex-row">
            <div className="stats-col">
              <p className="font-bold tracking-wider">80k</p>
              <p>Followers</p>
            </div>
            <div className="stats-col">
              <p className="font-bold tracking-wider">803k</p>
              <p>Likes</p>
            </div>
            <div className="stats-col">
              <p className="font-bold tracking-wider">1.4k</p>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}