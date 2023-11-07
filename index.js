let videos;
const element= document.querySelector(".videos-container");
const videosData = [
    {
        "kind": "youtube#searchResult",
        "etag": "eDrXsQmtfv8tYcW_MVlKqOA2_Nc",
        "id": {
            "kind": "youtube#video",
            "videoId": "QORZtiws6Sk"
        },
        "snippet": {
            "publishedAt": "2023-10-09T16:00:13Z",
            "channelId": "UC7NCg0venpKJg3kuJojKlbQ",
            "title": "Season 5: Reckoning Trailer | Halo Infinite",
            "description": "Halo Infinite's Season 5: Reckoning arrives on October 17! Season 5: Reckoning offers an all-new Battle Pass featuring ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/QORZtiws6Sk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/QORZtiws6Sk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/QORZtiws6Sk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "HALO",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-09T16:00:13Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "I_J2Io7dC5O4yGLkG_8VSU_Q0RU",
        "id": {
            "kind": "youtube#video",
            "videoId": "bnVUHWCynig"
        },
        "snippet": {
            "publishedAt": "2009-10-03T20:59:40Z",
            "channelId": "UC9zX2xZIJ4cnwRsgBpHGvMg",
            "title": "Beyoncé - Halo",
            "description": "Beyoncé's official music video for “Halo” Listen to Beyoncé: https://Beyonce.lnk.to/listenYD Subscribe to the official Beyoncé ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/bnVUHWCynig/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/bnVUHWCynig/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/bnVUHWCynig/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BeyoncéVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2009-10-03T20:59:40Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "FXF2oNIyD2K2kuDCfKiXBvAbhSU",
        "id": {
            "kind": "youtube#video",
            "videoId": "YqH56ILjPGQ"
        },
        "snippet": {
            "publishedAt": "2023-10-19T16:47:44Z",
            "channelId": "UCptNOWTizPKjnHYLydzUWbw",
            "title": "This is getting out of hand... I am speechless - HALO NEWS!",
            "description": "Halo Infinite season 5 news! A golden sandwich, a new equipment item, and crazy fun begins! Get your FREE Halo audio book ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/YqH56ILjPGQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/YqH56ILjPGQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/YqH56ILjPGQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "HaloFollower",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-19T16:47:44Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "ssH8NmTWjiMf2v67fkYL1gZ_NxE",
        "id": {
            "kind": "youtube#video",
            "videoId": "T2Dk0HRcen4"
        },
        "snippet": {
            "publishedAt": "2010-03-11T17:27:02Z",
            "channelId": "UC9zX2xZIJ4cnwRsgBpHGvMg",
            "title": "Beyoncé - Halo (Live From Wynn Las Vegas)",
            "description": "Beyoncé performing \"Halo\" live from Wynn Las Vegas Listen to Beyoncé: https://Beyonce.lnk.to/listenYD Subscribe to the official ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/T2Dk0HRcen4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/T2Dk0HRcen4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/T2Dk0HRcen4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BeyoncéVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2010-03-11T17:27:02Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "dg_9XKfFoYMiuweSFJNJ912Mb9M",
        "id": {
            "kind": "youtube#video",
            "videoId": "Euy8XFsE4fY"
        },
        "snippet": {
            "publishedAt": "2023-10-17T16:30:03Z",
            "channelId": "UCJTTQHKUkxjEKBp-hJYHYcg",
            "title": "HALO INFINITE SEASON 5 IS HERE",
            "description": "Season 5 at last Follow me on Social Media! Discord - https://discord.gg/MintBlitz Twitter - https://twitter.com/MintBlitz Twitch ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Euy8XFsE4fY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Euy8XFsE4fY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Euy8XFsE4fY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Mint Blitz",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-17T16:30:03Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "jnwHDEk7sAUkRkSJ-qmIIOWq49s",
        "id": {
            "kind": "youtube#video",
            "videoId": "VSwPCnpenLY"
        },
        "snippet": {
            "publishedAt": "2023-10-18T16:30:06Z",
            "channelId": "UCJTTQHKUkxjEKBp-hJYHYcg",
            "title": "MASTERCHIEF ARMOR UNLOCKED - Halo Infinite Season 5",
            "description": "Follow me on Social Media! Discord - https://discord.gg/MintBlitz Twitter - https://twitter.com/MintBlitz Twitch ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/VSwPCnpenLY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/VSwPCnpenLY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/VSwPCnpenLY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Mint Blitz",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-18T16:30:06Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "8ENvdVEh7Iu7cxXcW-Aj5FelK6E",
        "id": {
            "kind": "youtube#video",
            "videoId": "L6X0PqIWfzQ"
        },
        "snippet": {
            "publishedAt": "2012-04-16T23:49:42Z",
            "channelId": "UCGZhNQ6mRnvLa0_oVJNG_kA",
            "title": "LP - Halo (Beyonce Cover)",
            "description": "Listen to the album 'Love Lines': https://lp.lnk.to/LoveLinesID Watch more from 'Love Lines': ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/L6X0PqIWfzQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/L6X0PqIWfzQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/L6X0PqIWfzQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "LP",
            "liveBroadcastContent": "none",
            "publishTime": "2012-04-16T23:49:42Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "kstzkJHZ2gYnsQyy7qAcdDpQpao",
        "id": {
            "kind": "youtube#video",
            "videoId": "wekDNXDWGjM"
        },
        "snippet": {
            "publishedAt": "2021-12-31T14:19:45Z",
            "channelId": "UChO8h2G8UjOVc081rgYU8XQ",
            "title": "Beyoncé - Halo (Lyrics)",
            "description": "Beyoncé - Halo Stream/Download: • Beyoncé • • Website: http://www.beyonce.com/ • Facebook: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/wekDNXDWGjM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/wekDNXDWGjM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/wekDNXDWGjM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Vibe Music",
            "liveBroadcastContent": "none",
            "publishTime": "2021-12-31T14:19:45Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "sCmkFTpAuiPHb9UUPx-PcyD_aVU",
        "id": {
            "kind": "youtube#video",
            "videoId": "porU0Wc-DMI"
        },
        "snippet": {
            "publishedAt": "2023-10-19T16:00:42Z",
            "channelId": "UCrwTB3GQVTSsXnReL_-AEig",
            "title": "Halo Infinite Season 5 is a GAME CHANGER",
            "description": "343 HAS COOKED! Season 5 of Halo Infinite is finally out and it is by far the biggest and BEST SEASON we've gotten yet.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/porU0Wc-DMI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/porU0Wc-DMI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/porU0Wc-DMI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "UberNick",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-19T16:00:42Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Iz8DRLar1mzrtWHegphYQITdbyA",
        "id": {
            "kind": "youtube#video",
            "videoId": "zZqFE2pIsV4"
        },
        "snippet": {
            "publishedAt": "2023-10-16T04:29:33Z",
            "channelId": "UCWRlMArGqt607LYdhlrrYVA",
            "title": "Halo World Championship 2023 (A-stream) - Championship Sunday | HaloWC",
            "description": "The Halo World Championship 2023 brings together the best Halo Infinite teams from HCS Year 2, vying for supremacy and a ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/zZqFE2pIsV4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/zZqFE2pIsV4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/zZqFE2pIsV4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Halo Esports",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-16T04:29:33Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "YeZOTmrWWU8nZt3Kzipe8uRnklA",
        "id": {
            "kind": "youtube#video",
            "videoId": "2GMNzjK8n6o"
        },
        "snippet": {
            "publishedAt": "2023-10-13T23:37:17Z",
            "channelId": "UCBpUvkwFss3WJg3F8ejWB6A",
            "title": "Halo | Todas las CLASES &amp; FORMAS del FLOOD",
            "description": "El horror cósmico del Flood siempre ha sido la fuerza impulsora que mueve adelante la historia de Halo. Nacidos como la ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/2GMNzjK8n6o/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/2GMNzjK8n6o/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/2GMNzjK8n6o/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "katarn343",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-13T23:37:17Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "HM5gw0xwZLHJtsSAl5yI1uD0sNE",
        "id": {
            "kind": "youtube#video",
            "videoId": "4ausr9B96Lc"
        },
        "snippet": {
            "publishedAt": "2023-10-18T02:54:02Z",
            "channelId": "UCp6F1mQGuaXiDj5otWBmIjg",
            "title": "Is it too late for Halo Infinite?",
            "description": "Is it too late for Halo Infinite? Season 5 is here and I'll give my honest thoughts! *** Join the bookclub on Patreon: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/4ausr9B96Lc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/4ausr9B96Lc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/4ausr9B96Lc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "EckhartsLadder",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-18T02:54:02Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "nYMViLdYCiYBaRe2JwshAra4h_8",
        "id": {
            "kind": "youtube#video",
            "videoId": "Qk2Rk21BP0w"
        },
        "snippet": {
            "publishedAt": "2023-05-04T07:00:10Z",
            "channelId": "UCGkX_HCD_T5XOwxi_KR6YoQ",
            "title": "Caleb Chan, Brian Chan - Halo (Beyonce Cover) (from Netflix&#39;s Queen Charlotte Series)",
            "description": "Official Audio for \"Halo (Beyonce Cover)\" by Caleb Chan & Brian Chan from Queen Charlotte: A Bridgerton Story [Covers from the ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Qk2Rk21BP0w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Qk2Rk21BP0w/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Qk2Rk21BP0w/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "SonySoundtracksVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2023-05-04T07:00:10Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Tfi3blmIP13i7Hrv2Q6UfXQMG3A",
        "id": {
            "kind": "youtube#video",
            "videoId": "s4luDVFVOuQ"
        },
        "snippet": {
            "publishedAt": "2023-08-21T13:44:02Z",
            "channelId": "UCexi0xz1mO6CiSH656eTFaA",
            "title": "Halo - Beyonce (Lyrics)",
            "description": "BEYONCE #HALO #JUSTIFIEDMELODY ♫ Beyoncé - Halo For music submission. Email: justifiedmelody1@gmail.com ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/s4luDVFVOuQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/s4luDVFVOuQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/s4luDVFVOuQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Justified Melody",
            "liveBroadcastContent": "none",
            "publishTime": "2023-08-21T13:44:02Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Sv2yeX4C3T4uluV41MYiFb5tLls",
        "id": {
            "kind": "youtube#video",
            "videoId": "xuYig2Q0wWI"
        },
        "snippet": {
            "publishedAt": "2023-10-14T07:09:08Z",
            "channelId": "UCWRlMArGqt607LYdhlrrYVA",
            "title": "Day 1 Highlights - Halo World Championship 2023",
            "description": "Relive the greatest moments from day 1 of the HaloWC 2023. HCS: http://halo.gg Twitter: http://twitter.com/HCS Twitter: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/xuYig2Q0wWI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/xuYig2Q0wWI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/xuYig2Q0wWI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Halo Esports",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-14T07:09:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "iklEPidtOWBV0kglE-5lI0YXu34",
        "id": {
            "kind": "youtube#video",
            "videoId": "gTMbDkz0QSY"
        },
        "snippet": {
            "publishedAt": "2023-10-17T17:51:12Z",
            "channelId": "UC7NCg0venpKJg3kuJojKlbQ",
            "title": "Battle Pass &amp; Customization Preview | Season 5: Reckoning | Halo Infinite",
            "description": "A reckoning has come. Season 5 of Halo Infinite is here! Featuring 50 tiers of rewards, including 1000 Halo Credits and ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/gTMbDkz0QSY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/gTMbDkz0QSY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/gTMbDkz0QSY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "HALO",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-17T17:51:12Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "oVkDauo5J5VdMuTmE5W8xwalH8M",
        "id": {
            "kind": "youtube#video",
            "videoId": "7uSNGM5xdgA"
        },
        "snippet": {
            "publishedAt": "2023-10-12T17:00:07Z",
            "channelId": "UCWRlMArGqt607LYdhlrrYVA",
            "title": "UNLOCKED: Ep. 3 &quot;FormaL&quot; | Halo Infinite",
            "description": "Dive into Episode One of Halo Esports' captivating new Documentary Series. Episode 3 takes you behind the scenes with FormaL ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/7uSNGM5xdgA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/7uSNGM5xdgA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/7uSNGM5xdgA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Halo Esports",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-12T17:00:07Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "pxdCO8XpHBRNfNX0YeGKV_o06cM",
        "id": {
            "kind": "youtube#video",
            "videoId": "stQiw-S3DQc"
        },
        "snippet": {
            "publishedAt": "2023-10-18T14:50:01Z",
            "channelId": "UCE9UqO3J3G7_WqGJLWNzvjg",
            "title": "Season 5 Brought Me Back to Halo Infinite",
            "description": "I hadn't played Halo Infinite's multiplayer since launch, but with the release of Season 5, I decided to give it another shot. I was left ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/stQiw-S3DQc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/stQiw-S3DQc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/stQiw-S3DQc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Frogarchist",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-18T14:50:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "iiBkybHtD2gBn5u6MfcyPblvzGQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "fNdfz6nQlZw"
        },
        "snippet": {
            "publishedAt": "2023-10-15T15:03:05Z",
            "channelId": "UCktcLOIa7oDS-KbgOKT45lw",
            "title": "SARAFLEXX -  HALO  (Clip Officiel)",
            "description": "\"Halo\" bientôt disponible sur les plateformes de streaming. Production : Kani-Kéli Studio Réalisation : Mayotte Presta (Koke ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/fNdfz6nQlZw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/fNdfz6nQlZw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/fNdfz6nQlZw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Saraflexx Officiel",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-15T15:03:05Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "naAkf8_2n4CMHtE_evcQPsG8tns",
        "id": {
            "kind": "youtube#video",
            "videoId": "5wPPJar_2AA"
        },
        "snippet": {
            "publishedAt": "2023-10-15T10:10:23Z",
            "channelId": "UCWRlMArGqt607LYdhlrrYVA",
            "title": "Halo World Championship 2023 (A-stream) - Day 2 | HaloWC",
            "description": "The Halo World Championship 2023 brings together the best Halo Infinite teams from HCS Year 2, vying for supremacy and a ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/5wPPJar_2AA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/5wPPJar_2AA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/5wPPJar_2AA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Halo Esports",
            "liveBroadcastContent": "none",
            "publishTime": "2023-10-15T10:10:23Z"
        }
    }
]
async function getData(){
    try{
        // const response =  await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=messi&type=video&key=AIzaSyBSwBidJQYx2_cC1UuZptl07HPetJ24iTU");
        // data = await response.json();
        //  loadVideos(data.items);
         loadVideos(videosData);
    }catch (error){
        console.log(error);
    }
}
async function searchVideos(e){
    try{
        e.preventDefault();
        console.log(e);
        let keyword = document.getElementById("mySearch").value;
        const response =  await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=AIzaSyBSwBidJQYx2_cC1UuZptl07HPetJ24iTU`);
        data = await response.json();
        loadVideos(data.items)
        // loadVideos(videosData)
    }catch (error){
        console.log(error);
    }
}
async function loadSubscriptionVideos (){
    try{
        let keyword = document.getElementById("global-search").value;
        const response =  await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=AIzaSyBSwBidJQYx2_cC1UuZptl07HPetJ24iTU`);
        data = await response.json();
        loadVideos(data.items)
        // loadVideos(videosData)
    }catch (error){
        console.log(error);
    }
}
function elementFromHtml(html){
    const template =document.createElement("template");
    template.innerHTML=html.trim();
    return template;
}
function loadVideos(videosCollection){
    let fragment='';
    videosCollection.map((video)=>fragment+=`<div class="vid-list">
                    <div class="play-container" id="video-id-${video.id.videoId}">
                    <img onmouseover="playVideo(this)" class="thumbnail" width="320" height="180"
                         src=${video.snippet.thumbnails.medium.url} videoId="${video.id.videoId}">
                     </div>
                    <div class="div-flex info-container">
                        <img alt="Imagen de avatar"
                             src=${video.snippet.thumbnails.medium.url}
                             class="user-icon">
                        <div class="vid-info">
                            <a class="link-video" href="https://www.youtube.com/watch?v=${video.id.videoId}">${video.snippet.title}</a>
                            <p>${video.snippet.channelTitle}</p>
                            <p> 50K Views &bull; 2 days ago</p>
                        </div>
                    </div>
                </div>`);
    element.innerHTML=fragment;
}
function searchMicrophoneVideos(){
    const output = document.getElementById('mySearch');

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
        output.value = event.results[0][0].transcript;
    };

    recognition.onend = async () => {
        let data;
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${output.value}&type=video&key=AIzaSyBSwBidJQYx2_cC1UuZptl07HPetJ24iTU`);
            data = await response.json();
            loadVideos(data.items)
            // loadVideos(videosData)
        } catch (error) {
            console.log(error);
        }
    };
}
getData();
// videos = getData();
// loadVideos(videosData);


