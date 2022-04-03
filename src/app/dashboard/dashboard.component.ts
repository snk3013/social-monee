import { Component, OnInit } from '@angular/core';

var newId;


class CommentVO {
  id: number;
  content: string;
}

class BoardVO {
  id: number;
  content: string;
  comment: CommentVO[];
  showComment: boolean;
}


var BoardList: BoardVO[] = [
  { id: 1, content: '오늘 점심 뭐 먹을까요?',  comment: [{ id: 1, content: '샌드위치 어때요?' }], showComment: false },
  { id: 2, content: '자녀 용돈 얼마 주시나요?',  comment: [{ id: 1, content: '모니로 경제 관념부터 재밌게 알려주세요!' }, { id: 1, content: '자녀가 몇살인가요?' }], showComment: false }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  commentForm = new CommentVO();

  boardlist = BoardList;
  boardForm = new BoardVO();




  removeBoard(id: number): void {
    if (!id) return;
    var idx = this.boardlist.findIndex(function (item) {
      return item.id === id;
    });
    if (idx === -1) return;
    this.boardlist.splice(idx, 1);
  }

  addBoard(): void {
    newId = !this.boardlist.length ? 1 : this.boardlist[this.boardlist.length - 1].id + 1;

    var newItem = {
      id: newId,
      content: this.boardForm.content,
      comment: [],
      showComment: false
    };

    if (this.boardForm.content == null) {
      alert('내용을 입력해주세요!');
      return
    } else {
      this.boardlist.push(newItem);
    }

    this.clearBoard(this.boardForm);
    console.log(newId)
    return newId
  }

  clearBoard(boardForm): void {
    boardForm.content = '';
  }


  addComment(id: number): void {

    var board = BoardList[id - 1];
    var commentId = !board.comment.length ? 1 : board.comment[board.comment.length - 1].id + 1;
    console.log(id);


    var newItem = {
      id: commentId,
      content: this.commentForm.content
    };

    if (this.commentForm.content == null) {
      alert('내용을 입력해주세요!');
      return
    } else {

      board.comment.push(newItem);
    }

    this.clearComment(this.commentForm);
  }


  clearComment(commentForm): void {
    commentForm.content = '';
  }

  toggle(id: number) {
    this.boardlist[id - 1].showComment = !this.boardlist[id - 1].showComment
  }


}
