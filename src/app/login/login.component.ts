import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() visible1: boolean;
  @Output() sendMyEvent: EventEmitter<any> = new EventEmitter();
  id: string;
  pwd: string;

  private message;

  styleArray = { 'wrong_id': false, 'wrong_pwd': false };

  constructor() {

  }

  ngOnInit(): void {

  }

  tryToLogin(): void {
    if (
      this.id == 'admin' && this.pwd == '1234') {
      alert('로그인 성공! 생각을 공유해 볼까요?~');
      this.visible1 = true;
      this.sendMyEvent.emit(this.visible1);
    } else if (this.id != 'admin') {
      this.setMessage = '잘못된 아이디에요 다시 시도해 주세요!';
      this.styleArray.wrong_id = true;
      this.styleArray.wrong_pwd = false;
    } else if (this.pwd != '1234') {
      this.setMessage = '잘못된 비밀번호에요 다시 시도해 주세요!';
      this.styleArray.wrong_id = false;
      this.styleArray.wrong_pwd = true;
    }
  }

  set setMessage(arg) {
    this.message = arg;
  }

  get getMessage(): any {
    return this.message;
  }

}
