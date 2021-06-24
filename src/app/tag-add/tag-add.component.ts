import { Component, OnInit } from '@angular/core';
import { TagService } from '../service/tag.service';

@Component({
  selector: 'app-tag-add',
  templateUrl: './tag-add.component.html',
  styleUrls: ['./tag-add.component.css'],
})
export class TagAddComponent implements OnInit {
  tags = {
    id: '',
    tag: '',
    url: '',
    descriptions: '',
  };
  constructor(private tagService: TagService) {}

  ngOnInit(): void {}
  saveTag(): void {
    const data = {
      tag: this.tags.tag,
      url: this.tags.url,
      descriptions: this.tags.descriptions,
    };
    this.tagService.create(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
