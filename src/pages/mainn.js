import React from "react";
import axios from "axios";
const Tim = () => {
  var arr = [];
  function fr(a, e) {
    console.log(arr);
    const f = document.getElementsByClassName(e);
    if (arr.includes(document.querySelector("." + e).innerHTML) == true) {
      for (let dd = 0; dd < f.length; dd++) {
        f[dd].classList.remove("green");
      }
      for (let i = 0; i < arr.length; i++) {
        var z = "";
        if (arr[i] == document.querySelector("." + e).innerHTML) {
          arr[i] = z;
          arr[i] = arr[arr.length - 1];
          arr[arr.length - 1] = z;
          arr.pop();
        }
      }
    } else {
      for (let i = 0; i < f.length; i++) {
        f[i].classList.add("green");
      }
      arr.push(document.querySelector("." + e).innerHTML);
    }
  }
  function fp(a, e) {
    const ff = document.getElementsByClassName(e);
    if (arr.includes(document.querySelector("." + e).innerHTML) == true) {
      for (let i = 0; i < ff.length; i++) {
        ff[i].classList.remove("green");
      }
      for (let i = 0; i < arr.length; i++) {
        var z = "";
        if (arr[i] == document.querySelector("." + e).innerHTML) {
          arr[i] = z;
          arr[i] = arr[arr.length - 1];
          arr[arr.length - 1] = z;
          arr.pop();
        }
      }
    } else {
      for (let i = 0; i < ff.length; i++) {
        ff[i].classList.add("green");
      }
      arr.push(document.querySelector("." + e).innerHTML);
    }
  }
  const hao = (e) => {
    e.preventDefault();
    const confij = {
      method: "post",
      url: "http://localhost:3000/app",
      data: {
        dat: arr,
      },
    };
    axios(confij)
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div class="form-group" id="getStudentDetails">
      <table>
        <tr>
          <td className="cmn th" rowSpan={2}>
            THEORY
          </td>

          <td className="cmn th">Start</td>

          <td className="co cmnn">08:00</td>

          <td className="co cmnn">08:55</td>

          <td className="co cmnn">09:50</td>

          <td className="co cmnn">10:45</td>

          <td className="co cmnn">11:40</td>

          <td className="co cmnn">12:35</td>

          <td className="cmn th co">Lunch</td>

          <td className="co cmnn">02:00</td>

          <td className="co cmnn">02:55</td>

          <td className="co cmnn">03:50</td>

          <td className="co cmnn">04:45</td>

          <td className="co cmnn">05:40</td>

          <td className="co cmnn">06:35</td>
        </tr>

        <tr>
          <td className="cmn th"> End</td>

          <td className="co cmnn">08:50</td>
          <td className="co cmnn">09:45</td>
          <td className="co cmnn">10:40</td>
          <td className="co cmnn">11:35</td>
          <td className="co cmnn">12:30</td>
          <td className="co cmnn">01:25</td>

          <td className="co cmnn">Lunch</td>

          <td className="co cmnn">02:50</td>
          <td className="co cmnn">03:45</td>
          <td className="co cmnn">04:40</td>
          <td className="co cmnn">05:35</td>
          <td className="co cmnn">06:30</td>
          <td className="co cmnn">07:25</td>
        </tr>

        <tr>
          <td rowSpan={2} className="cmn th">
            LAB
          </td>

          <td className="cmn th">Start</td>

          <td className="coo cmnp">08:00</td>

          <td className="coo cmnp">08:50</td>

          <td className="coo cmnp">09:50</td>

          <td className="coo cmnp">10:40</td>

          <td className="coo cmnp">11:40</td>

          <td className="coo cmnp">12:30</td>

          <td className="coo cmnp">Lunch</td>

          <td className="coo cmnp">02:00</td>

          <td className="coo cmnp">02:50</td>

          <td className="coo cmnp">03:50</td>

          <td className="coo cmnp">04:40</td>

          <td className="coo cmnp">05:40</td>

          <td className="coo cmnp">06:30</td>
        </tr>

        <tr>
          <td className="cmn th">End</td>

          <td className="coo cmnnp">08:50</td>
          <td className="coo cmnnp">09:40</td>
          <td className="coo cmnnp">10:40</td>
          <td className="coo cmnnp">11:30</td>
          <td className="coo cmnnp">12:30</td>
          <td className="coo cmnnp">01:20</td>

          <td className="coo cmnnp">Lunch</td>

          <td className="coo cmnnp">02:50</td>
          <td className="coo cmnnp">03:40</td>
          <td className="coo cmnnp">04:40</td>
          <td className="coo cmnnp">05:30</td>
          <td className="coo cmnnp">06:30</td>
          <td className="coo cmnnp">07:20</td>
        </tr>

        <tr className="cmn tr">
          <td rowSpan={2} className="cmn th">
            MON
          </td>

          <td className="cmn th">THEORY</td>
          <td className="a1" onClick={(a) => fr(a, "a1")}>
            A1
          </td>
          <td className="f1" onClick={(a) => fr(a, "f1")}>
            F1
          </td>
          <td className="d1" onClick={(a) => fr(a, "d1")}>
            D1
          </td>
          <td className="tb1" onClick={(a) => fr(a, "tb1")}>
            TB1
          </td>
          <td className="tg1" onClick={(a) => fr(a, "tg1")}>
            TG1
          </td>
          <td className="s11" onClick={(a) => fr(a, "s11")}>
            S11
          </td>
          <td className="bg">Lunch</td>
          <td className="a2" onClick={(a) => fr(a, "a2")}>
            A2
          </td>
          <td className="f2" onClick={(a) => fr(a, "f2")}>
            F2
          </td>
          <td className="d2" onClick={(a) => fr(a, "d2")}>
            D2
          </td>
          <td className="tb2" onClick={(a) => fr(a, "tb2")}>
            TB2
          </td>
          <td className="tg2" onClick={(a) => fr(a, "tg2")}>
            TG2
          </td>
          <td className="s3" onClick={(a) => fr(a, "s3")}>
            S3
          </td>
        </tr>

        <tr className="fp cdf">
          <td className="cmn th">LAB</td>
          <td className="l1" onClick={(a) => fp(a, "l1")}>
            L1
          </td>
          <td className="l2" onClick={(a) => fp(a, "l2")}>
            L2
          </td>
          <td className="l3" onClick={(a) => fp(a, "l3")}>
            L3
          </td>
          <td className="l4" onClick={(a) => fp(a, "l4")}>
            L4
          </td>
          <td className="l5" onClick={(a) => fp(a, "l5")}>
            L5
          </td>
          <td className="l6" onClick={(a) => fp(a, "l6")}>
            L6
          </td>
          <td className="bg">Lunch</td>
          <td className="l31" onClick={(a) => fp(a, "l31")}>
            L31
          </td>
          <td className="l32" onClick={(a) => fp(a, "l32")}>
            L32
          </td>
          <td className="l33" onClick={(a) => fp(a, "l33")}>
            L33
          </td>
          <td className="l34" onClick={(a) => fp(a, "l34")}>
            L34
          </td>
          <td className="l35" onClick={(a) => fp(a, "l35")}>
            L35
          </td>
          <td className="l36" onClick={(a) => fp(a, "l36")}>
            L36
          </td>
        </tr>

        <tr className="cmn tr">
          <td rowSpan={2} className="cmn th">
            TUE
          </td>
          <td className="cmn th">THEORY</td>

          <td className="b1" onClick={(a) => fr(a, "b1")}>
            B1
          </td>

          <td className="g1" onClick={(a) => fr(a, "g1")}>
            G1
          </td>

          <td className="e1" onClick={(a) => fr(a, "e1")}>
            E1
          </td>

          <td className="tc1" onClick={(a) => fr(a, "tc1")}>
            TC1
          </td>
          <td className="taa1" onClick={(a) => fr(a, "taa1")}>
            TAA1
          </td>

          <td>-</td>

          <td className="bg">Lunch</td>

          <td className="b2" onClick={(a) => fr(a, "b2")}>
            B2
          </td>

          <td className="g2" onClick={(a) => fr(a, "g2")}>
            G2
          </td>

          <td className="e2" onClick={(a) => fr(a, "e2")}>
            E2
          </td>

          <td className="tc2" onClick={(a) => fr(a, "tc2")}>
            TC2
          </td>

          <td className="taa2" onClick={(a) => fr(a, "taa2")}>
            TAA2
          </td>

          <td className="s1" onClick={(a) => fr(a, "s1")}>
            S1
          </td>
        </tr>

        <tr className="fp cdf">
          <td className="cmn th"> LAB</td>

          <td className="l7" onClick={(a) => fp(a, "l7")}>
            L7
          </td>

          <td className="l8" onClick={(a) => fp(a, "l8")}>
            L8
          </td>

          <td className="l9" onClick={(a) => fp(a, "l9")}>
            L9
          </td>

          <td className="l10" onClick={(a) => fp(a, "l10")}>
            L10
          </td>

          <td className="l11" onClick={(a) => fp(a, "l11")}>
            L11
          </td>

          <td className="l12" onClick={(a) => fp(a, "l12")}>
            L12
          </td>

          <td className="bg">Lunch</td>

          <td className="l37" onClick={(a) => fp(a, "l37")}>
            L37
          </td>

          <td className="l38" onClick={(a) => fp(a, "l38")}>
            L38
          </td>

          <td className="l39" onClick={(a) => fp(a, "l39")}>
            L39
          </td>

          <td className="l40" onClick={(a) => fp(a, "l40")}>
            L40
          </td>

          <td className="l41" onClick={(a) => fp(a, "l41")}>
            L41
          </td>

          <td className="l42" onClick={(a) => fp(a, "l42")}>
            L42
          </td>
        </tr>

        <tr className="cmn tr">
          <td rowSpan={2} className="cmn th">
            WED
          </td>
          <td className="cmn th">THEORY</td>

          <td className="c1" onClick={(a) => fr(a, "c1")}>
            C1
          </td>

          <td className="a1" onClick={(a) => fr(a, "a1")}>
            A1
          </td>

          <td className="f1" onClick={(a) => fr(a, "f1")}>
            F1
          </td>

          <td className="td1" onClick={(a) => fr(a, "td1")}>
            TD1
          </td>

          <td className="tbb1" onClick={(a) => fr(a, "tbb1")}>
            TBB1
          </td>

          <td>-</td>

          <td className="bg">Lunch</td>

          <td className="c2" onClick={(a) => fr(a, "c2")}>
            C2
          </td>

          <td className="a2" onClick={(a) => fr(a, "a2")}>
            A2
          </td>

          <td className="f2" onClick={(a) => fr(a, "f2")}>
            F2
          </td>

          <td className="td2" onClick={(a) => fr(a, "td2")}>
            TD2
          </td>

          <td className="tbb2" onClick={(a) => fr(a, "tbb2")}>
            TBB2
          </td>

          <td className="s4" onClick={(a) => fr(a, "s4")}>
            S4
          </td>
        </tr>

        <tr className="fp cdf">
          <td className="cmn th">LAB</td>
          <td className="l13" onClick={(a) => fp(a, "l13")}>
            L13
          </td>
          <td className="l14" onClick={(a) => fp(a, "l14")}>
            L14
          </td>
          <td className="l15" onClick={(a) => fp(a, "l15")}>
            L15
          </td>
          <td className="l16" onClick={(a) => fp(a, "l16")}>
            L16
          </td>
          <td className="l17" onClick={(a) => fp(a, "l17")}>
            L17
          </td>
          <td className="l18" onClick={(a) => fp(a, "l18")}>
            L18
          </td>
          <td className="bg">Lunch</td>
          <td className="l43" onClick={(a) => fp(a, "l43")}>
            L43
          </td>
          <td className="l44" onClick={(a) => fp(a, "l44")}>
            L44
          </td>
          <td className="l45" onClick={(a) => fp(a, "l45")}>
            L45
          </td>
          <td className="l46" onClick={(a) => fp(a, "l46")}>
            L46
          </td>
          <td className="l47" onClick={(a) => fp(a, "l47")}>
            L47
          </td>
          <td className="l48" onClick={(a) => fp(a, "l48")}>
            L48
          </td>
        </tr>

        <tr className="cmn tr">
          <td rowSpan={2} className="cmn th">
            THU
          </td>
          <td className="cmn th">THEORY</td>

          <td className="d1" onClick={(a) => fr(a, "d1")}>
            D1
          </td>

          <td className="b1" onClick={(a) => fr(a, "b1")}>
            B1
          </td>

          <td className="g1" onClick={(a) => fr(a, "g1")}>
            G1
          </td>

          <td className="te1" onClick={(a) => fr(a, "te1")}>
            TE1
          </td>

          <td className="tcc1" onClick={(a) => fr(a, "tcc1")}>
            TCC1
          </td>

          <td>-</td>

          <td className="bg">Lunch</td>

          <td className="d2" onClick={(a) => fr(a, "d2")}>
            D2
          </td>

          <td className="b2" onClick={(a) => fr(a, "b2")}>
            B2
          </td>

          <td className="g2" onClick={(a) => fr(a, "g2")}>
            G2
          </td>

          <td className="te2" onClick={(a) => fr(a, "te2")}>
            TE2
          </td>

          <td className="tcc2" onClick={(a) => fr(a, "tcc2")}>
            TCC2
          </td>

          <td className="s2" onClick={(a) => fr(a, "s2")}>
            S2
          </td>
        </tr>

        <tr className="fp cdf">
          <td className="cmn th">LAB</td>

          <td className="l19" onClick={(a) => fp(a, "l19")}>
            L19
          </td>

          <td className="l20" onClick={(a) => fp(a, "l20")}>
            L20
          </td>

          <td className="l21" onClick={(a) => fp(a, "l21")}>
            L21
          </td>

          <td className="l22" onClick={(a) => fp(a, "l22")}>
            L22
          </td>

          <td className="l23" onClick={(a) => fp(a, "l23")}>
            L23
          </td>

          <td className="l24" onClick={(a) => fp(a, "l24")}>
            L24
          </td>

          <td className="bg">Lunch</td>

          <td className="l49" onClick={(a) => fp(a, "l49")}>
            L49
          </td>

          <td className="l50" onClick={(a) => fp(a, "l50")}>
            L50
          </td>

          <td className="l51" onClick={(a) => fp(a, "l51")}>
            L51
          </td>

          <td className="l52" onClick={(a) => fp(a, "l52")}>
            L52
          </td>

          <td className="l53" onClick={(a) => fp(a, "l53")}>
            L53
          </td>

          <td className="l54" onClick={(a) => fp(a, "l54")}>
            L54
          </td>
        </tr>

        <tr className="cmn tr">
          <td rowSpan={2} className="cmn th">
            FRI
          </td>
          <td className="cmn th">THEORY</td>

          <td className="e1" onClick={(a) => fr(a, "e1")}>
            E1
          </td>

          <td className="c1" onClick={(a) => fr(a, "c1")}>
            C1
          </td>

          <td className="ta1" onClick={(a) => fr(a, "ta1")}>
            TA1
          </td>

          <td className="tf1" onClick={(a) => fr(a, "tf1")}>
            TF1
          </td>

          <td className="tdd1" onClick={(a) => fr(a, "tdd1")}>
            TDD1
          </td>

          <td className="s15" onClick={(a) => fr(a, "s15")}>
            S15
          </td>

          <td className="bg">Lunch</td>

          <td className="e2" onClick={(a) => fr(a, "e2")}>
            E2
          </td>

          <td className="c2" onClick={(a) => fr(a, "c2")}>
            C2
          </td>

          <td className="ta2" onClick={(a) => fr(a, "ta2")}>
            TA2
          </td>

          <td className="tf2" onClick={(a) => fr(a, "tf2")}>
            TF2
          </td>

          <td className="tdd2" onClick={(a) => fr(a, "tdd2")}>
            TDD2
          </td>

          <td>-</td>
        </tr>

        <tr className="fp cdf">
          <td className="cmn th">LAB</td>

          <td className="l25" onClick={(a) => fp(a, "l25")}>
            L25
          </td>

          <td className="l26" onClick={(a) => fp(a, "l26")}>
            L26
          </td>

          <td className="l27" onClick={(a) => fp(a, "l27")}>
            L27
          </td>

          <td className="l28" onClick={(a) => fp(a, "l28")}>
            L28
          </td>

          <td className="l29" onClick={(a) => fp(a, "l29")}>
            L29
          </td>

          <td className="l30" onClick={(a) => fp(a, "l30")}>
            L30
          </td>

          <td className="bg">Lunch</td>

          <td className="l55" onClick={(a) => fp(a, "l55")}>
            L55
          </td>

          <td className="l56" onClick={(a) => fp(a, "l56")}>
            L56
          </td>

          <td className="l57" onClick={(a) => fp(a, "l57")}>
            L57
          </td>

          <td className="l58" onClick={(a) => fp(a, "l58")}>
            L58
          </td>

          <td className="l59" onClick={(a) => fp(a, "l59")}>
            L59
          </td>

          <td className="l60" onClick={(a) => fp(a, "l60")}>
            L60
          </td>
        </tr>

        <tr className="cmn tr">
          <td rowSpan={2} className="cmn th">
            SAT
          </td>
          <td className="cmn th">THEORY</td>

          <td className="x11" onClick={(a) => fr(a, "x11")}>
            X11
          </td>

          <td className="x12" onClick={(a) => fr(a, "x12")}>
            X12
          </td>

          <td className="y11" onClick={(a) => fr(a, "y11")}>
            Y11
          </td>

          <td className="y12" onClick={(a) => fr(a, "y12")}>
            Y12
          </td>

          <td className="s88" onClick={(a) => fr(a, "s88")}>
            S8
          </td>

          <td className="s8" onClick={(a) => fr(a, "s8")}>
            S8
          </td>

          <td className="bg">Lunch</td>

          <td className="x21" onClick={(a) => fr(a, "x21")}>
            X21
          </td>

          <td className="z21" onClick={(a) => fr(a, "z21")}>
            Z21
          </td>

          <td className="y21" onClick={(a) => fr(a, "y21")}>
            Y21
          </td>

          <td className="w21" onClick={(a) => fr(a, "w21")}>
            W21
          </td>

          <td className="w22" onClick={(a) => fr(a, "w22")}>
            W22
          </td>

          <td className="z22" onClick={(a) => fr(a, "z22")}>
            Z22
          </td>
        </tr>

        <tr className="fp cdf">
          <td className="cmn th">LAB</td>

          <td className="l71" onClick={(a) => fp(a, "l71")}>
            L71
          </td>

          <td className="l72" onClick={(a) => fp(a, "l72")}>
            L72
          </td>

          <td className="l73" onClick={(a) => fp(a, "l73")}>
            L73
          </td>

          <td className="l74" onClick={(a) => fp(a, "l74")}>
            L74
          </td>

          <td className="l75" onClick={(a) => fp(a, "l75")}>
            L75
          </td>

          <td className="l76" onClick={(a) => fp(a, "l76")}>
            L76
          </td>

          <td className="bg">Lunch</td>

          <td className="l77" onClick={(a) => fp(a, "l77")}>
            L77
          </td>

          <td className="l78" onClick={(a) => fp(a, "l78")}>
            L78
          </td>

          <td className="l79" onClick={(a) => fp(a, "l79")}>
            L79
          </td>

          <td className="l80" onClick={(a) => fp(a, "l80")}>
            L80
          </td>

          <td className="l81" onClick={(a) => fp(a, "l81")}>
            L81
          </td>

          <td className="l82" onClick={(a) => fp(a, "l82")}>
            L82
          </td>
        </tr>
      </table>
      <button id="but1" onClick={hao}>
        Save
      </button>
    </div>
  );
};
export default Tim;
