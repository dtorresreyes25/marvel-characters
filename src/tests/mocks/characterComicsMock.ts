import { Comic, PagedListResponse } from '@/types';

export const characterComicsMock: PagedListResponse<Comic> = {
  code: 200,
  status: 'Ok',
  copyright: '© 2024 MARVEL',
  attributionText: 'Data provided by Marvel. © 2024 MARVEL',
  attributionHTML:
    '<a href="https://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: '5c7ab533570db948e40f5034a263eea4bb4eb564',
  data: {
    offset: 0,
    limit: 10,
    total: 202,
    count: 10,
    results: [
      {
        id: 106811,
        digitalId: 0,
        title: 'Warlock: Rebirth (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description:
          'Collects Warlock: Rebirth (2023) #1-5.  An untold take of Adam Warlock and the Infinity Watch! Ron Marz and Ron Lim return to the world of Adam Warlock to tell a flashback tale set in the wake of the classic cosmic epic INFINITY GAUNTLET! Adam was created to be the perfect human specimen. Since then, he has gone on to be a cosmic savior, defending the galaxy from the likes of Thanos and the Magus. But what will happen when the next evolution of Warlock emerges? Someone stronger, faster and smarter than Adam? Adam has been stripped of his Infinity Gem, and its new bearer calls herself Eve! With Adam rendered comatose, his allies - Gamora, Pip the Troll and Genis-Vell - seek the aid of Doctor Strange! But can the Sorcerer Supreme help Adam find his way out of Soul World? Or will Eve reign supreme as the new Warlock of the cosmos?',
        modified: '2023-11-06T17:46:41.000Z',
        isbn: '978-1-302-95213-6',
        upc: '',
        diamondCode: '',
        ean: '9781302 952136 51599',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 112,
        textObjects: [],
        resourceURI: 'https://gateway.marvel.com/v1/public/comics/106811',
        urls: [
          {
            type: 'detail',
            url: 'https://marvel.com/comics/collection/106811/warlock_rebirth_trade_paperback?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
        series: {
          resourceURI: 'https://gateway.marvel.com/v1/public/series/36861',
          name: 'Warlock: Rebirth (2023)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-11-08T05:00:00.000Z',
          },
          {
            type: 'focDate',
            date: '2023-08-28T04:00:00.000Z',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 15.99,
          },
        ],
        thumbnail: {
          path: 'https://i.annihil.us/u/prod/marvel/i/mg/c/50/64e3c09ade63c',
          extension: 'jpg',
        },
        images: [
          {
            path: 'https://i.annihil.us/u/prod/marvel/i/mg/c/50/64e3c09ade63c',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 1,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106811/creators',
          items: [
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 1,
        },
        characters: {
          available: 1,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106811/characters',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010354',
              name: 'Adam Warlock',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106811/stories',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/234734',
              name: 'cover from ADAM WARLOCK TPB (2023) #1',
              type: 'cover',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/234735',
              name: 'story from ADAM WARLOCK TPB (2023) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106811/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 102536,
        digitalId: 63847,
        title: 'Silver Surfer Rebirth: Legacy (2023) #2',
        issueNumber: 2,
        variantDescription: '',
        description:
          'THE SILVER SURFER VS. ADAM WARLOCK! Surfer has been framed for the apparent death of Genis-Vell! Can the Surfer survive long enough to clear his name to the Infinity Watch? And what actually happened to Genis?!',
        modified: '2023-11-21T14:13:32.000Z',
        isbn: '',
        upc: '75960620435900211',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'https://gateway.marvel.com/v1/public/comics/102536',
        urls: [
          {
            type: 'detail',
            url: 'https://marvel.com/comics/issue/102536/silver_surfer_rebirth_legacy_2023_2?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'purchase',
            url: 'https://comicstore.marvel.com/Silver-Surfer-Rebirth-Legacy-2/digital-comic/63847?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'reader',
            url: 'https://marvel.com/digitalcomics/view.htm?iid=63847&utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
        series: {
          resourceURI: 'https://gateway.marvel.com/v1/public/series/35415',
          name: 'Silver Surfer Rebirth: Legacy (2023 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-10-11T04:00:00.000Z',
          },
          {
            type: 'focDate',
            date: '2023-09-11T04:00:00.000Z',
          },
          {
            type: 'unlimitedDate',
            date: '2023-09-25T18:58:00.000Z',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2023-09-25T18:58:00.000Z',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'https://i.annihil.us/u/prod/marvel/i/mg/4/60/65298f8d2684a',
          extension: 'jpg',
        },
        images: [
          {
            path: 'https://i.annihil.us/u/prod/marvel/i/mg/4/60/65298f8d2684a',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/102536/creators',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13250',
              name: 'Romulo Fajardo Jr.',
              role: 'colorist (cover)',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/11483',
              name: 'Don Ho',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/658',
              name: 'Ron Lim',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/2673',
              name: 'Ron Marz',
              role: 'writer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13027',
              name: 'Darren Shan',
              role: 'editor',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 3,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/102536/characters',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010354',
              name: 'Adam Warlock',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1011098',
              name: 'Genis-Vell',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1009592',
              name: 'Silver Surfer',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 2,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/102536/stories',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/226173',
              name: 'cover from Silver Surfer Rebirth 2 (2029) #2',
              type: 'cover',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/226174',
              name: 'story from Silver Surfer Rebirth 2 (2029) #2',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/102536/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 106817,
        digitalId: 63197,
        title: 'Warlock: Rebirth (2023) #5',
        issueNumber: 5,
        variantDescription: '',
        description:
          "The grand conclusion to Adam Warlock's journey! Will he rise above and prove himself as the better Warlock, or is Eve truly his replacement?",
        modified: '2023-09-14T13:14:21.000Z',
        isbn: '',
        upc: '75960620589900511',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'https://gateway.marvel.com/v1/public/comics/106817',
        urls: [
          {
            type: 'detail',
            url: 'https://marvel.com/comics/issue/106817/warlock_rebirth_2023_5?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'purchase',
            url: 'https://comicstore.marvel.com/Warlock-Rebirth-5/digital-comic/63197?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'reader',
            url: 'https://marvel.com/digitalcomics/view.htm?iid=63197&utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
        series: {
          resourceURI: 'https://gateway.marvel.com/v1/public/series/36860',
          name: 'Warlock: Rebirth (2023)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-08-02T04:00:00.000Z',
          },
          {
            type: 'focDate',
            date: '2023-06-26T04:00:00.000Z',
          },
          {
            type: 'unlimitedDate',
            date: '2023-07-11T13:47:00.000Z',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2023-07-11T13:47:00.000Z',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'https://i.annihil.us/u/prod/marvel/i/mg/3/90/64d12993ec181',
          extension: 'jpg',
        },
        images: [
          {
            path: 'https://i.annihil.us/u/prod/marvel/i/mg/3/90/64d12993ec181',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106817/creators',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13250',
              name: 'Romulo Fajardo Jr.',
              role: 'colorist (cover)',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/11483',
              name: 'Don Ho',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/658',
              name: 'Ron Lim',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/2673',
              name: 'Ron Marz',
              role: 'writer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13027',
              name: 'Darren Shan',
              role: 'editor',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 1,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106817/characters',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010354',
              name: 'Adam Warlock',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106817/stories',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/234746',
              name: 'cover from Adam Warlock (2023) #5',
              type: 'cover',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/234747',
              name: 'story from Adam Warlock (2023) #5',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106817/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 106816,
        digitalId: 63030,
        title: 'Warlock: Rebirth (2023) #4',
        issueNumber: 4,
        variantDescription: '',
        description:
          "It's Warlock vs. Warlock! But will Adam emerge victorious? Or will Eve reign supreme as the new Warlock of the cosmos!",
        modified: '2023-08-22T21:21:39.000Z',
        isbn: '',
        upc: '75960620589900411',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'https://gateway.marvel.com/v1/public/comics/106816',
        urls: [
          {
            type: 'detail',
            url: 'https://marvel.com/comics/issue/106816/warlock_rebirth_2023_4?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'purchase',
            url: 'https://comicstore.marvel.com/Warlock-Rebirth-4/digital-comic/63030?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'reader',
            url: 'https://marvel.com/digitalcomics/view.htm?iid=63030&utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
        series: {
          resourceURI: 'https://gateway.marvel.com/v1/public/series/36860',
          name: 'Warlock: Rebirth (2023)',
        },
        variants: [
          {
            resourceURI: 'https://gateway.marvel.com/v1/public/comics/110100',
            name: 'Warlock: Rebirth (2023) #4 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-07-12T04:00:00.000Z',
          },
          {
            type: 'focDate',
            date: '2023-06-12T04:00:00.000Z',
          },
          {
            type: 'unlimitedDate',
            date: '2023-06-22T19:23:00.000Z',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2023-06-22T19:23:00.000Z',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'https://i.annihil.us/u/prod/marvel/i/mg/a/00/649da2988a1df',
          extension: 'jpg',
        },
        images: [
          {
            path: 'https://i.annihil.us/u/prod/marvel/i/mg/a/00/649da2988a1df',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106816/creators',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13250',
              name: 'Romulo Fajardo Jr.',
              role: 'colorist (cover)',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/11483',
              name: 'Don Ho',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/658',
              name: 'Ron Lim',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/2673',
              name: 'Ron Marz',
              role: 'writer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13027',
              name: 'Darren Shan',
              role: 'editor',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 1,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106816/characters',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010354',
              name: 'Adam Warlock',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106816/stories',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/234744',
              name: 'cover from Adam Warlock (2023) #4',
              type: 'cover',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/234745',
              name: 'story from Adam Warlock (2023) #4',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106816/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 106815,
        digitalId: 62805,
        title: 'Warlock: Rebirth (2023) #3',
        issueNumber: 3,
        variantDescription: '',
        description:
          'Adam Warlock and Doctor Strange must escape Soul World! But in order to do that, Adam will have to fight Eve head on! Without the Soul Gem, does Adam stand a chance?',
        modified: '2023-08-22T21:21:34.000Z',
        isbn: '',
        upc: '75960620589900311',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'https://gateway.marvel.com/v1/public/comics/106815',
        urls: [
          {
            type: 'detail',
            url: 'https://marvel.com/comics/issue/106815/warlock_rebirth_2023_3?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'purchase',
            url: 'https://comicstore.marvel.com/Warlock-Rebirth-3/digital-comic/62805?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'reader',
            url: 'https://marvel.com/digitalcomics/view.htm?iid=62805&utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
        series: {
          resourceURI: 'https://gateway.marvel.com/v1/public/series/36860',
          name: 'Warlock: Rebirth (2023)',
        },
        variants: [
          {
            resourceURI: 'https://gateway.marvel.com/v1/public/comics/109483',
            name: 'Warlock: Rebirth (2023) #3 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-06-28T04:00:00.000Z',
          },
          {
            type: 'focDate',
            date: '2023-05-29T04:00:00.000Z',
          },
          {
            type: 'unlimitedDate',
            date: '2023-06-08T21:09:00.000Z',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2023-06-08T21:09:00.000Z',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'https://i.annihil.us/u/prod/marvel/i/mg/9/b0/6494a8c8af3d1',
          extension: 'jpg',
        },
        images: [
          {
            path: 'https://i.annihil.us/u/prod/marvel/i/mg/9/b0/6494a8c8af3d1',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106815/creators',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13250',
              name: 'Romulo Fajardo Jr.',
              role: 'colorist (cover)',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/11483',
              name: 'Don Ho',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/658',
              name: 'Ron Lim',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/2673',
              name: 'Ron Marz',
              role: 'writer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13027',
              name: 'Darren Shan',
              role: 'editor',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 1,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106815/characters',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010354',
              name: 'Adam Warlock',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106815/stories',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/234742',
              name: 'cover from Adam Warlock (2023) #3',
              type: 'cover',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/234743',
              name: 'story from Adam Warlock (2023) #3',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106815/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 106814,
        digitalId: 62553,
        title: 'Warlock: Rebirth (2023) #2',
        issueNumber: 2,
        variantDescription: '',
        description:
          'Adam Warlock has been stripped of his Infinity Gem! But who is the new bearer calling herself Eve? As Adam falls into a coma, Gamora, Pip and Genis-Vell must seek the help of Doctor Strange!',
        modified: '2023-08-28T06:59:47.000Z',
        isbn: '',
        upc: '75960620589900211',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'https://gateway.marvel.com/v1/public/comics/106814',
        urls: [
          {
            type: 'detail',
            url: 'https://marvel.com/comics/issue/106814/warlock_rebirth_2023_2?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'purchase',
            url: 'https://comicstore.marvel.com/Warlock-Rebirth-2/digital-comic/62553?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'reader',
            url: 'https://marvel.com/digitalcomics/view.htm?iid=62553&utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
        series: {
          resourceURI: 'https://gateway.marvel.com/v1/public/series/36860',
          name: 'Warlock: Rebirth (2023)',
        },
        variants: [
          {
            resourceURI: 'https://gateway.marvel.com/v1/public/comics/108802',
            name: 'Warlock: Rebirth (2023) #2 (Variant)',
          },
          {
            resourceURI: 'https://gateway.marvel.com/v1/public/comics/108803',
            name: 'Warlock: Rebirth (2023) #2 (Variant)',
          },
          {
            resourceURI: 'https://gateway.marvel.com/v1/public/comics/108804',
            name: 'Warlock: Rebirth (2023) #2 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-05-24T04:00:00.000Z',
          },
          {
            type: 'focDate',
            date: '2023-04-24T04:00:00.000Z',
          },
          {
            type: 'unlimitedDate',
            date: '2023-05-05T17:25:00.000Z',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2023-05-05T17:25:00.000Z',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'https://i.annihil.us/u/prod/marvel/i/mg/f/40/646b6a2ec1fde',
          extension: 'jpg',
        },
        images: [
          {
            path: 'https://i.annihil.us/u/prod/marvel/i/mg/f/40/646b6a2ec1fde',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106814/creators',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13250',
              name: 'Romulo Fajardo Jr.',
              role: 'colorist (cover)',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/11483',
              name: 'Don Ho',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/658',
              name: 'Ron Lim',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/2673',
              name: 'Ron Marz',
              role: 'writer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13027',
              name: 'Darren Shan',
              role: 'editor',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 1,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106814/characters',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010354',
              name: 'Adam Warlock',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106814/stories',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/234740',
              name: 'cover from Adam Warlock (2023) #2',
              type: 'cover',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/234741',
              name: 'story from Adam Warlock (2023) #2',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/106814/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 103119,
        digitalId: 62607,
        title: 'Who Is...? Adam Warlock Infinity Comic (2023) #1',
        issueNumber: 1,
        variantDescription: '',
        description: '',
        modified: '2023-05-04T16:46:25.000Z',
        isbn: '',
        upc: '75960620274401211',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Vertical Comic',
        pageCount: 4,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'Get ready for a cosmic journey like no other! From the cocoon of his creation as "HIM" to wielder of the Infinity Stones, expand your mind across the stars and learn…Who Is Adam Warlock?',
          },
        ],
        resourceURI: 'https://gateway.marvel.com/v1/public/comics/103119',
        urls: [
          {
            type: 'detail',
            url: 'https://marvel.com/comics/issue/103119/who_is._adam_warlock_infinity_comic_2023_1?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'reader',
            url: 'https://marvel.com/digitalcomics/view.htm?iid=62607&utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
        series: {
          resourceURI: 'https://gateway.marvel.com/v1/public/series/35546',
          name: 'Who Is...? Adam Warlock Infinity Comic (2023)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-05-05T04:00:00.000Z',
          },
          {
            type: 'focDate',
            date: '2023-04-03T04:00:00.000Z',
          },
          {
            type: 'unlimitedDate',
            date: '2023-05-05T04:00:00.000Z',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'https://i.annihil.us/u/prod/marvel/i/mg/2/50/63fcba59c3deb',
          extension: 'jpg',
        },
        images: [
          {
            path: 'https://i.annihil.us/u/prod/marvel/i/mg/2/50/63fcba59c3deb',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/103119/creators',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/12313',
              name: 'Mark Basso',
              role: 'editor',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13280',
              name: 'Damian Couceiro',
              role: 'inker',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/10172',
              name: 'Vc Clayton Cowles',
              role: 'letterer',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/1282',
              name: 'Ralph Macchio',
              role: 'writer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/13008',
              name: 'Ruth Redmond',
              role: 'colorist',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 6,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/103119/characters',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010354',
              name: 'Adam Warlock',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010763',
              name: 'Gamora',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1011299',
              name: 'Guardians of the Galaxy',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010904',
              name: 'Magus (Adam Warlock)',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010762',
              name: 'Pip',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1009652',
              name: 'Thanos',
            },
          ],
          returned: 6,
        },
        stories: {
          available: 2,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/103119/stories',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/227341',
              name: 'cover from Who Is…? Adam Warlock Infinity Comic (2023) #1',
              type: 'cover',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/227342',
              name: 'story from Who Is…? Adam Warlock Infinity Comic (2023) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/103119/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 105920,
        digitalId: 62173,
        title: 'Adam Warlock: Strange Tales Facsimile Edition (2023) #178',
        issueNumber: 178,
        variantDescription: '',
        description:
          'Witness the power of Warlock! Presenting the first chapter in cosmic maestro Jim Starlin’s sprawling saga of the enigmatic Adam Warlock – and his dark side, the malevolent Magus! Warlock was an artificial entity created on Earth to be the perfect man; he went on to travel the stars and harness the power of the cosmic Soul Gem! But when a desperate woman comes to Adam Warlock for aid, will he protect her from the religious fanatics of the Universal Church of Truth or fall to the might of its towering warrior, Borgia? The Church worships the ultimate force that is the Magus – and when Adam learns the truth about him, nothing will ever be the same! It’s one of the all-time great Marvel comic books, boldly re-presented in its original form, ads and all! Reprinting STRANGE TALES (1975) #178',
        modified: '2023-04-25T18:15:14.000Z',
        isbn: '',
        upc: '75960620549300111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'https://gateway.marvel.com/v1/public/comics/105920',
        urls: [
          {
            type: 'detail',
            url: 'https://marvel.com/comics/issue/105920/adam_warlock_strange_tales_facsimile_edition_2023_178?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'purchase',
            url: 'https://comicstore.marvel.com/Adam-Warlock-Strange-Tales-Facsimile-Edition-178/digital-comic/62173?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'reader',
            url: 'https://marvel.com/digitalcomics/view.htm?iid=62173&utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
        series: {
          resourceURI: 'https://gateway.marvel.com/v1/public/series/36621',
          name: 'Adam Warlock: Strange Tales Facsimile Edition (2023)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-04-26T04:00:00.000Z',
          },
          {
            type: 'focDate',
            date: '2023-03-27T04:00:00.000Z',
          },
          {
            type: 'unlimitedDate',
            date: '2023-06-26T15:06:00.000Z',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2023-06-26T15:06:00.000Z',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/6451118db36e6',
          extension: 'jpg',
        },
        images: [
          {
            path: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/6451118db36e6',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/105920/creators',
          items: [
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/146',
              name: 'Jim Starlin',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 1,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/105920/characters',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010354',
              name: 'Adam Warlock',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/105920/stories',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/232951',
              name: 'cover from new series (2023) #1',
              type: 'cover',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/232952',
              name: 'story from new series (2023) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/105920/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 109103,
        digitalId: 62645,
        title:
          "Guardians of the Galaxy: Somebody's Got to Do It Infinity Comic (2023) #4",
        issueNumber: 4,
        variantDescription: '',
        description: '',
        modified: '2023-04-20T13:24:42.000Z',
        isbn: '',
        upc: '75960620669800411',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Vertical Comic',
        pageCount: 10,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "The Infinity Comics adaptation of GUARDIANS OF THE GALAXY (2008) #2! What is the Guardians’ connection to Adam Warlock's mystical past? Could it really be the threat he's spent years trying to deny?",
          },
        ],
        resourceURI: 'https://gateway.marvel.com/v1/public/comics/109103',
        urls: [
          {
            type: 'detail',
            url: 'https://marvel.com/comics/issue/109103/guardians_of_the_galaxy_somebodys_got_to_do_it_infinity_comic_2023_4?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'reader',
            url: 'https://marvel.com/digitalcomics/view.htm?iid=62645&utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
        series: {
          resourceURI: 'https://gateway.marvel.com/v1/public/series/37451',
          name: "Guardians of the Galaxy: Somebody's Got to Do It Infinity Comic (2023)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-04-21T04:00:00.000Z',
          },
          {
            type: 'focDate',
            date: '2023-03-20T04:00:00.000Z',
          },
          {
            type: 'unlimitedDate',
            date: '2023-04-21T04:00:00.000Z',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'https://i.annihil.us/u/prod/marvel/i/mg/1/a0/63fe764959139',
          extension: 'jpg',
        },
        images: [
          {
            path: 'https://i.annihil.us/u/prod/marvel/i/mg/1/a0/63fe764959139',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/109103/creators',
          items: [
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/1107',
              name: 'Dan Abnett',
              role: 'writer',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/485',
              name: 'Andy Lanning',
              role: 'writer',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/creators/10454',
              name: 'Nathan Fairbairn',
              role: 'colorist',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/559',
              name: 'Paul Pelletier',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 5,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/109103/characters',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010354',
              name: 'Adam Warlock',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1011299',
              name: 'Guardians of the Galaxy',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1009523',
              name: 'Quasar (Phyla-Vell)',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010744',
              name: 'Rocket Raccoon',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010733',
              name: 'Star-Lord (Peter Quill)',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/109103/stories',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/239328',
              name: "cover from Guardians of the Galaxy: Somebody's Got to Do It Infinity Comic (2023) #4",
              type: 'cover',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/239329',
              name: "story from Guardians of the Galaxy: Somebody's Got to Do It Infinity Comic (2023) #4",
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/109103/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 109107,
        digitalId: 62922,
        title:
          "Guardians of the Galaxy: Somebody's Got to Do It Infinity Comic (2023) #8",
        issueNumber: 8,
        variantDescription: '',
        description: '',
        modified: '2023-04-20T14:04:38.000Z',
        isbn: '',
        upc: '75960620669800811',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Vertical Comic',
        pageCount: 10,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'The Infinity Comics adaptation of GUARDIANS OF THE GALAXY (2008) #4! Is there a Skrull amongst the Guardians? Maybe the recently returned and revamped Adam Warlock? Or Star-Lord? Rocket?',
          },
        ],
        resourceURI: 'https://gateway.marvel.com/v1/public/comics/109107',
        urls: [
          {
            type: 'detail',
            url: 'https://marvel.com/comics/issue/109107/guardians_of_the_galaxy_somebodys_got_to_do_it_infinity_comic_2023_8?utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
          {
            type: 'reader',
            url: 'https://marvel.com/digitalcomics/view.htm?iid=62922&utm_campaign=apiRef&utm_source=9e504170990f9f14ff554d764bbd7e7c',
          },
        ],
        series: {
          resourceURI: 'https://gateway.marvel.com/v1/public/series/37451',
          name: "Guardians of the Galaxy: Somebody's Got to Do It Infinity Comic (2023)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-04-21T04:00:00.000Z',
          },
          {
            type: 'focDate',
            date: '2023-03-20T04:00:00.000Z',
          },
          {
            type: 'unlimitedDate',
            date: '2023-04-21T04:00:00.000Z',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'https://i.annihil.us/u/prod/marvel/i/mg/6/50/64274f8c33a2c',
          extension: 'jpg',
        },
        images: [
          {
            path: 'https://i.annihil.us/u/prod/marvel/i/mg/6/50/64274f8c33a2c',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/109107/creators',
          items: [
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/8571',
              name: 'Guru-eFX',
              role: 'colorist',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/1107',
              name: 'Dan Abnett',
              role: 'writer',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/485',
              name: 'Andy Lanning',
              role: 'writer',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/559',
              name: 'Paul Pelletier',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 4,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/109107/characters',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010354',
              name: 'Adam Warlock',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1011299',
              name: 'Guardians of the Galaxy',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010744',
              name: 'Rocket Raccoon',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/characters/1010733',
              name: 'Star-Lord (Peter Quill)',
            },
          ],
          returned: 4,
        },
        stories: {
          available: 2,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/109107/stories',
          items: [
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/239336',
              name: "cover from Guardians of the Galaxy: Somebody's Got to Do It Infinity Comic (2023) #8",
              type: 'cover',
            },
            {
              resourceURI:
                'https://gateway.marvel.com/v1/public/stories/239337',
              name: "story from Guardians of the Galaxy: Somebody's Got to Do It Infinity Comic (2023) #8",
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'https://gateway.marvel.com/v1/public/comics/109107/events',
          items: [],
          returned: 0,
        },
      },
    ],
  },
};
