import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  anHienDN: boolean = false;
  anHienDK: boolean = false;
  nguoiDung: boolean = false;
  listPhimTimKiem = [];
  phimTimKiem = [];
  hidden_table = false;

  user: any = {
    TaiKhoan: "Đăng nhập"
  }
  icon: boolean = false;

  constructor(private shareDataService: ShareDataService, private router: Router) { }

  ngOnInit() {
    this.User();
    this.KiemTraUser();
    this.DanhSachTimKiem();
  }

  HienThiDangNhap() {
    if (this.user.TaiKhoan === "Đăng nhập") {
      this.anHienDN = !this.anHienDN;
      this.anHienDK = false;
      this.nguoiDung = false;
      this.icon = false;
    } else {
      this.nguoiDung = !this.nguoiDung;
    }
  }

  DangXuat() {
    this.user.TaiKhoan = "Đăng nhập";
    localStorage.clear();
    this.nguoiDung = false;
    swal.fire({
      type: 'success',
      text: 'Đăng xuất thành công!',
      showConfirmButton: false,
      timer: 900
    })

    window.scrollTo(0, 0);

  }

  HienThiDangKy(boolean: false) {
    this.anHienDK = !this.anHienDK;
    this.anHienDN = false;
  }

  User() {

    this.shareDataService.shareUser.subscribe((data) => {
      if (Object.keys(data).length !== 0) {
        this.user = data;
        this.icon = true;
      }
    })
  }

  Scroll(value) {
    this.shareDataService.sharingKeyScroll(value);
  }

  KiemTraUser() {
    if (localStorage.length !== 0) {
      let ktra = JSON.parse(localStorage.getItem("user"));
      if (Object.keys(ktra).length !== 0) {
        this.shareDataService.sharingDataUser(ktra);
      }
    }

  }

  TrangCaNhan() {
    this.nguoiDung = false;

  }

  DanhSachTimKiem() {
    this.shareDataService.shareDanhSachPhimTimKiem.subscribe((data: any) => {
      this.listPhimTimKiem = this.listPhimTimKiem.concat(data);
    })
  }

  AnHienTable() {
    this.hidden_table = !this.hidden_table;
  }
  onKey(event) {
    if (event.target.value != "") {
      this.listPhimTimKiem = this.listPhimTimKiem.filter(res => {
        return res.TenPhim.toLocaleUpperCase().match(event.target.value.toLocaleUpperCase());
      });
    } else if (event.target.value == "") {
      this.ngOnInit();
    }

  }
  xemChiTiet(maPhim, tenPhim) {
    this.hidden_table = false;
    this.router.navigate(["/chi-tiet-phim/", maPhim], {
      queryParams: { tenPhim: tenPhim }
    });

  }
}
