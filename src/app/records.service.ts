import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  obj: Object
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {

  }
  getDef(){
    return [
      {
        name : 'Rudy Gobert',
        image : 'https://fsb.zobj.net/crop.php?r=SRe9nnQbAr5HT19SNo5WH3CVMMV4H1udk8xAM11nk00BN3rUT0LqAkzUVULzJ4wkc7UWdrgs3ZMQA8MMkHFIEqZmDIH0Xk2Z2DDCRLnelEQ34LV9kXhPC0R7Pkf0Tnv8UUVgmMI__cyOgFhB',
        dpoy : 2,
        defRating : 97
      },
      {
        name : 'Kawhi Leonard',
        image : 'https://www.teahub.io/photos/full/74-742182_kawhi-leonard-clippers-media-day.jpg',
        dpoy : 2,
        defRating : 99
      },
      {
        name : 'Giannis Antetokounmpo',
        image : 'https://i.pinimg.com/originals/1a/c1/4a/1ac14a2fe7c621c94782bbb381fb622f.png',
        dpoy : 1,
        defRating : 99
      },
      {
        name : 'Draymond Green',
        image : 'https://i.pinimg.com/originals/62/49/32/6249323e29fd0d1cc5a1ebfdd01256f4.jpg',
        dpoy : 1,
        defRating : 99
      },
      {
        name : 'Anthony Davis',
        image : 'https://static.onecms.io/wp-content/uploads/sites/20/2019/04/anthony-davis-4-2000.jpg',
        dpoy : 2,
        defRating : 99
      }
    ]
  }
  getOff() {
    return [
      {
        name : 'Stephen Curry',
        ppg : '32.0',
        image : 'https://i.pinimg.com/originals/c2/6e/bf/c26ebf259f3698d733960fc9acfbf455.jpg'
      },
      {
        name : 'Bradley Beal',
        ppg : '31.3',
        image : 'https://i.pinimg.com/originals/13/10/30/13103092405aee6038644714c5cb45b2.png'
      },
      {
        name : 'Damian Lillard',
        ppg : '28.8',
        image : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1eb71c94-3a8b-4279-9c3b-eea506a6ad99/de3rmkf-de9d5aba-29ec-43cb-83fe-df015b7a9f80.png/v1/fill/w_1024,h_1444,q_80,strp/damian_lillard_wallpaper_by_mulasdesigns_de3rmkf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0NCIsInBhdGgiOiJcL2ZcLzFlYjcxYzk0LTNhOGItNDI3OS05YzNiLWVlYTUwNmE2YWQ5OVwvZGUzcm1rZi1kZTlkNWFiYS0yOWVjLTQzY2ItODNmZS1kZjAxNWI3YTlmODAucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Vn3z0ERUrECYB9EPYoq0ycfBN4ENdkNhhcDkx_OIpEc'
      },
      {
        name : 'Joel Embiid',
        ppg : '28.5',
        image : 'https://i.pinimg.com/originals/19/66/24/1966246fdb9cb911a43151407be9e455.jpg'
      },
      {
        name : 'Giannis Antetokounmpo',
        ppg : '28.1',
        image : 'https://i.pinimg.com/originals/1a/c1/4a/1ac14a2fe7c621c94782bbb381fb622f.png'
      }      
    ]
  }
  getdata() {
    return [      
      {
        rank : 1,
        name : 'Lebron James',
        image : 'https://www.nawpic.com/media/2020/lebron-james-nawpic-4.jpg',
        championship : 4,
        fmvp : 4,
        mvp : 4,
        ppg : 27.4,
        apg : 7.4,
        rpg : 7.8,
      },
      {
        rank : 2,
        name : 'Kevin Durant',
        image : 'https://www.kolpaper.com/wp-content/uploads/2020/03/iphone-kevin-durant-wallpaper.jpg',
        championship : 2,
        fmvp : 2,
        mvp : 1,
        ppg : 27.0,
        apg : 7.1,
        rpg : 4.2,
      },
      {
        rank : 3,
        name : 'Stephen Curry',
        image : 'https://i.pinimg.com/originals/c2/6e/bf/c26ebf259f3698d733960fc9acfbf455.jpg',
        championship : 3,
        fmvp : 0,
        mvp : 2,
        ppg : 24.2,
        apg : 4.6,
        rpg : 6.5,
      },
      {
        rank : 4,
        name : 'Kawhi Leonard',
        image : 'https://www.teahub.io/photos/full/74-742182_kawhi-leonard-clippers-media-day.jpg',
        championship : 2,
        fmvp : 2,
        mvp : 0,
        ppg : 19.4,
        apg : 6.4,
        rpg : 2.9,
      },
      {
        rank : 5,
        name : 'Anthony Davis',
        image : 'https://static.onecms.io/wp-content/uploads/sites/20/2019/04/anthony-davis-4-2000.jpg',
        championship : 1,
        fmvp : 0,
        mvp : 0,
        ppg : 24.0,
        apg : 10.4,
        rpg : 3.2, 
      }
    ]
  }
}
