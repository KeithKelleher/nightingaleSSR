import {Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-npm-test',
  templateUrl: './npm-test.component.html',
  styleUrls: ['./npm-test.component.scss']
})
export class NpmTestComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformID: Object) { }

  @ViewChild('npmTest', {static: true}) npmTest: ElementRef;

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformID)) {
      import("ncats-protvista-viewer").then(npmTest => {
        this.npmTest.nativeElement.setAttribute('sequence',
          this.fudgeUpSomeData("MDPLNLSWYDDDLERQNWSRPFNGSDGKADRPHYNYYATLLTLLIAVIVFGNVLVCMAVSREKALQTTTNYLIVSLAVADLLVATLVMPWVVYLEVVGEWKFSRIHCDIFVTLDVMMCTASILNLCAISIDRYTAVAMPMLYNTRYSSKRRVTVMISIVWVLSFTISCPLLFGLNNADQNECIIANPAFVVYSSIVSFYVPFIVTLLVYIKIYIVLRRRRKRVNTKRSSRAFRAHLRAPLKGNCTHPEDMKLCTVIMKSNGSFPVNRRRVEAARRAQELEMEMLSSTSPPERTRYSPIPPSHHQLTLPDPSHHGLHSTPDSPAKPEKNGHAKDHPKIAKIFEIQTMPNGKTRTSLKTMSRRKLSQQKEKKATQMLAIVLGVFIICWLPFFITHILNIHCDCNIPPVLYSAFTWLGYVNSAVNPIIYTTFNIEFRKAFLKILHC"));
      });
    }
  }

  fudgeUpSomeData(sequence: string) {
    const annotatedSequence = [];
    for (let aa of sequence) {
      const residue = [];
      let bits = [];
      let total = 0, rr = 0;
      for (let i = 0; i < 5; i++) {
        rr = Math.random();
        total += rr;
        bits.push(rr);
      }
      const conservation = Math.random();
      bits = bits.map(b => b * conservation / total).sort((a, b) => b - a);
      residue.push({aa: aa, bits: bits[0]});
      for (let i = 1; i < bits.length; i++) {
        residue.push(
          {
            aa: sequence[Math.floor(sequence.length * Math.random())],
            bits: bits[i]
          });
      }
      annotatedSequence.push(residue);
    }
    return JSON.stringify(annotatedSequence);
  }

}
