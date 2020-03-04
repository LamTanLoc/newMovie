import { Component} from '@angular/core';

import { DataService } from 'src/_core/services/data.service';
import { ShareDataService } from 'src/_core/shared/share-data.service';

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent  {
  danhSachPhimDangChieu = [];

  constructor(private dataService: DataService, private shareDataService : ShareDataService) { }

  ngOnInit() {
      this.getDanhSachPhimDangChieu();
  }

  
  getDanhSachPhimDangChieu() {

    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP06`;
    this.dataService.get(uri).subscribe((data) => {
      this.danhSachPhimDangChieu = data;
      this.shareDataService.sharingDataDanhSachPhimTimKiem(data);

    })


  }
}
