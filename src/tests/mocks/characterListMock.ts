import { Character, PagedListResponse } from '@/types';

export const charactersListMock: PagedListResponse<Character> = {
  code: 200,
  status: 'Ok',
  copyright: '© 2024 MARVEL',
  attributionText: 'Data provided by Marvel. © 2024 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: '7d6439f90ebaa01740297a45099d67d14bba59c9',
  data: {
    offset: 0,
    limit: 10,
    total: 1564,
    count: 10,
    results: [
      {
        id: 1,
        name: '3-D Man',
        description:
          'Superhuman strength, speed, durability, agility, reflexes, and senses',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        comics: {
          available: 12,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
              name: 'Avengers: The Initiative (2007) #14',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
              name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21546',
              name: 'Avengers: The Initiative (2007) #15',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21741',
              name: 'Avengers: The Initiative (2007) #16',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21975',
              name: 'Avengers: The Initiative (2007) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
              name: 'Avengers: The Initiative (2007) #18',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
              name: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22506',
              name: 'Avengers: The Initiative (2007) #19',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8500',
              name: 'Deadpool (1997) #44',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
              name: 'Marvel Premiere (1972) #35',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10224',
              name: 'Marvel Premiere (1972) #36',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10225',
              name: 'Marvel Premiere (1972) #37',
            },
          ],
          returned: 12,
        },
        series: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
              name: 'Avengers: The Initiative (2007 - 2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
              name: 'Deadpool (1997 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
              name: 'Marvel Premiere (1972 - 1981)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 21,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
              name: 'Cover #19947',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19948',
              name: 'The 3-D Man!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19949',
              name: 'Cover #19949',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19950',
              name: "The Devil's Music!",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19951',
              name: 'Cover #19951',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19952',
              name: 'Code-Name:  The Cold Warrior!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47184',
              name: 'AVENGERS: THE INITIATIVE (2007) #14',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47185',
              name: 'Avengers: The Initiative (2007) #14 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47498',
              name: 'AVENGERS: THE INITIATIVE (2007) #15',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47499',
              name: 'Avengers: The Initiative (2007) #15 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47792',
              name: 'AVENGERS: THE INITIATIVE (2007) #16',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47793',
              name: 'Avengers: The Initiative (2007) #16 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48361',
              name: 'AVENGERS: THE INITIATIVE (2007) #17',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48362',
              name: 'Avengers: The Initiative (2007) #17 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49103',
              name: 'AVENGERS: THE INITIATIVE (2007) #18',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49104',
              name: 'Avengers: The Initiative (2007) #18 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49106',
              name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49888',
              name: 'AVENGERS: THE INITIATIVE (2007) #19',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49889',
              name: 'Avengers: The Initiative (2007) #19 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/54371',
              name: 'Avengers: The Initiative (2007) #14, Spotlight Variant - Int',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
      },
      {
        id: 2,
        name: 'A-Bomb (HAS)',
        description:
          "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
        modified: '2013-09-18T15:54:04-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017100',
        comics: {
          available: 4,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/47176',
              name: 'FREE COMIC BOOK DAY 2013 1 (2013) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40632',
              name: 'Hulk (2008) #53',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40630',
              name: 'Hulk (2008) #54',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40628',
              name: 'Hulk (2008) #55',
            },
          ],
          returned: 4,
        },
        series: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/17765',
              name: 'FREE COMIC BOOK DAY 2013 1 (2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
              name: 'Hulk (2008 - 2012)',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92078',
              name: 'Hulk (2008) #55',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92079',
              name: 'Interior #92079',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92082',
              name: 'Hulk (2008) #54',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92083',
              name: 'Interior #92083',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92086',
              name: 'Hulk (2008) #53',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92087',
              name: 'Interior #92087',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/105929',
              name: 'cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1',
              type: 'cover',
            },
          ],
          returned: 7,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
      },
      {
        id: 3,
        name: 'A.I.M.',
        description:
          'AIM is a terrorist organization bent on destroying the world.',
        modified: '2013-10-17T14:41:30-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009144',
        comics: {
          available: 53,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009144/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36763',
              name: 'Ant-Man & the Wasp (2010) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17553',
              name: 'Avengers (1998) #67',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7340',
              name: 'Avengers (1963) #87',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/4214',
              name: 'Avengers and Power Pack Assemble! (2006) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/63217',
              name: 'Avengers and Power Pack (2017) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/63218',
              name: 'Avengers and Power Pack (2017) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/63219',
              name: 'Avengers and Power Pack (2017) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/63220',
              name: 'Avengers and Power Pack (2017) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/64790',
              name: 'AVENGERS BY BRIAN MICHAEL BENDIS: THE COMPLETE COLLECTION VOL. 2 TPB (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/103371',
              name: 'Avengers Unlimited Infinity Comic (2022) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1170',
              name: 'Avengers Vol. 2: Red Zone (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1214',
              name: 'Avengers Vol. II: Red Zone (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12787',
              name: 'Captain America (1998) #28',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7513',
              name: 'Captain America (1968) #132',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7514',
              name: 'Captain America (1968) #133',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/65466',
              name: 'Captain America by Mark Waid, Ron Garney & Andy Kubert (Hardcover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20367',
              name: 'Defenders (1972) #57',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/31068',
              name: 'Incredible Hulks (2010) #606 (VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/46168',
              name: 'Indestructible Hulk (2012) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43944',
              name: 'Iron Man (2012) #1',
            },
          ],
          returned: 20,
        },
        series: {
          available: 36,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009144/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13082',
              name: 'Ant-Man & the Wasp (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
              name: 'Avengers (1998 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23123',
              name: 'Avengers and Power Pack (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1046',
              name: 'Avengers and Power Pack Assemble! (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27689',
              name: 'AVENGERS BY BRIAN MICHAEL BENDIS: THE COMPLETE COLLECTION VOL. 2 TPB (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/35600',
              name: 'Avengers Unlimited Infinity Comic (2022 - 2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/227',
              name: 'Avengers Vol. 2: Red Zone (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/271',
              name: 'Avengers Vol. II: Red Zone (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1997',
              name: 'Captain America (1998 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1996',
              name: 'Captain America (1968 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23810',
              name: 'Captain America by Mark Waid, Ron Garney & Andy Kubert (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
              name: 'Defenders (1972 - 1986)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/8842',
              name: 'Incredible Hulks (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16583',
              name: 'Indestructible Hulk (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2029',
              name: 'Iron Man (1968 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16593',
              name: 'Iron Man (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23915',
              name: 'Iron Man Epic Collection: Doom (2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9718',
              name: 'Marvel Adventures Super Heroes (2010 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/189',
              name: 'Marvel Masterworks: Captain America Vol. 1 - 2nd Edition (2003)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 57,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009144/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5800',
              name: 'Avengers and Power Pack Assemble! (2006) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5801',
              name: '2 of 4 - 4XLS',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10253',
              name: 'When the Unliving Strike',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10255',
              name: 'Cover #10255',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10256',
              name: 'The Enemy Within!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10259',
              name: 'Death Before Dishonor!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10261',
              name: 'Cover #10261',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10262',
              name: 'The End of A.I.M.!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11921',
              name: 'The Red Skull Lives!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11930',
              name: 'He Who Holds the Cosmic Cube',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11936',
              name: 'The Maddening Mystery of the Inconceivable Adaptoid!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11981',
              name: 'If This Be... Modok',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11984',
              name: 'A Time to Die -- A Time to Live!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11995',
              name: 'At the Mercy of the Maggia',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/15243',
              name: 'Look Homeward, Avenger',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/17518',
              name: 'Captain America (1968) #132',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/17519',
              name: 'The Fearful Secret of Bucky Barnes',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/17520',
              name: 'Captain America (1968) #133',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/17521',
              name: 'Madness In the Slums',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28233',
              name: 'In Sin Airy X',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009144/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/77/aim.?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009144/aim.?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
      },
      {
        id: 4,
        name: 'Aaron Stack',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010699',
        comics: {
          available: 14,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010699/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40776',
              name: 'Dark Avengers (2012) #177',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40773',
              name: 'Dark Avengers (2012) #179',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40774',
              name: 'Dark Avengers (2012) #180',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40778',
              name: 'Dark Avengers (2012) #181',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40787',
              name: 'Dark Avengers (2012) #182',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40786',
              name: 'Dark Avengers (2012) #183',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38073',
              name: 'Hulk (2008) #43',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11910',
              name: 'Universe X (2000) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11911',
              name: 'Universe X (2000) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11912',
              name: 'Universe X (2000) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11913',
              name: 'Universe X (2000) #9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11903',
              name: 'Universe X (2000) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11904',
              name: 'Universe X (2000) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11905',
              name: 'Universe X (2000) #12',
            },
          ],
          returned: 14,
        },
        series: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010699/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/789',
              name: 'Dark Avengers (2012 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
              name: 'Hulk (2008 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2085',
              name: 'Universe X (2000 - 2001)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 27,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010699/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25634',
              name: 'Universe X (2000) #10',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25635',
              name: 'Interior #25635',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25637',
              name: 'Universe X (2000) #12',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25638',
              name: 'Interior #25638',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25647',
              name: 'Universe X (2000) #6',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25648',
              name: 'Interior #25648',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25649',
              name: 'Universe X (2000) #7',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25650',
              name: 'Interior #25650',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25651',
              name: 'Universe X (2000) #8',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25652',
              name: 'Interior #25652',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25653',
              name: 'Universe X (2000) #9',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25654',
              name: 'Interior #25654',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/67100',
              name: 'Universe X (2000) #11',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/89190',
              name: 'Hulk (2008) #43',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/90002',
              name: 'Interior #90002',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92370',
              name: 'Dark Avengers (2012) #179',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92371',
              name: 'Interior #92371',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92372',
              name: 'Dark Avengers (2012) #180',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92373',
              name: 'Interior #92373',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92376',
              name: 'Dark Avengers (2012) #177',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010699/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/2809/aaron_stack?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1010699/aaron_stack?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
      },
      {
        id: 5,
        name: 'Abomination (Emil Blonsky)',
        description:
          'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
        modified: '2012-03-20T12:32:12-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
        comics: {
          available: 58,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009146/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/88869',
              name: 'Abominations (1996) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/88870',
              name: 'Abominations (1996) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/88871',
              name: 'Abominations (1996) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17547',
              name: 'Avengers (1998) #61',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17548',
              name: 'Avengers (1998) #62',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1098',
              name: 'Avengers Vol. 1: World Trust (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8557',
              name: 'Earth X (1999) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/4241',
              name: 'EARTH X TPB [NEW PRINTING] (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20863',
              name: 'Hulk (2008) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2499',
              name: 'Hulk: Destruction (2005) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14424',
              name: 'Hulk (1999) #24',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14425',
              name: 'Hulk (1999) #25',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14428',
              name: 'Hulk (1999) #28',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14450',
              name: 'Hulk (1999) #50',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14451',
              name: 'Hulk (1999) #51',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14453',
              name: 'Hulk (1999) #53',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14454',
              name: 'Hulk (1999) #54',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8948',
              name: 'Incredible Hulk (1962) #137',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8982',
              name: 'Incredible Hulk (1962) #171',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/9005',
              name: 'Incredible Hulk (1962) #194',
            },
          ],
          returned: 20,
        },
        series: {
          available: 28,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009146/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/30582',
              name: 'Abominations (1996 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
              name: 'Avengers (1998 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/158',
              name: 'Avengers Vol. 1: World Trust (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
              name: 'Earth X (1999 - 2000)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
              name: 'EARTH X TPB [NEW PRINTING] (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
              name: 'Hulk (2008 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/465',
              name: 'Hulk (1999 - 2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/924',
              name: 'Hulk: Destruction (2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2021',
              name: 'Incredible Hulk (1962 - 1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2983',
              name: 'Incredible Hulk Annual (1976 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22424',
              name: 'Incredible Hulk Epic Collection: The Hulk Must Die (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/212',
              name: 'Incredible Hulk Vol. 4: Abominable (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/244',
              name: 'Incredible Hulk Vol. IV: Abominable (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/8842',
              name: 'Incredible Hulks (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2572',
              name: 'Iron Man (1998 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/977',
              name: 'Irredeemable Ant-Man (2006 - 2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2423',
              name: 'IRREDEEMABLE ANT-MAN VOL. 1: LOW-LIFE DIGEST (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3722',
              name: 'Killraven (2002 - 2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2437',
              name: 'KILLRAVEN PREMIERE HC (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/32108',
              name: 'Maestro: World War M (2022)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 68,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009146/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4946',
              name: '4 of 4 - 4XLS',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5496',
              name: 'Irredeemable Ant-Man (2006) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12370',
              name: 'Cover #12370',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12372',
              name: 'Whosoever Harms the Hulk..!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18419',
              name: '[none]',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18420',
              name: 'The Stars Mine Enemy',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18488',
              name: 'Incredible Hulk (1962) #171',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18489',
              name: 'Revenge',
              type: '',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18534',
              name: 'Incredible Hulk (1962) #194',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18535',
              name: 'The Day of the Locust!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18536',
              name: 'Incredible Hulk (1962) #195',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18537',
              name: 'Warfare In Wonderland!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18538',
              name: 'Incredible Hulk (1962) #196',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18539',
              name: 'The Abomination Proclamation!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18546',
              name: 'Incredible Hulk (1962) #200',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18547',
              name: 'An Intruder In the Mind!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18776',
              name: 'Cover #18776',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18877',
              name: 'Incredible Hulk (1962) #364',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18878',
              name: 'Countdown Part 4: The Abomination',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18881',
              name: 'Incredible Hulk (1962) #366',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009146/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
              name: 'Chaos War',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Abomination?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009146/abomination_emil_blonsky?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
      },
      {
        id: 6,
        name: 'Abomination (Ultimate)',
        description: '',
        modified: '2012-07-10T19:11:52-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1016823',
        comics: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1016823/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40638',
              name: 'Hulk (2008) #50',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/15717',
              name: 'Ultimate X-Men (2001) #26',
            },
          ],
          returned: 2,
        },
        series: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1016823/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
              name: 'Hulk (2008 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/474',
              name: 'Ultimate X-Men (2001 - 2009)',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1016823/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/31883',
              name: 'Free Preview of THE INCREDIBLE HULK #50',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92098',
              name: 'Hulk (2008) #50',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92099',
              name: 'Interior #92099',
              type: 'interiorStory',
            },
          ],
          returned: 3,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1016823/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1016823/abomination_ultimate?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
      },
      {
        id: 7,
        name: 'Absorbing Man',
        description: '',
        modified: '2013-10-24T14:32:08-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009148',
        comics: {
          available: 103,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009148/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43507',
              name: 'A+X (2012) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7045',
              name: 'Avengers (1963) #183',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7046',
              name: 'Avengers (1963) #184',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7142',
              name: 'Avengers (1963) #270',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36481',
              name: 'Avengers Academy (2010) #16',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36480',
              name: 'Avengers Academy (2010) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36479',
              name: 'Avengers Academy (2010) #18',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36484',
              name: 'Avengers Academy (2010) #19',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17776',
              name: 'Avengers Annual (1967) #20',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/63662',
              name: 'Black Bolt (2017) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/64278',
              name: 'Black Bolt (2017) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/66533',
              name: 'Black Bolt (2017) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/65327',
              name: 'Black Bolt Vol. 1: Hard Time (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12783',
              name: 'Captain America (1998) #24',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20427',
              name: 'Dazzler (1981) #18',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20428',
              name: 'Dazzler (1981) #19',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8499',
              name: 'Deadpool (1997) #43',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/15541',
              name: 'Fantastic Four (1998) #22',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13151',
              name: 'Fantastic Four (1961) #330',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/41433',
              name: 'Fear Itself (2010) #2 (3rd Printing Variant)',
            },
          ],
          returned: 20,
        },
        series: {
          available: 52,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009148/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
              name: 'A+X (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9086',
              name: 'Avengers Academy (2010 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
              name: 'Avengers Annual (1967 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23121',
              name: 'Black Bolt (2017 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23778',
              name: 'Black Bolt Vol. 1: Hard Time (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1997',
              name: 'Captain America (1998 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3745',
              name: 'Dazzler (1981 - 1986)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
              name: 'Deadpool (1997 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
              name: 'Fantastic Four (1961 - 1998)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/421',
              name: 'Fantastic Four (1998 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13691',
              name: 'Fear Itself (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13857',
              name: 'Fear Itself: Fellowship of Fear (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13827',
              name: 'Fear Itself: The Worthy (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/31372',
              name: 'Gamma Flight (2021)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20084',
              name: 'Heroes for Hire (1997 - 1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/465',
              name: 'Hulk (1999 - 2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20552',
              name: 'Illuminati (2015 - 2016)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24278',
              name: 'Immortal Hulk (2018 - 2021)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24891',
              name: 'Immortal Hulk Vol. 2: The Green Door (2019)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 115,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009148/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4988',
              name: '1 of 1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/7866',
              name: 'Punisher War Journal (2006) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10997',
              name: 'Journey Into Mystery (1952) #114',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10998',
              name: 'The Stronger I Am, the Sooner I Die',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11000',
              name: 'Journey Into Mystery (1952) #115',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11001',
              name: 'The Vengeance of the Thunder God',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11022',
              name: 'Journey Into Mystery (1952) #120',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11023',
              name: 'With My Hammer In Hand',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11025',
              name: 'Journey Into Mystery (1952) #121',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11026',
              name: 'The Power!  The Passion!  The Pride!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11028',
              name: 'Journey Into Mystery (1952) #122',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11029',
              name: 'Where Mortals Fear To Tread!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11031',
              name: 'Journey Into Mystery (1952) #123',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11032',
              name: 'While a Universe Trembles',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12951',
              name: 'Fantastic Four (1961) #330',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12952',
              name: 'Good Dreams!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13957',
              name: '"...With Foes Like These...!"',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14628',
              name: 'Avengers (1963) #183',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14630',
              name: 'Avengers (1963) #184',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14823',
              name: 'Avengers (1963) #270',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009148/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
              name: 'Acts of Vengeance!',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
              name: 'Civil War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
              name: 'Fear Itself',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
              name: 'Secret Wars',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/273',
              name: 'Siege',
            },
          ],
          returned: 5,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/84/absorbing_man?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Absorbing_Man?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009148/absorbing_man?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
      },
      {
        id: 8,
        name: 'Abyss',
        description: '',
        modified: '2014-04-29T14:10:43-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009149',
        comics: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009149/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13943',
              name: 'Uncanny X-Men (1963) #402',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13945',
              name: 'Uncanny X-Men (1963) #404',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13946',
              name: 'Uncanny X-Men (1963) #405',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13947',
              name: 'Uncanny X-Men (1963) #406',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13970',
              name: 'Uncanny X-Men (1963) #429',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13972',
              name: 'Uncanny X-Men (1963) #431',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12386',
              name: 'X-Men: Alpha (1995) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2539',
              name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)',
            },
          ],
          returned: 8,
        },
        series: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009149/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
              name: 'Uncanny X-Men (1963 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2104',
              name: 'X-Men: Alpha (1995)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1583',
              name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009149/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/26281',
              name: 'A Beginning',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28352',
              name: 'Utility of Myth',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28356',
              name: 'Army Ants',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28358',
              name: 'Ballroom Blitzkrieg',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28360',
              name: 'Staring Contests are for Suckers',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28407',
              name: 'The Draco Part One: Sins of the Father',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28411',
              name: 'The Draco Part Three',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28413',
              name: 'The Draco Part Four',
              type: 'interiorStory',
            },
          ],
          returned: 8,
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009149/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
              name: 'Age of Apocalypse',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Abyss_(alien)?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009149/abyss?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
      },
      {
        id: 9,
        name: 'Abyss (Age of Apocalypse)',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010903',
        comics: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010903/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/18099',
              name: 'Weapon X (1995) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12386',
              name: 'X-Men: Alpha (1995) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2539',
              name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)',
            },
          ],
          returned: 3,
        },
        series: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010903/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3635',
              name: 'Weapon X (1995)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2104',
              name: 'X-Men: Alpha (1995)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1583',
              name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010903/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/26280',
              name: 'X-Men: Alpha (1994) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/38448',
              name: 'X-Facts',
              type: '',
            },
          ],
          returned: 2,
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010903/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
              name: 'Age of Apocalypse',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Abyss_(Age_of_Apocalypse)?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1010903/abyss_age_of_apocalypse?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
      },
      {
        id: 10,
        name: 'Adam Destine',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011266',
        comics: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011266/comics',
          items: [],
          returned: 0,
        },
        series: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011266/series',
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011266/stories',
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011266/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/2902/adam_destine?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Destine,_Adam?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011266/adam_destine?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
      },
    ],
  },
};
