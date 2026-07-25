import { useEffect } from "react";

// needed to redirect to external components
function ExternalRedirect({ url }: { url: string}) {
  console.log(url);
  useEffect(() => {
    if (url) {
      window.location.replace(url);
    }
  }, [url]);



  return null;
}

export default ExternalRedirect;