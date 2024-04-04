const API = async (searchTerms) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=AIzaSyDey5y13cnqcSS6DAqTvpUROnz2xwOftUQ&maxResults=40`
      );
      if (response.ok) {
        const data = await response.json();
        return data.items;
      } else {
        console.error("Error fetching book data:", response.status);
        return null;
      }
    } catch (error) {
      console.error("Error fetching book data:", error);
      return null;
    }
  };
  
  export default API;