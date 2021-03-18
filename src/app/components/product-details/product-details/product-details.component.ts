import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataService } from 'src/app/service/data.service';
// import Swal from 'sweetalert2'

declare var Swal;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  product_quantity = 0;
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.getProductID()
  }

  getProductID() {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.dataService.getProductByID(id).subscribe({
        next: ({ data }) => {
          this.product = data[0]
        },
        error: (error) => console.error(error)
      })
    })
  }

  buyProduct() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Customer Details:',
        text: 'Full Name:'
      },
      {
        title: '',
        text: 'Address:'
      },
      {
        title: '',
        text: 'Phone Number:'
      }
    ]).then((result) => {
      if (result.value) {
        const [name, address, phone] = result.value

        const formData = new FormData
        formData.append('name', name)
        formData.append('address', address)
        formData.append('phone', phone)
        formData.append('product_id', this.product.id)
        formData.append('quantity', this.product_quantity.toString())

        this.dataService.buyProduct(formData).subscribe({
          next: () => {
            Swal.fire({
              title: 'Waiting for payment..',
              timer: 1500,
              timerProgressBar: false,
              didOpen: () => {
                Swal.showLoading()
              }
            }).then(() => {
              Swal.fire({
                title: 'All set!',
                // html: `
                //   Your information:
                //   <pre><code>${answers}</code></pre>
                // `,
                confirmButtonText: 'OK!'
              })
            })
          }
        })

      }
    })
  }
}