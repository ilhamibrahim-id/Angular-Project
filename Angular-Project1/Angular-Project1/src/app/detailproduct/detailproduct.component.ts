import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {

  public productId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string);
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') as string);
      this.productId = id;
    })
  }

  goPrevious() {
    let previousId = this.productId - 1;
    // this.router.navigate(['/departments', previousId]);
    this.router.navigate(['../', previousId], {relativeTo: this.activatedRoute});
  }

  goNext() {
    let nextId = this.productId + 1;
    // this.router.navigate(['/departments', nextId]);
    this.router.navigate(['../', nextId], {relativeTo: this.activatedRoute});
  }

  gotoDepartments() {
    let selectedId = this.productId ? this.productId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.activatedRoute});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.activatedRoute});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.activatedRoute});
  }
}
