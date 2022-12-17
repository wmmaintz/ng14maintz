import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-x-mas-tree',
  templateUrl: './x-mas-tree.component.html',
  styleUrls: ['./x-mas-tree.component.scss']
})
export class XMasTreeComponent implements OnInit {
  u15s: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5];
  u40s: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ];

  constructor() { }

  ngOnInit(): void {
    const strands = document.querySelectorAll("ul");
    const duration = 3000;
    // this.u40s=[1,2,3,4,5,6,7,8,9,0];

    strands.forEach((strand, i) => {
      strand.style.transform = `rotateY(${
        -i / (strands.length * 2.25) + 0.2
      }turn) rotateX(22deg)`;

      const bulbs = strand.querySelectorAll("li");
      bulbs.forEach((bulb, j) => {
        //bulb.style.scale = 1 + j*.02
        bulb.animate(
          [
            { background: "var(--back)" },
            { background: "var(--back)", offset: 0.9 },
            { background: "var(--fore)", offset: 0.95 },
            { background: "var(--fore)" }
          ],
          {
            duration,
            delay:
              (j * 2.25 * (((i + 1) * 2.5) / strands.length) * duration) /
                bulbs.length -
              3000,
            iterations: Infinity,
            easing: "cubic-bezier(0,.5,.5,1)"
          }
        );
      });
    });

  }

}
