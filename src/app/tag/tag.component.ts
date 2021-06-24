import { Component, OnInit } from '@angular/core';
import { TagService } from '../service/tag.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  tags:any;

  constructor(private tagService : TagService ,private router: Router) { }

  ngOnInit(): void {
    this.showTagList();

  }
  showTagList(): void {
    this.tagService.getAll()
      .subscribe(
        data => {
          this.tags = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  deleteTag(id:number): void {
    this.tagService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['home']);
        },
        error => {
          console.log(error);
        });
  }
}
