# iproject-server
API server for Individual Project
> Aniplay -- Anime Streaming Website
&nbsp;

&nbsp;

## _RESTful endpoints_
## <b>Animes</b>

&nbsp;
### GET anime/search

> Get anime search by title

_Request Query_
```js
{
    "q": "naruto"
}
```

_Request Header_
```js
not needed
```

_Request Body_
```js
not needed
```

_Response (200 - OK)_
```js
{
    "request_hash": "request:search:9b9d315dd05e8f0690bfa02ec0c1855cbf87210a",
    "request_cached": true,
    "request_cache_expiry": 362206,
    "results": [
        {
            "mal_id": 20,
            "url": "https://myanimelist.net/anime/20/Naruto",
            "image_url": "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
            "title": "Naruto",
            "airing": false,
            "synopsis": "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
            "type": "TV",
            "episodes": 220,
            "score": 7.93,
            "start_date": "2002-10-03T00:00:00+00:00",
            "end_date": "2007-02-08T00:00:00+00:00",
            "members": 2099642,
            "rated": "PG-13"
        }
    ]
}
```

### GET anime/upcoming
> Get upcoming anime

_Request Header_
```js
not needed
```

_Request Body_
```js
not needed
```

_Response (200 - OK)_
```js
{
    "request_hash": "request:season:7b4caf8304de4cc9fd3443714d6f79ad16274e49",
    "request_cached": true,
    "request_cache_expiry": 18528,
    "season_name": "Later",
    "season_year": null,
    "anime": [
        {
            "mal_id": 40357,
            "url": "https://myanimelist.net/anime/40357/Tate_no_Yuusha_no_Nariagari_Season_3",
            "title": "Tate no Yuusha no Nariagari Season 3",
            "image_url": "https://cdn.myanimelist.net/images/anime/1406/104631.jpg",
            "synopsis": "Third season of Tate no Yuusha no Nariagari.",
            "type": "TV",
            "airing_start": null,
            "episodes": null,
            "members": 145458,
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                }
            
        }]
    ]
}
```

### GET anime/info/:mal_id
> Get anime info by mal_id

_Request Params_
```js
{
    "mal_id": "<MyAnimeList anime id>"
}
```

_Request Header_
```js
not needed
```

_Request Body_
```js
not needed
```

