import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public bookList: Book[] = [
    {
      name: 'アンドロイドは電気羊の夢を見るか?',
      detail:
        '第三次大戦後の未来、サンフランシスコを舞台に賞金稼ぎのリック・デッカードが、火星から逃亡してきた8体のアンドロイドを「処理」するというあらすじ',
      evaluation: 90,
    },
    {
      name: '岩田さん: 岩田聡はこんなことを話していた。',
      detail: '任天堂の元社長、岩田聡さんのことばをまとめた本',
      evaluation: 90,
    },
  ];

  public book: Book = this.defaultBook();

  constructor() {}

  ngOnInit(): void {}

  private defaultBook(): Book {
    return {
      name: '',
      detail: '',
      evaluation: 0,
    };
  }

  public addBook(): void {
    this.bookList.push(this.book);

    // 入力フォームの初期化
    this.book = this.defaultBook();
  }
}
