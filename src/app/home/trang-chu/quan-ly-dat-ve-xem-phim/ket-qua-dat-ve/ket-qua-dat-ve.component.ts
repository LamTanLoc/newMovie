import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';

@Component({
  selector: 'app-ket-qua-dat-ve',
  templateUrl: './ket-qua-dat-ve.component.html',
  styleUrls: ['./ket-qua-dat-ve.component.scss']
})
export class KetQuaDatVeComponent implements OnInit {

  MaLichChieu: any;
  TenPhim: any;
  DanhSachGheDaDat = [];
  chiTietLichChieu: any;
  TaiKhoan: any;
  Email: any;
  TongTien: any;
  date: any;
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {

    this.shareDataService.shareThanhToan.subscribe((data) => {
      this.MaLichChieu = data.MaLichChieu;
      this.TenPhim = data.TenPhim;
      this.DanhSachGheDaDat = data.DanhSachGheDaDat;
      this.chiTietLichChieu = data.chiTietLichChieu;
      this.TongTien = data.TongTien;
      this.date = data.date;

    });

    this.shareDataService.shareUser.subscribe((data) => {

      this.TaiKhoan = data.TaiKhoan;
      this.Email = data.Email;

    })

  }


}