_Request Status (200)_
```js
{
    "request_hash": "request:anime:cf88e00e2aa60da59f2361df8d32b9ead702f289",
    "request_cached": true,
    "request_cache_expiry": 16376,
    "mal_id": 37999,
    "url": "https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen",
    "image_url": "https://cdn.myanimelist.net/images/anime/1295/106551.jpg",
    "trailer_url": "https://www.youtube.com/embed/rZ95aZmQu_8?enablejsapi=1&wmode=opaque&autoplay=1",
    "title": "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
    "title_english": "Kaguya-sama: Love is War",
    "title_japanese": "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
    "title_synonyms": [
        "Kaguya Wants to be Confessed To: The Geniuses' War of Love and Brains"
    ],
    "type": "TV",
    "source": "Manga",
    "episodes": 12,
    "status": "Finished Airing",
    "airing": false,
    "aired": {
        "from": "2019-01-12T00:00:00+00:00",
        "to": "2019-03-30T00:00:00+00:00",
        "prop": {
            "from": {
                "day": 12,
                "month": 1,
                "year": 2019
            },
            "to": {
                "day": 30,
                "month": 3,
                "year": 2019
            }
        },
        "string": "Jan 12, 2019 to Mar 30, 2019"
    },
    "duration": "25 min per ep",
    "rating": "PG-13 - Teens 13 or older",
    "score": 8.41,
    "scored_by": 679963,
    "rank": 156,
    "popularity": 77,
    "members": 1119455,
    "favorites": 24867,
    "synopsis": "At the renowned Shuchiin Academy, Miyuki Shirogane and Kaguya Shinomiya are the student body's top representatives. ....
    "premiered": "Winter 2019",
    "broadcast": "Saturdays at 23:30 (JST)",
    "related": {
        "Adaptation": [
            {
                "mal_id": 90125,
                "type": "manga",
                "name": "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
                "url": "https://myanimelist.net/manga/90125/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen"
            }
        ],
        "Sequel": [
            {
                "mal_id": 40591,
                "type": "anime",
                "name": "Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen",
                "url": "https://myanimelist.net/anime/40591/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen"
            }
        ],
        "Other": [
            {
                "mal_id": 44270,
                "type": "anime",
                "name": "He Wei Dao x Hui Yeda Xiaojie Xiangyao Wo Gaobai",
                "url": "https://myanimelist.net/anime/44270/He_Wei_Dao_x_Hui_Yeda_Xiaojie_Xiangyao_Wo_Gaobai"
            }
        ]
    },
    "producers": [
        {
            "mal_id": 17,
            "type": "anime",
            "name": "Aniplex",
            "url": "https://myanimelist.net/anime/producer/17/Aniplex"
        }
    ],
    "licensors": [
        {
            "mal_id": 493,
            "type": "anime",
            "name": "Aniplex of America",
            "url": "https://myanimelist.net/anime/producer/493/Aniplex_of_America"
        }
    ],
    "studios": [
        {
            "mal_id": 56,
            "type": "anime",
            "name": "A-1 Pictures",
            "url": "https://myanimelist.net/anime/producer/56/A-1_Pictures"
        }
    ],
    "genres": [
        {
            "mal_id": 4,
            "type": "anime",
            "name": "Comedy",
            "url": "https://myanimelist.net/anime/genre/4/Comedy"
        }
    ],
    "opening_themes": [
        "\"Love Dramatic feat. Rikka Ihara (ラブ・ドラマティック feat.伊原六花)\" by Masayuki Suzuki (鈴木雅之) (eps 1-12)"
    ],
    "ending_themes": [
        "#1: \"Sentimental Crisis (センチメンタルクライシス)\" by halca (eps 1-2, 4-12)",
        "#2: \"Chikatto Chika Chika♡ (チカっとチカ千花っ♡)\" by Chika Fujiwara (Konomi Kohara (ep 3)"
    ]
}
```
### GET anime/videos
> get anime videos
_Request Query_
```js
{
    "keyword": "<anime title from MyAnimeList>"
}
```

_Request Header_
```js
not needed
```

_Request Body_
```js
not needed
```

_Request Status (200)_
```js
{
    "video": {
        "cover": "https://cdnimg.xyz/cover/kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen.png",
        "title": "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
        "date": "2019-03-30 17:09:42",
        "vid_id": "kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen-episode-12"
    }
}
```

### GET anime/detail
> get anime videos detail
_Request Query_
```js
{
    "vid_id": "<vid id from anime/videos>"
}
```

_Request Header_
```js
not needed
```

_Request Body_
```js
not needed
```
_Request Status (200)_
```js
{
    "api_info": "API by KuronekoNy4n",
    "request_info": "https://www.facebook.com/addstring",
    "data": [
        {
            "title": "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen Episode 12 English Subbed",
            "title2": "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
            "description": "Considered a genius due to having the highest grades in the country, Miyuki Shirogane leads the prestigious Shuchiin Academy's student council as its president, working...
            "stream": "https://streamani.net/streaming.php?id=MTE2MTgw&title=Kaguya-sama+wa+Kokurasetai%3A+Tensai-tachi+no+Renai+Zunousen&typesub=SUB&sub=&cover=Y292ZXIva2FndXlhLXNhbWEtd2Eta29rdXJhc2V0YWktdGVuc2FpLXRhY2hpLW5vLXJlbmFpLXp1bm91c2VuLnBuZw==",
            "download": "https://streamani.net/download?id=MTE2MTgw&title=Kaguya-sama+wa+Kokurasetai%3A+Tensai-tachi+no+Renai+Zunousen&typesub=SUB&sub=&cover=Y292ZXIva2FndXlhLXNhbWEtd2Eta29rdXJhc2V0YWktdGVuc2FpLXRhY2hpLW5vLXJlbmFpLXp1bm91c2VuLnBuZw==",
            "download_id": "MTE2MTgw"
        }
    ],
    "episode": [
        {
            "cover": "https://cache.cdnfile.info/images/1a6adb471aed72d7aa3f7912d40ecda9/12_cover.jpg",
            "episode": "Episode 12",
            "type": "SUB",
            "date": "2019-03-30 09:09:42",
            "vid_id": "kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen-episode-12"
        }
    ]
}
```



