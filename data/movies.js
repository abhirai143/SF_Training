/**
 * 4 array constants are exported - movies, languages, countries, genres
 * Main data is in movies array which contains 100 movie details
 * Description of each of the 4 arrays follows below. 
 * 
 * movies Array: 
 *  tmdbId: string
 *  genres: Array
 *    id: numeric
 *    name: string
 *  originalLanguage: string (code)
 *  originalTitle: string
 *  overview: string
 *  posterUrl: string - do not use as incorrect
 *  productionCompanies: Array
 *    name: string
 *    id: numeric
 *  productionCountries: Array
 *    iso_3166_1: string (2 char country code)
 *    name: string
 *  releaseDate: date in yyyy-MM-dd format
 *  runtimeMinutes: numeric
 *  spokenLanguages: Array
 *    iso_639_1: string (2 char language code)
 *    name: string
 *  status: string
 *  tagline: string
 *  title: string
 *  cast: Array (max 10 only)
 *    castId: numeric
 *    character: string
 *    creditId: string
 *    gender: numeric (0 - not specified, 1 - female, 2 - male, 3 - non-binary)
 *    id: numeric
 *    name: string
 *    order: numeric
 *    profilePath: string - do not use as incorrect
 *    
 * 
 * languages: Array
 *  iso_639_1: string (2 char language code)
 *  english_name: string
 *  name: string
 * 
 * countries: Array
 *  iso_3166_1: string (2 char country code)
 *  english_name: string
 *  native_name: string
 * 
 * genres
 *  id: numeric
 *  name: string
 */

export const movies = [{"tmdbId":"2","genres":[{"id":18,"name":"Drama"},{"id":80,"name":"Crime"}],"originalLanguage":"fi","originalTitle":"Ariel","overview":"Taisto Kasurinen is a Finnish coal miner whose father has just committed suicide and who is framed for a crime he did not commit. In jail, he starts to dream about leaving the country and starting a new life. He escapes from prison but things don't go as planned...","posterUrl":"https://image.tmdb.org/t/p/original/gZCJZOn4l0Zj5hAxsMbxoS6CL0u.jpg","productionCompanies":"[{'name': 'Villealfa Filmproduction Oy', 'id': 2303}, {'name': 'Finnish Film Foundation', 'id': 2396}]","productionCountries":"[{'iso_3166_1': 'FI', 'name': 'Finland'}]","releaseDate":"1988-10-21","runtimeMinutes":69,"spokenLanguages":"[{'iso_639_1': 'fi', 'name': 'suomi'}, {'iso_639_1': 'de', 'name': 'Deutsch'}]","status":"Released","tagline":"","title":"Ariel","cast":[{"castId":3,"character":"Taisto Olavi Kasurinen","creditId":"52fe420dc3a36847f8000029","gender":0,"id":54768,"name":"Turo Pajala","order":0,"profilePath":null},{"castId":4,"character":"Irmeli Katariina Pihlaja","creditId":"52fe420dc3a36847f800002d","gender":0,"id":54769,"name":"Susanna Haavisto","order":1,"profilePath":null},{"castId":5,"character":"Mikkonen","creditId":"52fe420dc3a36847f8000031","gender":2,"id":4826,"name":"Matti Pellonpää","order":2,"profilePath":"https://image.tmdb.org/t/p/original/7WuLvkuWphUAtW6QQwtF3WrwUKE.jpg"},{"castId":6,"character":"Riku","creditId":"52fe420dc3a36847f8000035","gender":0,"id":54770,"name":"Eetu Hilkamo","order":3,"profilePath":null}]},{"tmdbId":"3","genres":[{"id":18,"name":"Drama"},{"id":35,"name":"Comedy"}],"originalLanguage":"fi","originalTitle":"Varjoja paratiisissa","overview":"An episode in the life of Nikander, a garbage man, involving the death of a co-worker, an affair and much more.","posterUrl":"https://image.tmdb.org/t/p/original/7ad4iku8cYBuB08g9yAU7tHJik5.jpg","productionCompanies":"[{'name': 'Villealfa Filmproduction Oy', 'id': 2303}]","productionCountries":"[{'iso_3166_1': 'FI', 'name': 'Finland'}]","releaseDate":"1986-10-16","runtimeMinutes":76,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fi', 'name': 'suomi'}, {'iso_639_1': 'sv', 'name': 'svenska'}]","status":"Released","tagline":"","title":"Shadows in Paradise","cast":[{"castId":5,"character":"Nikander","creditId":"52fe420dc3a36847f8000087","gender":2,"id":4826,"name":"Matti Pellonpää","order":0,"profilePath":"https://image.tmdb.org/t/p/original/7WuLvkuWphUAtW6QQwtF3WrwUKE.jpg"},{"castId":6,"character":"Ilona Rajamäki","creditId":"52fe420dc3a36847f800008b","gender":1,"id":5999,"name":"Kati Outinen","order":1,"profilePath":"https://image.tmdb.org/t/p/original/cjcuhAXRcg8C0VIDHtfz1BIVE3m.jpg"},{"castId":7,"character":"Melartin","creditId":"52fe420dc3a36847f800008f","gender":2,"id":4828,"name":"Sakari Kuosmanen","order":2,"profilePath":"https://image.tmdb.org/t/p/original/fziy9WDgG5aW2fiKpK3kK0lfhuS.jpg"},{"castId":9,"character":"Co-worker","creditId":"52fe420dc3a36847f8000099","gender":2,"id":53508,"name":"Esko Nikkari","order":3,"profilePath":"https://image.tmdb.org/t/p/original/mNiyD3BOzWba4CB0VTbIqA4EAVm.jpg"},{"castId":10,"character":"Ilona's Girlfriend","creditId":"52fe420dc3a36847f800009d","gender":0,"id":1086499,"name":"Kylli Köngäs","order":4,"profilePath":null},{"castId":11,"character":"Shop Steward","creditId":"52fe420dc3a36847f80000a1","gender":2,"id":222320,"name":"Pekka Laiho","order":5,"profilePath":"https://image.tmdb.org/t/p/original/oLRsjrS3J9GMrPz6RsXCxhOJo9g.jpg"},{"castId":12,"character":"Third Man","creditId":"52fe420dc3a36847f80000a5","gender":0,"id":1086500,"name":"Jukka-Pekka Palo","order":6,"profilePath":null}]},{"tmdbId":"5","genres":[{"id":80,"name":"Crime"},{"id":35,"name":"Comedy"}],"originalLanguage":"en","originalTitle":"Four Rooms","overview":"It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.","posterUrl":"https://image.tmdb.org/t/p/original/eQs5hh9rxrk1m4xHsIz1w11Ngqb.jpg","productionCompanies":"[{'name': 'Miramax Films', 'id': 14}, {'name': 'A Band Apart', 'id': 59}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1995-12-09","runtimeMinutes":98,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Twelve outrageous guests. Four scandalous requests. And one lone bellhop, in his first day on the job, who's in for the wildest New year's Eve of his life.","title":"Four Rooms","cast":[{"castId":42,"character":"Ted the Bellhop","creditId":"52fe420dc3a36847f80001b7","gender":2,"id":3129,"name":"Tim Roth","order":0,"profilePath":"https://image.tmdb.org/t/p/original/r4jtlboNqWPz2dOHafrPJE4Yd94.jpg"},{"castId":31,"character":"Man","creditId":"52fe420dc3a36847f800018b","gender":2,"id":3131,"name":"Antonio Banderas","order":1,"profilePath":"https://image.tmdb.org/t/p/original/85197jARsr06xQ84NhP9YoBL3sR.jpg"},{"castId":29,"character":"Angela","creditId":"52fe420dc3a36847f8000183","gender":1,"id":3130,"name":"Jennifer Beals","order":2,"profilePath":"https://image.tmdb.org/t/p/original/uYa9mUAh3YeFlACaY0rI0Oz7pRf.jpg"},{"castId":25,"character":"Elspeth","creditId":"52fe420dc3a36847f8000173","gender":1,"id":3125,"name":"Madonna","order":3,"profilePath":"https://image.tmdb.org/t/p/original/oWBpuX3Bxcp6pyP4KNKws0JibDD.jpg"},{"castId":41,"character":"Margaret","creditId":"52fe420dc3a36847f80001b3","gender":1,"id":3141,"name":"Marisa Tomei","order":4,"profilePath":"https://image.tmdb.org/t/p/original/w8qBpRcv04D5eSnnmvRL7PXyW36.jpg"},{"castId":43,"character":"Leo","creditId":"52fe420dc3a36847f80001bb","gender":2,"id":62,"name":"Bruce Willis","order":5,"profilePath":"https://image.tmdb.org/t/p/original/2B7RySy2WMVJKKEFN2XA3IFb8w0.jpg"},{"castId":38,"character":"Chester Rush","creditId":"52fe420dc3a36847f80001a7","gender":2,"id":138,"name":"Quentin Tarantino","order":6,"profilePath":"https://image.tmdb.org/t/p/original/9ci4NBvHXJktxjALdJsrtasqgtV.jpg"},{"castId":22,"character":"Jezebel","creditId":"52fe420dc3a36847f8000167","gender":1,"id":3122,"name":"Sammi Davis","order":7,"profilePath":"https://image.tmdb.org/t/p/original/1h6J7f0AZBGtn1kmfoipQVFZBaQ.jpg"},{"castId":23,"character":"Diana","creditId":"52fe420dc3a36847f800016b","gender":1,"id":3123,"name":"Amanda de Cadenet","order":8,"profilePath":"https://image.tmdb.org/t/p/original/m6poxt6GFglku6yregZH7NxElET.jpg"},{"castId":24,"character":"Athena","creditId":"52fe420dc3a36847f800016f","gender":1,"id":3124,"name":"Valeria Golino","order":9,"profilePath":"https://image.tmdb.org/t/p/original/fD4N460T7Yw8VTDG4YgoMSdMqhU.jpg"}]},{"tmdbId":"6","genres":[{"id":28,"name":"Action"},{"id":53,"name":"Thriller"},{"id":80,"name":"Crime"}],"originalLanguage":"en","originalTitle":"Judgment Night","overview":"While racing to a boxing match, Frank, Mike, John and Rey get more than they bargained for. A wrong turn lands them directly in the path of Fallon, a vicious, wise-cracking drug lord. After accidentally witnessing Fallon murder a disloyal henchman, the four become his unwilling prey in a savage game of cat &amp; mouse as they are mercilessly stalked through the urban jungle in this taut suspense drama","posterUrl":"https://image.tmdb.org/t/p/original/lNXmgUrP6h1nD53gkFh4WDzT6RZ.jpg","productionCompanies":"[{'name': 'Universal Pictures', 'id': 33}, {'name': 'Largo Entertainment', 'id': 1644}, {'name': 'JVC Entertainment Networks', 'id': 4248}]","productionCountries":"[{'iso_3166_1': 'JP', 'name': 'Japan'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1993-10-15","runtimeMinutes":110,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Don't move. Don't whisper. Don't even breathe.","title":"Judgment Night","cast":[{"castId":7,"character":"Frank Wyatt","creditId":"52fe420dc3a36847f8000259","gender":2,"id":2880,"name":"Emilio Estevez","order":0,"profilePath":"https://image.tmdb.org/t/p/original/2NSM4zFrw3i16UYdUhfETVjqC4I.jpg"},{"castId":8,"character":"Mike Peterson","creditId":"52fe420dc3a36847f800025d","gender":2,"id":9777,"name":"Cuba Gooding Jr.","order":1,"profilePath":"https://image.tmdb.org/t/p/original/yu8Q3ImFu3RJne585jjgeQO2Boo.jpg"},{"castId":9,"character":"Fallon","creditId":"52fe420dc3a36847f8000261","gender":2,"id":5724,"name":"Denis Leary","order":2,"profilePath":"https://image.tmdb.org/t/p/original/lnk4HjUeqDlT6Kg9PaQsVIDpl56.jpg"},{"castId":10,"character":"Ray Cochran","creditId":"52fe420dc3a36847f8000265","gender":2,"id":12799,"name":"Jeremy Piven","order":3,"profilePath":"https://image.tmdb.org/t/p/original/qtho4ZUcValnVvscTGgyWfUr4VP.jpg"},{"castId":11,"character":"Sykes","creditId":"52fe420dc3a36847f8000269","gender":2,"id":11803,"name":"Peter Greene","order":4,"profilePath":"https://image.tmdb.org/t/p/original/zCHUxWj7BZ3Uzmkbq9FPpOicniQ.jpg"},{"castId":12,"character":"Teddy, the Kid","creditId":"52fe420dc3a36847f800026d","gender":2,"id":52422,"name":"Michael DeLorenzo","order":5,"profilePath":"https://image.tmdb.org/t/p/original/dvLq2SvYF8XjS5ZbyDpPnVr49jZ.jpg"},{"castId":14,"character":"Rhodes","creditId":"52fe420dc3a36847f8000271","gender":0,"id":121667,"name":"Everlast","order":6,"profilePath":null},{"castId":15,"character":"Travis","creditId":"52fe420dc3a36847f8000275","gender":2,"id":102710,"name":"Michael Wiseman","order":7,"profilePath":"https://image.tmdb.org/t/p/original/xVMf83DrfLFuxMwJtuP2Yn2rVCe.jpg"},{"castId":16,"character":"Dre","creditId":"52fe420dc3a36847f8000279","gender":0,"id":1077264,"name":"Relioues Webb","order":8,"profilePath":null},{"castId":18,"character":"Buck","creditId":"52fe420dc3a36847f8000281","gender":2,"id":154124,"name":"Eugene Williams","order":10,"profilePath":"https://image.tmdb.org/t/p/original/6loalh4EThQlzw41iS2RZnujncp.jpg"}]},{"tmdbId":"11","genres":[{"id":12,"name":"Adventure"},{"id":28,"name":"Action"},{"id":878,"name":"Science Fiction"}],"originalLanguage":"en","originalTitle":"Star Wars","overview":"Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.","posterUrl":"https://image.tmdb.org/t/p/original/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg","productionCompanies":"[{'name': 'Lucasfilm', 'id': 1}, {'name': 'Twentieth Century Fox Film Corporation', 'id': 306}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1977-05-25","runtimeMinutes":121,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"A long time ago in a galaxy far, far away...","title":"Star Wars","cast":[{"castId":3,"character":"Luke Skywalker","creditId":"52fe420dc3a36847f8000441","gender":2,"id":2,"name":"Mark Hamill","order":0,"profilePath":"https://image.tmdb.org/t/p/original/ws544EgE5POxGJqq9LUfhnDrHtV.jpg"},{"castId":4,"character":"Han Solo","creditId":"52fe420dc3a36847f8000445","gender":2,"id":3,"name":"Harrison Ford","order":1,"profilePath":"https://image.tmdb.org/t/p/original/7CcoVFTogQgex2kJkXKMe8qHZrC.jpg"},{"castId":5,"character":"Princess Leia Organa","creditId":"52fe420dc3a36847f8000449","gender":1,"id":4,"name":"Carrie Fisher","order":2,"profilePath":"https://image.tmdb.org/t/p/original/pbleNurCYdrLFQMEnlQB2nkOR1O.jpg"},{"castId":6,"character":"Grand Moff Tarkin","creditId":"52fe420dc3a36847f800044d","gender":2,"id":5,"name":"Peter Cushing","order":3,"profilePath":"https://image.tmdb.org/t/p/original/fg7ufC0IMr6VasQzzdmTtX5ycQF.jpg"},{"castId":14,"character":"Obi-Wan \"Ben\" Kenobi","creditId":"52fe420dc3a36847f8000477","gender":2,"id":12248,"name":"Alec Guinness","order":4,"profilePath":"https://image.tmdb.org/t/p/original/nv3ppxgUQJytFGXZNde4f9ZlshB.jpg"},{"castId":7,"character":"See Threepio (C-3PO)","creditId":"52fe420dc3a36847f8000451","gender":2,"id":6,"name":"Anthony Daniels","order":5,"profilePath":"https://image.tmdb.org/t/p/original/cljvryjb3VwTsNR7fjQKjNPMaBB.jpg"},{"castId":8,"character":"Artoo-Detoo (R2-D2)","creditId":"52fe420dc3a36847f8000455","gender":2,"id":130,"name":"Kenny Baker","order":6,"profilePath":"https://image.tmdb.org/t/p/original/sdd9rgifNF9C51RejG7sUGU8Bka.jpg"},{"castId":15,"character":"Chewbacca","creditId":"52fe420dc3a36847f800047b","gender":2,"id":24343,"name":"Peter Mayhew","order":7,"profilePath":"https://image.tmdb.org/t/p/original/din1s5H4C4CfcnkHfEeRcdFlsVj.jpg"},{"castId":16,"character":"Darth Vader","creditId":"52fe420dc3a36847f800047f","gender":2,"id":24342,"name":"David Prowse","order":8,"profilePath":"https://image.tmdb.org/t/p/original/cJtmBVrjYwawh2cCiAfZkEjPeqc.jpg"},{"castId":17,"character":"Voice of Darth Vader (voice)","creditId":"52fe420dc3a36847f8000483","gender":0,"id":15152,"name":"James Earl Jones","order":9,"profilePath":"https://image.tmdb.org/t/p/original/2ZuBf3ip2RXhkiQqGUjbUzAf4Nx.jpg"}]},{"tmdbId":"12","genres":[{"id":16,"name":"Animation"},{"id":10751,"name":"Family"}],"originalLanguage":"en","originalTitle":"Finding Nemo","overview":"Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.","posterUrl":"https://image.tmdb.org/t/p/original/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg","productionCompanies":"[{'name': 'Pixar Animation Studios', 'id': 3}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2003-05-30","runtimeMinutes":100,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"There are 3.7 trillion fish in the ocean. They're looking for one.","title":"Finding Nemo","cast":[{"castId":8,"character":"Marlin (voice)","creditId":"52fe420ec3a36847f8000679","gender":2,"id":13,"name":"Albert Brooks","order":0,"profilePath":"https://image.tmdb.org/t/p/original/kahlMTdygrPJ28VYRhKPavYD9hs.jpg"},{"castId":9,"character":"Dory (voice)","creditId":"52fe420ec3a36847f800067d","gender":1,"id":14,"name":"Ellen DeGeneres","order":1,"profilePath":"https://image.tmdb.org/t/p/original/4LG2bFkqOzxzR1kpnoDcwIVuQTG.jpg"},{"castId":7,"character":"Nemo (voice)","creditId":"52fe420ec3a36847f8000675","gender":2,"id":12,"name":"Alexander Gould","order":2,"profilePath":"https://image.tmdb.org/t/p/original/c4EHOhxzwx7uDBxC8zODvKAEFGX.jpg"},{"castId":16,"character":"Gill (voice)","creditId":"52fe420ec3a36847f8000699","gender":2,"id":5293,"name":"Willem Dafoe","order":3,"profilePath":"https://image.tmdb.org/t/p/original/xM5lhOR5tWWdIlFpBDeZJx9opIP.jpg"},{"castId":10,"character":"Bloat (voice)","creditId":"52fe420ec3a36847f8000681","gender":2,"id":18,"name":"Brad Garrett","order":4,"profilePath":"https://image.tmdb.org/t/p/original/wXihtlnIvqP2oSNj33hiorDd3v9.jpg"},{"castId":11,"character":"Peach (voice)","creditId":"52fe420ec3a36847f8000685","gender":1,"id":19,"name":"Allison Janney","order":5,"profilePath":"https://image.tmdb.org/t/p/original/fido6hwI8tFSZNt6HtP2DZH2eu6.jpg"},{"castId":23,"character":"Gurgle (voice)","creditId":"52fe420ec3a36847f80006c1","gender":2,"id":6168,"name":"Austin Pendleton","order":6,"profilePath":"https://image.tmdb.org/t/p/original/pxcdhd4oAsnhvUg0BalmiiKJyXg.jpg"},{"castId":24,"character":"Bubbles (voice)","creditId":"52fe420ec3a36847f80006c5","gender":2,"id":17401,"name":"Stephen Root","order":7,"profilePath":"https://image.tmdb.org/t/p/original/sceCvLiv8xe2jQzrVn39wvosVHG.jpg"},{"castId":25,"character":"Deb / Flo (voice)","creditId":"52fe420ec3a36847f80006c9","gender":1,"id":14723,"name":"Vicki Lewis","order":8,"profilePath":"https://image.tmdb.org/t/p/original/vXKKbsYikbLZ3DS1GbCWwMoqDN7.jpg"},{"castId":26,"character":"Jacques (voice)","creditId":"52fe420ec3a36847f80006cd","gender":0,"id":7911,"name":"Joe Ranft","order":9,"profilePath":"https://image.tmdb.org/t/p/original/f1BoWC2JbCcfP1e5hKfGsxkHzVU.jpg"}]},{"tmdbId":"13","genres":[{"id":35,"name":"Comedy"},{"id":18,"name":"Drama"},{"id":10749,"name":"Romance"}],"originalLanguage":"en","originalTitle":"Forrest Gump","overview":"A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.","posterUrl":"https://image.tmdb.org/t/p/original/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg","productionCompanies":"[{'name': 'Paramount Pictures', 'id': 4}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1994-07-06","runtimeMinutes":142,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"The world will never be the same, once you've seen it through the eyes of Forrest Gump.","title":"Forrest Gump","cast":[{"castId":7,"character":"Forrest Gump","creditId":"52fe420ec3a36847f800074f","gender":2,"id":31,"name":"Tom Hanks","order":0,"profilePath":"https://image.tmdb.org/t/p/original/pQFoyx7rp09CJTAb932F2g8Nlho.jpg"},{"castId":8,"character":"Jenny Curran","creditId":"52fe420ec3a36847f8000753","gender":1,"id":32,"name":"Robin Wright","order":1,"profilePath":"https://image.tmdb.org/t/p/original/tXfQTgcIEPP7gtVdJ44ZxZPhacn.jpg"},{"castId":9,"character":"Lt. Dan Taylor","creditId":"52fe420ec3a36847f8000757","gender":2,"id":33,"name":"Gary Sinise","order":2,"profilePath":"https://image.tmdb.org/t/p/original/n5AbjoNfONICaggp2f1QhYAjAoZ.jpg"},{"castId":10,"character":"Pvt. Benjamin Buford 'Bubba' Blue","creditId":"52fe420ec3a36847f800075b","gender":2,"id":34,"name":"Mykelti Williamson","order":3,"profilePath":"https://image.tmdb.org/t/p/original/8TTxzpuvvpw2tB8xZBCDslYupNU.jpg"},{"castId":11,"character":"Mrs. Gump","creditId":"52fe420ec3a36847f800075f","gender":1,"id":35,"name":"Sally Field","order":4,"profilePath":"https://image.tmdb.org/t/p/original/ymhpsxujOO3a9qaGYSpkenCt9Le.jpg"},{"castId":38,"character":"Young Forrest Gump","creditId":"540b61f0c3a368799f001e2b","gender":2,"id":37821,"name":"Michael Conner Humphreys","order":5,"profilePath":"https://image.tmdb.org/t/p/original/vMEHkoxaJ7sn6rFYwfPLw2h6sb5.jpg"},{"castId":33,"character":"Young Jenny Curran","creditId":"52fe420ec3a36847f8000785","gender":1,"id":204997,"name":"Hanna Hall","order":6,"profilePath":"https://image.tmdb.org/t/p/original/tBk5mZmRsrWhIZRpza6QAQp4zdz.jpg"},{"castId":25,"character":"Forrest Gump Jr.","creditId":"52fe420ec3a36847f8000775","gender":2,"id":9640,"name":"Haley Joel Osment","order":7,"profilePath":"https://image.tmdb.org/t/p/original/znbiMgFoGnY3NMANOa8u13wJqFm.jpg"},{"castId":34,"character":"School Bus Driver","creditId":"52fe420ec3a36847f8000789","gender":1,"id":6751,"name":"Siobhan Fallon","order":8,"profilePath":"https://image.tmdb.org/t/p/original/wVFa8GiY0xdOLFsvGygy9RMtcBc.jpg"},{"castId":35,"character":"Drill Sergeant","creditId":"52fe420ec3a36847f800078d","gender":2,"id":37825,"name":"Afemo Omilami","order":9,"profilePath":"https://image.tmdb.org/t/p/original/bHluEOsKBKajFbk2cnxESo1nSCY.jpg"}]},{"tmdbId":"14","genres":[{"id":18,"name":"Drama"}],"originalLanguage":"en","originalTitle":"American Beauty","overview":"Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.","posterUrl":"https://image.tmdb.org/t/p/original/or1MP8BZIAjqWYxPdPX724ydKar.jpg","productionCompanies":"[{'name': 'DreamWorks SKG', 'id': 27}, {'name': 'Jinks/Cohen Company', 'id': 2721}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1999-09-15","runtimeMinutes":122,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Look closer.","title":"American Beauty","cast":[{"castId":6,"character":"Lester Burnham","creditId":"52fe420ec3a36847f80007db","gender":2,"id":1979,"name":"Kevin Spacey","order":0,"profilePath":"https://image.tmdb.org/t/p/original/cdowETe1PgXLjo72hDb7R7tyavf.jpg"},{"castId":3,"character":"Carolyn Burnham","creditId":"52fe420ec3a36847f80007cf","gender":1,"id":516,"name":"Annette Bening","order":1,"profilePath":"https://image.tmdb.org/t/p/original/q8pCSQzGLrhgtVXBKzMnwfoeBlH.jpg"},{"castId":5,"character":"Jane Burnham","creditId":"52fe420ec3a36847f80007d7","gender":1,"id":2155,"name":"Thora Birch","order":2,"profilePath":"https://image.tmdb.org/t/p/original/jxtp9prkQgFmj0ZRvi1kcnnqaWb.jpg"},{"castId":7,"character":"Ricky Fitts","creditId":"52fe420ec3a36847f80007df","gender":2,"id":8210,"name":"Wes Bentley","order":3,"profilePath":"https://image.tmdb.org/t/p/original/fbHHalL9CS52zvJp015G31vwX23.jpg"},{"castId":8,"character":"Angela Hayes","creditId":"52fe420ec3a36847f80007e3","gender":1,"id":8211,"name":"Mena Suvari","order":4,"profilePath":"https://image.tmdb.org/t/p/original/xnc7WgBvfefwu3nJ5IkCjQrhPz0.jpg"},{"castId":9,"character":"Colonel Frank Fitts","creditId":"52fe420ec3a36847f80007e7","gender":2,"id":2955,"name":"Chris Cooper","order":5,"profilePath":"https://image.tmdb.org/t/p/original/ytZY7YofdiAZyiyr4NyiB77lwwQ.jpg"},{"castId":4,"character":"Jim Olmeyer","creditId":"52fe420ec3a36847f80007d3","gender":2,"id":2154,"name":"Scott Bakula","order":6,"profilePath":"https://image.tmdb.org/t/p/original/o0lOdRjvFe0DEjquR1miMnjUUzt.jpg"},{"castId":10,"character":"Buddy Kane","creditId":"52fe420ec3a36847f80007eb","gender":2,"id":8212,"name":"Peter Gallagher","order":7,"profilePath":"https://image.tmdb.org/t/p/original/6bFDP5nBVx6RymoqPeSPwIvBCEL.jpg"},{"castId":11,"character":"Barbara Fitts","creditId":"52fe420ec3a36847f80007ef","gender":1,"id":19,"name":"Allison Janney","order":8,"profilePath":"https://image.tmdb.org/t/p/original/fido6hwI8tFSZNt6HtP2DZH2eu6.jpg"},{"castId":12,"character":"Jim Berkley","creditId":"52fe420ec3a36847f80007f3","gender":2,"id":8213,"name":"Sam Robards","order":9,"profilePath":"https://image.tmdb.org/t/p/original/xBfl2c80eQtbjKTH6dOwFBnFlE7.jpg"}]},{"tmdbId":"15","genres":[{"id":9648,"name":"Mystery"},{"id":18,"name":"Drama"}],"originalLanguage":"en","originalTitle":"Citizen Kane","overview":"Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.","posterUrl":"https://image.tmdb.org/t/p/original/oFWvF7OJfT2ydAAatlnsgChV4FP.jpg","productionCompanies":"[{'name': 'RKO Radio Pictures', 'id': 6}, {'name': 'Mercury Productions', 'id': 11447}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1941-04-30","runtimeMinutes":119,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"It's Terrific!","title":"Citizen Kane","cast":[{"castId":5,"character":"Charles Foster Kane","creditId":"52fe420ec3a36847f8000893","gender":2,"id":40,"name":"Orson Welles","order":0,"profilePath":"https://image.tmdb.org/t/p/original/2DF3e98c7GGa1uJJvpgIiMPg0h2.jpg"},{"castId":4,"character":"Jedediah Leland","creditId":"52fe420ec3a36847f800088f","gender":2,"id":7664,"name":"Joseph Cotten","order":1,"profilePath":"https://image.tmdb.org/t/p/original/3XA5FiSsk2Op8FDEuzS0TYdMSNP.jpg"},{"castId":10,"character":"Susan Alexander Kane","creditId":"52fe420ec3a36847f80008a7","gender":1,"id":11029,"name":"Dorothy Comingore","order":2,"profilePath":"https://image.tmdb.org/t/p/original/uUPQOYeLIzTucPd4Hn96tCqGSv1.jpg"},{"castId":29,"character":"Jim W. Gettys","creditId":"52fe420ec3a36847f800090d","gender":2,"id":14518,"name":"Ray Collins","order":3,"profilePath":"https://image.tmdb.org/t/p/original/ovjJ7n0N0fO4SNO0Z3lbeQWxFyZ.jpg"},{"castId":9,"character":"Walter Parks Thatcher","creditId":"52fe420ec3a36847f80008a3","gender":2,"id":11028,"name":"George Coulouris","order":4,"profilePath":"https://image.tmdb.org/t/p/original/aJWYZnxtEmr79o97Qv5rsfNMHoj.jpg"},{"castId":6,"character":"Mary Kane","creditId":"52fe420ec3a36847f8000897","gender":1,"id":11025,"name":"Agnes Moorehead","order":5,"profilePath":"https://image.tmdb.org/t/p/original/b3W0Xen8mEb9GD65rlyuyzaOEYs.jpg"},{"castId":14,"character":"Raymond","creditId":"52fe420ec3a36847f80008b7","gender":2,"id":11033,"name":"Paul Stewart","order":6,"profilePath":"https://image.tmdb.org/t/p/original/8tKdcrxfykUgevbWTz8kuK7neQZ.jpg"},{"castId":7,"character":"Emily Norton Kane","creditId":"52fe420ec3a36847f800089b","gender":1,"id":11026,"name":"Ruth Warrick","order":7,"profilePath":"https://image.tmdb.org/t/p/original/zb6SLWE9PFCy1ZEEDznuVbYmoio.jpg"},{"castId":30,"character":"Herbert Carter","creditId":"52fe420ec3a36847f8000911","gender":0,"id":14364,"name":"Erskine Sanford","order":8,"profilePath":"https://image.tmdb.org/t/p/original/gLSuzEnOuTYmwU0wXO0GYe060n2.jpg"},{"castId":11,"character":"Jerry Thompson/Narrator","creditId":"52fe420ec3a36847f80008ab","gender":0,"id":11030,"name":"William Alland","order":9,"profilePath":"https://image.tmdb.org/t/p/original/5cnNirYmNRxXRtovuAnka8exirR.jpg"}]},{"tmdbId":"16","genres":[{"id":18,"name":"Drama"},{"id":80,"name":"Crime"},{"id":10402,"name":"Music"}],"originalLanguage":"en","originalTitle":"Dancer in the Dark","overview":"Selma, a Czech immigrant on the verge of blindness, struggles to make ends meet for herself and her son, who has inherited the same genetic disorder and will suffer the same fate without an expensive operation. When life gets too difficult, Selma learns to cope through her love of musicals, escaping life's troubles - even if just for a moment - by dreaming up little numbers to the rhythmic beats of her surroundings.","posterUrl":"https://image.tmdb.org/t/p/original/7xizDTz4Yj4IYm2ud4f6EfEXe5H.jpg","productionCompanies":"[{'name': 'Fine Line Features', 'id': 8}, {'name': 'Zentropa Entertainments', 'id': 76}, {'name': 'Danmarks Radio (DR)', 'id': 119}, {'name': 'SVT Drama', 'id': 157}, {'name': 'Arte', 'id': 201}, {'name': 'Memfis Film', 'id': 321}, {'name': 'France 3 Cinéma', 'id': 591}, {'name': 'Angel films', 'id': 2996}, {'name': 'TV 1000', 'id': 4524}, {'name': 'Canal+', 'id': 5358}, {'name': 'Constantin Film Produktion', 'id': 5755}, {'name': 'Yleisradio (YLE)', 'id': 5975}, {'name': 'Arte France Cinéma', 'id': 6916}, {'name': 'Westdeutscher Rundfunk (WDR)', 'id': 7025}, {'name': 'Blind Spot Pictures Oy', 'id': 7330}, {'name': 'Vrijzinnig Protestantse Radio Omroep (VPRO)', 'id': 8659}, {'name': 'Film4', 'id': 9349}, {'name': 'Liberator Productions', 'id': 11239}, {'name': 'Icelandic Film', 'id': 14937}, {'name': 'Film i Väst', 'id': 17513}, {'name': 'Pain Unlimited GmbH Filmproduktion', 'id': 30268}, {'name': 'Trust Film Svenska', 'id': 53667}, {'name': 'Cinematograph A/S', 'id': 53668}, {'name': 'What Else? B.V', 'id': 53669}, {'name': 'Filmek A/S', 'id': 53670}, {'name': 'Lantia Cinema & Audiovisivi', 'id': 53671}]","productionCountries":"[{'iso_3166_1': 'AR', 'name': 'Argentina'}, {'iso_3166_1': 'DK', 'name': 'Denmark'}, {'iso_3166_1': 'FI', 'name': 'Finland'}, {'iso_3166_1': 'FR', 'name': 'France'}, {'iso_3166_1': 'DE', 'name': 'Germany'}, {'iso_3166_1': 'IS', 'name': 'Iceland'}, {'iso_3166_1': 'IT', 'name': 'Italy'}, {'iso_3166_1': 'NL', 'name': 'Netherlands'}, {'iso_3166_1': 'NO', 'name': 'Norway'}, {'iso_3166_1': 'SE', 'name': 'Sweden'}, {'iso_3166_1': 'GB', 'name': 'United Kingdom'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2000-05-17","runtimeMinutes":140,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"You don't need eyes to see.","title":"Dancer in the Dark","cast":[{"castId":33,"character":"Selma Jezkova","creditId":"52fe420fc3a36847f8000a17","gender":1,"id":47,"name":"Björk","order":0,"profilePath":"https://image.tmdb.org/t/p/original/cnsDUT4YeiEl8zCxYvRJCczqEnf.jpg"},{"castId":2,"character":"Kathy","creditId":"52fe420ec3a36847f8000985","gender":1,"id":50,"name":"Catherine Deneuve","order":1,"profilePath":"https://image.tmdb.org/t/p/original/7MgouLf2vVhv275LtL7JFL1vWji.jpg"},{"castId":3,"character":"Bill Houston","creditId":"52fe420ec3a36847f8000989","gender":2,"id":52,"name":"David Morse","order":2,"profilePath":"https://image.tmdb.org/t/p/original/5PuSGfBw3Hsdo5jkhZ59NDFCZUm.jpg"},{"castId":4,"character":"Jeff","creditId":"52fe420ec3a36847f800098d","gender":2,"id":53,"name":"Peter Stormare","order":3,"profilePath":"https://image.tmdb.org/t/p/original/dDR0brp5L7fXDyEywrhjQv01LSg.jpg"},{"castId":7,"character":"Oldrich Novy","creditId":"52fe420ec3a36847f800099d","gender":2,"id":6748,"name":"Joel Grey","order":4,"profilePath":"https://image.tmdb.org/t/p/original/yCLwC64GVp96bNi7eTPT0VPmjON.jpg"},{"castId":8,"character":"Linda Houston","creditId":"52fe420ec3a36847f80009a1","gender":1,"id":2617,"name":"Cara Seymour","order":5,"profilePath":"https://image.tmdb.org/t/p/original/3X73Lzbnhz5eHlLCW5dLGBp0G0o.jpg"},{"castId":9,"character":"Gene Jezkova","creditId":"52fe420ec3a36847f80009a5","gender":0,"id":6749,"name":"Vladica Kostic","order":6,"profilePath":null},{"castId":10,"character":"Norman","creditId":"52fe420ec3a36847f80009a9","gender":2,"id":1642,"name":"Jean-Marc Barr","order":7,"profilePath":"https://image.tmdb.org/t/p/original/vlWlQUc3qxNd0fIbv2lqXOv8j7i.jpg"},{"castId":11,"character":"Samuel","creditId":"52fe420ec3a36847f80009ad","gender":0,"id":6750,"name":"Vincent Paterson","order":8,"profilePath":null},{"castId":12,"character":"Brenda","creditId":"52fe420ec3a36847f80009b1","gender":1,"id":6751,"name":"Siobhan Fallon","order":9,"profilePath":"https://image.tmdb.org/t/p/original/wVFa8GiY0xdOLFsvGygy9RMtcBc.jpg"}]},{"tmdbId":"17","genres":[{"id":27,"name":"Horror"},{"id":53,"name":"Thriller"},{"id":9648,"name":"Mystery"}],"originalLanguage":"en","originalTitle":"The Dark","overview":"Adèle and her daughter Sarah are traveling on the Welsh coastline to see her husband James when Sarah disappears. A different but similar looking girl appears who says she died in a past time. Adèle tries to discover what happened to her daughter as she is tormented by Celtic mythology from the past.","posterUrl":"https://image.tmdb.org/t/p/original/8fzjzQhLXl1afshhsE5Y3MGuco4.jpg","productionCompanies":"[{'name': 'Constantin Film', 'id': 47}, {'name': 'Impact Pictures', 'id': 248}, {'name': 'Isle of Man Film', 'id': 2268}, {'name': 'UK Film Council', 'id': 2452}]","productionCountries":"[{'iso_3166_1': 'DE', 'name': 'Germany'}, {'iso_3166_1': 'GB', 'name': 'United Kingdom'}]","releaseDate":"2006-01-26","runtimeMinutes":87,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'cy', 'name': 'Cymraeg'}]","status":"Released","tagline":"One of the living for one of the dead.","title":"The Dark","cast":[{"castId":4,"character":"James","creditId":"52fe420fc3a36847f8000a8f","gender":2,"id":48,"name":"Sean Bean","order":0,"profilePath":"https://image.tmdb.org/t/p/original/iIxP2IzvcLgr5WaTBD4UfSqaV3q.jpg"},{"castId":5,"character":"Adèle","creditId":"52fe420fc3a36847f8000a93","gender":1,"id":49,"name":"Maria Bello","order":1,"profilePath":"https://image.tmdb.org/t/p/original/tFkbad0JoWvYc6XYBITv6EfeLwR.jpg"},{"castId":6,"character":"Rowan","creditId":"52fe420fc3a36847f8000a97","gender":2,"id":51,"name":"Richard Elfyn","order":2,"profilePath":"https://image.tmdb.org/t/p/original/vaj3r7Wfezb5j2eVv7dIFiJXyyQ.jpg"},{"castId":7,"character":"Dafydd","creditId":"52fe420fc3a36847f8000a9b","gender":2,"id":54,"name":"Maurice Roeves","order":3,"profilePath":"https://image.tmdb.org/t/p/original/qXYjnIHClkey4QQxPG5D5JD7Y74.jpg"},{"castId":8,"character":"Ebrill","creditId":"52fe420fc3a36847f8000a9f","gender":1,"id":55,"name":"Abigail Stone","order":4,"profilePath":null},{"castId":9,"character":"Sarah","creditId":"52fe420fc3a36847f8000aa3","gender":1,"id":56,"name":"Sophie Stuckey","order":5,"profilePath":"https://image.tmdb.org/t/p/original/detvecq2YxaCYeG6EhHCMdprQbK.jpg"},{"castId":22,"character":"Young Dafydd","creditId":"530f7697925141739b000f84","gender":0,"id":1297119,"name":"Casper Harvey","order":6,"profilePath":null},{"castId":23,"character":"Doctor","creditId":"530f76a6925141739b000f89","gender":0,"id":1297120,"name":"Eluned Jones","order":7,"profilePath":null},{"castId":24,"character":"Librarian","creditId":"530f76b3925141733e000fd8","gender":0,"id":1297121,"name":"Gwenyth Petty","order":8,"profilePath":null},{"castId":25,"character":"Police Inspector","creditId":"530f76bf925141734a000fe7","gender":0,"id":87101,"name":"Robin Griffith","order":9,"profilePath":null}]},{"tmdbId":"18","genres":[{"id":12,"name":"Adventure"},{"id":14,"name":"Fantasy"},{"id":28,"name":"Action"},{"id":53,"name":"Thriller"},{"id":878,"name":"Science Fiction"}],"originalLanguage":"en","originalTitle":"The Fifth Element","overview":"In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.","posterUrl":"https://image.tmdb.org/t/p/original/zaFa1NRZEnFgRTv5OVXkNIZO78O.jpg","productionCompanies":"[{'name': 'Columbia Pictures', 'id': 5}, {'name': 'Gaumont', 'id': 9}]","productionCountries":"[{'iso_3166_1': 'FR', 'name': 'France'}]","releaseDate":"1997-05-07","runtimeMinutes":126,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'sv', 'name': 'svenska'}, {'iso_639_1': 'de', 'name': 'Deutsch'}]","status":"Released","tagline":"There is no future without it.","title":"The Fifth Element","cast":[{"castId":5,"character":"Korben Dallas","creditId":"52fe420fc3a36847f8000b53","gender":2,"id":62,"name":"Bruce Willis","order":0,"profilePath":"https://image.tmdb.org/t/p/original/2B7RySy2WMVJKKEFN2XA3IFb8w0.jpg"},{"castId":7,"character":"Jean-Baptiste Emmanuel Zorg","creditId":"52fe420fc3a36847f8000b5b","gender":2,"id":64,"name":"Gary Oldman","order":1,"profilePath":"https://image.tmdb.org/t/p/original/v4qJEX4TEgEt2Zghldbd71AFjbV.jpg"},{"castId":8,"character":"Father Vito Cornelius","creditId":"52fe420fc3a36847f8000b5f","gender":2,"id":65,"name":"Ian Holm","order":2,"profilePath":"https://image.tmdb.org/t/p/original/27SAk1v043GdOeAxT5pPoMUYhGg.jpg"},{"castId":6,"character":"Leeloo","creditId":"52fe420fc3a36847f8000b57","gender":1,"id":63,"name":"Milla Jovovich","order":3,"profilePath":"https://image.tmdb.org/t/p/original/mcNgLarIVho7LheWcvd1oQ2tBOg.jpg"},{"castId":36,"character":"Ruby Rhod","creditId":"52fe420fc3a36847f8000bcf","gender":2,"id":66,"name":"Chris Tucker","order":4,"profilePath":"https://image.tmdb.org/t/p/original/9RQvgEi1GnPK4QzqOGHL3jP3VZr.jpg"},{"castId":37,"character":"Billy","creditId":"52fe420fc3a36847f8000bd3","gender":2,"id":8395,"name":"Luke Perry","order":5,"profilePath":"https://image.tmdb.org/t/p/original/78TAr0wLoRHyubnYxjyHNCt70V2.jpg"},{"castId":38,"character":"General Munro","creditId":"52fe420fc3a36847f8000bd7","gender":2,"id":591,"name":"Brion James","order":6,"profilePath":"https://image.tmdb.org/t/p/original/4Vm3Zq6arXq3jyFfq3yJgH9Jj2l.jpg"},{"castId":39,"character":"President Lindberg","creditId":"52fe420fc3a36847f8000bdb","gender":2,"id":8396,"name":"Tom Lister Jr.","order":7,"profilePath":"https://image.tmdb.org/t/p/original/UY4xouwBs8p9QmcXbnP8iy2uYp.jpg"},{"castId":40,"character":"Fog","creditId":"52fe420fc3a36847f8000bdf","gender":2,"id":7400,"name":"Lee Evans","order":9,"profilePath":"https://image.tmdb.org/t/p/original/oMMGnjjU9bPxtaS4swZ4dxkifwX.jpg"},{"castId":41,"character":"David","creditId":"52fe420fc3a36847f8000be3","gender":2,"id":8397,"name":"Charlie Creed-Miles","order":10,"profilePath":"https://image.tmdb.org/t/p/original/2T4DYXNCDInWCfpxURVLQdKIgwK.jpg"}]},{"tmdbId":"19","genres":[{"id":18,"name":"Drama"},{"id":878,"name":"Science Fiction"}],"originalLanguage":"de","originalTitle":"Metropolis","overview":"In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.","posterUrl":"https://image.tmdb.org/t/p/original/qriaeUUwdmlgethK3aSAx68mG05.jpg","productionCompanies":"[{'name': 'Paramount Pictures', 'id': 4}, {'name': 'Universum Film (UFA)', 'id': 12372}]","productionCountries":"[{'iso_3166_1': 'DE', 'name': 'Germany'}]","releaseDate":"1927-01-10","runtimeMinutes":153,"spokenLanguages":"[{'iso_639_1': 'xx', 'name': 'No Language'}]","status":"Released","tagline":"There can be no understanding between the hands and the brain unless the heart acts as mediator.","title":"Metropolis","cast":[{"castId":10,"character":"Maria","creditId":"52fe420fc3a36847f8000c87","gender":1,"id":75,"name":"Brigitte Helm","order":0,"profilePath":"https://image.tmdb.org/t/p/original/rfptoGixSQspXlUFOD2QFQ7Cka2.jpg"},{"castId":28,"character":"Johann 'Joh' Fredersen","creditId":"52fe420fc3a36847f8000cdb","gender":2,"id":73,"name":"Alfred Abel","order":1,"profilePath":"https://image.tmdb.org/t/p/original/ci8PjtUFW1kuOXyhSSaGD1jyX50.jpg"},{"castId":9,"character":"Freder Fredersen","creditId":"52fe420fc3a36847f8000c83","gender":2,"id":74,"name":"Gustav Fröhlich","order":2,"profilePath":"https://image.tmdb.org/t/p/original/4BOW6x0pDkXgRt8IbNZZjRHo7bX.jpg"},{"castId":11,"character":"C.A. Rotwang, the inventor","creditId":"52fe420fc3a36847f8000c8b","gender":2,"id":77,"name":"Rudolf Klein-Rogge","order":3,"profilePath":"https://image.tmdb.org/t/p/original/fbP75fGfXFQlkf3Q5oHbJ4wjG1g.jpg"},{"castId":12,"character":"The Thin Man","creditId":"52fe420fc3a36847f8000c8f","gender":2,"id":78,"name":"Fritz Rasp","order":4,"profilePath":"https://image.tmdb.org/t/p/original/aOP2oF7HClXD2Is2RNKpQiOvEOw.jpg"},{"castId":13,"character":"Josaphat","creditId":"52fe420fc3a36847f8000c93","gender":2,"id":79,"name":"Theodor Loos","order":5,"profilePath":"https://image.tmdb.org/t/p/original/sM9LUZC3U5jfWyrAattpX1VlmAQ.jpg"},{"castId":14,"character":"No. 11811 - Georgy","creditId":"52fe420fc3a36847f8000c97","gender":2,"id":80,"name":"Erwin Biswanger","order":6,"profilePath":"https://image.tmdb.org/t/p/original/zA8s8QWoQg9ftPqUddcl8GfkCDF.jpg"},{"castId":15,"character":"Grot","creditId":"52fe420fc3a36847f8000c9b","gender":2,"id":81,"name":"Heinrich George","order":7,"profilePath":"https://image.tmdb.org/t/p/original/gAfj9ZgmEtB0im4UHr13HWEKEAO.jpg"},{"castId":16,"character":"Jan","creditId":"52fe420fc3a36847f8000c9f","gender":2,"id":82,"name":"Olaf Storm","order":8,"profilePath":"https://image.tmdb.org/t/p/original/rQM9B9J41vFHW3r1CkKGY1909Ql.jpg"},{"castId":19,"character":"Arbeiterfrau","creditId":"52fe420fc3a36847f8000cad","gender":2,"id":2350,"name":"Helene Weigel","order":9,"profilePath":"https://image.tmdb.org/t/p/original/tg2F8zZQjsDaXIEuu03abfJFyCC.jpg"}]},{"tmdbId":"20","genres":[{"id":18,"name":"Drama"},{"id":10749,"name":"Romance"}],"originalLanguage":"en","originalTitle":"My Life Without Me","overview":"A Pedro Almodovar production in which a fatally ill mother with only two months to live creates a list of things she wants to do before she dies with out telling her family of her illness.","posterUrl":"https://image.tmdb.org/t/p/original/vVj92VBFUBzjqzLvBiPVVlJDp78.jpg","productionCompanies":"[{'name': 'El Deseo', 'id': 49}, {'name': 'Milestone Productions', 'id': 77}]","productionCountries":"[{'iso_3166_1': 'CA', 'name': 'Canada'}, {'iso_3166_1': 'ES', 'name': 'Spain'}]","releaseDate":"2003-03-07","runtimeMinutes":106,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"","title":"My Life Without Me","cast":[{"castId":5,"character":"Ann","creditId":"52fe420fc3a36847f8000d33","gender":1,"id":98,"name":"Sarah Polley","order":0,"profilePath":"https://image.tmdb.org/t/p/original/asFwK6hCFYHtHVJoOwMBSMTETtg.jpg"},{"castId":6,"character":"Laurie","creditId":"52fe420fc3a36847f8000d37","gender":1,"id":99,"name":"Amanda Plummer","order":1,"profilePath":"https://image.tmdb.org/t/p/original/uICpVUj29yBcwCEGVZzE77FL98W.jpg"},{"castId":7,"character":"Don","creditId":"52fe420fc3a36847f8000d3b","gender":2,"id":100,"name":"Scott Speedman","order":2,"profilePath":"https://image.tmdb.org/t/p/original/hxDr3YjCYaHPEFbEfC0eXjMps0u.jpg"},{"castId":8,"character":"Neighbor Ann","creditId":"52fe420fc3a36847f8000d3f","gender":1,"id":101,"name":"Leonor Watling","order":3,"profilePath":"https://image.tmdb.org/t/p/original/lFOK1qKWqXOnJHFrz4MmuiSzpBP.jpg"},{"castId":9,"character":"Ann's Mother","creditId":"52fe420fc3a36847f8000d43","gender":1,"id":102,"name":"Deborah Harry","order":4,"profilePath":"https://image.tmdb.org/t/p/original/1I0WW7NaSXKeQjrIKLwnzvBq5d8.jpg"},{"castId":14,"character":"Hairdresser","creditId":"52fe420fc3a36847f8000d5d","gender":1,"id":2319,"name":"Maria de Medeiros","order":6,"profilePath":"https://image.tmdb.org/t/p/original/cj7S0ncXnHlvDes44umI4TjESoE.jpg"},{"castId":15,"character":"Dr. Thompson","creditId":"52fe420fc3a36847f8000d61","gender":2,"id":2320,"name":"Julian Richings","order":7,"profilePath":"https://image.tmdb.org/t/p/original/ia2Xo99pxLX3sxZ0jVcj7eai56l.jpg"},{"castId":16,"character":"Penny","creditId":"52fe420fc3a36847f8000d65","gender":1,"id":2321,"name":"Jessica Amlee","order":8,"profilePath":"https://image.tmdb.org/t/p/original/52wpeeF53CkMIKHEbDPOIcgqoSS.jpg"},{"castId":17,"character":"Patsy","creditId":"52fe420fc3a36847f8000d69","gender":0,"id":2322,"name":"Kenya Jo Kennedy","order":9,"profilePath":null},{"castId":18,"character":"Camille Martínez","creditId":"52fe420fc3a36847f8000d6d","gender":0,"id":2323,"name":"Camille Martinez","order":10,"profilePath":null}]},{"tmdbId":"21","genres":[{"id":99,"name":"Documentary"}],"originalLanguage":"en","originalTitle":"The Endless Summer","overview":"The Endless Summer, by Bruce Brown, is one of the first and most influential surf movies of all times. The film documents American surfers Mike Hynson and Robert August as they travel the world during California’s winter (which back in 1965 was off-season for surfing) in search of the perfect wave and an endless summer.","posterUrl":"https://image.tmdb.org/t/p/original/jqsZQPxeMjcvVN5aFGgAk7qQodr.jpg","productionCompanies":"[{'name': 'Bruce Brown Films', 'id': 13723}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1966-06-15","runtimeMinutes":95,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"","title":"The Endless Summer","cast":[{"castId":13,"character":"Himself","creditId":"55a58678c3a36812f1000041","gender":0,"id":1487339,"name":"Michael Hynson","order":1,"profilePath":null},{"castId":14,"character":"Himself","creditId":"55a586a492514171ca00005b","gender":2,"id":92,"name":"Robert August","order":2,"profilePath":null},{"castId":15,"character":"Himself","creditId":"55a586c992514171c4000056","gender":0,"id":1487342,"name":"Lord 'Tally Ho' Blears","order":3,"profilePath":null},{"castId":16,"character":"Narrator","creditId":"55a586d4c3a36812f100004f","gender":2,"id":86,"name":"Bruce Brown","order":4,"profilePath":"https://image.tmdb.org/t/p/original/t2yDx3OLqFNzCjIOWIjEHbzrRcb.jpg"},{"castId":17,"character":"Himself","creditId":"55a586e4c3a36812ea000083","gender":0,"id":1487343,"name":"Chip Fitzwater","order":5,"profilePath":null},{"castId":18,"character":"Himself","creditId":"55a586f2c3a36812f500006b","gender":0,"id":1487344,"name":"Chuck Gardner","order":6,"profilePath":null},{"castId":19,"character":"Himself","creditId":"55a58701c3a3681301000052","gender":0,"id":1487345,"name":"Wayne Miyata","order":7,"profilePath":null}]},{"tmdbId":"22","genres":[{"id":12,"name":"Adventure"},{"id":14,"name":"Fantasy"},{"id":28,"name":"Action"}],"originalLanguage":"en","originalTitle":"Pirates of the Caribbean: The Curse of the Black Pearl","overview":"Jack Sparrow, a freewheeling 17th-century pirate who roams the Caribbean Sea, butts heads with a rival pirate bent on pillaging the village of Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her. But their seafaring mission is hardly simple.","posterUrl":"https://image.tmdb.org/t/p/original/tkt9xR1kNX5R9rCebASKck44si2.jpg","productionCompanies":"[{'name': 'Walt Disney Pictures', 'id': 2}, {'name': 'Jerry Bruckheimer Films', 'id': 130}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2003-07-09","runtimeMinutes":143,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Prepare to be blown out of the water.","title":"Pirates of the Caribbean: The Curse of the Black Pearl","cast":[{"castId":12,"character":"Captain Jack Sparrow","creditId":"52fe420fc3a36847f8000ecb","gender":2,"id":85,"name":"Johnny Depp","order":0,"profilePath":"https://image.tmdb.org/t/p/original/kbWValANhZI8rbWZXximXuMN4UN.jpg"},{"castId":5,"character":"Captain Hector Barbossa","creditId":"52fe420fc3a36847f8000ea3","gender":2,"id":118,"name":"Geoffrey Rush","order":1,"profilePath":"https://image.tmdb.org/t/p/original/5h91WHSK80YtqTk1bMiar2IZzO2.jpg"},{"castId":1,"character":"Will Turner","creditId":"52fe420fc3a36847f8000e8f","gender":2,"id":114,"name":"Orlando Bloom","order":2,"profilePath":"https://image.tmdb.org/t/p/original/kKWJlX2tcjqceSfUxnV7Jle5Kt.jpg"},{"castId":4,"character":"Elizabeth Swann","creditId":"52fe420fc3a36847f8000e9f","gender":1,"id":116,"name":"Keira Knightley","order":3,"profilePath":"https://image.tmdb.org/t/p/original/rv6quYbTgFTmBAoePwy5xuurW3g.jpg"},{"castId":13,"character":"Commodore James Norrington","creditId":"52fe420fc3a36847f8000ecf","gender":2,"id":1709,"name":"Jack Davenport","order":4,"profilePath":"https://image.tmdb.org/t/p/original/qxM6XdLmZ6pKkQV7uVwgu7MLcfV.jpg"},{"castId":14,"character":"Governor Weatherby Swann","creditId":"52fe420fc3a36847f8000ed3","gender":2,"id":378,"name":"Jonathan Pryce","order":5,"profilePath":"https://image.tmdb.org/t/p/original/kfRf0eRfh9RRvBZEmpcXazWBgjd.jpg"},{"castId":36,"character":"Joshamee Gibbs","creditId":"52fe4210c3a36847f8000f33","gender":2,"id":2449,"name":"Kevin McNally","order":6,"profilePath":"https://image.tmdb.org/t/p/original/fIJF3TZn8ckHkcl44oX77GvPv9e.jpg"},{"castId":31,"character":"Anamaria","creditId":"52fe4210c3a36847f8000f1b","gender":1,"id":8691,"name":"Zoe Saldana","order":7,"profilePath":"https://image.tmdb.org/t/p/original/ofNrWiA2KDdqiNxFTLp51HcXUlp.jpg"},{"castId":15,"character":"Pintel","creditId":"52fe420fc3a36847f8000ed7","gender":2,"id":1710,"name":"Lee Arenberg","order":8,"profilePath":"https://image.tmdb.org/t/p/original/l4Zxsug0QpyJYLv0RosYMgRXiAm.jpg"},{"castId":16,"character":"Ragetti","creditId":"52fe420fc3a36847f8000edb","gender":2,"id":1711,"name":"Mackenzie Crook","order":9,"profilePath":"https://image.tmdb.org/t/p/original/pkBBzUyeJSI8OY8rf6TM6Dz0NXL.jpg"}]},{"tmdbId":"24","genres":[{"id":28,"name":"Action"},{"id":80,"name":"Crime"}],"originalLanguage":"en","originalTitle":"Kill Bill: Vol. 1","overview":"An assassin is shot at the altar by her ruthless employer, Bill and other members of their assassination circle – but 'The Bride' lives to plot her vengeance. Setting out for some payback, she makes a death list and hunts down those who wronged her, saving Bill for last.","posterUrl":"https://image.tmdb.org/t/p/original/97fNAi62HawGjWru7PvVmF7RAbU.jpg","productionCompanies":"[{'name': 'Miramax Films', 'id': 14}, {'name': 'A Band Apart', 'id': 59}, {'name': 'Super Cool ManChu', 'id': 39121}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2003-10-10","runtimeMinutes":111,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'ja', 'name': '日本語'}, {'iso_639_1': 'fr', 'name': 'Français'}]","status":"Released","tagline":"Go for the kill.","title":"Kill Bill: Vol. 1","cast":[{"castId":3,"character":"Beatrix 'The Bride' Kiddo","creditId":"52fe4210c3a36847f800104d","gender":1,"id":139,"name":"Uma Thurman","order":0,"profilePath":"https://image.tmdb.org/t/p/original/6SuOc2R7kXjq3Em24KTNDW9qblJ.jpg"},{"castId":4,"character":"O-Ren Ishii","creditId":"52fe4210c3a36847f8001051","gender":1,"id":140,"name":"Lucy Liu","order":1,"profilePath":"https://image.tmdb.org/t/p/original/9nbtjqsx3De7hO2XDtrBQ7M9VCH.jpg"},{"castId":10,"character":"Vernita Green","creditId":"52fe4210c3a36847f800106d","gender":1,"id":2535,"name":"Vivica A. Fox","order":2,"profilePath":"https://image.tmdb.org/t/p/original/uxTOzgRhk0VkbK1ZiOrQSTYuzAl.jpg"},{"castId":9,"character":"Elle Driver","creditId":"52fe4210c3a36847f8001069","gender":1,"id":589,"name":"Daryl Hannah","order":3,"profilePath":"https://image.tmdb.org/t/p/original/4LLmp6AQdlj6ueGCRbVRSGvvFSt.jpg"},{"castId":5,"character":"Bill","creditId":"52fe4210c3a36847f8001055","gender":2,"id":141,"name":"David Carradine","order":4,"profilePath":"https://image.tmdb.org/t/p/original/wCvrY9PUKtN6NwkmLHWLJivCCov.jpg"},{"castId":6,"character":"Budd","creditId":"52fe4210c3a36847f8001059","gender":2,"id":147,"name":"Michael Madsen","order":5,"profilePath":"https://image.tmdb.org/t/p/original/yPvagJYARJb0JAeAbCFdcXcaPs2.jpg"},{"castId":14,"character":"Sofie Fatale","creditId":"52fe4210c3a36847f800107d","gender":1,"id":2539,"name":"Julie Dreyfus","order":6,"profilePath":"https://image.tmdb.org/t/p/original/vkUvcV6oFkZXcIv4SGeW66LUoqC.jpg"},{"castId":12,"character":"Gogo Yubari","creditId":"52fe4210c3a36847f8001075","gender":1,"id":2538,"name":"Chiaki Kuriyama","order":7,"profilePath":"https://image.tmdb.org/t/p/original/ccaYcabNnxA4MPItZdKAMdqEqTk.jpg"},{"castId":13,"character":"Hattori Hanzo","creditId":"52fe4210c3a36847f8001079","gender":2,"id":2537,"name":"Sonny Chiba","order":8,"profilePath":"https://image.tmdb.org/t/p/original/ntFUKxaPHR5E7OWuyp0mdEZPfdk.jpg"},{"castId":35,"character":"Johnny Mo","creditId":"52fe4210c3a36847f80010c3","gender":0,"id":240171,"name":"Gordon Liu Chia-Hui","order":9,"profilePath":"https://image.tmdb.org/t/p/original/yTI36A27P9YdFbzrCwjpmEpDGbR.jpg"}]},{"tmdbId":"25","genres":[{"id":18,"name":"Drama"},{"id":10752,"name":"War"}],"originalLanguage":"en","originalTitle":"Jarhead","overview":"Jarhead is a film about a US Marine Anthony Swofford’s experience in the Gulf War. After putting up with an arduous boot camp, Swafford and his unit are sent to the Persian Gulf where they are earger to fight but are forced to stay back from the action. Meanwhile Swofford gets news of his girlfriend is cheating on him. Desperately he wants to kill someone and finally put his training to use.","posterUrl":"https://image.tmdb.org/t/p/original/kmbyO0XUHRHcMyxVSZAWDdrpxIu.jpg","productionCompanies":"[{'name': 'Universal Pictures', 'id': 33}, {'name': 'Neal Street Productions', 'id': 1522}, {'name': 'Red Wagon Entertainment', 'id': 14440}, {'name': 'Motion Picture KAPPA Produktionsgesellschaft', 'id': 19934}]","productionCountries":"[{'iso_3166_1': 'DE', 'name': 'Germany'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2005-11-04","runtimeMinutes":125,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}, {'iso_639_1': 'ar', 'name': 'العربية'}, {'iso_639_1': 'la', 'name': 'Latin'}]","status":"Released","tagline":"Welcome to the suck.","title":"Jarhead","cast":[{"castId":1,"character":"Staff Sgt. Sykes","creditId":"52fe4210c3a36847f8001103","gender":2,"id":134,"name":"Jamie Foxx","order":0,"profilePath":"https://image.tmdb.org/t/p/original/cDRGXCNrwf1p9jouw9GzhU2vWP7.jpg"},{"castId":2,"character":"Anthony Swofford","creditId":"52fe4210c3a36847f8001107","gender":2,"id":131,"name":"Jake Gyllenhaal","order":1,"profilePath":"https://image.tmdb.org/t/p/original/1dHiMQsqiIAF9zhGvB0oJOIaM16.jpg"},{"castId":3,"character":"D.I. Fitch","creditId":"52fe4210c3a36847f800110b","gender":2,"id":132,"name":"Scott MacDonald","order":1,"profilePath":"https://image.tmdb.org/t/p/original/2QfBVz2TWjFOvOny8kvjWMtIGEL.jpg"},{"castId":15,"character":"Kruger","creditId":"52fe4210c3a36847f800114f","gender":2,"id":155,"name":"Lucas Black","order":3,"profilePath":"https://image.tmdb.org/t/p/original/41qZZc6vRVm5ZOoXWfEf5NGoIZR.jpg"},{"castId":4,"character":"Alan Troy","creditId":"52fe4210c3a36847f800110f","gender":2,"id":133,"name":"Peter Sarsgaard","order":4,"profilePath":"https://image.tmdb.org/t/p/original/dGoUlDEJumPY0CFlT7eM6KVdLUu.jpg"},{"castId":16,"character":"Ramon Escobar","creditId":"52fe4210c3a36847f8001153","gender":2,"id":10964,"name":"Laz Alonso","order":5,"profilePath":"https://image.tmdb.org/t/p/original/6zqlURffzAErl4g4d8kiUWYWmoz.jpg"},{"castId":17,"character":"Lt. Col. Kazinski","creditId":"52fe4210c3a36847f8001157","gender":2,"id":2955,"name":"Chris Cooper","order":6,"profilePath":"https://image.tmdb.org/t/p/original/ytZY7YofdiAZyiyr4NyiB77lwwQ.jpg"},{"castId":18,"character":"Fergus O'Donnell","creditId":"52fe4210c3a36847f800115b","gender":2,"id":49271,"name":"Brian Geraghty","order":7,"profilePath":"https://image.tmdb.org/t/p/original/3risyyYIFDQaz0EHRVqNOCToaDe.jpg"},{"castId":19,"character":"Poitier","creditId":"52fe4210c3a36847f800115f","gender":2,"id":150194,"name":"Damion Poitier","order":8,"profilePath":"https://image.tmdb.org/t/p/original/zBoq4SAauhVmbHSyWZXYXvA36Ky.jpg"},{"castId":20,"character":"Corporal Harrigan","creditId":"52fe4210c3a36847f8001163","gender":2,"id":17697,"name":"John Krasinski","order":9,"profilePath":"https://image.tmdb.org/t/p/original/nOWwdZURikW22qo6OUSGFCTukgc.jpg"}]},{"tmdbId":"26","genres":[{"id":18,"name":"Drama"}],"originalLanguage":"he","originalTitle":"LaLehet Al HaMayim","overview":"Eyal, an Israeli Mossad agent, is given the mission to track down and kill the very old Alfred Himmelman, an ex-Nazi officer, who might still be alive. Pretending to be a tourist guide, he befriends his grandson Axel, in Israel to visit his sister Pia. The two men set out on a tour of the country during which, Axel challenges Eyal's values.","posterUrl":"https://image.tmdb.org/t/p/original/5BH0k5pauAqywpr4NL9nKYcKC6O.jpg","productionCompanies":"[{'name': 'Lama Films', 'id': 15}, {'name': 'United King Films', 'id': 16}]","productionCountries":"[{'iso_3166_1': 'IL', 'name': 'Israel'}, {'iso_3166_1': 'SE', 'name': 'Sweden'}]","releaseDate":"2004-02-05","runtimeMinutes":103,"spokenLanguages":"[{'iso_639_1': 'ar', 'name': 'العربية'}, {'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'he', 'name': 'עִבְרִית'}, {'iso_639_1': 'it', 'name': 'Italiano'}, {'iso_639_1': 'tr', 'name': 'Türkçe'}]","status":"Released","tagline":"He was trained to hate until he met the enemy.","title":"Walk on Water","cast":[{"castId":7,"character":"Eyal","creditId":"52fe4210c3a36847f80011cd","gender":2,"id":164,"name":"Lior Ashkenazi","order":0,"profilePath":"https://image.tmdb.org/t/p/original/c2IJJuYiqZNHoZVikp6HgCgbGkK.jpg"},{"castId":8,"character":"Axel Himmelman","creditId":"52fe4210c3a36847f80011d1","gender":2,"id":165,"name":"Knut Berger","order":1,"profilePath":null},{"castId":9,"character":"Pia Himmelman","creditId":"52fe4210c3a36847f80011d5","gender":1,"id":166,"name":"Caroline Peters","order":2,"profilePath":"https://image.tmdb.org/t/p/original/Ao2BMxDSMEnJnYmCE3XAmw93bLZ.jpg"},{"castId":10,"character":"Menachem","creditId":"52fe4210c3a36847f80011d9","gender":2,"id":167,"name":"Gideon Shemer","order":3,"profilePath":null},{"castId":11,"character":"Axel's Mother","creditId":"52fe4210c3a36847f80011dd","gender":1,"id":168,"name":"Carola Regnier","order":4,"profilePath":"https://image.tmdb.org/t/p/original/mMlu7Y5U4DXLXAERCSLH7ILjWZL.jpg"},{"castId":12,"character":"Axel's Father","creditId":"52fe4210c3a36847f80011e1","gender":2,"id":169,"name":"Hanns Zischler","order":5,"profilePath":"https://image.tmdb.org/t/p/original/zlVtIH2P4cZLyftZZcfFo037N3t.jpg"},{"castId":13,"character":"Alfred Himmelman","creditId":"52fe4210c3a36847f80011e5","gender":2,"id":170,"name":"Ernest Lenart","order":6,"profilePath":null}]},{"tmdbId":"27","genres":[{"id":18,"name":"Drama"},{"id":10402,"name":"Music"},{"id":10749,"name":"Romance"}],"originalLanguage":"en","originalTitle":"9 Songs","overview":"Matt, a young glaciologist, soars across the vast, silent, icebound immensities of the South Pole as he recalls his love affair with Lisa. They meet at a mobbed rock concert in a vast music hall - London's Brixton Academy. They are in bed at night's end. Together, over a period of several months, they pursue a mutual sexual passion whose inevitable stages unfold in counterpoint to nine live-concert songs.","posterUrl":"https://image.tmdb.org/t/p/original/bvGyYmmnQG5NPP7m2nuLhaiC8LH.jpg","productionCompanies":"[{'name': 'Revolution Films', 'id': 163}]","productionCountries":"[{'iso_3166_1': 'GB', 'name': 'United Kingdom'}]","releaseDate":"2004-07-16","runtimeMinutes":66,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"2 lovers, one summer, and the 9 songs that defined them.","title":"9 Songs","cast":[{"castId":5,"character":"Matt","creditId":"52fe4210c3a36847f800122d","gender":2,"id":176,"name":"Kieran O'Brien","order":0,"profilePath":"https://image.tmdb.org/t/p/original/fNJsy19jh5lUGWLkSKFGTtnEiOL.jpg"},{"castId":6,"character":"Lisa","creditId":"52fe4210c3a36847f8001231","gender":1,"id":177,"name":"Margo Stilley","order":1,"profilePath":"https://image.tmdb.org/t/p/original/lcU3CC1rrVPWaNmJ0i9vAhMwsbu.jpg"},{"castId":21,"character":"Himself - The Dandy Warhols (uncredited)","creditId":"58a608d6c3a3681c0b001eba","gender":0,"id":1759241,"name":"Courtney Taylor-Taylor","order":2,"profilePath":null},{"castId":22,"character":"Himself - Franz Ferdinand (uncredited)","creditId":"58a60b8ec3a3681c1c00212a","gender":0,"id":1759261,"name":"Alex Kapranos","order":3,"profilePath":null},{"castId":23,"character":"Himself - Elbow (uncredited)","creditId":"58a60bf4c3a3681bc8002081","gender":0,"id":1357012,"name":"Guy Garvey","order":4,"profilePath":null},{"castId":25,"character":"Himself - Black Rebel Motorcycle Club (uncredited)","creditId":"58a60e8892514122750001fc","gender":2,"id":1161961,"name":"Robert Levon Been","order":5,"profilePath":null},{"castId":24,"character":"Himself - Black Rebel Motorcycle Club (uncredited)","creditId":"58a60d3c92514122990000d8","gender":0,"id":1476120,"name":"Peter Hayes","order":6,"profilePath":null},{"castId":26,"character":"Himself - Super Furry Animals (uncredited)","creditId":"58a60ebcc3a368013800022a","gender":0,"id":1288806,"name":"Gruff Rhys","order":7,"profilePath":null},{"castId":27,"character":"Himself - The Von Bondies (uncredited)","creditId":"58a60ef892514122be00023b","gender":0,"id":1759271,"name":"Jason Stollsteimer","order":8,"profilePath":null},{"castId":29,"character":"Herself - The Von Bondies (uncredited)","creditId":"58a60fd0c3a3680138000346","gender":0,"id":1588404,"name":"Marcie Bolen","order":9,"profilePath":null}]},{"tmdbId":"28","genres":[{"id":18,"name":"Drama"},{"id":10752,"name":"War"}],"originalLanguage":"en","originalTitle":"Apocalypse Now","overview":"At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, \"does not exist, nor will it ever exist.\" His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.","posterUrl":"https://image.tmdb.org/t/p/original/jcvJ2xcVWU9Wh0hZAxcs103s8nN.jpg","productionCompanies":"[{'name': 'United Artists', 'id': 60}, {'name': 'Zoetrope Studios', 'id': 26663}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1979-08-15","runtimeMinutes":153,"spokenLanguages":"[{'iso_639_1': 'km', 'name': ''}, {'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Français'}, {'iso_639_1': 'vi', 'name': 'Tiếng Việt'}]","status":"Released","tagline":"This is the end...","title":"Apocalypse Now","cast":[{"castId":29,"character":"Captain Benjamin L. Willard","creditId":"52fe4210c3a36847f800135b","gender":2,"id":8349,"name":"Martin Sheen","order":0,"profilePath":"https://image.tmdb.org/t/p/original/ve77Q75moQhoB6cxdMfigfrHeTA.jpg"},{"castId":30,"character":"Colonel Walter E. Kurtz","creditId":"52fe4210c3a36847f800135f","gender":2,"id":3084,"name":"Marlon Brando","order":1,"profilePath":"https://image.tmdb.org/t/p/original/e2u2Vyy66j2rUL8fyjjHWlYtWLH.jpg"},{"castId":31,"character":"Lieutenant Colonel Bill Kilgore","creditId":"52fe4210c3a36847f8001363","gender":2,"id":3087,"name":"Robert Duvall","order":2,"profilePath":"https://image.tmdb.org/t/p/original/1aBC7NxPy10ofng6HsJBecJ1vMZ.jpg"},{"castId":34,"character":"Jay 'Chef' Hicks","creditId":"52fe4210c3a36847f800136f","gender":2,"id":8351,"name":"Frederic Forrest","order":3,"profilePath":"https://image.tmdb.org/t/p/original/fCHsWrGcgfREM7e9POq6FCFGvR9.jpg"},{"castId":33,"character":"Lance B. Johnson","creditId":"52fe4210c3a36847f800136b","gender":2,"id":8350,"name":"Sam Bottoms","order":4,"profilePath":"https://image.tmdb.org/t/p/original/h3arYTuOmUxTgKEsimVXtkyriAu.jpg"},{"castId":32,"character":"Tyrone 'Clean' Miller","creditId":"52fe4210c3a36847f8001367","gender":2,"id":2975,"name":"Laurence Fishburne","order":5,"profilePath":"https://image.tmdb.org/t/p/original/8suOhUmPbfKqDQ17jQ1Gy0mI3P4.jpg"},{"castId":35,"character":"Chief Phillips","creditId":"52fe4210c3a36847f8001373","gender":2,"id":8354,"name":"Albert Hall","order":6,"profilePath":"https://image.tmdb.org/t/p/original/yHGN2pIdBcBk19sAu0EchOxfYMY.jpg"},{"castId":36,"character":"Colonel Lucas","creditId":"52fe4210c3a36847f8001377","gender":2,"id":3,"name":"Harrison Ford","order":7,"profilePath":"https://image.tmdb.org/t/p/original/7CcoVFTogQgex2kJkXKMe8qHZrC.jpg"},{"castId":38,"character":"Photojournalist","creditId":"52fe4210c3a36847f800137b","gender":2,"id":2778,"name":"Dennis Hopper","order":8,"profilePath":"https://image.tmdb.org/t/p/original/56nj2DfMVU3F9qUagZWMePLbrKF.jpg"},{"castId":39,"character":"General Corman","creditId":"52fe4210c3a36847f800137f","gender":2,"id":3173,"name":"G. D. Spradlin","order":9,"profilePath":"https://image.tmdb.org/t/p/original/lyk0Fo343PJJ5gItBqGGl7oG112.jpg"}]},{"tmdbId":"30","genres":[{"id":16,"name":"Animation"},{"id":878,"name":"Science Fiction"}],"originalLanguage":"ja","originalTitle":"彼女の想いで","overview":"Koji Morimato’s animated science fiction short story about how the boarder between reality and illusion on a space station become blurry.","posterUrl":"https://image.tmdb.org/t/p/original/1A59xquD5rZeQRgjMfI4qu1ZvcQ.jpg","productionCompanies":"[{'name': 'Studio 4°C', 'id': 11671}]","productionCountries":"[{'iso_3166_1': 'JP', 'name': 'Japan'}]","releaseDate":"1995-12-23","runtimeMinutes":44,"spokenLanguages":"[{'iso_639_1': 'ja', 'name': '日本語'}]","status":"Released","tagline":"","title":"Magnetic Rose","cast":[{"castId":5,"character":"Heinz","creditId":"52fe4211c3a36847f80013c7","gender":0,"id":20661,"name":"Tsutomu Isobe","order":0,"profilePath":null},{"castId":6,"character":"Emily","creditId":"52fe4211c3a36847f80013cb","gender":0,"id":20662,"name":"Ami Hasegawa","order":1,"profilePath":null},{"castId":7,"character":"Eva","creditId":"52fe4211c3a36847f80013cf","gender":0,"id":20663,"name":"Gara Takashima","order":2,"profilePath":"https://image.tmdb.org/t/p/original/e213zxdMibZEjPEot0zDpO1FU7K.jpg"},{"castId":8,"character":"Miguel","creditId":"52fe4211c3a36847f80013d3","gender":2,"id":20664,"name":"Kouichi Yamadera","order":3,"profilePath":"https://image.tmdb.org/t/p/original/m5su8OKD2rZn9XWJfh8aPC403Nz.jpg"}]},{"tmdbId":"33","genres":[{"id":37,"name":"Western"}],"originalLanguage":"en","originalTitle":"Unforgiven","overview":"William Munny is a retired, once-ruthless killer turned gentle widower and hog farmer. To help support his two motherless children, he accepts one last bounty-hunter mission to find the men who brutalized a prostitute. Joined by his former partner and a cocky greenhorn, he takes on a corrupt sheriff.","posterUrl":"https://image.tmdb.org/t/p/original/km6qw4qUkHQRN5y2U1juM1WkBFh.jpg","productionCompanies":"[{'name': 'Malpaso Productions', 'id': 171}, {'name': 'Warner Bros.', 'id': 6194}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1992-08-07","runtimeMinutes":131,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Some legends will never be forgotten. Some wrongs can never be forgiven.","title":"Unforgiven","cast":[{"castId":4,"character":"Bill Munny","creditId":"52fe4211c3a36847f8001447","gender":2,"id":190,"name":"Clint Eastwood","order":0,"profilePath":"https://image.tmdb.org/t/p/original/wJosJW9DNWHOA8h63bQr2HgHC48.jpg"},{"castId":6,"character":"Little Bill Daggett","creditId":"52fe4211c3a36847f800144b","gender":2,"id":193,"name":"Gene Hackman","order":1,"profilePath":"https://image.tmdb.org/t/p/original/qEKcmwc1XstymEniGuCs3KIsGfP.jpg"},{"castId":25,"character":"Ned Logan","creditId":"52fe4211c3a36847f80014a5","gender":2,"id":192,"name":"Morgan Freeman","order":2,"profilePath":"https://image.tmdb.org/t/p/original/oGJQhOpT8S1M56tvSsbEBePV5O1.jpg"},{"castId":7,"character":"English Bob","creditId":"52fe4211c3a36847f800144f","gender":2,"id":194,"name":"Richard Harris","order":3,"profilePath":"https://image.tmdb.org/t/p/original/51wDHVFNqrYgvUBMOcACAt4sJU9.jpg"},{"castId":9,"character":"The Schofield Kid","creditId":"52fe4211c3a36847f8001459","gender":2,"id":3710,"name":"Jaimz Woolvett","order":4,"profilePath":"https://image.tmdb.org/t/p/original/psrj817qm3RPBzF2VzPFgL8qdwq.jpg"},{"castId":10,"character":"Delilah Fitzgerald","creditId":"52fe4211c3a36847f800145d","gender":1,"id":3711,"name":"Anna Levine","order":5,"profilePath":"https://image.tmdb.org/t/p/original/A3oxT1n8ecpl0uYomHaMUWGBivu.jpg"},{"castId":11,"character":"W.W. Beauchamp","creditId":"52fe4211c3a36847f8001461","gender":2,"id":3712,"name":"Saul Rubinek","order":6,"profilePath":"https://image.tmdb.org/t/p/original/1gsXmCmJIegqK0U8dwLz005UM0.jpg"},{"castId":12,"character":"Strawberry Alice","creditId":"52fe4211c3a36847f8001465","gender":1,"id":3713,"name":"Frances Fisher","order":7,"profilePath":"https://image.tmdb.org/t/p/original/248IbuAi6RQG5l94a4hClUswbA5.jpg"},{"castId":13,"character":"Quick Mike","creditId":"52fe4211c3a36847f8001469","gender":2,"id":3714,"name":"David Mucci","order":8,"profilePath":"https://image.tmdb.org/t/p/original/qD1Acd4PngkCtUl2qmPAFdlyACM.jpg"},{"castId":14,"character":"Davey Bunting","creditId":"52fe4211c3a36847f800146d","gender":0,"id":2843,"name":"Rob Campbell","order":9,"profilePath":"https://image.tmdb.org/t/p/original/hRJihsQgFfm86htdiM6xL4BpZE9.jpg"}]},{"tmdbId":"35","genres":[{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":10751,"name":"Family"}],"originalLanguage":"en","originalTitle":"The Simpsons Movie","overview":"After Homer accidentally pollutes the town's water supply, Springfield is encased in a gigantic dome by the EPA and the Simpsons are declared fugitives.","posterUrl":"https://image.tmdb.org/t/p/original/eCytnEriVur3rT47NWfkgPXD9qs.jpg","productionCompanies":"[{'name': 'Gracie Films', 'id': 18}, {'name': 'Twentieth Century Fox Film Corporation', 'id': 306}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2007-07-25","runtimeMinutes":87,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"See our family. And feel better about yours.","title":"The Simpsons Movie","cast":[{"castId":2,"character":"Homer / Itchy / Barney / Grampa / Stage Manager / Krusty the Clown / Mayor Quimby / Mayor's Aide / Multi-Eyed Squirrel / Panicky Man / Sideshow Mel / Mr. Teeny / EPA Official / Kissing Cop / Bear / Boy on Phone / NSA Worker / Officer / Santa's Little Helper / Squeaky-Voiced Teen (voice)","creditId":"52fe4211c3a36847f8001525","gender":2,"id":198,"name":"Dan Castellaneta","order":0,"profilePath":"https://image.tmdb.org/t/p/original/u1fr7FgO1rw7lLLst64LPoqAw9x.jpg"},{"castId":3,"character":"Marge Simpson / Selma / Patty (voice)","creditId":"52fe4211c3a36847f8001529","gender":1,"id":199,"name":"Julie Kavner","order":1,"profilePath":"https://image.tmdb.org/t/p/original/tVOau491aJlI8vNaksykiURPbDN.jpg"},{"castId":4,"character":"Bart Simpson / Maggie Simpson / Ralph / Nelson / Todd Flanders / TV Daughter / Woman on Phone (voice)","creditId":"52fe4211c3a36847f800152d","gender":1,"id":200,"name":"Nancy Cartwright","order":2,"profilePath":"https://image.tmdb.org/t/p/original/fZpurnFVcSzV1HnUvePIXrmLP2f.jpg"},{"castId":5,"character":"Lisa Simpson (voice)","creditId":"52fe4211c3a36847f8001531","gender":1,"id":5586,"name":"Yeardley Smith","order":3,"profilePath":"https://image.tmdb.org/t/p/original/mUbHricJlXDV6I4L2Z7sgCs1kWK.jpg"},{"castId":10,"character":"Professor Frink / Comic Book Guy / Moe / Chief Wiggum / Lou / Carl / Cletus / Bumblebee Man / Male EPA Worker / Dome Depot Announcer / Kissing Cop / Carnival Barker / Counter Man / Apu / Drederick Tatum / Sea Captain / EPA Passenger / Robot / Dr. Nick / Wise Guy (voice)","creditId":"52fe4211c3a36847f8001535","gender":2,"id":5587,"name":"Hank Azaria","order":4,"profilePath":"https://image.tmdb.org/t/p/original/3vIdbP73nKnKpMAcgGWoALPF2JO.jpg"},{"castId":13,"character":"Scratchy / Mr. Burns / Rev. Lovejoy / Ned Flanders / Lenny / Skull / President Arnold Schwarzenegger / Kent Brockman / Principal Skinner / Dr. Hibbert / Smithers / Toll Booth Man / Guard / Otto / Kang (voice)","creditId":"52fe4211c3a36847f8001539","gender":2,"id":6008,"name":"Harry Shearer","order":5,"profilePath":"https://image.tmdb.org/t/p/original/qtGHYpWLbqQVY9ymVPtrJZV6MHg.jpg"},{"castId":15,"character":"Sideshow Bob (voice)","creditId":"52fe4211c3a36847f800153d","gender":2,"id":7090,"name":"Kelsey Grammer","order":6,"profilePath":"https://image.tmdb.org/t/p/original/8h3ThicYhj6fEMSMtSdzFXrUyx2.jpg"},{"castId":16,"character":"Colin (voice)","creditId":"52fe4211c3a36847f8001541","gender":0,"id":23211,"name":"Maile Flanagan","order":7,"profilePath":"https://image.tmdb.org/t/p/original/5VtiVA24pfoDnTnzJLmt25orwb3.jpg"},{"castId":17,"character":"Milhouse Van Houten / Jimbo Jones / Rod Flanders (voice)","creditId":"52fe4211c3a36847f8001545","gender":1,"id":6009,"name":"Pamela Hayden","order":8,"profilePath":"https://image.tmdb.org/t/p/original/ugtzqXDJcI5SomOb3eNKVULbgqE.jpg"},{"castId":20,"character":"Mrs. Krabappel (voice)","creditId":"52fe4211c3a36847f8001549","gender":1,"id":6036,"name":"Marcia Wallace","order":9,"profilePath":"https://image.tmdb.org/t/p/original/oYxoYD9mTEKPMBgOBA9dESRTaSo.jpg"}]},{"tmdbId":"38","genres":[{"id":878,"name":"Science Fiction"},{"id":18,"name":"Drama"},{"id":10749,"name":"Romance"}],"originalLanguage":"en","originalTitle":"Eternal Sunshine of the Spotless Mind","overview":"Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.","posterUrl":"https://image.tmdb.org/t/p/original/7y3eYvTsGjxPYDtSnumCLIMDkrV.jpg","productionCompanies":"[{'name': 'Anonymous Content', 'id': 10039}, {'name': 'This Is That Productions', 'id': 10059}, {'name': 'Focus Features', 'id': 10146}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2004-03-19","runtimeMinutes":108,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"You can erase someone from your mind. Getting them out of your heart is another story.","title":"Eternal Sunshine of the Spotless Mind","cast":[{"castId":5,"character":"Joel Barish","creditId":"52fe4211c3a36847f800167f","gender":2,"id":206,"name":"Jim Carrey","order":0,"profilePath":"https://image.tmdb.org/t/p/original/5tVf0ow8MX4OwjmVoSa5v7qUDka.jpg"},{"castId":2,"character":"Clementine Kruczynski","creditId":"52fe4211c3a36847f8001673","gender":1,"id":204,"name":"Kate Winslet","order":1,"profilePath":"https://image.tmdb.org/t/p/original/w8wjPbS24vPErNeYhAvtbyAUBMd.jpg"},{"castId":6,"character":"Mary Svevo","creditId":"52fe4211c3a36847f8001683","gender":1,"id":205,"name":"Kirsten Dunst","order":2,"profilePath":"https://image.tmdb.org/t/p/original/wBXvh6PJd0IUVNpvatPC1kzuHtm.jpg"},{"castId":4,"character":"Stan Fink","creditId":"52fe4211c3a36847f800167b","gender":2,"id":103,"name":"Mark Ruffalo","order":3,"profilePath":"https://image.tmdb.org/t/p/original/zdM6RgCR5LpZwnL8UA3m7CfVpiq.jpg"},{"castId":3,"character":"Patrick","creditId":"52fe4211c3a36847f8001677","gender":2,"id":109,"name":"Elijah Wood","order":4,"profilePath":"https://image.tmdb.org/t/p/original/hHzLAVspGGuPg1KW5JAEsyRvnUT.jpg"},{"castId":7,"character":"Dr. Howard Mierzwiak","creditId":"52fe4211c3a36847f8001687","gender":2,"id":207,"name":"Tom Wilkinson","order":5,"profilePath":"https://image.tmdb.org/t/p/original/4mxZKgdem0sQ8hJd0Y7TREwq7TJ.jpg"},{"castId":9,"character":"Carrie Eakin","creditId":"52fe4211c3a36847f800168f","gender":1,"id":209,"name":"Jane Adams","order":6,"profilePath":"https://image.tmdb.org/t/p/original/HbQfL01xmV1psnh0WvldIBzDg3.jpg"},{"castId":11,"character":"Rob Eakin","creditId":"52fe4211c3a36847f8001697","gender":2,"id":212,"name":"David Cross","order":7,"profilePath":"https://image.tmdb.org/t/p/original/aHSmsfJ48W59WlGB5ZiTjK67I0D.jpg"},{"castId":29,"character":"Hollis Mierzwiak","creditId":"52fe4211c3a36847f80016ed","gender":1,"id":77013,"name":"Deirdre O'Connell","order":8,"profilePath":"https://image.tmdb.org/t/p/original/1dPJbDo3ghv7eTqNSeiTCWBwnWz.jpg"},{"castId":43,"character":"Frank","creditId":"591bd71f92514149f3003838","gender":2,"id":130840,"name":"Thomas Jay Ryan","order":9,"profilePath":"https://image.tmdb.org/t/p/original/9GA0YdSBRoJC19kDGwF8jYuKsOx.jpg"}]},{"tmdbId":"55","genres":[{"id":18,"name":"Drama"},{"id":53,"name":"Thriller"}],"originalLanguage":"es","originalTitle":"Amores perros","overview":"Three different people in Mexico City are catapulted into dramatic and unforeseen circumstances in the wake of a terrible car crash: a young punk stumbles into the sinister underground world of dog fighting; an injured supermodel's designer pooch disappears into the apartment's floorboards; and an ex-radical turned hit man rescues a gunshot Rotweiler.","posterUrl":"https://image.tmdb.org/t/p/original/8gEXmIzw1tDnBfOaCFPimkNIkmm.jpg","productionCompanies":"[{'name': 'Altavista Films', 'id': 5084}, {'name': 'Zeta Film', 'id': 11230}]","productionCountries":"[{'iso_3166_1': 'MX', 'name': 'Mexico'}]","releaseDate":"2000-06-16","runtimeMinutes":154,"spokenLanguages":"[{'iso_639_1': 'es', 'name': 'Español'}]","status":"Released","tagline":"Love. Betrayal. Death.","title":"Amores perros","cast":[{"castId":2,"character":"Octavio","creditId":"52fe4211c3a36847f8001741","gender":2,"id":258,"name":"Gael García Bernal","order":0,"profilePath":"https://image.tmdb.org/t/p/original/6rTzWV80Z8AZbF6o3io1sYVOGhI.jpg"},{"castId":3,"character":"Susana","creditId":"52fe4211c3a36847f8001745","gender":1,"id":259,"name":"Vanessa Bauche","order":1,"profilePath":"https://image.tmdb.org/t/p/original/uO2cH3HN7avXrW5pJw0MqvNvuGd.jpg"},{"castId":4,"character":"Valeria","creditId":"52fe4211c3a36847f8001749","gender":1,"id":261,"name":"Goya Toledo","order":2,"profilePath":"https://image.tmdb.org/t/p/original/rskTnamfwea5xhtEelpRlqo1tCD.jpg"},{"castId":5,"character":"Daniel","creditId":"52fe4211c3a36847f800174d","gender":0,"id":262,"name":"Alvaro Guerrero","order":3,"profilePath":"https://image.tmdb.org/t/p/original/d2k2Z0XgSIkBJxAuedS5yOF9O1U.jpg"},{"castId":6,"character":"El Chivo","creditId":"52fe4211c3a36847f8001751","gender":2,"id":263,"name":"Emilio Echevarría","order":4,"profilePath":"https://image.tmdb.org/t/p/original/iGgExtFoyuIAmll19gEmorWQAPX.jpg"},{"castId":7,"character":"Luis","creditId":"52fe4211c3a36847f8001755","gender":2,"id":264,"name":"Jorge Salinas","order":5,"profilePath":"https://image.tmdb.org/t/p/original/yoaFIYfm983R3aZNAlDN9o2HSBW.jpg"},{"castId":8,"character":"Gustavo","creditId":"52fe4211c3a36847f8001759","gender":0,"id":265,"name":"Rodrigo Murray","order":6,"profilePath":"https://image.tmdb.org/t/p/original/qNUDwOV5TiEcKnugCBMofIIhgvV.jpg"},{"castId":9,"character":"Jorge","creditId":"52fe4211c3a36847f800175d","gender":2,"id":266,"name":"Humberto Busto","order":7,"profilePath":"https://image.tmdb.org/t/p/original/u9Y1oxHrkj6J69HDTWPCgtMcIrp.jpg"},{"castId":10,"character":"Mauricio","creditId":"52fe4211c3a36847f8001761","gender":0,"id":267,"name":"Gerardo Campbell","order":8,"profilePath":null},{"castId":11,"character":"Tía Luisa","creditId":"52fe4211c3a36847f8001765","gender":0,"id":268,"name":"Rosa María Bianchi","order":9,"profilePath":"https://image.tmdb.org/t/p/original/qZkZhM3fa0IH5qgMOArHtZ0K6pH.jpg"}]},{"tmdbId":"58","genres":[{"id":12,"name":"Adventure"},{"id":14,"name":"Fantasy"},{"id":28,"name":"Action"}],"originalLanguage":"en","originalTitle":"Pirates of the Caribbean: Dead Man's Chest","overview":"Captain Jack Sparrow works his way out of a blood debt with the ghostly Davey Jones, he also attempts to avoid eternal damnation.","posterUrl":"https://image.tmdb.org/t/p/original/waFr5RVKaQ9dzOt3nQuIVB1FiPu.jpg","productionCompanies":"[{'name': 'Walt Disney Pictures', 'id': 2}, {'name': 'Jerry Bruckheimer Films', 'id': 130}, {'name': 'Second Mate Productions', 'id': 19936}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2006-06-20","runtimeMinutes":151,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'tr', 'name': 'Türkçe'}, {'iso_639_1': 'el', 'name': 'ελληνικά'}, {'iso_639_1': 'zh', 'name': '普通话'}]","status":"Released","tagline":"Jack is back!","title":"Pirates of the Caribbean: Dead Man's Chest","cast":[{"castId":37,"character":"Captain Jack Sparrow","creditId":"52fe4212c3a36847f80018c3","gender":2,"id":85,"name":"Johnny Depp","order":0,"profilePath":"https://image.tmdb.org/t/p/original/kbWValANhZI8rbWZXximXuMN4UN.jpg"},{"castId":3,"character":"Will Turner","creditId":"52fe4211c3a36847f8001823","gender":2,"id":114,"name":"Orlando Bloom","order":1,"profilePath":"https://image.tmdb.org/t/p/original/kKWJlX2tcjqceSfUxnV7Jle5Kt.jpg"},{"castId":2,"character":"Elizabeth Swann","creditId":"52fe4211c3a36847f800181f","gender":1,"id":116,"name":"Keira Knightley","order":2,"profilePath":"https://image.tmdb.org/t/p/original/rv6quYbTgFTmBAoePwy5xuurW3g.jpg"},{"castId":7,"character":"William \"Bootstrap Bill\" Turner","creditId":"52fe4211c3a36847f8001835","gender":2,"id":1640,"name":"Stellan Skarsgård","order":3,"profilePath":"https://image.tmdb.org/t/p/original/hjWdhX7zEI0DkF7gA4hcEVcYCZl.jpg"},{"castId":6,"character":"Captain Davy Jones","creditId":"52fe4211c3a36847f8001831","gender":2,"id":2440,"name":"Bill Nighy","order":4,"profilePath":"https://image.tmdb.org/t/p/original/imAkeJi8C8ZHpPPB8RP92AD3kYW.jpg"},{"castId":4,"character":"James Norrington","creditId":"52fe4211c3a36847f8001827","gender":2,"id":1709,"name":"Jack Davenport","order":5,"profilePath":"https://image.tmdb.org/t/p/original/qxM6XdLmZ6pKkQV7uVwgu7MLcfV.jpg"},{"castId":27,"character":"Joshamee Gibbs","creditId":"52fe4212c3a36847f800189f","gender":2,"id":2449,"name":"Kevin McNally","order":6,"profilePath":"https://image.tmdb.org/t/p/original/fIJF3TZn8ckHkcl44oX77GvPv9e.jpg"},{"castId":36,"character":"Governor Weatherby Swann","creditId":"52fe4212c3a36847f80018bf","gender":2,"id":378,"name":"Jonathan Pryce","order":7,"profilePath":"https://image.tmdb.org/t/p/original/kfRf0eRfh9RRvBZEmpcXazWBgjd.jpg"},{"castId":29,"character":"Pintel","creditId":"52fe4212c3a36847f80018a3","gender":2,"id":1710,"name":"Lee Arenberg","order":8,"profilePath":"https://image.tmdb.org/t/p/original/l4Zxsug0QpyJYLv0RosYMgRXiAm.jpg"},{"castId":30,"character":"Ragetti","creditId":"52fe4212c3a36847f80018a7","gender":2,"id":1711,"name":"Mackenzie Crook","order":9,"profilePath":"https://image.tmdb.org/t/p/original/pkBBzUyeJSI8OY8rf6TM6Dz0NXL.jpg"}]},{"tmdbId":"59","genres":[{"id":18,"name":"Drama"},{"id":53,"name":"Thriller"},{"id":80,"name":"Crime"}],"originalLanguage":"en","originalTitle":"A History of Violence","overview":"An average family is thrust into the spotlight after the father commits a seemingly self-defense murder at his diner.","posterUrl":"https://image.tmdb.org/t/p/original/mz1qCHXxTUJm2AqOdW3IIpwYdo3.jpg","productionCompanies":"[{'name': 'New Line Cinema', 'id': 12}, {'name': 'DC Comics', 'id': 429}, {'name': 'BenderSpink', 'id': 6363}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}, {'iso_3166_1': 'CA', 'name': 'Canada'}, {'iso_3166_1': 'DE', 'name': 'Germany'}]","releaseDate":"2005-09-23","runtimeMinutes":96,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Tom Stall had the perfect life... until he became a hero.","title":"A History of Violence","cast":[{"castId":2,"character":"Tom Stall","creditId":"52fe4212c3a36847f8001927","gender":2,"id":110,"name":"Viggo Mortensen","order":0,"profilePath":"https://image.tmdb.org/t/p/original/gYtVNMwX96fE9F0WVkdC0SGffkn.jpg"},{"castId":3,"character":"Edie Stall","creditId":"52fe4212c3a36847f800192b","gender":1,"id":49,"name":"Maria Bello","order":1,"profilePath":"https://image.tmdb.org/t/p/original/tFkbad0JoWvYc6XYBITv6EfeLwR.jpg"},{"castId":4,"character":"Sarah Stall","creditId":"52fe4212c3a36847f800192f","gender":0,"id":226,"name":"Heidi Hayes","order":2,"profilePath":"https://image.tmdb.org/t/p/original/pczKccjy0kZmT5Khy4Fwx8F0dBi.jpg"},{"castId":5,"character":"Jack Stall","creditId":"52fe4212c3a36847f8001933","gender":2,"id":225,"name":"Ashton Holmes","order":3,"profilePath":"https://image.tmdb.org/t/p/original/glpPD22Zk2b7bGSOAFoy9ucPDmj.jpg"},{"castId":6,"character":"Richie Cusack","creditId":"52fe4212c3a36847f8001937","gender":2,"id":227,"name":"William Hurt","order":4,"profilePath":"https://image.tmdb.org/t/p/original/mf5GiYZjURQ72CPtY1kBva7mqIK.jpg"},{"castId":7,"character":"Carl Fogerty","creditId":"52fe4212c3a36847f800193b","gender":2,"id":228,"name":"Ed Harris","order":5,"profilePath":"https://image.tmdb.org/t/p/original/atzm7ZGRFSWJHQT6qKmzjmNQ9GA.jpg"},{"castId":8,"character":"Sheriff Sam Carney","creditId":"52fe4212c3a36847f800193f","gender":2,"id":229,"name":"Peter MacNeill","order":6,"profilePath":"https://image.tmdb.org/t/p/original/wNBsE9FqylAdCwzRvZtkvZJCfVI.jpg"},{"castId":9,"character":"Leland","creditId":"52fe4212c3a36847f8001943","gender":2,"id":230,"name":"Stephen McHattie","order":7,"profilePath":"https://image.tmdb.org/t/p/original/vSssg0R2VJLBUF0tb2rA4Vhsc4j.jpg"},{"castId":10,"character":"Billy","creditId":"52fe4212c3a36847f8001947","gender":2,"id":231,"name":"Greg Bryk","order":8,"profilePath":"https://image.tmdb.org/t/p/original/1I3SxKFvQSam6KOMT4j5f0nFxRg.jpg"},{"castId":11,"character":"Bobby","creditId":"52fe4212c3a36847f800194b","gender":2,"id":232,"name":"Kyle Schmid","order":9,"profilePath":"https://image.tmdb.org/t/p/original/d0BikewdLHSo6gjNMlBU7m7ePdG.jpg"}]},{"tmdbId":"62","genres":[{"id":878,"name":"Science Fiction"},{"id":9648,"name":"Mystery"},{"id":12,"name":"Adventure"}],"originalLanguage":"en","originalTitle":"2001: A Space Odyssey","overview":"Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.","posterUrl":"https://image.tmdb.org/t/p/original/90T7b2LIrL07ndYQBmSm09yqVEH.jpg","productionCompanies":"[{'name': 'Stanley Kubrick Productions', 'id': 385}, {'name': 'Metro-Goldwyn-Mayer (MGM)', 'id': 8411}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}, {'iso_3166_1': 'GB', 'name': 'United Kingdom'}]","releaseDate":"1968-04-10","runtimeMinutes":149,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'ru', 'name': 'Pусский'}]","status":"Released","tagline":"An epic drama of adventure and exploration","title":"2001: A Space Odyssey","cast":[{"castId":6,"character":"Dr. Dave Bowman","creditId":"52fe4212c3a36847f8001a1b","gender":2,"id":245,"name":"Keir Dullea","order":0,"profilePath":"https://image.tmdb.org/t/p/original/dL9i0nCk2fCgInZNaYVjGck2IBp.jpg"},{"castId":7,"character":"Dr. Frank Poole","creditId":"52fe4212c3a36847f8001a1f","gender":2,"id":246,"name":"Gary Lockwood","order":1,"profilePath":"https://image.tmdb.org/t/p/original/93PNFjRuV3u4SRFwmvaAMZ4HNna.jpg"},{"castId":8,"character":"Dr. Heywood R. Floyd","creditId":"52fe4212c3a36847f8001a23","gender":2,"id":247,"name":"William Sylvester","order":2,"profilePath":"https://image.tmdb.org/t/p/original/iz3JAVIColzTaQ3PFvxdlFaCzfW.jpg"},{"castId":14,"character":"HAL 9000 (voice)","creditId":"52fe4212c3a36847f8001a3b","gender":2,"id":253,"name":"Douglas Rain","order":3,"profilePath":"https://image.tmdb.org/t/p/original/pKrnsL8g6AVoHZljLCPhOQJWFQl.jpg"},{"castId":9,"character":"Moon-Watcher","creditId":"52fe4212c3a36847f8001a27","gender":0,"id":248,"name":"Daniel Richter","order":4,"profilePath":"https://image.tmdb.org/t/p/original/iJuRUlQzzLWO6syC5mZcULVFGP2.jpg"},{"castId":10,"character":"Dr. Andrei Smyslov","creditId":"52fe4212c3a36847f8001a2b","gender":2,"id":249,"name":"Leonard Rossiter","order":5,"profilePath":"https://image.tmdb.org/t/p/original/wrnVw2YGa7Kk5Lva0yZbLaPKcXp.jpg"},{"castId":11,"character":"Elena","creditId":"52fe4212c3a36847f8001a2f","gender":1,"id":250,"name":"Margaret Tyzack","order":6,"profilePath":"https://image.tmdb.org/t/p/original/x46TBOnZI9i5jfIkD12i8cnrQdK.jpg"},{"castId":12,"character":"Dr. Ralph Halvorsen","creditId":"52fe4212c3a36847f8001a33","gender":2,"id":251,"name":"Robert Beatty","order":7,"profilePath":"https://image.tmdb.org/t/p/original/nQrvFDN5pIo4y5qHRgsCJ3zpoQM.jpg"},{"castId":13,"character":"Dr. Bill Michaels","creditId":"52fe4212c3a36847f8001a37","gender":2,"id":252,"name":"Sean Sullivan","order":8,"profilePath":"https://image.tmdb.org/t/p/original/joE4WRGnRxLpZ6gyEPQuiA1VOsb.jpg"},{"castId":30,"character":"Mission Controller (voice)","creditId":"52fe4212c3a36847f8001a83","gender":2,"id":102573,"name":"Frank Miller","order":9,"profilePath":null}]},{"tmdbId":"63","genres":[{"id":878,"name":"Science Fiction"},{"id":53,"name":"Thriller"},{"id":9648,"name":"Mystery"}],"originalLanguage":"en","originalTitle":"Twelve Monkeys","overview":"In the year 2035, convict James Cole reluctantly volunteers to be sent back in time to discover the origin of a deadly virus that wiped out nearly all of the earth's population and forced the survivors into underground communities. But when Cole is mistakenly sent to 1990 instead of 1996, he's arrested and locked up in a mental hospital. There he meets psychiatrist Dr. Kathryn Railly, and patient Jeffrey Goines, the son of a famous virus expert, who may hold the key to the mysterious rogue group, the Army of the 12 Monkeys, thought to be responsible for unleashing the killer disease.","posterUrl":"https://image.tmdb.org/t/p/original/6Sj9wDu3YugthXsU0Vry5XFAZGg.jpg","productionCompanies":"[{'name': 'Universal Pictures', 'id': 33}, {'name': 'Atlas Entertainment', 'id': 507}, {'name': 'Classico', 'id': 17031}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1995-12-29","runtimeMinutes":129,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Français'}]","status":"Released","tagline":"The future is history.","title":"Twelve Monkeys","cast":[{"castId":41,"character":"James Cole","creditId":"52fe4212c3a36847f8001b31","gender":2,"id":62,"name":"Bruce Willis","order":0,"profilePath":"https://image.tmdb.org/t/p/original/2B7RySy2WMVJKKEFN2XA3IFb8w0.jpg"},{"castId":42,"character":"Dr. Kathryn Railly","creditId":"52fe4212c3a36847f8001b35","gender":1,"id":289,"name":"Madeleine Stowe","order":1,"profilePath":"https://image.tmdb.org/t/p/original/jqd70MNVUs3nTbxn3B3G6UNV4Oc.jpg"},{"castId":43,"character":"Jeffrey Goines","creditId":"52fe4212c3a36847f8001b39","gender":2,"id":287,"name":"Brad Pitt","order":2,"profilePath":"https://image.tmdb.org/t/p/original/ejYIW1enUcGJ9GS3Bs34mtONwWS.jpg"},{"castId":44,"character":"Dr. Goines","creditId":"52fe4212c3a36847f8001b3d","gender":2,"id":290,"name":"Christopher Plummer","order":3,"profilePath":"https://image.tmdb.org/t/p/original/fauMGxa6dc86nHNenQ8X6DlE6YV.jpg"},{"castId":45,"character":"Dr. Peters","creditId":"52fe4212c3a36847f8001b41","gender":2,"id":52,"name":"David Morse","order":4,"profilePath":"https://image.tmdb.org/t/p/original/5PuSGfBw3Hsdo5jkhZ59NDFCZUm.jpg"},{"castId":46,"character":"Jose","creditId":"52fe4212c3a36847f8001b45","gender":2,"id":288,"name":"Jon Seda","order":5,"profilePath":"https://image.tmdb.org/t/p/original/zYDXb5F4IyzuODWSuGa2mLU8HMz.jpg"},{"castId":47,"character":"Dr. Fletcher","creditId":"52fe4212c3a36847f8001b49","gender":2,"id":291,"name":"Frank Gorshin","order":6,"profilePath":"https://image.tmdb.org/t/p/original/1hfi3gAMouvfXzrnrbJLHqYHHVP.jpg"},{"castId":48,"character":"junger Cole","creditId":"52fe4212c3a36847f8001b4d","gender":2,"id":975569,"name":"Joseph Melito","order":7,"profilePath":"https://image.tmdb.org/t/p/original/rPgGtrcKQsV9wlDW91kgjGm39K5.jpg"},{"castId":49,"character":"WWI Sergeant","creditId":"52fe4212c3a36847f8001b51","gender":0,"id":1273540,"name":"Aaron Michael Lacey","order":8,"profilePath":"https://image.tmdb.org/t/p/original/6cBXtAhaqQfT14WLIgGXqmEQ12j.jpg"},{"castId":50,"character":"Lt. Halperin","creditId":"52fe4212c3a36847f8001b55","gender":2,"id":22227,"name":"Christopher Meloni","order":9,"profilePath":"https://image.tmdb.org/t/p/original/qUxRtuQxWcuaUitnKoTyKgeIitu.jpg"}]},{"tmdbId":"64","genres":[{"id":18,"name":"Drama"},{"id":10749,"name":"Romance"}],"originalLanguage":"es","originalTitle":"Hable con ella","overview":"Two men share an odd friendship while they care for two women who are both in deep comas.","posterUrl":"https://image.tmdb.org/t/p/original/klsBB1YEGRyC7YjiLYCKIqkU6pY.jpg","productionCompanies":"[{'name': 'Vía Digital', 'id': 357}, {'name': 'Good Machine', 'id': 10565}, {'name': 'El Deseo S.A.', 'id': 11736}, {'name': 'Antena 3 Televisión', 'id': 11737}]","productionCountries":"[{'iso_3166_1': 'ES', 'name': 'Spain'}]","releaseDate":"2002-03-14","runtimeMinutes":112,"spokenLanguages":"[{'iso_639_1': 'es', 'name': 'Español'}]","status":"Released","tagline":"","title":"Talk to Her","cast":[{"castId":4,"character":"Alicia","creditId":"52fe4212c3a36847f8001ba9","gender":1,"id":101,"name":"Leonor Watling","order":0,"profilePath":"https://image.tmdb.org/t/p/original/lFOK1qKWqXOnJHFrz4MmuiSzpBP.jpg"},{"castId":5,"character":"Lydia","creditId":"52fe4212c3a36847f8001bad","gender":1,"id":398,"name":"Rosario Flores","order":1,"profilePath":"https://image.tmdb.org/t/p/original/bWK2h9obFbPjMpq7oOnwbd7oIW.jpg"},{"castId":8,"character":"Benigno","creditId":"52fe4212c3a36847f8001bbd","gender":2,"id":1610,"name":"Javier Cámara","order":2,"profilePath":"https://image.tmdb.org/t/p/original/pG2uOSwthuTXn8LAV2MTZbyOre9.jpg"},{"castId":10,"character":"Marco","creditId":"52fe4212c3a36847f8001bc7","gender":2,"id":3618,"name":"Darío Grandinetti","order":3,"profilePath":"https://image.tmdb.org/t/p/original/l5FNSMU0ZmEeeob71izhosfBzPb.jpg"},{"castId":11,"character":"Rosa","creditId":"52fe4212c3a36847f8001bcb","gender":0,"id":399,"name":"Mariola Fuentes","order":4,"profilePath":"https://image.tmdb.org/t/p/original/79y7ii3WPe8y6yV2hqLKYbYXLnL.jpg"},{"castId":12,"character":"Katerina Bilova","creditId":"52fe4212c3a36847f8001bcf","gender":1,"id":400,"name":"Geraldine Chaplin","order":5,"profilePath":"https://image.tmdb.org/t/p/original/gr5UwM0nA76SCWDSCXjjSSxclvf.jpg"},{"castId":13,"character":"Bailarine","creditId":"52fe4212c3a36847f8001bd3","gender":1,"id":402,"name":"Pina Bausch","order":6,"profilePath":"https://image.tmdb.org/t/p/original/jnBBrvr0tTz5O5SJwyWV0HgztOO.jpg"},{"castId":14,"character":"Bailarine","creditId":"52fe4212c3a36847f8001bd7","gender":0,"id":3619,"name":"Malou Airaudo","order":7,"profilePath":null},{"castId":15,"character":"Singer at Party","creditId":"52fe4212c3a36847f8001bdb","gender":2,"id":3620,"name":"Caetano Veloso","order":8,"profilePath":"https://image.tmdb.org/t/p/original/onHlrk9FN5KkDkxfO70XW9X6qGt.jpg"},{"castId":16,"character":"Doctor","creditId":"52fe4212c3a36847f8001bdf","gender":0,"id":3621,"name":"Roberto Alvarez","order":9,"profilePath":null}]},{"tmdbId":"65","genres":[{"id":18,"name":"Drama"}],"originalLanguage":"en","originalTitle":"8 Mile","overview":"The setting is Detroit in 1995. The city is divided by 8 Mile, a road that splits the town in half along racial lines. A young white rapper, Jimmy \"B-Rabbit\" Smith Jr. summons strength within himself to cross over these arbitrary boundaries to fulfill his dream of success in hip hop. With his pal Future and the three one third in place, all he has to do is not choke.","posterUrl":"https://image.tmdb.org/t/p/original/dXzTrKwpbLpCqn8O70FUUhNbYQT.jpg","productionCompanies":"[{'name': 'Imagine Entertainment', 'id': 23}, {'name': 'Mikona Productions GmbH & Co. KG', 'id': 24}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2002-11-08","runtimeMinutes":110,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Every moment is another chance.","title":"8 Mile","cast":[{"castId":3,"character":"Jimmy B. \"Rabbit\" Smith","creditId":"52fe4212c3a36847f8001c53","gender":2,"id":325,"name":"Eminem","order":0,"profilePath":"https://image.tmdb.org/t/p/original/mKPPGlIZ2EiKb6LSC46cSzK2NEU.jpg"},{"castId":4,"character":"David \"Future\" Porter","creditId":"52fe4212c3a36847f8001c57","gender":2,"id":327,"name":"Mekhi Phifer","order":1,"profilePath":"https://image.tmdb.org/t/p/original/xrv9RDMPoTd9NsfpUzL81XglAmk.jpg"},{"castId":6,"character":"Alex","creditId":"52fe4212c3a36847f8001c5f","gender":1,"id":328,"name":"Brittany Murphy","order":2,"profilePath":"https://image.tmdb.org/t/p/original/jktbTmFE3TVaKUqPDWw8VZ5rXqc.jpg"},{"castId":5,"character":"Stephanie Smith","creditId":"52fe4212c3a36847f8001c5b","gender":1,"id":326,"name":"Kim Basinger","order":3,"profilePath":"https://image.tmdb.org/t/p/original/xpv6NgpY0mDr5QSWjZLXy5KlFn9.jpg"},{"castId":13,"character":"Greg Buehl","creditId":"52fe4212c3a36847f8001c7b","gender":2,"id":335,"name":"Michael Shannon","order":4,"profilePath":"https://image.tmdb.org/t/p/original/5yGCJ6znHM96zTfW2LNP6uPPDCZ.jpg"},{"castId":21,"character":"Janeane","creditId":"52fe4212c3a36847f8001c8b","gender":1,"id":343,"name":"Taryn Manning","order":5,"profilePath":"https://image.tmdb.org/t/p/original/ujPqJgRvOVaTgVI5qTWHBSM6BB3.jpg"},{"castId":22,"character":"Papa Doc","creditId":"52fe4212c3a36847f8001c8f","gender":2,"id":53650,"name":"Anthony Mackie","order":6,"profilePath":"https://image.tmdb.org/t/p/original/5VGGJ0Co8SC94iiedWb2o3C36T.jpg"},{"castId":26,"character":"DJ IZ","creditId":"54ebba54c3a3686d64000057","gender":2,"id":341,"name":"De'Angelo Wilson","order":7,"profilePath":"https://image.tmdb.org/t/p/original/59cfQidcF39uWLlVgqrGwj5GpJi.jpg"},{"castId":23,"character":"Cheddar Bob","creditId":"53615f92c3a368394e00031c","gender":2,"id":333,"name":"Evan Jones","order":8,"profilePath":"https://image.tmdb.org/t/p/original/l3HyrWJQZtb6GMmljTfbDR0Ve65.jpg"},{"castId":28,"character":"Sol George","creditId":"54ebba71925141796500005e","gender":0,"id":334,"name":"Omar Benson Miller","order":9,"profilePath":"https://image.tmdb.org/t/p/original/fHd0bvqXMv0MaT8rCRBmVQuycY.jpg"}]},{"tmdbId":"66","genres":[{"id":80,"name":"Crime"},{"id":18,"name":"Drama"},{"id":53,"name":"Thriller"}],"originalLanguage":"en","originalTitle":"Absolute Power","overview":"A master thief coincidentally is robbing a house where a murder in which the President of The United States is involved occurs in front of his eyes. He is forced to run yet may hold evidence that could convict the President. A political thriller from and starring Clint Eastwood and based on a novel by David Baldacci.","posterUrl":"https://image.tmdb.org/t/p/original/oJQdp09Oc51DkArsMDvgDLdWiDu.jpg","productionCompanies":"[{'name': 'Columbia Pictures', 'id': 5}, {'name': 'Castle Rock Entertainment', 'id': 97}, {'name': 'Malpaso Productions', 'id': 171}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1997-02-14","runtimeMinutes":121,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}]","status":"Released","tagline":"Corrupts Absolutely.","title":"Absolute Power","cast":[{"castId":5,"character":"Luther Whitney","creditId":"52fe4212c3a36847f8001ce1","gender":2,"id":190,"name":"Clint Eastwood","order":0,"profilePath":"https://image.tmdb.org/t/p/original/wJosJW9DNWHOA8h63bQr2HgHC48.jpg"},{"castId":6,"character":"President Allen Richmond","creditId":"52fe4212c3a36847f8001ce5","gender":2,"id":193,"name":"Gene Hackman","order":1,"profilePath":"https://image.tmdb.org/t/p/original/qEKcmwc1XstymEniGuCs3KIsGfP.jpg"},{"castId":7,"character":"Seth Frank","creditId":"52fe4212c3a36847f8001ce9","gender":2,"id":228,"name":"Ed Harris","order":2,"profilePath":"https://image.tmdb.org/t/p/original/atzm7ZGRFSWJHQT6qKmzjmNQ9GA.jpg"},{"castId":8,"character":"Bill Burton","creditId":"52fe4212c3a36847f8001ced","gender":2,"id":349,"name":"Scott Glenn","order":3,"profilePath":"https://image.tmdb.org/t/p/original/aKUJwCKhl4qCi7j7M7TRpqWLmmO.jpg"},{"castId":9,"character":"Kate Whitney","creditId":"52fe4212c3a36847f8001cf1","gender":1,"id":350,"name":"Laura Linney","order":4,"profilePath":"https://image.tmdb.org/t/p/original/unRRWITXrZsbk9iTmnjVxd6yZv9.jpg"},{"castId":10,"character":"Gloria Russell","creditId":"52fe4212c3a36847f8001cf5","gender":1,"id":351,"name":"Judy Davis","order":5,"profilePath":"https://image.tmdb.org/t/p/original/xQMA72T6yz6ebJXv1pCuZC1fDJo.jpg"},{"castId":11,"character":"Tim Collin","creditId":"52fe4212c3a36847f8001cf9","gender":2,"id":352,"name":"Dennis Haysbert","order":6,"profilePath":"https://image.tmdb.org/t/p/original/mn5Nc5Q31GslpVVWs8p41W4TBma.jpg"},{"castId":24,"character":"Art Student","creditId":"52fe4212c3a36847f8001d45","gender":1,"id":389,"name":"Alison Eastwood","order":7,"profilePath":"https://image.tmdb.org/t/p/original/mRXDleUiPyNFSv3mOF4PNR7nhkY.jpg"},{"castId":25,"character":"Christy Sullivan","creditId":"52fe4212c3a36847f8001d49","gender":1,"id":404,"name":"Melora Hardin","order":8,"profilePath":"https://image.tmdb.org/t/p/original/uecs9JKOqgYj3PrSGECaFzc3E2r.jpg"},{"castId":27,"character":"Walter Sullivan","creditId":"52fe4212c3a36847f8001d53","gender":2,"id":5249,"name":"E.G. Marshall","order":9,"profilePath":"https://image.tmdb.org/t/p/original/iQnivIob2OiXuVCepECf72xS2tQ.jpg"}]},{"tmdbId":"67","genres":[{"id":53,"name":"Thriller"},{"id":80,"name":"Crime"},{"id":18,"name":"Drama"}],"originalLanguage":"en","originalTitle":"Paradise Now","overview":"Paradise Now is filmed from the perspective of two Palestinian men who are preparing to perform a suicide attack in Israel. This is the first film to deal with the subject of suicide bombers.","posterUrl":"https://image.tmdb.org/t/p/original/qWZkYa8VdcDZk8uzRB2PfhpM9IL.jpg","productionCompanies":"[{'name': 'Lama Films', 'id': 15}, {'name': 'Augustus Film', 'id': 89}, {'name': 'Lama Productions', 'id': 91}, {'name': 'Lumer Films', 'id': 93}, {'name': 'Hazazah Film', 'id': 95}, {'name': 'Filmstiftung Nordrhein-Westfalen', 'id': 315}, {'name': 'Razor Film Produktion GmbH', 'id': 703}, {'name': 'Eurimages', 'id': 850}, {'name': 'Nederlands Fonds voor de Film', 'id': 4508}, {'name': 'Arte France Cinéma', 'id': 6916}, {'name': 'Medienboard Berlin-Brandenburg', 'id': 7307}]","productionCountries":"[{'iso_3166_1': 'PS', 'name': 'Palestinian Territory'}, {'iso_3166_1': 'FR', 'name': 'France'}, {'iso_3166_1': 'DE', 'name': 'Germany'}, {'iso_3166_1': 'IL', 'name': 'Israel'}, {'iso_3166_1': 'NL', 'name': 'Netherlands'}]","releaseDate":"2005-02-14","runtimeMinutes":90,"spokenLanguages":"[{'iso_639_1': 'ar', 'name': 'العربية'}, {'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"From the most unexpected place, come a  new call for peace.","title":"Paradise Now","cast":[{"castId":7,"character":"Khaled","creditId":"52fe4213c3a36847f8001dbd","gender":2,"id":762,"name":"Ali Suliman","order":0,"profilePath":"https://image.tmdb.org/t/p/original/orQk2ePFL6er4TrdhD0jZ9my3E3.jpg"},{"castId":9,"character":"Jamal","creditId":"52fe4213c3a36847f8001dc1","gender":2,"id":764,"name":"Amer Hlehel","order":2,"profilePath":null},{"castId":10,"character":"Said's mother","creditId":"52fe4213c3a36847f8001dc5","gender":1,"id":765,"name":"Hiam Abbass","order":3,"profilePath":"https://image.tmdb.org/t/p/original/hkzC5aJKTiuCchBpybaHDVngYZW.jpg"},{"castId":11,"character":"Abu Karem","creditId":"52fe4213c3a36847f8001dc9","gender":2,"id":766,"name":"Ashraf Barhom","order":4,"profilePath":"https://image.tmdb.org/t/p/original/oqu4Ra8jfKvKoeOtVZiWoNvfvji.jpg"},{"castId":14,"character":"Abu Salim","creditId":"52fe4213c3a36847f8001dd9","gender":0,"id":791,"name":"Mohammad Bustami","order":5,"profilePath":null},{"castId":17,"character":"Suha","creditId":"52fe4213c3a36847f8001de9","gender":1,"id":77498,"name":"Lubna Azabal","order":6,"profilePath":"https://image.tmdb.org/t/p/original/lGvB2xP7sotwSslSTovL5nxnzBC.jpg"},{"castId":18,"character":"Said","creditId":"52fe4213c3a36847f8001ded","gender":2,"id":25087,"name":"Kais Nashif","order":7,"profilePath":null}]},{"tmdbId":"68","genres":[{"id":35,"name":"Comedy"},{"id":878,"name":"Science Fiction"}],"originalLanguage":"en","originalTitle":"Brazil","overview":"Low-level bureaucrat Sam Lowry escapes the monotony of his day-to-day life through a recurring daydream of himself as a virtuous hero saving a beautiful damsel. Investigating a case that led to the wrongful arrest and eventual death of an innocent man instead of wanted terrorist Harry Tuttle, he meets the woman from his daydream, and in trying to help her gets caught in a web of mistaken identities, mindless bureaucracy and lies.","posterUrl":"https://image.tmdb.org/t/p/original/55Vfc1beLn3pJF4Lw83TRKHenK6.jpg","productionCompanies":"[{'name': 'Embassy International Pictures', 'id': 10214}]","productionCountries":"[{'iso_3166_1': 'GB', 'name': 'United Kingdom'}]","releaseDate":"1985-02-20","runtimeMinutes":132,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"It's only a state of mind.","title":"Brazil","cast":[{"castId":7,"character":"Sam Lowry","creditId":"52fe4213c3a36847f8001e8f","gender":2,"id":378,"name":"Jonathan Pryce","order":0,"profilePath":"https://image.tmdb.org/t/p/original/kfRf0eRfh9RRvBZEmpcXazWBgjd.jpg"},{"castId":8,"character":"Archibald 'Harry' Tuttle","creditId":"52fe4213c3a36847f8001e93","gender":2,"id":380,"name":"Robert De Niro","order":1,"profilePath":"https://image.tmdb.org/t/p/original/lvTSwUcvJRLAJ2FB5qFaukel516.jpg"},{"castId":9,"character":"Mrs. Ida Lowry","creditId":"52fe4213c3a36847f8001e97","gender":1,"id":381,"name":"Katherine Helmond","order":2,"profilePath":"https://image.tmdb.org/t/p/original/m7o1IEKIabcTWz5Qr4yUEoCNHDE.jpg"},{"castId":10,"character":"Mr. M. Kurtzmann","creditId":"52fe4213c3a36847f8001e9b","gender":2,"id":65,"name":"Ian Holm","order":3,"profilePath":"https://image.tmdb.org/t/p/original/27SAk1v043GdOeAxT5pPoMUYhGg.jpg"},{"castId":11,"character":"Spoor","creditId":"52fe4213c3a36847f8001e9f","gender":2,"id":382,"name":"Bob Hoskins","order":4,"profilePath":"https://image.tmdb.org/t/p/original/mIgAC6q5HcHHxZUIiCOvE6mHLGs.jpg"},{"castId":12,"character":"Jack Lint","creditId":"52fe4213c3a36847f8001ea3","gender":2,"id":383,"name":"Michael Palin","order":5,"profilePath":"https://image.tmdb.org/t/p/original/4x3JaNi3hEh4tdlXbg4dw55X10f.jpg"},{"castId":13,"character":"Mr. Warrenn","creditId":"52fe4213c3a36847f8001ea7","gender":2,"id":385,"name":"Ian Richardson","order":6,"profilePath":"https://image.tmdb.org/t/p/original/lcBldPUneC5Vzjhkh4btVCSjXhS.jpg"},{"castId":17,"character":"Smoking Man (uncredited)","creditId":"52fe4213c3a36847f8001eb7","gender":2,"id":280,"name":"Terry Gilliam","order":7,"profilePath":"https://image.tmdb.org/t/p/original/cFno5isSPvfPEkSdVoEzOs0pJCh.jpg"},{"castId":14,"character":"Mr. Helpmann","creditId":"52fe4213c3a36847f8001eab","gender":2,"id":386,"name":"Peter Vaughan","order":8,"profilePath":"https://image.tmdb.org/t/p/original/z9ZplbTA1ojYhgZ8kJUKKhsJ7Gs.jpg"},{"castId":15,"character":"Jill Layton","creditId":"52fe4213c3a36847f8001eaf","gender":1,"id":387,"name":"Kim Greist","order":9,"profilePath":"https://image.tmdb.org/t/p/original/u857tppmsyDcYuzqXyj83G70mq0.jpg"}]},{"tmdbId":"69","genres":[{"id":18,"name":"Drama"},{"id":10402,"name":"Music"},{"id":10749,"name":"Romance"}],"originalLanguage":"en","originalTitle":"Walk the Line","overview":"A chronicle of country music legend Johnny Cash's life, from his early days on an Arkansas cotton farm to his rise to fame with Sun Records in Memphis, where he recorded alongside Elvis Presley, Jerry Lee Lewis and Carl Perkins.","posterUrl":"https://image.tmdb.org/t/p/original/wdxL3Zyh3O5MIbmsSiZEevJAjtQ.jpg","productionCompanies":"[{'name': 'Tree Line Films', 'id': 84}, {'name': 'Konrad Pictures', 'id': 85}, {'name': 'Catfish Productions', 'id': 86}, {'name': 'Fox 2000 Pictures', 'id': 711}, {'name': 'Mars Media Beteiligungs', 'id': 6402}]","productionCountries":"[{'iso_3166_1': 'DE', 'name': 'Germany'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2005-09-13","runtimeMinutes":136,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'ru', 'name': 'Pусский'}]","status":"Released","tagline":"Love is a burning thing.","title":"Walk the Line","cast":[{"castId":2,"character":"Johnny Cash","creditId":"52fe4213c3a36847f8001f43","gender":2,"id":73421,"name":"Joaquin Phoenix","order":0,"profilePath":"https://image.tmdb.org/t/p/original/fGXFFv7owELL4wCFn2OsFAgOiO3.jpg"},{"castId":3,"character":"June Carter","creditId":"52fe4213c3a36847f8001f47","gender":1,"id":368,"name":"Reese Witherspoon","order":1,"profilePath":"https://image.tmdb.org/t/p/original/a3o8T1P6yy4KWL7wZG6HuDeuh5n.jpg"},{"castId":10,"character":"Vivian","creditId":"52fe4213c3a36847f8001f63","gender":1,"id":417,"name":"Ginnifer Goodwin","order":2,"profilePath":"https://image.tmdb.org/t/p/original/vAH6j1A0L88R4UD9QX1nM9OLoYw.jpg"},{"castId":11,"character":"Ray Cash","creditId":"52fe4213c3a36847f8001f67","gender":2,"id":418,"name":"Robert Patrick","order":3,"profilePath":"https://image.tmdb.org/t/p/original/dpUIbzLpExv69faSRyww8A4ydxf.jpg"},{"castId":12,"character":"Elvis Presley","creditId":"52fe4213c3a36847f8001f6b","gender":2,"id":419,"name":"Tyler Hilton","order":4,"profilePath":"https://image.tmdb.org/t/p/original/emjnps2ZgdocYmQnw2uxIo9jDSM.jpg"},{"castId":13,"character":"Roy Orbison","creditId":"52fe4213c3a36847f8001f6f","gender":2,"id":420,"name":"Johnathan Rice","order":5,"profilePath":null},{"castId":14,"character":"Waylon Jennings","creditId":"52fe4213c3a36847f8001f73","gender":2,"id":421,"name":"Shooter Jennings","order":6,"profilePath":"https://image.tmdb.org/t/p/original/oWn81H5SLIYQikUkeRFrnVnwL9M.jpg"},{"castId":15,"character":"Jerry Lee Lewis","creditId":"52fe4213c3a36847f8001f77","gender":2,"id":422,"name":"Waylon Payne","order":7,"profilePath":"https://image.tmdb.org/t/p/original/x9ykfxywhSBMrJXznW4AXHAbap4.jpg"},{"castId":16,"character":"Sam Phillips","creditId":"52fe4213c3a36847f8001f7b","gender":0,"id":424,"name":"Dallas Roberts","order":8,"profilePath":"https://image.tmdb.org/t/p/original/irqfTXfK1rWeF6SNLzB37b6yxAN.jpg"},{"castId":17,"character":"Luther Perkins","creditId":"52fe4213c3a36847f8001f7f","gender":2,"id":425,"name":"Dan John Miller","order":9,"profilePath":"https://image.tmdb.org/t/p/original/vqCkSeRyFK90Y578eSU4zeKMC4I.jpg"}]},{"tmdbId":"70","genres":[{"id":18,"name":"Drama"}],"originalLanguage":"en","originalTitle":"Million Dollar Baby","overview":"Despondent over a painful estrangement from his daughter, trainer Frankie Dunn isn't prepared for boxer Maggie Fitzgerald to enter his life. But Maggie's determined to go pro and to convince Dunn and his cohort to help her.","posterUrl":"https://image.tmdb.org/t/p/original/h4VZKi2Jt4VoBYJmtC4c3bO8KqM.jpg","productionCompanies":"[{'name': 'Lakeshore Entertainment', 'id': 126}, {'name': 'Malpaso Productions', 'id': 171}, {'name': 'Epsilon Motion Pictures', 'id': 1171}, {'name': 'Warner Bros.', 'id': 6194}, {'name': 'Albert S. Ruddy Productions', 'id': 16311}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2004-12-15","runtimeMinutes":132,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'ga', 'name': 'Gaeilge'}]","status":"Released","tagline":"Beyond his silence, there is a past. Beyond her dreams, there is a feeling. Beyond hope, there is a memory. Beyond their journey, there is a love.","title":"Million Dollar Baby","cast":[{"castId":4,"character":"Frankie Dunn","creditId":"52fe4213c3a36847f8002015","gender":2,"id":190,"name":"Clint Eastwood","order":0,"profilePath":"https://image.tmdb.org/t/p/original/wJosJW9DNWHOA8h63bQr2HgHC48.jpg"},{"castId":24,"character":"Maggie Fitzgerald","creditId":"52fe4213c3a36847f8002079","gender":1,"id":448,"name":"Hilary Swank","order":1,"profilePath":"https://image.tmdb.org/t/p/original/zVM2gbZhuipISCoALn6iEN1bmop.jpg"},{"castId":26,"character":"Eddie Scrap-Iron Dupris","creditId":"52fe4213c3a36847f8002083","gender":2,"id":192,"name":"Morgan Freeman","order":2,"profilePath":"https://image.tmdb.org/t/p/original/oGJQhOpT8S1M56tvSsbEBePV5O1.jpg"},{"castId":6,"character":"Danger Barch","creditId":"52fe4213c3a36847f8002019","gender":2,"id":449,"name":"Jay Baruchel","order":3,"profilePath":"https://image.tmdb.org/t/p/original/7EX0od3FwdaoEegJlY1q0kZgEqt.jpg"},{"castId":7,"character":"Big Willie Little","creditId":"52fe4213c3a36847f800201d","gender":2,"id":450,"name":"Mike Colter","order":4,"profilePath":"https://image.tmdb.org/t/p/original/gAqaj4qmyhR4cCw22cmOAcvEFk6.jpg"},{"castId":8,"character":"Billie 'The Blue Bear'","creditId":"52fe4213c3a36847f8002021","gender":0,"id":451,"name":"Lucia Rijker","order":5,"profilePath":"https://image.tmdb.org/t/p/original/k3q1fPHXZRIrmL7Zheo3yqBJxTX.jpg"},{"castId":30,"character":"Father Horvak","creditId":"52fe4213c3a36847f8002091","gender":2,"id":31713,"name":"Brían F. O'Byrne","order":6,"profilePath":"https://image.tmdb.org/t/p/original/wdZgEIwJrQ2ZArFl5I3UjjWcdFF.jpg"},{"castId":28,"character":"Shawrelle Berry","creditId":"52fe4213c3a36847f8002087","gender":2,"id":53650,"name":"Anthony Mackie","order":7,"profilePath":"https://image.tmdb.org/t/p/original/5VGGJ0Co8SC94iiedWb2o3C36T.jpg"},{"castId":9,"character":"Earline Fitzgerald","creditId":"52fe4213c3a36847f8002025","gender":1,"id":452,"name":"Margo Martindale","order":8,"profilePath":"https://image.tmdb.org/t/p/original/4YmmVgOGKsDsGGLunCHmigj2TbV.jpg"},{"castId":10,"character":"Mardell Fitzgerald","creditId":"52fe4213c3a36847f8002029","gender":1,"id":453,"name":"Riki Lindhome","order":9,"profilePath":"https://image.tmdb.org/t/p/original/lwjArx8HnH61Z3OoMs0MZ5kXlMO.jpg"}]},{"tmdbId":"71","genres":[{"id":18,"name":"Drama"},{"id":35,"name":"Comedy"},{"id":10402,"name":"Music"}],"originalLanguage":"en","originalTitle":"Billy Elliot","overview":"Set against the background of the 1984 Miner's Strike, Billy Elliot is an 11 year old boy who stumbles out of the boxing ring and onto the ballet floor. He faces many trials and triumphs as he strives to conquer his family's set ways, inner conflict, and standing on his toes!","posterUrl":"https://image.tmdb.org/t/p/original/6VaP1H3MOW5jdkWqS5Q1NapCOS6.jpg","productionCompanies":"[{'name': 'BBC Films', 'id': 288}, {'name': 'Tiger Aspect Productions', 'id': 686}, {'name': 'StudioCanal', 'id': 694}, {'name': 'Arts Council of England', 'id': 718}, {'name': 'Working Title Films', 'id': 10163}, {'name': 'WT2 Productions', 'id': 10462}]","productionCountries":"[{'iso_3166_1': 'FR', 'name': 'France'}, {'iso_3166_1': 'GB', 'name': 'United Kingdom'}]","releaseDate":"2000-05-18","runtimeMinutes":110,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Inside every one of us is a special talent waiting to come out. The trick is finding it.","title":"Billy Elliot","cast":[{"castId":16,"character":"Billy Elliot","creditId":"52fe4213c3a36847f800211d","gender":2,"id":478,"name":"Jamie Bell","order":0,"profilePath":"https://image.tmdb.org/t/p/original/7HgepK5YE8u0xrv3lJZjaEoENwl.jpg"},{"castId":15,"character":"Mrs. Wilkinson","creditId":"52fe4213c3a36847f8002119","gender":1,"id":477,"name":"Julie Walters","order":1,"profilePath":"https://image.tmdb.org/t/p/original/f88FYv3EYWvbXaeTXyO56dWCbez.jpg"},{"castId":19,"character":"Grandmother","creditId":"52fe4213c3a36847f8002129","gender":1,"id":481,"name":"Jean Heywood","order":2,"profilePath":null},{"castId":17,"character":"Tony Elliot","creditId":"52fe4213c3a36847f8002121","gender":2,"id":479,"name":"Jamie Draven","order":3,"profilePath":"https://image.tmdb.org/t/p/original/tC1EJV652XHWPDITZfKe1JrH7Ii.jpg"},{"castId":18,"character":"Jackie Elliot","creditId":"52fe4213c3a36847f8002125","gender":2,"id":480,"name":"Gary Lewis","order":4,"profilePath":"https://image.tmdb.org/t/p/original/3pfclDPaKmgSpmxIo8bMXNAgLdE.jpg"},{"castId":30,"character":"Ballet Doctor","creditId":"5880b7f492514134ca00b79d","gender":2,"id":21345,"name":"Stephen Mangan","order":5,"profilePath":"https://image.tmdb.org/t/p/original/3pr7Bf98Dej4991wKDDreBvoPAA.jpg"},{"castId":31,"character":"Principal","creditId":"5880b80192514134be00ad96","gender":2,"id":8979,"name":"Patrick Malahide","order":6,"profilePath":"https://image.tmdb.org/t/p/original/pv65v8oEhLo0ibCz1K23UCoKMuS.jpg"},{"castId":20,"character":"Michael Caffrey","creditId":"52fe4213c3a36847f800212d","gender":2,"id":482,"name":"Stuart Wells","order":7,"profilePath":null},{"castId":34,"character":"Geography Teacher","creditId":"5880b833c3a3683114009fe3","gender":1,"id":195254,"name":"Tracey Wilkinson","order":8,"profilePath":null},{"castId":33,"character":"Sandra","creditId":"5880b82392514134b800b5da","gender":1,"id":20494,"name":"Zoë Bell","order":9,"profilePath":"https://image.tmdb.org/t/p/original/44OHciSZtHTggiXyNM8jntKMsot.jpg"}]},{"tmdbId":"73","genres":[{"id":18,"name":"Drama"}],"originalLanguage":"en","originalTitle":"American History X","overview":"Derek Vineyard is paroled after serving 3 years in prison for killing two thugs who tried to break into/steal his truck. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.","posterUrl":"https://image.tmdb.org/t/p/original/fXepRAYOx1qC3wju7XdDGx60775.jpg","productionCompanies":"[{'name': 'New Line Cinema', 'id': 12}, {'name': 'The Turman-Morrissey Company', 'id': 924}, {'name': 'Savoy Pictures', 'id': 11308}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1998-10-30","runtimeMinutes":119,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Some Legacies Must End.","title":"American History X","cast":[{"castId":4,"character":"Derek Vinyard","creditId":"52fe4213c3a36847f8002187","gender":2,"id":819,"name":"Edward Norton","order":0,"profilePath":"https://image.tmdb.org/t/p/original/eIkFHNlfretLS1spAcIoihKUS62.jpg"},{"castId":5,"character":"Danny Vinyard","creditId":"52fe4213c3a36847f800218b","gender":2,"id":820,"name":"Edward Furlong","order":1,"profilePath":"https://image.tmdb.org/t/p/original/o7x6XcLSZSJygjYKLMcElEehmkr.jpg"},{"castId":6,"character":"Doris Vinyard","creditId":"52fe4213c3a36847f800218f","gender":1,"id":821,"name":"Beverly D'Angelo","order":2,"profilePath":"https://image.tmdb.org/t/p/original/fkedkicdG9o9axNqGs5tcTFxglw.jpg"},{"castId":7,"character":"Dr. Bob Sweeney","creditId":"52fe4213c3a36847f8002193","gender":2,"id":822,"name":"Avery Brooks","order":3,"profilePath":"https://image.tmdb.org/t/p/original/rlxoULLYfqGCsHGMly2yYW9Hf6x.jpg"},{"castId":8,"character":"Davina Vinyard","creditId":"52fe4213c3a36847f8002197","gender":1,"id":823,"name":"Jennifer Lien","order":4,"profilePath":"https://image.tmdb.org/t/p/original/bWpM2LJBDMPzs7IX9ZDEyLUUMul.jpg"},{"castId":9,"character":"Seth Ryan","creditId":"52fe4213c3a36847f800219b","gender":2,"id":824,"name":"Ethan Suplee","order":5,"profilePath":"https://image.tmdb.org/t/p/original/tdfUFBwYm9rjwD2YtVl9LYoyoE2.jpg"},{"castId":10,"character":"Cameron Alexander","creditId":"52fe4213c3a36847f800219f","gender":2,"id":825,"name":"Stacy Keach","order":6,"profilePath":"https://image.tmdb.org/t/p/original/9G0urAVBBP9FRX1wrxkdZCj3VCW.jpg"},{"castId":11,"character":"Stacey","creditId":"52fe4213c3a36847f80021a3","gender":1,"id":826,"name":"Fairuza Balk","order":7,"profilePath":"https://image.tmdb.org/t/p/original/cpeniV326TyPyzryxgbAWiXmLkz.jpg"},{"castId":12,"character":"Murray","creditId":"52fe4213c3a36847f80021a7","gender":2,"id":827,"name":"Elliott Gould","order":8,"profilePath":"https://image.tmdb.org/t/p/original/bo5jSwWyFRsKVAkELT9n7AKQqMk.jpg"},{"castId":13,"character":"Lamont","creditId":"52fe4213c3a36847f80021ab","gender":2,"id":828,"name":"Guy Torry","order":9,"profilePath":"https://image.tmdb.org/t/p/original/aNpthnwYd2oHN8KhYBUAhzViNzT.jpg"}]},{"tmdbId":"74","genres":[{"id":12,"name":"Adventure"},{"id":53,"name":"Thriller"},{"id":878,"name":"Science Fiction"}],"originalLanguage":"en","originalTitle":"War of the Worlds","overview":"Ray Ferrier is a divorced dockworker and less-than-perfect father. Soon after his ex-wife and her new husband drop of his teenage son and young daughter for a rare weekend visit, a strange and powerful lightning storm touches down.","posterUrl":"https://image.tmdb.org/t/p/original/xXMM9KY2eq1SDOQif9zO91YOBA8.jpg","productionCompanies":"[{'name': 'Paramount Pictures', 'id': 4}, {'name': 'DreamWorks SKG', 'id': 27}, {'name': 'Cruise/Wagner Productions', 'id': 44}, {'name': 'Amblin Entertainment', 'id': 56}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2005-06-28","runtimeMinutes":116,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"They're already here.","title":"War of the Worlds","cast":[{"castId":13,"character":"Ray Ferrier","creditId":"52fe4213c3a36847f800226b","gender":2,"id":500,"name":"Tom Cruise","order":0,"profilePath":"https://image.tmdb.org/t/p/original/3oWEuo0e8Nx8JvkqYCDec2iMY6K.jpg"},{"castId":14,"character":"Rachel Ferrier","creditId":"52fe4213c3a36847f800226f","gender":1,"id":501,"name":"Dakota Fanning","order":1,"profilePath":"https://image.tmdb.org/t/p/original/upEXoCEO9vfVPvGeTJJMuIQahrz.jpg"},{"castId":15,"character":"Mary-Ann","creditId":"52fe4213c3a36847f8002273","gender":1,"id":502,"name":"Miranda Otto","order":2,"profilePath":"https://image.tmdb.org/t/p/original/pp6WCSXw3EHOSNSG5jUDspuiFgf.jpg"},{"castId":16,"character":"Robbie Ferrier","creditId":"52fe4213c3a36847f8002277","gender":2,"id":503,"name":"Justin Chatwin","order":3,"profilePath":"https://image.tmdb.org/t/p/original/rG1NK1SD1XPnAxpb6rrxwqpF4ni.jpg"},{"castId":17,"character":"Harlan Ogilvy","creditId":"52fe4213c3a36847f800227b","gender":2,"id":504,"name":"Tim Robbins","order":4,"profilePath":"https://image.tmdb.org/t/p/original/7pirFsBQe93TSfzu404Hgcj1YWj.jpg"},{"castId":18,"character":"News Producer","creditId":"52fe4213c3a36847f800227f","gender":1,"id":505,"name":"Camillia Sanes","order":5,"profilePath":"https://image.tmdb.org/t/p/original/sAfepcAIRTSc5mezPNBYWf17aIS.jpg"},{"castId":19,"character":"Ferry Captain","creditId":"52fe4213c3a36847f8002283","gender":2,"id":506,"name":"John Scurti","order":6,"profilePath":"https://image.tmdb.org/t/p/original/eX86aQIuaZORhGRpf7TiGdZ2K6g.jpg"},{"castId":20,"character":"Narrator (Voice)","creditId":"52fe4213c3a36847f8002287","gender":2,"id":192,"name":"Morgan Freeman","order":7,"profilePath":"https://image.tmdb.org/t/p/original/oGJQhOpT8S1M56tvSsbEBePV5O1.jpg"},{"castId":24,"character":"Older Woman","creditId":"52fe4214c3a36847f800229d","gender":1,"id":33500,"name":"Takayo Fischer","order":8,"profilePath":"https://image.tmdb.org/t/p/original/gNIFc8rWnFzplkisEonefyxjmG1.jpg"},{"castId":25,"character":"Julio","creditId":"52fe4214c3a36847f80022a1","gender":2,"id":75604,"name":"Yul Vazquez","order":9,"profilePath":"https://image.tmdb.org/t/p/original/d4MEi4pl2YvY7zHniiN6rQ4lQVx.jpg"}]},{"tmdbId":"75","genres":[{"id":35,"name":"Comedy"},{"id":14,"name":"Fantasy"},{"id":878,"name":"Science Fiction"}],"originalLanguage":"en","originalTitle":"Mars Attacks!","overview":"'We come in peace' is not what those green men from Mars mean when they invade our planet, armed with irresistible weapons and a cruel sense of humor.  This star studded cast must play victim to the alien’s fun and games in this comedy homage to science fiction films of the '50s and '60s.","posterUrl":"https://image.tmdb.org/t/p/original/gaTuHICwavPUmqQzPZFEXKSRwsC.jpg","productionCompanies":"[{'name': 'Tim Burton Productions', 'id': 8601}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1996-12-12","runtimeMinutes":106,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Français'}]","status":"Released","tagline":"Nice planet. We'll take it!","title":"Mars Attacks!","cast":[{"castId":6,"character":"President James Dale / Art Land","creditId":"52fe4214c3a36847f8002301","gender":2,"id":514,"name":"Jack Nicholson","order":0,"profilePath":"https://image.tmdb.org/t/p/original/hINAkm21g80UbaAxA6rHhOaT5Jk.jpg"},{"castId":7,"character":"First Lady Marsha Dale","creditId":"52fe4214c3a36847f8002305","gender":1,"id":515,"name":"Glenn Close","order":1,"profilePath":"https://image.tmdb.org/t/p/original/fF6tCfuvuUhaePm5onUNnIE4FvL.jpg"},{"castId":8,"character":"Barbara Land","creditId":"52fe4214c3a36847f8002309","gender":1,"id":516,"name":"Annette Bening","order":2,"profilePath":"https://image.tmdb.org/t/p/original/q8pCSQzGLrhgtVXBKzMnwfoeBlH.jpg"},{"castId":9,"character":"Professor Donald Kessler","creditId":"52fe4214c3a36847f800230d","gender":2,"id":517,"name":"Pierce Brosnan","order":3,"profilePath":"https://image.tmdb.org/t/p/original/1JXL0zrA26JjdoX8sqf57fJRDVM.jpg"},{"castId":10,"character":"Rude Gambler","creditId":"52fe4214c3a36847f8002311","gender":2,"id":518,"name":"Danny DeVito","order":4,"profilePath":"https://image.tmdb.org/t/p/original/zKuyzmKzPLG7RJo7lbbHjx6CCZc.jpg"},{"castId":11,"character":"Press Secretary Jerry Ross","creditId":"52fe4214c3a36847f8002315","gender":2,"id":519,"name":"Martin Short","order":5,"profilePath":"https://image.tmdb.org/t/p/original/oZQorXBjTxrdkTJFpoDwOcQ91ji.jpg"},{"castId":12,"character":"Nathalie Lake","creditId":"52fe4214c3a36847f8002319","gender":1,"id":520,"name":"Sarah Jessica Parker","order":6,"profilePath":"https://image.tmdb.org/t/p/original/chjO3dDzkT7UzAZk1AGjXdbezyg.jpg"},{"castId":13,"character":"Jason Stone","creditId":"52fe4214c3a36847f800231d","gender":2,"id":521,"name":"Michael J. Fox","order":7,"profilePath":"https://image.tmdb.org/t/p/original/aeN1cA04vVXKrVy1SuS1JOhABBs.jpg"},{"castId":14,"character":"General Decker","creditId":"52fe4214c3a36847f8002321","gender":2,"id":522,"name":"Rod Steiger","order":8,"profilePath":"https://image.tmdb.org/t/p/original/cc96tXM1O0PAoyog9hzo1GgSwB5.jpg"},{"castId":15,"character":"Himself","creditId":"52fe4214c3a36847f8002325","gender":2,"id":523,"name":"Tom Jones","order":9,"profilePath":"https://image.tmdb.org/t/p/original/gP3WE86AGBTP70wuW083UcgymaG.jpg"}]},{"tmdbId":"76","genres":[{"id":18,"name":"Drama"},{"id":10749,"name":"Romance"}],"originalLanguage":"en","originalTitle":"Before Sunrise","overview":"A dialogue marathon of a film, this fairytale love story of an American boy and French girl. During a day and a night together in Vienna their two hearts collide.","posterUrl":"https://image.tmdb.org/t/p/original/jsQy4ZbPHA8hE2O6QU05PpofI61.jpg","productionCompanies":"[{'name': 'Detour Film Production', 'id': 98}, {'name': 'Warner Bros.', 'id': 6194}]","productionCountries":"[{'iso_3166_1': 'AT', 'name': 'Austria'}, {'iso_3166_1': 'CH', 'name': 'Switzerland'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1995-01-27","runtimeMinutes":105,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'fr', 'name': 'Français'}]","status":"Released","tagline":"Can the greatest romance of your life last only one night?","title":"Before Sunrise","cast":[{"castId":4,"character":"Jesse","creditId":"52fe4214c3a36847f80023e5","gender":2,"id":569,"name":"Ethan Hawke","order":0,"profilePath":"https://image.tmdb.org/t/p/original/kcby6VYk6Gb0036nUyh8chY5ZAJ.jpg"},{"castId":16,"character":"Céline","creditId":"52fe4214c3a36847f800241b","gender":1,"id":1146,"name":"Julie Delpy","order":1,"profilePath":"https://image.tmdb.org/t/p/original/4LfbFCLGHHkHVikRdgxbN6hbatl.jpg"},{"castId":5,"character":"Wife on Train","creditId":"52fe4214c3a36847f80023e9","gender":1,"id":571,"name":"Andrea Eckert","order":2,"profilePath":"https://image.tmdb.org/t/p/original/u0iAF5UEgeksEsCoG5ahKIB6vG8.jpg"},{"castId":6,"character":"Husband on Train","creditId":"52fe4214c3a36847f80023ed","gender":0,"id":572,"name":"Hanno Pöschl","order":3,"profilePath":"https://image.tmdb.org/t/p/original/buRLxMErGVmNI2EW0dfJbrMX8cs.jpg"},{"castId":7,"character":"Guy on Bridge","creditId":"52fe4214c3a36847f80023f1","gender":2,"id":573,"name":"Karl Bruckschwaiger","order":4,"profilePath":null},{"castId":8,"character":"Guy on Bridge","creditId":"52fe4214c3a36847f80023f5","gender":0,"id":574,"name":"Tex Rubinowitz","order":5,"profilePath":null},{"castId":28,"character":"Palm Reader","creditId":"52fe4214c3a36847f8002457","gender":1,"id":146859,"name":"Erni Mangold","order":6,"profilePath":"https://image.tmdb.org/t/p/original/rmI238EVjuzK5vfTKOFPsIoFAqW.jpg"},{"castId":21,"character":"Street Poet","creditId":"52fe4214c3a36847f8002437","gender":0,"id":3735,"name":"Dominik Castell","order":7,"profilePath":null},{"castId":24,"character":"Bartender","creditId":"52fe4214c3a36847f8002443","gender":0,"id":3738,"name":"Haymon Maria Buttinger","order":8,"profilePath":"https://image.tmdb.org/t/p/original/n633VJ8A2u6zmWXakNXZFbClxii.jpg"},{"castId":23,"character":"Guitar Player in Club","creditId":"52fe4214c3a36847f800243f","gender":0,"id":3737,"name":"Harold Waiglein","order":9,"profilePath":null}]},{"tmdbId":"77","genres":[{"id":9648,"name":"Mystery"},{"id":53,"name":"Thriller"}],"originalLanguage":"en","originalTitle":"Memento","overview":"Suffering short-term memory loss after a head injury, Leonard Shelby embarks on a grim quest to find the lowlife who murdered his wife in this gritty, complex thriller that packs more knots than a hangman's noose. To carry out his plan, Shelby snaps Polaroids of people and places, jotting down contextual notes on the backs of photos to aid in his search and jog his memory. He even tattoos his own body in a desperate bid to remember.","posterUrl":"https://image.tmdb.org/t/p/original/fQMSaP88cf1nz4qwuNEEFtazuDM.jpg","productionCompanies":"[{'name': 'Summit Entertainment', 'id': 491}, {'name': 'Newmarket Capital Group', 'id': 506}, {'name': 'Team Todd', 'id': 598}, {'name': 'I Remember Productions', 'id': 34446}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2000-10-11","runtimeMinutes":113,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Some memories are best forgotten.","title":"Memento","cast":[{"castId":4,"character":"Leonard","creditId":"52fe4214c3a36847f80024db","gender":2,"id":529,"name":"Guy Pearce","order":0,"profilePath":"https://image.tmdb.org/t/p/original/qB0BGUhMph48P1msl9wHRgL4AeT.jpg"},{"castId":5,"character":"Natalie","creditId":"52fe4214c3a36847f80024df","gender":1,"id":530,"name":"Carrie-Anne Moss","order":1,"profilePath":"https://image.tmdb.org/t/p/original/pgyBbrapYBoGvg5M3OIvVQ5Ne7m.jpg"},{"castId":6,"character":"Teddy Gammell","creditId":"52fe4214c3a36847f80024e3","gender":2,"id":532,"name":"Joe Pantoliano","order":2,"profilePath":"https://image.tmdb.org/t/p/original/zBvDX2HWepvW9im6ikgoyOL2Xj0.jpg"},{"castId":7,"character":"Burt","creditId":"52fe4214c3a36847f80024e7","gender":2,"id":534,"name":"Mark Boone Junior","order":3,"profilePath":"https://image.tmdb.org/t/p/original/riibKDljUzdSfIZygymhKx9yNPx.jpg"},{"castId":10,"character":"Sammy","creditId":"52fe4214c3a36847f80024f3","gender":2,"id":537,"name":"Stephen Tobolowsky","order":4,"profilePath":"https://image.tmdb.org/t/p/original/fUodC7wMUZLAXnm4ONCxF5haCtC.jpg"},{"castId":11,"character":"Mrs. Jankis","creditId":"52fe4214c3a36847f80024f7","gender":1,"id":538,"name":"Harriet Sansom Harris","order":5,"profilePath":"https://image.tmdb.org/t/p/original/cDLHSu4lDpLdvNt1oiNFAngOYPN.jpg"},{"castId":13,"character":"Dodd","creditId":"52fe4214c3a36847f80024ff","gender":2,"id":540,"name":"Callum Keith Rennie","order":6,"profilePath":"https://image.tmdb.org/t/p/original/80DeOyHJPv44RUYW7tpEpINv7sX.jpg"},{"castId":16,"character":"Jimmy","creditId":"52fe4214c3a36847f800250b","gender":2,"id":544,"name":"Larry Holden","order":7,"profilePath":"https://image.tmdb.org/t/p/original/8yV3Rfvt0iWJZwO6jt2YnkdzdzL.jpg"},{"castId":9,"character":"Leonard's Wife","creditId":"52fe4214c3a36847f80024ef","gender":1,"id":536,"name":"Jorja Fox","order":8,"profilePath":"https://image.tmdb.org/t/p/original/jq3W7EF5juYapLoA779QHmAbAGL.jpg"},{"castId":8,"character":"Waiter","creditId":"52fe4214c3a36847f80024eb","gender":2,"id":535,"name":"Russ Fega","order":9,"profilePath":"https://image.tmdb.org/t/p/original/7JFQueMbXqGIz16wKBlok7WfNNz.jpg"}]},{"tmdbId":"78","genres":[{"id":878,"name":"Science Fiction"},{"id":18,"name":"Drama"},{"id":53,"name":"Thriller"}],"originalLanguage":"en","originalTitle":"Blade Runner","overview":"In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.","posterUrl":"https://image.tmdb.org/t/p/original/p64TtbZGCElxQHpAMWmDHkWJlH2.jpg","productionCompanies":"[{'name': 'Shaw Brothers', 'id': 5798}, {'name': 'Warner Bros.', 'id': 6194}, {'name': 'The Ladd Company', 'id': 7965}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}, {'iso_3166_1': 'HK', 'name': 'Hong Kong'}, {'iso_3166_1': 'GB', 'name': 'United Kingdom'}]","releaseDate":"1982-06-25","runtimeMinutes":117,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'cn', 'name': '广州话 / 廣州話'}, {'iso_639_1': 'ja', 'name': '日本語'}, {'iso_639_1': 'hu', 'name': 'Magyar'}]","status":"Released","tagline":"Man has made his match... now it's his problem.","title":"Blade Runner","cast":[{"castId":6,"character":"Rick Deckard","creditId":"52fe4214c3a36847f800259f","gender":2,"id":3,"name":"Harrison Ford","order":0,"profilePath":"https://image.tmdb.org/t/p/original/7CcoVFTogQgex2kJkXKMe8qHZrC.jpg"},{"castId":7,"character":"Roy Batty","creditId":"52fe4214c3a36847f80025a3","gender":2,"id":585,"name":"Rutger Hauer","order":1,"profilePath":"https://image.tmdb.org/t/p/original/2x1S2VAUvZXZuDjZ4E9iEKINvNu.jpg"},{"castId":8,"character":"Rachael","creditId":"52fe4214c3a36847f80025a7","gender":1,"id":586,"name":"Sean Young","order":2,"profilePath":"https://image.tmdb.org/t/p/original/4zgkRFQruIlaJ4JakNZLoKJ70fH.jpg"},{"castId":9,"character":"Gaff","creditId":"52fe4214c3a36847f80025ab","gender":2,"id":587,"name":"Edward James Olmos","order":3,"profilePath":"https://image.tmdb.org/t/p/original/i7zKqsFqL5L1HPmAMeSA1xZzlD5.jpg"},{"castId":42,"character":"Bryant","creditId":"5402bd1bc3a3684360004649","gender":2,"id":588,"name":"M. Emmet Walsh","order":4,"profilePath":"https://image.tmdb.org/t/p/original/dLf79xlsmE40rog0gryjxsZJzml.jpg"},{"castId":11,"character":"Pris","creditId":"52fe4214c3a36847f80025b3","gender":1,"id":589,"name":"Daryl Hannah","order":5,"profilePath":"https://image.tmdb.org/t/p/original/4LLmp6AQdlj6ueGCRbVRSGvvFSt.jpg"},{"castId":12,"character":"J.F. Sebastian","creditId":"52fe4214c3a36847f80025b7","gender":2,"id":590,"name":"William Sanderson","order":6,"profilePath":"https://image.tmdb.org/t/p/original/vR2EnhcPUqkIeXmHf10Sokeuw1J.jpg"},{"castId":13,"character":"Leon Kowalski","creditId":"52fe4214c3a36847f80025bb","gender":2,"id":591,"name":"Brion James","order":7,"profilePath":"https://image.tmdb.org/t/p/original/4Vm3Zq6arXq3jyFfq3yJgH9Jj2l.jpg"},{"castId":14,"character":"Eldon Tyrell","creditId":"52fe4214c3a36847f80025bf","gender":0,"id":592,"name":"Joe Turkel","order":8,"profilePath":"https://image.tmdb.org/t/p/original/p8qRmki4MnEwiuTcGJH0LZVZxdz.jpg"},{"castId":15,"character":"Zhora","creditId":"52fe4214c3a36847f80025c3","gender":1,"id":593,"name":"Joanna Cassidy","order":9,"profilePath":"https://image.tmdb.org/t/p/original/p7CQ4EmGmtAaR3YWKRJTnmnRU8i.jpg"}]},{"tmdbId":"79","genres":[{"id":18,"name":"Drama"},{"id":12,"name":"Adventure"},{"id":28,"name":"Action"},{"id":36,"name":"History"}],"originalLanguage":"zh","originalTitle":"英雄","overview":"One man defeated three assassins who sought to murder the most powerful warlord in pre-unified China.","posterUrl":"https://image.tmdb.org/t/p/original/xkJnow23eDxwQXB0iIWAWkBF47y.jpg","productionCompanies":"[{'name': 'Beijing New Picture Film Co. Ltd.', 'id': 724}, {'name': 'China Film Co-Production Corporation', 'id': 2269}]","productionCountries":"[{'iso_3166_1': 'CN', 'name': 'China'}]","releaseDate":"2002-12-19","runtimeMinutes":99,"spokenLanguages":"[{'iso_639_1': 'zh', 'name': '普通话'}]","status":"Released","tagline":"One man's strength will unite an empire.","title":"Hero","cast":[{"castId":6,"character":"Nameless","creditId":"52fe4214c3a36847f8002697","gender":2,"id":1336,"name":"Jet Li","order":0,"profilePath":"https://image.tmdb.org/t/p/original/5himGJzSuLoHwqacTz7sXWqgeMt.jpg"},{"castId":7,"character":"Broken Sword","creditId":"52fe4214c3a36847f800269b","gender":2,"id":1337,"name":"Tony Leung Chiu-Wai","order":1,"profilePath":"https://image.tmdb.org/t/p/original/xSEwMBLHdiKjyG4YVCsjpaT5fgD.jpg"},{"castId":32,"character":"Flying Snow","creditId":"56f10ad9925141184a00263e","gender":1,"id":1338,"name":"Maggie Cheung","order":2,"profilePath":"https://image.tmdb.org/t/p/original/mAixvJBjroKNRqkZA4BXeWNA7ZS.jpg"},{"castId":11,"character":"Sky","creditId":"52fe4214c3a36847f80026ab","gender":2,"id":1341,"name":"Donnie Yen","order":3,"profilePath":"https://image.tmdb.org/t/p/original/vlKBbOc0htUsDGvcxeULcFXDMRo.jpg"},{"castId":9,"character":"Moon","creditId":"52fe4214c3a36847f80026a3","gender":1,"id":1339,"name":"Zhang Ziyi","order":4,"profilePath":"https://image.tmdb.org/t/p/original/xrmbGcVtVAZtZ1OCm6T2IEfXSe1.jpg"},{"castId":10,"character":"King of Qin","creditId":"52fe4214c3a36847f80026a7","gender":2,"id":1340,"name":"Chen Dao-Ming","order":5,"profilePath":"https://image.tmdb.org/t/p/original/scPOGddPDvmN46v2uJ2vRubm65c.jpg"},{"castId":12,"character":"Old Scholar","creditId":"52fe4214c3a36847f80026af","gender":0,"id":1342,"name":"Liu Zhong Yuan","order":6,"profilePath":null},{"castId":13,"character":"Old Servant","creditId":"52fe4214c3a36847f80026b3","gender":0,"id":1343,"name":"Zheng Tia Yong","order":7,"profilePath":null},{"castId":14,"character":"Prime Minister","creditId":"52fe4214c3a36847f80026b7","gender":0,"id":1344,"name":"Yan Qin","order":8,"profilePath":null},{"castId":15,"character":"General","creditId":"52fe4214c3a36847f80026bb","gender":0,"id":1345,"name":"Chang Xiao Yang","order":9,"profilePath":null}]},{"tmdbId":"80","genres":[{"id":18,"name":"Drama"},{"id":10749,"name":"Romance"}],"originalLanguage":"en","originalTitle":"Before Sunset","overview":"Nine years ago two strangers met by chance and spent a night in Vienna that ended before sunrise. They are about to meet for the first time since. Now they have one afternoon to find out if they belong together.","posterUrl":"https://image.tmdb.org/t/p/original/gycdE1ARByGQcK4fYR2mgpU6OO.jpg","productionCompanies":"[{'name': 'Castle Rock Entertainment', 'id': 97}, {'name': 'Detour Film Production', 'id': 98}, {'name': 'Warner Independent Pictures (WIP)', 'id': 11509}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2004-02-10","runtimeMinutes":80,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Français'}]","status":"Released","tagline":"What if you had a second chance with the one that got away?","title":"Before Sunset","cast":[{"castId":8,"character":"Jesse","creditId":"52fe4214c3a36847f800276b","gender":2,"id":569,"name":"Ethan Hawke","order":0,"profilePath":"https://image.tmdb.org/t/p/original/kcby6VYk6Gb0036nUyh8chY5ZAJ.jpg"},{"castId":13,"character":"Céline","creditId":"52fe4214c3a36847f800276f","gender":1,"id":1146,"name":"Julie Delpy","order":1,"profilePath":"https://image.tmdb.org/t/p/original/4LfbFCLGHHkHVikRdgxbN6hbatl.jpg"},{"castId":26,"character":"Bookstore Manager","creditId":"52fe4214c3a36847f80027a3","gender":2,"id":649,"name":"Vernon Dobtcheff","order":2,"profilePath":"https://image.tmdb.org/t/p/original/lcPki2IDdmRvqiBbv2RUBfgm3IH.jpg"},{"castId":27,"character":"Journalist #1","creditId":"52fe4214c3a36847f80027a7","gender":1,"id":651,"name":"Louise Lemoine Torrès","order":3,"profilePath":"https://image.tmdb.org/t/p/original/lUU4XcNDTHy7iuOYOiNq6nu1mhQ.jpg"},{"castId":34,"character":"Journalist #2","creditId":"57e342e6c3a3687587001662","gender":2,"id":654,"name":"Rodolphe Pauly","order":4,"profilePath":"https://image.tmdb.org/t/p/original/rpJVhXRvIuwaU8fuQp7npGmFH0A.jpg"},{"castId":29,"character":"Waitress","creditId":"52fe4215c3a36847f80027af","gender":1,"id":657,"name":"Mariane Plasteig","order":5,"profilePath":"https://image.tmdb.org/t/p/original/k1A8oJItsnQDI8cBsZRLxZHklQv.jpg"},{"castId":30,"character":"Philippe","creditId":"52fe4215c3a36847f80027b3","gender":0,"id":3728,"name":"Diabolo","order":6,"profilePath":"https://image.tmdb.org/t/p/original/yiHOZ7DI9mNo6UiGaNFY2Ufy9vG.jpg"},{"castId":31,"character":"Boat Attendant","creditId":"52fe4215c3a36847f80027b7","gender":0,"id":3729,"name":"Denis Evrard","order":7,"profilePath":null},{"castId":32,"character":"Man at Grill","creditId":"52fe4215c3a36847f80027bb","gender":2,"id":3730,"name":"Albert Delpy","order":8,"profilePath":"https://image.tmdb.org/t/p/original/eydDphfX1BM7Q0HvLKFGhAIJGlW.jpg"},{"castId":33,"character":"Woman in Courtyard","creditId":"52fe4215c3a36847f80027bf","gender":1,"id":3731,"name":"Marie Pillet","order":9,"profilePath":"https://image.tmdb.org/t/p/original/39EBKcbGa8PUIRL2q0dF31LZ4fQ.jpg"}]},{"tmdbId":"81","genres":[{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":14,"name":"Fantasy"}],"originalLanguage":"ja","originalTitle":"風の谷のナウシカ","overview":"After a global war, the seaside kingdom known as the Valley Of The Wind remains one of the last strongholds on Earth untouched by a poisonous jungle and the powerful insects that guard it. Led by the courageous Princess Nausicaa, the people of the Valley engage in an epic struggle to restore the bond between humanity and Earth.","posterUrl":"https://image.tmdb.org/t/p/original/hnYowHwLq0iUWriAHtiiCWsI2dP.jpg","productionCompanies":"[{'name': 'Topcraft', 'id': 29}]","productionCountries":"[{'iso_3166_1': 'JP', 'name': 'Japan'}]","releaseDate":"1984-03-11","runtimeMinutes":117,"spokenLanguages":"[{'iso_639_1': 'ja', 'name': '日本語'}]","status":"Released","tagline":"","title":"Nausicaä of the Valley of the Wind","cast":[{"castId":5,"character":"Nausicaä (voice)","creditId":"52fe4215c3a36847f800281f","gender":0,"id":613,"name":"Sumi Shimamoto","order":0,"profilePath":"https://image.tmdb.org/t/p/original/cB1JXMD6Eyb1ONKfsj32Lai4AfV.jpg"},{"castId":9,"character":"Mito (voice)","creditId":"52fe4215c3a36847f800282f","gender":0,"id":617,"name":"Ichirō Nagai","order":1,"profilePath":"https://image.tmdb.org/t/p/original/dI7cAwwF6LJ9uQs0BB6jbr8mghm.jpg"},{"castId":8,"character":"Yupa (voice)","creditId":"52fe4215c3a36847f800282b","gender":2,"id":616,"name":"Gorō Naya","order":2,"profilePath":"https://image.tmdb.org/t/p/original/emnvHXMyXPnJteqypnp5LreX4YG.jpg"},{"castId":14,"character":"Asbel (voice)","creditId":"52fe4215c3a36847f8002843","gender":0,"id":622,"name":"Yōji Matsuda","order":3,"profilePath":"https://image.tmdb.org/t/p/original/wZijOHyaFIVKJY9yfyIsusamFbv.jpg"},{"castId":16,"character":"Kushana (voice)","creditId":"52fe4215c3a36847f800284b","gender":0,"id":624,"name":"Yoshiko Sakakibara","order":4,"profilePath":"https://image.tmdb.org/t/p/original/aocre8nV2T4VpIHasdguw1W7edM.jpg"},{"castId":17,"character":"Kurotowa (voice)","creditId":"52fe4215c3a36847f800284f","gender":0,"id":625,"name":"Iemasa Kayumi","order":5,"profilePath":"https://image.tmdb.org/t/p/original/doji21RoWXS4gjWkBLyClNicHKW.jpg"},{"castId":7,"character":"Oh-Baba (voice)","creditId":"52fe4215c3a36847f8002827","gender":1,"id":615,"name":"Hisako Kyouda","order":6,"profilePath":"https://image.tmdb.org/t/p/original/3HC0RARybfpcA1D0vS349UHwCea.jpg"},{"castId":6,"character":"Jihl (voice)","creditId":"52fe4215c3a36847f8002823","gender":0,"id":614,"name":"Mahito Tsujimura","order":7,"profilePath":"https://image.tmdb.org/t/p/original/dqVhQYTCYWOCuEofBZ5O3Xdgd3y.jpg"},{"castId":15,"character":"Lastel (voice)","creditId":"52fe4215c3a36847f8002847","gender":0,"id":623,"name":"Mîna Tominaga","order":8,"profilePath":"https://image.tmdb.org/t/p/original/yTdkX8n81mdhY8YZtuEVRihoYKB.jpg"},{"castId":10,"character":"Goru (voice)","creditId":"52fe4215c3a36847f8002833","gender":0,"id":618,"name":"Kōhei Miyauchi","order":9,"profilePath":"https://image.tmdb.org/t/p/original/AeGLykfdziKEpQ8NY2uTfE5Lril.jpg"}]},{"tmdbId":"82","genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":80,"name":"Crime"},{"id":53,"name":"Thriller"}],"originalLanguage":"en","originalTitle":"Miami Vice","overview":"Miami Vice is a feature film based on the 1980s action drama TV series. The film tells the story of vice detectives Crockett and Tubbs and how their personal and professional lives are dangerously getting mixed.","posterUrl":"https://image.tmdb.org/t/p/original/3BsNsigWcET4tKLZZhJegw7eOjF.jpg","productionCompanies":"[{'name': 'Universal Pictures', 'id': 33}, {'name': 'Forward Pass', 'id': 675}, {'name': 'Motion Picture ETA Produktionsgesellschaft', 'id': 52844}, {'name': 'Foqus Arte Digital', 'id': 52845}, {'name': 'Metropolis Films', 'id': 52846}]","productionCountries":"[{'iso_3166_1': 'UY', 'name': 'Uruguay'}, {'iso_3166_1': 'US', 'name': 'United States of America'}, {'iso_3166_1': 'DE', 'name': 'Germany'}, {'iso_3166_1': 'PY', 'name': 'Paraguay'}]","releaseDate":"2006-07-27","runtimeMinutes":134,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}]","status":"Released","tagline":"No Law. No Rules. No Order.","title":"Miami Vice","cast":[{"castId":5,"character":"Detective Ricardo \"Rico\" Tubbs","creditId":"52fe4215c3a36847f800291f","gender":2,"id":134,"name":"Jamie Foxx","order":0,"profilePath":"https://image.tmdb.org/t/p/original/cDRGXCNrwf1p9jouw9GzhU2vWP7.jpg"},{"castId":25,"character":"Detective James \"Sonny\" Crockett","creditId":"52fe4215c3a36847f8002977","gender":2,"id":72466,"name":"Colin Farrell","order":1,"profilePath":"https://image.tmdb.org/t/p/original/gYHo4N7oJ83hqcElhh9wGqZLklK.jpg"},{"castId":7,"character":"Isabella","creditId":"52fe4215c3a36847f8002923","gender":1,"id":643,"name":"Gong Li","order":2,"profilePath":"https://image.tmdb.org/t/p/original/dgGWKMAP5vbgACkXTazZXt3JQoT.jpg"},{"castId":9,"character":"Montoya","creditId":"52fe4215c3a36847f800292d","gender":2,"id":16867,"name":"Luis Tosar","order":3,"profilePath":"https://image.tmdb.org/t/p/original/tRNvw26QeN80JwWHoamk262hjjq.jpg"},{"castId":10,"character":"Trudy Joplin","creditId":"52fe4215c3a36847f8002931","gender":1,"id":2038,"name":"Naomie Harris","order":4,"profilePath":"https://image.tmdb.org/t/p/original/t8j6ASArJpCXkAiE00zpdNr1XkE.jpg"},{"castId":11,"character":"Zito","creditId":"52fe4215c3a36847f8002935","gender":2,"id":15009,"name":"Justin Theroux","order":5,"profilePath":"https://image.tmdb.org/t/p/original/mq1iRC3rxdTFi3M0A2EedobJEx1.jpg"},{"castId":12,"character":"FBI Agent Fujima","creditId":"52fe4215c3a36847f8002939","gender":2,"id":8785,"name":"Ciarán Hinds","order":6,"profilePath":"https://image.tmdb.org/t/p/original/h5n8B12WoY1UAZjzSVEup4vsoBw.jpg"},{"castId":13,"character":"Jose Yero","creditId":"52fe4215c3a36847f800293d","gender":2,"id":40543,"name":"John Ortiz","order":7,"profilePath":"https://image.tmdb.org/t/p/original/6EXZm45aPUOERq2rCrUnkz3sGoc.jpg"},{"castId":14,"character":"Gina Calabrese","creditId":"52fe4215c3a36847f8002941","gender":1,"id":65421,"name":"Elizabeth Rodriguez","order":8,"profilePath":"https://image.tmdb.org/t/p/original/lwJXQ7DDRY9W4pdzQzJKdeKuCFl.jpg"},{"castId":15,"character":"Switek","creditId":"52fe4215c3a36847f8002945","gender":2,"id":17941,"name":"Domenick Lombardozzi","order":9,"profilePath":"https://image.tmdb.org/t/p/original/wDRD21PpTrP8MDAskbQ0NsftM57.jpg"}]},{"tmdbId":"83","genres":[{"id":18,"name":"Drama"},{"id":53,"name":"Thriller"}],"originalLanguage":"en","originalTitle":"Open Water","overview":"Two divers are left out at sea without a boat. There’s nothing but water for miles, unless they look at what’s underneath them...","posterUrl":"https://image.tmdb.org/t/p/original/hua2eluUhiLvKqwHFPV2aTiY8pp.jpg","productionCompanies":"[{'name': 'Plunge Pictures LLC', 'id': 22376}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2004-08-06","runtimeMinutes":79,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Scream all you want.","title":"Open Water","cast":[{"castId":3,"character":"Susan Watkins","creditId":"52fe4215c3a36847f800299b","gender":1,"id":644,"name":"Blanchard Ryan","order":0,"profilePath":"https://image.tmdb.org/t/p/original/96iDgfr3ub8doHljZYpsAzawDw7.jpg"},{"castId":4,"character":"Daniel Kintner","creditId":"52fe4215c3a36847f800299f","gender":2,"id":646,"name":"Daniel Travis","order":1,"profilePath":"https://image.tmdb.org/t/p/original/lvgCjRKCdT0vxIyQLjwRkwqLVio.jpg"},{"castId":9,"character":"Seth","creditId":"52fe4215c3a36847f80029bb","gender":2,"id":1187,"name":"Saul Stein","order":2,"profilePath":"https://image.tmdb.org/t/p/original/8OcSrkpuyqWbl5wldBoSLDBbMrK.jpg"},{"castId":10,"character":"Davis","creditId":"54ca2ea0c3a36879df00b911","gender":2,"id":1420204,"name":"Michael E. Williamson","order":3,"profilePath":null},{"castId":11,"character":"Linda","creditId":"55567e17c3a368776f0040eb","gender":0,"id":590483,"name":"Christina Zenato","order":4,"profilePath":null},{"castId":12,"character":"Junior","creditId":"55567e2c9251412ff9002136","gender":0,"id":64101,"name":"John Charles","order":5,"profilePath":null}]},{"tmdbId":"85","genres":[{"id":12,"name":"Adventure"},{"id":28,"name":"Action"}],"originalLanguage":"en","originalTitle":"Raiders of the Lost Ark","overview":"When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.","posterUrl":"https://image.tmdb.org/t/p/original/44sKJOGP3fTm4QXBcIuqu0RkdP7.jpg","productionCompanies":"[{'name': 'Lucasfilm', 'id': 1}, {'name': 'Paramount Pictures', 'id': 4}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1981-06-12","runtimeMinutes":115,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}, {'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'he', 'name': 'עִבְרִית'}, {'iso_639_1': 'ar', 'name': 'العربية'}, {'iso_639_1': 'ne', 'name': ''}]","status":"Released","tagline":"Indiana Jones - the new hero from the creators of JAWS and STAR WARS.","title":"Raiders of the Lost Ark","cast":[{"castId":2,"character":"Indy","creditId":"52fe4215c3a36847f8002a05","gender":2,"id":3,"name":"Harrison Ford","order":0,"profilePath":"https://image.tmdb.org/t/p/original/7CcoVFTogQgex2kJkXKMe8qHZrC.jpg"},{"castId":3,"character":"Marion Ravenwood","creditId":"52fe4215c3a36847f8002a09","gender":1,"id":650,"name":"Karen Allen","order":1,"profilePath":"https://image.tmdb.org/t/p/original/6TzVbX52cAOqe9LH6GZ5xutbW5G.jpg"},{"castId":4,"character":"Dr. René Belloq","creditId":"52fe4215c3a36847f8002a0d","gender":0,"id":652,"name":"Paul Freeman","order":2,"profilePath":"https://image.tmdb.org/t/p/original/gWRX09kyrzTFFehwE53cJtps2fx.jpg"},{"castId":5,"character":"Major Arnold Toht","creditId":"52fe4215c3a36847f8002a11","gender":2,"id":653,"name":"Ronald Lacey","order":3,"profilePath":"https://image.tmdb.org/t/p/original/nQTtqJP7Go9cnvq9252IXqY9dMM.jpg"},{"castId":6,"character":"Sallah","creditId":"52fe4215c3a36847f8002a15","gender":2,"id":655,"name":"John Rhys-Davies","order":4,"profilePath":"https://image.tmdb.org/t/p/original/zZ67PuoFfik9QlZyfaEsFBC1yVJ.jpg"},{"castId":7,"character":"Dr. Marcus Brody","creditId":"52fe4215c3a36847f8002a19","gender":2,"id":656,"name":"Denholm Elliott","order":5,"profilePath":"https://image.tmdb.org/t/p/original/oR6GnGecov6Mjg0cLasCawyz3mF.jpg"},{"castId":8,"character":"Colonel Dietrich","creditId":"52fe4215c3a36847f8002a1d","gender":2,"id":659,"name":"Wolf Kahler","order":6,"profilePath":"https://image.tmdb.org/t/p/original/uqHI2PLeGFxdjlw0qIk1D17NjWb.jpg"},{"castId":9,"character":"Gobler","creditId":"52fe4215c3a36847f8002a21","gender":2,"id":660,"name":"Anthony Higgins","order":7,"profilePath":"https://image.tmdb.org/t/p/original/1cjZmBBVlUCZlLqX4Jn1EOdVulw.jpg"},{"castId":10,"character":"Barranca / Monkey Man","creditId":"52fe4215c3a36847f8002a25","gender":0,"id":661,"name":"Vic Tablian","order":8,"profilePath":"https://image.tmdb.org/t/p/original/2QHEhXgTbp4BvRw1tiQeduqaXxP.jpg"},{"castId":11,"character":"Col. Musgrove","creditId":"52fe4215c3a36847f8002a29","gender":0,"id":662,"name":"Don Fellows","order":9,"profilePath":"https://image.tmdb.org/t/p/original/sQgCr3xz2LVomGMKCvb7rLD9dMX.jpg"}]},{"tmdbId":"86","genres":[{"id":18,"name":"Drama"},{"id":10749,"name":"Romance"}],"originalLanguage":"de","originalTitle":"Elementarteilchen","overview":"Based on Michel Houellebecq's controversial novel, Atomised (aka The Elementary Particles) focuses on Michael and Bruno, two very different half-brothers and their disturbed sexuality.  After a chaotic childhood with a hippie mother only caring for her affairs, Michael, a molecular biologist, is more interested in genes than women, while Bruno is obsessed with his sexual desires, but mostly finds his satisfaction with prostitutes.  But Bruno's life changes when he gets to know the experienced Christiane.  In the meantime, Michael meets Annabelle, the love of his youth, again.","posterUrl":"https://image.tmdb.org/t/p/original/lDmFUWI0xtA9updU0WWfzE0LmA0.jpg","productionCompanies":"[{'name': 'MOOVIE - the art of entertainment GmbH', 'id': 74}, {'name': 'Medienfonds German Film Productions GmbH & Co. KG', 'id': 75}]","productionCountries":"[{'iso_3166_1': 'DE', 'name': 'Germany'}, {'iso_3166_1': 'IE', 'name': 'Ireland'}]","releaseDate":"2006-02-10","runtimeMinutes":105,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'de', 'name': 'Deutsch'}]","status":"Released","tagline":"","title":"The Elementary Particles","cast":[{"castId":5,"character":"Michael Djerzinski","creditId":"52fe4215c3a36847f8002b0d","gender":0,"id":675,"name":"Christian Ulmen","order":0,"profilePath":"https://image.tmdb.org/t/p/original/8kVG8RGO47mSRZ1ut0rxzbmFkKo.jpg"},{"castId":6,"character":"Bruno Klement","creditId":"52fe4215c3a36847f8002b11","gender":2,"id":677,"name":"Moritz Bleibtreu","order":1,"profilePath":"https://image.tmdb.org/t/p/original/rol9YK1QeR2mkrqAJ0F9RsDTMqp.jpg"},{"castId":7,"character":"Christiane","creditId":"52fe4215c3a36847f8002b15","gender":1,"id":678,"name":"Martina Gedeck","order":2,"profilePath":"https://image.tmdb.org/t/p/original/wVQYelDX5hHHGYJx6o7eJPBLZOp.jpg"},{"castId":8,"character":"Annabelle","creditId":"52fe4215c3a36847f8002b19","gender":1,"id":679,"name":"Franka Potente","order":3,"profilePath":"https://image.tmdb.org/t/p/original/9ES9W38WA8vIz6zMhlfpeJ29hrW.jpg"},{"castId":10,"character":"Jane","creditId":"52fe4215c3a36847f8002b21","gender":1,"id":681,"name":"Nina Hoss","order":4,"profilePath":"https://image.tmdb.org/t/p/original/n0iOzWeNemXRTt4fgs7Tt2swtr1.jpg"},{"castId":9,"character":"Dr. Schäfer","creditId":"52fe4215c3a36847f8002b1d","gender":1,"id":680,"name":"Corinna Harfouch","order":5,"profilePath":"https://image.tmdb.org/t/p/original/oEXqVyUnBLP1JxRVhpT6B3pIe37.jpg"},{"castId":11,"character":"Bruno's Father","creditId":"52fe4215c3a36847f8002b25","gender":2,"id":682,"name":"Uwe Ochsenknecht","order":6,"profilePath":"https://image.tmdb.org/t/p/original/nPaQx2K0UodicKPlrAXQjjkilF7.jpg"},{"castId":12,"character":"Yogini","creditId":"52fe4215c3a36847f8002b29","gender":1,"id":683,"name":"Jasmin Tabatabai","order":7,"profilePath":"https://image.tmdb.org/t/p/original/g5tw24xOVxTTq2AueeykYc4zkym.jpg"},{"castId":13,"character":"Michael (young)","creditId":"52fe4215c3a36847f8002b2d","gender":2,"id":684,"name":"Tom Schilling","order":8,"profilePath":"https://image.tmdb.org/t/p/original/8bukspHuL4rRoYISukmL2OgLgnh.jpg"},{"castId":44,"character":"Bruno (young)","creditId":"53d3f1a0c3a3686b8800173f","gender":0,"id":574408,"name":"Thomas Drechsel","order":9,"profilePath":null}]},{"tmdbId":"87","genres":[{"id":12,"name":"Adventure"},{"id":28,"name":"Action"}],"originalLanguage":"en","originalTitle":"Indiana Jones and the Temple of Doom","overview":"After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees – and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.","posterUrl":"https://image.tmdb.org/t/p/original/f2nTRKk2zGdUTE7tLJ5EGGSuKA6.jpg","productionCompanies":"[{'name': 'Lucasfilm', 'id': 1}, {'name': 'Paramount Pictures', 'id': 4}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1984-05-23","runtimeMinutes":118,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'si', 'name': ''}]","status":"Released","tagline":"If adventure has a name... it must be Indiana Jones.","title":"Indiana Jones and the Temple of Doom","cast":[{"castId":4,"character":"Indiana Jones","creditId":"52fe4215c3a36847f8002c09","gender":2,"id":3,"name":"Harrison Ford","order":0,"profilePath":"https://image.tmdb.org/t/p/original/7CcoVFTogQgex2kJkXKMe8qHZrC.jpg"},{"castId":5,"character":"Willie Scott","creditId":"52fe4215c3a36847f8002c0d","gender":1,"id":689,"name":"Kate Capshaw","order":1,"profilePath":"https://image.tmdb.org/t/p/original/fR9ZNjuM67noFAXtZP4Ov5FzRPV.jpg"},{"castId":6,"character":"Short Round","creditId":"52fe4215c3a36847f8002c11","gender":0,"id":690,"name":"Jonathan Ke Quan","order":2,"profilePath":"https://image.tmdb.org/t/p/original/1cKtw6cBhWPHtjUBiY3si8odVIE.jpg"},{"castId":7,"character":"Mola Ram","creditId":"52fe4215c3a36847f8002c15","gender":0,"id":691,"name":"Amrish Puri","order":3,"profilePath":"https://image.tmdb.org/t/p/original/nrRQUwZcPYUWfpgpL2g7Grkb3Mz.jpg"},{"castId":8,"character":"Chattar Lal","creditId":"52fe4215c3a36847f8002c19","gender":0,"id":693,"name":"Roshan Seth","order":4,"profilePath":"https://image.tmdb.org/t/p/original/64HQvZuu8IeImXFe7vXgs4aZlUo.jpg"},{"castId":9,"character":"Captain Blumburtt","creditId":"52fe4215c3a36847f8002c1d","gender":2,"id":694,"name":"Philip Stone","order":5,"profilePath":"https://image.tmdb.org/t/p/original/2thWE9JSWeYj1Oea0uwNtF8ntrJ.jpg"},{"castId":10,"character":"Lao Che","creditId":"52fe4215c3a36847f8002c21","gender":0,"id":695,"name":"Roy Chiao","order":6,"profilePath":"https://image.tmdb.org/t/p/original/6gBxdImc8eGHeDDEJGFiGrIwx6O.jpg"},{"castId":11,"character":"Wu Han","creditId":"52fe4215c3a36847f8002c25","gender":0,"id":696,"name":"David Yip","order":7,"profilePath":"https://image.tmdb.org/t/p/original/s2ApWZ620ZMe8nwvKM2y8TwjenE.jpg"},{"castId":12,"character":"Kao Kan","creditId":"52fe4215c3a36847f8002c29","gender":2,"id":11397,"name":"Ric Young","order":8,"profilePath":"https://image.tmdb.org/t/p/original/nqhFfFdZ73cEjLjAuLW19f3d7EO.jpg"},{"castId":13,"character":"Chen","creditId":"52fe4215c3a36847f8002c2d","gender":0,"id":699,"name":"Chua Kah Joo","order":9,"profilePath":"https://image.tmdb.org/t/p/original/sVJUeMRFGYuCTD3jvrf4hRpteky.jpg"}]},{"tmdbId":"88","genres":[{"id":18,"name":"Drama"},{"id":10402,"name":"Music"},{"id":10749,"name":"Romance"}],"originalLanguage":"en","originalTitle":"Dirty Dancing","overview":"Expecting the usual tedium that accompanies a summer in the Catskills with her family, 17-year-old Frances 'Baby' Houseman is surprised to find herself stepping into the shoes of a professional hoofer – and unexpectedly falling in love.","posterUrl":"https://image.tmdb.org/t/p/original/zMHIZHxKv6kdE3JFQqZFqj7OswK.jpg","productionCompanies":"[{'name': 'Great American Films Limited Partnership', 'id': 137}, {'name': 'Vestron Pictures', 'id': 12360}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1987-08-21","runtimeMinutes":100,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Have the time of your life.","title":"Dirty Dancing","cast":[{"castId":7,"character":"Baby (Frances) Houseman","creditId":"52fe4215c3a36847f8002d0f","gender":1,"id":722,"name":"Jennifer Grey","order":0,"profilePath":"https://image.tmdb.org/t/p/original/sVghvsFVIttc45q93FQXEYm610g.jpg"},{"castId":8,"character":"Johnny Castle","creditId":"52fe4216c3a36847f8002d13","gender":2,"id":723,"name":"Patrick Swayze","order":1,"profilePath":"https://image.tmdb.org/t/p/original/3mpjuYiGfglDeaGjwFmSBBzwbc1.jpg"},{"castId":10,"character":"Dr. Jake Houseman","creditId":"52fe4216c3a36847f8002d1b","gender":2,"id":725,"name":"Jerry Orbach","order":2,"profilePath":"https://image.tmdb.org/t/p/original/95n3bLxEv1kRCwyfpA30J1IEc7N.jpg"},{"castId":9,"character":"Penny Johnson","creditId":"52fe4216c3a36847f8002d17","gender":1,"id":724,"name":"Cynthia Rhodes","order":3,"profilePath":"https://image.tmdb.org/t/p/original/zt0z8Mj1aQC8SHeYAo6vph9Hd6.jpg"},{"castId":11,"character":"Max Kellerman","creditId":"52fe4216c3a36847f8002d1f","gender":2,"id":726,"name":"Jack Weston","order":4,"profilePath":"https://image.tmdb.org/t/p/original/9vUJ02A8LfYKA0tMToyVVRlAF9v.jpg"},{"castId":12,"character":"Lisa Houseman","creditId":"52fe4216c3a36847f8002d23","gender":1,"id":727,"name":"Jane Brucker","order":5,"profilePath":"https://image.tmdb.org/t/p/original/ll7qdMGtJS10sxJs3eYEj9TrALn.jpg"},{"castId":13,"character":"Marjorie Houseman","creditId":"52fe4216c3a36847f8002d27","gender":1,"id":728,"name":"Kelly Bishop","order":6,"profilePath":"https://image.tmdb.org/t/p/original/lllJhhLZqAgjvNiarfZuYapT0Tr.jpg"},{"castId":14,"character":"Neil Kellerman","creditId":"52fe4216c3a36847f8002d2b","gender":2,"id":729,"name":"Lonny Price","order":7,"profilePath":"https://image.tmdb.org/t/p/original/lC6huJbgseVOA35LNeXy2e2cgOY.jpg"},{"castId":15,"character":"Robbie Gould","creditId":"52fe4216c3a36847f8002d2f","gender":0,"id":730,"name":"Max Cantor","order":8,"profilePath":"https://image.tmdb.org/t/p/original/x0ETedhRTA21vCrvlPxh97s1rjH.jpg"},{"castId":25,"character":"Tito Suarez","creditId":"52fe4216c3a36847f8002d5f","gender":0,"id":4198,"name":"Charles 'Honi' Coles","order":9,"profilePath":"https://image.tmdb.org/t/p/original/4nD8ff4h8WMdacWKQjPJZlcVlVZ.jpg"}]},{"tmdbId":"89","genres":[{"id":12,"name":"Adventure"},{"id":28,"name":"Action"}],"originalLanguage":"en","originalTitle":"Indiana Jones and the Last Crusade","overview":"When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.","posterUrl":"https://image.tmdb.org/t/p/original/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg","productionCompanies":"[{'name': 'Lucasfilm', 'id': 1}, {'name': 'Paramount Pictures', 'id': 4}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1989-05-24","runtimeMinutes":127,"spokenLanguages":"[{'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'el', 'name': 'ελληνικά'}, {'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"The man with the hat is back. And this time, he's bringing his Dad.","title":"Indiana Jones and the Last Crusade","cast":[{"castId":8,"character":"Indiana Jones","creditId":"52fe4216c3a36847f8002e1d","gender":2,"id":3,"name":"Harrison Ford","order":0,"profilePath":"https://image.tmdb.org/t/p/original/7CcoVFTogQgex2kJkXKMe8qHZrC.jpg"},{"castId":9,"character":"Professor Henry Jones","creditId":"52fe4216c3a36847f8002e21","gender":2,"id":738,"name":"Sean Connery","order":1,"profilePath":"https://image.tmdb.org/t/p/original/ce84udJZ9QRSR44jxwK2apM3DM8.jpg"},{"castId":10,"character":"Dr. Marcus Brody","creditId":"52fe4216c3a36847f8002e25","gender":2,"id":656,"name":"Denholm Elliott","order":2,"profilePath":"https://image.tmdb.org/t/p/original/oR6GnGecov6Mjg0cLasCawyz3mF.jpg"},{"castId":11,"character":"Dr. Elsa Schneider","creditId":"52fe4216c3a36847f8002e29","gender":1,"id":739,"name":"Alison Doody","order":3,"profilePath":"https://image.tmdb.org/t/p/original/iXP0rdo8vRLU0YwWejFNwmEQtyV.jpg"},{"castId":12,"character":"Sallah","creditId":"52fe4216c3a36847f8002e2d","gender":2,"id":655,"name":"John Rhys-Davies","order":4,"profilePath":"https://image.tmdb.org/t/p/original/zZ67PuoFfik9QlZyfaEsFBC1yVJ.jpg"},{"castId":13,"character":"Walter Donovan","creditId":"52fe4216c3a36847f8002e31","gender":2,"id":740,"name":"Julian Glover","order":5,"profilePath":"https://image.tmdb.org/t/p/original/2sQWrB4of8O2k7DGwJ3OdGJi2Mj.jpg"},{"castId":14,"character":"Indiana Jones (young)","creditId":"52fe4216c3a36847f8002e35","gender":2,"id":741,"name":"River Phoenix","order":6,"profilePath":"https://image.tmdb.org/t/p/original/qfokbmRwRvmIVsLHScshxLPAB3C.jpg"},{"castId":15,"character":"Vogel","creditId":"52fe4216c3a36847f8002e39","gender":2,"id":742,"name":"Michael Byrne","order":7,"profilePath":"https://image.tmdb.org/t/p/original/rmgL88xFEk0iBOcCr7d9V6WfaOi.jpg"},{"castId":16,"character":"Kazim","creditId":"52fe4216c3a36847f8002e3d","gender":2,"id":743,"name":"Kevork Malikyan","order":8,"profilePath":"https://image.tmdb.org/t/p/original/aq3elIciFeSrvbVyDNeoozQqLnm.jpg"},{"castId":17,"character":"Grail Knight","creditId":"52fe4216c3a36847f8002e41","gender":2,"id":744,"name":"Robert Eddison","order":9,"profilePath":"https://image.tmdb.org/t/p/original/oONf8tM0Kxvg8CaLfpT7sx09Iug.jpg"}]},{"tmdbId":"90","genres":[{"id":28,"name":"Action"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"}],"originalLanguage":"en","originalTitle":"Beverly Hills Cop","overview":"Tough-talking Detroit cop Axel Foley heads to the rarified world of Beverly Hills in his beat-up Chevy Nova to investigate a friend's murder. But soon, he realizes he's stumbled onto something much more complicated. Bungling rookie detective Billy Rosewood joins the fish-out-of-water Axel and shows him the West Los Angeles ropes.","posterUrl":"https://image.tmdb.org/t/p/original/s7n0rS2Ff85SuSpqYG3ndkmdQf4.jpg","productionCompanies":"[{'name': 'Paramount Pictures', 'id': 4}, {'name': 'Eddie Murphy Productions', 'id': 30}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1984-11-29","runtimeMinutes":105,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"The Heat Is On!","title":"Beverly Hills Cop","cast":[{"castId":6,"character":"Det. Axel Foley","creditId":"52fe4216c3a36847f8002f03","gender":2,"id":776,"name":"Eddie Murphy","order":0,"profilePath":"https://image.tmdb.org/t/p/original/bsi706zdqs0KAPdOsqz6AkLNcFF.jpg"},{"castId":7,"character":"Det. William 'Billy' Rosewood","creditId":"52fe4216c3a36847f8002f07","gender":2,"id":777,"name":"Judge Reinhold","order":1,"profilePath":"https://image.tmdb.org/t/p/original/dra8yOHLV8yqXSdwBueXeaDsLXV.jpg"},{"castId":8,"character":"Det. Sgt. John Taggart","creditId":"52fe4216c3a36847f8002f0b","gender":2,"id":778,"name":"John Ashton","order":2,"profilePath":"https://image.tmdb.org/t/p/original/omfIdOt1F8LDkb7AMZTtLDiyJ3O.jpg"},{"castId":10,"character":"Lt. Andrew Bogomil","creditId":"52fe4216c3a36847f8002f13","gender":2,"id":780,"name":"Ronny Cox","order":3,"profilePath":"https://image.tmdb.org/t/p/original/1uvHfK4dUw9VTl0kvBw9j8kg9Ek.jpg"},{"castId":11,"character":"Jeffrey","creditId":"52fe4216c3a36847f8002f17","gender":2,"id":781,"name":"Paul Reiser","order":4,"profilePath":"https://image.tmdb.org/t/p/original/fr53dQQrDGfETgbliCktwKqteRU.jpg"},{"castId":17,"character":"Insp. Douglas Todd","creditId":"52fe4216c3a36847f8002f2f","gender":2,"id":787,"name":"Gilbert R. Hill","order":5,"profilePath":"https://image.tmdb.org/t/p/original/gPGt25TwE2lcdAYwiaNe0jDBGCs.jpg"},{"castId":9,"character":"Jeannette 'Jenny' Summers","creditId":"52fe4216c3a36847f8002f0f","gender":1,"id":779,"name":"Lisa Eilbacher","order":6,"profilePath":"https://image.tmdb.org/t/p/original/kyiePU42bPqcGCRJfta1Ev2m7if.jpg"},{"castId":12,"character":"Victor Maitland","creditId":"52fe4216c3a36847f8002f1b","gender":2,"id":782,"name":"Steven Berkoff","order":7,"profilePath":"https://image.tmdb.org/t/p/original/jiYMK9prj46Qe4gmbKtBDE6YlSr.jpg"},{"castId":15,"character":"Mikey Tandino","creditId":"52fe4216c3a36847f8002f27","gender":2,"id":785,"name":"James Russo","order":8,"profilePath":"https://image.tmdb.org/t/p/original/tV4X0uEuqu6XYml3yEs9rsG9EzW.jpg"},{"castId":13,"character":"Zack, Maitland's Thug","creditId":"52fe4216c3a36847f8002f1f","gender":2,"id":783,"name":"Jonathan Banks","order":9,"profilePath":"https://image.tmdb.org/t/p/original/s6K0lromCtmSTzuX9hig8OPiRsC.jpg"}]},{"tmdbId":"91","genres":[{"id":99,"name":"Documentary"}],"originalLanguage":"es","originalTitle":"Las Hurdes","overview":"Las Hurdes – Tierra Sin Pan / Land Without Bread / Unpromised Land is a surrealist documentary filmed in Spain in 1932. It is the result of a two month trip through the Las Hurdes region. The film shows the contrasts between the village and the towns in the north of Extremadura, Salamanca and along the border of Portugal.","posterUrl":"https://image.tmdb.org/t/p/original/AszNP3bBHwdkzX9mL514Zfk859s.jpg","productionCompanies":"[{'name': 'Ramón Acín', 'id': 85869}]","productionCountries":"[{'iso_3166_1': 'ES', 'name': 'Spain'}]","releaseDate":"1933-12-01","runtimeMinutes":29,"spokenLanguages":"[{'iso_639_1': 'es', 'name': 'Español'}]","status":"Released","tagline":"","title":"Land Without Bread","cast":[{"castId":8,"character":"(voice)","creditId":"52fe4216c3a36847f8002fb9","gender":2,"id":174923,"name":"Abel Jacquin","order":0,"profilePath":"https://image.tmdb.org/t/p/original/tahFsaQzPkd1g8gy8wso6iboHuG.jpg"},{"castId":9,"character":"(voice)","creditId":"52fe4216c3a36847f8002fbd","gender":2,"id":174950,"name":"Alexandre O'Neill","order":1,"profilePath":"https://image.tmdb.org/t/p/original/ifROvLAzVEXQLev5JtE3MSDPYuv.jpg"}]},{"tmdbId":"92","genres":[{"id":99,"name":"Documentary"}],"originalLanguage":"en","originalTitle":"Megacities","overview":"Megacities is a documentary about the slums of five different metropolitan cities.","posterUrl":"https://image.tmdb.org/t/p/original/svOFuJ0W3UTLqof10DVejjq94sw.jpg","productionCompanies":"[]","productionCountries":"[{'iso_3166_1': 'AT', 'name': 'Austria'}]","releaseDate":"1998-08-12","runtimeMinutes":94,"spokenLanguages":"[{'iso_639_1': 'ru', 'name': 'Pусский'}, {'iso_639_1': 'es', 'name': 'Español'}, {'iso_639_1': 'hi', 'name': 'हिन्दी'}, {'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"","title":"Megacities","cast":[{"castId":6,"character":"","creditId":"52fe4216c3a36847f8002ff9","gender":0,"id":806,"name":"Shankar Loutakke","order":0,"profilePath":null}]},{"tmdbId":"93","genres":[{"id":80,"name":"Crime"},{"id":18,"name":"Drama"},{"id":9648,"name":"Mystery"},{"id":53,"name":"Thriller"}],"originalLanguage":"en","originalTitle":"Anatomy of a Murder","overview":"The film pits a humble small-town lawyer against a hard-headed big city prosecutor. Emotions flare as a jealous army lieutenant pleads innocent to murdering the rapist of his seductive, beautiful wife.","posterUrl":"https://image.tmdb.org/t/p/original/kDFnM2zlHZirR2ItTo56lyrxuAS.jpg","productionCompanies":"[{'name': 'Columbia Pictures', 'id': 5}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1959-07-01","runtimeMinutes":160,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"No search of human emotions has ever probed so deeply, so truthfully as ... Anatomy of a Murder.","title":"Anatomy of a Murder","cast":[{"castId":2,"character":"Paul Biegler","creditId":"52fe4216c3a36847f8003055","gender":2,"id":854,"name":"James Stewart","order":0,"profilePath":"https://image.tmdb.org/t/p/original/d3wCljbO6DMbeUSwjhiCuoivUpL.jpg"},{"castId":3,"character":"Laura Manion","creditId":"52fe4216c3a36847f8003059","gender":1,"id":855,"name":"Lee Remick","order":1,"profilePath":"https://image.tmdb.org/t/p/original/wc76zmRcyFf2v6RqeSDgY85CP9m.jpg"},{"castId":4,"character":"Lt. Frederick Manion","creditId":"52fe4216c3a36847f800305d","gender":2,"id":856,"name":"Ben Gazzara","order":2,"profilePath":"https://image.tmdb.org/t/p/original/dbmfyjTC3PSBvHOjlAMI0I0eZ6T.jpg"},{"castId":5,"character":"Parnell Emmett McCarthy","creditId":"52fe4216c3a36847f8003061","gender":2,"id":857,"name":"Arthur O'Connell","order":3,"profilePath":"https://image.tmdb.org/t/p/original/rWoLpGwQlIZSiPIzJqE1yIMiDxr.jpg"},{"castId":8,"character":"Maida Rutledge","creditId":"52fe4216c3a36847f800306f","gender":1,"id":860,"name":"Eve Arden","order":4,"profilePath":"https://image.tmdb.org/t/p/original/48QTc9iIS3nuJOE8FiAV6qPFPuj.jpg"},{"castId":9,"character":"Mary Pilant","creditId":"52fe4216c3a36847f8003073","gender":1,"id":861,"name":"Kathryn Grant","order":5,"profilePath":"https://image.tmdb.org/t/p/original/ipxKu36kscEQo0IKvSEEl6aV5Ez.jpg"},{"castId":10,"character":"Claude Dancer","creditId":"52fe4216c3a36847f8003077","gender":2,"id":862,"name":"George C. Scott","order":6,"profilePath":"https://image.tmdb.org/t/p/original/mINHwB258stf5M4AZcpzXK1GRjW.jpg"},{"castId":11,"character":"Dr. Matthew Smith","creditId":"52fe4216c3a36847f800307b","gender":2,"id":863,"name":"Orson Bean","order":7,"profilePath":"https://image.tmdb.org/t/p/original/mFClcHz7Tn9iaT0qkuGYXxcszeV.jpg"},{"castId":12,"character":"George Lemon","creditId":"52fe4216c3a36847f800307f","gender":2,"id":866,"name":"Russ Brown","order":8,"profilePath":"https://image.tmdb.org/t/p/original/hUfteo0f4VaeWdnDHAqPx5ftgwe.jpg"},{"castId":24,"character":"Alphonse Paquette","creditId":"56b8320fc3a36806f100e3dd","gender":0,"id":8608,"name":"Murray Hamilton","order":9,"profilePath":"https://image.tmdb.org/t/p/original/zSkAeg5lGbyZWwYZYunl3HR8jHb.jpg"}]},{"tmdbId":"95","genres":[{"id":28,"name":"Action"},{"id":53,"name":"Thriller"},{"id":878,"name":"Science Fiction"},{"id":12,"name":"Adventure"}],"originalLanguage":"en","originalTitle":"Armageddon","overview":"When an asteroid threatens to collide with Earth, NASA honcho Dan Truman determines the only way to stop it is to drill into its surface and detonate a nuclear bomb. This leads him to renowned driller Harry Stamper, who agrees to helm the dangerous space mission provided he can bring along his own hotshot crew. Among them is the cocksure A.J. who Harry thinks isn't good enough for his daughter, until the mission proves otherwise.","posterUrl":"https://image.tmdb.org/t/p/original/coINnuCzcw5FMHBty8hcudMOBnO.jpg","productionCompanies":"[{'name': 'Jerry Bruckheimer Films', 'id': 130}, {'name': 'Touchstone Pictures', 'id': 9195}, {'name': 'Valhalla Motion Pictures', 'id': 11533}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1998-07-01","runtimeMinutes":151,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'ru', 'name': 'Pусский'}]","status":"Released","tagline":"The Earth's Darkest Day Will Be Man's Finest Hour","title":"Armageddon","cast":[{"castId":7,"character":"Harry S. Stamper","creditId":"52fe4216c3a36847f800316b","gender":2,"id":62,"name":"Bruce Willis","order":0,"profilePath":"https://image.tmdb.org/t/p/original/2B7RySy2WMVJKKEFN2XA3IFb8w0.jpg"},{"castId":8,"character":"Dan Truman, NASA Administrator","creditId":"52fe4216c3a36847f800316f","gender":2,"id":879,"name":"Billy Bob Thornton","order":1,"profilePath":"https://image.tmdb.org/t/p/original/gPCPKXh7HvobcrldRGj5QchW34p.jpg"},{"castId":9,"character":"A.J. Frost","creditId":"52fe4216c3a36847f8003173","gender":2,"id":880,"name":"Ben Affleck","order":2,"profilePath":"https://image.tmdb.org/t/p/original/cPuPt6mYJ83DjvO3hbjNGug6Fbi.jpg"},{"castId":10,"character":"Grace Stamper","creditId":"52fe4216c3a36847f8003177","gender":1,"id":882,"name":"Liv Tyler","order":3,"profilePath":"https://image.tmdb.org/t/p/original/jtVSUwsQCaYcO2nMyZe7SBGvYVU.jpg"},{"castId":11,"character":"Charles 'Chick' Chapple","creditId":"52fe4216c3a36847f800317b","gender":2,"id":883,"name":"Will Patton","order":4,"profilePath":"https://image.tmdb.org/t/p/original/qpycaaWP1oUx1Wd2lMBfQtR7qDO.jpg"},{"castId":12,"character":"Rockhound","creditId":"52fe4216c3a36847f800317f","gender":2,"id":884,"name":"Steve Buscemi","order":5,"profilePath":"https://image.tmdb.org/t/p/original/e19GfOWzMNN1hi7B9Ci62hMvtXs.jpg"},{"castId":13,"character":"Colonel William Sharp, Shuttle Freedom Pilot","creditId":"52fe4216c3a36847f8003183","gender":2,"id":886,"name":"William Fichtner","order":6,"profilePath":"https://image.tmdb.org/t/p/original/apj1bgzZI2efSdJolfp6KjhG8CF.jpg"},{"castId":15,"character":"Jayotis 'Bear' Kurleenbear","creditId":"52fe4216c3a36847f8003187","gender":2,"id":61981,"name":"Michael Clarke Duncan","order":7,"profilePath":"https://image.tmdb.org/t/p/original/A0fXStrmFubDRFS8UeRW7xvcf6S.jpg"},{"castId":16,"character":"Lev Andropov, Russian Cosmonaut","creditId":"52fe4216c3a36847f800318b","gender":2,"id":53,"name":"Peter Stormare","order":8,"profilePath":"https://image.tmdb.org/t/p/original/dDR0brp5L7fXDyEywrhjQv01LSg.jpg"},{"castId":31,"character":"Oscar Choi","creditId":"52fe4216c3a36847f80031e3","gender":2,"id":887,"name":"Owen Wilson","order":9,"profilePath":"https://image.tmdb.org/t/p/original/j7oYgvfDiO34VcFdSB7GhM2CSle.jpg"}]},{"tmdbId":"96","genres":[{"id":28,"name":"Action"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"}],"originalLanguage":"en","originalTitle":"Beverly Hills Cop II","overview":"Detroit cop, Axel Foley heads for the land of sunshine and palm trees to find out who shot police Captain Andrew Bogomil. Thanks to a couple of old friends, Axel's investigation uncovers a series of robberies masterminded by a heartless weapons kingpin – and the chase is on.","posterUrl":"https://image.tmdb.org/t/p/original/2y1z1baxKT0coTTRlnkI6McnR9f.jpg","productionCompanies":"[{'name': 'Paramount Pictures', 'id': 4}, {'name': 'Eddie Murphy Productions', 'id': 30}, {'name': 'Don Simpson/Jerry Bruckheimer Films', 'id': 10288}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1987-05-18","runtimeMinutes":100,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"","title":"Beverly Hills Cop II","cast":[{"castId":17,"character":"Det. Axel Foley","creditId":"52fe4217c3a36847f80032a9","gender":2,"id":776,"name":"Eddie Murphy","order":0,"profilePath":"https://image.tmdb.org/t/p/original/bsi706zdqs0KAPdOsqz6AkLNcFF.jpg"},{"castId":18,"character":"Det. William 'Billy' Rosewood","creditId":"52fe4217c3a36847f80032ad","gender":2,"id":777,"name":"Judge Reinhold","order":1,"profilePath":"https://image.tmdb.org/t/p/original/dra8yOHLV8yqXSdwBueXeaDsLXV.jpg"},{"castId":19,"character":"Det. Sgt. John Taggart","creditId":"52fe4217c3a36847f80032b1","gender":2,"id":778,"name":"John Ashton","order":2,"profilePath":"https://image.tmdb.org/t/p/original/omfIdOt1F8LDkb7AMZTtLDiyJ3O.jpg"},{"castId":21,"character":"Capt./Chief Andrew Bogomil","creditId":"52fe4217c3a36847f80032b9","gender":2,"id":780,"name":"Ronny Cox","order":3,"profilePath":"https://image.tmdb.org/t/p/original/1uvHfK4dUw9VTl0kvBw9j8kg9Ek.jpg"},{"castId":24,"character":"Det. Jeffrey Friedman","creditId":"52fe4217c3a36847f80032c5","gender":2,"id":781,"name":"Paul Reiser","order":4,"profilePath":"https://image.tmdb.org/t/p/original/fr53dQQrDGfETgbliCktwKqteRU.jpg"},{"castId":25,"character":"Insp. Douglas Todd","creditId":"52fe4217c3a36847f80032c9","gender":2,"id":787,"name":"Gilbert R. Hill","order":5,"profilePath":"https://image.tmdb.org/t/p/original/gPGt25TwE2lcdAYwiaNe0jDBGCs.jpg"},{"castId":22,"character":"Karla Fry","creditId":"52fe4217c3a36847f80032bd","gender":1,"id":921,"name":"Brigitte Nielsen","order":6,"profilePath":"https://image.tmdb.org/t/p/original/x8EMp47BDyEZ457lgZLqx9gValr.jpg"},{"castId":23,"character":"Charles 'Chip' Cain","creditId":"52fe4217c3a36847f80032c1","gender":2,"id":923,"name":"Dean Stockwell","order":7,"profilePath":"https://image.tmdb.org/t/p/original/gooE10UOH6t4geqsEbji9NiQalP.jpg"},{"castId":20,"character":"Maxwell Dent","creditId":"52fe4217c3a36847f80032b5","gender":2,"id":920,"name":"Jürgen Prochnow","order":8,"profilePath":"https://image.tmdb.org/t/p/original/aar3n9NEQdwWVvPOne3kLLXm75N.jpg"},{"castId":29,"character":"Police Chief Harold Lutz","creditId":"52fe4217c3a36847f80032d9","gender":2,"id":922,"name":"Allen Garfield","order":9,"profilePath":"https://image.tmdb.org/t/p/original/wa8WAH20QGm1fLPR5Wrbja5C5rx.jpg"}]},{"tmdbId":"97","genres":[{"id":878,"name":"Science Fiction"},{"id":28,"name":"Action"},{"id":12,"name":"Adventure"}],"originalLanguage":"en","originalTitle":"Tron","overview":"As Kevin Flynn searches for proof that he invented a hit video game, he is \"digitalized\" by a laser and finds himself inside The Grid, where programs suffer under the tyrannical rule of the Master Control Program. With the help of TRON, a security program, Flynn seeks to free The Grid from the MCP.","posterUrl":"https://image.tmdb.org/t/p/original/cTF8lpXvAwT1SLH9kVFZZl0AO0D.jpg","productionCompanies":"[{'name': 'Walt Disney Pictures', 'id': 2}, {'name': 'Lisberger/Kushner', 'id': 558}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1982-07-09","runtimeMinutes":96,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"A world inside the computer where man has never been.  Until now.","title":"Tron","cast":[{"castId":1,"character":"Kevin Flynn/Clu","creditId":"52fe4217c3a36847f800332b","gender":2,"id":1229,"name":"Jeff Bridges","order":0,"profilePath":"https://image.tmdb.org/t/p/original/xms1RAY6q7Lzp7wNeRCB0kzhucn.jpg"},{"castId":2,"character":"Alan Bradley/Tron","creditId":"52fe4217c3a36847f800332f","gender":2,"id":2547,"name":"Bruce Boxleitner","order":1,"profilePath":"https://image.tmdb.org/t/p/original/8CWvXiTru0EPH0M9ecLQ84E0YWA.jpg"},{"castId":3,"character":"Ed Dillinger/Sark/Voice of Master Control Program","creditId":"52fe4217c3a36847f8003333","gender":2,"id":2076,"name":"David Warner","order":2,"profilePath":"https://image.tmdb.org/t/p/original/wgp2AlWKveLBOcs8YNuLeZiLsGL.jpg"},{"castId":4,"character":"Lora/Yori","creditId":"52fe4217c3a36847f8003337","gender":0,"id":2548,"name":"Cindy Morgan","order":3,"profilePath":"https://image.tmdb.org/t/p/original/s32OPPwn3p3mvJ0ot61a4smz6aj.jpg"},{"castId":5,"character":"Dr. Walter Gibbs/Dumont","creditId":"52fe4217c3a36847f800333b","gender":0,"id":2549,"name":"Barnard Hughes","order":4,"profilePath":"https://image.tmdb.org/t/p/original/jvHz3TjqROc3Wixeq6dbFBas3EB.jpg"},{"castId":6,"character":"Ram/Popcorn Co-Worker","creditId":"52fe4217c3a36847f800333f","gender":2,"id":2550,"name":"Dan Shor","order":5,"profilePath":"https://image.tmdb.org/t/p/original/aIs4IgAlAaXE1RAdFrVUR4uZKiW.jpg"},{"castId":26,"character":"Crom","creditId":"52fe4217c3a36847f80033b5","gender":2,"id":12876,"name":"Peter Jurasik","order":6,"profilePath":"https://image.tmdb.org/t/p/original/cv1n6CVSgPqAiYfYlu9V207mfmj.jpg"},{"castId":27,"character":"Peter/Sark's Lieutenant","creditId":"52fe4217c3a36847f80033b9","gender":0,"id":12877,"name":"Tony Stephano","order":7,"profilePath":null},{"castId":28,"character":"Warrior #1","creditId":"52fe4217c3a36847f80033bd","gender":0,"id":12878,"name":"Craig Chudy","order":8,"profilePath":null},{"castId":29,"character":"Warrior #2","creditId":"52fe4217c3a36847f80033c1","gender":0,"id":12879,"name":"Vince Deadrick Jr.","order":9,"profilePath":"https://image.tmdb.org/t/p/original/z4HIKOQGQj8QXozFpQhj43xlmHm.jpg"}]},{"tmdbId":"98","genres":[{"id":28,"name":"Action"},{"id":18,"name":"Drama"},{"id":12,"name":"Adventure"}],"originalLanguage":"en","originalTitle":"Gladiator","overview":"In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences. His battle skills serve him well, and he becomes one of the most famous and admired men to fight in the Colosseum. Determined to avenge himself against the man who took away his freedom and laid waste to his family, Maximus believes that he can use his fame and skill in the ring to avenge the loss of his family and former glory. As the gladiator begins to challenge his rule, Commodus decides to put his own fighting mettle to the test by squaring off with Maximus in a battle to the death.","posterUrl":"https://image.tmdb.org/t/p/original/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg","productionCompanies":"[{'name': 'DreamWorks SKG', 'id': 27}, {'name': 'Universal Pictures', 'id': 33}, {'name': 'Scott Free Productions', 'id': 1645}, {'name': 'Red Wagon Entertainment', 'id': 14440}, {'name': 'Mill Film', 'id': 21904}, {'name': 'C & L', 'id': 21905}, {'name': 'Dawliz', 'id': 21906}]","productionCountries":"[{'iso_3166_1': 'GB', 'name': 'United Kingdom'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2000-05-01","runtimeMinutes":155,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"A Hero Will Rise.","title":"Gladiator","cast":[{"castId":8,"character":"Maximus","creditId":"52fe4217c3a36847f8003435","gender":2,"id":934,"name":"Russell Crowe","order":0,"profilePath":"https://image.tmdb.org/t/p/original/ktuOAyUHM2u2YPPChH8gAArxJ7b.jpg"},{"castId":9,"character":"Commodus","creditId":"52fe4217c3a36847f8003439","gender":2,"id":73421,"name":"Joaquin Phoenix","order":1,"profilePath":"https://image.tmdb.org/t/p/original/fGXFFv7owELL4wCFn2OsFAgOiO3.jpg"},{"castId":10,"character":"Lucilla","creditId":"52fe4217c3a36847f800343d","gender":1,"id":935,"name":"Connie Nielsen","order":2,"profilePath":"https://image.tmdb.org/t/p/original/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg"},{"castId":11,"character":"Proximo","creditId":"52fe4217c3a36847f8003441","gender":2,"id":936,"name":"Oliver Reed","order":3,"profilePath":"https://image.tmdb.org/t/p/original/cX4qnlsKPKlBlDgzHl9zj0udZFB.jpg"},{"castId":12,"character":"Marcus Aurelius","creditId":"52fe4217c3a36847f8003445","gender":2,"id":194,"name":"Richard Harris","order":4,"profilePath":"https://image.tmdb.org/t/p/original/51wDHVFNqrYgvUBMOcACAt4sJU9.jpg"},{"castId":13,"character":"Gracchus","creditId":"52fe4217c3a36847f8003449","gender":2,"id":937,"name":"Derek Jacobi","order":5,"profilePath":"https://image.tmdb.org/t/p/original/jJ4MkVS59gCfJhWMfLTbeHKjoyC.jpg"},{"castId":14,"character":"Juba","creditId":"52fe4217c3a36847f800344d","gender":2,"id":938,"name":"Djimon Hounsou","order":6,"profilePath":"https://image.tmdb.org/t/p/original/y22Pb0XAVqC0l7ukzKKtXzPEuHk.jpg"},{"castId":15,"character":"Falco","creditId":"52fe4217c3a36847f8003451","gender":0,"id":939,"name":"David Schofield","order":7,"profilePath":"https://image.tmdb.org/t/p/original/fN64rPih5p4OdbrpX22QURjRUg7.jpg"},{"castId":16,"character":"Gaius","creditId":"52fe4217c3a36847f8003455","gender":2,"id":940,"name":"John Shrapnel","order":8,"profilePath":"https://image.tmdb.org/t/p/original/nDIK01IoVNx7cfYOrKqGugItqO9.jpg"},{"castId":17,"character":"Quintus","creditId":"52fe4217c3a36847f8003459","gender":2,"id":941,"name":"Tomas Arana","order":9,"profilePath":"https://image.tmdb.org/t/p/original/sx8tDGA7e7d5oDYpQwaydmGcc93.jpg"}]},{"tmdbId":"99","genres":[{"id":35,"name":"Comedy"},{"id":18,"name":"Drama"}],"originalLanguage":"es","originalTitle":"Todo sobre mi madre","overview":"A single mother in Madrid sees her only son die on his birthday as he runs to seek an actress' autograph. Beside herself with grief, she returns to Barcelona to tell the boy's father about the death of the son he never knew he had.","posterUrl":"https://image.tmdb.org/t/p/original/sQdalmBSUiaU0QCgZKBfy0l2vUR.jpg","productionCompanies":"[{'name': 'Renn Productions', 'id': 82}, {'name': 'France 2 Cinéma', 'id': 83}]","productionCountries":"[{'iso_3166_1': 'ES', 'name': 'Spain'}, {'iso_3166_1': 'FR', 'name': 'France'}]","releaseDate":"1999-04-19","runtimeMinutes":101,"spokenLanguages":"[{'iso_639_1': 'es', 'name': 'Español'}]","status":"Released","tagline":"Part of every woman is a mother/actress/saint/sinner. And part of every man is a woman.","title":"All About My Mother","cast":[{"castId":5,"character":"Manuela","creditId":"52fe4217c3a36847f80034ff","gender":1,"id":953,"name":"Cecilia Roth","order":0,"profilePath":"https://image.tmdb.org/t/p/original/oTGwUNEic3SeQKfwo48fP7p96GX.jpg"},{"castId":6,"character":"Huma","creditId":"52fe4217c3a36847f8003503","gender":1,"id":954,"name":"Marisa Paredes","order":1,"profilePath":"https://image.tmdb.org/t/p/original/aDfNPZ2plaCmdrYkCkburjBqYnP.jpg"},{"castId":7,"character":"Rosa","creditId":"52fe4217c3a36847f8003507","gender":1,"id":955,"name":"Penélope Cruz","order":2,"profilePath":"https://image.tmdb.org/t/p/original/foLI2rrKi5kIq0QkMMqlxAQbuHh.jpg"},{"castId":8,"character":"Nina","creditId":"52fe4217c3a36847f800350b","gender":1,"id":958,"name":"Candela Peña","order":3,"profilePath":"https://image.tmdb.org/t/p/original/vXsuroxcILYbOoI4fufchaSrsIP.jpg"},{"castId":9,"character":"Agrado","creditId":"52fe4217c3a36847f800350f","gender":0,"id":961,"name":"Antonia San Juan","order":4,"profilePath":"https://image.tmdb.org/t/p/original/2CAkeBZGrUv5mZPxPPWyZsUGCqX.jpg"},{"castId":10,"character":"Rosa's Mother","creditId":"52fe4217c3a36847f8003513","gender":0,"id":962,"name":"Rosa Maria Sardà","order":5,"profilePath":"https://image.tmdb.org/t/p/original/s2fMb2fRdAmxb9pYvmYERNhZKPp.jpg"},{"castId":11,"character":"Lola","creditId":"52fe4217c3a36847f8003517","gender":0,"id":963,"name":"Toni Cantó","order":6,"profilePath":"https://image.tmdb.org/t/p/original/qHrY1hH2N0DhrDraYC19bBWWECO.jpg"},{"castId":12,"character":"Esteban","creditId":"52fe4217c3a36847f800351b","gender":2,"id":964,"name":"Eloy Azorín","order":8,"profilePath":"https://image.tmdb.org/t/p/original/gMsqCdNbLliRudq6olLZEccmO5t.jpg"},{"castId":13,"character":"Rosa's Father","creditId":"52fe4217c3a36847f800351f","gender":2,"id":965,"name":"Fernando Fernán Gómez","order":9,"profilePath":"https://image.tmdb.org/t/p/original/imdGxyxOGfbVPCQsutPI5StAncv.jpg"},{"castId":19,"character":"Mario","creditId":"52fe4217c3a36847f8003541","gender":2,"id":3650,"name":"Carlos Lozano","order":10,"profilePath":"https://image.tmdb.org/t/p/original/2LV0z7HgCGJfPjXtG1OTZEoIb1Y.jpg"}]},{"tmdbId":"100","genres":[{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"}],"originalLanguage":"en","originalTitle":"Lock, Stock and Two Smoking Barrels","overview":"A card sharp and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.","posterUrl":"https://image.tmdb.org/t/p/original/qV7QaSf7f7yC2lc985zfyOJIAIN.jpg","productionCompanies":"[{'name': 'Handmade Films Ltd.', 'id': 146}, {'name': 'Summit Entertainment', 'id': 491}, {'name': 'PolyGram Filmed Entertainment', 'id': 1382}, {'name': 'SKA Films', 'id': 13419}, {'name': 'The Steve Tisch Company', 'id': 21920}]","productionCountries":"[{'iso_3166_1': 'GB', 'name': 'United Kingdom'}]","releaseDate":"1998-03-05","runtimeMinutes":105,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"A Disgrace to Criminals Everywhere.","title":"Lock, Stock and Two Smoking Barrels","cast":[{"castId":12,"character":"Tom","creditId":"52fe4217c3a36847f80035fb","gender":2,"id":973,"name":"Jason Flemyng","order":0,"profilePath":"https://image.tmdb.org/t/p/original/kzzQoiO3bbi2UeDJL9QtBT5jaQn.jpg"},{"castId":13,"character":"Soap","creditId":"52fe4217c3a36847f80035ff","gender":2,"id":974,"name":"Dexter Fletcher","order":1,"profilePath":"https://image.tmdb.org/t/p/original/did9anJiAFYvTbeQyNZaxts7GaT.jpg"},{"castId":14,"character":"Eddie","creditId":"52fe4217c3a36847f8003603","gender":2,"id":975,"name":"Nick Moran","order":2,"profilePath":"https://image.tmdb.org/t/p/original/jf5M1SxmWFOm8lsOmxlFGSaUSm6.jpg"},{"castId":15,"character":"Bacon","creditId":"52fe4217c3a36847f8003607","gender":2,"id":976,"name":"Jason Statham","order":3,"profilePath":"https://image.tmdb.org/t/p/original/PhWiWgasncGWD9LdbsGcmxkV4r.jpg"},{"castId":17,"character":"Big Chris","creditId":"52fe4217c3a36847f800360f","gender":2,"id":980,"name":"Vinnie Jones","order":4,"profilePath":"https://image.tmdb.org/t/p/original/1QQea9t0JkRVVVbgVtpGAQuf0x5.jpg"},{"castId":18,"character":"JD","creditId":"52fe4217c3a36847f8003613","gender":2,"id":982,"name":"Sting","order":5,"profilePath":"https://image.tmdb.org/t/p/original/cnhlJfHWfNU0ig6hidOiXuvew7o.jpg"},{"castId":16,"character":"Winston","creditId":"52fe4217c3a36847f800360b","gender":2,"id":978,"name":"Steven Mackintosh","order":6,"profilePath":"https://image.tmdb.org/t/p/original/3TQVLNfMiiBAcoaCbmWckxXqagN.jpg"},{"castId":19,"character":"J","creditId":"52fe4217c3a36847f8003617","gender":2,"id":984,"name":"Nicholas Rowe","order":7,"profilePath":"https://image.tmdb.org/t/p/original/iA32qMujonoTzU1DdlnTRemBvRQ.jpg"},{"castId":22,"character":"Barry the Baptist","creditId":"52fe4217c3a36847f8003623","gender":2,"id":987,"name":"Lenny McLean","order":8,"profilePath":"https://image.tmdb.org/t/p/original/A3WqhQxdL7fZJ5ZcVHoLlksG4Np.jpg"},{"castId":24,"character":"'Hatchet' Harry Lonsdale","creditId":"52fe4217c3a36847f800362b","gender":0,"id":989,"name":"P.H. Moriarty","order":9,"profilePath":"https://image.tmdb.org/t/p/original/m9CqdPkzxVgOEMSdBCX0LqECNzu.jpg"}]},{"tmdbId":"101","genres":[{"id":53,"name":"Thriller"},{"id":80,"name":"Crime"},{"id":18,"name":"Drama"}],"originalLanguage":"fr","originalTitle":"Léon","overview":"Leon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Leon's footsteps.","posterUrl":"https://image.tmdb.org/t/p/original/gE8S02QUOhVnAmYu4tcrBlMTujz.jpg","productionCompanies":"[{'name': 'Columbia Pictures', 'id': 5}, {'name': 'Gaumont', 'id': 9}]","productionCountries":"[{'iso_3166_1': 'FR', 'name': 'France'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1994-09-14","runtimeMinutes":110,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"If you want a job done well, hire a professional.","title":"Leon: The Professional","cast":[{"castId":12,"character":"Léon Montana","creditId":"52fe4217c3a36847f80036b3","gender":2,"id":1003,"name":"Jean Reno","order":0,"profilePath":"https://image.tmdb.org/t/p/original/cdsN5efCYGQWlPrj7vFlZRBTR16.jpg"},{"castId":21,"character":"Mathilda Lando","creditId":"52fe4217c3a36847f80036c3","gender":1,"id":524,"name":"Natalie Portman","order":1,"profilePath":"https://image.tmdb.org/t/p/original/1oEP6OyYZgyLubgJXifx2GO78c7.jpg"},{"castId":13,"character":"Norman Stansfield","creditId":"52fe4217c3a36847f80036b7","gender":2,"id":64,"name":"Gary Oldman","order":2,"profilePath":"https://image.tmdb.org/t/p/original/v4qJEX4TEgEt2Zghldbd71AFjbV.jpg"},{"castId":15,"character":"Tony","creditId":"52fe4217c3a36847f80036bb","gender":2,"id":1004,"name":"Danny Aiello","order":3,"profilePath":"https://image.tmdb.org/t/p/original/UvPalkz4ynJJrTcrbpfD05gVoO.jpg"},{"castId":16,"character":"Malky","creditId":"52fe4217c3a36847f80036bf","gender":2,"id":1005,"name":"Peter Appel","order":4,"profilePath":"https://image.tmdb.org/t/p/original/wrAf4TGgtKE1mXWVtm1baTBDh6F.jpg"},{"castId":26,"character":"Mathilda's Father","creditId":"5300b31e9251416ad830d36a","gender":2,"id":1010,"name":"Michael Badalucco","order":5,"profilePath":"https://image.tmdb.org/t/p/original/oK2pSu2FWyrwiPEch7Tux2GSMbK.jpg"},{"castId":27,"character":"Mathilda's Mother","creditId":"5300b3529251416ade3049d4","gender":1,"id":13420,"name":"Ellen Greene","order":6,"profilePath":"https://image.tmdb.org/t/p/original/nJzE8dS38hxbALr5LZ88BYt8dm0.jpg"},{"castId":28,"character":"Mathilda's Sister","creditId":"5300b3809251412a162ced41","gender":0,"id":122230,"name":"Elizabeth Regen","order":7,"profilePath":"https://image.tmdb.org/t/p/original/g53E398tOGW1wkgFtRxzVicVSOL.jpg"},{"castId":29,"character":"Mathilda's Brother","creditId":"5300b4a99251416ae431227f","gender":2,"id":977543,"name":"Carl J. Matusovich","order":8,"profilePath":"https://image.tmdb.org/t/p/original/yTldUVHfjZ6EETmqTu96p3DlUaB.jpg"},{"castId":35,"character":"Bodyguard Chief","creditId":"57e6ca27c3a36835a200917c","gender":2,"id":1171233,"name":"Eric Challier","order":9,"profilePath":"https://image.tmdb.org/t/p/original/31PMhJShGqLRUHPMJoMyxecDnSI.jpg"}]},{"tmdbId":"102","genres":[{"id":18,"name":"Drama"},{"id":10749,"name":"Romance"}],"originalLanguage":"da","originalTitle":"Elsker dig for evigt","overview":"Cecilie and Joachim are about to get married when a freak car accident leaves Joachim disabled, throwing their lives into a spin. The driver of the other car, Marie, and her family don’t get off lightly, either. Her husband Niels works in the hospital where he meets Cecilie and falls madly in love with her.","posterUrl":"https://image.tmdb.org/t/p/original/hOrV2fCw2kmSiS4ZMGFPfXqr3lt.jpg","productionCompanies":"[{'name': 'Zentropa Entertainments', 'id': 76}]","productionCountries":"[{'iso_3166_1': 'DK', 'name': 'Denmark'}]","releaseDate":"2002-09-06","runtimeMinutes":113,"spokenLanguages":"[{'iso_639_1': 'da', 'name': 'Dansk'}]","status":"Released","tagline":"","title":"Open Hearts","cast":[{"castId":6,"character":"Cecilie","creditId":"52fe4217c3a36847f8003717","gender":1,"id":1017,"name":"Sonja Richter","order":0,"profilePath":"https://image.tmdb.org/t/p/original/dfO62j66IC6Qrauc17esOkSqYMp.jpg"},{"castId":7,"character":"Joachim","creditId":"52fe4217c3a36847f800371b","gender":2,"id":1018,"name":"Nikolaj Lie Kaas","order":1,"profilePath":"https://image.tmdb.org/t/p/original/xO4yWra3xoK0rdzDN4OC8Jwh0FH.jpg"},{"castId":8,"character":"Niels","creditId":"52fe4217c3a36847f800371f","gender":2,"id":1019,"name":"Mads Mikkelsen","order":2,"profilePath":"https://image.tmdb.org/t/p/original/8F1dY2rjZ1YDEKH0imDs21xdTDX.jpg"},{"castId":9,"character":"Marie","creditId":"52fe4217c3a36847f8003723","gender":0,"id":4458,"name":"Paprika Steen","order":3,"profilePath":"https://image.tmdb.org/t/p/original/7iz6g2gXDCVL9LFjqmVV8KwGvNP.jpg"},{"castId":10,"character":"Stine","creditId":"52fe4217c3a36847f8003727","gender":0,"id":1021,"name":"Stine Bjerregaard","order":4,"profilePath":null},{"castId":11,"character":"Hanne","creditId":"52fe4217c3a36847f800372b","gender":0,"id":4459,"name":"Birthe Neumann","order":5,"profilePath":"https://image.tmdb.org/t/p/original/gTpInxjTPnPCZr0bRyZAQqEQGJQ.jpg"},{"castId":12,"character":"Finn","creditId":"52fe4217c3a36847f800372f","gender":0,"id":1023,"name":"Niels Olsen","order":6,"profilePath":"https://image.tmdb.org/t/p/original/3f3rM19bLLkMqC81baHeckiF4tP.jpg"},{"castId":13,"character":"Thomsen","creditId":"52fe4217c3a36847f8003733","gender":2,"id":1024,"name":"Ulf Pilgaard","order":7,"profilePath":"https://image.tmdb.org/t/p/original/k36zUCMvoohhyegGsDAu6uoFKP6.jpg"},{"castId":14,"character":"Gustav","creditId":"52fe4217c3a36847f8003737","gender":0,"id":1025,"name":"Ronnie Lorenzen","order":8,"profilePath":null},{"castId":15,"character":"Robert","creditId":"52fe4217c3a36847f800373b","gender":0,"id":1026,"name":"Anders Nyborg","order":9,"profilePath":null}]},{"tmdbId":"103","genres":[{"id":80,"name":"Crime"},{"id":18,"name":"Drama"}],"originalLanguage":"en","originalTitle":"Taxi Driver","overview":"A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.","posterUrl":"https://image.tmdb.org/t/p/original/yxq4pk1xGmro8tQABuQIrWrvdaE.jpg","productionCompanies":"[{'name': 'Columbia Pictures Corporation', 'id': 441}, {'name': 'Italo/Judeo Productions', 'id': 46059}, {'name': 'Bill/Phillips', 'id': 46060}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1976-02-07","runtimeMinutes":114,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}]","status":"Released","tagline":"On every street in every city, there's a nobody who dreams of being a somebody.","title":"Taxi Driver","cast":[{"castId":5,"character":"Travis Bickle","creditId":"52fe4218c3a36847f80037d7","gender":2,"id":380,"name":"Robert De Niro","order":0,"profilePath":"https://image.tmdb.org/t/p/original/lvTSwUcvJRLAJ2FB5qFaukel516.jpg"},{"castId":6,"character":"Betsy","creditId":"52fe4218c3a36847f80037db","gender":1,"id":1036,"name":"Cybill Shepherd","order":1,"profilePath":"https://image.tmdb.org/t/p/original/iWlt5Xba1z9oFqL8MHo110I6qZ5.jpg"},{"castId":7,"character":"'Sport' Matthew","creditId":"52fe4218c3a36847f80037df","gender":2,"id":1037,"name":"Harvey Keitel","order":2,"profilePath":"https://image.tmdb.org/t/p/original/4IcHhp1SCKijRxb7kqnxZNJuKdn.jpg"},{"castId":8,"character":"Iris Steensma","creditId":"52fe4218c3a36847f80037e3","gender":1,"id":1038,"name":"Jodie Foster","order":3,"profilePath":"https://image.tmdb.org/t/p/original/eAIE6bnOQ8rm0f933gyeAQdIwrP.jpg"},{"castId":9,"character":"Wizard","creditId":"52fe4218c3a36847f80037e7","gender":2,"id":1039,"name":"Peter Boyle","order":4,"profilePath":"https://image.tmdb.org/t/p/original/hAZw6rJlAemlqND09Km7qGvpZ6D.jpg"},{"castId":10,"character":"Senator Charles Palantine","creditId":"52fe4218c3a36847f80037eb","gender":2,"id":1040,"name":"Leonard Harris","order":5,"profilePath":"https://image.tmdb.org/t/p/original/3BzHdz17VrUiNEMNlOGIYT6SkF5.jpg"},{"castId":11,"character":"Tom","creditId":"52fe4218c3a36847f80037ef","gender":2,"id":13,"name":"Albert Brooks","order":6,"profilePath":"https://image.tmdb.org/t/p/original/kahlMTdygrPJ28VYRhKPavYD9hs.jpg"},{"castId":12,"character":"Concession Girl","creditId":"52fe4218c3a36847f80037f3","gender":1,"id":1041,"name":"Diahnne Abbott","order":7,"profilePath":"https://image.tmdb.org/t/p/original/bstWqig7aE762V7Bv7dMdH8CbzW.jpg"},{"castId":14,"character":"Policeman al rally","creditId":"52fe4218c3a36847f80037f7","gender":0,"id":1043,"name":"Gino Ardito","order":8,"profilePath":null},{"castId":29,"character":"Man in cab","creditId":"52fe4218c3a36847f800384f","gender":2,"id":1032,"name":"Martin Scorsese","order":9,"profilePath":"https://image.tmdb.org/t/p/original/4Xwx5XL1RJj0JQmEo8Fhr6nkpOg.jpg"}]},{"tmdbId":"104","genres":[{"id":28,"name":"Action"},{"id":18,"name":"Drama"},{"id":53,"name":"Thriller"}],"originalLanguage":"de","originalTitle":"Lola rennt","overview":"Lola receives a phone call from her boyfriend Manni. He lost 100,000 DM in a subway train that belongs to a very bad guy. She has 20 minutes to raise this amount and meet Manni. Otherwise, he will rob a store to get the money. Three different alternatives may happen depending on some minor event along Lola's run.","posterUrl":"https://image.tmdb.org/t/p/original/3L8QhF5IkZOnEnBFdpj6GVkkp7d.jpg","productionCompanies":"[{'name': 'X-Filme Creative Pool', 'id': 1972}, {'name': 'Westdeutscher Rundfunk (WDR)', 'id': 7025}]","productionCountries":"[{'iso_3166_1': 'DE', 'name': 'Germany'}]","releaseDate":"1998-08-20","runtimeMinutes":81,"spokenLanguages":"[{'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'ja', 'name': '日本語'}]","status":"Released","tagline":"Every second of every day you're faced with a decision that can change your life.","title":"Run Lola Run","cast":[{"castId":11,"character":"Lola","creditId":"52fe4218c3a36847f80038df","gender":1,"id":679,"name":"Franka Potente","order":0,"profilePath":"https://image.tmdb.org/t/p/original/9ES9W38WA8vIz6zMhlfpeJ29hrW.jpg"},{"castId":12,"character":"Manni","creditId":"52fe4218c3a36847f80038e3","gender":2,"id":677,"name":"Moritz Bleibtreu","order":1,"profilePath":"https://image.tmdb.org/t/p/original/rol9YK1QeR2mkrqAJ0F9RsDTMqp.jpg"},{"castId":13,"character":"Lola's Father","creditId":"52fe4218c3a36847f80038e7","gender":2,"id":1081,"name":"Herbert Knaup","order":2,"profilePath":"https://image.tmdb.org/t/p/original/hw7WRIrL2padX5bLFwpPoMIspvO.jpg"},{"castId":14,"character":"Frau Hansen","creditId":"52fe4218c3a36847f80038eb","gender":0,"id":1082,"name":"Nina Petri","order":3,"profilePath":"https://image.tmdb.org/t/p/original/2P0ExPJn2ko62BwuVA7Ify4vRjm.jpg"},{"castId":15,"character":"Herr Schuster","creditId":"52fe4218c3a36847f80038ef","gender":2,"id":1083,"name":"Armin Rohde","order":4,"profilePath":"https://image.tmdb.org/t/p/original/jUOdSGDo9az8rtpZnP4AzzgydQj.jpg"},{"castId":16,"character":"Homeless Man","creditId":"52fe4218c3a36847f80038f3","gender":2,"id":1084,"name":"Joachim Król","order":5,"profilePath":"https://image.tmdb.org/t/p/original/swED4GruvGgMdqpbshKKdzLIm1e.jpg"},{"castId":18,"character":"Ronnie","creditId":"52fe4218c3a36847f80038f7","gender":2,"id":1086,"name":"Heino Ferch","order":6,"profilePath":"https://image.tmdb.org/t/p/original/g8NRSFfRxGXutPCmgfjf4ouTpDn.jpg"},{"castId":19,"character":"Herr Kruse","creditId":"52fe4218c3a36847f80038fb","gender":0,"id":1087,"name":"Lars Rudolph","order":7,"profilePath":"https://image.tmdb.org/t/p/original/qiWu2gphSg64igYl3Nx0hEIOQF3.jpg"},{"castId":20,"character":"Herr Meier","creditId":"52fe4218c3a36847f80038ff","gender":2,"id":1088,"name":"Ludger Pistor","order":8,"profilePath":"https://image.tmdb.org/t/p/original/Avz9EkxdDbI2DN9h3wAVRUXsesz.jpg"},{"castId":25,"character":"Mike","creditId":"52fe4218c3a36847f8003915","gender":0,"id":3702,"name":"Sebastian Schipper","order":10,"profilePath":"https://image.tmdb.org/t/p/original/fzRs9csoyl9uE5aybQ9bqe1SGuc.jpg"}]},{"tmdbId":"105","genres":[{"id":12,"name":"Adventure"},{"id":35,"name":"Comedy"},{"id":878,"name":"Science Fiction"},{"id":10751,"name":"Family"}],"originalLanguage":"en","originalTitle":"Back to the Future","overview":"Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.","posterUrl":"https://image.tmdb.org/t/p/original/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg","productionCompanies":"[{'name': 'Universal Pictures', 'id': 33}, {'name': 'Amblin Entertainment', 'id': 56}, {'name': 'U-Drive Productions', 'id': 20448}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1985-07-03","runtimeMinutes":116,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"He's the only kid ever to get into trouble before he was born.","title":"Back to the Future","cast":[{"castId":14,"character":"Marty McFly","creditId":"52fe4218c3a36847f8003a13","gender":2,"id":521,"name":"Michael J. Fox","order":0,"profilePath":"https://image.tmdb.org/t/p/original/aeN1cA04vVXKrVy1SuS1JOhABBs.jpg"},{"castId":15,"character":"Dr. Emmett Brown","creditId":"52fe4218c3a36847f8003a17","gender":2,"id":1062,"name":"Christopher Lloyd","order":1,"profilePath":"https://image.tmdb.org/t/p/original/iQzG9apaIsHnn7iGrer3YEDp8Zo.jpg"},{"castId":16,"character":"Lorraine Baines","creditId":"52fe4218c3a36847f8003a1b","gender":1,"id":1063,"name":"Lea Thompson","order":2,"profilePath":"https://image.tmdb.org/t/p/original/gaZhgJdLmWkEdqkkfomnBQn16uo.jpg"},{"castId":17,"character":"George McFly","creditId":"52fe4218c3a36847f8003a1f","gender":2,"id":1064,"name":"Crispin Glover","order":3,"profilePath":"https://image.tmdb.org/t/p/original/thA5rOv5XE1oFpxD9DSp0tDrIIR.jpg"},{"castId":18,"character":"Biff Tannen","creditId":"52fe4218c3a36847f8003a23","gender":2,"id":1065,"name":"Thomas F. Wilson","order":4,"profilePath":"https://image.tmdb.org/t/p/original/n5Vk17hmXW5OqltDYH3i0qOTHcZ.jpg"},{"castId":19,"character":"Jennifer Parker","creditId":"52fe4218c3a36847f8003a27","gender":1,"id":1066,"name":"Claudia Wells","order":5,"profilePath":"https://image.tmdb.org/t/p/original/lQWUidwPartKLzV3NYMVrkxooRO.jpg"},{"castId":20,"character":"Dave McFly","creditId":"52fe4218c3a36847f8003a2b","gender":2,"id":1067,"name":"Marc McClure","order":6,"profilePath":"https://image.tmdb.org/t/p/original/5VPLVH1eAiIQ3s7aNjrgvzwTt3t.jpg"},{"castId":21,"character":"Linda McFly","creditId":"52fe4218c3a36847f8003a2f","gender":1,"id":1068,"name":"Wendie Jo Sperber","order":7,"profilePath":"https://image.tmdb.org/t/p/original/nadvO9Q24eNrGAznKmlOwV6E6Wb.jpg"},{"castId":22,"character":"Sam Baines","creditId":"52fe4218c3a36847f8003a33","gender":0,"id":1069,"name":"George DiCenzo","order":8,"profilePath":"https://image.tmdb.org/t/p/original/u5pQL3gkcGcnpkc9NPuyiBB3e8f.jpg"},{"castId":23,"character":"Stella Baines","creditId":"52fe4218c3a36847f8003a37","gender":1,"id":1070,"name":"Frances Lee McCain","order":9,"profilePath":"https://image.tmdb.org/t/p/original/kOI0WF56kQLIDCkEdT30KBDQNYT.jpg"}]},{"tmdbId":"106","genres":[{"id":878,"name":"Science Fiction"},{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":53,"name":"Thriller"}],"originalLanguage":"en","originalTitle":"Predator","overview":"Dutch and his group of commandos are hired by the CIA to rescue downed airmen from guerillas in a Central American jungle. The mission goes well but as they return they find that something is hunting them. Nearly invisible, it blends in with the forest, taking trophies from the bodies of its victims as it goes along. Occasionally seeing through its eyes, the audience sees it is an intelligent alien hunter, hunting them for sport, killing them off one at a time.","posterUrl":"https://image.tmdb.org/t/p/original/bj7A0teF2TWxxNGZjWTXiGrvCu2.jpg","productionCompanies":"[{'name': 'Twentieth Century Fox Film Corporation', 'id': 306}, {'name': 'Lawrence Gordon Productions', 'id': 840}, {'name': 'Davis Entertainment', 'id': 1302}, {'name': 'Silver Pictures', 'id': 1885}, {'name': 'Amercent Films', 'id': 5263}, {'name': 'American Entertainment Partners L.P.', 'id': 5264}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1987-06-11","runtimeMinutes":107,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}]","status":"Released","tagline":"If it bleeds, we can kill it...","title":"Predator","cast":[{"castId":13,"character":"Major Alan 'Dutch' Schaeffer","creditId":"52fe4218c3a36847f8003b53","gender":2,"id":1100,"name":"Arnold Schwarzenegger","order":0,"profilePath":"https://image.tmdb.org/t/p/original/sOkCXc9xuSr6v7mdAq9LwEBje68.jpg"},{"castId":14,"character":"Major George Dillon","creditId":"52fe4218c3a36847f8003b57","gender":0,"id":1101,"name":"Carl Weathers","order":1,"profilePath":"https://image.tmdb.org/t/p/original/xOpDfVa83R1EdiNkWPNITfCH67e.jpg"},{"castId":15,"character":"Anna","creditId":"52fe4218c3a36847f8003b5b","gender":1,"id":1102,"name":"Elpidia Carrillo","order":2,"profilePath":"https://image.tmdb.org/t/p/original/7sXdZ8uFmI2wYQPogTfkGcDPCkp.jpg"},{"castId":16,"character":"Sergeant 'Mac' Eliot","creditId":"52fe4218c3a36847f8003b5f","gender":2,"id":1103,"name":"Bill Duke","order":3,"profilePath":"https://image.tmdb.org/t/p/original/46uPgJKKjAhPak4G7526ZFHiRvA.jpg"},{"castId":17,"character":"Blain","creditId":"52fe4218c3a36847f8003b63","gender":2,"id":1104,"name":"Jesse Ventura","order":4,"profilePath":"https://image.tmdb.org/t/p/original/25AzScRxybPMRxEfv9iB116jj7a.jpg"},{"castId":18,"character":"Billy","creditId":"52fe4218c3a36847f8003b67","gender":2,"id":1105,"name":"Sonny Landham","order":5,"profilePath":"https://image.tmdb.org/t/p/original/dmOpsfsz56FtcrQMfyiivmoEXXP.jpg"},{"castId":19,"character":"Poncho Ramirez","creditId":"52fe4218c3a36847f8003b6b","gender":2,"id":1106,"name":"Richard Chaves","order":6,"profilePath":"https://image.tmdb.org/t/p/original/5vt3CgYIAPFXwYvFXea4p2GlhIH.jpg"},{"castId":20,"character":"General Phillips","creditId":"52fe4218c3a36847f8003b6f","gender":2,"id":1107,"name":"R. G. Armstrong","order":7,"profilePath":"https://image.tmdb.org/t/p/original/iyOD1sUIX4SAPbfF4C9C7cI3ayP.jpg"},{"castId":21,"character":"Hawkins","creditId":"52fe4218c3a36847f8003b73","gender":2,"id":1108,"name":"Shane Black","order":8,"profilePath":"https://image.tmdb.org/t/p/original/lEyKmYizNVNLsOEgeaPFwX9MZoA.jpg"},{"castId":23,"character":"Helicopter Pilot / Predator","creditId":"52fe4218c3a36847f8003b7b","gender":2,"id":1109,"name":"Kevin Peter Hall","order":10,"profilePath":"https://image.tmdb.org/t/p/original/9FnpE1Z6zeE4EEIn1J6vYR1xcqk.jpg"}]},{"tmdbId":"107","genres":[{"id":53,"name":"Thriller"},{"id":80,"name":"Crime"}],"originalLanguage":"en","originalTitle":"Snatch","overview":"The second film from British director Guy Ritchie. Snatch tells an obscure story similar to his first fast-paced crazy character-colliding filled film “Lock, Stock and Two Smoking Barrels.” There are two overlapping stories here – one is the search for a stolen diamond, and the other about a boxing promoter who’s having trouble with a psychotic gangster.","posterUrl":"https://image.tmdb.org/t/p/original/on9JlbGEccLsYkjeEph2Whm1DIp.jpg","productionCompanies":"[{'name': 'Columbia Pictures Corporation', 'id': 441}, {'name': 'Screen Gems', 'id': 3287}, {'name': 'SKA Films', 'id': 13419}]","productionCountries":"[{'iso_3166_1': 'GB', 'name': 'United Kingdom'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2000-09-01","runtimeMinutes":103,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'ru', 'name': 'Pусский'}]","status":"Released","tagline":"Stealin' Stones and Breakin' Bones.","title":"Snatch","cast":[{"castId":19,"character":"Franky Four Fingers","creditId":"52fe4219c3a36847f8003c05","gender":2,"id":1121,"name":"Benicio del Toro","order":0,"profilePath":"https://image.tmdb.org/t/p/original/8am369y5SGiZv4l0gY9O5ENzgvE.jpg"},{"castId":15,"character":"Abraham 'Cousin Avi' Denovitz","creditId":"52fe4219c3a36847f8003bf5","gender":2,"id":1117,"name":"Dennis Farina","order":1,"profilePath":"https://image.tmdb.org/t/p/original/o649nAtUimSZxEV6xa5JbMSgsED.jpg"},{"castId":13,"character":"Bullet Tooth Tony","creditId":"52fe4218c3a36847f8003bed","gender":2,"id":980,"name":"Vinnie Jones","order":2,"profilePath":"https://image.tmdb.org/t/p/original/1QQea9t0JkRVVVbgVtpGAQuf0x5.jpg"},{"castId":11,"character":"Mickey O'Neil","creditId":"52fe4218c3a36847f8003be5","gender":2,"id":287,"name":"Brad Pitt","order":3,"profilePath":"https://image.tmdb.org/t/p/original/ejYIW1enUcGJ9GS3Bs34mtONwWS.jpg"},{"castId":16,"character":"Boris 'The Blade' Yurinov","creditId":"52fe4219c3a36847f8003bf9","gender":2,"id":1118,"name":"Rade Serbedzija","order":4,"profilePath":"https://image.tmdb.org/t/p/original/hbP9ku9cP8Q2cmdB9WIcpkPJaIL.jpg"},{"castId":10,"character":"Turkish","creditId":"52fe4218c3a36847f8003be1","gender":2,"id":976,"name":"Jason Statham","order":5,"profilePath":"https://image.tmdb.org/t/p/original/PhWiWgasncGWD9LdbsGcmxkV4r.jpg"},{"castId":14,"character":"Brick Top Polford","creditId":"52fe4218c3a36847f8003bf1","gender":2,"id":1116,"name":"Alan Ford","order":6,"profilePath":"https://image.tmdb.org/t/p/original/3HtCLGRkuLmObyp1oJNJzplxOkI.jpg"},{"castId":20,"character":"Doug 'The Head' Denovitz","creditId":"52fe4219c3a36847f8003c09","gender":2,"id":1122,"name":"Mike Reid","order":7,"profilePath":"https://image.tmdb.org/t/p/original/j9ULDYBKDQEbVC33IWsElHE1cLm.jpg"},{"castId":17,"character":"Vincent","creditId":"52fe4219c3a36847f8003bfd","gender":0,"id":1119,"name":"Robbie Gee","order":8,"profilePath":"https://image.tmdb.org/t/p/original/sNjG7yCwwF6gMChC6gNfNuPUbwE.jpg"},{"castId":18,"character":"Sol","creditId":"52fe4219c3a36847f8003c01","gender":2,"id":1120,"name":"Lennie James","order":9,"profilePath":"https://image.tmdb.org/t/p/original/ilmHrtWZMa7FP3yCyJoHX6sSZjx.jpg"}]},{"tmdbId":"108","genres":[{"id":18,"name":"Drama"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"}],"originalLanguage":"fr","originalTitle":"Trois couleurs : Bleu","overview":"A woman struggles to find a way to live her life after the death of her husband and child.","posterUrl":"https://image.tmdb.org/t/p/original/ztIqf7yGmb4JRFiv2i62K6PhTQR.jpg","productionCompanies":"[{'name': 'France 3 Cinéma', 'id': 591}, {'name': 'CED Productions', 'id': 1610}]","productionCountries":"[{'iso_3166_1': 'FR', 'name': 'France'}, {'iso_3166_1': 'PL', 'name': 'Poland'}]","releaseDate":"1993-01-10","runtimeMinutes":98,"spokenLanguages":"[{'iso_639_1': 'fr', 'name': 'Français'}, {'iso_639_1': 'pl', 'name': 'Polski'}]","status":"Released","tagline":"","title":"Three Colors: Blue","cast":[{"castId":10,"character":"Julie Vignon","creditId":"52fe4219c3a36847f8003c99","gender":1,"id":1137,"name":"Juliette Binoche","order":0,"profilePath":"https://image.tmdb.org/t/p/original/rkW6eE75Tt1i3J1s2fsIDZBW0kd.jpg"},{"castId":11,"character":"Olivier","creditId":"52fe4219c3a36847f8003c9d","gender":0,"id":1138,"name":"Benoît Régent","order":1,"profilePath":"https://image.tmdb.org/t/p/original/ldEf9BnuCYBdIaH4epXtLeGPT2M.jpg"},{"castId":12,"character":"Sandrine","creditId":"52fe4219c3a36847f8003ca1","gender":1,"id":1139,"name":"Florence Pernel","order":2,"profilePath":"https://image.tmdb.org/t/p/original/wfDRJJvOpuCoTzbwsKTtSqiIEfB.jpg"},{"castId":18,"character":"Lucille","creditId":"52fe4219c3a36847f8003cb1","gender":0,"id":1140,"name":"Charlotte Véry","order":3,"profilePath":null},{"castId":19,"character":"La journaliste","creditId":"52fe4219c3a36847f8003cb5","gender":1,"id":1141,"name":"Hélène Vincent","order":4,"profilePath":"https://image.tmdb.org/t/p/original/rhb3AMUOgv8BcXmzpK16QQOlpFG.jpg"},{"castId":20,"character":"L'agent immobilier","creditId":"52fe4219c3a36847f8003cb9","gender":2,"id":1142,"name":"Philippe Volter","order":5,"profilePath":"https://image.tmdb.org/t/p/original/v5s5uo82mkTGkgkwfguCjmokLzg.jpg"},{"castId":21,"character":"Le médecin","creditId":"52fe4219c3a36847f8003cbd","gender":0,"id":17894,"name":"Claude Duneton","order":6,"profilePath":null},{"castId":22,"character":"Patrice","creditId":"52fe4219c3a36847f8003cc1","gender":0,"id":38170,"name":"Hugues Quester","order":7,"profilePath":null},{"castId":23,"character":"La mère","creditId":"52fe4219c3a36847f8003cc5","gender":1,"id":267962,"name":"Emmanuelle Riva","order":8,"profilePath":"https://image.tmdb.org/t/p/original/q4oje5UzP79ZPTwywVtLj0hvEJd.jpg"},{"castId":24,"character":"Dominique","creditId":"52fe4219c3a36847f8003cc9","gender":1,"id":1146,"name":"Julie Delpy","order":9,"profilePath":"https://image.tmdb.org/t/p/original/4LfbFCLGHHkHVikRdgxbN6hbatl.jpg"}]},{"tmdbId":"109","genres":[{"id":35,"name":"Comedy"},{"id":18,"name":"Drama"},{"id":9648,"name":"Mystery"}],"originalLanguage":"fr","originalTitle":"Trois couleurs : Blanc","overview":"Polish immigrant Karol Karol finds himself out of a marriage, a job and a country when his French wife, Dominique, divorces him after six months due to his impotence. Forced to leave France after losing the business they jointly owned, Karol enlists fellow Polish expatriate Mikolah to smuggle him back to their homeland.","posterUrl":"https://image.tmdb.org/t/p/original/xOLY69rXKwuH9JUnOE4G2HHKiW5.jpg","productionCompanies":"[{'name': 'Le Studio Canal+', 'id': 183}, {'name': 'France 3 Cinéma', 'id': 591}, {'name': 'Eurimages', 'id': 850}]","productionCountries":"[{'iso_3166_1': 'FR', 'name': 'France'}, {'iso_3166_1': 'PL', 'name': 'Poland'}]","releaseDate":"1994-01-26","runtimeMinutes":91,"spokenLanguages":"[{'iso_639_1': 'fr', 'name': 'Français'}, {'iso_639_1': 'hu', 'name': 'Magyar'}, {'iso_639_1': 'pl', 'name': 'Polski'}]","status":"Released","tagline":"","title":"Three Colors: White","cast":[{"castId":6,"character":"Karol Karol","creditId":"52fe4219c3a36847f8003d17","gender":2,"id":1145,"name":"Zbigniew Zamachowski","order":0,"profilePath":"https://image.tmdb.org/t/p/original/rfE2QqqCSRU3EY8cDdQBpULu6os.jpg"},{"castId":7,"character":"Dominique","creditId":"52fe4219c3a36847f8003d1b","gender":1,"id":1146,"name":"Julie Delpy","order":1,"profilePath":"https://image.tmdb.org/t/p/original/4LfbFCLGHHkHVikRdgxbN6hbatl.jpg"},{"castId":15,"character":"Mikolaj","creditId":"52fe4219c3a36847f8003d37","gender":2,"id":1147,"name":"Janusz Gajos","order":2,"profilePath":"https://image.tmdb.org/t/p/original/j8HQOPCGNXMfTPrk7fJ3wFEuCDP.jpg"},{"castId":16,"character":"Jurek","creditId":"52fe4219c3a36847f8003d3b","gender":0,"id":1148,"name":"Jerzy Stuhr","order":3,"profilePath":"https://image.tmdb.org/t/p/original/2SqqKdL835Hg5aLCPKVOyZyggCN.jpg"},{"castId":17,"character":"Le notaire","creditId":"52fe4219c3a36847f8003d3f","gender":2,"id":1149,"name":"Aleksander Bardini","order":4,"profilePath":"https://image.tmdb.org/t/p/original/eKA1CdsPcekZzlYB9vzZAxDgRPm.jpg"},{"castId":18,"character":"L'elegant","creditId":"52fe4219c3a36847f8003d43","gender":0,"id":1138501,"name":"Grzegorz Warchol","order":5,"profilePath":"https://image.tmdb.org/t/p/original/9QN0RgNOitBQMVKEfQjeMz9sXhr.jpg"},{"castId":19,"character":"L'inspecteur","creditId":"52fe4219c3a36847f8003d47","gender":2,"id":6415,"name":"Cezary Harasimowicz","order":6,"profilePath":"https://image.tmdb.org/t/p/original/1Tl4EO7Mwto3lJmLVMrjfeI0b2X.jpg"},{"castId":20,"character":"La vieux payson","creditId":"52fe4219c3a36847f8003d4b","gender":2,"id":7119,"name":"Jerzy Nowak","order":7,"profilePath":"https://image.tmdb.org/t/p/original/b1td2cfJhlxEG7QEijf3c6e2mCi.jpg"},{"castId":21,"character":"Le juge","creditId":"52fe4219c3a36847f8003d4f","gender":2,"id":19075,"name":"Philippe Morier-Genoud","order":8,"profilePath":null},{"castId":22,"character":"Julie Vignon","creditId":"52fe4219c3a36847f8003d53","gender":1,"id":1137,"name":"Juliette Binoche","order":9,"profilePath":"https://image.tmdb.org/t/p/original/rkW6eE75Tt1i3J1s2fsIDZBW0kd.jpg"}]},{"tmdbId":"110","genres":[{"id":18,"name":"Drama"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"}],"originalLanguage":"fr","originalTitle":"Trois couleurs : Rouge","overview":"Red This is the third film from the trilogy by Kieślowski. “Red” meaning brotherliness. Here Kieślowski masterly tells strange coincidentally linked stories in the most packed work.","posterUrl":"https://image.tmdb.org/t/p/original/77CFEssoKesi4zvtADEpIrSKhA3.jpg","productionCompanies":"[{'name': 'Zespół Filmowy TOR', 'id': 38}, {'name': 'Le Studio Canal+', 'id': 183}, {'name': 'France 3 Cinéma', 'id': 591}, {'name': 'Télévision Suisse-Romande', 'id': 1245}]","productionCountries":"[{'iso_3166_1': 'FR', 'name': 'France'}, {'iso_3166_1': 'PL', 'name': 'Poland'}, {'iso_3166_1': 'CH', 'name': 'Switzerland'}]","releaseDate":"1994-05-27","runtimeMinutes":99,"spokenLanguages":"[{'iso_639_1': 'fr', 'name': 'Français'}]","status":"Released","tagline":"","title":"Three Colors: Red","cast":[{"castId":9,"character":"Valentine Dussaut","creditId":"52fe4219c3a36847f8003da9","gender":1,"id":1350,"name":"Irène Jacob","order":0,"profilePath":"https://image.tmdb.org/t/p/original/vjlwVgbpb22S4rriqkfOd9H4kmU.jpg"},{"castId":10,"character":"Richter Joseph Kern","creditId":"52fe4219c3a36847f8003dad","gender":2,"id":1352,"name":"Jean-Louis Trintignant","order":1,"profilePath":"https://image.tmdb.org/t/p/original/rvwO5Rsm2ZohPCQjwEvY30PBp68.jpg"},{"castId":12,"character":"Auguste Bruner","creditId":"52fe4219c3a36847f8003db1","gender":2,"id":1356,"name":"Jean-Pierre Lorit","order":2,"profilePath":"https://image.tmdb.org/t/p/original/5GeQllohEVRvLhYFuowJHCW9tAf.jpg"},{"castId":16,"character":"Karin","creditId":"52fe4219c3a36847f8003dc7","gender":0,"id":1354,"name":"Frédérique Feder","order":3,"profilePath":null},{"castId":17,"character":"Le photographe","creditId":"52fe4219c3a36847f8003dcb","gender":2,"id":49025,"name":"Samuel Le Bihan","order":4,"profilePath":"https://image.tmdb.org/t/p/original/j3OLT8ccuFREbG5TUwqfuHDZDkA.jpg"},{"castId":18,"character":"Le Vétérinaire","creditId":"52fe4219c3a36847f8003dcf","gender":0,"id":27983,"name":"Marion Stalens","order":5,"profilePath":null},{"castId":21,"character":"Karol Karol","creditId":"52fe4219c3a36847f8003ddb","gender":2,"id":1145,"name":"Zbigniew Zamachowski","order":8,"profilePath":"https://image.tmdb.org/t/p/original/rfE2QqqCSRU3EY8cDdQBpULu6os.jpg"},{"castId":22,"character":"Julie Vignon (de Courcy)","creditId":"53b1c42cc3a3682edb006a6b","gender":1,"id":1137,"name":"Juliette Binoche","order":9,"profilePath":"https://image.tmdb.org/t/p/original/rkW6eE75Tt1i3J1s2fsIDZBW0kd.jpg"},{"castId":23,"character":"Dominique","creditId":"53b1c43cc3a3682eee006a5d","gender":1,"id":1146,"name":"Julie Delpy","order":10,"profilePath":"https://image.tmdb.org/t/p/original/4LfbFCLGHHkHVikRdgxbN6hbatl.jpg"},{"castId":24,"character":"Olivier","creditId":"53b1c699c3a3682eee006a80","gender":0,"id":1138,"name":"Benoît Régent","order":11,"profilePath":"https://image.tmdb.org/t/p/original/ldEf9BnuCYBdIaH4epXtLeGPT2M.jpg"}]},{"tmdbId":"111","genres":[{"id":28,"name":"Action"},{"id":80,"name":"Crime"},{"id":18,"name":"Drama"},{"id":53,"name":"Thriller"}],"originalLanguage":"en","originalTitle":"Scarface","overview":"After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.","posterUrl":"https://image.tmdb.org/t/p/original/zr2p353wrd6j3wjLgDT4TcaestB.jpg","productionCompanies":"[{'name': 'Universal Pictures', 'id': 33}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1983-12-08","runtimeMinutes":170,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}]","status":"Released","tagline":"The world is yours...","title":"Scarface","cast":[{"castId":9,"character":"Tony Montana","creditId":"52fe4219c3a36847f8003e47","gender":2,"id":1158,"name":"Al Pacino","order":0,"profilePath":"https://image.tmdb.org/t/p/original/ks7Ba8x9fJUlP9decBr6Dh5mThX.jpg"},{"castId":10,"character":"Manny Ribera","creditId":"52fe4219c3a36847f8003e4b","gender":2,"id":1159,"name":"Steven Bauer","order":1,"profilePath":"https://image.tmdb.org/t/p/original/2wbrq8xIKbIAQAgtxsftJT5XgVs.jpg"},{"castId":11,"character":"Elvira Hancock","creditId":"52fe4219c3a36847f8003e4f","gender":1,"id":1160,"name":"Michelle Pfeiffer","order":2,"profilePath":"https://image.tmdb.org/t/p/original/8kQhI2HGD1oB2wXHNqxRcElnmO3.jpg"},{"castId":12,"character":"Gina Montana","creditId":"52fe4219c3a36847f8003e53","gender":1,"id":1161,"name":"Mary Elizabeth Mastrantonio","order":3,"profilePath":"https://image.tmdb.org/t/p/original/jNIGODCEy216bbPnj28ky5E4L3Q.jpg"},{"castId":13,"character":"Frank Lopez","creditId":"52fe4219c3a36847f8003e57","gender":2,"id":1162,"name":"Robert Loggia","order":4,"profilePath":"https://image.tmdb.org/t/p/original/7xtU12KT12xjy4UY1O6VKpw7FLx.jpg"},{"castId":14,"character":"Mama Montana","creditId":"52fe4219c3a36847f8003e5b","gender":1,"id":1163,"name":"Miriam Colón","order":5,"profilePath":"https://image.tmdb.org/t/p/original/vNKUyJKVIvAmXT6pv0vWrZXazlS.jpg"},{"castId":15,"character":"Omar Suarez","creditId":"52fe4219c3a36847f8003e5f","gender":2,"id":1164,"name":"F. Murray Abraham","order":6,"profilePath":"https://image.tmdb.org/t/p/original/luHava7pnJLEqGH05bqENXkOsKH.jpg"},{"castId":16,"character":"Alejandro Sosa","creditId":"52fe4219c3a36847f8003e63","gender":2,"id":1165,"name":"Paul Shenar","order":7,"profilePath":"https://image.tmdb.org/t/p/original/1atzShPqdjNPAJ8J3do03ygrY2S.jpg"},{"castId":17,"character":"Mel Bernstein","creditId":"52fe4219c3a36847f8003e67","gender":2,"id":1166,"name":"Harris Yulin","order":8,"profilePath":"https://image.tmdb.org/t/p/original/MCW4IR3mEB6oeRbX9bfeHkZ3qm.jpg"},{"castId":18,"character":"Chi Chi","creditId":"52fe4219c3a36847f8003e6b","gender":2,"id":1167,"name":"Ángel Salazar","order":9,"profilePath":"https://image.tmdb.org/t/p/original/cEVKX5UXroRG9yPNrxbcFUSk22Y.jpg"}]},{"tmdbId":"112","genres":[{"id":35,"name":"Comedy"},{"id":18,"name":"Drama"},{"id":10749,"name":"Romance"}],"originalLanguage":"da","originalTitle":"Italiensk for begyndere","overview":"This fifth Danish Dogme film is about six vulnerable individuals whose lives are interwoven. In a city suburb, a young minister arrives to take up duties at a local church. He is persuaded by his assistant to join an Italian night school class, and he soon becomes the centre of a group of people to whom fate has dealt quite serious blows. Gradually each one in the group manages to overcome his/her predicament and find a happy solution. This Dogma production was shown at the Berlinale in 2001 where it surprisingly won a silver medal.","posterUrl":"https://image.tmdb.org/t/p/original/asBxCaQCiqayymEPdWqQULBxUDF.jpg","productionCompanies":"[{'name': 'Zentropa Entertainments', 'id': 76}]","productionCountries":"[{'iso_3166_1': 'DK', 'name': 'Denmark'}, {'iso_3166_1': 'SE', 'name': 'Sweden'}]","releaseDate":"2000-12-07","runtimeMinutes":112,"spokenLanguages":"[{'iso_639_1': 'da', 'name': 'Dansk'}]","status":"Released","tagline":"","title":"Italian for Beginners","cast":[{"castId":6,"character":"Jørgen Mortensen","creditId":"52fe4219c3a36847f8003f03","gender":2,"id":1181,"name":"Peter Gantzler","order":0,"profilePath":"https://image.tmdb.org/t/p/original/5W1DcELnVBMm81lKpngIWxgKx31.jpg"},{"castId":7,"character":"Giulia","creditId":"52fe4219c3a36847f8003f07","gender":1,"id":1182,"name":"Sara Indrio Jensen","order":1,"profilePath":null},{"castId":8,"character":"Karen","creditId":"52fe4219c3a36847f8003f0b","gender":1,"id":1183,"name":"Ann Eleonora Jørgensen","order":2,"profilePath":"https://image.tmdb.org/t/p/original/95Ed01N6F03FOCkem9xpQkEWVrX.jpg"},{"castId":9,"character":"Andreas","creditId":"52fe4219c3a36847f8003f0f","gender":2,"id":1184,"name":"Anders W. Berthelsen","order":3,"profilePath":"https://image.tmdb.org/t/p/original/y5mBIJnXTavpdHm1zEmHnhcNHaN.jpg"},{"castId":10,"character":"Olympia","creditId":"52fe4219c3a36847f8003f13","gender":0,"id":1185,"name":"Anette Støvelbæk","order":4,"profilePath":"https://image.tmdb.org/t/p/original/58fXjIqAp8h1eN5lzVDTjelCZx2.jpg"},{"castId":11,"character":"Hal-Finn","creditId":"52fe4219c3a36847f8003f17","gender":2,"id":1186,"name":"Lars Kaalund","order":5,"profilePath":null},{"castId":12,"character":"Real Estate Dealer","creditId":"52fe4219c3a36847f8003f1b","gender":1,"id":3880,"name":"Karen-Lise Mynster","order":6,"profilePath":"https://image.tmdb.org/t/p/original/l4NzDIJZj1b1kISKFsFGDVuZnIH.jpg"},{"castId":13,"character":"Nurse","creditId":"52fe4219c3a36847f8003f1f","gender":0,"id":3881,"name":"Rikke Wölck","order":7,"profilePath":null},{"castId":14,"character":"Reverend Wredmann","creditId":"52fe4219c3a36847f8003f23","gender":0,"id":3882,"name":"Bent Mejding","order":8,"profilePath":"https://image.tmdb.org/t/p/original/nakLQ4HOatrWeiCfyRdUaoUw3pT.jpg"},{"castId":15,"character":"Woman in Church","creditId":"52fe4219c3a36847f8003f27","gender":0,"id":3883,"name":"Elsebeth Steentoft","order":9,"profilePath":"https://image.tmdb.org/t/p/original/2sTnow7Su5H7EMx50XZT75TgC3y.jpg"}]},{"tmdbId":"113","genres":[{"id":18,"name":"Drama"}],"originalLanguage":"ko","originalTitle":"봄 여름 가을 겨울 그리고 봄","overview":"This South Korean film takes place on an isolated lake, where an old monk lives in a small floating temple. The monk has a young boy living with him, learning to become a monk. We watch as seasons and years pass by.","posterUrl":"https://image.tmdb.org/t/p/original/uYQwUyHBKLPmCqUc9wMdphiphW2.jpg","productionCompanies":"[{'name': 'LJ Film', 'id': 139}, {'name': 'Pandora Filmproduktion', 'id': 254}, {'name': 'Cineclick Asia', 'id': 685}, {'name': 'Korea Pictures', 'id': 11554}, {'name': 'Cinesoul', 'id': 11555}, {'name': 'Mirae Asset Capital', 'id': 11556}, {'name': 'Muhan Investment', 'id': 11557}]","productionCountries":"[{'iso_3166_1': 'KR', 'name': 'South Korea'}, {'iso_3166_1': 'DE', 'name': 'Germany'}]","releaseDate":"2003-09-19","runtimeMinutes":103,"spokenLanguages":"[{'iso_639_1': 'ko', 'name': '한국어/조선말'}]","status":"Released","tagline":"Spring, Summer, Autumn, Winter... and Spring","title":"Spring, Summer, Fall, Winter... and Spring","cast":[{"castId":9,"character":"Adult Monk","creditId":"52fe4219c3a36847f8003fbd","gender":2,"id":1188,"name":"Kim Ki-duk","order":0,"profilePath":"https://image.tmdb.org/t/p/original/mQnlRxDEEwwMeqn9vBT1HcQ8Ztx.jpg"},{"castId":10,"character":"Young Adult Monk","creditId":"52fe4219c3a36847f8003fc1","gender":0,"id":4259,"name":"Kim Young-min","order":1,"profilePath":"https://image.tmdb.org/t/p/original/oOQ8sTRUcuYrPewwQDdlbTLVsQS.jpg"},{"castId":12,"character":"The Girl","creditId":"52fe4219c3a36847f8003fc9","gender":0,"id":4261,"name":"Ha Yeo-jin","order":2,"profilePath":"https://image.tmdb.org/t/p/original/pX556KluW86Bxs1HBDttjQLJk1E.jpg"},{"castId":31,"character":"Old Monk","creditId":"59dc9761c3a368624d06e492","gender":2,"id":1048070,"name":"Oh Yeong-su","order":3,"profilePath":null},{"castId":27,"character":"Boy Monk","creditId":"534eb5a6c3a36867b00016c5","gender":2,"id":117376,"name":"Seo Jae-kyeong","order":4,"profilePath":null},{"castId":13,"character":"Child Monk","creditId":"52fe4219c3a36847f8003fcd","gender":0,"id":4262,"name":"Kim Jong-ho","order":5,"profilePath":null},{"castId":14,"character":"The Girl's Mother","creditId":"52fe4219c3a36847f8003fd1","gender":0,"id":4263,"name":"Kim Jung-young","order":6,"profilePath":null},{"castId":18,"character":"The Baby","creditId":"52fe4219c3a36847f8003fdd","gender":0,"id":4267,"name":"Song Min-young","order":7,"profilePath":null},{"castId":25,"character":"Detective Ji","creditId":"52fe4219c3a36847f8004005","gender":0,"id":77180,"name":"Ji Dae-Han","order":8,"profilePath":null},{"castId":29,"character":"The Baby's Mother","creditId":"55a95cb492514172ef001d94","gender":0,"id":1145852,"name":"Park Ji-ah ","order":9,"profilePath":"https://image.tmdb.org/t/p/original/nMKs9O1SFeIZ1Daa1pQaJ05oBNt.jpg"}]},{"tmdbId":"114","genres":[{"id":10749,"name":"Romance"},{"id":35,"name":"Comedy"}],"originalLanguage":"en","originalTitle":"Pretty Woman","overview":"When millionaire wheeler-dealer Edward Lewis enters a business contract with Hollywood hooker Vivian Ward, he loses his heart in the bargain in this charming romantic comedy. After Edward hires Vivian as his date for a week and gives her a Cinderella makeover, she returns the favor by mellowing the hardnosed tycoon's outlook. Can the poor prostitute and the rich capitalist live happily ever after?","posterUrl":"https://image.tmdb.org/t/p/original/fgmdaCMxXClZm2ePteLzCPySB1n.jpg","productionCompanies":"[{'name': 'Touchstone Pictures', 'id': 9195}, {'name': 'Silver Screen Partners IV', 'id': 10282}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1990-03-23","runtimeMinutes":119,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'it', 'name': 'Italiano'}, {'iso_639_1': 'ja', 'name': '日本語'}]","status":"Released","tagline":"Who knew it was so much fun to be a hooker?","title":"Pretty Woman","cast":[{"castId":5,"character":"Vivian Ward","creditId":"52fe4219c3a36847f8004051","gender":1,"id":1204,"name":"Julia Roberts","order":0,"profilePath":"https://image.tmdb.org/t/p/original/h13yvG0tRNMTAwciQXxYmQWdYW8.jpg"},{"castId":6,"character":"Edward Lewis","creditId":"52fe4219c3a36847f8004055","gender":2,"id":1205,"name":"Richard Gere","order":1,"profilePath":"https://image.tmdb.org/t/p/original/hqMhNyTqIStibnhBh8SjyfpU665.jpg"},{"castId":8,"character":"James Morse","creditId":"52fe4219c3a36847f800405d","gender":2,"id":1208,"name":"Ralph Bellamy","order":2,"profilePath":"https://image.tmdb.org/t/p/original/fjRvQxfzPw77TUMDaJHnPKirpG0.jpg"},{"castId":7,"character":"Philip Stuckey","creditId":"52fe4219c3a36847f8004059","gender":2,"id":1206,"name":"Jason Alexander","order":3,"profilePath":"https://image.tmdb.org/t/p/original/ernpSXp2RnkzeV14OEEKXRq1yND.jpg"},{"castId":9,"character":"Barney Thompson","creditId":"52fe4219c3a36847f8004061","gender":2,"id":1210,"name":"Héctor Elizondo","order":4,"profilePath":"https://image.tmdb.org/t/p/original/48UNfVFZVr0jyMIlLPhzm8IIM7f.jpg"},{"castId":10,"character":"Mr. Hollister","creditId":"52fe4219c3a36847f8004065","gender":2,"id":1211,"name":"Larry Miller","order":5,"profilePath":"https://image.tmdb.org/t/p/original/xA8zCxNrwtamLaLWNBkLyX5tGtU.jpg"},{"castId":11,"character":"Kit De Luca","creditId":"52fe4219c3a36847f8004069","gender":1,"id":1212,"name":"Laura San Giacomo","order":6,"profilePath":"https://image.tmdb.org/t/p/original/uGHG7OO1DtBWz0uztjE1MDtd0DU.jpg"},{"castId":16,"character":"David Morse","creditId":"52fe4219c3a36847f8004085","gender":0,"id":747,"name":"Alex Hyde-White","order":7,"profilePath":"https://image.tmdb.org/t/p/original/n51gvejj2jPn2rLLPC0mO47uGTL.jpg"},{"castId":17,"character":"Bridget","creditId":"52fe4219c3a36847f8004089","gender":1,"id":1209,"name":"Elinor Donahue","order":8,"profilePath":"https://image.tmdb.org/t/p/original/d1vbluWy6GBchbW18MXKKXYJfXr.jpg"},{"castId":18,"character":"Elizabeth Stuckey","creditId":"52fe4219c3a36847f800408d","gender":1,"id":1219,"name":"Amy Yasbeck","order":9,"profilePath":"https://image.tmdb.org/t/p/original/c7WOXDlKE9cwTBjpUtCKFPqnptr.jpg"}]},{"tmdbId":"115","genres":[{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"}],"originalLanguage":"en","originalTitle":"The Big Lebowski","overview":"Jeffrey \"The Dude\" Lebowski, a Los Angeles slacker who only wants to bowl and drink white Russians, is mistaken for another Jeffrey Lebowski, a wheelchair-bound millionaire, and finds himself dragged into a strange series of events involving nihilists, adult film producers, ferrets, errant toes, and large sums of money.","posterUrl":"https://image.tmdb.org/t/p/original/qiE3ovg9TPylHReZjizQ40LsKZV.jpg","productionCompanies":"[{'name': 'Gramercy Pictures', 'id': 37}, {'name': 'PolyGram Filmed Entertainment', 'id': 1382}, {'name': 'Working Title Films', 'id': 10163}]","productionCountries":"[{'iso_3166_1': 'GB', 'name': 'United Kingdom'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1998-03-06","runtimeMinutes":117,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'he', 'name': 'עִבְרִית'}, {'iso_639_1': 'es', 'name': 'Español'}, {'iso_639_1': 'de', 'name': 'Deutsch'}]","status":"Released","tagline":"Times like these call for a Big Lebowski.","title":"The Big Lebowski","cast":[{"castId":12,"character":"The Dude","creditId":"52fe421ac3a36847f8004131","gender":2,"id":1229,"name":"Jeff Bridges","order":0,"profilePath":"https://image.tmdb.org/t/p/original/xms1RAY6q7Lzp7wNeRCB0kzhucn.jpg"},{"castId":13,"character":"Walter Sobchak","creditId":"52fe421ac3a36847f8004135","gender":2,"id":1230,"name":"John Goodman","order":1,"profilePath":"https://image.tmdb.org/t/p/original/eOIx8zj1vYIRhVY2bK5cjIQfua0.jpg"},{"castId":14,"character":"Maude Lebowski","creditId":"52fe421ac3a36847f8004139","gender":1,"id":1231,"name":"Julianne Moore","order":2,"profilePath":"https://image.tmdb.org/t/p/original/v2FcWGiiuvl6P7NV0966jNL09uh.jpg"},{"castId":15,"character":"Theodore Donald \"Donny\" Kerabatsos","creditId":"52fe421ac3a36847f800413d","gender":2,"id":884,"name":"Steve Buscemi","order":3,"profilePath":"https://image.tmdb.org/t/p/original/e19GfOWzMNN1hi7B9Ci62hMvtXs.jpg"},{"castId":17,"character":"Brandt","creditId":"52fe421ac3a36847f8004145","gender":2,"id":1233,"name":"Philip Seymour Hoffman","order":4,"profilePath":"https://image.tmdb.org/t/p/original/vEDJukK8CjIsA0DjNFhoT88TvzS.jpg"},{"castId":16,"character":"Jeffrey Lebowski - The Big Lebowski","creditId":"52fe421ac3a36847f8004141","gender":2,"id":1232,"name":"David Huddleston","order":5,"profilePath":"https://image.tmdb.org/t/p/original/6cXqGzHB0zJautJVPCtbEsCtsCQ.jpg"},{"castId":26,"character":"Jesus Quintana","creditId":"52fe421ac3a36847f8004169","gender":2,"id":1241,"name":"John Turturro","order":6,"profilePath":"https://image.tmdb.org/t/p/original/70V4hwvWN0J3aX2LzQg7eKCeq29.jpg"},{"castId":18,"character":"Bunny Lebowski","creditId":"52fe421ac3a36847f8004149","gender":1,"id":1234,"name":"Tara Reid","order":7,"profilePath":"https://image.tmdb.org/t/p/original/9nI9GsV1HZS3YKvMqrGuuEYWr8v.jpg"},{"castId":30,"character":"The Stranger","creditId":"52fe421ac3a36847f800417b","gender":2,"id":16431,"name":"Sam Elliott","order":8,"profilePath":"https://image.tmdb.org/t/p/original/td95IbYZf4LMA2wiEjktAsQvzhW.jpg"},{"castId":28,"character":"Jackie Treehorn","creditId":"52fe421ac3a36847f8004171","gender":2,"id":856,"name":"Ben Gazzara","order":9,"profilePath":"https://image.tmdb.org/t/p/original/dbmfyjTC3PSBvHOjlAMI0I0eZ6T.jpg"}]},{"tmdbId":"116","genres":[{"id":18,"name":"Drama"},{"id":53,"name":"Thriller"},{"id":80,"name":"Crime"},{"id":10749,"name":"Romance"}],"originalLanguage":"en","originalTitle":"Match Point","overview":"Match Point is Woody Allen’s satire of the British High Society and the ambition of a young tennis instructor to enter into it. Yet when he must decide between two women - one assuring him his place in high society, and the other that would bring him far from it - palms start to sweat and a dark psychological match in his head begins.","posterUrl":"https://image.tmdb.org/t/p/original/80iHkrFzNxbSxlfMaLaNkGFRK2r.jpg","productionCompanies":"[{'name': 'DreamWorks', 'id': 7}]","productionCountries":"[{'iso_3166_1': 'IE', 'name': 'Ireland'}, {'iso_3166_1': 'LU', 'name': 'Luxembourg'}, {'iso_3166_1': 'RU', 'name': 'Russia'}, {'iso_3166_1': 'GB', 'name': 'United Kingdom'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2005-10-26","runtimeMinutes":124,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Passion Temptation Obsession","title":"Match Point","cast":[{"castId":16,"character":"Chris Wilton","creditId":"530633d692514134912c121e","gender":2,"id":1244,"name":"Jonathan Rhys Meyers","order":0,"profilePath":"https://image.tmdb.org/t/p/original/A6RyyQ4GeXl0ugnGrqGqBMQIgKh.jpg"},{"castId":17,"character":"Nola Rice","creditId":"5306347792514134972b7868","gender":1,"id":1245,"name":"Scarlett Johansson","order":1,"profilePath":"https://image.tmdb.org/t/p/original/eYFHUWxTCNg6lPypJCaUQXhoUop.jpg"},{"castId":18,"character":"Chloe Hewett Wilton","creditId":"530634b3925141348b2dd441","gender":1,"id":1246,"name":"Emily Mortimer","order":2,"profilePath":"https://image.tmdb.org/t/p/original/rdHrGCfnVcZkbOjfEDnWbk80X5Z.jpg"},{"castId":19,"character":"Alec Hewett","creditId":"530634cf92514134972b89f1","gender":2,"id":1248,"name":"Brian Cox","order":3,"profilePath":"https://image.tmdb.org/t/p/original/m15C58NWii5WCIg57Llr7hejnfy.jpg"},{"castId":21,"character":"Eleanor Hewett","creditId":"5306357192514134942b82ca","gender":1,"id":1249,"name":"Penelope Wilton","order":4,"profilePath":"https://image.tmdb.org/t/p/original/zmEAhqyNuBP6JVL9Z6xBJN6CSxN.jpg"},{"castId":23,"character":"Detective Banner","creditId":"5306371a925141348528300b","gender":2,"id":34715,"name":"James Nesbitt","order":5,"profilePath":"https://image.tmdb.org/t/p/original/n9NorD6bQfFJlW4IcJ6WoGiAKcR.jpg"},{"castId":24,"character":"Inspector Dowd","creditId":"5306379292514134912c7e4b","gender":2,"id":1125,"name":"Ewen Bremner","order":6,"profilePath":"https://image.tmdb.org/t/p/original/7CQBnBHSNDcbY2LucqWqEpKWsCH.jpg"},{"castId":22,"character":"Heather","creditId":"530636ff92514134a2286ae9","gender":1,"id":195525,"name":"Miranda Raison","order":7,"profilePath":"https://image.tmdb.org/t/p/original/tlqpWCsgKP8HSQztnURvcN1yQxT.jpg"},{"castId":25,"character":"Mrs. Eastby","creditId":"53063905c3a3685a8f294651","gender":1,"id":250,"name":"Margaret Tyzack","order":8,"profilePath":"https://image.tmdb.org/t/p/original/x46TBOnZI9i5jfIkD12i8cnrQdK.jpg"},{"castId":26,"character":"Henry","creditId":"530b670f92514168dc000f90","gender":2,"id":42276,"name":"Rupert Penry-Jones","order":9,"profilePath":"https://image.tmdb.org/t/p/original/8WoMM6UnqbZuSV46uCDBqJK3Hd7.jpg"}]},{"tmdbId":"117","genres":[{"id":80,"name":"Crime"},{"id":18,"name":"Drama"},{"id":36,"name":"History"},{"id":53,"name":"Thriller"}],"originalLanguage":"en","originalTitle":"The Untouchables","overview":"Young Treasury Agent Elliot Ness arrives in Chicago and is determined to take down Al Capone, but it's not going to be easy because Capone has the police in his pocket. Ness meets Jimmy Malone, a veteran patrolman and probably the most honorable one on the force. He asks Malone to help him get Capone, but Malone warns him that if he goes after Capone, he is going to war.","posterUrl":"https://image.tmdb.org/t/p/original/qx4CDBhJDX5LQoVZ8UXPxQy5pt7.jpg","productionCompanies":"[{'name': 'Paramount Pictures', 'id': 4}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1987-06-02","runtimeMinutes":119,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"What are you prepared to do?","title":"The Untouchables","cast":[{"castId":14,"character":"Eliot Ness","creditId":"52fe421ac3a36847f800427d","gender":2,"id":1269,"name":"Kevin Costner","order":0,"profilePath":"https://image.tmdb.org/t/p/original/ePo87kGyyY8JZ3z7Zm7Z2GYdmJ8.jpg"},{"castId":15,"character":"Jim Malone","creditId":"52fe421ac3a36847f8004281","gender":2,"id":738,"name":"Sean Connery","order":1,"profilePath":"https://image.tmdb.org/t/p/original/ce84udJZ9QRSR44jxwK2apM3DM8.jpg"},{"castId":16,"character":"Agent Oscar Wallace","creditId":"52fe421ac3a36847f8004285","gender":2,"id":1270,"name":"Charles Martin Smith","order":2,"profilePath":"https://image.tmdb.org/t/p/original/fahfWqqrdJwajrfEGmEOXQ1p9bm.jpg"},{"castId":17,"character":"Agent George Stone/Giuseppe Petri","creditId":"52fe421ac3a36847f8004289","gender":2,"id":1271,"name":"Andy García","order":3,"profilePath":"https://image.tmdb.org/t/p/original/zE3KYH6f6cxCehJJYKDTQa8sCaK.jpg"},{"castId":18,"character":"Al Capone","creditId":"52fe421ac3a36847f800428d","gender":2,"id":380,"name":"Robert De Niro","order":4,"profilePath":"https://image.tmdb.org/t/p/original/lvTSwUcvJRLAJ2FB5qFaukel516.jpg"},{"castId":19,"character":"Police Chief Mike Dorsett","creditId":"52fe421ac3a36847f8004291","gender":2,"id":1272,"name":"Richard Bradford","order":5,"profilePath":"https://image.tmdb.org/t/p/original/fGMexQI7Po1AuHO7masqwUWId1P.jpg"},{"castId":20,"character":"Walter Payne","creditId":"52fe421ac3a36847f8004295","gender":2,"id":1273,"name":"Jack Kehoe","order":6,"profilePath":"https://image.tmdb.org/t/p/original/ttDHV6m9OOAWuXnAorCTDel8vNO.jpg"},{"castId":21,"character":"George","creditId":"52fe421ac3a36847f8004299","gender":0,"id":1274,"name":"Brad Sullivan","order":7,"profilePath":"https://image.tmdb.org/t/p/original/2hrVPDc3A6ngUV1dAJ5XEz3p5bD.jpg"},{"castId":22,"character":"Frank Nitti","creditId":"52fe421ac3a36847f800429d","gender":2,"id":1275,"name":"Billy Drago","order":8,"profilePath":"https://image.tmdb.org/t/p/original/5KAkTHIYc9L3CMWJvKEHCeYUcFm.jpg"},{"castId":23,"character":"Catherine Ness","creditId":"52fe421ac3a36847f80042a1","gender":1,"id":1276,"name":"Patricia Clarkson","order":9,"profilePath":"https://image.tmdb.org/t/p/original/10ZSyaUqzUlKTd60HmeiGhlytZG.jpg"}]},{"tmdbId":"118","genres":[{"id":12,"name":"Adventure"},{"id":35,"name":"Comedy"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"}],"originalLanguage":"en","originalTitle":"Charlie and the Chocolate Factory","overview":"A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker.","posterUrl":"https://image.tmdb.org/t/p/original/dvHl1dYvaZRhj9Gk0ITcCHr4DIJ.jpg","productionCompanies":"[{'name': 'Village Roadshow Pictures', 'id': 79}, {'name': 'The Zanuck Company', 'id': 80}, {'name': 'Warner Bros.', 'id': 6194}, {'name': 'Tim Burton Productions', 'id': 8601}, {'name': 'Plan B Entertainment', 'id': 45778}, {'name': 'Theobald Film Productions', 'id': 55512}]","productionCountries":"[{'iso_3166_1': 'AU', 'name': 'Australia'}, {'iso_3166_1': 'GB', 'name': 'United Kingdom'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2005-07-13","runtimeMinutes":115,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Willy Wonka is semi-sweet and nuts.","title":"Charlie and the Chocolate Factory","cast":[{"castId":2,"character":"Willy Wonka","creditId":"52fe421ac3a36847f80042ff","gender":2,"id":85,"name":"Johnny Depp","order":0,"profilePath":"https://image.tmdb.org/t/p/original/kbWValANhZI8rbWZXximXuMN4UN.jpg"},{"castId":3,"character":"Charlie Bucket","creditId":"52fe421ac3a36847f8004303","gender":2,"id":1281,"name":"Freddie Highmore","order":1,"profilePath":"https://image.tmdb.org/t/p/original/5wou22G4dMRcnpMrRyPfLclZ2lD.jpg"},{"castId":4,"character":"Grandpa Joe","creditId":"52fe421ac3a36847f8004307","gender":2,"id":1282,"name":"David Kelly","order":2,"profilePath":"https://image.tmdb.org/t/p/original/jxPBAzbia65yJAsNxoyGQri5Bah.jpg"},{"castId":7,"character":"Violet Beauregarde","creditId":"52fe421ac3a36847f8004313","gender":1,"id":1285,"name":"AnnaSophia Robb","order":3,"profilePath":"https://image.tmdb.org/t/p/original/jktnEA6LUBl4JTh7uPRfUFQFXBn.jpg"},{"castId":8,"character":"Veruca Salt","creditId":"52fe421ac3a36847f8004317","gender":1,"id":1286,"name":"Julia Winter","order":4,"profilePath":"https://image.tmdb.org/t/p/original/tOmLJwV53aSxRHxidQUQ8MhLtWC.jpg"},{"castId":9,"character":"Mike Teavee","creditId":"52fe421ac3a36847f800431b","gender":2,"id":1290,"name":"Jordan Fry","order":5,"profilePath":"https://image.tmdb.org/t/p/original/9mr4LKxtlSFLFTgQ0eFlD6yHtdI.jpg"},{"castId":10,"character":"Augustus Glupsch","creditId":"52fe421ac3a36847f800431f","gender":2,"id":1291,"name":"Philip Wiegratz","order":6,"profilePath":"https://image.tmdb.org/t/p/original/KXDK5MJ7juz7H1EzEe2pDdljDP.jpg"},{"castId":5,"character":"Mrs. Bucket","creditId":"52fe421ac3a36847f800430b","gender":1,"id":1283,"name":"Helena Bonham Carter","order":7,"profilePath":"https://image.tmdb.org/t/p/original/rHZMwkumoRvhKV5ZvwBONKENAhG.jpg"},{"castId":6,"character":"Mr. Bucket","creditId":"52fe421ac3a36847f800430f","gender":2,"id":1284,"name":"Noah Taylor","order":8,"profilePath":"https://image.tmdb.org/t/p/original/dSlH0WA09dVqQhgB7LB5xn8WzD.jpg"},{"castId":13,"character":"Mrs. Beauregard","creditId":"52fe421ac3a36847f800432b","gender":1,"id":1294,"name":"Missi Pyle","order":9,"profilePath":"https://image.tmdb.org/t/p/original/gjJiT50eCgPMRsIKl03v64CJOPf.jpg"}]},{"tmdbId":"120","genres":[{"id":12,"name":"Adventure"},{"id":14,"name":"Fantasy"},{"id":28,"name":"Action"}],"originalLanguage":"en","originalTitle":"The Lord of the Rings: The Fellowship of the Ring","overview":"Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.","posterUrl":"https://image.tmdb.org/t/p/original/bxVxZb5O9OxCO0oRUNdCnpy9NST.jpg","productionCompanies":"[{'name': 'WingNut Films', 'id': 11}, {'name': 'New Line Cinema', 'id': 12}, {'name': 'The Saul Zaentz Company', 'id': 5237}]","productionCountries":"[{'iso_3166_1': 'NZ', 'name': 'New Zealand'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2001-12-18","runtimeMinutes":178,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"One ring to rule them all","title":"The Lord of the Rings: The Fellowship of the Ring","cast":[{"castId":28,"character":"Frodo Baggins","creditId":"52fe421ac3a36847f800448f","gender":2,"id":109,"name":"Elijah Wood","order":0,"profilePath":"https://image.tmdb.org/t/p/original/hHzLAVspGGuPg1KW5JAEsyRvnUT.jpg"},{"castId":29,"character":"Gandalf the Grey","creditId":"52fe421ac3a36847f8004493","gender":2,"id":1327,"name":"Ian McKellen","order":1,"profilePath":"https://image.tmdb.org/t/p/original/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg"},{"castId":40,"character":"Galadriel","creditId":"52fe421ac3a36847f80044bf","gender":1,"id":112,"name":"Cate Blanchett","order":2,"profilePath":"https://image.tmdb.org/t/p/original/33vvSBq51vpXwfkhQzQTwgRAUeI.jpg"},{"castId":32,"character":"Legolas","creditId":"52fe421ac3a36847f800449f","gender":2,"id":114,"name":"Orlando Bloom","order":3,"profilePath":"https://image.tmdb.org/t/p/original/kKWJlX2tcjqceSfUxnV7Jle5Kt.jpg"},{"castId":34,"character":"Boromir","creditId":"52fe421ac3a36847f80044a7","gender":2,"id":48,"name":"Sean Bean","order":4,"profilePath":"https://image.tmdb.org/t/p/original/iIxP2IzvcLgr5WaTBD4UfSqaV3q.jpg"},{"castId":30,"character":"Aragorn","creditId":"52fe421ac3a36847f8004497","gender":2,"id":110,"name":"Viggo Mortensen","order":5,"profilePath":"https://image.tmdb.org/t/p/original/gYtVNMwX96fE9F0WVkdC0SGffkn.jpg"},{"castId":39,"character":"Elrond","creditId":"52fe421ac3a36847f80044bb","gender":2,"id":1331,"name":"Hugo Weaving","order":6,"profilePath":"https://image.tmdb.org/t/p/original/di4A3qhYBIVdlH9DKjqbWfo3FWw.jpg"},{"castId":31,"character":"Arwen Evenstar","creditId":"52fe421ac3a36847f800449b","gender":1,"id":882,"name":"Liv Tyler","order":7,"profilePath":"https://image.tmdb.org/t/p/original/jtVSUwsQCaYcO2nMyZe7SBGvYVU.jpg"},{"castId":33,"character":"Gimli","creditId":"52fe421ac3a36847f80044a3","gender":2,"id":655,"name":"John Rhys-Davies","order":8,"profilePath":"https://image.tmdb.org/t/p/original/zZ67PuoFfik9QlZyfaEsFBC1yVJ.jpg"},{"castId":35,"character":"Saruman","creditId":"52fe421ac3a36847f80044ab","gender":2,"id":113,"name":"Christopher Lee","order":9,"profilePath":"https://image.tmdb.org/t/p/original/aVzp6zflzedmdKPLxaPqcZ05PDK.jpg"}]},{"tmdbId":"121","genres":[{"id":12,"name":"Adventure"},{"id":14,"name":"Fantasy"},{"id":28,"name":"Action"}],"originalLanguage":"en","originalTitle":"The Lord of the Rings: The Two Towers","overview":"Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.","posterUrl":"https://image.tmdb.org/t/p/original/wf3v0Pn09jnT5HSaYal7Ami3bdA.jpg","productionCompanies":"[{'name': 'WingNut Films', 'id': 11}, {'name': 'New Line Cinema', 'id': 12}, {'name': 'The Saul Zaentz Company', 'id': 5237}]","productionCountries":"[{'iso_3166_1': 'NZ', 'name': 'New Zealand'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2002-12-18","runtimeMinutes":179,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"A New Power Is Rising.","title":"The Lord of the Rings: The Two Towers","cast":[{"castId":13,"character":"Frodo Baggins","creditId":"52fe421ac3a36847f8004589","gender":2,"id":109,"name":"Elijah Wood","order":0,"profilePath":"https://image.tmdb.org/t/p/original/hHzLAVspGGuPg1KW5JAEsyRvnUT.jpg"},{"castId":14,"character":"Gandalf the White","creditId":"52fe421ac3a36847f800458d","gender":2,"id":1327,"name":"Ian McKellen","order":1,"profilePath":"https://image.tmdb.org/t/p/original/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg"},{"castId":15,"character":"Aragorn","creditId":"52fe421ac3a36847f8004591","gender":2,"id":110,"name":"Viggo Mortensen","order":2,"profilePath":"https://image.tmdb.org/t/p/original/gYtVNMwX96fE9F0WVkdC0SGffkn.jpg"},{"castId":16,"character":"Arwen Evenstar","creditId":"52fe421ac3a36847f8004595","gender":1,"id":882,"name":"Liv Tyler","order":3,"profilePath":"https://image.tmdb.org/t/p/original/jtVSUwsQCaYcO2nMyZe7SBGvYVU.jpg"},{"castId":17,"character":"Legolas","creditId":"52fe421ac3a36847f8004599","gender":2,"id":114,"name":"Orlando Bloom","order":4,"profilePath":"https://image.tmdb.org/t/p/original/kKWJlX2tcjqceSfUxnV7Jle5Kt.jpg"},{"castId":18,"character":"Gimli / Voice of Treebeard","creditId":"52fe421ac3a36847f800459d","gender":2,"id":655,"name":"John Rhys-Davies","order":5,"profilePath":"https://image.tmdb.org/t/p/original/zZ67PuoFfik9QlZyfaEsFBC1yVJ.jpg"},{"castId":19,"character":"Saruman","creditId":"52fe421ac3a36847f80045a1","gender":2,"id":113,"name":"Christopher Lee","order":6,"profilePath":"https://image.tmdb.org/t/p/original/aVzp6zflzedmdKPLxaPqcZ05PDK.jpg"},{"castId":20,"character":"Sam Gamgee","creditId":"52fe421ac3a36847f80045a5","gender":2,"id":1328,"name":"Sean Astin","order":7,"profilePath":"https://image.tmdb.org/t/p/original/ezv9hRbgrR6Uuz4xWqX22cpiRXJ.jpg"},{"castId":21,"character":"Peregrin 'Pippin' Took","creditId":"52fe421ac3a36847f80045a9","gender":2,"id":1329,"name":"Billy Boyd","order":8,"profilePath":"https://image.tmdb.org/t/p/original/nwNHDM67VYAb87sjSqYQVWaZKyK.jpg"},{"castId":22,"character":"Meriadoc 'Merry' Brandybuck","creditId":"52fe421ac3a36847f80045ad","gender":2,"id":1330,"name":"Dominic Monaghan","order":9,"profilePath":"https://image.tmdb.org/t/p/original/sXkqoK3v1nfCudXIcxKVwDc0imw.jpg"}]},{"tmdbId":"122","genres":[{"id":12,"name":"Adventure"},{"id":14,"name":"Fantasy"},{"id":28,"name":"Action"}],"originalLanguage":"en","originalTitle":"The Lord of the Rings: The Return of the King","overview":"Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.","posterUrl":"https://image.tmdb.org/t/p/original/uexxR7Kw1qYbZk0RYaF9Rx5ykbj.jpg","productionCompanies":"[{'name': 'WingNut Films', 'id': 11}, {'name': 'New Line Cinema', 'id': 12}]","productionCountries":"[{'iso_3166_1': 'NZ', 'name': 'New Zealand'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2003-12-01","runtimeMinutes":201,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"The eye of the enemy is moving.","title":"The Lord of the Rings: The Return of the King","cast":[{"castId":12,"character":"Frodo Baggins","creditId":"52fe421bc3a36847f80046f7","gender":2,"id":109,"name":"Elijah Wood","order":0,"profilePath":"https://image.tmdb.org/t/p/original/hHzLAVspGGuPg1KW5JAEsyRvnUT.jpg"},{"castId":13,"character":"Gandalf the White","creditId":"52fe421bc3a36847f80046fb","gender":2,"id":1327,"name":"Ian McKellen","order":1,"profilePath":"https://image.tmdb.org/t/p/original/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg"},{"castId":14,"character":"Aragorn","creditId":"52fe421bc3a36847f80046ff","gender":2,"id":110,"name":"Viggo Mortensen","order":2,"profilePath":"https://image.tmdb.org/t/p/original/gYtVNMwX96fE9F0WVkdC0SGffkn.jpg"},{"castId":15,"character":"Arwen Evenstar","creditId":"52fe421bc3a36847f8004703","gender":1,"id":882,"name":"Liv Tyler","order":3,"profilePath":"https://image.tmdb.org/t/p/original/jtVSUwsQCaYcO2nMyZe7SBGvYVU.jpg"},{"castId":16,"character":"Legolas","creditId":"52fe421bc3a36847f8004707","gender":2,"id":114,"name":"Orlando Bloom","order":4,"profilePath":"https://image.tmdb.org/t/p/original/kKWJlX2tcjqceSfUxnV7Jle5Kt.jpg"},{"castId":17,"character":"Gimli & Treebeard (Voice)","creditId":"52fe421bc3a36847f800470b","gender":2,"id":655,"name":"John Rhys-Davies","order":5,"profilePath":"https://image.tmdb.org/t/p/original/zZ67PuoFfik9QlZyfaEsFBC1yVJ.jpg"},{"castId":18,"character":"Sam Gamgee","creditId":"52fe421bc3a36847f800470f","gender":2,"id":1328,"name":"Sean Astin","order":6,"profilePath":"https://image.tmdb.org/t/p/original/ezv9hRbgrR6Uuz4xWqX22cpiRXJ.jpg"},{"castId":19,"character":"Peregrin 'Pippin' Took","creditId":"52fe421bc3a36847f8004713","gender":2,"id":1329,"name":"Billy Boyd","order":7,"profilePath":"https://image.tmdb.org/t/p/original/nwNHDM67VYAb87sjSqYQVWaZKyK.jpg"},{"castId":20,"character":"Meriadoc 'Merry' Brandybuck","creditId":"52fe421bc3a36847f8004717","gender":2,"id":1330,"name":"Dominic Monaghan","order":8,"profilePath":"https://image.tmdb.org/t/p/original/sXkqoK3v1nfCudXIcxKVwDc0imw.jpg"},{"castId":23,"character":"Gollum","creditId":"52fe421bc3a36847f8004723","gender":2,"id":1333,"name":"Andy Serkis","order":9,"profilePath":"https://image.tmdb.org/t/p/original/nQRsxFveJaUIlZ4GYWDe9uJ6u2f.jpg"}]},{"tmdbId":"123","genres":[{"id":14,"name":"Fantasy"},{"id":18,"name":"Drama"},{"id":16,"name":"Animation"},{"id":12,"name":"Adventure"}],"originalLanguage":"en","originalTitle":"The Lord of the Rings","overview":"The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron's reign over Middle-earth.","posterUrl":"https://image.tmdb.org/t/p/original/1l3WpoF7TX9pOprX4XepCXjQXUV.jpg","productionCompanies":"[{'name': 'United Artists', 'id': 60}, {'name': 'Fantasy Films', 'id': 286}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1978-11-15","runtimeMinutes":132,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Fantasy...beyond your imagination","title":"The Lord of the Rings","cast":[{"castId":1,"character":"Frodo (voice)","creditId":"52fe421bc3a36847f80047df","gender":2,"id":16270,"name":"Christopher Guard","order":0,"profilePath":"https://image.tmdb.org/t/p/original/7jHduhvSkeCVyPH3LQEeMC3hbvV.jpg"},{"castId":2,"character":"Gandalf (voice)","creditId":"52fe421bc3a36847f80047e3","gender":2,"id":16271,"name":"William Squire","order":1,"profilePath":null},{"castId":3,"character":"Sam (voice)","creditId":"52fe421bc3a36847f80047e7","gender":0,"id":16272,"name":"Michael Scholes","order":2,"profilePath":null},{"castId":4,"character":"Aragorn (voice)","creditId":"52fe421bc3a36847f80047eb","gender":2,"id":5049,"name":"John Hurt","order":3,"profilePath":"https://image.tmdb.org/t/p/original/tW6cOElGBdJl8nNrHwL6gvxvdkI.jpg"},{"castId":5,"character":"Merry (voice)","creditId":"52fe421bc3a36847f80047ef","gender":2,"id":16273,"name":"Simon Chandler","order":4,"profilePath":"https://image.tmdb.org/t/p/original/j30wLavbX35RxxtjvMvCNK8Exsw.jpg"},{"castId":6,"character":"Pippin (voice)","creditId":"52fe421bc3a36847f80047f3","gender":2,"id":16274,"name":"Dominic Guard","order":5,"profilePath":null},{"castId":7,"character":"Bilbo (voice)","creditId":"52fe421bc3a36847f80047f7","gender":2,"id":16275,"name":"Norman Bird","order":6,"profilePath":"https://image.tmdb.org/t/p/original/lHj58cWdvdkleI7lDTpRHnwqKP4.jpg"},{"castId":8,"character":"Boromir (voice)","creditId":"52fe421bc3a36847f80047fb","gender":2,"id":16380,"name":"Michael Graham Cox","order":7,"profilePath":null},{"castId":9,"character":"Legolas (voice)","creditId":"52fe421bc3a36847f80047ff","gender":2,"id":6,"name":"Anthony Daniels","order":8,"profilePath":"https://image.tmdb.org/t/p/original/cljvryjb3VwTsNR7fjQKjNPMaBB.jpg"},{"castId":10,"character":"Gimli (voice)","creditId":"52fe421bc3a36847f8004803","gender":2,"id":16381,"name":"David Buck","order":9,"profilePath":"https://image.tmdb.org/t/p/original/3H40jRDVkwFQBkNKcltURddMXzI.jpg"}]},{"tmdbId":"124","genres":[{"id":18,"name":"Drama"},{"id":14,"name":"Fantasy"}],"originalLanguage":"pl","originalTitle":"Bez Konca","overview":"Taking place in a 1982 Poland a translator loses her husband and becomes a victim of her own sorrow. She looks to sex, to her son, to law, and to hypnotism when she has nothing else in this time of martial law when Solidarity was banned.","posterUrl":"https://image.tmdb.org/t/p/original/f92Uj97MT2DXVQBYU5J9ope74Mc.jpg","productionCompanies":"[{'name': 'P.P. Film Polski', 'id': 1587}]","productionCountries":"[{'iso_3166_1': 'PL', 'name': 'Poland'}]","releaseDate":"1985-06-17","runtimeMinutes":109,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'pl', 'name': 'Polski'}]","status":"Released","tagline":"","title":"No End","cast":[{"castId":7,"character":"Ursula Zyro","creditId":"52fe421bc3a36847f8004887","gender":0,"id":1384,"name":"Grażyna Szapołowska","order":0,"profilePath":"https://image.tmdb.org/t/p/original/mtLDJgOzTDbuWDMIm0LwQlyDO4h.jpg"},{"castId":8,"character":"Joanna Stach","creditId":"52fe421bc3a36847f800488b","gender":0,"id":1385,"name":"Maria Pakulnis","order":1,"profilePath":"https://image.tmdb.org/t/p/original/gmFL4lWHJ2g25Y2QnV1UljGGXza.jpg"},{"castId":9,"character":"Rechtsanwalt Mieczyslaw Labrador","creditId":"52fe421bc3a36847f800488f","gender":2,"id":1149,"name":"Aleksander Bardini","order":2,"profilePath":"https://image.tmdb.org/t/p/original/eKA1CdsPcekZzlYB9vzZAxDgRPm.jpg"},{"castId":10,"character":"Antoni Zyro","creditId":"52fe421bc3a36847f8004893","gender":0,"id":1386,"name":"Jerzy Radziwiłowicz","order":3,"profilePath":"https://image.tmdb.org/t/p/original/fKTbFcO0fkpFVkVjbbQRlaprxsg.jpg"},{"castId":11,"character":"Dariusz Stach","creditId":"52fe421bc3a36847f8004897","gender":0,"id":1387,"name":"Artur Barciś","order":4,"profilePath":"https://image.tmdb.org/t/p/original/yDHi7M2vQNtziDcwC1O4OIVNwf3.jpg"},{"castId":12,"character":"Sohn Jacek Zyro","creditId":"52fe421bc3a36847f800489b","gender":0,"id":1391,"name":"Krzysztof Krzemiński","order":5,"profilePath":null}]},{"tmdbId":"127","genres":[{"id":18,"name":"Drama"}],"originalLanguage":"pl","originalTitle":"Przypadek","overview":"Witek runs after a train. Three variations follow on how such a seemingly banal incident could influence the rest of Witek's life.","posterUrl":"https://image.tmdb.org/t/p/original/vAhE65Ml03TS9GlXGWqd4jsdOIW.jpg","productionCompanies":"[{'name': 'P.P. Film Polski', 'id': 1587}]","productionCountries":"[{'iso_3166_1': 'PL', 'name': 'Poland'}]","releaseDate":"1987-01-10","runtimeMinutes":123,"spokenLanguages":"[{'iso_639_1': 'pl', 'name': 'Polski'}]","status":"Released","tagline":"","title":"Blind Chance","cast":[{"castId":8,"character":"Adam","creditId":"52fe421bc3a36847f800492b","gender":2,"id":1405,"name":"Zbigniew Zapasiewicz","order":0,"profilePath":"https://image.tmdb.org/t/p/original/lJOImB56KclzTlst5HMVqpQCR4p.jpg"},{"castId":9,"character":"2. Werka","creditId":"52fe421bc3a36847f800492f","gender":0,"id":1408,"name":"Marzena Trybała","order":1,"profilePath":"https://image.tmdb.org/t/p/original/vfqD6niBrllSeXPxfz2Pfv1lINF.jpg"},{"castId":10,"character":"Jugendaktivist","creditId":"52fe421bc3a36847f8004933","gender":0,"id":1148,"name":"Jerzy Stuhr","order":2,"profilePath":"https://image.tmdb.org/t/p/original/2SqqKdL835Hg5aLCPKVOyZyggCN.jpg"},{"castId":11,"character":"2. Priest","creditId":"52fe421bc3a36847f8004937","gender":2,"id":1409,"name":"Adam Ferency","order":3,"profilePath":"https://image.tmdb.org/t/p/original/e1HIFCx8iVYEy3Ni6SGb82P5q6X.jpg"},{"castId":12,"character":"1. Werner","creditId":"52fe421bc3a36847f800493b","gender":2,"id":1413,"name":"Tadeusz Łomnicki","order":4,"profilePath":"https://image.tmdb.org/t/p/original/4mGgpzcA8Z4cbB6NkZs5uqnHppE.jpg"},{"castId":13,"character":"Witek Długosz","creditId":"52fe421bc3a36847f800493f","gender":2,"id":144972,"name":"Bogusław Linda","order":5,"profilePath":"https://image.tmdb.org/t/p/original/zTLLj81HETfUo9OrexdIuMVOHjB.jpg"},{"castId":25,"character":"Czuszka","creditId":"566252e0c3a3682bd0001933","gender":0,"id":87234,"name":"Bogusława Pawelec","order":6,"profilePath":"https://image.tmdb.org/t/p/original/58b1SCpLIJZfNz0AXm1aYNL8uUF.jpg"},{"castId":26,"character":"2. Marek","creditId":"56625313c3a3682c01001a13","gender":0,"id":1138653,"name":"Jacek Borkowski","order":7,"profilePath":"https://image.tmdb.org/t/p/original/7DOFvxoEDmUQLLSNpGTYAADeRIY.jpg"},{"castId":27,"character":"2. Daniel","creditId":"5662531c9251412ad30019e1","gender":0,"id":1544938,"name":"Jacek Sas-Uhrynowski","order":8,"profilePath":"https://image.tmdb.org/t/p/original/l2UpOCVzSH9LUu71hKYpixKsC0b.jpg"},{"castId":28,"character":"Olga","creditId":"566253329251412ad9001ae8","gender":0,"id":1544939,"name":"Monika Gozdzik","order":9,"profilePath":"https://image.tmdb.org/t/p/original/msK3dtAEpLzw8A4d8ZIcmOkPYyD.jpg"}]},{"tmdbId":"128","genres":[{"id":12,"name":"Adventure"},{"id":14,"name":"Fantasy"},{"id":16,"name":"Animation"}],"originalLanguage":"ja","originalTitle":"もののけ姫","overview":"Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.","posterUrl":"https://image.tmdb.org/t/p/original/gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg","productionCompanies":"[{'name': 'Miramax Films', 'id': 14}, {'name': 'Studio Ghibli', 'id': 10342}, {'name': 'Nibariki', 'id': 12516}, {'name': 'Nippon Television Network (NTV)', 'id': 20192}]","productionCountries":"[{'iso_3166_1': 'JP', 'name': 'Japan'}]","releaseDate":"1997-07-12","runtimeMinutes":134,"spokenLanguages":"[{'iso_639_1': 'ja', 'name': '日本語'}]","status":"Released","tagline":"The Fate Of The World Rests On The Courage Of One Warrior.","title":"Princess Mononoke","cast":[{"castId":3,"character":"Ashitaka (voice)","creditId":"52fe421bc3a36847f800499d","gender":0,"id":622,"name":"Yōji Matsuda","order":0,"profilePath":"https://image.tmdb.org/t/p/original/wZijOHyaFIVKJY9yfyIsusamFbv.jpg"},{"castId":4,"character":"San (voice)","creditId":"52fe421bc3a36847f80049a1","gender":1,"id":20330,"name":"Yuriko Ishida","order":1,"profilePath":"https://image.tmdb.org/t/p/original/ntaS0ZnY7Z3523R1ov6BsrjdVyc.jpg"},{"castId":5,"character":"Eboshi-gozen (voice)","creditId":"52fe421bc3a36847f80049a5","gender":0,"id":20331,"name":"Yūko Tanaka","order":2,"profilePath":"https://image.tmdb.org/t/p/original/k32uD3NkzeJHPaALp0amspIqVzc.jpg"},{"castId":6,"character":"Jiko-bô (voice)","creditId":"52fe421bc3a36847f80049a9","gender":2,"id":20332,"name":"Kaoru Kobayashi","order":3,"profilePath":"https://image.tmdb.org/t/p/original/ao6ahEACiVZuQAQ2ysL7DSbRwfS.jpg"},{"castId":7,"character":"Kouroku (voice)","creditId":"52fe421bc3a36847f80049ad","gender":2,"id":20333,"name":"Masahiko Nishimura","order":4,"profilePath":"https://image.tmdb.org/t/p/original/wCoWoRUYhycGU22ZsHM83EmJxLA.jpg"},{"castId":8,"character":"Gonza (voice)","creditId":"52fe421bc3a36847f80049b1","gender":2,"id":20334,"name":"Tsunehiko Kamijô","order":5,"profilePath":"https://image.tmdb.org/t/p/original/77pKowLgnF91xyuFnG0KwflfSIl.jpg"},{"castId":9,"character":"Toki (voice)","creditId":"52fe421bc3a36847f80049b5","gender":0,"id":613,"name":"Sumi Shimamoto","order":6,"profilePath":"https://image.tmdb.org/t/p/original/cB1JXMD6Eyb1ONKfsj32Lai4AfV.jpg"},{"castId":10,"character":"Yama-inu (voice)","creditId":"52fe421bc3a36847f80049b9","gender":0,"id":20335,"name":"Tetsu Watanabe","order":7,"profilePath":"https://image.tmdb.org/t/p/original/6dlabJPfVvTARfd7ZWEdncfJ3SI.jpg"},{"castId":11,"character":"Tatari-gami (voice)","creditId":"52fe421bc3a36847f80049bd","gender":0,"id":20336,"name":"Mitsuru Satô","order":8,"profilePath":null},{"castId":12,"character":"Usi-kai (voice)","creditId":"52fe421bc3a36847f80049c1","gender":0,"id":20337,"name":"Akira Nagoya","order":9,"profilePath":"https://image.tmdb.org/t/p/original/FsrEr742ou1BJQhvhxaSnKZqlS.jpg"}]},{"tmdbId":"129","genres":[{"id":14,"name":"Fantasy"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":10751,"name":"Family"}],"originalLanguage":"ja","originalTitle":"千と千尋の神隠し","overview":"A ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?","posterUrl":"https://image.tmdb.org/t/p/original/ynXoOxmDHNQ4UAy0oU6avW71HVW.jpg","productionCompanies":"[{'name': 'Studio Ghibli', 'id': 10342}]","productionCountries":"[{'iso_3166_1': 'JP', 'name': 'Japan'}]","releaseDate":"2001-07-20","runtimeMinutes":125,"spokenLanguages":"[{'iso_639_1': 'ja', 'name': '日本語'}]","status":"Released","tagline":"The tunnel led Chihiro to a mysterious town...","title":"Spirited Away","cast":[{"castId":3,"character":"Chihiro Ogino (voice)","creditId":"52fe421bc3a36847f8004a97","gender":0,"id":19587,"name":"Rumi Hiiragi","order":0,"profilePath":"https://image.tmdb.org/t/p/original/gAjyBxRsQKYeZMkYQ6cmEj5DmHD.jpg"},{"castId":4,"character":"Haku (voice)","creditId":"52fe421bc3a36847f8004a9b","gender":0,"id":19588,"name":"Miyu Irino","order":1,"profilePath":"https://image.tmdb.org/t/p/original/dcZ4IJX8CBcJzxy8hhKFXv59LDE.jpg"},{"castId":5,"character":"Yubaba / Zeniba (voice)","creditId":"52fe421bc3a36847f8004a9f","gender":1,"id":19589,"name":"Mari Natsuki","order":2,"profilePath":"https://image.tmdb.org/t/p/original/oPCV2XYAJ4D1tK0OdJ2PPQbug5I.jpg"},{"castId":31,"character":"Kamaji (voice)","creditId":"52fe421bc3a36847f8004b1b","gender":0,"id":119243,"name":"Bunta Sugawara","order":3,"profilePath":"https://image.tmdb.org/t/p/original/w3J8EkYDHi0UQ3JPradqKBfa22V.jpg"},{"castId":10,"character":"Lin (voice)","creditId":"52fe421bc3a36847f8004aaf","gender":0,"id":19594,"name":"Yumi Tamai","order":4,"profilePath":null},{"castId":30,"character":"Bou (voice)","creditId":"52fe421bc3a36847f8004b17","gender":2,"id":225730,"name":"Ryunosuke Kamiki","order":5,"profilePath":"https://image.tmdb.org/t/p/original/4YtBdxJ7nTv6CuMvxIA6skfqczn.jpg"},{"castId":6,"character":"Akio Ogino (voice)","creditId":"52fe421bc3a36847f8004aa3","gender":0,"id":19590,"name":"Takashi Naito","order":6,"profilePath":"https://image.tmdb.org/t/p/original/ljbNlt6v9a7E9uvnph2qAJ6ba55.jpg"},{"castId":7,"character":"Yuuko Ogino (voice)","creditId":"52fe421bc3a36847f8004aa7","gender":0,"id":19591,"name":"Yasuko Sawaguchi","order":7,"profilePath":"https://image.tmdb.org/t/p/original/biQ1OczU65gZDVfH2ItCdjaGn7S.jpg"},{"castId":8,"character":"Aogaeru (voice)","creditId":"52fe421bc3a36847f8004aab","gender":1,"id":19592,"name":"Tatsuya Gashûin","order":8,"profilePath":"https://image.tmdb.org/t/p/original/dZ5KJLxLmoXIYrG7JcXuphGESIv.jpg"},{"castId":25,"character":"Bandai-gaeru (voice)","creditId":"52fe421bc3a36847f8004b07","gender":2,"id":40450,"name":"Yo Oizumi","order":9,"profilePath":"https://image.tmdb.org/t/p/original/avSKuYQiEHYY0eJoCFiKCyhGvcL.jpg"}]},{"tmdbId":"132","genres":[{"id":99,"name":"Documentary"},{"id":10402,"name":"Music"}],"originalLanguage":"en","originalTitle":"The Rolling Stones: Gimme Shelter","overview":"This documentary of the Rolling Stones' 1969 US tour has become a legendary, harrowing symbol of the tragic demise of the \"Peace and Love\" era. After a successful tour across the US, the Rolling Stones gave a free December concert at Altamont Speedway in California with the Grateful Dead, Ike and Tina Turner, Jefferson Airplane, and the Flying Burrito Brothers. The band unwisely selected the Hells Angels to provide security, and the bikers resorted to violence to keep the stoned, restless, and often naked crowd in line. The result: dozens of injuries and the on-screen stabbing of a young black man (during \"Sympathy for the Devil\") by one of the concert's staff security. In a manipulative but effective move, the Maysles brothers filmed Mick Jagger in the editing room witnessing the on-camera murder for the first time. The film also works as a rock-and-roll document, capturing the band at their most relaxed, intoxicating, and electrifying.","posterUrl":"https://image.tmdb.org/t/p/original/3UR6YSrz1nIQ84inth4emIPcEOT.jpg","productionCompanies":"[{'name': 'The Criterion Collection', 'id': 10932}, {'name': 'Maysles Films', 'id': 14563}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1970-12-06","runtimeMinutes":91,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"Landmark film follows the Rolling Stones on their notorious 1969 U.S. tour, culminating in tragedy at San Francisco's Altamont Speedway.","title":"The Rolling Stones: Gimme Shelter","cast":[{"castId":15,"character":"Himself (as The Rolling Stones)","creditId":"52fe421cc3a36847f8004bbd","gender":2,"id":1428,"name":"Mick Jagger","order":0,"profilePath":"https://image.tmdb.org/t/p/original/nrGPcc3RAvS9OgsoKnRKD3ZoJCM.jpg"},{"castId":11,"character":"Himself (as The Rolling Stones)","creditId":"52fe421cc3a36847f8004bad","gender":2,"id":1430,"name":"Keith Richards","order":1,"profilePath":"https://image.tmdb.org/t/p/original/t1oa5UsJMmrhNqCIks4jQnAYSQT.jpg"},{"castId":16,"character":"Himself (as The Rolling Stones)","creditId":"52fe421cc3a36847f8004bc1","gender":2,"id":1429,"name":"Charlie Watts","order":2,"profilePath":"https://image.tmdb.org/t/p/original/opj3O4sJrNHPmhcg7vtCPi8aEE5.jpg"},{"castId":12,"character":"Himself (as The Rolling Stones)","creditId":"52fe421cc3a36847f8004bb1","gender":2,"id":1431,"name":"Bill Wyman","order":3,"profilePath":"https://image.tmdb.org/t/p/original/bOQUJcnvq9VttgbDIsRwu7pMHqR.jpg"},{"castId":13,"character":"Himself (as The Rolling Stones)","creditId":"52fe421cc3a36847f8004bb5","gender":2,"id":1432,"name":"Mick Taylor","order":4,"profilePath":"https://image.tmdb.org/t/p/original/jGYZYqQFvtQIHn1L5xpEKKbXX5s.jpg"},{"castId":14,"character":"Himself (as Jefferson Airplane)","creditId":"52fe421cc3a36847f8004bb9","gender":0,"id":1433,"name":"Marty Balin","order":5,"profilePath":null},{"castId":17,"character":"Himself","creditId":"52fe421cc3a36847f8004bc5","gender":0,"id":1435,"name":"Sonny Barger","order":6,"profilePath":null},{"castId":18,"character":"Himself","creditId":"52fe421cc3a36847f8004bc9","gender":2,"id":1436,"name":"Melvin Belli","order":7,"profilePath":null},{"castId":19,"character":"Himself","creditId":"52fe421cc3a36847f8004bcd","gender":0,"id":1437,"name":"Dick Carter","order":8,"profilePath":null},{"castId":20,"character":"Himself (as Jefferson Airplane)","creditId":"52fe421cc3a36847f8004bd1","gender":0,"id":1438,"name":"Jack Casady","order":9,"profilePath":null}]},{"tmdbId":"133","genres":[{"id":99,"name":"Documentary"}],"originalLanguage":"en","originalTitle":"Primary","overview":"Primary is a documentary film about the primary elections between John F. Kennedy and Hubert Humphrey in 1960. Primary is the first documentary to use light equipment in order to follow their subjects in a more intimate filmmaking style. This unconventional way of filming created a new look for documentary films where the camera’s lens was right in the middle of what ever drama was occuring.","posterUrl":"https://image.tmdb.org/t/p/original/hMOpeTZTF4MNiGcJVbqJAgqUOHx.jpg","productionCompanies":"[{'name': 'Drew Associates', 'id': 2401}, {'name': 'Time', 'id': 2402}]","productionCountries":"[]","releaseDate":"1960-01-01","runtimeMinutes":60,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"","title":"Primary","cast":[{"castId":3,"character":"Himself","creditId":"52fe421cc3a36847f8004c65","gender":2,"id":21111,"name":"John F. Kennedy","order":0,"profilePath":"https://image.tmdb.org/t/p/original/g7R5azC00F8tQF31x9xTRD9yanL.jpg"},{"castId":4,"character":"Himself","creditId":"52fe421cc3a36847f8004c69","gender":2,"id":21112,"name":"Hubert H. Humphrey","order":1,"profilePath":null},{"castId":12,"character":"Narrator (voice)","creditId":"5722cf8a9251413bc4000928","gender":2,"id":1612504,"name":"Joseph Julian","order":2,"profilePath":null},{"castId":13,"character":"Herself","creditId":"5722cf92c3a3687660001000","gender":1,"id":1050881,"name":"Jacqueline Kennedy","order":3,"profilePath":"https://image.tmdb.org/t/p/original/sqmRy7i0bgjpFuzIxTKKkSX2JNG.jpg"},{"castId":14,"character":"Himself","creditId":"5722cf9b9251413eac0013bc","gender":2,"id":932497,"name":"Robert F. Kennedy","order":4,"profilePath":null},{"castId":15,"character":"Himself","creditId":"5722cfa39251413ea3001589","gender":2,"id":1420,"name":"Robert Drew","order":5,"profilePath":null}]},{"tmdbId":"134","genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":35,"name":"Comedy"}],"originalLanguage":"en","originalTitle":"O Brother, Where Art Thou?","overview":"In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them. On their journey they come across many comical characters and incredible situations. Based upon Homer's 'Odyssey'.","posterUrl":"https://image.tmdb.org/t/p/original/eIqSzq6j3yuxNmifiUOh6iTpG9N.jpg","productionCompanies":"[{'name': 'Universal Pictures', 'id': 33}, {'name': 'Mike Zoss Productions', 'id': 2092}, {'name': 'Studio Canal', 'id': 5870}, {'name': 'Touchstone Pictures', 'id': 9195}, {'name': 'Working Title Films', 'id': 10163}]","productionCountries":"[{'iso_3166_1': 'FR', 'name': 'France'}, {'iso_3166_1': 'GB', 'name': 'United Kingdom'}, {'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2000-08-30","runtimeMinutes":106,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"They have a plan...but not a clue.","title":"O Brother, Where Art Thou?","cast":[{"castId":3,"character":"Ulysses Everett McGill","creditId":"52fe421cc3a36847f8004ccb","gender":2,"id":1461,"name":"George Clooney","order":0,"profilePath":"https://image.tmdb.org/t/p/original/esyiULfB7kSrhgzBkLamjsTTKEg.jpg"},{"castId":4,"character":"Pete Hogwallop","creditId":"52fe421cc3a36847f8004ccf","gender":2,"id":1241,"name":"John Turturro","order":1,"profilePath":"https://image.tmdb.org/t/p/original/70V4hwvWN0J3aX2LzQg7eKCeq29.jpg"},{"castId":5,"character":"Delmar O'Donnell","creditId":"52fe421cc3a36847f8004cd3","gender":2,"id":1462,"name":"Tim Blake Nelson","order":2,"profilePath":"https://image.tmdb.org/t/p/original/tWHHEnnoEU6aNaiFRvl1WLfNTvB.jpg"},{"castId":6,"character":"Daniel \"Big Dan\" Teague","creditId":"52fe421cc3a36847f8004cd7","gender":2,"id":1230,"name":"John Goodman","order":3,"profilePath":"https://image.tmdb.org/t/p/original/eOIx8zj1vYIRhVY2bK5cjIQfua0.jpg"},{"castId":7,"character":"Penny Wharvey-McGill","creditId":"52fe421cc3a36847f8004cdb","gender":1,"id":18686,"name":"Holly Hunter","order":4,"profilePath":"https://image.tmdb.org/t/p/original/sfqLoSx2dmfQTafqbv8lNHnBeUW.jpg"},{"castId":8,"character":"Tommy Johnson","creditId":"52fe421cc3a36847f8004cdf","gender":2,"id":1465,"name":"Chris Thomas King","order":5,"profilePath":"https://image.tmdb.org/t/p/original/hUeI7GRVoOqpqOeEYObuGIYTuIi.jpg"},{"castId":9,"character":"Menelaus \"Pappy\" O'Daniel","creditId":"52fe421cc3a36847f8004ce3","gender":2,"id":1466,"name":"Charles Durning","order":6,"profilePath":"https://image.tmdb.org/t/p/original/cDbNCqLStv13MW8W6DZ504xsbrz.jpg"},{"castId":10,"character":"Junior O'Daniel","creditId":"52fe421cc3a36847f8004ce7","gender":0,"id":1467,"name":"Del Pentecost","order":7,"profilePath":"https://image.tmdb.org/t/p/original/dDGWISV97kvrTFGsLAnnKwR766g.jpg"},{"castId":11,"character":"George Nelson","creditId":"52fe421cc3a36847f8004ceb","gender":2,"id":1010,"name":"Michael Badalucco","order":8,"profilePath":"https://image.tmdb.org/t/p/original/oK2pSu2FWyrwiPEch7Tux2GSMbK.jpg"},{"castId":12,"character":"Pappy's Staff","creditId":"52fe421cc3a36847f8004cef","gender":2,"id":1468,"name":"J.R. Horne","order":9,"profilePath":"https://image.tmdb.org/t/p/original/kwXWf5gEZGWyqRDu5VjXAoll1Hw.jpg"}]},{"tmdbId":"135","genres":[{"id":99,"name":"Documentary"},{"id":10402,"name":"Music"}],"originalLanguage":"en","originalTitle":"Dont Look Back","overview":"In this wildly entertaining vision of one of the twentieth century’s greatest artists, Bob Dylan is surrounded by teen fans, gets into heated philosophical jousts with journalists, and kicks back with fellow musicians Joan Baez, Donovan, and Alan Price.","posterUrl":"https://image.tmdb.org/t/p/original/zvhF0dug5OL3NYENkDjHU89cr4I.jpg","productionCompanies":"[{'name': 'Docurama', 'id': 39}]","productionCountries":"[{'iso_3166_1': 'GB', 'name': 'United Kingdom'}]","releaseDate":"1967-05-17","runtimeMinutes":96,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"","title":"Dont Look Back","cast":[{"castId":2,"character":"Himself","creditId":"52fe421cc3a36847f8004d8d","gender":2,"id":1487,"name":"Bob Dylan","order":0,"profilePath":"https://image.tmdb.org/t/p/original/63QbqhX07s2IJBRWYT7fNoRpEHA.jpg"},{"castId":3,"character":"Himself","creditId":"52fe421cc3a36847f8004d91","gender":0,"id":1488,"name":"Albert Grossman","order":1,"profilePath":null},{"castId":4,"character":"Himself","creditId":"52fe421cc3a36847f8004d95","gender":2,"id":1489,"name":"Bob Neuwirth","order":2,"profilePath":null},{"castId":5,"character":"Herself","creditId":"52fe421cc3a36847f8004d99","gender":1,"id":1490,"name":"Joan Baez","order":3,"profilePath":"https://image.tmdb.org/t/p/original/fRQNzX5YxHIv3cH3YkFkVlu2pzj.jpg"},{"castId":6,"character":"Himself","creditId":"52fe421cc3a36847f8004d9d","gender":0,"id":1491,"name":"Alan Price","order":4,"profilePath":"https://image.tmdb.org/t/p/original/g8aFJOBwa1yugEQ8HO17fxjBQ0s.jpg"},{"castId":7,"character":"Himself","creditId":"52fe421cc3a36847f8004da1","gender":0,"id":1492,"name":"Tito Burns","order":5,"profilePath":null},{"castId":8,"character":"Himself","creditId":"52fe421cc3a36847f8004da5","gender":2,"id":1493,"name":"Donovan","order":6,"profilePath":null},{"castId":9,"character":"Himself","creditId":"52fe421cc3a36847f8004da9","gender":0,"id":1494,"name":"Derroll Adams","order":7,"profilePath":null}]},{"tmdbId":"136","genres":[{"id":18,"name":"Drama"},{"id":27,"name":"Horror"}],"originalLanguage":"en","originalTitle":"Freaks","overview":"A circus' beautiful trapeze artist agrees to marry the leader of side-show performers, but his deformed friends discover she is only marrying him for his inheritance.","posterUrl":"https://image.tmdb.org/t/p/original/9hmmE4K6tOEXB1KeTajIC0pNta6.jpg","productionCompanies":"[{'name': 'Metro-Goldwyn-Mayer (MGM)', 'id': 8411}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1932-02-20","runtimeMinutes":64,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Français'}, {'iso_639_1': 'de', 'name': 'Deutsch'}]","status":"Released","tagline":"The love story of a siren, a giant, and a dwarf!","title":"Freaks","cast":[{"castId":25,"character":"Hans","creditId":"52fe421cc3a36847f8004e73","gender":2,"id":1511,"name":"Harry Earles","order":0,"profilePath":null},{"castId":24,"character":"Frieda","creditId":"52fe421cc3a36847f8004e6f","gender":1,"id":1512,"name":"Daisy Earles","order":1,"profilePath":null},{"castId":12,"character":"Cleopatra","creditId":"52fe421cc3a36847f8004e3f","gender":1,"id":1508,"name":"Olga Baclanova","order":2,"profilePath":"https://image.tmdb.org/t/p/original/yWvPB6BYi5G5GecFe1LozZheN7p.jpg"},{"castId":14,"character":"Hercules","creditId":"52fe421cc3a36847f8004e47","gender":0,"id":1510,"name":"Henry Victor","order":3,"profilePath":"https://image.tmdb.org/t/p/original/zuFfbYwaCjXSaVLxZc5Rry7Oxia.jpg"},{"castId":11,"character":"Venus","creditId":"52fe421cc3a36847f8004e3b","gender":1,"id":1507,"name":"Leila Hyams","order":4,"profilePath":"https://image.tmdb.org/t/p/original/lgG6p3qVLGzgXSfj2M6CuIlCPy1.jpg"},{"castId":27,"character":"Phroso","creditId":"5925f4bb9251413b4a014e76","gender":2,"id":35849,"name":"Wallace Ford","order":5,"profilePath":"https://image.tmdb.org/t/p/original/nfXCJAU3ddSn2K6SjwxXt2h1yQU.jpg"},{"castId":30,"character":"Angelino","creditId":"5925f9339251413b8a014c8b","gender":2,"id":97985,"name":"Angelo Rossitto","order":6,"profilePath":"https://image.tmdb.org/t/p/original/VY3ygib44431zOtUBEwlnCWJeK.jpg"},{"castId":31,"character":"The Dwarf with the Knife","creditId":"5925f94e9251413ba00141ff","gender":0,"id":119306,"name":"Jerry Austin","order":7,"profilePath":"https://image.tmdb.org/t/p/original/lV7co7Gh3HigFFxwn349kAlgphh.jpg"},{"castId":13,"character":"Roscoe","creditId":"52fe421cc3a36847f8004e43","gender":0,"id":1509,"name":"Roscoe Ates","order":8,"profilePath":"https://image.tmdb.org/t/p/original/AoGCN2oOsOKv5zUbIz90w61wJKd.jpg"},{"castId":18,"character":"Schlitze the Pinhead","creditId":"52fe421cc3a36847f8004e57","gender":0,"id":1516,"name":"Schlitze","order":9,"profilePath":null}]},{"tmdbId":"137","genres":[{"id":10749,"name":"Romance"},{"id":14,"name":"Fantasy"},{"id":18,"name":"Drama"},{"id":35,"name":"Comedy"}],"originalLanguage":"en","originalTitle":"Groundhog Day","overview":"A narcissistic TV weatherman, along with his attractive-but-distant producer and mawkish cameraman, is sent to report on Groundhog Day in the small town of Punxsutawney, where he finds himself repeating the same day over and over.","posterUrl":"https://image.tmdb.org/t/p/original/vXjVd0Vu0MXRZnga7wEnHIIhO5B.jpg","productionCompanies":"[{'name': 'Columbia Pictures', 'id': 5}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1993-02-11","runtimeMinutes":101,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Français'}, {'iso_639_1': 'it', 'name': 'Italiano'}]","status":"Released","tagline":"He's having the worst day of his life... over, and over...","title":"Groundhog Day","cast":[{"castId":11,"character":"Phil Connors","creditId":"52fe421dc3a36847f8004f01","gender":2,"id":1532,"name":"Bill Murray","order":0,"profilePath":"https://image.tmdb.org/t/p/original/7BOoOAIA1CnSzFSVSJP7saniQaB.jpg"},{"castId":12,"character":"Rita","creditId":"52fe421dc3a36847f8004f05","gender":1,"id":1533,"name":"Andie MacDowell","order":1,"profilePath":"https://image.tmdb.org/t/p/original/znSR45ZcNNlb1sNP1gYmVACYI2a.jpg"},{"castId":13,"character":"Larry","creditId":"52fe421dc3a36847f8004f09","gender":2,"id":1534,"name":"Chris Elliott","order":2,"profilePath":"https://image.tmdb.org/t/p/original/rDbqt5F2x7MDeRdCV6prRdmShnI.jpg"},{"castId":14,"character":"Ned Ryerson","creditId":"52fe421dc3a36847f8004f0d","gender":2,"id":537,"name":"Stephen Tobolowsky","order":3,"profilePath":"https://image.tmdb.org/t/p/original/fUodC7wMUZLAXnm4ONCxF5haCtC.jpg"},{"castId":15,"character":"Buster Green","creditId":"52fe421dc3a36847f8004f11","gender":2,"id":1535,"name":"Brian Doyle-Murray","order":4,"profilePath":"https://image.tmdb.org/t/p/original/fRLFXdb8UQvJs4euZ2sE6CpjbXn.jpg"},{"castId":17,"character":"Mrs. Lancaster","creditId":"52fe421dc3a36847f8004f15","gender":1,"id":1537,"name":"Angela Paton","order":5,"profilePath":"https://image.tmdb.org/t/p/original/eJZpJyEuMT4mQ8d8tbU0addZ1kD.jpg"},{"castId":18,"character":"Gus","creditId":"52fe421dc3a36847f8004f19","gender":0,"id":1538,"name":"Rick Ducommun","order":6,"profilePath":"https://image.tmdb.org/t/p/original/reHrybVr1GjF4pGXhtN9EUxS0zD.jpg"},{"castId":19,"character":"Ralph","creditId":"52fe421dc3a36847f8004f1d","gender":2,"id":1539,"name":"Rick Overton","order":7,"profilePath":"https://image.tmdb.org/t/p/original/584g2eLl6ZmZ71ikvGw5tyqEv1p.jpg"},{"castId":20,"character":"Doris, the Waitress","creditId":"52fe421dc3a36847f8004f21","gender":1,"id":1540,"name":"Robin Duke","order":8,"profilePath":"https://image.tmdb.org/t/p/original/40Jb4K4fkgwZJYy3mu55WBjAprZ.jpg"},{"castId":22,"character":"Kenny","creditId":"52fe421dc3a36847f8004f25","gender":2,"id":1542,"name":"Willie Garson","order":9,"profilePath":"https://image.tmdb.org/t/p/original/xZ09uKkIMIRWDNqmyhb1AeEOo71.jpg"}]},{"tmdbId":"138","genres":[{"id":27,"name":"Horror"}],"originalLanguage":"en","originalTitle":"Dracula","overview":"The legend of vampire Count Dracula begins here with this original 1931 Dracula film from Bela Lugosi.","posterUrl":"https://image.tmdb.org/t/p/original/hA9kQrIwDHJKl1pt8GpJdDnBzim.jpg","productionCompanies":"[{'name': 'Universal Pictures', 'id': 33}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"1931-02-12","runtimeMinutes":72,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'hu', 'name': 'Magyar'}]","status":"Released","tagline":"The story of the strangest passion the world has ever known!","title":"Dracula","cast":[{"castId":5,"character":"Dracula","creditId":"52fe421dc3a36847f8004fcd","gender":2,"id":1547,"name":"Bela Lugosi","order":0,"profilePath":"https://image.tmdb.org/t/p/original/nI14KbMwRNyl8v2Ds5TVAzhu5No.jpg"},{"castId":6,"character":"Mina Seward","creditId":"52fe421dc3a36847f8004fd1","gender":1,"id":1548,"name":"Helen Chandler","order":1,"profilePath":"https://image.tmdb.org/t/p/original/mmxjqu2te2DYsNl7NZMURol1pfb.jpg"},{"castId":15,"character":"John Harker","creditId":"52fe421dc3a36847f8005001","gender":2,"id":2125,"name":"David Manners","order":2,"profilePath":"https://image.tmdb.org/t/p/original/Q3BWV6cvANJcBq83WTaC48OuTL.jpg"},{"castId":7,"character":"Renfield","creditId":"52fe421dc3a36847f8004fd5","gender":2,"id":1549,"name":"Dwight Frye","order":3,"profilePath":"https://image.tmdb.org/t/p/original/ybXg4HVKGTtlVaxFpy4mtxF7gqX.jpg"},{"castId":8,"character":"Professor Abraham Van Helsing","creditId":"52fe421dc3a36847f8004fd9","gender":2,"id":1550,"name":"Edward Van Sloan","order":4,"profilePath":"https://image.tmdb.org/t/p/original/z0d0yp39NGqHUVsO81vffOMxPW0.jpg"},{"castId":16,"character":"Dr. Jack Seward","creditId":"52fe421dc3a36847f8005005","gender":0,"id":2126,"name":"Herbert Bunston","order":5,"profilePath":"https://image.tmdb.org/t/p/original/jR5zIo8unxnWruY8Y8KW432IniF.jpg"},{"castId":21,"character":"Lucy","creditId":"52fe421dc3a36847f8005021","gender":1,"id":3947,"name":"Frances Dade","order":6,"profilePath":"https://image.tmdb.org/t/p/original/pf1UgxNxRzSCMLtmtCodxV6p8qa.jpg"},{"castId":22,"character":"Maid","creditId":"52fe421dc3a36847f8005025","gender":1,"id":3948,"name":"Joan Standing","order":7,"profilePath":null},{"castId":23,"character":"Martin","creditId":"52fe421dc3a36847f8005029","gender":2,"id":3949,"name":"Charles K. Gerrard","order":8,"profilePath":null},{"castId":26,"character":"Coach Passenger","creditId":"55a31b8292514105070006d6","gender":0,"id":128161,"name":"Nicholas Bela","order":9,"profilePath":null}]},{"tmdbId":"139","genres":[{"id":10749,"name":"Romance"},{"id":35,"name":"Comedy"},{"id":18,"name":"Drama"}],"originalLanguage":"da","originalTitle":"Mifunes sidste sang","overview":"Kresten, newly wed, is on the threshold of a great career success in his father-in-law´s company. But when the death of his own father takes him back to his poverty-stricken childhood home, far out in the country, his career plans fall apart. For one thing he has to deal with his loveable, backward brother, who is now all alone; for another, he meets a stunning woman who comes to the farm as a housekeeper, in disguise of her real profession as a call-girl.","posterUrl":"https://image.tmdb.org/t/p/original/962ZZDr4FV3L46ZnurqIaZveL60.jpg","productionCompanies":"[{'name': 'Nimbus Film Productions', 'id': 11672}]","productionCountries":"[{'iso_3166_1': 'DK', 'name': 'Denmark'}, {'iso_3166_1': 'SE', 'name': 'Sweden'}]","releaseDate":"1999-03-12","runtimeMinutes":98,"spokenLanguages":"[{'iso_639_1': 'da', 'name': 'Dansk'}]","status":"Released","tagline":"","title":"Mifune","cast":[{"castId":6,"character":"Kresten","creditId":"52fe421dc3a36847f800507b","gender":2,"id":1184,"name":"Anders W. Berthelsen","order":0,"profilePath":"https://image.tmdb.org/t/p/original/y5mBIJnXTavpdHm1zEmHnhcNHaN.jpg"},{"castId":7,"character":"Liva","creditId":"52fe421dc3a36847f800507f","gender":1,"id":1562,"name":"Iben Hjejle","order":1,"profilePath":"https://image.tmdb.org/t/p/original/t0areKrmJIoopPaKzPCY7ILuUze.jpg"},{"castId":8,"character":"Rud","creditId":"52fe421dc3a36847f8005083","gender":0,"id":1563,"name":"Jesper Asholt","order":2,"profilePath":"https://image.tmdb.org/t/p/original/lyggJM46Ll7UQdJp7QvdmwEwkRD.jpg"},{"castId":9,"character":"Claire","creditId":"52fe421dc3a36847f8005087","gender":1,"id":1564,"name":"Sofie Gråbøl","order":3,"profilePath":"https://image.tmdb.org/t/p/original/mRsFE4HHRnNfO4weREIPjv0luDM.jpg"},{"castId":10,"character":"Bjarke","creditId":"52fe421dc3a36847f800508b","gender":0,"id":1565,"name":"Emil Tarding","order":4,"profilePath":null},{"castId":11,"character":"Gerner","creditId":"52fe421dc3a36847f800508f","gender":2,"id":1566,"name":"Anders Hove","order":5,"profilePath":"https://image.tmdb.org/t/p/original/m9UAUhR7CzC376jy9dV9HGctqSV.jpg"},{"castId":12,"character":"Pernille","creditId":"52fe421dc3a36847f8005093","gender":0,"id":4458,"name":"Paprika Steen","order":6,"profilePath":"https://image.tmdb.org/t/p/original/7iz6g2gXDCVL9LFjqmVV8KwGvNP.jpg"},{"castId":13,"character":"Nina","creditId":"52fe421dc3a36847f8005097","gender":0,"id":1567,"name":"Mette Bratlann","order":7,"profilePath":null},{"castId":14,"character":"Hanne","creditId":"52fe421dc3a36847f800509b","gender":0,"id":1568,"name":"Susanne Storm","order":8,"profilePath":null},{"castId":15,"character":"Lykke","creditId":"52fe421dc3a36847f800509f","gender":0,"id":1569,"name":"Ellen Hillingsø","order":9,"profilePath":"https://image.tmdb.org/t/p/original/8INr42ugNpHwXkUGvHaVvWJ7sb0.jpg"}]},{"tmdbId":"140","genres":[{"id":80,"name":"Crime"},{"id":18,"name":"Drama"},{"id":10749,"name":"Romance"},{"id":53,"name":"Thriller"}],"originalLanguage":"es","originalTitle":"La mala educación","overview":"Two children, Ignacio and Enrique, know love, the movies and fear in a religious school at the beginning of the 1960s. Father Manolo, director of the school and its professor of literature, is witness to and part of these discoveries. The three are followed through the next few decades, their reunion marking life and death.","posterUrl":"https://image.tmdb.org/t/p/original/2wPhxmIveLgp8ClczFSHQhupF29.jpg","productionCompanies":"[{'name': 'Televisión Española TVE', 'id': 6780}, {'name': 'Canal+ España', 'id': 9335}, {'name': 'El Deseo S.A.', 'id': 11736}]","productionCountries":"[{'iso_3166_1': 'ES', 'name': 'Spain'}]","releaseDate":"2004-03-19","runtimeMinutes":106,"spokenLanguages":"[{'iso_639_1': 'es', 'name': 'Español'}]","status":"Released","tagline":"","title":"Bad Education","cast":[{"castId":7,"character":"Ángel/Juan/Zahara","creditId":"52fe421dc3a36847f800512b","gender":2,"id":258,"name":"Gael García Bernal","order":0,"profilePath":"https://image.tmdb.org/t/p/original/6rTzWV80Z8AZbF6o3io1sYVOGhI.jpg"},{"castId":8,"character":"Enrique","creditId":"52fe421dc3a36847f800512f","gender":2,"id":1602,"name":"Fele Martínez","order":1,"profilePath":"https://image.tmdb.org/t/p/original/7Hccxji7taf2NmfNBiXBnQLCyHk.jpg"},{"castId":9,"character":"Padre Manolo","creditId":"52fe421dc3a36847f8005133","gender":2,"id":1603,"name":"Daniel Giménez Cacho","order":2,"profilePath":"https://image.tmdb.org/t/p/original/vIelVvfHTvmnwTIpOMzVTLCORma.jpg"},{"castId":10,"character":"Sr. Manuel Berenguer","creditId":"52fe421dc3a36847f8005137","gender":2,"id":1604,"name":"Lluís Homar","order":3,"profilePath":"https://image.tmdb.org/t/p/original/aDUujbZn8zVdM6Cie27JfPcdM7S.jpg"},{"castId":11,"character":"Padre José","creditId":"52fe421dc3a36847f800513b","gender":2,"id":1605,"name":"Francisco Maestre","order":4,"profilePath":"https://image.tmdb.org/t/p/original/8ZKbRZA92hKT8dbfjtN3ISiBjeB.jpg"},{"castId":12,"character":"Ignacio","creditId":"52fe421dc3a36847f800513f","gender":0,"id":1606,"name":"Francisco Boira","order":5,"profilePath":"https://image.tmdb.org/t/p/original/7zOFBeoVvLEdVLjJdUi3ThXvMSM.jpg"},{"castId":14,"character":"Young Ignacio","creditId":"52fe421dc3a36847f8005143","gender":2,"id":1608,"name":"Nacho Pérez","order":6,"profilePath":"https://image.tmdb.org/t/p/original/yuiF4T7CSLQc4du5fyB4gUIk0yR.jpg"},{"castId":15,"character":"Young Enrique","creditId":"52fe421dc3a36847f8005147","gender":0,"id":1609,"name":"Raúl García Forneiro","order":7,"profilePath":"https://image.tmdb.org/t/p/original/sT4vwpXYglAh6StMIHOIgAqXNSJ.jpg"},{"castId":16,"character":"Paca/Paquito","creditId":"52fe421dc3a36847f800514b","gender":2,"id":1610,"name":"Javier Cámara","order":8,"profilePath":"https://image.tmdb.org/t/p/original/pG2uOSwthuTXn8LAV2MTZbyOre9.jpg"},{"castId":17,"character":"Enrique Serrano","creditId":"52fe421dc3a36847f800514f","gender":2,"id":1611,"name":"Alberto Ferreiro","order":9,"profilePath":"https://image.tmdb.org/t/p/original/bdBBKFVeBEaRLSwTooGDkUa9U1O.jpg"}]},{"tmdbId":"141","genres":[{"id":14,"name":"Fantasy"},{"id":18,"name":"Drama"},{"id":9648,"name":"Mystery"}],"originalLanguage":"en","originalTitle":"Donnie Darko","overview":"After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.","posterUrl":"https://image.tmdb.org/t/p/original/nmb4QhCRmdfNP6rgb81yUFgI83l.jpg","productionCompanies":"[{'name': 'Pandora Cinema', 'id': 185}, {'name': 'Twentieth Century Fox Film Corporation', 'id': 306}, {'name': 'Flower Films', 'id': 2214}, {'name': 'Adam Fields Productions', 'id': 3334}]","productionCountries":"[{'iso_3166_1': 'US', 'name': 'United States of America'}]","releaseDate":"2001-01-18","runtimeMinutes":113,"spokenLanguages":"[{'iso_639_1': 'en', 'name': 'English'}]","status":"Released","tagline":"You can never go too far","title":"Donnie Darko","cast":[{"castId":3,"character":"Donnie Darko","creditId":"52fe421dc3a36847f80051fb","gender":2,"id":131,"name":"Jake Gyllenhaal","order":0,"profilePath":"https://image.tmdb.org/t/p/original/1dHiMQsqiIAF9zhGvB0oJOIaM16.jpg"},{"castId":30,"character":"Gretchen Ross","creditId":"52fe421dc3a36847f8005279","gender":1,"id":20089,"name":"Jena Malone","order":1,"profilePath":"https://image.tmdb.org/t/p/original/5tmHa5Qz31TKsXIsEB12ZfWQoTX.jpg"},{"castId":10,"character":"Jim Cunningham","creditId":"52fe421dc3a36847f8005217","gender":2,"id":723,"name":"Patrick Swayze","order":2,"profilePath":"https://image.tmdb.org/t/p/original/3mpjuYiGfglDeaGjwFmSBBzwbc1.jpg"},{"castId":5,"character":"Elizabeth Darko","creditId":"52fe421dc3a36847f8005203","gender":1,"id":1579,"name":"Maggie Gyllenhaal","order":3,"profilePath":"https://image.tmdb.org/t/p/original/qxgM5LzzG4uWTprCL3gBVVJ2Q1K.jpg"},{"castId":27,"character":"Karen Pomeroy","creditId":"52fe421dc3a36847f800526d","gender":1,"id":69597,"name":"Drew Barrymore","order":4,"profilePath":"https://image.tmdb.org/t/p/original/y8GKPHsBXVGIGBdDzdNxjm0IbKF.jpg"},{"castId":29,"character":"Kitty Farmer","creditId":"52fe421dc3a36847f8005275","gender":1,"id":5151,"name":"Beth Grant","order":5,"profilePath":"https://image.tmdb.org/t/p/original/8WYd8N24jUpwk4nKDGPAdt08ltM.jpg"},{"castId":4,"character":"Eddie Darko","creditId":"52fe421dc3a36847f80051ff","gender":2,"id":1578,"name":"Holmes Osborne","order":6,"profilePath":"https://image.tmdb.org/t/p/original/gMeHJT6u5VRO8RnAgPuBYrB7Krn.jpg"},{"castId":6,"character":"Samantha Darko","creditId":"52fe421dc3a36847f8005207","gender":1,"id":1580,"name":"Daveigh Chase","order":7,"profilePath":"https://image.tmdb.org/t/p/original/xiJf7nTOvVVWIyWG9fyoauU6Ff3.jpg"},{"castId":7,"character":"Mrs. Rose Darko","creditId":"52fe421dc3a36847f800520b","gender":1,"id":1581,"name":"Mary McDonnell","order":8,"profilePath":"https://image.tmdb.org/t/p/original/4NcE9BcnLB3oWns51r9peH8GhN8.jpg"},{"castId":8,"character":"Frank","creditId":"52fe421dc3a36847f800520f","gender":2,"id":1582,"name":"James Duval","order":9,"profilePath":"https://image.tmdb.org/t/p/original/ydlb3Rp5vkle9codpcfBWxFmUYr.jpg"}]}];

export const languages = [
  {
      "iso_639_1": "xx",
      "english_name": "No Language",
      "name": "No Language"
  },
  {
      "iso_639_1": "aa",
      "english_name": "Afar",
      "name": ""
  },
  {
      "iso_639_1": "af",
      "english_name": "Afrikaans",
      "name": "Afrikaans"
  },
  {
      "iso_639_1": "ak",
      "english_name": "Akan",
      "name": ""
  },
  {
      "iso_639_1": "an",
      "english_name": "Aragonese",
      "name": ""
  },
  {
      "iso_639_1": "as",
      "english_name": "Assamese",
      "name": ""
  },
  {
      "iso_639_1": "av",
      "english_name": "Avaric",
      "name": ""
  },
  {
      "iso_639_1": "ae",
      "english_name": "Avestan",
      "name": ""
  },
  {
      "iso_639_1": "ay",
      "english_name": "Aymara",
      "name": ""
  },
  {
      "iso_639_1": "az",
      "english_name": "Azerbaijani",
      "name": "Azərbaycan"
  },
  {
      "iso_639_1": "ba",
      "english_name": "Bashkir",
      "name": ""
  },
  {
      "iso_639_1": "bm",
      "english_name": "Bambara",
      "name": "Bamanankan"
  },
  {
      "iso_639_1": "bi",
      "english_name": "Bislama",
      "name": ""
  },
  {
      "iso_639_1": "bo",
      "english_name": "Tibetan",
      "name": ""
  },
  {
      "iso_639_1": "br",
      "english_name": "Breton",
      "name": ""
  },
  {
      "iso_639_1": "ca",
      "english_name": "Catalan",
      "name": "Català"
  },
  {
      "iso_639_1": "cs",
      "english_name": "Czech",
      "name": "Český"
  },
  {
      "iso_639_1": "ce",
      "english_name": "Chechen",
      "name": ""
  },
  {
      "iso_639_1": "cu",
      "english_name": "Slavic",
      "name": ""
  },
  {
      "iso_639_1": "cv",
      "english_name": "Chuvash",
      "name": ""
  },
  {
      "iso_639_1": "kw",
      "english_name": "Cornish",
      "name": ""
  },
  {
      "iso_639_1": "co",
      "english_name": "Corsican",
      "name": ""
  },
  {
      "iso_639_1": "cr",
      "english_name": "Cree",
      "name": ""
  },
  {
      "iso_639_1": "cy",
      "english_name": "Welsh",
      "name": "Cymraeg"
  },
  {
      "iso_639_1": "da",
      "english_name": "Danish",
      "name": "Dansk"
  },
  {
      "iso_639_1": "de",
      "english_name": "German",
      "name": "Deutsch"
  },
  {
      "iso_639_1": "dv",
      "english_name": "Divehi",
      "name": ""
  },
  {
      "iso_639_1": "dz",
      "english_name": "Dzongkha",
      "name": ""
  },
  {
      "iso_639_1": "eo",
      "english_name": "Esperanto",
      "name": "Esperanto"
  },
  {
      "iso_639_1": "et",
      "english_name": "Estonian",
      "name": "Eesti"
  },
  {
      "iso_639_1": "eu",
      "english_name": "Basque",
      "name": "euskera"
  },
  {
      "iso_639_1": "fo",
      "english_name": "Faroese",
      "name": ""
  },
  {
      "iso_639_1": "fj",
      "english_name": "Fijian",
      "name": ""
  },
  {
      "iso_639_1": "fi",
      "english_name": "Finnish",
      "name": "suomi"
  },
  {
      "iso_639_1": "fr",
      "english_name": "French",
      "name": "Français"
  },
  {
      "iso_639_1": "fy",
      "english_name": "Frisian",
      "name": ""
  },
  {
      "iso_639_1": "ff",
      "english_name": "Fulah",
      "name": "Fulfulde"
  },
  {
      "iso_639_1": "gd",
      "english_name": "Gaelic",
      "name": ""
  },
  {
      "iso_639_1": "ga",
      "english_name": "Irish",
      "name": "Gaeilge"
  },
  {
      "iso_639_1": "gl",
      "english_name": "Galician",
      "name": "Galego"
  },
  {
      "iso_639_1": "gv",
      "english_name": "Manx",
      "name": ""
  },
  {
      "iso_639_1": "gn",
      "english_name": "Guarani",
      "name": ""
  },
  {
      "iso_639_1": "gu",
      "english_name": "Gujarati",
      "name": ""
  },
  {
      "iso_639_1": "ht",
      "english_name": "Haitian; Haitian Creole",
      "name": ""
  },
  {
      "iso_639_1": "ha",
      "english_name": "Hausa",
      "name": "Hausa"
  },
  {
      "iso_639_1": "sh",
      "english_name": "Serbo-Croatian",
      "name": ""
  },
  {
      "iso_639_1": "hz",
      "english_name": "Herero",
      "name": ""
  },
  {
      "iso_639_1": "ho",
      "english_name": "Hiri Motu",
      "name": ""
  },
  {
      "iso_639_1": "hr",
      "english_name": "Croatian",
      "name": "Hrvatski"
  },
  {
      "iso_639_1": "hu",
      "english_name": "Hungarian",
      "name": "Magyar"
  },
  {
      "iso_639_1": "ig",
      "english_name": "Igbo",
      "name": ""
  },
  {
      "iso_639_1": "io",
      "english_name": "Ido",
      "name": ""
  },
  {
      "iso_639_1": "ii",
      "english_name": "Yi",
      "name": ""
  },
  {
      "iso_639_1": "iu",
      "english_name": "Inuktitut",
      "name": ""
  },
  {
      "iso_639_1": "ie",
      "english_name": "Interlingue",
      "name": ""
  },
  {
      "iso_639_1": "ia",
      "english_name": "Interlingua",
      "name": ""
  },
  {
      "iso_639_1": "id",
      "english_name": "Indonesian",
      "name": "Bahasa indonesia"
  },
  {
      "iso_639_1": "ik",
      "english_name": "Inupiaq",
      "name": ""
  },
  {
      "iso_639_1": "is",
      "english_name": "Icelandic",
      "name": "Íslenska"
  },
  {
      "iso_639_1": "it",
      "english_name": "Italian",
      "name": "Italiano"
  },
  {
      "iso_639_1": "jv",
      "english_name": "Javanese",
      "name": ""
  },
  {
      "iso_639_1": "ja",
      "english_name": "Japanese",
      "name": "日本語"
  },
  {
      "iso_639_1": "kl",
      "english_name": "Kalaallisut",
      "name": ""
  },
  {
      "iso_639_1": "kn",
      "english_name": "Kannada",
      "name": "?????"
  },
  {
      "iso_639_1": "ks",
      "english_name": "Kashmiri",
      "name": ""
  },
  {
      "iso_639_1": "kr",
      "english_name": "Kanuri",
      "name": ""
  },
  {
      "iso_639_1": "kk",
      "english_name": "Kazakh",
      "name": "қазақ"
  },
  {
      "iso_639_1": "km",
      "english_name": "Khmer",
      "name": ""
  },
  {
      "iso_639_1": "ki",
      "english_name": "Kikuyu",
      "name": ""
  },
  {
      "iso_639_1": "rw",
      "english_name": "Kinyarwanda",
      "name": "Kinyarwanda"
  },
  {
      "iso_639_1": "ky",
      "english_name": "Kirghiz",
      "name": "??????"
  },
  {
      "iso_639_1": "kv",
      "english_name": "Komi",
      "name": ""
  },
  {
      "iso_639_1": "kg",
      "english_name": "Kongo",
      "name": ""
  },
  {
      "iso_639_1": "ko",
      "english_name": "Korean",
      "name": "한국어/조선말"
  },
  {
      "iso_639_1": "kj",
      "english_name": "Kuanyama",
      "name": ""
  },
  {
      "iso_639_1": "ku",
      "english_name": "Kurdish",
      "name": ""
  },
  {
      "iso_639_1": "lo",
      "english_name": "Lao",
      "name": ""
  },
  {
      "iso_639_1": "la",
      "english_name": "Latin",
      "name": "Latin"
  },
  {
      "iso_639_1": "lv",
      "english_name": "Latvian",
      "name": "Latviešu"
  },
  {
      "iso_639_1": "li",
      "english_name": "Limburgish",
      "name": ""
  },
  {
      "iso_639_1": "ln",
      "english_name": "Lingala",
      "name": ""
  },
  {
      "iso_639_1": "lt",
      "english_name": "Lithuanian",
      "name": "Lietuvių"
  },
  {
      "iso_639_1": "lb",
      "english_name": "Letzeburgesch",
      "name": ""
  },
  {
      "iso_639_1": "lu",
      "english_name": "Luba-Katanga",
      "name": ""
  },
  {
      "iso_639_1": "lg",
      "english_name": "Ganda",
      "name": ""
  },
  {
      "iso_639_1": "mh",
      "english_name": "Marshall",
      "name": ""
  },
  {
      "iso_639_1": "ml",
      "english_name": "Malayalam",
      "name": ""
  },
  {
      "iso_639_1": "mr",
      "english_name": "Marathi",
      "name": ""
  },
  {
      "iso_639_1": "mg",
      "english_name": "Malagasy",
      "name": ""
  },
  {
      "iso_639_1": "mt",
      "english_name": "Maltese",
      "name": "Malti"
  },
  {
      "iso_639_1": "mo",
      "english_name": "Moldavian",
      "name": ""
  },
  {
      "iso_639_1": "mn",
      "english_name": "Mongolian",
      "name": ""
  },
  {
      "iso_639_1": "mi",
      "english_name": "Maori",
      "name": ""
  },
  {
      "iso_639_1": "ms",
      "english_name": "Malay",
      "name": "Bahasa melayu"
  },
  {
      "iso_639_1": "my",
      "english_name": "Burmese",
      "name": ""
  },
  {
      "iso_639_1": "na",
      "english_name": "Nauru",
      "name": ""
  },
  {
      "iso_639_1": "nv",
      "english_name": "Navajo",
      "name": ""
  },
  {
      "iso_639_1": "nr",
      "english_name": "Ndebele",
      "name": ""
  },
  {
      "iso_639_1": "nd",
      "english_name": "Ndebele",
      "name": ""
  },
  {
      "iso_639_1": "ng",
      "english_name": "Ndonga",
      "name": ""
  },
  {
      "iso_639_1": "ne",
      "english_name": "Nepali",
      "name": ""
  },
  {
      "iso_639_1": "nl",
      "english_name": "Dutch",
      "name": "Nederlands"
  },
  {
      "iso_639_1": "nn",
      "english_name": "Norwegian Nynorsk",
      "name": ""
  },
  {
      "iso_639_1": "nb",
      "english_name": "Norwegian Bokmål",
      "name": "Bokmål"
  },
  {
      "iso_639_1": "no",
      "english_name": "Norwegian",
      "name": "Norsk"
  },
  {
      "iso_639_1": "ny",
      "english_name": "Chichewa; Nyanja",
      "name": ""
  },
  {
      "iso_639_1": "oc",
      "english_name": "Occitan",
      "name": ""
  },
  {
      "iso_639_1": "oj",
      "english_name": "Ojibwa",
      "name": ""
  },
  {
      "iso_639_1": "or",
      "english_name": "Oriya",
      "name": ""
  },
  {
      "iso_639_1": "om",
      "english_name": "Oromo",
      "name": ""
  },
  {
      "iso_639_1": "os",
      "english_name": "Ossetian; Ossetic",
      "name": ""
  },
  {
      "iso_639_1": "pi",
      "english_name": "Pali",
      "name": ""
  },
  {
      "iso_639_1": "pl",
      "english_name": "Polish",
      "name": "Polski"
  },
  {
      "iso_639_1": "pt",
      "english_name": "Portuguese",
      "name": "Português"
  },
  {
      "iso_639_1": "qu",
      "english_name": "Quechua",
      "name": ""
  },
  {
      "iso_639_1": "rm",
      "english_name": "Raeto-Romance",
      "name": ""
  },
  {
      "iso_639_1": "ro",
      "english_name": "Romanian",
      "name": "Română"
  },
  {
      "iso_639_1": "rn",
      "english_name": "Rundi",
      "name": "Kirundi"
  },
  {
      "iso_639_1": "ru",
      "english_name": "Russian",
      "name": "Pусский"
  },
  {
      "iso_639_1": "sg",
      "english_name": "Sango",
      "name": ""
  },
  {
      "iso_639_1": "sa",
      "english_name": "Sanskrit",
      "name": ""
  },
  {
      "iso_639_1": "si",
      "english_name": "Sinhalese",
      "name": "සිංහල"
  },
  {
      "iso_639_1": "sk",
      "english_name": "Slovak",
      "name": "Slovenčina"
  },
  {
      "iso_639_1": "sl",
      "english_name": "Slovenian",
      "name": "Slovenščina"
  },
  {
      "iso_639_1": "se",
      "english_name": "Northern Sami",
      "name": ""
  },
  {
      "iso_639_1": "sm",
      "english_name": "Samoan",
      "name": ""
  },
  {
      "iso_639_1": "sn",
      "english_name": "Shona",
      "name": ""
  },
  {
      "iso_639_1": "sd",
      "english_name": "Sindhi",
      "name": ""
  },
  {
      "iso_639_1": "so",
      "english_name": "Somali",
      "name": "Somali"
  },
  {
      "iso_639_1": "st",
      "english_name": "Sotho",
      "name": ""
  },
  {
      "iso_639_1": "es",
      "english_name": "Spanish",
      "name": "Español"
  },
  {
      "iso_639_1": "sq",
      "english_name": "Albanian",
      "name": "shqip"
  },
  {
      "iso_639_1": "sc",
      "english_name": "Sardinian",
      "name": ""
  },
  {
      "iso_639_1": "sr",
      "english_name": "Serbian",
      "name": "Srpski"
  },
  {
      "iso_639_1": "ss",
      "english_name": "Swati",
      "name": ""
  },
  {
      "iso_639_1": "su",
      "english_name": "Sundanese",
      "name": ""
  },
  {
      "iso_639_1": "sw",
      "english_name": "Swahili",
      "name": "Kiswahili"
  },
  {
      "iso_639_1": "sv",
      "english_name": "Swedish",
      "name": "svenska"
  },
  {
      "iso_639_1": "ty",
      "english_name": "Tahitian",
      "name": ""
  },
  {
      "iso_639_1": "ta",
      "english_name": "Tamil",
      "name": "தமிழ்"
  },
  {
      "iso_639_1": "tt",
      "english_name": "Tatar",
      "name": ""
  },
  {
      "iso_639_1": "te",
      "english_name": "Telugu",
      "name": "తెలుగు"
  },
  {
      "iso_639_1": "tg",
      "english_name": "Tajik",
      "name": ""
  },
  {
      "iso_639_1": "tl",
      "english_name": "Tagalog",
      "name": ""
  },
  {
      "iso_639_1": "th",
      "english_name": "Thai",
      "name": "ภาษาไทย"
  },
  {
      "iso_639_1": "ti",
      "english_name": "Tigrinya",
      "name": ""
  },
  {
      "iso_639_1": "to",
      "english_name": "Tonga",
      "name": ""
  },
  {
      "iso_639_1": "tn",
      "english_name": "Tswana",
      "name": ""
  },
  {
      "iso_639_1": "ts",
      "english_name": "Tsonga",
      "name": ""
  },
  {
      "iso_639_1": "tk",
      "english_name": "Turkmen",
      "name": ""
  },
  {
      "iso_639_1": "tr",
      "english_name": "Turkish",
      "name": "Türkçe"
  },
  {
      "iso_639_1": "tw",
      "english_name": "Twi",
      "name": ""
  },
  {
      "iso_639_1": "ug",
      "english_name": "Uighur",
      "name": ""
  },
  {
      "iso_639_1": "uk",
      "english_name": "Ukrainian",
      "name": "Український"
  },
  {
      "iso_639_1": "ur",
      "english_name": "Urdu",
      "name": "اردو"
  },
  {
      "iso_639_1": "uz",
      "english_name": "Uzbek",
      "name": "ozbek"
  },
  {
      "iso_639_1": "ve",
      "english_name": "Venda",
      "name": ""
  },
  {
      "iso_639_1": "vi",
      "english_name": "Vietnamese",
      "name": "Tiếng Việt"
  },
  {
      "iso_639_1": "vo",
      "english_name": "Volapük",
      "name": ""
  },
  {
      "iso_639_1": "wa",
      "english_name": "Walloon",
      "name": ""
  },
  {
      "iso_639_1": "wo",
      "english_name": "Wolof",
      "name": "Wolof"
  },
  {
      "iso_639_1": "xh",
      "english_name": "Xhosa",
      "name": ""
  },
  {
      "iso_639_1": "yi",
      "english_name": "Yiddish",
      "name": ""
  },
  {
      "iso_639_1": "za",
      "english_name": "Zhuang",
      "name": ""
  },
  {
      "iso_639_1": "zu",
      "english_name": "Zulu",
      "name": "isiZulu"
  },
  {
      "iso_639_1": "ab",
      "english_name": "Abkhazian",
      "name": ""
  },
  {
      "iso_639_1": "zh",
      "english_name": "Mandarin",
      "name": "普通话"
  },
  {
      "iso_639_1": "ps",
      "english_name": "Pushto",
      "name": "پښتو"
  },
  {
      "iso_639_1": "am",
      "english_name": "Amharic",
      "name": ""
  },
  {
      "iso_639_1": "ar",
      "english_name": "Arabic",
      "name": "العربية"
  },
  {
      "iso_639_1": "bg",
      "english_name": "Bulgarian",
      "name": "български език"
  },
  {
      "iso_639_1": "cn",
      "english_name": "Cantonese",
      "name": "广州话 / 廣州話"
  },
  {
      "iso_639_1": "mk",
      "english_name": "Macedonian",
      "name": ""
  },
  {
      "iso_639_1": "el",
      "english_name": "Greek",
      "name": "ελληνικά"
  },
  {
      "iso_639_1": "fa",
      "english_name": "Persian",
      "name": "فارسی"
  },
  {
      "iso_639_1": "he",
      "english_name": "Hebrew",
      "name": "עִבְרִית"
  },
  {
      "iso_639_1": "hi",
      "english_name": "Hindi",
      "name": "हिन्दी"
  },
  {
      "iso_639_1": "hy",
      "english_name": "Armenian",
      "name": ""
  },
  {
      "iso_639_1": "en",
      "english_name": "English",
      "name": "English"
  },
  {
      "iso_639_1": "ee",
      "english_name": "Ewe",
      "name": "Èʋegbe"
  },
  {
      "iso_639_1": "ka",
      "english_name": "Georgian",
      "name": "ქართული"
  },
  {
      "iso_639_1": "pa",
      "english_name": "Punjabi",
      "name": "ਪੰਜਾਬੀ"
  },
  {
      "iso_639_1": "bn",
      "english_name": "Bengali",
      "name": "বাংলা"
  },
  {
      "iso_639_1": "bs",
      "english_name": "Bosnian",
      "name": "Bosanski"
  },
  {
      "iso_639_1": "ch",
      "english_name": "Chamorro",
      "name": "Finu' Chamorro"
  },
  {
      "iso_639_1": "be",
      "english_name": "Belarusian",
      "name": "беларуская мова"
  },
  {
      "iso_639_1": "yo",
      "english_name": "Yoruba",
      "name": "Èdè Yorùbá"
  }
];

export const countries = [
  {
      "iso_3166_1": "AD",
      "english_name": "Andorra",
      "native_name": "Andorra"
  },
  {
      "iso_3166_1": "AE",
      "english_name": "United Arab Emirates",
      "native_name": "United Arab Emirates"
  },
  {
      "iso_3166_1": "AF",
      "english_name": "Afghanistan",
      "native_name": "Afghanistan"
  },
  {
      "iso_3166_1": "AG",
      "english_name": "Antigua and Barbuda",
      "native_name": "Antigua & Barbuda"
  },
  {
      "iso_3166_1": "AI",
      "english_name": "Anguilla",
      "native_name": "Anguilla"
  },
  {
      "iso_3166_1": "AL",
      "english_name": "Albania",
      "native_name": "Albania"
  },
  {
      "iso_3166_1": "AM",
      "english_name": "Armenia",
      "native_name": "Armenia"
  },
  {
      "iso_3166_1": "AN",
      "english_name": "Netherlands Antilles",
      "native_name": "Netherlands Antilles"
  },
  {
      "iso_3166_1": "AO",
      "english_name": "Angola",
      "native_name": "Angola"
  },
  {
      "iso_3166_1": "AQ",
      "english_name": "Antarctica",
      "native_name": "Antarctica"
  },
  {
      "iso_3166_1": "AR",
      "english_name": "Argentina",
      "native_name": "Argentina"
  },
  {
      "iso_3166_1": "AS",
      "english_name": "American Samoa",
      "native_name": "American Samoa"
  },
  {
      "iso_3166_1": "AT",
      "english_name": "Austria",
      "native_name": "Austria"
  },
  {
      "iso_3166_1": "AU",
      "english_name": "Australia",
      "native_name": "Australia"
  },
  {
      "iso_3166_1": "AW",
      "english_name": "Aruba",
      "native_name": "Aruba"
  },
  {
      "iso_3166_1": "AZ",
      "english_name": "Azerbaijan",
      "native_name": "Azerbaijan"
  },
  {
      "iso_3166_1": "BA",
      "english_name": "Bosnia and Herzegovina",
      "native_name": "Bosnia & Herzegovina"
  },
  {
      "iso_3166_1": "BB",
      "english_name": "Barbados",
      "native_name": "Barbados"
  },
  {
      "iso_3166_1": "BD",
      "english_name": "Bangladesh",
      "native_name": "Bangladesh"
  },
  {
      "iso_3166_1": "BE",
      "english_name": "Belgium",
      "native_name": "Belgium"
  },
  {
      "iso_3166_1": "BF",
      "english_name": "Burkina Faso",
      "native_name": "Burkina Faso"
  },
  {
      "iso_3166_1": "BG",
      "english_name": "Bulgaria",
      "native_name": "Bulgaria"
  },
  {
      "iso_3166_1": "BH",
      "english_name": "Bahrain",
      "native_name": "Bahrain"
  },
  {
      "iso_3166_1": "BI",
      "english_name": "Burundi",
      "native_name": "Burundi"
  },
  {
      "iso_3166_1": "BJ",
      "english_name": "Benin",
      "native_name": "Benin"
  },
  {
      "iso_3166_1": "BM",
      "english_name": "Bermuda",
      "native_name": "Bermuda"
  },
  {
      "iso_3166_1": "BN",
      "english_name": "Brunei Darussalam",
      "native_name": "Brunei"
  },
  {
      "iso_3166_1": "BO",
      "english_name": "Bolivia",
      "native_name": "Bolivia"
  },
  {
      "iso_3166_1": "BR",
      "english_name": "Brazil",
      "native_name": "Brazil"
  },
  {
      "iso_3166_1": "BS",
      "english_name": "Bahamas",
      "native_name": "Bahamas"
  },
  {
      "iso_3166_1": "BT",
      "english_name": "Bhutan",
      "native_name": "Bhutan"
  },
  {
      "iso_3166_1": "BU",
      "english_name": "Burma",
      "native_name": "Burma"
  },
  {
      "iso_3166_1": "BV",
      "english_name": "Bouvet Island",
      "native_name": "Bouvet Island"
  },
  {
      "iso_3166_1": "BW",
      "english_name": "Botswana",
      "native_name": "Botswana"
  },
  {
      "iso_3166_1": "BY",
      "english_name": "Belarus",
      "native_name": "Belarus"
  },
  {
      "iso_3166_1": "BZ",
      "english_name": "Belize",
      "native_name": "Belize"
  },
  {
      "iso_3166_1": "CA",
      "english_name": "Canada",
      "native_name": "Canada"
  },
  {
      "iso_3166_1": "CC",
      "english_name": "Cocos  Islands",
      "native_name": "Cocos (Keeling) Islands"
  },
  {
      "iso_3166_1": "CD",
      "english_name": "Congo",
      "native_name": "Democratic Republic of the Congo (Kinshasa)"
  },
  {
      "iso_3166_1": "CF",
      "english_name": "Central African Republic",
      "native_name": "Central African Republic"
  },
  {
      "iso_3166_1": "CG",
      "english_name": "Congo",
      "native_name": "Republic of the Congo (Brazzaville)"
  },
  {
      "iso_3166_1": "CH",
      "english_name": "Switzerland",
      "native_name": "Switzerland"
  },
  {
      "iso_3166_1": "CI",
      "english_name": "Cote D'Ivoire",
      "native_name": "Côte d’Ivoire"
  },
  {
      "iso_3166_1": "CK",
      "english_name": "Cook Islands",
      "native_name": "Cook Islands"
  },
  {
      "iso_3166_1": "CL",
      "english_name": "Chile",
      "native_name": "Chile"
  },
  {
      "iso_3166_1": "CM",
      "english_name": "Cameroon",
      "native_name": "Cameroon"
  },
  {
      "iso_3166_1": "CN",
      "english_name": "China",
      "native_name": "China"
  },
  {
      "iso_3166_1": "CO",
      "english_name": "Colombia",
      "native_name": "Colombia"
  },
  {
      "iso_3166_1": "CR",
      "english_name": "Costa Rica",
      "native_name": "Costa Rica"
  },
  {
      "iso_3166_1": "CS",
      "english_name": "Serbia and Montenegro",
      "native_name": "Serbia and Montenegro"
  },
  {
      "iso_3166_1": "CU",
      "english_name": "Cuba",
      "native_name": "Cuba"
  },
  {
      "iso_3166_1": "CV",
      "english_name": "Cape Verde",
      "native_name": "Cape Verde"
  },
  {
      "iso_3166_1": "CX",
      "english_name": "Christmas Island",
      "native_name": "Christmas Island"
  },
  {
      "iso_3166_1": "CY",
      "english_name": "Cyprus",
      "native_name": "Cyprus"
  },
  {
      "iso_3166_1": "CZ",
      "english_name": "Czech Republic",
      "native_name": "Czech Republic"
  },
  {
      "iso_3166_1": "DE",
      "english_name": "Germany",
      "native_name": "Germany"
  },
  {
      "iso_3166_1": "DJ",
      "english_name": "Djibouti",
      "native_name": "Djibouti"
  },
  {
      "iso_3166_1": "DK",
      "english_name": "Denmark",
      "native_name": "Denmark"
  },
  {
      "iso_3166_1": "DM",
      "english_name": "Dominica",
      "native_name": "Dominica"
  },
  {
      "iso_3166_1": "DO",
      "english_name": "Dominican Republic",
      "native_name": "Dominican Republic"
  },
  {
      "iso_3166_1": "DZ",
      "english_name": "Algeria",
      "native_name": "Algeria"
  },
  {
      "iso_3166_1": "EC",
      "english_name": "Ecuador",
      "native_name": "Ecuador"
  },
  {
      "iso_3166_1": "EE",
      "english_name": "Estonia",
      "native_name": "Estonia"
  },
  {
      "iso_3166_1": "EG",
      "english_name": "Egypt",
      "native_name": "Egypt"
  },
  {
      "iso_3166_1": "EH",
      "english_name": "Western Sahara",
      "native_name": "Western Sahara"
  },
  {
      "iso_3166_1": "ER",
      "english_name": "Eritrea",
      "native_name": "Eritrea"
  },
  {
      "iso_3166_1": "ES",
      "english_name": "Spain",
      "native_name": "Spain"
  },
  {
      "iso_3166_1": "ET",
      "english_name": "Ethiopia",
      "native_name": "Ethiopia"
  },
  {
      "iso_3166_1": "FI",
      "english_name": "Finland",
      "native_name": "Finland"
  },
  {
      "iso_3166_1": "FJ",
      "english_name": "Fiji",
      "native_name": "Fiji"
  },
  {
      "iso_3166_1": "FK",
      "english_name": "Falkland Islands",
      "native_name": "Falkland Islands"
  },
  {
      "iso_3166_1": "FM",
      "english_name": "Micronesia",
      "native_name": "Micronesia"
  },
  {
      "iso_3166_1": "FO",
      "english_name": "Faeroe Islands",
      "native_name": "Faroe Islands"
  },
  {
      "iso_3166_1": "FR",
      "english_name": "France",
      "native_name": "France"
  },
  {
      "iso_3166_1": "GA",
      "english_name": "Gabon",
      "native_name": "Gabon"
  },
  {
      "iso_3166_1": "GB",
      "english_name": "United Kingdom",
      "native_name": "United Kingdom"
  },
  {
      "iso_3166_1": "GD",
      "english_name": "Grenada",
      "native_name": "Grenada"
  },
  {
      "iso_3166_1": "GE",
      "english_name": "Georgia",
      "native_name": "Georgia"
  },
  {
      "iso_3166_1": "GF",
      "english_name": "French Guiana",
      "native_name": "French Guiana"
  },
  {
      "iso_3166_1": "GH",
      "english_name": "Ghana",
      "native_name": "Ghana"
  },
  {
      "iso_3166_1": "GI",
      "english_name": "Gibraltar",
      "native_name": "Gibraltar"
  },
  {
      "iso_3166_1": "GL",
      "english_name": "Greenland",
      "native_name": "Greenland"
  },
  {
      "iso_3166_1": "GM",
      "english_name": "Gambia",
      "native_name": "Gambia"
  },
  {
      "iso_3166_1": "GN",
      "english_name": "Guinea",
      "native_name": "Guinea"
  },
  {
      "iso_3166_1": "GP",
      "english_name": "Guadaloupe",
      "native_name": "Guadeloupe"
  },
  {
      "iso_3166_1": "GQ",
      "english_name": "Equatorial Guinea",
      "native_name": "Equatorial Guinea"
  },
  {
      "iso_3166_1": "GR",
      "english_name": "Greece",
      "native_name": "Greece"
  },
  {
      "iso_3166_1": "GS",
      "english_name": "South Georgia and the South Sandwich Islands",
      "native_name": "South Georgia & South Sandwich Islands"
  },
  {
      "iso_3166_1": "GT",
      "english_name": "Guatemala",
      "native_name": "Guatemala"
  },
  {
      "iso_3166_1": "GU",
      "english_name": "Guam",
      "native_name": "Guam"
  },
  {
      "iso_3166_1": "GW",
      "english_name": "Guinea-Bissau",
      "native_name": "Guinea-Bissau"
  },
  {
      "iso_3166_1": "GY",
      "english_name": "Guyana",
      "native_name": "Guyana"
  },
  {
      "iso_3166_1": "HK",
      "english_name": "Hong Kong",
      "native_name": "Hong Kong SAR China"
  },
  {
      "iso_3166_1": "HM",
      "english_name": "Heard and McDonald Islands",
      "native_name": "Heard & McDonald Islands"
  },
  {
      "iso_3166_1": "HN",
      "english_name": "Honduras",
      "native_name": "Honduras"
  },
  {
      "iso_3166_1": "HR",
      "english_name": "Croatia",
      "native_name": "Croatia"
  },
  {
      "iso_3166_1": "HT",
      "english_name": "Haiti",
      "native_name": "Haiti"
  },
  {
      "iso_3166_1": "HU",
      "english_name": "Hungary",
      "native_name": "Hungary"
  },
  {
      "iso_3166_1": "ID",
      "english_name": "Indonesia",
      "native_name": "Indonesia"
  },
  {
      "iso_3166_1": "IE",
      "english_name": "Ireland",
      "native_name": "Ireland"
  },
  {
      "iso_3166_1": "IL",
      "english_name": "Israel",
      "native_name": "Israel"
  },
  {
      "iso_3166_1": "IN",
      "english_name": "India",
      "native_name": "India"
  },
  {
      "iso_3166_1": "IO",
      "english_name": "British Indian Ocean Territory",
      "native_name": "British Indian Ocean Territory"
  },
  {
      "iso_3166_1": "IQ",
      "english_name": "Iraq",
      "native_name": "Iraq"
  },
  {
      "iso_3166_1": "IR",
      "english_name": "Iran",
      "native_name": "Iran"
  },
  {
      "iso_3166_1": "IS",
      "english_name": "Iceland",
      "native_name": "Iceland"
  },
  {
      "iso_3166_1": "IT",
      "english_name": "Italy",
      "native_name": "Italy"
  },
  {
      "iso_3166_1": "JM",
      "english_name": "Jamaica",
      "native_name": "Jamaica"
  },
  {
      "iso_3166_1": "JO",
      "english_name": "Jordan",
      "native_name": "Jordan"
  },
  {
      "iso_3166_1": "JP",
      "english_name": "Japan",
      "native_name": "Japan"
  },
  {
      "iso_3166_1": "KE",
      "english_name": "Kenya",
      "native_name": "Kenya"
  },
  {
      "iso_3166_1": "KG",
      "english_name": "Kyrgyz Republic",
      "native_name": "Kyrgyzstan"
  },
  {
      "iso_3166_1": "KH",
      "english_name": "Cambodia",
      "native_name": "Cambodia"
  },
  {
      "iso_3166_1": "KI",
      "english_name": "Kiribati",
      "native_name": "Kiribati"
  },
  {
      "iso_3166_1": "KM",
      "english_name": "Comoros",
      "native_name": "Comoros"
  },
  {
      "iso_3166_1": "KN",
      "english_name": "St. Kitts and Nevis",
      "native_name": "St. Kitts & Nevis"
  },
  {
      "iso_3166_1": "KP",
      "english_name": "North Korea",
      "native_name": "North Korea"
  },
  {
      "iso_3166_1": "KR",
      "english_name": "South Korea",
      "native_name": "South Korea"
  },
  {
      "iso_3166_1": "KW",
      "english_name": "Kuwait",
      "native_name": "Kuwait"
  },
  {
      "iso_3166_1": "KY",
      "english_name": "Cayman Islands",
      "native_name": "Cayman Islands"
  },
  {
      "iso_3166_1": "KZ",
      "english_name": "Kazakhstan",
      "native_name": "Kazakhstan"
  },
  {
      "iso_3166_1": "LA",
      "english_name": "Lao People's Democratic Republic",
      "native_name": "Laos"
  },
  {
      "iso_3166_1": "LB",
      "english_name": "Lebanon",
      "native_name": "Lebanon"
  },
  {
      "iso_3166_1": "LC",
      "english_name": "St. Lucia",
      "native_name": "St. Lucia"
  },
  {
      "iso_3166_1": "LI",
      "english_name": "Liechtenstein",
      "native_name": "Liechtenstein"
  },
  {
      "iso_3166_1": "LK",
      "english_name": "Sri Lanka",
      "native_name": "Sri Lanka"
  },
  {
      "iso_3166_1": "LR",
      "english_name": "Liberia",
      "native_name": "Liberia"
  },
  {
      "iso_3166_1": "LS",
      "english_name": "Lesotho",
      "native_name": "Lesotho"
  },
  {
      "iso_3166_1": "LT",
      "english_name": "Lithuania",
      "native_name": "Lithuania"
  },
  {
      "iso_3166_1": "LU",
      "english_name": "Luxembourg",
      "native_name": "Luxembourg"
  },
  {
      "iso_3166_1": "LV",
      "english_name": "Latvia",
      "native_name": "Latvia"
  },
  {
      "iso_3166_1": "LY",
      "english_name": "Libyan Arab Jamahiriya",
      "native_name": "Libya"
  },
  {
      "iso_3166_1": "MA",
      "english_name": "Morocco",
      "native_name": "Morocco"
  },
  {
      "iso_3166_1": "MC",
      "english_name": "Monaco",
      "native_name": "Monaco"
  },
  {
      "iso_3166_1": "MD",
      "english_name": "Moldova",
      "native_name": "Moldova"
  },
  {
      "iso_3166_1": "ME",
      "english_name": "Montenegro",
      "native_name": "Montenegro"
  },
  {
      "iso_3166_1": "MG",
      "english_name": "Madagascar",
      "native_name": "Madagascar"
  },
  {
      "iso_3166_1": "MH",
      "english_name": "Marshall Islands",
      "native_name": "Marshall Islands"
  },
  {
      "iso_3166_1": "MK",
      "english_name": "Macedonia",
      "native_name": "Macedonia"
  },
  {
      "iso_3166_1": "ML",
      "english_name": "Mali",
      "native_name": "Mali"
  },
  {
      "iso_3166_1": "MM",
      "english_name": "Myanmar",
      "native_name": "Myanmar (Burma)"
  },
  {
      "iso_3166_1": "MN",
      "english_name": "Mongolia",
      "native_name": "Mongolia"
  },
  {
      "iso_3166_1": "MO",
      "english_name": "Macao",
      "native_name": "Macau SAR China"
  },
  {
      "iso_3166_1": "MP",
      "english_name": "Northern Mariana Islands",
      "native_name": "Northern Mariana Islands"
  },
  {
      "iso_3166_1": "MQ",
      "english_name": "Martinique",
      "native_name": "Martinique"
  },
  {
      "iso_3166_1": "MR",
      "english_name": "Mauritania",
      "native_name": "Mauritania"
  },
  {
      "iso_3166_1": "MS",
      "english_name": "Montserrat",
      "native_name": "Montserrat"
  },
  {
      "iso_3166_1": "MT",
      "english_name": "Malta",
      "native_name": "Malta"
  },
  {
      "iso_3166_1": "MU",
      "english_name": "Mauritius",
      "native_name": "Mauritius"
  },
  {
      "iso_3166_1": "MV",
      "english_name": "Maldives",
      "native_name": "Maldives"
  },
  {
      "iso_3166_1": "MW",
      "english_name": "Malawi",
      "native_name": "Malawi"
  },
  {
      "iso_3166_1": "MX",
      "english_name": "Mexico",
      "native_name": "Mexico"
  },
  {
      "iso_3166_1": "MY",
      "english_name": "Malaysia",
      "native_name": "Malaysia"
  },
  {
      "iso_3166_1": "MZ",
      "english_name": "Mozambique",
      "native_name": "Mozambique"
  },
  {
      "iso_3166_1": "NA",
      "english_name": "Namibia",
      "native_name": "Namibia"
  },
  {
      "iso_3166_1": "NC",
      "english_name": "New Caledonia",
      "native_name": "New Caledonia"
  },
  {
      "iso_3166_1": "NE",
      "english_name": "Niger",
      "native_name": "Niger"
  },
  {
      "iso_3166_1": "NF",
      "english_name": "Norfolk Island",
      "native_name": "Norfolk Island"
  },
  {
      "iso_3166_1": "NG",
      "english_name": "Nigeria",
      "native_name": "Nigeria"
  },
  {
      "iso_3166_1": "NI",
      "english_name": "Nicaragua",
      "native_name": "Nicaragua"
  },
  {
      "iso_3166_1": "NL",
      "english_name": "Netherlands",
      "native_name": "Netherlands"
  },
  {
      "iso_3166_1": "NO",
      "english_name": "Norway",
      "native_name": "Norway"
  },
  {
      "iso_3166_1": "NP",
      "english_name": "Nepal",
      "native_name": "Nepal"
  },
  {
      "iso_3166_1": "NR",
      "english_name": "Nauru",
      "native_name": "Nauru"
  },
  {
      "iso_3166_1": "NU",
      "english_name": "Niue",
      "native_name": "Niue"
  },
  {
      "iso_3166_1": "NZ",
      "english_name": "New Zealand",
      "native_name": "New Zealand"
  },
  {
      "iso_3166_1": "OM",
      "english_name": "Oman",
      "native_name": "Oman"
  },
  {
      "iso_3166_1": "PA",
      "english_name": "Panama",
      "native_name": "Panama"
  },
  {
      "iso_3166_1": "PE",
      "english_name": "Peru",
      "native_name": "Peru"
  },
  {
      "iso_3166_1": "PF",
      "english_name": "French Polynesia",
      "native_name": "French Polynesia"
  },
  {
      "iso_3166_1": "PG",
      "english_name": "Papua New Guinea",
      "native_name": "Papua New Guinea"
  },
  {
      "iso_3166_1": "PH",
      "english_name": "Philippines",
      "native_name": "Philippines"
  },
  {
      "iso_3166_1": "PK",
      "english_name": "Pakistan",
      "native_name": "Pakistan"
  },
  {
      "iso_3166_1": "PL",
      "english_name": "Poland",
      "native_name": "Poland"
  },
  {
      "iso_3166_1": "PM",
      "english_name": "St. Pierre and Miquelon",
      "native_name": "St. Pierre & Miquelon"
  },
  {
      "iso_3166_1": "PN",
      "english_name": "Pitcairn Island",
      "native_name": "Pitcairn Islands"
  },
  {
      "iso_3166_1": "PR",
      "english_name": "Puerto Rico",
      "native_name": "Puerto Rico"
  },
  {
      "iso_3166_1": "PS",
      "english_name": "Palestinian Territory",
      "native_name": "Palestinian Territories"
  },
  {
      "iso_3166_1": "PT",
      "english_name": "Portugal",
      "native_name": "Portugal"
  },
  {
      "iso_3166_1": "PW",
      "english_name": "Palau",
      "native_name": "Palau"
  },
  {
      "iso_3166_1": "PY",
      "english_name": "Paraguay",
      "native_name": "Paraguay"
  },
  {
      "iso_3166_1": "QA",
      "english_name": "Qatar",
      "native_name": "Qatar"
  },
  {
      "iso_3166_1": "RE",
      "english_name": "Reunion",
      "native_name": "Réunion"
  },
  {
      "iso_3166_1": "RO",
      "english_name": "Romania",
      "native_name": "Romania"
  },
  {
      "iso_3166_1": "RS",
      "english_name": "Serbia",
      "native_name": "Serbia"
  },
  {
      "iso_3166_1": "RU",
      "english_name": "Russia",
      "native_name": "Russia"
  },
  {
      "iso_3166_1": "RW",
      "english_name": "Rwanda",
      "native_name": "Rwanda"
  },
  {
      "iso_3166_1": "SA",
      "english_name": "Saudi Arabia",
      "native_name": "Saudi Arabia"
  },
  {
      "iso_3166_1": "SB",
      "english_name": "Solomon Islands",
      "native_name": "Solomon Islands"
  },
  {
      "iso_3166_1": "SC",
      "english_name": "Seychelles",
      "native_name": "Seychelles"
  },
  {
      "iso_3166_1": "SD",
      "english_name": "Sudan",
      "native_name": "Sudan"
  },
  {
      "iso_3166_1": "SE",
      "english_name": "Sweden",
      "native_name": "Sweden"
  },
  {
      "iso_3166_1": "SG",
      "english_name": "Singapore",
      "native_name": "Singapore"
  },
  {
      "iso_3166_1": "SH",
      "english_name": "St. Helena",
      "native_name": "St. Helena"
  },
  {
      "iso_3166_1": "SI",
      "english_name": "Slovenia",
      "native_name": "Slovenia"
  },
  {
      "iso_3166_1": "SJ",
      "english_name": "Svalbard & Jan Mayen Islands",
      "native_name": "Svalbard & Jan Mayen"
  },
  {
      "iso_3166_1": "SK",
      "english_name": "Slovakia",
      "native_name": "Slovakia"
  },
  {
      "iso_3166_1": "SL",
      "english_name": "Sierra Leone",
      "native_name": "Sierra Leone"
  },
  {
      "iso_3166_1": "SM",
      "english_name": "San Marino",
      "native_name": "San Marino"
  },
  {
      "iso_3166_1": "SN",
      "english_name": "Senegal",
      "native_name": "Senegal"
  },
  {
      "iso_3166_1": "SO",
      "english_name": "Somalia",
      "native_name": "Somalia"
  },
  {
      "iso_3166_1": "SR",
      "english_name": "Suriname",
      "native_name": "Suriname"
  },
  {
      "iso_3166_1": "SS",
      "english_name": "South Sudan",
      "native_name": "South Sudan"
  },
  {
      "iso_3166_1": "ST",
      "english_name": "Sao Tome and Principe",
      "native_name": "São Tomé & Príncipe"
  },
  {
      "iso_3166_1": "SU",
      "english_name": "Soviet Union",
      "native_name": "Soviet Union"
  },
  {
      "iso_3166_1": "SV",
      "english_name": "El Salvador",
      "native_name": "El Salvador"
  },
  {
      "iso_3166_1": "SY",
      "english_name": "Syrian Arab Republic",
      "native_name": "Syria"
  },
  {
      "iso_3166_1": "SZ",
      "english_name": "Swaziland",
      "native_name": "Eswatini (Swaziland)"
  },
  {
      "iso_3166_1": "TC",
      "english_name": "Turks and Caicos Islands",
      "native_name": "Turks & Caicos Islands"
  },
  {
      "iso_3166_1": "TD",
      "english_name": "Chad",
      "native_name": "Chad"
  },
  {
      "iso_3166_1": "TF",
      "english_name": "French Southern Territories",
      "native_name": "French Southern Territories"
  },
  {
      "iso_3166_1": "TG",
      "english_name": "Togo",
      "native_name": "Togo"
  },
  {
      "iso_3166_1": "TH",
      "english_name": "Thailand",
      "native_name": "Thailand"
  },
  {
      "iso_3166_1": "TJ",
      "english_name": "Tajikistan",
      "native_name": "Tajikistan"
  },
  {
      "iso_3166_1": "TK",
      "english_name": "Tokelau",
      "native_name": "Tokelau"
  },
  {
      "iso_3166_1": "TL",
      "english_name": "Timor-Leste",
      "native_name": "Timor-Leste"
  },
  {
      "iso_3166_1": "TM",
      "english_name": "Turkmenistan",
      "native_name": "Turkmenistan"
  },
  {
      "iso_3166_1": "TN",
      "english_name": "Tunisia",
      "native_name": "Tunisia"
  },
  {
      "iso_3166_1": "TO",
      "english_name": "Tonga",
      "native_name": "Tonga"
  },
  {
      "iso_3166_1": "TP",
      "english_name": "East Timor",
      "native_name": "East Timor"
  },
  {
      "iso_3166_1": "TR",
      "english_name": "Turkey",
      "native_name": "Turkey"
  },
  {
      "iso_3166_1": "TT",
      "english_name": "Trinidad and Tobago",
      "native_name": "Trinidad & Tobago"
  },
  {
      "iso_3166_1": "TV",
      "english_name": "Tuvalu",
      "native_name": "Tuvalu"
  },
  {
      "iso_3166_1": "TW",
      "english_name": "Taiwan",
      "native_name": "Taiwan"
  },
  {
      "iso_3166_1": "TZ",
      "english_name": "Tanzania",
      "native_name": "Tanzania"
  },
  {
      "iso_3166_1": "UA",
      "english_name": "Ukraine",
      "native_name": "Ukraine"
  },
  {
      "iso_3166_1": "UG",
      "english_name": "Uganda",
      "native_name": "Uganda"
  },
  {
      "iso_3166_1": "UM",
      "english_name": "United States Minor Outlying Islands",
      "native_name": "U.S. Outlying Islands"
  },
  {
      "iso_3166_1": "US",
      "english_name": "United States of America",
      "native_name": "United States"
  },
  {
      "iso_3166_1": "UY",
      "english_name": "Uruguay",
      "native_name": "Uruguay"
  },
  {
      "iso_3166_1": "UZ",
      "english_name": "Uzbekistan",
      "native_name": "Uzbekistan"
  },
  {
      "iso_3166_1": "VA",
      "english_name": "Holy See",
      "native_name": "Vatican City"
  },
  {
      "iso_3166_1": "VC",
      "english_name": "St. Vincent and the Grenadines",
      "native_name": "St. Vincent & Grenadines"
  },
  {
      "iso_3166_1": "VE",
      "english_name": "Venezuela",
      "native_name": "Venezuela"
  },
  {
      "iso_3166_1": "VG",
      "english_name": "British Virgin Islands",
      "native_name": "British Virgin Islands"
  },
  {
      "iso_3166_1": "VI",
      "english_name": "US Virgin Islands",
      "native_name": "U.S. Virgin Islands"
  },
  {
      "iso_3166_1": "VN",
      "english_name": "Vietnam",
      "native_name": "Vietnam"
  },
  {
      "iso_3166_1": "VU",
      "english_name": "Vanuatu",
      "native_name": "Vanuatu"
  },
  {
      "iso_3166_1": "WF",
      "english_name": "Wallis and Futuna Islands",
      "native_name": "Wallis & Futuna"
  },
  {
      "iso_3166_1": "WS",
      "english_name": "Samoa",
      "native_name": "Samoa"
  },
  {
      "iso_3166_1": "XC",
      "english_name": "Czechoslovakia",
      "native_name": "Czechoslovakia"
  },
  {
      "iso_3166_1": "XG",
      "english_name": "East Germany",
      "native_name": "East Germany"
  },
  {
      "iso_3166_1": "XI",
      "english_name": "Northern Ireland",
      "native_name": "Northern Ireland"
  },
  {
      "iso_3166_1": "XK",
      "english_name": "Kosovo",
      "native_name": "Kosovo"
  },
  {
      "iso_3166_1": "YE",
      "english_name": "Yemen",
      "native_name": "Yemen"
  },
  {
      "iso_3166_1": "YT",
      "english_name": "Mayotte",
      "native_name": "Mayotte"
  },
  {
      "iso_3166_1": "YU",
      "english_name": "Yugoslavia",
      "native_name": "Yugoslavia"
  },
  {
      "iso_3166_1": "ZA",
      "english_name": "South Africa",
      "native_name": "South Africa"
  },
  {
      "iso_3166_1": "ZM",
      "english_name": "Zambia",
      "native_name": "Zambia"
  },
  {
      "iso_3166_1": "ZR",
      "english_name": "Zaire",
      "native_name": "Zaire"
  },
  {
      "iso_3166_1": "ZW",
      "english_name": "Zimbabwe",
      "native_name": "Zimbabwe"
  }
];

export const genres = [
  {
      "id": 28,
      "name": "Action"
  },
  {
      "id": 12,
      "name": "Adventure"
  },
  {
      "id": 16,
      "name": "Animation"
  },
  {
      "id": 35,
      "name": "Comedy"
  },
  {
      "id": 80,
      "name": "Crime"
  },
  {
      "id": 99,
      "name": "Documentary"
  },
  {
      "id": 18,
      "name": "Drama"
  },
  {
      "id": 10751,
      "name": "Family"
  },
  {
      "id": 14,
      "name": "Fantasy"
  },
  {
      "id": 36,
      "name": "History"
  },
  {
      "id": 27,
      "name": "Horror"
  },
  {
      "id": 10402,
      "name": "Music"
  },
  {
      "id": 9648,
      "name": "Mystery"
  },
  {
      "id": 10749,
      "name": "Romance"
  },
  {
      "id": 878,
      "name": "Science Fiction"
  },
  {
      "id": 10770,
      "name": "TV Movie"
  },
  {
      "id": 53,
      "name": "Thriller"
  },
  {
      "id": 10752,
      "name": "War"
  },
  {
      "id": 37,
      "name": "Western"
  }
];