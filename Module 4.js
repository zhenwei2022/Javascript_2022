async function Getdata() {
        console.log('asynchronous download begins');
        try {
          const response = await fetch(
              'https://api.tvmaze.com/shows/1/episodebynumber?season=1&number=1');
          const jsonData = await response.json();
          console.log(jsonData.name,jsonData.url,jsonData.image.medium,jsonData.summary);
        } catch (error) {
            console.log(error.message);
        } finally {
            console.log('asynchronous load complete');
        }

    }
 async function showPics() {
        try{
             const response = await fetch(
              'https://api.tvmaze.com/shows/1/episodebynumber?season=1&number=1');
           if (!response.ok) throw new Error('Invalid input!');
           const jsonData = await response.json();
           const name = jsonData.name;
           const summary = jsonData.summary;
           const url= jsonData.url;
           console.log(url);

           document.querySelector('img').src = url;
           document.querySelector('img').alt = name;
           document.querySelector('figcaption').innerText = summary;
        } catch (error) {
          console.log(error.message)
        }
     }

  Getdata();
  showPics();