## <b>Users</b>

### POST user/login

> Create new user with google account

_Request Header_
```js
not needed
```

_Request Body_
```js
{
    "id_token" : "<google id_token>"
}
```

_Response (200 - OK)_
```js
{
    "access_token": "<user access token>",
    "email": "<rser email>",
    "id": "<user id>",
}
```

_Response (400 - Bad Request)_
```js
{
    "code": 400,
    "message": [
        "Email field is required",
        "Password field is required",
    ]
}
```

### POST bookmark
> add bokmarks from current user

_Request Header_
```js
{
   " access_token" : "string access token>"
}
```

_Request Body_
```js
{
    image_url:"https://cdn.myanimelist.net/images/anime/1079/109928.jpg"
    mal_id:43608
}
```

_Response (200 - OK)_
```js
{
    id:49
    image_url:"https://cdn.myanimelist.net/images/anime/1079/109928.jpg"
    mal_id:43608
    status:"Plan to Watch"
    title:"Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3rd Season"
    userId: <current user id>
    updatedAt:"2021-07-01T02:40:21.879Z"
    createdAt:"2021-07-01T02:40:21.879Z"
}
```

### GET bookmark
> get all bookmark from current user
_Request Header_
```js
{
   " access_token" : "string access token>"
}
```

_Request Body_
```js
not needed
```

_Response (200 - OK)_
```js
[
    {
        id:49
        image_url:"https://cdn.myanimelist.net/images/anime/1079/109928.jpg"
        mal_id:43608
        status:"Plan to Watch"
        title:"Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3rd Season"
        userId: <current user id>
        updatedAt:"2021-07-01T02:40:21.879Z"
        createdAt:"2021-07-01T02:40:21.879Z"
    }
]
```

### GET bookmark/:id
> get bookmark by params id
_Request Header_
```js
{
   " access_token" : "string access token>"
}
```

_Request Params_
```js
{
   "id" : "<myAnimeList id>"
}
```

_Request Body_
```js
not needed
```

_Response (200 - OK)_
```js

{
    id:49
    image_url:"https://cdn.myanimelist.net/images/anime/1079/109928.jpg"
    mal_id:43608
    status:"Plan to Watch"
    title:"Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3rd Season"
    userId: <current user id>
    updatedAt:"2021-07-01T02:40:21.879Z"
    createdAt:"2021-07-01T02:40:21.879Z"
}

```

### PATCH bookmark/:id
> upadte status bookmark by params id
_Request Header_
```js
{
   " access_token" : "string access token>"
}
```

_Request Params_
```js
{
   "id" : "<myAnimeList id>"
}
```

_Request Body_
```js
{
    status: 'Watched'
}
```

_Response (200 - OK)_
```js

{
    message: 'anime not found'
}

```

_Response (404 )_
```js
{
    code: 404,
    message: 'anime not found'
}

```


### DELETE bookmark/:id
_Request Header_
```js
{
   " access_token" : "string access token>"
}
```

_Request Params_
```js
{
   "id" : "<myAnimeList id>"
}
```

_Request Body_
```js
not needed
```

_Response (200 - OK)_
```js

{
    message: 'adelete bookmark success'
}

```

_Response (404 )_
```js
{
    code: 404,
    message: 'anime not found'
}

```

