import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types/types';

import { MessageService } from '../../services/message.service';

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

  constructor(private messageSvc: MessageService) {}

  ngOnInit(): void {}

  private defaultBook(): Book {
    return {
      name: '',
      detail: '',
      evaluation: 0,
    };
  }

  public addBook(): void {
    const operation = '追加'
    this.bookList.push(this.book);
    // 追加した書籍ログに表示
    this.messageSvc.addLogData(this.book.name, operation);
    // 入力フォームの初期化
    this.book = this.defaultBook();
  }
}
