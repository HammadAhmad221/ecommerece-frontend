const InstaFeed = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-[3.5vw] mb-6 font-">Follow Us</h1>
      <div className="instagram-feed grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[80vw]">
<iframe src="https://snapwidget.com/embed/1079194" 
// class="snapwidget-widget" 
allowtransparency="true" 
frameBorder="0" scrolling="no" 
style={{border:'none', overflow:'hidden', width:'80vw',height:'30vh'}} 
title="Posts from Instagram"></iframe>
      </div>
        </div>
    );
  };
  
  export default InstaFeed;
  