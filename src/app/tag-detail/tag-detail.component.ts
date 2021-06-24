import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from '../service/tag.service';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css']
})
export class TagDetailComponent implements OnInit {
  currentTag:any;
  message = '';

  constructor(private tagService: TagService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getTag(this.route.snapshot.paramMap.get('id'));
  }
  getTag(id: any): void {
    this.tagService.get(id)
      .subscribe(
        data => {
          this.currentTag = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateTag(): void {
    this.tagService.update(this.currentTag.id, this.currentTag)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
}
