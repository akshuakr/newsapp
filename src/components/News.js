import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    articles = [
        {
            source: {
                id: "fox-news",
                name: "Fox News",
            },
            author: "Ryan Morik",
            title: "Fairleigh Dickinson upsets top seed Purdue, becoming second 16 seed to beat a No. 1 in March Madness history - Fox News",
            description:
                "The Fairleigh Dickinson Knights are now the second No. 16 seed in NCAA history to upset a No. 1 in the tournament, taking down Purdue on Friday night.",
            url: "https://www.foxnews.com/sports/fairleigh-dicksinson-upsets-top-seed-purdue-becoming-second-16-seed-beat-no-1-in-march-madness-history",
            urlToImage:
                "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/ff0b8be7-fdu-2.jpg",
            publishedAt: "2023-03-18T01:12:00Z",
            content:
                "Theres something about New Jersey schools playing Cinderella.\r\nLast year, it was St. Peters. \r\nOn Thursday, it was Princeton. \r\nNow, its Grant Singleton and Fairleigh Dickinson.\r\nCLICK HERE FOR MORE … [+1770 chars]",
        },
        {
            source: {
                id: "cnn",
                name: "CNN",
            },
            author: "Caitlin Hu",
            title: "Russia scoffs but Putin could stand trial for alleged war crimes, ICC chief prosecutor says - CNN",
            description:
                "The International Criminal Court's chief prosecutor believes Russian President Vladimir Putin could stand trial for alleged crimes committed during Russia's war in Ukraine, he told CNN on Friday, despite Moscow's arguments that it is not subject to the court'…",
            url: "https://www.cnn.com/2023/03/17/americas/icc-karim-khan-putin-war-crimes-intl/index.html",
            urlToImage:
                "https://media.cnn.com/api/v1/images/stellar/prod/230317194933-karim-khan-talks-to-clarissa-ward-031723.jpg?c=16x9&q=w_800,c_fill",
            publishedAt: "2023-03-18T01:03:00Z",
            content:
                "The International Criminal Courts chief prosecutor believes Russian President Vladimir Putin could stand trial for alleged crimes committed during Russias war in Ukraine, he told CNN on Friday, despi… [+5613 chars]",
        },
        {
            source: {
                id: "fox-news",
                name: "Fox News",
            },
            author: "Melissa Rudy",
            title: "Rare tick-borne babesiosis disease on the rise in northeastern US, says CDC: Here's why - Fox News",
            description:
                "The CDC reported that cases of babesiosis, a parasitic disease spread by infected ticks, saw a significant uptick between 2011 and 2019 in some northeastern states.",
            url: "https://www.foxnews.com/health/rare-tick-borne-babesiosis-disease-on-the-rise-in-northeastern-us-says-cdc-heres-why",
            urlToImage:
                "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/tick-on-leaf.jpg",
            publishedAt: "2023-03-18T00:47:00Z",
            content:
                "Lyme disease may hold the distinction of being the most commonly reported tick-borne disease in the U.S. but its not the only one. \r\nBabesiosis, a rare tick-borne parasitic disease, is spiking in som… [+5174 chars]",
        },
        {
            source: {
                id: null,
                name: "Space.com",
            },
            author: "Mike Wall",
            title: "SpaceX launches 2 rockets less than 5 hours apart - Space.com",
            description:
                "The two orbital missions lifted off on Friday (March 17) at 3:26 p.m. ET and 7:38 p.m. ET.",
            url: "https://www.space.com/spacex-launch-doubleheader-march-2023",
            urlToImage:
                "https://cdn.mos.cms.futurecdn.net/ryEFWAB7J2DvRm9BxhVSbE-1200-80.jpeg",
            publishedAt: "2023-03-18T00:41:50Z",
            content:
                "SpaceX pulled off a St. Patrick's Day doubleheader, acing two orbital missions on Friday (March 17).\r\nThe show began at 3:26 p.m. EDT (1926 GMT), when SpaceX launched 52 of its Starlink internet sate… [+2314 chars]",
        },
        {
            source: {
                id: "the-hill",
                name: "The Hill",
            },
            author: "Ellen Mitchell",
            title: "What Xi and Putin want to gain from their joint meeting - The Hill",
            description:
                "Chinese President Xi Jinping is set to travel to Moscow next week to hold talks with Russian President Vladimir Putin – his first visit to Russia since Kremlin troops invaded Ukraine.   The March 20 to 22 visit, also Xi’s first foreign trip since winning a th…",
            url: "https://thehill.com/policy/defense/3906089-what-xi-and-putin-want-to-gain-from-their-joint-meeting/",
            urlToImage:
                "https://thehill.com/wp-content/uploads/sites/2/2023/03/AP23076270932445.jpg?w=1280",
            publishedAt: "2023-03-18T00:40:00Z",
            content:
                "Skip to content\r\nThis combination photo shows Russian President Vladimir Putin, left, in Samarkand, Uzbekistan, on Sept. 16, 2022, and China’s President Xi Jinping in Beijing on Dec. 2, 2019. China s… [+7151 chars]",
        },
        {
            source: {
                id: null,
                name: "YouTube",
            },
            author: null,
            title: "UFC 286: EDWARDS vs USMAN 3 | COLD OPEN - UFC - Ultimate Fighting Championship",
            description:
                "Ron Perlman narrates the UFC 286: Edwards vs Usman 3 cold open. Headlining the main card is a welterweight trilogy title fight featuring newly crowned champi...",
            url: "https://www.youtube.com/watch?v=ND5CdD3-LEI",
            urlToImage: "https://i.ytimg.com/vi/ND5CdD3-LEI/maxresdefault.jpg",
            publishedAt: "2023-03-18T00:00:09Z",
            content: null,
        },
        {
            source: {
                id: null,
                name: "Hollywood Reporter",
            },
            author: "Sydney Odman",
            title: "‘Shazam! Fury of the Gods’ Post-Credits Scene Was Inspired by a Scrapped Villain Story - Hollywood Reporter",
            description:
                "As the credits roll, audiences can expect two additional scenes from the DC sequel.",
            url: "https://www.hollywoodreporter.com/movies/movie-news/shazam-fury-of-the-gods-post-credits-scenes-1235355380/",
            urlToImage:
                "https://www.hollywoodreporter.com/wp-content/uploads/2023/03/MCDSHFU_WB025-H-2023.jpg?w=1024",
            publishedAt: "2023-03-17T23:25:40Z",
            content:
                "[This story contains spoilers for Shazam! Fury of the Gods.]\r\nIf that final end-credits scene of Shazam! Fury of the Gods looked familiar, it was supposed to. \r\nAfter a long battle against the daught… [+4146 chars]",
        },
        {
            source: {
                id: "cbs-news",
                name: "CBS News",
            },
            author: "Mike Sullivan",
            title: "First Republic Bank bailout will have impact on Boston area - CBS Boston",
            description:
                "Eleven of the largest banks in the country are bailing out First Republic Bank.",
            url: "https://www.cbsnews.com/boston/news/first-republic-bank-bailout-impact-boston/",
            urlToImage:
                "https://assets2.cbsnewsstatic.com/hub/i/r/2023/03/17/dcbd57b4-b49d-4f52-996c-d2a9d1d0b16e/thumbnail/1200x630/e30ddbe753bbe078dca050ab8687e716/first.jpg",
            publishedAt: "2023-03-17T23:11:00Z",
            content:
                "BOSTON -- Eleven of the largest banks in the country are bailing out a bank with numerous branches in the Boston area. They are giving $30 billion to First Republic Bank to keep the company from coll… [+1349 chars]",
        },
        {
            source: {
                id: "cnn",
                name: "CNN",
            },
            author: "Sandra Gonzalez",
            title: "Sam Neill, 'Jurassic Park' star, reveals cancer diagnosis - CNN",
            description:
                'In his forthcoming memoir, actor Sam Neill, best known for his work in the "Jurassic Park" franchise films, reveals he recently battled stage III blood cancer, but he is now cancer free.',
            url: "https://www.cnn.com/2023/03/17/entertainment/sam-neill-cancer/index.html",
            urlToImage:
                "https://media.cnn.com/api/v1/images/stellar/prod/230317174735-sam-neill-file-2019-restricted.jpg?c=16x9&q=w_800,c_fill",
            publishedAt: "2023-03-17T22:21:00Z",
            content:
                "In his forthcoming memoir, actor Sam Neill, best known for his work in the Jurassic Park franchise films, reveals he recently battled stage III blood cancer, but he is now cancer free. \r\nAccording to… [+1017 chars]",
        },
        {
            source: {
                id: "reuters",
                name: "Reuters",
            },
            author: null,
            title: "UBS in talks to acquire Credit Suisse -FT - Reuters",
            description:
                'Banking giant UBS <a href="https://www.reuters.com/companies/UBSG.S" target="_blank">(UBSG.S)</a> is in discussions to take over all or parts of Credit Suisse <a href="https://www.reuters.com/companies/CSGN.S" target="_blank">(CSGN.S)</a>, with the boards of …',
            url: "https://www.reuters.com/business/finance/ubs-talks-acquire-credit-suisse-ft-2023-03-17/",
            urlToImage:
                "https://www.reuters.com/resizer/DD7HsQfWRv7YenjtZiw4Feq-pxs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VOYUPH747NJ25LPXMJAB57MCJI.jpg",
            publishedAt: "2023-03-17T21:51:00Z",
            content:
                "March 17 (Reuters) - Banking giant UBS (UBSG.S) is in discussions to take over all or parts of Credit Suisse (CSGN.S), with the boards of Switzerland's two biggest lenders set to meet separately over… [+1605 chars]",
        },
        {
            source: {
                id: "cbs-news",
                name: "CBS News",
            },
            author: "Cara Tabachnick",
            title: "Family of Stephen Smith, who was found dead not far from Murdaugh home, raises money for exhumation and autopsy - CBS News",
            description:
                "The investigation into Smith's 2015 death was reopened after authorities said they found new evidence during the investigation into the murders of Maggie and Paul Murdaugh.",
            url: "https://www.cbsnews.com/news/stephen-smith-body-to-be-exhumed-family-fundraiser-investigation-reopened-after-murdaugh-trial/",
            urlToImage:
                "https://assets2.cbsnewsstatic.com/hub/i/r/2023/03/17/51431009-3571-4173-807e-c7ae2b537fbf/thumbnail/1200x630/bf7dcaec882c4d15990ac6a288d126a5/screen-shot-2023-03-17-at-3-47-54-pm.png",
            publishedAt: "2023-03-17T21:32:35Z",
            content:
                "The body of Stephen Smith, who died on a country road not far from the Murdaugh home, is to be exhumed, his family announced on Friday. \r\nOn March 9, his mother, Sandy Smith, opened a GoFundMe page t… [+2395 chars]",
        },
        {
            source: {
                id: null,
                name: "YouTube",
            },
            author: null,
            title: "VSiN's Brent Musburger: Jets, Not Packers, Have Leverage in Rodgers Trade Talks | Rich Eisen Show - The Rich Eisen Show",
            description:
                "VSiN Managing Editor Brent Musburger tells Rich Eisen Show guest host Suzy Shuster why the New York Jets actually have leverage over the Green Bay Packers in...",
            url: "https://www.youtube.com/watch?v=H4ItizrXF50",
            urlToImage: "https://i.ytimg.com/vi/H4ItizrXF50/maxresdefault.jpg",
            publishedAt: "2023-03-17T21:30:01Z",
            content: null,
        },
        {
            source: {
                id: null,
                name: "BBC News",
            },
            author: "https://www.facebook.com/bbcnews",
            title: "The prison experience Elizabeth Holmes is desperate to avoid - BBC",
            description:
                "The US is one of four countries that routinely separates incarcerated mothers from their babies.",
            url: "https://www.bbc.com/news/world-us-canada-64970156",
            urlToImage:
                "https://ichef.bbci.co.uk/news/1024/branded_news/1654D/production/_128996419_holmesindex.jpg",
            publishedAt: "2023-03-17T21:24:54Z",
            content:
                "A US judge in California is deciding whether Elizabeth Holmes, the disgraced founder of medical testing company Theranos, can delay the start of her 11-year prison sentence while she appeals her conv… [+8325 chars]",
        },
        {
            source: {
                id: null,
                name: "YourTango",
            },
            author: "Aria Gmitter",
            title: "Tarot Horoscope For Saturday, March 18, 2023, By Zodiac Sign - YourTango",
            description:
                "Your tarot horoscope for Saturday, March 18, 2023 is here for each zodiac sign in astrology.",
            url: "https://www.yourtango.com/2023359843/tarot-horoscope-saturday-march-18-2023-zodiac-sign",
            urlToImage:
                "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/tarot-march-18-2023-zodiac-signs.png?itok=xREXiqW2",
            publishedAt: "2023-03-17T21:03:50Z",
            content:
                "Your daily tarot horoscope for March 18, 2023 is here for each zodiac sign in astrology. Read on to find out what the stars have in store for you.\r\nRELATED: March 18, 2023 Horoscope For All Zodiac Si… [+4656 chars]",
        },
        {
            source: {
                id: null,
                name: "Theregister.com",
            },
            author: "Jessica Lyons Hardcastle",
            title: "Google: Turn off Wi-Fi calling, VoLTE to protect your Android from Samsung hijack bugs - The Register",
            description:
                "Four flaws open mobiles, cars to remote-control at baseband level with just a phone number",
            url: "https://www.theregister.com/2023/03/17/android_google_project_zero_samsung_modems/",
            urlToImage: "https://regmedia.co.uk/2015/10/01/android.jpg",
            publishedAt: "2023-03-17T20:35:00Z",
            content:
                "Google security analysts have warned Android device users that several zero-day vulnerabilities in some Samsung chipsets could allow an attacker to completely hijack and remote-control their handsets… [+3188 chars]",
        },
        {
            source: {
                id: null,
                name: "Variety",
            },
            author: "Jordan Moreau",
            title: "Lance Reddick, ‘The Wire’ and ‘John Wick’ Star, Dies at 60 - Variety",
            description:
                "Lance Reddick, who appeared in major TV series like “The Wire,” “Fringe,” “Bosch” and films like the “John Wick” franchise, which is set to debut &#8…",
            url: "https://variety.com/2023/film/obituaries-people-news/lance-reddick-dead-the-wire-john-wick-1235557886/",
            urlToImage:
                "https://variety.com/wp-content/uploads/2023/03/Lance-REddick.jpg?w=1000&h=562&crop=1",
            publishedAt: "2023-03-17T20:23:00Z",
            content:
                "Lance Reddick, who appeared in major TV series like “The Wire,” “Fringe,” “Bosch” and films like the “John Wick” franchise, which is set to debut “John Wick: Chapter 4” next week, died of natural cau… [+4179 chars]",
        },
        {
            source: {
                id: "ars-technica",
                name: "Ars Technica",
            },
            author: "Andrew Cunningham",
            title: "Microsoft is testing a built-in cryptocurrency wallet for the Edge browser - Ars Technica",
            description:
                'Crypto wallet would join coupons, cash back, and "buy now, pay later" add-ons.',
            url: "https://arstechnica.com/gadgets/2023/03/microsoft-is-testing-a-built-in-cryptocurrency-wallet-for-the-edge-browser/",
            urlToImage:
                "https://cdn.arstechnica.net/wp-content/uploads/2023/03/edge-crypto-2-760x380.jpeg",
            publishedAt: "2023-03-17T20:14:30Z",
            content:
                "66 with \r\nMicrosoft appears to be testing a built-in cryptocurrency wallet for Edge, according to screenshots pulled from a beta build of the browser. The feature, which the screenshots say is strict… [+2947 chars]",
        },
        {
            source: {
                id: "associated-press",
                name: "Associated Press",
            },
            author: "Colleen Long",
            title: "Officials discussing security in case of Trump indictment - The Associated Press",
            description:
                "NEW YORK (AP) — Law enforcement officials in New York are making security preparations for the possibility that former President Donald Trump  could be indicted in the coming weeks and appear in a Manhattan courtroom in an investigation examining hush money p…",
            url: "https://apnews.com/article/trump-grand-jury-investigation-manhattan-e35836ebb6179e1c0ea28877590cfc1c",
            urlToImage:
                "https://storage.googleapis.com/afs-prod/media/1eacfa8f8b7e43a0888a8e7176be2166/3000.webp",
            publishedAt: "2023-03-17T20:07:17Z",
            content:
                "NEW YORK (AP) Law enforcement officials in New York are making security preparations for the possibility that former President Donald Trump could be indicted in the coming weeks and appear in a Manha… [+3166 chars]",
        },
        {
            source: {
                id: "cbs-news",
                name: "CBS News",
            },
            author: "Michael George, Sara Moniuszko",
            title: '"COVID-somnia" and the impact of long COVID on sleep - CBS News',
            description:
                "A crippling symptom of long COVID? Insomnia. CBS News spoke to a woman who experienced this, and doctors say she's not alone.",
            url: "https://www.cbsnews.com/news/long-covid-insomnia-sleep/",
            urlToImage:
                "https://assets2.cbsnewsstatic.com/hub/i/r/2021/03/13/8f54727f-afac-4ba0-8085-96b7aba0c5cd/thumbnail/1200x630/d1c3db43db8561586fdf3256f24167bd/insomnia-clock-1920.jpg",
            publishedAt: "2023-03-17T20:05:51Z",
            content:
                'When Priya Mathew recovered from a mild case of COVID-19 in November, she thought she was out of the woods. Then came long COVID. \r\n"At one point I counted 23 symptoms," Mathew told CBS News. "The mo… [+2039 chars]',
        },
        {
            source: {
                id: null,
                name: "CBS Sports",
            },
            author: "",
            title: "2023 NFL free agency winners and losers: Giants, Jets among early victors for developments at QB - CBS Sports",
            description:
                "New York might finally be growing in star power on offense",
            url: "https://www.cbssports.com/nfl/news/2023-nfl-free-agency-winners-and-losers-giants-jets-among-early-victors-for-developments-at-qb/",
            urlToImage:
                "https://sportshub.cbsistatic.com/i/r/2023/03/16/a1b05df8-91e3-4169-b257-187ba8120a93/thumbnail/1200x675/bc243788be6346da81cc94ea54cc24f6/daboll-g.jpg",
            publishedAt: "2023-03-17T20:00:00Z",
            content:
                "The first week of 2023 NFL free agency is nearly in the books. The official league year didn't start until Wednesday, but big-name deals have been pouring in since Monday, and already dozens of the t… [+6981 chars]",
        },
    ];

    constructor() {
        super();
        console.log("I am constructor");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title.slice(0,45)}
                                    description={element.description.slice(0,88)}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
