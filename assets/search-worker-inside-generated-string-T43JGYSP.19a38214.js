var e=`"use strict";var Rm=Object.defineProperty;var y=(e,t)=>()=>(e&&(t=e(e=0)),t);var ht=(e,t)=>{for(var r in t)Rm(e,r,{get:t[r],enumerable:!0})};var Ns=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var d=(e,t,r)=>(Ns(e,t,"read from private field"),r?r.call(e):t.get(e)),ee=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},V=(e,t,r,n)=>(Ns(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Ms=(e,t,r,n)=>({set _(o){V(e,t,o,r)},get _(){return d(e,t,n)}}),Il=(e,t,r)=>(Ns(e,t,"access private method"),r);var Cm,Po,Me,Jt=y(()=>{"use strict";Cm=!1,Po=class{is(t){return this instanceof t}as(t){return this instanceof t?this:null}},Me=class extends Po{constructor(){super(),Cm&&Object.defineProperty(this,"_debugStr",{get:()=>this.toString()})}get log(){return console.log.bind(console,this,this.toString())}}});function z2(e,t=!0){if(!t)return e;switch(e){case 1:return-1;case-1:return 1}}function P2(e,t){return t===-1?Array.from(e).reverse():e}function N2(e){return Array.from(e).reverse()}var Gt=y(()=>{"use strict"});var No,Is=y(()=>{"use strict";No="2^31 - 1"});var Hr,mt,Ws=y(()=>{"use strict";Yt();mt=class{constructor(){ee(this,Hr,[])}push(t){d(this,Hr).push(t)}experimentalPushAlg(t){for(let r of t.childAlgNodes())this.push(r)}experimentalNumAlgNodes(){return d(this,Hr).length}toAlg(){return new E(d(this,Hr))}reset(){V(this,Hr,[])}};Hr=new WeakMap});var M2,Ks=y(()=>{"use strict";M2={caratNISSNotationEnabled:!1}});var Zr,Jr,Kl,Te,Mo=y(()=>{"use strict";Yt();Jt();Gt();Kl=class extends Me{constructor(r,n){super();ee(this,Zr,void 0);ee(this,Jr,void 0);V(this,Zr,mr(r)),V(this,Jr,mr(n))}get A(){return d(this,Zr)}get B(){return d(this,Jr)}isIdentical(r){let n=r.as(Kl);return!!(n?.A.isIdentical(this.A)&&n?.B.isIdentical(this.B))}invert(){return new Kl(d(this,Jr),d(this,Zr))}*experimentalExpand(r=1,n){n??(n=1/0),n===0?yield r===1?this:this.invert():r===1?(yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(1,n-1),yield*this.A.experimentalExpand(-1,n-1),yield*this.B.experimentalExpand(-1,n-1)):(yield*this.B.experimentalExpand(1,n-1),yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(-1,n-1),yield*this.A.experimentalExpand(-1,n-1))}toString(){return\`[\${d(this,Zr).toString()}, \${d(this,Jr).toString()}]\`}},Te=Kl;Zr=new WeakMap,Jr=new WeakMap});var zn,Pn,Ql,Ge,To=y(()=>{"use strict";Yt();Jt();Gt();Ql=class extends Me{constructor(r,n){super();ee(this,zn,void 0);ee(this,Pn,void 0);V(this,zn,mr(r)),V(this,Pn,mr(n))}get A(){return d(this,zn)}get B(){return d(this,Pn)}isIdentical(r){let n=r.as(Ql);return!!(n?.A.isIdentical(this.A)&&n?.B.isIdentical(this.B))}invert(){return new Ql(d(this,zn),d(this,Pn).invert())}*experimentalExpand(r,n){n??(n=1/0),n===0?yield r===1?this:this.invert():(yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(r,n-1),yield*this.A.experimentalExpand(-1,n-1))}toString(){return\`[\${this.A}: \${this.B}]\`}},Ge=Ql;zn=new WeakMap,Pn=new WeakMap});var Lr,Qs,Ft,Go=y(()=>{"use strict";Jt();Gt();Qs=class extends Me{constructor(r){super();ee(this,Lr,void 0);if(r.includes(\`
\`)||r.includes("\\r"))throw new Error("LineComment cannot contain newline");V(this,Lr,r)}get text(){return d(this,Lr)}isIdentical(r){let n=r;return r.is(Qs)&&d(this,Lr)===d(n,Lr)}invert(){return this}*experimentalExpand(r=1,n=1/0){yield this}toString(){return\`//\${d(this,Lr)}\`}},Ft=Qs;Lr=new WeakMap});var Xe,Oo=y(()=>{"use strict";Jt();Gt();Xe=class extends Me{toString(){return\`
\`}isIdentical(t){return t.is(Xe)}invert(){return this}*experimentalExpand(t=1,r=1/0){yield this}}});var _e,Io=y(()=>{"use strict";Jt();Gt();_e=class extends Me{toString(){return"."}isIdentical(r){return r.is(_e)}invert(){return this}*experimentalExpand(r=1,n=1/0){yield this}}});function jl(e,t){return e?parseInt(e):t}function js(e){return new Wo().parseAlg(e)}function G2(e){return new Wo().parseMove(e)}function O2(e){return new Wo().parseQuantumMove(e)}function tt(e,t,r){let n=e;return n.startCharIndex=t,n.endCharIndex=r,n}function I2(e,t){return"startCharIndex"in e&&(t.startCharIndex=e.startCharIndex),"endCharIndex"in e&&(t.endCharIndex=e.endCharIndex),t}var T2,zm,Pm,Nm,Mm,Tm,it,I,Nn,Wo,qs=y(()=>{"use strict";Yt();Ws();Ks();Mo();To();ql();Go();Xt();Oo();Io();T2=/^(\\d+)?('?)/,zm=/^[_\\dA-Za-z]/,Pm=/^((([1-9]\\d*)-)?([1-9]\\d*))?([_A-Za-z]+)?/,Nm=/^[^\\n]*/,Mm=/^(-?\\d+), ?/,Tm=/^(-?\\d+)\\)/;Wo=class{constructor(){ee(this,it,"");ee(this,I,0);ee(this,Nn,[])}parseAlg(t){V(this,it,t),V(this,I,0);let r=this.parseAlgWithStopping([]);this.mustBeAtEndOfInput();let n=Array.from(r.childAlgNodes());if(d(this,Nn).length>0)for(let o of d(this,Nn).reverse())n.push(o);return new E(n)}parseMove(t){V(this,it,t),V(this,I,0);let r=this.parseMoveImpl();return this.mustBeAtEndOfInput(),r}parseQuantumMove(t){V(this,it,t),V(this,I,0);let r=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),r}mustBeAtEndOfInput(){if(d(this,I)!==d(this,it).length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(t){let r=d(this,I),n=d(this,I),o=new mt,l=!1,i=s=>{if(l)throw new Error(\`Unexpected character at index \${s}. Are you missing a space?\`)};e:for(;d(this,I)<d(this,it).length;){let s=d(this,I);if(t.includes(d(this,it)[d(this,I)]))return tt(o.toAlg(),r,n);if(this.tryConsumeNext(" ")){l=!1,o.experimentalNumAlgNodes()===0&&(r=d(this,I));continue e}else if(zm.test(d(this,it)[d(this,I)])){i(s);let a=this.parseMoveImpl();o.push(a),l=!0,n=d(this,I);continue e}else if(this.tryConsumeNext("(")){i(s);let a=this.tryRegex(Mm);if(a){let f=a[1],u=d(this,I),g=this.parseRegex(Tm),p=tt(new B(new C("U_SQ_"),parseInt(f)),s+1,s+1+f.length),c=tt(new B(new C("D_SQ_"),parseInt(g[1])),u,d(this,I)-1),L=tt(new E([p,c]),s+1,d(this,I)-1);o.push(tt(new Oe(L),s,d(this,I))),l=!0,n=d(this,I);continue e}else{let f=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");let u=this.parseAmount();o.push(tt(new Oe(f,u),s,d(this,I))),l=!0,n=d(this,I);continue e}}else if(this.tryConsumeNext("^")){if(!M2.caratNISSNotationEnabled)throw new Error("Alg contained a carat but carat NISS notation is not enabled.");this.mustConsumeNext("(");let a=this.parseAlgWithStopping([")"]);this.popNext();let f=new Oe(a,-1),u=new _e;f.experimentalNISSPlaceholder=u,u.experimentalNISSGrouping=f,d(this,Nn).push(f),o.push(u)}else if(this.tryConsumeNext("[")){i(s);let a=this.parseAlgWithStopping([",",":"]),f=this.popNext(),u=this.parseAlgWithStopping(["]"]);switch(this.mustConsumeNext("]"),f){case":":o.push(tt(new Ge(a,u),s,d(this,I))),l=!0,n=d(this,I);continue e;case",":o.push(tt(new Te(a,u),s,d(this,I))),l=!0,n=d(this,I);continue e;default:throw new Error("unexpected parsing error")}}else if(this.tryConsumeNext(\`
\`)){o.push(tt(new Xe,s,d(this,I))),l=!1,n=d(this,I);continue e}else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){i(s);let[a]=this.parseRegex(Nm);o.push(tt(new Ft(a),s,d(this,I))),l=!1,n=d(this,I);continue e}else{o.push(tt(new B("_SLASH_"),s,d(this,I))),l=!0,n=d(this,I);continue e}else if(this.tryConsumeNext(".")){i(s),o.push(tt(new _e,s,d(this,I))),l=!0,n=d(this,I);continue e}else throw new Error(\`Unexpected character: \${this.popNext()}\`)}if(d(this,I)!==d(this,it).length)throw new Error("did not finish parsing?");if(t.length>0)throw new Error("expected stopping");return tt(o.toAlg(),r,n)}parseQuantumMoveImpl(){let[,,,t,r,n]=this.parseRegex(Pm);return new C(n,jl(r,void 0),jl(t,void 0))}parseMoveImpl(){let t=d(this,I);if(this.tryConsumeNext("/"))return tt(new B("_SLASH_"),t,d(this,I));let r=this.parseQuantumMoveImpl(),[n,o]=this.parseAmountAndTrackEmptyAbsAmount(),l=this.parseMoveSuffix();if(l){if(n<0)throw new Error("uh-oh");if((l==="++"||l==="--")&&n!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((l==="++"||l==="--")&&!o)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((l==="+"||l==="-")&&o)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");l.startsWith("+")&&(r=r.modified({family:\`\${r.family}_\${l==="+"?"PLUS":"PLUSPLUS"}_\`})),l.startsWith("-")&&(r=r.modified({family:\`\${r.family}_\${l==="-"?"PLUS":"PLUSPLUS"}_\`}),n*=-1)}return tt(new B(r,n),t,d(this,I))}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){let t=d(this,I),[,r,n]=this.parseRegex(T2);if(r?.startsWith("0")&&r!=="0")throw new Error(\`Error at char index \${t}: An amount can only start with 0 if it's exactly the digit 0.\`);return[jl(r,1)*(n==="'"?-1:1),!r]}parseAmount(){let t=d(this,I),[,r,n]=this.parseRegex(T2);if(r?.startsWith("0")&&r!=="0")throw new Error(\`Error at char index \${t}: An amount number can only start with 0 if it's exactly the digit 0.\`);return jl(r,1)*(n==="'"?-1:1)}parseRegex(t){let r=t.exec(this.remaining());if(r===null)throw new Error("internal parsing error");return V(this,I,d(this,I)+r[0].length),r}tryRegex(t){let r=t.exec(this.remaining());return r===null?null:(V(this,I,d(this,I)+r[0].length),r)}remaining(){return d(this,it).slice(d(this,I))}popNext(){let t=d(this,it)[d(this,I)];return Ms(this,I)._++,t}tryConsumeNext(t){return d(this,it)[d(this,I)]===t?(Ms(this,I)._++,!0):!1}mustConsumeNext(t){let r=this.popNext();if(r!==t)throw new Error(\`expected \\\`\${t}\\\` while parsing, encountered \${r}\`);return r}};it=new WeakMap,I=new WeakMap,Nn=new WeakMap});function Vl(e){W2.has(e)||(console.warn(e),W2.add(e))}var W2,Vs=y(()=>{"use strict";W2=new Set});var Xr,Hs=y(()=>{"use strict";Gt();Is();Xr=class{constructor(t,r=1){if(this.quantum=t,this.amount=r,!Number.isInteger(this.amount)||this.amount<-2147483648||this.amount>2147483647)throw new Error(\`AlgNode amount absolute value must be a non-negative integer below \${No}.\`)}suffix(){let t="",r=Math.abs(this.amount);return r!==1&&(t+=r),this.amount<0&&(t+="'"),t}isIdentical(t){return this.quantum.isIdentical(t.quantum)&&this.amount===t.amount}*experimentalExpand(t,r){let n=Math.abs(this.amount),o=z2(t,this.amount<0);for(let l=0;l<n;l++)yield*this.quantum.experimentalExpand(o,r)}}});var $t,qe,Ve,Zl,C,Ie,Mn,B,Xt=y(()=>{"use strict";Jt();Gt();Is();qs();Vs();Hs();Zl=class extends Po{constructor(r,n,o){super();ee(this,$t,void 0);ee(this,qe,void 0);ee(this,Ve,void 0);if(V(this,$t,r),V(this,qe,n??null),V(this,Ve,o??null),Object.freeze(this),d(this,qe)!==null&&(!Number.isInteger(d(this,qe))||d(this,qe)<1||d(this,qe)>2147483647))throw new Error(\`QuantumMove inner layer must be a positive integer below \${No}.\`);if(d(this,Ve)!==null&&(!Number.isInteger(d(this,Ve))||d(this,Ve)<1||d(this,Ve)>2147483647))throw new Error(\`QuantumMove outer layer must be a positive integer below \${No}.\`);if(d(this,Ve)!==null&&d(this,qe)!==null&&d(this,qe)<=d(this,Ve))throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(d(this,Ve)!==null&&d(this,qe)===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(r){return O2(r)}modified(r){return new Zl(r.family??d(this,$t),r.innerLayer??d(this,qe),r.outerLayer??d(this,Ve))}isIdentical(r){let n=r;return r.is(Zl)&&d(this,$t)===d(n,$t)&&d(this,qe)===d(n,qe)&&d(this,Ve)===d(n,Ve)}get family(){return d(this,$t)}get outerLayer(){return d(this,Ve)}get innerLayer(){return d(this,qe)}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a \`QuantumMove\` directly.")}toString(){let r=d(this,$t);return d(this,qe)!==null&&(r=String(d(this,qe))+r,d(this,Ve)!==null&&(r=String(d(this,Ve))+"-"+r)),r}},C=Zl;$t=new WeakMap,qe=new WeakMap,Ve=new WeakMap;Mn=class extends Me{constructor(...r){super();ee(this,Ie,void 0);if(typeof r[0]=="string")if(r[1]??null){V(this,Ie,new Xr(C.fromString(r[0]),r[1]));return}else return Mn.fromString(r[0]);V(this,Ie,new Xr(r[0],r[1]))}isIdentical(r){let n=r.as(Mn);return!!n&&d(this,Ie).isIdentical(d(n,Ie))}invert(){return I2(this,new Mn(d(this,Ie).quantum,-this.amount))}*experimentalExpand(r=1){r===1?yield this:yield this.modified({amount:-this.amount})}get quantum(){return d(this,Ie).quantum}modified(r){return new Mn(d(this,Ie).quantum.modified(r),r.amount??this.amount)}static fromString(r){return G2(r)}get amount(){return d(this,Ie).amount}get type(){return Vl("deprecated: type"),"blockMove"}get family(){return d(this,Ie).quantum.family??void 0}get outerLayer(){return d(this,Ie).quantum.outerLayer??void 0}get innerLayer(){return d(this,Ie).quantum.innerLayer??void 0}toString(){if(this.family==="_SLASH_")return"/";if(this.family.endsWith("_PLUS_"))return d(this,Ie).quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){let r=Math.abs(this.amount);return d(this,Ie).quantum.toString().slice(0,-10)+(r===1?"":r)+(this.amount<0?"--":"++")}return d(this,Ie).quantum.toString()+d(this,Ie).suffix()}},B=Mn;Ie=new WeakMap});var Zs,K2,st,Jl,Oe,ql=y(()=>{"use strict";Yt();Jt();Gt();Xt();Hs();Zs=class{constructor(){this.quantumU_SQ_=null;this.quantumD_SQ_=null}format(t){let r=this.tuple(t);return r?\`(\${r.map(n=>n.amount).join(", ")})\`:null}tuple(t){this.quantumU_SQ_||(this.quantumU_SQ_=new C("U_SQ_")),this.quantumD_SQ_||(this.quantumD_SQ_=new C("D_SQ_"));let r=t.alg;if(r.experimentalNumChildAlgNodes()===2){let[n,o]=r.childAlgNodes();if(n.as(B)?.quantum.isIdentical(this.quantumU_SQ_)&&o.as(B)?.quantum.isIdentical(this.quantumD_SQ_)){if(t.amount!==1)throw new Error("Square-1 tuples cannot have an amount other than 1.");return[n,o]}}return null}},K2=new Zs,Jl=class extends Me{constructor(r,n){super();ee(this,st,void 0);let o=mr(r);V(this,st,new Xr(o,n))}isIdentical(r){let n=r;return r.is(Jl)&&d(this,st).isIdentical(d(n,st))}get alg(){return d(this,st).quantum}get amount(){return d(this,st).amount}get experimentalRepetitionSuffix(){return d(this,st).suffix()}invert(){return new Jl(d(this,st).quantum,-d(this,st).amount)}*experimentalExpand(r=1,n){n??(n=1/0),n===0?yield r===1?this:this.invert():yield*d(this,st).experimentalExpand(r,n-1)}static fromString(){throw new Error("unimplemented")}toString(){return K2.format(this)??\`(\${d(this,st).quantum.toString()})\${d(this,st).suffix()}\`}experimentalAsSquare1Tuple(){return K2.tuple(this)}},Oe=Jl;st=new WeakMap});var Ko=y(()=>{"use strict";ql();Go();Mo();To();Xt();Oo();Io()});function wt(e,t){return e instanceof t}function Q2(e){return wt(e,Oe)||wt(e,Ft)||wt(e,Te)||wt(e,Ge)||wt(e,B)||wt(e,Xe)||wt(e,_e)}var Js=y(()=>{"use strict";Ko()});function q2(e,t,r){if(t.is(Oe))return e.traverseGrouping(t,r);if(t.is(B))return e.traverseMove(t,r);if(t.is(Te))return e.traverseCommutator(t,r);if(t.is(Ge))return e.traverseConjugate(t,r);if(t.is(_e))return e.traversePause(t,r);if(t.is(Xe))return e.traverseNewline(t,r);if(t.is(Ft))return e.traverseLineComment(t,r);throw new Error("unknown AlgNode")}function V2(e){if(e.is(Oe)||e.is(B)||e.is(Te)||e.is(Ge)||e.is(_e)||e.is(Xe)||e.is(Ft))return e;throw new Error("internal error: expected AlgNode")}var $r,en,Xl,Qo,Ys,$l,H2,Xs,Yl,j2,Z2,$s=y(()=>{"use strict";ql();Mo();Xt();Oo();Io();To();Go();$r=class{traverseAlgNode(t,r){return q2(this,t,r)}traverseIntoAlgNode(t,r){return V2(this.traverseAlgNode(t,r))}},en=class extends $r{traverseAlgNode(t){return q2(this,t,void 0)}traverseIntoAlgNode(t){return V2(this.traverseAlgNode(t))}},Xs=class extends $r{constructor(){super(...arguments);ee(this,Qo);ee(this,Xl,void 0)}*traverseAlg(r,n){if(n.depth===0){yield*r.childAlgNodes();return}let o=[],l=null,i=n?.collapseMoves??!0;function s(u,g){var L;let p=Il(L=Xs,$l,H2).call(L,u,g,n);if(p===0)return!1;let c=new B(u.quantum,p);return o.push(c),l=c,!0}function a(u){i&&l?.is(B)&&u.is(B)&&l.quantum.isIdentical(u.quantum)?(o.pop(),s(l,u.amount)||(l=o.slice(-1)[0])):u.is(B)?s(u,0):(o.push(u),l=u)}let f={depth:n.depth?n.depth-1:null};for(let u of r.childAlgNodes())for(let g of this.traverseAlgNode(u,f))a(g);for(let u of o)yield u}*traverseGrouping(r,n){if(n.depth===0){yield r;return}let o={depth:n.depth?n.depth-1:null},l=new Oe(this.traverseAlg(r.alg,o),r.amount),i=Il(this,Qo,Ys).call(this).get(r);i&&(l.experimentalNISSPlaceholder=i,i.experimentalNISSGrouping=l),yield l}*traverseMove(r,n){yield r}*traverseCommutator(r,n){if(n.depth===0){yield r;return}let o={depth:n.depth?n.depth-1:null};yield new Te(this.traverseAlg(r.A,o),this.traverseAlg(r.B,o))}*traverseConjugate(r,n){if(n.depth===0){yield r;return}let o={depth:n.depth?n.depth-1:null};yield new Ge(this.traverseAlg(r.A,o),this.traverseAlg(r.B,o))}*traversePause(r,n){if(r.experimentalNISSGrouping){let o=new _e;Il(this,Qo,Ys).call(this).set(r.experimentalNISSGrouping,o),yield o}else yield r}*traverseNewline(r,n){yield r}*traverseLineComment(r,n){yield r}},Yl=Xs;Xl=new WeakMap,Qo=new WeakSet,Ys=function(){return d(this,Xl)??V(this,Xl,new Map)},$l=new WeakSet,H2=function(r,n,o){let l=r.amount+n;if(o?.quantumMoveOrder){let i=o.quantumMoveOrder(r.quantum),s=Math.floor(i/2)+1-i;l=(l%i+i-s)%i+s}return l},ee(Yl,$l);j2=new Yl,Z2=j2.traverseAlg.bind(j2)});function J2(e){if(!e)return[];if(wt(e,E))return e.childAlgNodes();if(typeof e=="string")return js(e).childAlgNodes();let t=e;if(typeof t[Symbol.iterator]=="function")return t;throw new Error("Invalid AlgNode")}function mr(e){return wt(e,E)?e:new E(e)}function Om(e,t){return e.is(Xe)||t.is(Xe)||t.as(Oe)?.experimentalNISSPlaceholder?"":e.is(Ft)&&!t.is(Xe)?\`
\`:" "}var at,tn,E,Yt=y(()=>{"use strict";Jt();Js();Gt();qs();$s();Ko();Go();Xt();Oo();Vs();tn=class extends Me{constructor(r){super();ee(this,at,void 0);V(this,at,Array.from(J2(r)));for(let n of d(this,at))if(!Q2(n))throw new Error("An alg can only contain alg nodes.")}isIdentical(r){let n=r;if(!r.is(tn))return!1;let o=Array.from(d(this,at)),l=Array.from(d(n,at));if(o.length!==l.length)return!1;for(let i=0;i<o.length;i++)if(!o[i].isIdentical(l[i]))return!1;return!0}invert(){return new tn(N2(Array.from(d(this,at)).map(r=>r.invert())))}*experimentalExpand(r=1,n){n??(n=1/0);for(let o of P2(d(this,at),r))yield*o.experimentalExpand(r,n)}expand(r){return new tn(this.experimentalExpand(1,r?.depth??1/0))}*experimentalLeafMoves(){for(let r of this.experimentalExpand())r.is(B)&&(yield r)}concat(r){return new tn(Array.from(d(this,at)).concat(Array.from(J2(r))))}experimentalIsEmpty(){for(let r of d(this,at))return!1;return!0}static fromString(r){return js(r)}units(){return this.childAlgNodes()}*childAlgNodes(){for(let r of d(this,at))yield r}experimentalNumUnits(){return this.experimentalNumChildAlgNodes()}experimentalNumChildAlgNodes(){return Array.from(d(this,at)).length}get type(){return Vl("deprecated: type"),"sequence"}toString(){let r="",n=null;for(let o of d(this,at)){n&&(r+=Om(n,o));let l=o.as(_e)?.experimentalNISSGrouping;if(l){if(l.amount!==-1)throw new Error("Invalid NISS Grouping amount!");r+=\`^(\${l.alg.toString()})\`}else o.as(Oe)?.experimentalNISSPlaceholder||(r+=o.toString());n=o}return r}simplify(r){return new tn(Z2(this,r??{}))}},E=tn;at=new WeakMap});var Im,Y2=y(()=>{"use strict";Yt();Ko();Mo();To();Xt();Io();Im={Sune:new E([new B("R",1),new B("U",1),new B("R",-1),new B("U",1),new B("R",1),new B("U",-2),new B("R",-1)]),AntiSune:new E([new B("R",1),new B("U",2),new B("R",-1),new B("U",-1),new B("R",1),new B("U",-1),new B("R",-1)]),SuneCommutator:new E([new Te(new E([new B("R",1),new B("U",1),new B("R",-2)]),new E([new Ge(new E([new B("R",1)]),new E([new B("U",1)]))]))]),Niklas:new E([new B("R",1),new B("U",-1),new B("L",-1),new B("U",1),new B("R",-1),new B("U",-1),new B("L",1),new B("U",1)]),EPerm:new E([new B("x",-1),new Te(new E([new Ge(new E([new B("R",1)]),new E([new B("U",-1)]))]),new E([new B("D",1)])),new Te(new E([new Ge(new E([new B("R",1)]),new E([new B("U",1)]))]),new E([new B("D",1)])),new B("x",1)]),FURURFCompact:new E([new Ge(new E([new B("F",1)]),new E([new Te(new E([new B("U",1)]),new E([new B("R",1)]))]))]),APermCompact:new E([new Ge(new E([new B("R",2)]),new E([new Te(new E([new B("F",2)]),new E([new B("R",-1),new B("B",-1),new B("R",1)]))]))]),FURURFMoves:new E([new B("F",1),new B("U",1),new B("R",1),new B("U",-1),new B("R",-1),new B("F",-1)]),TPerm:new E([new B("R",1),new B("U",1),new B("R",-1),new B("U",-1),new B("R",-1),new B("F",1),new B("R",2),new B("U",-1),new B("R",-1),new B("U",-1),new B("R",1),new B("U",1),new B("R",-1),new B("F",-1)]),HeadlightSwaps:new E([new Ge(new E([new B("F",1)]),new E([new Oe(new E([new Te(new E([new B("R",1)]),new E([new B("U",1)]))]),3)]))]),TriplePause:new E([new _e,new _e,new _e])}});var CA,X2=y(()=>{"use strict";Xt();CA={73:new B("R"),75:new B("R'"),87:new B("B"),79:new B("B'"),83:new B("D"),76:new B("D'"),68:new B("L"),69:new B("L'"),74:new B("U"),70:new B("U'"),72:new B("F"),71:new B("F'"),78:new B("x'"),67:new B("l"),82:new B("l'"),85:new B("r"),77:new B("r'"),88:new B("d"),188:new B("d'"),84:new B("x"),89:new B("x"),66:new B("x'"),186:new B("y"),59:new B("y"),65:new B("y'"),80:new B("z"),81:new B("z'"),90:new B("M'"),190:new B("M'")}});var $2=y(()=>{"use strict"});var ef=y(()=>{"use strict";Yt()});var Be=y(()=>{"use strict";Yt();Ws();$s();Y2();X2();Ko();Xt();$2();ef();Js();Ks()});function qo(e,t,r){let n={};for(let o in e.orbits){let l=e.orbits[o],i=t[o],s=r[o];if(jo(l.numOrientations,s))n[o]=i;else if(jo(l.numOrientations,i))n[o]=s;else{let a=new Array(l.numPieces);if(l.numOrientations===1){for(let f=0;f<l.numPieces;f++)a[f]=i.permutation[s.permutation[f]];n[o]={permutation:a,orientation:i.orientation}}else{let f=new Array(l.numPieces);for(let u=0;u<l.numPieces;u++)f[u]=(i.orientation[s.permutation[u]]+s.orientation[u])%l.numOrientations,a[u]=i.permutation[s.permutation[u]];n[o]={permutation:a,orientation:f}}}}return n}function e0(e,t,r){let n={};for(let o in e.orbits){let l=e.orbits[o],i=t[o],s=r[o];if(jo(l.numOrientations,s))n[o]=i;else{let a=new Array(l.numPieces);if(l.numOrientations===1){for(let f=0;f<l.numPieces;f++)a[f]=i.pieces[s.permutation[f]];n[o]={pieces:a,orientation:i.orientation}}else{let f=new Array(l.numPieces);for(let u=0;u<l.numPieces;u++)f[u]=(i.orientation[s.permutation[u]]+s.orientation[u])%l.numOrientations,a[u]=i.pieces[s.permutation[u]];n[o]={pieces:a,orientation:f}}}}return n}var ei=y(()=>{"use strict";Vo()});function Wm(e){let t=tf.get(e);if(t)return t;let r=new Array(e),n=new Array(e);for(let l=0;l<e;l++)r[l]=l,n[l]=0;let o={permutation:r,orientation:n};return rf&&(Object.freeze(r),Object.freeze(n),Object.freeze(o)),tf.set(e,o),o}function nf(e){let t={};for(let[r,n]of Object.entries(e.orbits))t[r]=Wm(n.numPieces);return rf&&Object.freeze(t),t}function of(e,t){let r=t.quantum.toString(),n=e.definition.moves[r];if(!n){let i=e.definition.experimentalDerivedMoves?.[r];i&&(n=e.algToTransformation(i).transformationData)}if(n)return Br(e,n,t.amount);let o=e.definition.moves[t.toString()];if(o)return o;let l=e.definition.moves[t.invert().toString()];if(l)return Br(e,l,-1);throw new Error(\`Invalid move for KPuzzle (\${e.name()}): \${t}\`)}var rf,tf,t0=y(()=>{"use strict";Vo();rf=!1,tf=new Map});var ge,ti=y(()=>{"use strict";ei();Ho();ge=class{constructor(t,r){this.kpuzzle=t;this.stateData=r}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),stateData:this.stateData}}static fromTransformation(t){let r=e0(t.kpuzzle.definition,t.kpuzzle.definition.startStateData,t.transformationData);return new ge(t.kpuzzle,r)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(t.isIdentityTransformation())return new ge(this.kpuzzle,this.stateData);let r=e0(this.kpuzzle.definition,this.stateData,t.transformationData);return new ge(this.kpuzzle,r)}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}experimentalToTransformation(){if(!this.kpuzzle.canConvertStateToUniqueTransformation())return null;let t={};for(let[r,n]of Object.entries(this.stateData)){let o={permutation:n.pieces,orientation:n.orientation};t[r]=o}return new Dt(this.kpuzzle,t)}experimentalIsSolved(t){if(!this.kpuzzle.definition.experimentalIsStateSolved)throw new Error("\`KState.experimentalIsSolved()\` is not supported for this puzzle at the moment.");return this.kpuzzle.definition.experimentalIsStateSolved(this,t)}}});var rn,Rr,Dt,Ho=y(()=>{"use strict";Vo();ei();t0();ti();Rr=class{constructor(t,r){this.kpuzzle=t;this.transformationData=r;ee(this,rn,void 0)}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),transformationData:this.transformationData}}invert(){return new Rr(this.kpuzzle,r0(this.kpuzzle,this.transformationData))}isIdentityTransformation(){return d(this,rn)??V(this,rn,this.isIdentical(this.kpuzzle.identityTransformation()))}static experimentalConstructIdentity(t){let r=new Rr(t,nf(t.definition));return V(r,rn,!0),r}isIdentical(t){return lf(this.kpuzzle,this.transformationData,t.transformationData)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(this.kpuzzle!==t.kpuzzle)throw new Error(\`Tried to apply a transformation for a KPuzzle (\${t.kpuzzle.name()}) to a different KPuzzle (\${this.kpuzzle.name()}).\`);return d(this,rn)?new Rr(this.kpuzzle,t.transformationData):d(t,rn)?new Rr(this.kpuzzle,this.transformationData):new Rr(this.kpuzzle,qo(this.kpuzzle.definition,this.transformationData,t.transformationData))}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}toKState(){return ge.fromTransformation(this)}repetitionOrder(){return sf(this.kpuzzle.definition,this)}selfMultiply(t){return new Rr(this.kpuzzle,Br(this.kpuzzle,this.transformationData,t))}},Dt=Rr;rn=new WeakMap});function jo(e,t){let{permutation:r}=t,n=r.length;for(let o=0;o<n;o++)if(r[o]!==o)return!1;if(e>1){let{orientation:o}=t;for(let l=0;l<n;l++)if(o[l]!==0)return!1}return!0}function Km(e,t,r,n={}){for(let o=0;o<e.numPieces;o++)if(!n?.ignoreOrientation&&t.orientation[o]!==r.orientation[o]||!n?.ignorePermutation&&t.permutation[o]!==r.permutation[o])return!1;return!0}function lf(e,t,r){for(let[n,o]of Object.entries(e.definition.orbits))if(!Km(o,t[n],r[n]))return!1;return!0}function r0(e,t){let r={};for(let n in e.definition.orbits){let o=e.definition.orbits[n],l=t[n];if(jo(o.numOrientations,l))r[n]=l;else if(o.numOrientations===1){let i=new Array(o.numPieces);for(let s=0;s<o.numPieces;s++)i[l.permutation[s]]=s;r[n]={permutation:i,orientation:l.orientation}}else{let i=new Array(o.numPieces),s=new Array(o.numPieces);for(let a=0;a<o.numPieces;a++){let f=l.permutation[a];i[f]=a,s[f]=(o.numOrientations-l.orientation[a]+o.numOrientations)%o.numOrientations}r[n]={permutation:i,orientation:s}}}return r}function Br(e,t,r){if(r===1)return t;if(r<0)return Br(e,r0(e,t),-r);if(r===0){let{transformationData:l}=e.identityTransformation();return l}let n=t;r!==2&&(n=Br(e,t,Math.floor(r/2)));let o=qo(e.definition,n,n);return r%2===0?o:qo(e.definition,t,o)}function o0(e,t){return t?o0(t,e%t):e}function sf(e,t){let r=1;for(let n in e.orbits){let o=e.orbits[n],l=t.transformationData[n],i=new Array(o.numPieces);for(let s=0;s<o.numPieces;s++)if(!i[s]){let a=s,f=0,u=0;for(;i[a]=!0,f=f+l.orientation[a],u=u+1,a=l.permutation[a],a!==s;);f!==0&&(u=u*o.numOrientations/o0(o.numOrientations,f)),r=r*u/o0(r,u)}}return r}var n0,af,ff,Vo=y(()=>{"use strict";Be();ei();Ho();n0=class extends $r{traverseAlg(t,r){let n=null;for(let o of t.childAlgNodes())n?n=n.applyTransformation(this.traverseAlgNode(o,r)):n=this.traverseAlgNode(o,r);return n??r.identityTransformation()}traverseGrouping(t,r){let n=this.traverseAlg(t.alg,r);return new Dt(r,Br(r,n.transformationData,t.amount))}traverseMove(t,r){return r.moveToTransformation(t)}traverseCommutator(t,r){let n=this.traverseAlg(t.A,r),o=this.traverseAlg(t.B,r);return n.applyTransformation(o).applyTransformation(n.invert()).applyTransformation(o.invert())}traverseConjugate(t,r){let n=this.traverseAlg(t.A,r),o=this.traverseAlg(t.B,r);return n.applyTransformation(o).applyTransformation(n.invert())}traversePause(t,r){return r.identityTransformation()}traverseNewline(t,r){return r.identityTransformation()}traverseLineComment(t,r){return r.identityTransformation()}},af=new n0,ff=af.traverseAlg.bind(af)});var Tn,ri,Ae,uf=y(()=>{"use strict";Be();Vo();t0();ti();Ho();Ae=class{constructor(t,r){this.definition=t;ee(this,Tn,new Map);ee(this,ri,void 0);this.experimentalPGNotation=r?.experimentalPGNotation}name(){return this.definition.name}identityTransformation(){return Dt.experimentalConstructIdentity(this)}moveToTransformation(t){typeof t=="string"&&(t=new B(t));let r=t.toString(),n=d(this,Tn).get(r);if(n)return new Dt(this,n);if(this.experimentalPGNotation){let l=this.experimentalPGNotation.lookupMove(t);if(!l)throw new Error(\`could not map to internal move: \${t}\`);return d(this,Tn).set(r,l),new Dt(this,l)}let o=of(this,t);return d(this,Tn).set(r,o),new Dt(this,o)}algToTransformation(t){return typeof t=="string"&&(t=new E(t)),ff(t,this)}toTransformation(t){return typeof t=="string"?this.algToTransformation(t):t?.is?.(E)?this.algToTransformation(t):t?.is?.(B)?this.moveToTransformation(t):t}startState(){return new ge(this,this.definition.startStateData)}canConvertStateToUniqueTransformation(){return d(this,ri)??V(this,ri,(()=>{for(let[t,r]of Object.entries(this.definition.orbits)){let n=new Array(r.numPieces).fill(!1);for(let o of this.definition.startStateData[t].pieces)n[o]=!0;for(let o of n)if(!o)return!1}return!0})())}get state(){throw new Error("KPuzzle is now a different (stateless) class.")}reset(){throw new Error("KPuzzle is now a different (stateless) class.")}applyMove(t){throw new Error("KPuzzle is now a different class. Try \`.moveToTransformation()\` to get the transformation for a move.")}applyAlg(t){throw new Error("KPuzzle is now a different class. Try \`.algToTransformation()\` to get the transformation for an alg.")}};Tn=new WeakMap,ri=new WeakMap});var He=y(()=>{"use strict";uf();ti();Ho()});var Qm,Py,gf=y(()=>{"use strict";Qm={333:{puzzleID:"3x3x3",eventName:"3x3x3 Cube"},222:{puzzleID:"2x2x2",eventName:"2x2x2 Cube"},444:{puzzleID:"4x4x4",eventName:"4x4x4 Cube"},555:{puzzleID:"5x5x5",eventName:"5x5x5 Cube"},666:{puzzleID:"6x6x6",eventName:"6x6x6 Cube"},777:{puzzleID:"7x7x7",eventName:"7x7x7 Cube"},"333bf":{puzzleID:"3x3x3",eventName:"3x3x3 Blindfolded"},"333fm":{puzzleID:"3x3x3",eventName:"3x3x3 Fewest Moves"},"333oh":{puzzleID:"3x3x3",eventName:"3x3x3 One-Handed"},clock:{puzzleID:"clock",eventName:"Clock"},minx:{puzzleID:"megaminx",eventName:"Megaminx"},pyram:{puzzleID:"pyraminx",eventName:"Pyraminx"},skewb:{puzzleID:"skewb",eventName:"Skewb"},sq1:{puzzleID:"square1",eventName:"Square-1"},"444bf":{puzzleID:"4x4x4",eventName:"4x4x4 Blindfolded"},"555bf":{puzzleID:"5x5x5",eventName:"5x5x5 Blindfolded"},"333mb":{puzzleID:"3x3x3",eventName:"3x3x3 Multi-Blind"}},Py={...Qm,fto:{puzzleID:"fto",eventName:"Face-Turning Octahedron"},master_tetraminx:{puzzleID:"master_tetraminx",eventName:"Master Tetraminx"},kilominx:{puzzleID:"kilominx",eventName:"Kilominx"},redi_cube:{puzzleID:"redi_cube",eventName:"Redi Cube"}}});function eL(e){switch(e){case"Regular":return jm;case"Dim":return Ym;case"Ignored":return qm;case"OrientationStickers":return Vm;case"Invisible":return Hm;case"IgnoreNonPrimary":return Zm;case"PermuteNonPrimary":return Jm;case"Ignoriented":return Xm;case"OrientationWithoutPermutation":return $m}}var dr,Ot,Ze,Gn,ni,nn,jm,qm,Vm,Hm,Zm,Jm,Ym,Xm,$m,On,In,oi=y(()=>{"use strict";dr=class{constructor(t,r){this.stickerings=new Map;for(let[n,o]of Object.entries(t.definition.orbits))this.stickerings.set(n,new Array(o.numPieces).fill(r))}},Ot="regular",Ze="ignored",Gn="oriented",ni="invisible",nn="dim",jm={facelets:[Ot,Ot,Ot,Ot,Ot]},qm={facelets:[Ze,Ze,Ze,Ze,Ze]},Vm={facelets:[Gn,Gn,Gn,Gn,Gn]},Hm={facelets:[ni,ni,ni,ni]},Zm={facelets:[Ot,Ze,Ze,Ze,Ze]},Jm={facelets:[nn,Ot,Ot,Ot,Ot]},Ym={facelets:[nn,nn,nn,nn,nn]},Xm={facelets:[nn,Ze,Ze,Ze,Ze]},$m={facelets:[Gn,Ze,Ze,Ze,Ze]};On=class extends dr{constructor(t){super(t,"Regular")}set(t,r){for(let[n,o]of this.stickerings.entries())for(let l=0;l<o.length;l++)t.stickerings.get(n)[l]&&(o[l]=r);return this}toAppearance(){let t={orbits:{}};for(let[r,n]of this.stickerings.entries()){let o=[],l={pieces:o};t.orbits[r]=l;for(let i of n)o.push(eL(i))}return t}},In=class{constructor(t){this.kpuzzle=t}and(t){let r=new dr(this.kpuzzle,!1);for(let[n,o]of Object.entries(this.kpuzzle.definition.orbits)){e:for(let l=0;l<o.numPieces;l++){r.stickerings.get(n)[l]=!0;for(let i of t)if(!i.stickerings.get(n)[l]){r.stickerings.get(n)[l]=!1;continue e}}}return r}or(t){let r=new dr(this.kpuzzle,!1);for(let[n,o]of Object.entries(this.kpuzzle.definition.orbits)){e:for(let l=0;l<o.numPieces;l++){r.stickerings.get(n)[l]=!1;for(let i of t)if(i.stickerings.get(n)[l]){r.stickerings.get(n)[l]=!0;continue e}}}return r}not(t){let r=new dr(this.kpuzzle,!1);for(let[n,o]of Object.entries(this.kpuzzle.definition.orbits))for(let l=0;l<o.numPieces;l++)r.stickerings.get(n)[l]=!t.stickerings.get(n)[l];return r}all(){return this.and(this.moves([]))}move(t){let r=this.kpuzzle.moveToTransformation(t),n=new dr(this.kpuzzle,!1);for(let[o,l]of Object.entries(this.kpuzzle.definition.orbits))for(let i=0;i<l.numPieces;i++)(r.transformationData[o].permutation[i]!==i||r.transformationData[o].orientation[i]!==0)&&(n.stickerings.get(o)[i]=!0);return n}moves(t){return t.map(r=>this.move(r))}orbits(t){let r=new dr(this.kpuzzle,!1);for(let n of t)r.stickerings.get(n).fill(!0);return r}}});var l0,i0=y(()=>{"use strict";l0={full:{groups:{"3x3x3":"Stickering"}},OLL:{groups:{"3x3x3":"Last Layer"}},PLL:{groups:{"3x3x3":"Last Layer"}},LL:{groups:{"3x3x3":"Last Layer"}},COLL:{groups:{"3x3x3":"Last Layer"}},OCLL:{groups:{"3x3x3":"Last Layer"}},CLL:{groups:{"3x3x3":"Last Layer"}},ELL:{groups:{"3x3x3":"Last Layer"}},ZBLL:{groups:{"3x3x3":"Last Layer"}},LS:{groups:{"3x3x3":"Last Slot"}},ELS:{groups:{"3x3x3":"Last Slot"}},CLS:{groups:{"3x3x3":"Last Slot"}},ZBLS:{groups:{"3x3x3":"Last Slot"}},VLS:{groups:{"3x3x3":"Last Slot"}},WVLS:{groups:{"3x3x3":"Last Slot"}},F2L:{groups:{"3x3x3":"CFOP (Fridrich)"}},Daisy:{groups:{"3x3x3":"CFOP (Fridrich)"}},Cross:{groups:{"3x3x3":"CFOP (Fridrich)"}},EO:{groups:{"3x3x3":"ZZ"}},EOline:{groups:{"3x3x3":"ZZ"}},EOcross:{groups:{"3x3x3":"ZZ"}},CMLL:{groups:{"3x3x3":"Roux"}},L10P:{groups:{"3x3x3":"Roux"}},L6E:{groups:{"3x3x3":"Roux"}},L6EO:{groups:{"3x3x3":"Roux"}},"2x2x2":{groups:{"3x3x3":"Petrus"}},"2x2x3":{groups:{"3x3x3":"Petrus"}},"Void Cube":{groups:{"3x3x3":"Miscellaneous"}},invisible:{groups:{"3x3x3":"Miscellaneous"}},picture:{groups:{"3x3x3":"Miscellaneous"}},"centers-only":{groups:{"3x3x3":"Miscellaneous"}},"experimental-centers-U":{},"experimental-centers-U-D":{},"experimental-centers-U-L-D":{},"experimental-centers-U-L-B-D":{},"experimental-centers":{},"experimental-fto-fc":{groups:{fto:"Bencisco"}},"experimental-fto-f2t":{groups:{fto:"Bencisco"}},"experimental-fto-sc":{groups:{fto:"Bencisco"}},"experimental-fto-l2c":{groups:{fto:"Bencisco"}},"experimental-fto-lbt":{groups:{fto:"Bencisco"}},"experimental-fto-l3t":{groups:{fto:"Bencisco"}}}});async function er(e,t){let r=await e.kpuzzle(),n=new On(r),o=new In(r),l=()=>o.move("U"),i=()=>o.or(o.moves(["U","D"])),s=()=>o.or(o.moves(["L","R"])),a=()=>o.not(s()),f=()=>o.not(l()),u=()=>o.and([l(),o.orbits(["CENTERS"])]),g=()=>o.orbits(["CENTERS"]),p=()=>o.orbits(["EDGES"]),c=()=>o.orbits(["CORNERS"]),L=()=>o.or([a(),o.and([l(),p()])]),m=()=>o.and([o.and(o.moves(["F","R"])),p()]),R=()=>o.and([o.and(o.moves(["F","R"])),c(),o.not(l())]),F=()=>o.or([R(),m()]);function A(){n.set(f(),"Dim")}function U(){n.set(l(),"PermuteNonPrimary"),n.set(u(),"Dim")}function b(){n.set(l(),"IgnoreNonPrimary"),n.set(u(),"Regular")}function S(){n.set(l(),"Ignoriented"),n.set(u(),"Dim")}switch(t){case"full":break;case"PLL":A(),U();break;case"CLS":A(),n.set(R(),"Regular"),n.set(l(),"Ignoriented"),n.set(o.and([l(),g()]),"Dim"),n.set(o.and([l(),c()]),"IgnoreNonPrimary");break;case"OLL":A(),b();break;case"COLL":A(),n.set(o.and([l(),p()]),"Ignoriented"),n.set(o.and([l(),g()]),"Dim"),n.set(o.and([l(),c()]),"Regular");break;case"OCLL":A(),S(),n.set(o.and([l(),c()]),"IgnoreNonPrimary");break;case"CLL":A(),n.set(o.not(o.and([c(),l()])),"Dim");break;case"ELL":A(),n.set(l(),"Dim"),n.set(o.and([l(),p()]),"Regular");break;case"ELS":A(),b(),n.set(o.and([l(),c()]),"Ignored"),n.set(m(),"Regular"),n.set(R(),"Ignored");break;case"LL":A();break;case"F2L":n.set(l(),"Ignored");break;case"ZBLL":A(),n.set(l(),"PermuteNonPrimary"),n.set(u(),"Dim"),n.set(o.and([l(),c()]),"Regular");break;case"ZBLS":A(),n.set(F(),"Regular"),b(),n.set(o.and([l(),c()]),"Ignored");break;case"VLS":A(),n.set(F(),"Regular"),b();break;case"WVLS":A(),n.set(F(),"Regular"),n.set(o.and([l(),p()]),"Ignoriented"),n.set(o.and([l(),g()]),"Dim"),n.set(o.and([l(),c()]),"IgnoreNonPrimary");break;case"LS":A(),n.set(F(),"Regular"),n.set(l(),"Ignored"),n.set(u(),"Dim");break;case"EO":n.set(c(),"Ignored"),n.set(p(),"OrientationWithoutPermutation");break;case"EOline":n.set(c(),"Ignored"),n.set(p(),"OrientationWithoutPermutation"),n.set(o.and(o.moves(["D","M"])),"Regular");break;case"EOcross":n.set(p(),"OrientationWithoutPermutation"),n.set(o.move("D"),"Regular"),n.set(c(),"Ignored");break;case"CMLL":n.set(f(),"Dim"),n.set(L(),"Ignored"),n.set(o.and([l(),c()]),"Regular");break;case"L10P":n.set(o.not(L()),"Dim"),n.set(o.and([c(),l()]),"Regular");break;case"L6E":n.set(o.not(L()),"Dim");break;case"L6EO":n.set(o.not(L()),"Dim"),n.set(L(),"OrientationWithoutPermutation"),n.set(o.and([g(),i()]),"OrientationStickers");break;case"Daisy":n.set(o.all(),"Ignored"),n.set(g(),"Dim"),n.set(o.and([o.move("D"),g()]),"Regular"),n.set(o.and([o.move("U"),p()]),"IgnoreNonPrimary");break;case"Cross":n.set(o.all(),"Ignored"),n.set(g(),"Dim"),n.set(o.and([o.move("D"),g()]),"Regular"),n.set(o.and([o.move("D"),p()]),"Regular");break;case"2x2x2":n.set(o.or(o.moves(["U","F","R"])),"Ignored"),n.set(o.and([o.or(o.moves(["U","F","R"])),g()]),"Dim");break;case"2x2x3":n.set(o.all(),"Dim"),n.set(o.or(o.moves(["U","F","R"])),"Ignored"),n.set(o.and([o.or(o.moves(["U","F","R"])),g()]),"Dim"),n.set(o.and([o.move("F"),o.not(o.or(o.moves(["U","R"])))]),"Regular");break;case"Void Cube":n.set(g(),"Invisible");break;case"picture":case"invisible":n.set(o.all(),"Invisible");break;case"centers-only":n.set(o.not(g()),"Ignored");break;default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`),n.set(o.and(o.moves([])),"Dim")}return n.toAppearance()}async function Wn(){let e=[];for(let[t,r]of Object.entries(l0))r.groups&&"3x3x3"in r.groups&&e.push(t);return e}var Zo=y(()=>{"use strict";oi();i0()});function he(e){let t=null;return()=>t??(t=e())}var It=y(()=>{"use strict"});var Kn,pf=y(()=>{"use strict";Kn=class{constructor(t,r){this.facenames=t;this.prefixFree=!0;this.gripnames=[];r&&(this.gripnames=r);for(let n=0;this.prefixFree&&n<t.length;n++)for(let o=0;this.prefixFree&&o<t.length;o++)n!==o&&t[n].startsWith(t[o])&&(this.prefixFree=!1)}setGripNames(t){this.gripnames=t}splitByFaceNames(t){let r=[],n=0;for(;n<t.length;){n>0&&n<t.length&&t[n]==="_"&&n++;let o=-1;for(let l=0;l<this.facenames.length;l++)t.substr(n).startsWith(this.facenames[l])&&(o<0||this.facenames[l].length>this.facenames[o].length)&&(o=l);if(o>=0)r.push(o),n+=this.facenames[o].length;else throw new Error("Could not split "+t+" into face names.")}return r}joinByFaceIndices(t){let r="",n=[];for(let o=0;o<t.length;o++)n.push(r),n.push(this.facenames[t[o]]),this.prefixFree||(r="_");return n.join("")}spinmatch(t,r){if(t===r)return!0;try{let n=this.splitByFaceNames(t),o=this.splitByFaceNames(r);if(n.length!==o.length&&n.length<3)return!1;for(let l=0;l<n.length;l++){for(let s=0;s<l;s++)if(n[l]===n[s])return!1;let i=!1;for(let s=0;s<o.length;s++)if(n[l]===o[s]){i=!0;break}if(!i)return!1}return!0}catch{return!1}}spinmatchv(t,r){return t.endsWith("v")&&r.endsWith("v")?this.spinmatch(t.slice(0,t.length-1),r.slice(0,r.length-1)):this.spinmatch(t,r)}unswizzle(t){(t.endsWith("v")||t.endsWith("w"))&&t[0]<="Z"&&(t=t.slice(0,t.length-1));let r=t.toUpperCase();for(let n=0;n<this.gripnames.length;n++){let o=this.gripnames[n];if(this.spinmatch(r,o))return o}return t}}});var on,cf=y(()=>{"use strict";on=class{notationToInternal(t){return t}notationToExternal(t){return t}}});var Jo,mf=y(()=>{"use strict";Be();Jo=class{constructor(t,r){this.child=t;this.sw=r}notationToInternal(t){return t.family==="T"&&t.innerLayer===void 0&&t.outerLayer===void 0?new B(new C("FLRv",t.innerLayer,t.outerLayer),t.amount):this.child.notationToInternal(t)}notationToExternal(t){let r=t.family;return r.length>0&&r[r.length-1]==="v"&&(r=r.substring(0,r.length-1)),this.sw.spinmatch(r,"FLUR")?new B(new C("T",t.innerLayer,t.outerLayer),t.amount):this.child.notationToExternal(t)}}});var Qn,Lf=y(()=>{"use strict";Be();Qn=class{constructor(t,r){this.internalNames=t;this.externalNames=r}convertString(t,r,n){let o="";(t.endsWith("v")||t.endsWith("v"))&&t<="_"&&(o=t.slice(t.length-1),t=t.slice(0,t.length-1));let l=t.toUpperCase(),i=!1;return t!==l&&(i=!0,t=l),t=n.joinByFaceIndices(r.splitByFaceNames(t)),i&&(t=t.toLowerCase()),t+o}convert(t,r,n){let o=t.family,l=this.convertString(o,r,n);return o===l?t:new B(new C(l,t.innerLayer,t.outerLayer),t.amount)}notationToInternal(t){return this.convert(t,this.externalNames,this.internalNames)}notationToExternal(t){return this.convert(t,this.internalNames,this.externalNames)}}});var Yo,Bf=y(()=>{"use strict";Be();Yo=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer===void 0&&t.outerLayer===void 0){if(Math.abs(t.amount)===1){if(t.family==="R++")return new B(new C("L",3,2),-2*t.amount);if(t.family==="R--")return new B(new C("L",3,2),2*t.amount);if(t.family==="D++")return new B(new C("U",3,2),-2*t.amount);if(t.family==="D--")return new B(new C("U",3,2),2*t.amount);if(t.family==="R_PLUSPLUS_")return new B(new C("L",3,2),-2*t.amount);if(t.family==="D_PLUSPLUS_")return new B(new C("U",3,2),-2*t.amount)}if(t.family==="y")return new B("Uv",t.amount);if(t.family==="x"&&Math.abs(t.amount)===2)return new B("ERv",t.amount/2)}return this.child.notationToInternal(t)}notationToExternal(t){return t.family==="ERv"&&Math.abs(t.amount)===1?new B(new C("x",t.innerLayer,t.outerLayer),t.amount*2):t.family==="ILv"&&Math.abs(t.amount)===1?new B(new C("x",t.innerLayer,t.outerLayer),-t.amount*2):t.family==="Uv"?new B(new C("y",t.innerLayer,t.outerLayer),t.amount):t.family==="Dv"?new B("y",-t.amount):this.child.notationToExternal(t)}}});var Xo,Rf=y(()=>{"use strict";Be();Xo=class{constructor(t){this.slices=t}notationToInternal(t){let r=t.family;return!t.innerLayer&&!t.outerLayer&&(r==="x"?t=new B("Rv",t.amount):r==="y"?t=new B("Uv",t.amount):r==="z"&&(t=new B("Fv",t.amount)),(this.slices&1)===1&&(r==="E"?t=new B(new C("D",(this.slices+1)/2),t.amount):r==="M"?t=new B(new C("L",(this.slices+1)/2),t.amount):r==="S"&&(t=new B(new C("F",(this.slices+1)/2),t.amount))),this.slices>2&&(r==="e"?t=new B(new C("D",this.slices-1,2),t.amount):r==="m"?t=new B(new C("L",this.slices-1,2),t.amount):r==="s"&&(t=new B(new C("F",this.slices-1,2),t.amount)))),t}notationToExternal(t){let r=t.family;if(!t.innerLayer&&!t.outerLayer){if(r==="Rv")return new B("x",t.amount);if(r==="Uv")return new B("y",t.amount);if(r==="Fv")return new B("z",t.amount);if(r==="Lv")return new B("x",-t.amount);if(r==="Dv")return new B("y",-t.amount);if(r==="Bv")return new B("z",-t.amount)}return t}}});var rL,nL,df,hf,Ff,jn,$o,Df=y(()=>{"use strict";Be();rL={U:"frl",L:"fld",R:"fdr",B:"dlr",u:"FRL",l:"FLD",r:"FDR",b:"DLR",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R"},nL={U:"FRL",L:"FLD",R:"FDR",B:"DLR",u:"frl",l:"fld",r:"fdr",b:"dlr",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R",d:"d",f:"f",bl:"l",br:"r"},df={U:"FRL",L:"FLD",R:"FDR",B:"DLR"},hf=new C("y"),Ff=new C("Dv"),jn=class{constructor(t){this.child=t;this.wcaHack=!1;this.map=rL}notationToInternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){let n=df[t.family];if(n)return new B(new C(n,t.innerLayer,t.outerLayer),t.amount)}let r=this.map[t.family];return r?new B(new C(r,t.innerLayer,t.outerLayer),t.amount):hf.isIdentical(t.quantum)?new B(Ff,-t.amount):null}notationToExternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){for(let[r,n]of Object.entries(df))if(this.child.spinmatch(t.family,n))return new B(new C(r,t.innerLayer,t.outerLayer),t.amount)}for(let[r,n]of Object.entries(this.map))if(this.child.spinmatch(t.family,n))return new B(new C(r,t.innerLayer,t.outerLayer),t.amount);return Ff.isIdentical(t.quantum)?new B(hf,-t.amount):null}},$o=class extends jn{constructor(r){super(r);this.wcaHack=!0;this.map=nL}}});var Af,s0,yf,oL,a0,Uf,lL,f0,xf,iL,el,bf=y(()=>{"use strict";Be();Af={U:"UBL",UL:"ULF",F:"UFR",UR:"URB",B:"DBL",D:"DFR",L:"DLF",R:"DRB",Uv:"UBLv",ULv:"ULFv",Fv:"UFRv",URv:"URBv",Bv:"DBLv",Dv:"DFRv",Lv:"DLFv",Rv:"DRBv"},s0=new C("x"),yf=new C("Rv"),oL=new C("Lv"),a0=new C("y"),Uf=new C("Uv"),lL=new C("Dv"),f0=new C("z"),xf=new C("Fv"),iL=new C("Bv"),el=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer||t.outerLayer)return null;let r=Af[t.family];return r?new B(new C(r,t.outerLayer,t.innerLayer),t.amount):s0.isIdentical(t.quantum)?new B(yf,t.amount):a0.isIdentical(t.quantum)?new B(Uf,t.amount):f0.isIdentical(t.quantum)?new B(xf,t.amount):null}notationToExternal(t){for(let[r,n]of Object.entries(Af))if(this.child.spinmatchv(t.family,n))return new B(new C(r,t.innerLayer,t.outerLayer),t.amount);return yf.isIdentical(t.quantum)?new B(s0,t.amount):oL.isIdentical(t.quantum)?new B(s0,-t.amount):Uf.isIdentical(t.quantum)?new B(a0,t.amount):lL.isIdentical(t.quantum)?new B(a0,-t.amount):xf.isIdentical(t.quantum)?new B(f0,t.amount):iL.isIdentical(t.quantum)?new B(f0,-t.amount):null}}});var u0=y(()=>{"use strict";cf();mf();Lf();Bf();Rf();Df();bf()});function Sf(e){let t=0,r={};for(;t<e.length&&e[t][0]==="-";){let o=e[t++];if(o==="--rotations")r.addRotations=!0;else if(o==="--allmoves")r.allMoves=!0;else if(o==="--outerblockmoves")r.outerBlockMoves=!0;else if(o==="--vertexmoves")r.vertexMoves=!0;else if(o==="--nocorners")r.includeCornerOrbits=!1;else if(o==="--noedges")r.includeEdgeOrbits=!1;else if(o==="--noorientation")r.fixedOrientation=!0;else if(o==="--nocenters")r.includeCenterOrbits=!1;else if(o==="--omit")r.excludeOrbits=e[t].split(","),t++;else if(o==="--moves")r.moveList=e[t].split(","),t++;else if(o==="--optimize")r.optimizeOrbits=!0;else if(o==="--scramble")r.scrambleAmount=100;else if(o==="--fixcorner")r.fixedPieceType="v";else if(o==="--fixedge")r.fixedPieceType="e";else if(o==="--fixcenter")r.fixedPieceType="f";else if(o==="--orientcenters")r.orientCenters=!0;else if(o==="--puzzleorientation")r.puzzleOrientation=JSON.parse(e[t]),t++;else throw new Error("Bad option: "+o)}return{puzzleDescription:tl(e.slice(t).join(" ")),options:r}}var li,g0=y(()=>{"use strict";rl();li=class{constructor(t={}){this.verbosity=0;this.allMoves=!1;this.vertexMoves=!1;this.addRotations=!1;this.moveList=null;this.fixedOrientation=!1;this.fixedPieceType=null;this.orientCenters=!1;this.includeCornerOrbits=!0;this.includeCenterOrbits=!0;this.includeEdgeOrbits=!0;this.excludeOrbits=[];this.optimizeOrbits=!1;this.grayCorners=!1;this.grayCenters=!1;this.grayEdges=!1;this.puzzleOrientation=null;this.puzzleOrientations=null;this.scrambleAmount=0;Object.assign(this,t)}}});function hr(e){if(!p0[e]){let t=Array(e);for(let r=0;r<e;r++)t[r]=0;p0[e]=t}return p0[e]}function Wt(e){if(!c0[e]){let t=Array(e);for(let r=0;r<e;r++)t[r]=r;c0[e]=t}return c0[e]}function wf(e){return new Lt(Wt(e))}function vf(e){let t=1n;for(;e>1;)t*=BigInt(e),e--;return t}function sL(e,t){if(e>t){let r=e;e=t,t=r}for(;e>0;){let r=t%e;t=e,e=r}return t}function m0(e,t){return e/sL(e,t)*t}var p0,c0,Lt,ii=y(()=>{"use strict";p0=[],c0=[];Lt=class{constructor(t){this.n=t.length,this.p=t}toString(){return"Perm["+this.p.join(" ")+"]"}mul(t){let r=Array(this.n);for(let n=0;n<this.n;n++)r[n]=t.p[this.p[n]];return new Lt(r)}rmul(t){let r=Array(this.n);for(let n=0;n<this.n;n++)r[n]=this.p[t.p[n]];return new Lt(r)}inv(){let t=Array(this.n);for(let r=0;r<this.n;r++)t[this.p[r]]=r;return new Lt(t)}compareTo(t){for(let r=0;r<this.n;r++)if(this.p[r]!==t.p[r])return this.p[r]-t.p[r];return 0}toGap(){let t=new Array,r=new Array(this.n);for(let n=0;n<this.p.length;n++){if(r[n]||this.p[n]===n)continue;let o=new Array;for(let l=n;!r[l];l=this.p[l])o.push(1+l),r[l]=!0;t.push("("+o.join(",")+")")}return t.join("")}order(){let t=1,r=new Array(this.n);for(let n=0;n<this.p.length;n++){if(r[n]||this.p[n]===n)continue;let o=0;for(let l=n;!r[l];l=this.p[l])o++,r[l]=!0;t=m0(t,o)}return t}}});function si(e,t){let r=B.fromString(t),n=e.notationToExternal(r);return n===null||r===n?t:n.toString()}function Ef(e,t){let r=e.moveops.length;if(r>30)throw new Error("Canon info too big for bitmask");let n=[],o=[];for(let i=0;i<r;i++){let s=e.moveops[i];n.push(s.order());let a=0;for(let f=0;f<r;f++){if(f===i)continue;let u=e.moveops[f];s.mul(u).equal(u.mul(s))&&(a|=1<<f)}o.push(a)}let l={};l[0]=1;for(let i=0;i<100;i++){let s=0,a={},f=0;for(let u in l){let g=+u,p=l[g];s+=p,f++;for(let c=0;c<n.length;c++)if((g>>c&1)===0&&(g&o[c]&(1<<c)-1)===0){let L=g&o[c]|1<<c;a[L]===void 0&&(a[L]=0),a[L]+=(n[c]-1)*p}}t(\`\${i}: canonseq \${s} states \${f}\`),l=a}}var qn,aL,ln,vt,Kt,ai,tr,sn,fi,_f=y(()=>{"use strict";Be();u0();ii();qn=class{constructor(t,r){this.size=t;this.mod=r}reassemblySize(){return vf(this.size)*BigInt(this.mod)**BigInt(this.size)}},aL=0;ln=class{constructor(t,r,n,o,l,i,s){this.orbitnames=t;this.orbitdefs=r;this.solved=n;this.movenames=o;this.moveops=l;this.isRotation=i;this.forcenames=s}transformToKTransformationData(t){let r={};for(let n=0;n<this.orbitnames.length;n++)r[this.orbitnames[n]]=t.orbits[n].toKPuzzle();return r}static transformToKTransformationData(t,r){let n={};for(let o=0;o<t.length;o++)n[t[o]]=r.orbits[o].toKPuzzle();return n}describeSet(t,r,n){let o=this.orbitdefs[t].size,l=new Array(o);for(let i=0;i<o;i++)l[i]=[];for(let i=0;i<this.movenames.length;i++){if(this.isRotation[i])continue;let s=this.movenames[i];this.forcenames[i]||(s=si(n,s),s[s.length-1]==="'"&&(s=s.substring(0,s.length-1)));let a=this.moveops[i].orbits[t];for(let f=0;f<o;f++)(a.perm[f]!=f||a.ori[f]!=0)&&l[f].push(s)}for(let i=0;i<o;i++)r.push("# "+(i+1)+" "+l[i].join(" "))}toKsolve(t,r=new on){let n=[];n.push("Name "+t),n.push("");for(let o=0;o<this.orbitnames.length;o++)n.push(\`Set \${this.orbitnames[o]} \${this.orbitdefs[o].size} \${this.orbitdefs[o].mod}\`),this.describeSet(o,n,r);n.push(""),n.push("Solved");for(let o=0;o<this.orbitnames.length;o++)this.solved.orbits[o].appendDefinition(n,this.orbitnames[o],!1,!1);n.push("End");for(let o=0;o<this.movenames.length;o++){n.push("");let l=this.movenames[o];this.forcenames[o]||(l=si(r,this.movenames[o]));let i=!1;l[l.length-1]==="'"&&(i=!0,l=l.substring(0,l.length-1)),n.push("Move "+l);for(let s=0;s<this.orbitnames.length;s++)i?this.moveops[o].orbits[s].inv().appendDefinition(n,this.orbitnames[s],!0):this.moveops[o].orbits[s].appendDefinition(n,this.orbitnames[s],!0);n.push("End")}return n}toKPuzzleDefinition(t){let r={},n={};for(let l=0;l<this.orbitnames.length;l++){r[this.orbitnames[l]]={numPieces:this.orbitdefs[l].size,numOrientations:this.orbitdefs[l].mod};let i=this.solved.orbits[l].toKPuzzle();n[this.orbitnames[l]]={pieces:i.permutation,orientation:i.orientation}}let o={};if(t)for(let l=0;l<this.movenames.length;l++)o[this.movenames[l]]=this.transformToKTransformationData(this.moveops[l]);return{name:\`PG3D #\${++aL}\`,orbits:r,startStateData:n,moves:o}}optimize(){let t=[],r=[],n=[],o=[];for(let l=0;l<this.moveops.length;l++)o.push([]);for(let l=0;l<this.orbitdefs.length;l++){let i=this.orbitdefs[l].mod,s=this.orbitdefs[l].size,a=new fi(s),f=new Array(this.orbitdefs[l].size);for(let c=0;c<s;c++)f[c]=!1;for(let c=0;c<this.moveops.length;c++)if(!this.isRotation[c])for(let L=0;L<s;L++)(this.moveops[c].orbits[l].perm[L]!==L||this.moveops[c].orbits[l].ori[L]!==0)&&(f[L]=!0,a.union(L,this.moveops[c].orbits[l].perm[L]));let u=!0;if(i>1){u=!1;let c=new fi(this.orbitdefs[l].size*i);for(let L=0;L<this.moveops.length;L++)for(let m=0;m<s;m++)if(this.moveops[L].orbits[l].perm[m]!==m||this.moveops[L].orbits[l].ori[m]!==0)for(let R=0;R<i;R++)c.union(m*i+R,this.moveops[L].orbits[l].perm[m]*i+(R+this.moveops[L].orbits[l].ori[m])%i);for(let L=0;!u&&L<s;L++)for(let m=1;m<i;m++)c.find(L*i)===c.find(L*i+m)&&(u=!0);for(let L=0;!u&&L<s;L++)for(let m=0;m<L;m++)this.solved.orbits[l].perm[L]===this.solved.orbits[l].perm[m]&&(u=!0)}let g=-1,p=!1;for(let c=0;c<this.orbitdefs[l].size;c++)if(f[c]){let L=a.find(c);g<0?g=L:g!==L&&(p=!0)}for(let c=0;c<this.orbitdefs[l].size;c++){if(!f[c]||a.find(c)!==c)continue;let m=[],R=[],F=0;for(let A=0;A<this.orbitdefs[l].size;A++)a.find(A)===c&&(m[F]=A,R[A]=F,F++);if(p?t.push(\`\${this.orbitnames[l]}_p\${c}\`):t.push(this.orbitnames[l]),u){r.push(new qn(F,this.orbitdefs[l].mod)),n.push(this.solved.orbits[l].remapVS(m,F));for(let A=0;A<this.moveops.length;A++)o[A].push(this.moveops[A].orbits[l].remap(m,R,F))}else{r.push(new qn(F,1)),n.push(this.solved.orbits[l].remapVS(m,F).killOri());for(let A=0;A<this.moveops.length;A++)o[A].push(this.moveops[A].orbits[l].remap(m,R,F).killOri())}}}return new ln(t,r,new sn(n),this.movenames,o.map(l=>new tr(l)),this.isRotation,this.forcenames)}scramble(t){this.solved=this.solved.mul(this.getScrambleTransformation(t))}getScrambleTransformation(t){t<100&&(t=100);let r=[];for(let o=0;o<this.moveops.length;o++)r[o]=this.moveops[o];for(let o=0;o<r.length;o++){let l=Math.floor(Math.random()*r.length),i=r[o];r[o]=r[l],r[l]=i}t<r.length&&(t=r.length);for(let o=0;o<t;o++){let l=Math.floor(Math.random()*r.length),i=Math.floor(Math.random()*r.length),s=Math.floor(Math.random()*this.moveops.length);r[l]=r[l].mul(r[i]).mul(this.moveops[s]),Math.random()<.1&&(r[l]=r[l].mul(this.moveops[s]))}let n=r[0];for(let o=1;o<r.length;o++)n=n.mul(r[o]);return n}reassemblySize(){let t=1n;for(let r=0;r<this.orbitdefs.length;r++)t*=this.orbitdefs[r].reassemblySize();return t}},vt=class{constructor(t,r,n){this.perm=t;this.ori=r;this.orimod=n}static e(t,r){return new vt(Wt(t),hr(t),r)}mul(t){let r=this.perm.length,n=new Array(r);if(this.orimod===1){for(let o=0;o<r;o++)n[o]=this.perm[t.perm[o]];return new vt(n,this.ori,this.orimod)}else{let o=new Array(r);for(let l=0;l<r;l++)n[l]=this.perm[t.perm[l]],o[l]=(this.ori[t.perm[l]]+t.ori[l])%this.orimod;return new vt(n,o,this.orimod)}}inv(){let t=this.perm.length,r=new Array(t),n=new Array(t);for(let o=0;o<t;o++)r[this.perm[o]]=o,n[this.perm[o]]=(this.orimod-this.ori[o])%this.orimod;return new vt(r,n,this.orimod)}equal(t){let r=this.perm.length;for(let n=0;n<r;n++)if(this.perm[n]!==t.perm[n]||this.ori[n]!==t.ori[n])return!1;return!0}killOri(){let t=this.perm.length;for(let r=0;r<t;r++)this.ori[r]=0;return this.orimod=1,this}toPerm(){let t=this.orimod;if(t===1)return new Lt(this.perm);let r=this.perm.length,n=new Array(r*t);for(let o=0;o<r;o++)for(let l=0;l<t;l++)n[o*t+l]=t*this.perm[o]+(this.ori[o]+l)%t;return new Lt(n)}identicalPieces(){let t=[],r=this.perm.length,n=[];for(let o=0;o<r;o++){let l=this.perm[o];if(t[l]===void 0){let i=[o];t[l]=!0;for(let s=o+1;s<r;s++)this.perm[s]===l&&i.push(s);n.push(i)}}return n}order(){return this.toPerm().order()}isIdentity(){let t=this.perm.length;if(this.perm===Wt(t)&&this.ori===hr(t))return!0;for(let r=0;r<t;r++)if(this.perm[r]!==r||this.ori[r]!==0)return!1;return!0}zeroOris(){let t=this.perm.length;if(this.ori===hr(t))return!0;for(let r=0;r<t;r++)if(this.ori[r]!==0)return!1;return!0}remap(t,r,n){let o=new Array(n),l=new Array(n);for(let i=0;i<n;i++)o[i]=r[this.perm[t[i]]],l[i]=this.ori[t[i]];return new vt(o,l,this.orimod)}remapVS(t,r){let n=new Array(r),o=new Array(r),l=0,i=[];for(let s=0;s<r;s++){let a=this.perm[t[s]];i[a]===void 0&&(i[a]=l++),n[s]=i[a],o[s]=this.ori[t[s]]}return new vt(n,o,this.orimod)}appendDefinition(t,r,n,o=!0){if(!(o&&this.isIdentity())&&(t.push(r),t.push(this.perm.map(l=>l+1).join(" ")),!this.zeroOris()))if(n){let l=new Array(this.ori.length);for(let i=0;i<l.length;i++)l[this.perm[i]]=this.ori[i];t.push(l.join(" "))}else t.push(this.ori.join(" "))}toKPuzzle(){let t=this.perm.length;return this.isIdentity()?(vt.kcache[t]||(vt.kcache[t]={permutation:Wt(t),orientation:hr(t)}),vt.kcache[t]):{permutation:this.perm,orientation:this.ori}}},Kt=vt;Kt.kcache=[];ai=class{constructor(t){this.orbits=t}internalMul(t){let r=[];for(let n=0;n<this.orbits.length;n++)r.push(this.orbits[n].mul(t.orbits[n]));return r}internalInv(){let t=[];for(let r of this.orbits)t.push(r.inv());return t}equal(t){for(let r=0;r<this.orbits.length;r++)if(!this.orbits[r].equal(t.orbits[r]))return!1;return!0}killOri(){for(let t of this.orbits)t.killOri();return this}toPerm(){let t=new Array,r=0;for(let o of this.orbits){let l=o.toPerm();t.push(l),r+=l.n}let n=new Array(r);r=0;for(let o of t){for(let l=0;l<o.n;l++)n[r+l]=r+o.p[l];r+=o.n}return new Lt(n)}identicalPieces(){let t=[],r=0;for(let n of this.orbits){let o=n.orimod,l=n.identicalPieces();for(let i=0;i<l.length;i++)t.push(l[i].map(s=>s*o+r));r+=o*n.perm.length}return t}order(){let t=1;for(let r of this.orbits)t=m0(t,r.order());return t}},tr=class extends ai{constructor(t){super(t)}mul(t){return new tr(this.internalMul(t))}mulScalar(t){if(t===0)return this.e();let r=this;for(t<0&&(r=r.inv(),t=-t);(t&1)===0;)r=r.mul(r),t>>=1;if(t===1)return r;let n=r,o=this.e();for(;t>0;)t&1&&(o=o.mul(n)),t>1&&(n=n.mul(n)),t>>=1;return o}inv(){return new tr(this.internalInv())}e(){return new tr(this.orbits.map(t=>Kt.e(t.perm.length,t.orimod)))}},sn=class extends ai{constructor(t){super(t)}mul(t){return new sn(this.internalMul(t))}},fi=class{constructor(t){this.n=t;this.heads=new Array(t);for(let r=0;r<t;r++)this.heads[r]=r}find(t){let r=this.heads[t];return this.heads[r]===r||(r=this.find(this.heads[r]),this.heads[t]=r),r}union(t,r){let n=this.find(t),o=this.find(r);n<o?this.heads[o]=n:n>o&&(this.heads[n]=o)}}});var ui,kf=y(()=>{"use strict";ui={"2x2x2":"c f 0","3x3x3":"c f 0.333333333333333","4x4x4":"c f 0.5 f 0","5x5x5":"c f 0.6 f 0.2","6x6x6":"c f 0.666666666666667 f 0.333333333333333 f 0","7x7x7":"c f 0.714285714285714 f 0.428571428571429 f 0.142857142857143","8x8x8":"c f 0.75 f 0.5 f 0.25 f 0","9x9x9":"c f 0.777777777777778 f 0.555555555555556 f 0.333333333333333 f 0.111111111111111","10x10x10":"c f 0.8 f 0.6 f 0.4 f 0.2 f 0","11x11x11":"c f 0.818181818181818 f 0.636363636363636 f 0.454545454545455 f 0.272727272727273 f 0.0909090909090909","12x12x12":"c f 0.833333333333333 f 0.666666666666667 f 0.5 f 0.333333333333333 f 0.166666666666667 f 0","13x13x13":"c f 0.846153846153846 f 0.692307692307692 f 0.538461538461538 f 0.384615384615385 f 0.230769230769231 f 0.0769230769230769","20x20x20":"c f 0 f .1 f .2 f .3 f .4 f .5 f .6 f .7 f .8 f .9","30x30x30":"c f 0 f .066667 f .133333 f .2 f .266667 f .333333 f .4 f .466667 f .533333 f .6 f .666667 f .733333 f .8 f .866667 f .933333","40x40x40":"c f 0 f .05 f .1 f .15 f .2 f .25 f .3 f .35 f .4 f .45 f .5 f .55 f .6 f .65 f .7 f .75 f .8 f .85 f .9 f .95",skewb:"c v 0","master skewb":"c v 0.275","professor skewb":"c v 0 v 0.38","compy cube":"c v 0.915641442663986",helicopter:"c e 0.707106781186547","curvy copter":"c e 0.83",dino:"c v 0.577350269189626","little chop":"c e 0",pyramorphix:"t e 0",mastermorphix:"t e 0.346184634065199",pyraminx:"t v 0.333333333333333 v 1.66666666666667",tetraminx:"t v 0.333333333333333","master pyraminx":"t v 0 v 1 v 2","master tetraminx":"t v 0 v 1","professor pyraminx":"t v -0.2 v 0.6 v 1.4 v 2.2","professor tetraminx":"t v -0.2 v 0.6 v 1.4","Jing pyraminx":"t f 0","master pyramorphix":"t e 0.866025403784437",megaminx:"d f 0.7",gigaminx:"d f 0.64 f 0.82",teraminx:"d f 0.64 f 0.76 f 0.88",petaminx:"d f 0.64 f 0.73 f 0.82 f 0.91",examinx:"d f 0.64 f 0.712 f 0.784 f 0.856 f 0.928",zetaminx:"d f 0.64 f 0.7 f 0.76 f 0.82 f 0.88 f 0.94",yottaminx:"d f 0.64 f 0.6914 f 0.7429 f 0.7943 f 0.8457 f 0.8971 f 0.9486",pentultimate:"d f 0","master pentultimate":"d f 0.1","elite pentultimate":"d f 0 f 0.145905",starminx:"d v 0.937962370425399","starminx 2":"d f 0.23606797749979","pyraminx crystal":"d f 0.447213595499989",chopasaurus:"d v 0","big chop":"d e 0","skewb diamond":"o f 0",FTO:"o f 0.333333333333333","master FTO":"o f 0.5 f 0","Christopher's jewel":"o v 0.577350269189626",octastar:"o e 0","Trajber's octahedron":"o v 0.433012701892219","radio chop":"i f 0",icosamate:"i v 0","icosahedron 2":"i v 0.18759247376021","icosahedron 3":"i v 0.18759247376021 e 0","icosahedron static faces":"i v 0.84","icosahedron moving faces":"i v 0.73","Eitan's star":"i f 0.61803398874989","2x2x2 + dino":"c f 0 v 0.577350269189626","2x2x2 + little chop":"c f 0 e 0","dino + little chop":"c v 0.577350269189626 e 0","2x2x2 + dino + little chop":"c f 0 v 0.577350269189626 e 0","megaminx + chopasaurus":"d f 0.61803398875 v 0","starminx combo":"d f 0.23606797749979 v 0.937962370425399"}});function gi(e){let t=new W(0,0,0,0);for(let r=0;r<e.length;r++)t=t.sum(e[r]);return t.smul(1/e.length)}function Cf(e,t,r,n){let o=n[e].intersect3(n[t],n[r]);if(!o)return o;for(let l=0;l<n.length;l++)if(l!==e&&l!==t&&l!==r){let i=n[l].b*o.b+n[l].c*o.c+n[l].d*o.d;if(n[l].a>0&&i>n[l].a||n[l].a<0&&i<n[l].a)return!1}return o}var W,pi=y(()=>{"use strict";W=class{constructor(t,r,n,o){this.a=t;this.b=r;this.c=n;this.d=o}mul(t){return new W(this.a*t.a-this.b*t.b-this.c*t.c-this.d*t.d,this.a*t.b+this.b*t.a+this.c*t.d-this.d*t.c,this.a*t.c-this.b*t.d+this.c*t.a+this.d*t.b,this.a*t.d+this.b*t.c-this.c*t.b+this.d*t.a)}toString(){return\`Q[\${this.a},\${this.b},\${this.c},\${this.d}]\`}dist(t){return Math.hypot(this.a-t.a,this.b-t.b,this.c-t.c,this.d-t.d)}len(){return Math.hypot(this.a,this.b,this.c,this.d)}cross(t){return new W(0,this.c*t.d-this.d*t.c,this.d*t.b-this.b*t.d,this.b*t.c-this.c*t.b)}dot(t){return this.b*t.b+this.c*t.c+this.d*t.d}normalize(){let t=Math.sqrt(this.dot(this));return new W(this.a/t,this.b/t,this.c/t,this.d/t)}makenormal(){return new W(0,this.b,this.c,this.d).normalize()}normalizeplane(){let t=Math.hypot(this.b,this.c,this.d);return new W(this.a/t,this.b/t,this.c/t,this.d/t)}smul(t){return new W(this.a*t,this.b*t,this.c*t,this.d*t)}sum(t){return new W(this.a+t.a,this.b+t.b,this.c+t.c,this.d+t.d)}sub(t){return new W(this.a-t.a,this.b-t.b,this.c-t.c,this.d-t.d)}angle(){return 2*Math.acos(this.a)}invrot(){return new W(this.a,-this.b,-this.c,-this.d)}det3x3(t,r,n,o,l,i,s,a,f){return t*(l*f-i*a)+r*(i*s-o*f)+n*(o*a-l*s)}rotateplane(t){let r=t.mul(new W(0,this.b,this.c,this.d)).mul(t.invrot());return r.a=this.a,r}orthogonal(){let t=Math.abs(this.b),r=Math.abs(this.c),n=Math.abs(this.d);return t<r&&t<n?this.cross(new W(0,1,0,0)).normalize():r<t&&r<n?this.cross(new W(0,0,1,0)).normalize():this.cross(new W(0,0,0,1)).normalize()}pointrotation(t){let r=this.normalize();if(t=t.normalize(),r.sub(t).len()<1e-9)return new W(1,0,0,0);let n=r.sum(t);n.len()<1e-9?n=n.orthogonal():n=n.normalize();let o=r.cross(n);return o.a=r.dot(n),o}unproject(t){return this.sum(t.smul(-this.dot(t)/(this.len()*t.len())))}rotatepoint(t){return t.mul(this).mul(t.invrot())}rotateface(t){return t.map(r=>r.rotatepoint(this))}intersect3(t,r){let n=this.det3x3(this.b,this.c,this.d,t.b,t.c,t.d,r.b,r.c,r.d);return Math.abs(n)<1e-9?!1:new W(0,this.det3x3(this.a,this.c,this.d,t.a,t.c,t.d,r.a,r.c,r.d)/n,this.det3x3(this.b,this.a,this.d,t.b,t.a,t.d,r.b,r.a,r.d)/n,this.det3x3(this.b,this.c,this.a,t.b,t.c,t.a,r.b,r.c,r.a)/n)}side(t){return t>1e-9?1:t<-1e-9?-1:0}cutface(t){let r=this.a,n=0,o=null;for(let l=0;l<t.length;l++)n|=1<<this.side(t[l].dot(this)-r)+1;if((n&5)===5){o=[];let l=t.map(i=>this.side(i.dot(this)-r));for(let i=-1;i<=1;i+=2){let s=[];for(let a=0;a<t.length;a++){(l[a]===i||l[a]===0)&&s.push(t[a]);let f=(a+1)%t.length;if(l[a]+l[f]===0&&l[a]!==0){let u=t[a].dot(this)-r,g=t[f].dot(this)-r,p=u/(u-g),c=t[a].smul(1-p).sum(t[f].smul(p));s.push(c)}}o.push(s)}}return o}cutfaces(t){let r=[];for(let n=0;n<t.length;n++){let o=t[n],l=this.cutface(o);l?(r.push(l[0]),r.push(l[1])):r.push(o)}return r}faceside(t){let r=this.a;for(let n=0;n<t.length;n++){let o=this.side(t[n].dot(this)-r);if(o!==0)return o}throw new Error("Could not determine side of plane in faceside")}sameplane(t){let r=this.normalize(),n=t.normalize();return r.dist(n)<1e-9||r.dist(n.smul(-1))<1e-9}makecut(t){return new W(t,this.b,this.c,this.d)}}});function zf(){let e=Math.sqrt(.5);return[new W(e,e,0,0),new W(e,0,e,0)]}function Pf(){return[new W(.5,.5,.5,.5),new W(.5,.5,.5,-.5)]}function Nf(){let e=2*Math.PI/10,t=.5+.3*Math.sqrt(5),r=.5+.1*Math.sqrt(5),n=Math.sqrt(t*t+r*r);return t/=n,r/=n,[new W(Math.cos(e),t*Math.sin(e),r*Math.sin(e),0),new W(.5,.5,.5,.5)]}function Mf(){let e=.16666666666666666+Math.sqrt(5)/6,t=2/3+Math.sqrt(5)/3,r=Math.sqrt(e*e+t*t);e/=r,t/=r;let n=2*Math.PI/6;return[new W(Math.cos(n),e*Math.sin(n),t*Math.sin(n),0),new W(Math.cos(n),-e*Math.sin(n),t*Math.sin(n),0)]}function Tf(){let e=Math.sqrt(.5);return[new W(.5,.5,.5,.5),new W(e,0,0,e)]}function Gf(e){let t=[new W(1,0,0,0)];for(let r=0;r<t.length;r++)for(let n=0;n<e.length;n++){let o=e[n].mul(t[r]),l=o.smul(-1),i=!1;for(let s=0;s<t.length;s++)if(o.dist(t[s])<ci||l.dist(t[s])<ci){i=!0;break}i||t.push(o)}return t}function L0(e,t){let r=[],n=[];for(let o=0;o<t.length;o++){let l=e.rotateplane(t[o]),i=!1;for(let s=0;s<r.length;s++)if(l.dist(r[s])<ci){i=!0;break}i||(r.push(l),n.push(t[o]))}return n}function B0(e){let t=[];for(let r=1;r<e.length;r++)for(let n=r+1;n<e.length;n++){let o=Cf(0,r,n,e);if(o){let l=!1;for(let i=0;i<t.length;i++)if(o.dist(t[i])<ci){l=!0;break}l||t.push(o)}}for(;;){let r=!1;for(let n=0;n<t.length;n++){let o=(n+1)%t.length;if(e[0].dot(t[n].cross(t[o]))<0){let l=t[n];t[n]=t[o],t[o]=l,r=!0}}if(!r)break}return t}var ci,Of=y(()=>{"use strict";pi();ci=1e-9});function mi(e,t){let r=e[0].p.length,n=wf(r),o=[],l=[],i=[],s=[],a=[];function f(c){for(let L=c.p.length-1;L>=0;L--){let m=c.p[L];if(m!==L){if(!o[L][m])return!1;c=c.mul(l[L][m])}}return!0}function u(c,L,m){s[c].push(L),a[c].push(m);for(let R=0;R<o[c].length;R++)o[c][R]&&g(c,o[c][R].mul(L),m+i[c][R])}function g(c,L,m){let R=L.p[c];if(!o[c][R]){o[c][R]=L,l[c][R]=L.inv(),i[c][R]=m;for(let A=0;A<s[c].length;A++)g(c,L.mul(s[c][A]),m+a[c][A]);return}let F=L.mul(l[c][R]);f(F)||u(c-1,F,m+i[c][R])}function p(){o=[],l=[],s=[],i=[],a=[];for(let m=0;m<r;m++)o.push([]),l.push([]),i.push([]),s.push([]),a.push([]),o[m][m]=n,l[m][m]=n,i[m][m]=0;let c=0,L=1n;for(let m=0;m<e.length;m++){u(r-1,e[m],1),L=1n;let R=0,F=0,A=[],U=new R0;for(let b=0;b<r;b++){let S=0,N=0;for(let z=0;z<r;z++)o[b][z]&&(S++,N+=i[b][z],b!==z&&c++);R+=s[b].length,L*=BigInt(S),S>1&&U.multiply(S);let J=N/S;A.push(J),F+=J}t(\`\${m}: sz \${L} T \${R} sol \${F} none \${c} mults \${U.toString()}\`)}return L}return p()}var R0,d0=y(()=>{"use strict";ii();R0=class{constructor(){this.mult=[]}multiply(t){for(let r=2;r*r<=t;r++)for(;t%r===0;)this.mult[r]!==void 0?this.mult[r]++:this.mult[r]=1,t/=r;t>1&&(this.mult[t]!==void 0?this.mult[t]++:this.mult[t]=1)}toString(){let t="";for(let r=0;r<this.mult.length;r++)this.mult[r]!==void 0&&(t!==""&&(t+="*"),t+=r,this.mult[r]>1&&(t+=\`^\${this.mult[r]}\`));return t}}});function fL(e,t){let r=[];for(let n of e)for(let o of t)r.push(o.rotate(n));return r}function pL(){return{4:[["F","D","L","R"]],6:[["F","D","L","U","R"],["R","F","","B",""]],8:[["F","D","L","R"],["D","F","BR",""],["BR","D","","BB"],["BB","BR","U","BL"]],12:[["U","F","","","",""],["F","U","R","C","A","L"],["R","F","","","E",""],["E","R","","BF","",""],["BF","E","BR","BL","I","D"]],20:[["R","C","F","E"],["F","R","L","U"],["L","F","A",""],["E","R","G","I"],["I","E","S","H"],["S","I","J","B"],["B","S","K","D"],["K","B","M","O"],["O","K","P","N"],["P","O","Q",""]]}}function cL(){return{4:{F:"#00ff00",D:"#ffff00",L:"#ff0000",R:"#0000ff"},6:{U:"#ffffff",F:"#00ff00",R:"#ff0000",D:"#ffff00",B:"#0000ff",L:"#ff8000"},8:{U:"#ffffff",F:"#ff0000",R:"#00bb00",D:"#ffff00",BB:"#1122ff",L:"#9524c5",BL:"#ff8800",BR:"#aaaaaa"},12:{U:"#ffffff",F:"#006633",R:"#ff0000",C:"#ffffd0",A:"#3399ff",L:"#660099",E:"#ff66cc",BF:"#99ff00",BR:"#0000ff",BL:"#ffff00",I:"#ff6633",D:"#999999"},20:{R:"#db69f0",C:"#178fde",F:"#23238b",E:"#9cc726",L:"#2c212d",U:"#177fa7",A:"#e0de7f",G:"#2b57c0",I:"#41126b",S:"#4b8c28",H:"#7c098d",J:"#7fe7b4",B:"#85fb74",K:"#3f4bc3",D:"#0ff555",M:"#f1c2c8",O:"#58d340",P:"#c514f2",N:"#14494e",Q:"#8b1be1"}}}function LL(){return{4:[["FLR",[0,1,0]],["F",[0,0,1]]],6:[["U",[0,1,0]],["F",[0,0,1]]],8:[["U",[0,1,0]],["F",[0,0,1]]],12:[["U",[0,1,0]],["F",[0,0,1]]],20:[["GUQMJ",[0,1,0]],["F",[0,0,1]]]}}function Li(e,t){for(let r=0;r<e.length;r++)if(e[r][0].dist(t)<Se)return r;throw new Error("Element not found")}function If(){return ui}function Wf(e){return ui[e]}function tl(e){let t=e.split(/ /).filter(Boolean);if(t.length%2===0)return null;let r=t[0];if(r!=="o"&&r!=="c"&&r!=="i"&&r!=="d"&&r!=="t")return null;let n=[];for(let o=1;o<t.length;o+=2){if(t[o]!=="f"&&t[o]!=="v"&&t[o]!=="e")return null;n.push({cutType:t[o],distance:parseFloat(t[o+1])})}return{shape:r,cuts:n}}function F0(e,t={}){let r=tl(e);if(r===null)throw new Error("Could not parse the puzzle description");let n=new nl(r,Object.assign({},{allMoves:!0},t));return n.allstickers(),n.genperms(),n}function Hn(e,t){return F0(ui[e],t)}function BL(e,t,r){let n=!1;r-t[1]<t[0]&&(e=[e[2],e[3],e[0],e[1]],t=[r-t[1],r-t[0]],n=!0);let o=e[0],l="";if(t[0]===0&&t[1]===r)o=o+"v";else if(t[0]===t[1])t[1]>0&&(l=String(t[1]+1));else if(t[0]===0)o=o.toLowerCase(),t[1]>1&&(l=String(t[1]+1));else throw new Error(\`We only support slice and outer block moves right now. \${t}\`);return[l+o,n]}function RL(e,t){let r=[],n=0;for(;n<e.length;){n>0&&n<e.length&&e[n]==="_"&&n++;let o="";for(let l of t)e.substr(n).startsWith(l[1])&&l[1].length>o.length&&(o=l[1]);if(o!=="")r.push(o),n+=o.length;else throw new Error("Could not split "+e+" into face names.")}return r}function Bi(e,t){return[e.b/t,-e.c/t,e.d/t]}function h0(e,t){let r=[],n=e.length;for(let o=0;o<n;o++){let l=Bi(e.get(n-o-1),t);r[3*o]=l[0],r[3*o+1]=l[1],r[3*o+2]=l[2]}return r}var Fr,Vn,Se,uL,gL,mL,Kf,Qf,nl,Dr,rl=y(()=>{"use strict";Be();pf();u0();g0();ii();_f();kf();Of();pi();d0();Fr=class{constructor(t){this.coords=new Array(t.length*3);for(let r=0;r<t.length;r++)this.coords[3*r]=t[r].b,this.coords[3*r+1]=t[r].c,this.coords[3*r+2]=t[r].d;this.length=t.length}get(t){return new W(0,this.coords[3*t],this.coords[3*t+1],this.coords[3*t+2])}centermass(){let t=0,r=0,n=0;for(let o=0;o<this.length;o++)t+=this.coords[3*o],r+=this.coords[3*o+1],n+=this.coords[3*o+2];return new W(0,t/this.length,r/this.length,n/this.length)}rotate(t){let r=[];for(let n=0;n<this.length;n++)r.push(this.get(n).rotatepoint(t));return new Fr(r)}rotateforward(){let t=[];for(let r=1;r<this.length;r++)t.push(this.get(r));return t.push(this.get(0)),new Fr(t)}},Vn=class{constructor(t,r,n){this.face=t;this.left=r;this.right=n}split(t){let r=t.cutface(this.face);return r!==null&&(this.left===void 0?(this.left=new Vn(r[0]),this.right=new Vn(r[1])):(this.left=this.left?.split(t),this.right=this.right?.split(t))),this}collect(t,r){return this.left===void 0?t.push(new Fr(this.face)):r?(this.left?.collect(t,!1),this.right?.collect(t,!0)):(this.right?.collect(t,!1),this.left?.collect(t,!0)),t}};Se=1e-9,uL="PuzzleGeometry 0.1 Copyright 2018 Tomas Rokicki.",gL=!1;mL={4:{v:["DFR","DLF","DRL","FLR"],e:["FR","LF","DF","DL","RD","RL"],c:["DF","FD","RL","LR"]},6:{v:["URF","UBR","ULB","UFL","DFR","DRB","DBL","DLF"],e:["UF","UR","UB","UL","DF","DR","DB","DL","FR","FL","BR","BL"],c:["UB","LU","FU","RU","BU","DF"]},8:{v:["UBBBRR","URFL","ULBLBB","DBRBBBL","DBLLF","DFRBR"],e:["UL","UBB","UR","BRD","BLD","FD","BRR","FR","FL","BLL","BLBB","BRBB"],c:["BBU","LU","RU","BRD","FD","BLD","DF","UBB"]},12:{v:["URF","UFL","ULBL","UBLBR","UBRR","DEBF","DBFI","DIA","DAC","DCE","LAI","ALF","FCA","CFR","REC","ERBR","BRBFE","BFBRBL","BLIBF","IBLL"],e:["UF","UR","UBR","UBL","UL","ER","EBR","EBF","ED","EC","IBF","IBL","IL","IA","ID","AC","CF","FA","BFBR","BRBL","BLBF","CD","AD","AL","FL","FR","CR","BFD","BRR","BLL"],c:["UF","FU","DBF","BFD","AD","CD","BRU","BLU","LA","RA","EBR","IBL"]},20:{v:["FLPQU","FUGER","FRCAL","HCREI","ISBDH","JSIEG","BSJMK","MQPOK","ONDBK","NOPLA","UQMJG","DNACH"],e:["FU","FL","FR","EG","ER","EI","SJ","SI","SB","KM","KB","KO","PQ","PO","PL","UG","JG","MQ","UQ","HC","HD","ND","NA","JM","CA","AL","CR","HI","DB","NO"],c:["FU","UF","GE","EG","JS","SJ","MK","KM","QP","PQ","LA","AL","RC","CR","IH","HI","BD","DB","ON","NO"]}};Kf=["c","t","o","d","i"],Qf=["f","v","e"];nl=class{constructor(t,r){this.puzzleDescription=t;this.cmovesbyslice=[];this.duplicatedFaces=[];this.duplicatedCubies=[];this.fixedCubie=-1;this.net=[];this.colors=[];this.notationMapper=new on;this.addNotationMapper="";this.setReidOrder=!1;let n="genperms";this.options=new li(r),this.options.verbosity>0&&console.log(this.header("# ")),this.create(t)}create(t){let{shape:r,cuts:n}=t;this.moveplanes=[],this.moveplanes2=[],this.faces=[],this.cubies=[];let o=null;switch(r){case"c":o=zf();break;case"o":o=Tf();break;case"i":o=Mf();break;case"t":o=Pf();break;case"d":o=Nf();break;default:throw new Error("Bad shape argument: "+r)}this.rotations=Gf(o),this.options.verbosity&&console.log("# Rotations: "+this.rotations.length);let l=o[0];this.baseplanerot=L0(l,this.rotations);let i=this.baseplanerot.map(D=>l.rotateplane(D));this.baseplanes=i,this.baseFaceCount=i.length;let s=pL()[i.length];this.net=s,this.colors=cL()[i.length],this.options.verbosity>0&&console.log("# Base planes: "+i.length);let a=B0(i),f=new W(0,0,0,0);this.options.verbosity>0&&console.log("# Face vertices: "+a.length);let u=i[0].makenormal(),g=a[0].sum(a[1]).makenormal(),p=a[0].makenormal(),c=new W(1,u.b,u.c,u.d);this.options.verbosity>0&&console.log("# Boundary is "+c);let m=L0(c,this.rotations).map(D=>c.rotateplane(D)),R=B0(m);this.edgedistance=R[0].sum(R[1]).smul(.5).dist(f),this.vertexdistance=R[0].dist(f);let F=[],A=[],U=!1,b=!1,S=!1;for(let D of n){let _=null,O=0;switch(D.cutType){case"f":_=u,O=1,U=!0;break;case"v":_=p,O=this.vertexdistance,S=!0;break;case"e":_=g,O=this.edgedistance,b=!0;break;default:throw new Error("Bad cut argument: "+D.cutType)}F.push(_.makecut(D.distance)),A.push(D.distance<O)}this.options.addRotations&&(U||F.push(u.makecut(10)),S||F.push(p.makecut(10)),b||F.push(g.makecut(10))),this.basefaces=[];for(let D of this.baseplanerot){let _=D.rotateface(R);this.basefaces.push(new Fr(_))}let N=[],J=[],z=[],Q=[],x=R.length;function k(D,_,O){for(let T of D)if(T[0].dist(_)<Se){T.push(O);return}D.push([_,O])}for(let D=0;D<this.baseplanerot.length;D++){let _=this.baseplanerot[D].rotateface(R);for(let O=0;O<_.length;O++){let T=(O+1)%_.length,$=_[O].sum(_[T]).smul(.5);k(Q,$,D)}}let P=[];for(let D=0;D<this.baseplanerot.length;D++){let _=this.baseplanerot[D].rotateface(R),O=[];for(let T=0;T<_.length;T++){let $=(T+1)%_.length,se=_[T].sum(_[$]).smul(.5),Ne=Q[Li(Q,se)];if(D===Ne[1])O.push(Ne[2]);else if(D===Ne[2])O.push(Ne[1]);else throw new Error("Could not find edge")}P.push(O)}let w={},v=[];v.push(s[0][0]),w[s[0][0]]=0,v[P[0][0]]=s[0][1],w[s[0][1]]=P[0][0];for(let D of s){let _=D[0],O=w[_];if(O===void 0)throw new Error("Bad edge description; first edge not connected");let T=-1;for(let $=0;$<P[O].length;$++){let se=v[P[O][$]];if(se!==void 0&&se===D[1]){T=$;break}}if(T<0)throw new Error("First element of a net not known");for(let $=2;$<D.length;$++){if(D[$]==="")continue;let se=P[O][($+T-1)%x],Ne=v[se];if(Ne!==void 0&&Ne!==D[$])throw new Error("Face mismatch in net");v[se]=D[$],w[D[$]]=se}}for(let D=0;D<this.baseplanerot.length;D++){let _=this.baseplanerot[D].rotateface(R),O=c.rotateplane(this.baseplanerot[D]),T=v[D];N.push([_,T]),J.push([O,T])}for(let D=0;D<this.baseplanerot.length;D++){let _=this.baseplanerot[D].rotateface(R),O=v[D];for(let T=0;T<_.length;T++){let $=(T+1)%_.length,se=_[T].sum(_[$]).smul(.5),Ne=(T+2)%_.length,mm=_[$].sum(_[Ne]).smul(.5),Lm=Li(Q,se),Bm=Li(Q,mm);k(z,_[$],[O,Bm,Lm])}}this.swizzler=new Kn(N.map(D=>D[1]));let M=this.swizzler.prefixFree?"":"_",j=mL[this.baseFaceCount],q=[];for(let D=0;D<this.baseFaceCount;D++)q[1<<D]=D;{let D=j.v;for(let _ of D){let O=this.swizzler.splitByFaceNames(_),T=0;for(let $ of O)T|=1<<$;q[T]=O[0]}}{let D=j.e;for(let _ of D){let O=this.swizzler.splitByFaceNames(_),T=0;for(let $ of O)T|=1<<$;q[T]=O[0]}}{let D=j.c;for(let _ of D){let O=this.swizzler.splitByFaceNames(_),T=1<<O[0]|1<<this.baseFaceCount;q[T]=O[1]}}for(let D=0;D<Q.length;D++){if(Q[D].length!==3)throw new Error("Bad length in edge names "+Q[D]);let _=Q[D][1],O=Q[D][2],T=v[_],$=v[O],se=1<<_|1<<O;q[se]==_?T=T+M+$:T=$+M+T,Q[D]=[Q[D][0],T]}for(let D=0;D<z.length;D++){let _=0;if(z[D].length<4)throw new Error("Bad length in vertex names");for(let se=1;se<z[D].length;se++)_|=1<<w[z[D][se][0]];let O=q[_],T=-1;for(let se=1;se<z[D].length;se++)O===w[z[D][se][0]]&&(T=se);if(T<0)throw new Error("Internal error; couldn't find face name when fixing corners");let $="";for(let se=1;se<z[D].length;se++){se===1?$=z[D][T][0]:$=$+M+z[D][T][0];for(let Ne=1;Ne<z[D].length;Ne++)if(z[D][T][1]===z[D][Ne][2]){T=Ne;break}}z[D]=[z[D][0],$]}this.markedface=q,this.options.verbosity>1&&(console.log("# Face names: "+N.map(D=>D[1]).join(" ")),console.log("# Edge names: "+Q.map(D=>D[1]).join(" ")),console.log("# Vertex names: "+z.map(D=>D[1]).join(" ")));let ie=[];for(let D of J)ie.push([D[0].makenormal(),D[1],"f"]);for(let D of Q)ie.push([D[0].makenormal(),D[1],"e"]);for(let D of z)ie.push([D[0].makenormal(),D[1],"v"]);this.facenames=N,this.faceplanes=J,this.edgenames=Q,this.vertexnames=z,this.geonormals=ie;let de=ie.map(D=>D[1]);this.swizzler.setGripNames(de),this.options.verbosity>0&&console.log("# Distances: face "+1+" edge "+this.edgedistance+" vertex "+this.vertexdistance);for(let D=0;D<F.length;D++)for(let _ of this.rotations){let O=F[D].rotateplane(_),T=!1;for(let $ of this.moveplanes)if(O.sameplane($)){T=!0;break}T||(this.moveplanes.push(O),A[D]&&this.moveplanes2.push(O))}let be=new Vn(R),Ye=this.moveplanes2.slice(),St=31;for(let D=0;D<Ye.length;D++){let _=D+Math.floor((Ye.length-D)*(St/65536));be=be.split(Ye[_]),Ye[_]=Ye[D],St=(St*1657+101)%65536}let Le=be.collect([],!0);this.faces=Le,this.options.verbosity>0&&console.log("# Faces is now "+Le.length),this.stickersperface=Le.length;let dt=[],lt=gi(R);for(let D of this.rotations){let _=D.rotateface(R);lt.dist(gi(_))<Se&&dt.push(D)}let ct=new Array(Le.length),ze=[];for(let D=0;D<Le.length;D++){let _=Le[D].centermass();ze.push([lt.dist(_),_,D])}ze.sort((D,_)=>D[0]-_[0]);for(let D=0;D<Le.length;D++){let _=ze[D][2];if(!ct[_]){ct[_]=!0;for(let O of dt){let T=Le[_].rotate(O),$=T.centermass();for(let se=D+1;se<Le.length&&!(ze[se][0]-ze[D][0]>Se);se++){let Ne=ze[se][2];if(!ct[Ne]&&$.dist(ze[se][1])<Se){ct[Ne]=!0,Le[Ne]=T;break}}}}}this.shortedge=1e99;for(let D of Le)for(let _=0;_<D.length;_++){let O=(_+1)%D.length,T=D.get(_).dist(D.get(O));T<this.shortedge&&(this.shortedge=T)}this.options.verbosity>0&&console.log("# Short edge is "+this.shortedge),r==="c"&&U&&!b&&!S&&(this.addNotationMapper="NxNxNCubeMapper",this.setReidOrder=!0),r==="c"&&S&&!U&&!b&&(this.addNotationMapper="SkewbMapper"),r==="t"&&(S||U)&&!b&&(this.addNotationMapper="PyraminxOrTetraminxMapper"),r==="o"&&U&&(this.notationMapper=new Qn(this.swizzler,new Kn(["F","D","L","BL","R","U","BR","B"])),!b&&!S&&(this.addNotationMapper="FTOMapper")),r==="d"&&U&&(this.addNotationMapper="MegaminxMapper",this.notationMapper=new Qn(this.swizzler,new Kn(["U","F","L","BL","BR","R","FR","FL","DL","B","DR","D"])))}keyface(t){return this.keyface2(t.centermass())}keyface2(t){let r="",n=String.fromCharCode;for(let o of this.moveplanesets)if(o.length>0){let l=t.dot(o[0]),i=0,s=1;for(;s*2<=o.length;)s*=2;for(;s>0;s>>=1)i+s<=o.length&&l>o[i+s-1].a&&(i+=s);if(i<47)r=r+n(33+i);else if(i<47+47*47)r=r+n(33+47+Math.floor(i/47)-1)+n(33+i%47);else if(i<47+47*47+47*47*47)r=r+n(33+47+Math.floor((i-47)/(47*47)-1))+n(33+47+Math.floor((i-47)/47)%47)+n(33+i%47);else throw Error("Too many slices for cubie encoding")}return r}keyface3(t){let r=t.centermass(),n=[];for(let o of this.moveplanesets)if(o.length>0){let l=r.dot(o[0]),i=0,s=1;for(;s*2<=o.length;)s*=2;for(;s>0;s>>=1)i+s<=o.length&&l>o[i+s-1].a&&(i+=s);n.push(i)}return n}findface(t){let r=this.keyface2(t),n=this.facelisthash.get(r);if(n.length===1)return n[0];for(let o=0;o+1<n.length;o++){let l=this.facelisthash.get(r)[o];if(Math.abs(t.dist(this.facecentermass[l]))<Se)return l}return n[n.length-1]}project2d(t,r,n){let o=this.facenames[t][0],l=(r+1)%o.length,i=this.baseplanes[t],s=o[l].sub(o[r]),a=s.len();s=s.normalize();let f=s.cross(i).normalize(),u=n[1].sub(n[0]),g=u.len()/a;u=u.normalize();let p=u.b,c=u.c,L=s.smul(p).sub(f.smul(c)).smul(g),m=f.smul(p).sum(s.smul(c)).smul(g),R=new W(0,n[0].b-L.dot(o[r]),n[0].c-m.dot(o[r]),0);return[L,m,R]}allstickers(){let t="allstickers";this.faces=fL(this.baseplanerot,this.faces),this.options.verbosity>0&&console.log("# Total stickers is now "+this.faces.length),this.facecentermass=new Array(this.faces.length);for(let x=0;x<this.faces.length;x++)this.facecentermass[x]=this.faces[x].centermass();let r=[],n=[];for(let x of this.moveplanes){let k=x.makenormal(),P=!1;for(let w of n)k.sameplane(w.makenormal())&&(P=!0);P||(n.push(k),r.push([]))}for(let x of this.moveplanes2){let k=x.makenormal();for(let P=0;P<n.length;P++)if(k.sameplane(n[P])){r[P].push(x);break}}for(let x=0;x<r.length;x++){let k=r[x].map(w=>w.normalizeplane()),P=n[x];for(let w=0;w<k.length;w++)k[w].makenormal().dist(P)>Se&&(k[w]=k[w].smul(-1));k.sort((w,v)=>w.a-v.a),r[x]=k}this.moveplanesets=r,this.moveplanenormals=n;let o=r.map(x=>x.length);this.options.verbosity>0&&console.log("# Move plane sets: "+o);let l=[];for(let x=0;x<r.length;x++)l.push([]);for(let x of this.rotations){if(Math.abs(Math.abs(x.a)-1)<Se)continue;let k=x.makenormal();for(let P=0;P<r.length;P++)if(k.sameplane(n[P])){l[P].push(x);break}}this.moverotations=l;for(let x=0;x<l.length;x++){let k=l[x],P=k[0].makenormal();for(let w=0;w<k.length;w++)P.dist(k[w].makenormal())>Se&&(k[w]=k[w].smul(-1));k.sort((w,v)=>w.angle()-v.angle()),l[x][0].dot(n[x])<0&&k.reverse()}let i=l.map(x=>1+x.length);this.movesetorders=i;let s=[],a="?";for(let x=0;x<r.length;x++){let k=n[x],P=null,w=null;for(let v of this.geonormals){let M=k.dot(v[0]);Math.abs(M-1)<Se?(w=[v[1],v[2]],a=v[2]):Math.abs(M+1)<Se&&(P=[v[1],v[2]],a=v[2])}if(w===null||P===null)throw new Error("Saw positive or negative sides as null");s.push([w[0],w[1],P[0],P[1],1+r[x].length]),this.addNotationMapper==="NxNxNCubeMapper"&&a==="f"&&(this.notationMapper=new Xo(1+r[x].length),this.addNotationMapper=""),this.addNotationMapper==="SkewbMapper"&&r[0].length===1&&(this.notationMapper=new el(this.swizzler),this.addNotationMapper=""),this.addNotationMapper==="PyraminxOrTetraminxMapper"&&(r[0].length===2&&r[0][0].a===.333333333333333&&r[0][1].a===1.66666666666667?(this.notationMapper=new jn(this.swizzler),this.addNotationMapper=""):(this.notationMapper=new $o(this.swizzler),this.addNotationMapper="")),this.addNotationMapper==="MegaminxMapper"&&a==="f"&&(1+r[x].length===3&&(this.notationMapper=new Yo(this.notationMapper)),this.addNotationMapper=""),this.addNotationMapper==="FTOMapper"&&a==="f"&&(1+r[x].length===3&&(this.notationMapper=new Jo(this.notationMapper,this.swizzler)),this.addNotationMapper="")}this.movesetgeos=s;let f=new Map,u=this.faces;for(let x=0;x<u.length;x++){let k=u[x],P=this.keyface(k);if(!f.get(P))f.set(P,[x]);else{let w=f.get(P);if(w.push(x),w.length===this.baseFaceCount){this.options.verbosity>0&&console.log("# Splitting core.");for(let v=0;v<w.length;v++){let M=P+" "+v;f.set(M,[w[v]])}}}}this.facelisthash=f,this.options.verbosity>0&&console.log("# Cubies: "+f.size);let g=[],p=[],c=[];for(let x of f.values())if(x.length!==this.baseFaceCount){if(x.length>1){let k=x.map(j=>u[j].centermass()),P=gi(k);for(let j=0;x.length>2;j++){let q=!1;for(let ie=0;ie<x.length;ie++){let de=(ie+1)%x.length;if(P.dot(k[ie].cross(k[de]))<0){let be=k[ie];k[ie]=k[de],k[de]=be;let Ye=x[ie];x[ie]=x[de],x[de]=Ye,q=!0}}if(!q)break;if(j>1e3)throw new Error("Bad epsilon math; too close to border")}let w=0;for(let j of x)w|=1<<Math.floor(j/this.stickersperface);let v=this.markedface[w],M=-1;for(let j=0;j<x.length;j++)Math.floor(x[j]/this.stickersperface)===v&&(M=j);if(M<0)throw new Error("Could not find marked face in list");if(M!==0){let j=x.slice();for(let q=0;q<x.length;q++)x[q]=j[(M+q)%x.length]}}for(let k=0;k<x.length;k++){let P=x[k];p[P]=g.length,c[P]=k}g.push(x)}this.cubies=g,this.facetocubie=p,this.facetoord=c;let L=["?","CENTERS","EDGES","CORNERS","C4RNER","C5RNER"],m=[],R=[0,0,0,0,0,0],F=[],A=[],U=0,b=[],S=[],N=[],J=[],z=x=>g[x].map(k=>this.getfaceindex(k)).join(" "),Q=[];for(let x=0;x<g.length;x++){let k=g[x];if(k.length===0||A[x])continue;let P={},w=0;N.push(0),Q.push([]);let v=k.length,M=R[v]++,j=L[v];(j===void 0||v===this.baseFaceCount)&&(j="CORE"),j=j+(M===0?"":M+1),m[U]=j,F[U]=v;let q=[x],ie=0;for(A[x]=!0;ie<q.length;){let de=q[ie++],be=z(de);if((k.length>1||P[be]===void 0)&&(P[be]=w++),J[de]=P[be],b[de]=U,Q[U].push(de),S[de]=N[U]++,q.length<this.rotations.length){let Ye=this.facecentermass[g[de][0]];for(let St of l){let Le=this.facetocubie[this.findface(Ye.rotatepoint(St[0]))];A[Le]||(q.push(Le),A[Le]=!0)}}}U++}if(this.setReidOrder&&4<=this.stickersperface&&this.stickersperface<=9){let x=[["UF","UR","UB","UL","DF","DR","DB","DL","FR","FL","BR","BL"],["UFR","URB","UBL","ULF","DRF","DFL","DLB","DBR"],["U","L","F","R","B","D"]],k={};for(let P of x)for(let w=0;w<P.length;w++){let v=0;for(let M=0;M<P[w].length;M++)v|=1<<P[w].charCodeAt(M)-65;k[v]=w}for(let P of Q)for(let w of P){let v=0;for(let M of g[w])v|=1<<this.facenames[this.getfaceindex(M)][1].charCodeAt(0)-65;S[w]=k[v]}}if(this.cubiesetnums=b,this.cubieordnums=S,this.cubiesetnames=m,this.cubieords=N,this.orbitoris=F,this.cubievaluemap=J,this.cubiesetcubies=Q,this.options.fixedPieceType!==null){for(let x=0;x<g.length;x++)if(this.options.fixedPieceType==="v"&&g[x].length>2||this.options.fixedPieceType==="e"&&g[x].length===2||this.options.fixedPieceType==="f"&&g[x].length===1){this.fixedCubie=x;break}if(this.fixedCubie<0)throw new Error("Could not find a cubie of type "+this.options.fixedPieceType+" to fix.")}this.options.verbosity>0&&console.log("# Cubie orbit sizes "+N)}unswizzle(t){let r=this.notationMapper.notationToInternal(t);return r===null?null:r.modified({family:this.swizzler.unswizzle(r.family)})}stringToBlockMove(t){let r=RegExp("^(([0-9]+)-)?([0-9]+)?([^0-9]+)([0-9]+'?)?$"),n=t.match(r);if(n===null)throw new Error("Bad move passed "+t);let o=n[4],l,i;if(n[2]!==void 0){if(n[3]===void 0)throw new Error("Missing second number in range");l=parseInt(n[2],10)}n[3]!==void 0&&(i=parseInt(n[3],10));let s="1",a=1;return n[5]!==void 0&&(s=n[5],s[0]==="'"&&(s="-"+s.substring(1)),a=parseInt(s,10)),new B(new C(o,i,l),a)}parseMove(t){let r=this.notationMapper.notationToInternal(t);if(r===null)throw new Error("Bad move "+t.family);t=r;let n=t.family,o=!1;if(n.endsWith("v")&&n[0]<="Z"){if(t.innerLayer!==void 0||t.outerLayer!==void 0)throw new Error("Cannot use a prefix with full cube rotations");n=n.slice(0,-1),o=!0}n.endsWith("w")&&n[0]<="Z"&&(n=n.slice(0,-1).toLowerCase());let l,i=-1,s=this.swizzler.unswizzle(n),a=!1;for(let g=0;g<this.movesetgeos.length;g++){let p=this.movesetgeos[g];s===p[0]&&(a=!0,l=p,i=g),s===p[2]&&(a=!1,l=p,i=g)}let f=1,u=1;if(n.toUpperCase()!==n&&(u=2),l===void 0)throw new Error("Bad grip in move "+t.family);if(t.outerLayer!==void 0&&(f=t.outerLayer),t.innerLayer!==void 0&&(t.outerLayer===void 0?(u=t.innerLayer,n<="Z"?f=u:f=1):u=t.innerLayer),f--,u--,o&&(f=0,u=this.moveplanesets[i].length),f<0||f>this.moveplanesets[i].length||u<0||u>this.moveplanesets[i].length)throw new Error("Bad slice spec "+f+" "+u+" vs "+this.moveplanesets[i].length);if(!gL&&f===0&&u===this.moveplanesets[i].length&&!o)throw new Error("! full puzzle rotations must be specified with v suffix.");return[void 0,i,f,u,a,t.amount]}parsemove(t){let r=this.parseMove(this.stringToBlockMove(t));return r[0]=t,r}genperms(){let t="genperms";if(this.cmovesbyslice.length>0)return;let r=[];if(this.options.orientCenters){for(let n=0;n<this.cubies.length;n++)if(this.cubies[n].length===1){let o=this.cubies[n][0],l=this.getfaceindex(o),i=this.basefaces[l].centermass();if(i.dist(this.facecentermass[o])<Se){let s=1<<l|1<<this.baseFaceCount,a=this.markedface[s],f=this.baseplanes[a].makenormal(),u=-1,g=-1;for(let L=0;L<this.faces[o].length;L++){let m=this.faces[o].get(L),R=f.dot(m.sub(i));R>u&&(u=R,g=L)}let p=(g+1)%this.faces[o].length;if(Math.abs(f.dot(this.faces[o].get(p).sub(i))-u)<Se&&(g=p),g!=0){let L=[];for(let m=0;m<this.faces[o].length;m++)L.push(this.faces[o].get((m+g)%this.faces[o].length));this.faces[o]=new Fr(L)}let c=this.basefaces[l].length;for(let L=1;L<c;L++)this.cubies[n].push(this.cubies[n][L-1]);this.duplicatedFaces[o]=c,this.duplicatedCubies[n]=c,this.orbitoris[this.cubiesetnums[n]]=c}}}for(let n=0;n<this.moveplanesets.length;n++){let o=this.moveplanesets[n],l=[],i=[o.length+1,0],s=1;for(;s*2<=o.length;)s*=2;for(let u=0;u<this.faces.length;u++){let g=0;if(o.length>0){let p=this.facecentermass[u].dot(o[0]);for(let c=s;c>0;c>>=1)g+c<=o.length&&p>o[g+c-1].a&&(g+=c);g=o.length-g}for(l.push(g);i.length<=g;)i.push(0);i[g]++}let a=new Array(i.length);for(let u=0;u<i.length;u++)a[u]=[];let f=[];for(let u=0;u<this.faces.length;u++){if(l[u]<0)continue;let g=[this.facetocubie[u],this.facetoord[u]],p=this.facecentermass[u],c=p,L=u,m=l[L];for(;;){l[L]=-1;let R=p.rotatepoint(this.moverotations[n][0]);if(R.dist(c)<Se)break;L=this.findface(R),g.push(this.facetocubie[L],this.facetoord[L]),p=R}if(g.length>2&&this.options.orientCenters&&(this.cubies[g[0]].length===1||this.duplicatedCubies[g[0]]>1)&&this.facecentermass[u].dist(this.basefaces[this.getfaceindex(u)].centermass())<Se){let R=this.faces[this.cubies[g[0]][0]];for(let F=0;F<g.length;F+=2){let A=this.faces[this.cubies[g[F]][0]],U=-1;for(let b=0;b<R.length;b++)if(A.get(b).dist(R.get(0))<Se){U=b;break}if(U<0)throw new Error("Couldn't find rotation of center faces; ignoring for now.");g[F+1]=U,R=R.rotate(this.moverotations[n][0])}}if(g.length===2&&this.options.orientCenters)for(let R=1;R<this.movesetorders[n];R++)m===0?g.push(g[0],R):g.push(g[0],(this.movesetorders[n]-R)%this.movesetorders[n]);if(g.length>2&&!f[g[0]]){if(g.length!==2*this.movesetorders[n])throw new Error("Bad length in perm gen");for(let R of g)a[m].push(R)}for(let R=0;R<g.length;R+=2)f[g[R]]=!0}for(let u=0;u<a.length;u++)a[u]=a[u].slice();r.push(a)}if(this.cmovesbyslice=r,this.options.moveList){let n=[];for(let o of this.options.moveList)n.push(this.parsemove(o));this.parsedmovelist=n}this.facelisthash.clear(),this.facecentermass=[]}getboundarygeometry(){return{baseplanes:this.baseplanes,facenames:this.facenames,faceplanes:this.faceplanes,vertexnames:this.vertexnames,edgenames:this.edgenames,geonormals:this.geonormals}}getmovesets(t){let r=this.moveplanesets[t].length,n=[];if(this.parsedmovelist!==void 0)for(let o of this.parsedmovelist)o[1]===t&&(o[4]?n.push([o[2],o[3]]):n.push([r-o[3],r-o[2]]),n.push(o[5]));else if(this.options.vertexMoves&&!this.options.allMoves){let o=this.movesetgeos[t];if(o[1]!==o[3])for(let l=0;l<r;l++)o[1]!=="v"?(this.options.outerBlockMoves?n.push([l+1,r]):n.push([l+1]),n.push(1)):(this.options.outerBlockMoves?n.push([0,l]):n.push([l,l]),n.push(1))}else for(let o=0;o<=r;o++)!this.options.allMoves&&o+o===r||(this.options.outerBlockMoves?o+o>r?n.push([o,r]):n.push([0,o]):n.push([o,o]),n.push(1));if(this.fixedCubie>=0){let o=this.keyface3(this.faces[this.cubies[this.fixedCubie][0]])[t],l=[];for(let i=0;i<n.length;i+=2){let s=n[i];if(o>=s[0]&&o<=s[1])if(s[0]===0)s=[s[1]+1,r];else if(r===s[1])s=[0,s[0]-1];else throw Error("fixed cubie option would disconnect move");let a=!1;for(let f=0;f<l.length;f+=2)if(l[f][0]===s[0]&&l[f][1]===s[1]&&l[f+1]===n[i+1]){a=!0;break}a||(l.push(s),l.push(n[i+1]))}n=l}return n}graybyori(t){let r=this.cubies[t].length;return this.duplicatedCubies[t]&&(r=1),r===1&&(this.options.grayCenters||!this.options.includeCenterOrbits)||r===2&&(this.options.grayEdges||!this.options.includeEdgeOrbits)||r>2&&(this.options.grayCorners||!this.options.includeCornerOrbits)}skipbyori(t){let r=this.cubies[t].length;return this.duplicatedCubies[t]&&(r=1),r===1&&!this.options.includeCenterOrbits||r===2&&!this.options.includeEdgeOrbits||r>2&&!this.options.includeCornerOrbits}skipcubie(t){return this.skipbyori(t)}header(t){return t+uL+\`
\`+t+\`
\`}writegap(){let t=this.getOrbitsDef(!1),r=[],n=[];for(let l=0;l<t.moveops.length;l++){let i="M_"+si(this.notationMapper,t.movenames[l]),s=!1;i[i.length-1]==="'"&&(i=i.substring(0,i.length-1),s=!0),n.push(i),s?r.push(i+":="+t.moveops[l].toPerm().inv().toGap()+";"):r.push(i+":="+t.moveops[l].toPerm().toGap()+";")}r.push("Gen:=["),r.push(n.join(",")),r.push("];");let o=t.solved.identicalPieces();return r.push("ip:=["+o.map(l=>"["+l.map(i=>i+1).join(",")+"]").join(",")+"];"),r.push("# Size(Group(Gen));"),r.push("# Size(Stabilizer(Group(Gen), ip, OnTuplesSets));"),r.push(""),this.header("# ")+r.join(\`
\`)}writeksolve(t="PuzzleGeometryPuzzle"){let r=this.getOrbitsDef(!1);return this.header("# ")+r.toKsolve(t,this.notationMapper).join(\`
\`)}getKPuzzleDefinition(t=!0,r=!0){let o=this.getOrbitsDef(t,r).toKPuzzleDefinition(r);if(o.experimentalPuzzleDescription=this.puzzleDescription,!o)throw new Error("Missing definition!");return o}getMoveFromBits(t,r,n,o,l,i){let s=[],a=[],f=[];for(let p of this.cubieords)a.push(Wt(p)),f.push(hr(p));for(let p=t[0];p<=t[1];p++){let c=o[p];for(let L=0;L<c.length;L+=2*i){let m=c.slice(L,L+2*i),R=this.cubiesetnums[m[0]];for(let U=0;U<m.length;U+=2)m[U]=this.cubieordnums[m[U]];let F=2,A=3;n&&(F=m.length-2,A=m.length-1),a[R]===Wt(this.cubieords[R])&&(a[R]=a[R].slice(),this.orbitoris[R]>1&&!this.options.fixedOrientation&&(f[R]=f[R].slice()));for(let U=0;U<m.length;U+=2)a[R][m[(U+F)%m.length]]=m[U],this.orbitoris[R]>1&&!this.options.fixedOrientation&&(f[R][m[U]]=(m[(U+A)%m.length]-m[(U+1)%m.length]+2*this.orbitoris[R])%this.orbitoris[R])}}let u=new Kt(Wt(24),hr(24),1);for(let p=0;p<this.cubiesetnames.length;p++)if(!(l&&!l[p]))if(this.orbitoris[p]===1||this.options.fixedOrientation)a[p]===Wt(u.perm.length)?(a[p]!==u.perm&&(u=new Kt(a[p],f[p],1)),s.push(u)):s.push(new Kt(a[p],f[p],1));else{let c=new Array(f[p].length);for(let L=0;L<a[p].length;L++)c[L]=f[p][a[p][L]];s.push(new Kt(a[p],c,this.orbitoris[p]))}let g=new tr(s);return r!==1&&(g=g.mulScalar(r)),g}omitSet(t){for(let r of this.options.excludeOrbits)if(r===t)return!0;return!1}diffmvsets(t,r,n,o){for(let l=0;l<t.length;l+=2){let i=!1;for(let s=0;!i&&s<r.length;s+=2)o?t[l][0]+r[s][1]===n&&t[l][1]+r[s][0]===n&&t[l+1]===r[s+1]&&(i=!0):t[l][0]===r[s][0]&&t[l][1]===r[s][1]&&t[l+1]===r[s+1]&&(i=!0);if(!i)return!0}return!1}getOrbitsDef(t,r=!0){let n=[];if(t)for(let m=0;m<this.cubiesetnames.length;m++)n.push(1);let o=[],l=[],i=[],s=[];for(let m=0;m<this.moveplanesets.length;m++){let R=this.getmovesets(m);i.push(R),this.options.addRotations?s.push(1):s.push(0)}let a=[];for(let m=0;m<this.moveplanesets.length;m++){let R=this.moveplanesets[m].length,F=!1,A=i[m];for(let U=0;U<A.length;U+=2)A[U][0]===0&&A[U][1]===R&&(F=!0);a[m]=F}if(this.options.moveList&&this.options.addRotations){for(let m=0;m<this.moverotations.length;m++)s[m]=0;for(let m=0;m<this.moveplanesets.length;m++){if(a[m]){s[m]=3;continue}for(let R=0;R<this.moverotations.length;R++){let F=this.moveplanenormals[m];for(let A=1;A*2<=this.movesetorders[R];A++){if(F=F.rotatepoint(this.moverotations[R][0]),s[R]&A)continue;let U=-1,b=!1;for(let N=0;N<this.moveplanenormals.length;N++)if(F.dist(this.moveplanenormals[N])<Se){U=N;break}else if(F.dist(this.moveplanenormals[N].smul(-1))<Se){U=N,b=!0;break}if(U<0)throw new Error("Could not find rotation");let S=i[U];(S.length!==i[m].length||this.moveplanesets[m].length!==this.moveplanesets[U].length||this.diffmvsets(S,i[m],this.moveplanesets[U].length,b))&&(s[R]|=A)}}}for(let m=0;m<this.moverotations.length;m++)if(s[m]===0)s[m]=1;else if(s[m]===1)this.movesetorders[m]>3?s[m]=2:s[m]=0;else if(s[m]===3)s[m]=0;else throw new Error("Impossible addrot val")}for(let m=0;m<this.moveplanesets.length;m++)s[m]!==0&&!a[m]&&(i[m].push([0,this.moveplanesets[m].length]),i[m].push(s[m]));for(let m=0;m<this.moveplanesets.length;m++){let R=i[m],F=this.movesetorders[m];for(let b=0;b<R.length;b+=2)for(let S=0;S<b;S+=2)if(R[b][0]===R[S][0]&&R[b][1]===R[S][1])throw new Error("Redundant moves in moveset.");let A=[];for(let b=0;b<R.length;b+=2)for(let S=R[b][0];S<=R[b][1];S++)A[S]=1;let U=this.cmovesbyslice[m];for(let b=0;b<U.length;b++){if(A[b]!==1)continue;let S=U[b];for(let N=0;N<S.length;N+=2*F){if(this.skipcubie(S[N]))continue;let J=this.cubiesetnums[S[N]];n[J]=1}}}for(let m=0;m<this.cubiesetnames.length;m++)if(!!n[m]){if(this.omitSet(this.cubiesetnames[m])){n[m]=0;continue}o.push(this.cubiesetnames[m]),l.push(new qn(this.cubieords[m],this.options.fixedOrientation?1:this.orbitoris[m]))}let f=[];for(let m=0;m<this.cubiesetnames.length;m++){if(!n[m]||this.omitSet(this.cubiesetnames[m]))continue;let R=[],F=[];for(let A=0;A<this.cubieords[m];A++){if(t)R.push(A);else{let U=this.cubiesetcubies[m][A];R.push(this.cubievaluemap[U])}F.push(0)}f.push(new Kt(R,F,this.options.fixedOrientation?1:this.orbitoris[m]))}let u=[],g=[],p=[],c=[];if(r)for(let m=0;m<this.moveplanesets.length;m++){let F=this.moveplanesets[m].length,A=i[m],U=this.movesetgeos[m];for(let b=0;b<A.length;b+=2){let S=A[b],N,J=!1;if(this.parsedmovelist!==void 0)for(let Q of this.parsedmovelist){if(Q[1]!==m)continue;let x=[];Q[4]?x=[Q[2],Q[3]]:x=[F-Q[3],F-Q[2]],x[0]===S[0]&&x[1]===S[1]&&(N=Q[0],J=!Q[4])}if(N)u.push(N),g.push(!0);else{let Q=BL(U,S,F);J=Q[1];let x=Q[0];A[b+1]===1?u.push(x):u.push(x+A[b+1]),g.push(!1)}c.push(S[0]===0&&S[1]===F);let z=this.getMoveFromBits(S,A[b+1],J,this.cmovesbyslice[m],n,this.movesetorders[m]);p.push(z)}}let L=new ln(o,l,new sn(f),u,p,c,g);return this.options.optimizeOrbits&&(L=L.optimize()),this.options.scrambleAmount!==0&&L.scramble(this.options.scrambleAmount),L}getScramble(t=0){let r=this.getOrbitsDef(!1);return r.transformToKTransformationData(r.getScrambleTransformation(t))}getMovesAsPerms(){return this.getOrbitsDef(!1).moveops.map(t=>t.toPerm())}showcanon(t){Ef(this.getOrbitsDef(!1),t)}getsolved(){let t=[];for(let r=0;r<this.baseFaceCount;r++)for(let n=0;n<this.stickersperface;n++)t.push(r);return new Lt(t)}getOrientationRotation(t){let[r,[n,o,l]]=t[0],i=new W(0,n,-o,l),[s,[a,f,u]]=t[1],g=new W(0,a,-f,u),p=null,c=null,L=this.swizzler.unswizzle(r),m=this.swizzler.unswizzle(s);for(let U of this.geonormals)L===U[1]&&(p=U[0]),m===U[1]&&(c=U[0]);if(!p)throw new Error("Could not find feature "+r);if(!c)throw new Error("Could not find feature "+s);let R=p.pointrotation(i);return c.rotatepoint(R).unproject(i).pointrotation(g.unproject(i)).mul(R)}getInitial3DRotation(){let t=this.baseFaceCount,r=null;if(this.options.puzzleOrientation?r=this.options.puzzleOrientation:this.options.puzzleOrientations&&(r=this.options.puzzleOrientations[t]),r||(r=LL()[t]),!r)throw new Error("No default orientation?");return this.getOrientationRotation(r)}generate2dmapping(t=800,r=500,n=10,o=!1,l=.92){t-=2*n,r-=2*n;function i(w,v){let M=w[1][0]-w[0][0],j=w[1][1]-w[0][1],q=2*Math.PI/v,ie=Math.cos(q),de=Math.sin(q);for(let be=2;be<v;be++){let Ye=M*ie+j*de;j=j*ie-M*de,M=Ye,w.push([w[be-1][0]+M,w[be-1][1]+j])}}this.genperms();let f=this.getboundarygeometry().facenames[0][0].length,u=this.net;if(u===null)throw new Error("No net?");let g={},p=0,c=0,L=1,m=0;g[u[0][0]]=[[1,0],[0,0]],i(g[u[0][0]],f);for(let w of u){let v=w[0];if(!g[v])throw new Error("Bad edge description; first edge not connected.");for(let M=1;M<w.length;M++){let j=w[M];j===""||g[j]||(g[j]=[g[v][M%f],g[v][(M+f-1)%f]],i(g[j],f))}}for(let w in g){let v=g[w];for(let M of v)p=Math.min(p,M[0]),L=Math.max(L,M[0]),c=Math.min(c,M[1]),m=Math.max(m,M[1])}let R=Math.min(t/(L-p),r/(m-c)),F=.5*(t-R*(L+p)),A=.5*(r-R*(m+c)),U={},b=this.getboundarygeometry(),S={},N=[[R+F,A],[F,A]];S[u[0][0]]=N,i(S[u[0][0]],f),U[this.facenames[0][1]]=this.project2d(0,0,[new W(0,N[0][0],N[0][1],0),new W(0,N[1][0],N[1][1],0)]);let J=[];J[0]=0;for(let w of u){let v=w[0];if(!S[v])throw new Error("Bad edge description; first edge not connected.");let M=-1;for(let q=0;q<b.facenames.length;q++)if(v===b.facenames[q][1]){M=q;break}if(M<0)throw new Error("Could not find first face name "+v);let j=b.facenames[M][0];for(let q=1;q<w.length;q++){let ie=w[q];if(ie===""||S[ie])continue;S[ie]=[S[v][q%f],S[v][(q+f-1)%f]],i(S[ie],f);let de=J[M],be=j[(de+q)%f].sum(j[(de+q+f-1)%f]).smul(.5),Ye=Li(b.edgenames,be),St=b.edgenames[Ye][1],Le=RL(St,this.facenames),dt=Le[v===Le[0]?1:0],lt=-1;for(let ze=0;ze<b.facenames.length;ze++)if(dt===b.facenames[ze][1]){lt=ze;break}if(lt<0)throw new Error("Could not find second face name");let ct=b.facenames[lt][0];for(let ze=0;ze<ct.length;ze++)if(ct[ze].sum(ct[(ze+1)%f]).smul(.5).dist(be)<=Se){let _=S[v][(q+f-1)%f],O=S[v][q%f];J[lt]=ze,U[dt]=this.project2d(lt,ze,[new W(0,O[0],O[1],0),new W(0,_[0],_[1],0)]);break}}}let z=0,Q=0,x=this.getInitial3DRotation();for(let w of this.faces){o&&(w=w.rotate(x));for(let v=0;v<w.length;v++)z=Math.max(z,Math.abs(w.get(v).b)),Q=Math.max(Q,Math.abs(w.get(v).c))}let k=Math.min(r/Q/2,(t-n)/z/4);return(w,v)=>{if(o){v=v.rotatepoint(x);let M=.5*n+.25*t,j=this.baseplanes[w].rotateplane(x).d<0?1:-1;return[n+t*.5+j*(M-v.b*k),n+r*.5+v.c*k]}else{let M=U[this.facenames[w][1]];return[n+l*v.dot(M[0])+M[2].b,n+r-l*v.dot(M[1])-M[2].c]}}}generatesvg(t=800,r=500,n=10,o=!1){let l=this.generate2dmapping(t,r,n,o);function i(p,c,L){return'<polygon id="'+p+'" class="sticker" style="fill: '+L+'" points="'+c.map(m=>m[0]+" "+m[1]).join(" ")+\`"/>
\`}let s=this.getsolved(),a=[],f=[];for(let p=0;p<this.baseFaceCount;p++)a[p]=this.colors[this.facenames[p][1]];for(let p=0;p<this.faces.length;p++){let c=this.faces[p],L=Math.floor(p/this.stickersperface),m=[];for(let R=0;R<c.length;R++)m.push(l(L,c.get(R)));f.push(m)}let u=[];for(let p=0;p<this.baseFaceCount;p++){u.push("<g>"),u.push("<title>"+this.facenames[p][1]+\`</title>
\`);for(let c=0;c<this.stickersperface;c++){let L=p*this.stickersperface+c,m=this.facetocubie[L],R=this.facetoord[L],F=this.cubiesetnums[m],A=this.cubieordnums[m],U=this.graybyori(m)?"#808080":a[s.p[L]],b=this.cubiesetnames[F]+"-l"+A+"-o"+R;if(u.push(i(b,f[L],U)),this.duplicatedFaces[L])for(let S=1;S<this.duplicatedFaces[L];S++)b=this.cubiesetnames[F]+"-l"+A+"-o"+S,u.push(i(b,f[L],U))}u.push("</g>")}return\`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
\`+u.join("")+"</svg>"}get3d(t){let r=[],n=this.getInitial3DRotation(),o=[],l=.52*this.basefaces[0].get(0).len();for(let f=0;f<this.basefaces.length;f++){let u=this.basefaces[f].rotate(n),g=this.facenames[f][1];o.push({coords:h0(u,l),name:g})}for(let f=0;f<this.faces.length;f++){let u=Math.floor(f/this.stickersperface),g=this.facetocubie[f],p=this.facetoord[f],c=this.cubiesetnums[g],L=this.cubieordnums[g],m=this.graybyori(g)?"#808080":this.colors[this.facenames[u][1]];t?.stickerColors&&(m=t.stickerColors[f]);let R=this.faces[f].rotate(n);r.push({coords:h0(R,l),color:m,orbit:this.cubiesetnames[c],ord:L,ori:p,face:u});let F=R;if(this.duplicatedFaces[f]){let A=F.length/this.duplicatedFaces[f];for(let U=1;U<this.duplicatedFaces[f];U++){for(let b=0;b<A;b++)F=F.rotateforward();r.push({coords:h0(F,l),color:m,orbit:this.cubiesetnames[c],ord:L,ori:U,face:u,isDup:!0})}}}let i=[];for(let f=0;f<this.movesetgeos.length;f++){let u=this.movesetgeos[f],g=this.movesetorders[f];for(let p of this.geonormals)u[0]===p[1]&&u[1]===p[2]&&(i.push({coordinates:Bi(p[0].rotatepoint(n),1),quantumMove:new B(u[0]),order:g}),i.push({coordinates:Bi(p[0].rotatepoint(n).smul(-1),1),quantumMove:new B(u[2]),order:g}))}let s=this.generate2dmapping(2880,2160,0,!1,1),a=function(){let f=n.invrot();return function(u,g){let p=new W(0,g[0]*l,-g[1]*l,g[2]*l);p=p.rotatepoint(f);let c=s(u,p);return c[0]/=2880,c[1]=1-c[1]/2160,c}}().bind(this);return{stickers:r,faces:o,axis:i,unswizzle:this.unswizzle.bind(this),notationMapper:this.notationMapper,textureMapper:{getuv:a}}}getGeoNormal(t){let r=this.getInitial3DRotation(),n=this.swizzler.unswizzle(t);for(let o of this.geonormals)if(n===o[1]){let l=Bi(o[0].rotatepoint(r),1);return Math.abs(l[0])<Se&&Math.abs(l[2])<Se&&(l[0]=0,l[2]=1e-6),l}}getfaceindex(t){let r=this.stickersperface;return Math.floor(t/r)}textForTwizzleExplorer(){return\`Faces \${this.baseplanerot.length}
Stickers per face \${this.stickersperface}
Short edge \${this.shortedge}
Cubies \${this.cubies.length}
Edge distance \${this.edgedistance}
Vertex distance \${this.vertexdistance}\`}writeSchreierSims(t){let n=this.getOrbitsDef(!1).reassemblySize();t(\`Reassembly size is \${n}\`);let o=mi(this.getMovesAsPerms(),t),l=n/o;t(\`Ratio is \${l}\`)}},Dr=class{constructor(t,r){this.pg=t;this.orbitNames=r.orbitnames}lookupMove(t){let r=this.pg.parseMove(t);if(this.pg.parsedmovelist){let i=!1;for(let s of this.pg.parsedmovelist)s[1]===r[1]&&s[2]===r[2]&&s[3]===r[3]&&s[4]===r[4]&&(i=!0);if(!i)return null}let n=[r[2],r[3]];if(!r[4]){let i=this.pg.moveplanesets[r[1]].length;n=[i-r[3],i-r[2]]}let o=this.pg.getMoveFromBits(n,r[5],!r[4],this.pg.cmovesbyslice[r[1]],void 0,this.pg.movesetorders[r[1]]);return ln.transformToKTransformationData(this.orbitNames,o)}}});var Ri={};ht(Ri,{EXPERIMENTAL_PUZZLE_BASE_SHAPES:()=>Kf,EXPERIMENTAL_PUZZLE_CUT_TYPES:()=>Qf,ExperimentalPGNotation:()=>Dr,PuzzleGeometry:()=>nl,Quat:()=>W,getPG3DNamedPuzzles:()=>If,getPuzzleDescriptionString:()=>Wf,getPuzzleGeometryByDesc:()=>F0,getPuzzleGeometryByName:()=>Hn,parseOptions:()=>Sf,parsePuzzleDescription:()=>tl,schreierSims:()=>mi});var Zn=y(()=>{"use strict";rl();g0();pi();d0();rl();rl()});async function an(e){return(await Promise.resolve().then(()=>(Zn(),Ri))).getPuzzleGeometryByName(e,{allMoves:!0,orientCenters:!0,addRotations:!0})}async function dL(e,t){let r=await e,n=r.getKPuzzleDefinition(!0);n.name=t;let o=await Promise.resolve().then(()=>(Zn(),Ri)),l=new o.ExperimentalPGNotation(r,r.getOrbitsDef(!0));return new Ae(n,{experimentalPGNotation:l})}var di,hi,Fi,Bt,Ar,yr=y(()=>{"use strict";He();Zo();It();Bt=class{constructor(t){ee(this,di,void 0);ee(this,hi,void 0);ee(this,Fi,void 0);this.pgId=t.pgID,this.id=t.id,this.fullName=t.fullName,this.inventedBy=t.inventedBy,this.inventionYear=t.inventionYear}pg(){return d(this,di)??V(this,di,an(this.pgId??this.id))}kpuzzle(){return d(this,hi)??V(this,hi,dL(this.pg(),this.id))}svg(){return d(this,Fi)??V(this,Fi,(async()=>(await this.pg()).generatesvg())())}};di=new WeakMap,hi=new WeakMap,Fi=new WeakMap;Ar=class extends Bt{constructor(){super(...arguments);this.stickerings=Wn}appearance(r){return er(this,r)}}});var Et,jf=y(()=>{"use strict";Et={name:"2x2x2",orbits:{CORNERS:{numPieces:8,numOrientations:3}},startStateData:{CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{U:{CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},y:{CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]}},x:{CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]}},L:{CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]}},F:{CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]}},R:{CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]}},B:{CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]}},D:{CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]}},z:{CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]}}}};Et.moves.Rv=Et.moves.x;Et.moves.Uv=Et.moves.y;Et.moves.Fv=Et.moves.z;Et.moves.Lv={CORNERS:{permutation:[1,7,6,2,0,3,5,4],orientation:[2,1,2,1,1,2,1,2]}};Et.moves.Dv={CORNERS:{permutation:[3,0,1,2,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]}};Et.moves.Bv={CORNERS:{permutation:[4,7,1,0,5,3,2,6],orientation:[1,2,1,2,2,1,2,1]}}});var qf,Vf=y(()=>{"use strict";qf=\`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 520 394" preserveAspectRatio="xMidYMid meet">
  <title>2x2x2</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="puzzle" transform="translate(5, 5) scale(60)">
    <use id="CORNERS-l0-o0" xlink:href="#sticker" transform="translate(3.2, 1)" style="fill: white"/>
    <use id="CORNERS-l0-o1" xlink:href="#sticker" transform="translate(4.4, 2.2)" style="fill: red"/>
    <use id="CORNERS-l0-o2" xlink:href="#sticker" transform="translate(3.2, 2.2)" style="fill: limegreen"/>

    <use id="CORNERS-l1-o0" xlink:href="#sticker" transform="translate(3.2, 0)" style="fill: white"/>
    <use id="CORNERS-l1-o1" xlink:href="#sticker" transform="translate(6.6, 2.2)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" xlink:href="#sticker" transform="translate(5.4, 2.2)" style="fill: red"/>

    <use id="CORNERS-l2-o0" xlink:href="#sticker" transform="translate(2.2, 0)" style="fill: white"/>
    <use id="CORNERS-l2-o1" xlink:href="#sticker" transform="translate(0, 2.2)" style="fill: orange"/>
    <use id="CORNERS-l2-o2" xlink:href="#sticker" transform="translate(7.6, 2.2)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" xlink:href="#sticker" transform="translate(2.2, 1)" style="fill: white"/>
    <use id="CORNERS-l3-o1" xlink:href="#sticker" transform="translate(2.2, 2.2)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o2" xlink:href="#sticker" transform="translate(1, 2.2)" style="fill: orange"/>

    <use id="CORNERS-l4-o0" xlink:href="#sticker" transform="translate(3.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" xlink:href="#sticker" transform="translate(3.2, 3.2)" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" xlink:href="#sticker" transform="translate(4.4, 3.2)" style="fill: red"/>

    <use id="CORNERS-l5-o0" xlink:href="#sticker" transform="translate(2.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" xlink:href="#sticker" transform="translate(1, 3.2)" style="fill: orange"/>
    <use id="CORNERS-l5-o2" xlink:href="#sticker" transform="translate(2.2, 3.2)" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" xlink:href="#sticker" transform="translate(2.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" xlink:href="#sticker" transform="translate(7.6, 3.2)" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" xlink:href="#sticker" transform="translate(0, 3.2)"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" xlink:href="#sticker" transform="translate(3.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" xlink:href="#sticker" transform="translate(5.4, 3.2)" style="fill: red"/>
    <use id="CORNERS-l7-o2" xlink:href="#sticker" transform="translate(6.6, 3.2)" style="fill: #26f"/>
  </g>

</svg>\`});var Hf,Zf=y(()=>{"use strict";Hf={name:"Clock",orbits:{DIALS:{numPieces:18,numOrientations:12},FACES:{numPieces:18,numOrientations:1},FRAME:{numPieces:1,numOrientations:2}},startStateData:{DIALS:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{pieces:[0],orientation:[0]}},moves:{UR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,0,0,0,0,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},U_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,0,0,0,-1,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},R_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,1,1,-1,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},D_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},L_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},ALL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,1,1,1,-1,0,-1,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},y2:{DIALS:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[1]}},UL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}}}}});var Jf,Yf=y(()=>{"use strict";Jf=\`<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 240" preserveAspectRatio="xMidYMid meet">
  <title>clock</title>
  <defs>
    <g id="hand" transform="translate(-20, -20)">
      <path d="M19.9995197,2.22079449 L23.8791657,19.0203611 C23.9580836,19.3338406 24,19.6620253 24,20 C24,22.209139 22.209139,24 20,24 C17.790861,24 16,22.209139 16,20 C16,19.6620253 16.0419164,19.3338406 16.1208343,19.0203611 L19.9995197,2.22079449 Z"></path>
    </g>
    <g id="cardinal_hours" style="fill: #FFFFFF">
      <circle cx="0" cy="24" r="2"></circle>
      <circle cx="-24" cy="0" r="2"></circle>
      <circle cx="24" cy="0" r="2"></circle>
      <circle cx="0" cy="-24" r="2"></circle>
    </g>
    <g id="face_hours">
      <g>
        <use xlink:href="#cardinal_hours"/>
      </g>
      <g transform="rotate(30)">
        <use xlink:href="#cardinal_hours"/>
      </g>
      <g  transform="rotate(60)">
        <use xlink:href="#cardinal_hours"/>
      </g>
    </g>
    <g id="pegs" stroke="#000000" style="fill: #FFD000">
      <circle id="PEG4" cx="90" cy="90" r="10"></circle>
      <circle id="PEG3" cx="30" cy="90" r="10"></circle>
      <circle id="PEG2" cx="90" cy="30" r="10"></circle>
      <circle id="PEG1" cx="30" cy="30" r="10"></circle>
    </g>
    <g id="frame" transform="translate(-24, -24)">
      <path stroke="#000000" d="M120,20 C137.495665,20 153.941932,24.4930026 168.247913,32.3881183 C171.855881,30.8514056 175.828512,30 180,30 C196.568542,30 210,43.4314575 210,60 C210,64.1714878 209.148594,68.1441192 207.610077,71.7536009 C215.506997,86.0580678 220,102.504335 220,120 C220,137.495665 215.506997,153.941932 207.611882,168.247913 C209.148594,171.855881 210,175.828512 210,180 C210,196.568542 196.568542,210 180,210 C175.828512,210 171.855881,209.148594 168.246399,207.610077 C153.941932,215.506997 137.495665,220 120,220 C102.504335,220 86.0580678,215.506997 71.7520869,207.611882 C68.1441192,209.148594 64.1714878,210 60,210 C43.4314575,210 30,196.568542 30,180 C30,175.828512 30.8514056,171.855881 32.3899234,168.246399 C24.4930026,153.941932 20,137.495665 20,120 C20,102.504335 24.4930026,86.0580678 32.3881183,71.7520869 C30.8514056,68.1441192 30,64.1714878 30,60 C30,43.4314575 43.4314575,30 60,30 C64.1714878,30 68.1441192,30.8514056 71.7536009,32.3899234 C86.0580678,24.4930026 102.504335,20 120,20 Z"></path>
    </g>
  </defs>
  <g>
    <g transform="translate(24, 24)">
      <use xlink:href="#frame" id="FRAME-l0-o0" style="fill: #0C5093"/>
      <use xlink:href="#pegs" transform="translate(36, 36)"/>
      <g transform="translate(36, 36)">
        <circle id="FACES-l0-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l0-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l0-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l0-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l0-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l0-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l0-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l0-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l0-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l0-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l0-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l0-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l0-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l1-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l1-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l1-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l1-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l1-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l1-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l1-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l1-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l1-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l1-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l1-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l1-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l1-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l2-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l2-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l2-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l2-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l2-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l2-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l2-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l2-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l2-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l2-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l2-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l2-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l2-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l3-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l3-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l3-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l3-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l3-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l3-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l3-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l3-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l3-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l3-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l3-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l3-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l3-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l4-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l4-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l4-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l4-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l4-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l4-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l4-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l4-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l4-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l4-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l4-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l4-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l4-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l5-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l5-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l5-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l5-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l5-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l5-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l5-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l5-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l5-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l5-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l5-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l5-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l5-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l6-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l6-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l6-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l6-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l6-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l6-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l6-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l6-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l6-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l6-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l6-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l6-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l6-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l7-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l7-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l7-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l7-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l7-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l7-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l7-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l7-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l7-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l7-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l7-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l7-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l7-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l8-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l8-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l8-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l8-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l8-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l8-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l8-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l8-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l8-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l8-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l8-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l8-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l8-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
    <g transform="translate(264, 24)">
      <use xlink:href="#frame" id="FRAME-l0-o1" style="fill: #90B8DF"/>
      <use xlink:href="#pegs" transform="translate(36, 36)"/>
      <g transform="translate(36, 36)">
        <circle id="FACES-l9-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l9-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l9-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l9-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l9-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l9-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l9-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l9-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l9-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l9-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l9-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l9-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l9-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l10-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l10-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l10-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l10-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l10-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l10-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l10-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l10-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l10-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l10-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l10-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l10-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l10-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l11-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l11-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l11-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l11-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l11-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l11-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l11-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l11-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l11-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l11-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l11-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l11-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l11-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l12-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l12-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l12-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l12-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l12-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l12-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l12-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l12-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l12-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l12-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l12-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l12-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l12-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l13-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l13-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l13-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l13-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l13-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l13-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l13-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l13-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l13-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l13-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l13-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l13-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l13-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l14-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l14-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l14-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l14-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l14-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l14-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l14-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l14-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l14-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l14-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l14-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l14-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l14-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l15-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l15-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l15-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l15-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l15-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l15-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l15-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l15-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l15-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l15-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l15-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l15-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l15-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l16-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l16-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l16-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l16-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l16-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l16-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l16-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l16-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l16-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l16-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l16-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l16-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l16-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l17-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l17-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l17-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l17-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l17-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l17-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l17-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l17-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l17-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l17-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l17-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l17-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l17-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
  </g>
</svg>\`});var Xf,$f=y(()=>{"use strict";Xf=\`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 -20 546 480" preserveAspectRatio="xMidYMid meet">
  <defs>
  </defs>
  <title>pyraminx</title>
  <defs>
    <g id="stickerA" transform="scale(1, 0.577350269)">
      <path
         d="m 0,1.732050808 1,-1.732050808 1,1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
    <g id="stickerV" transform="scale(1, 0.577350269)">
      <path
         d="m 0,0 1,1.732050808 1,-1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
  </defs>

<!--        0 1 2 3 4 5 6 7 8 9 10   -->
<!--        | | | | | | | | | | |    -->
<!--    0 - L L L L L F R R R R R    -->
<!--    1 -   L L L F F F R R R      -->
<!--    2 -     L F F F F F R        -->
<!--    3 -       D D D D D          -->
<!--    4 -         D D D            -->
<!--    5 -           D              -->

  <g id="puzzle" transform="translate(5, 5) scale(40, 69.28203232)">
    <!-- CORNERS -->
    <use id="CORNERS-l0-o0" xlink:href="#stickerV" transform="translate(5.2, 1.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l0-o1" xlink:href="#stickerA" transform="translate(3, 0)" style="fill: red"/>
    <use id="CORNERS-l0-o2" xlink:href="#stickerA" transform="translate(7.4, 0)" style="fill: blue"/>

    <use id="CORNERS-l3-o0" xlink:href="#stickerA" transform="translate(4.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS-l3-o1" xlink:href="#stickerA" transform="translate(2, 1)" style="fill: red"/>
    <use id="CORNERS-l3-o2" xlink:href="#stickerV" transform="translate(4.2, 2.066666667)" style="fill: limegreen"/>

    <use id="CORNERS-l2-o0" xlink:href="#stickerA" transform="translate(6.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS-l2-o1" xlink:href="#stickerV" transform="translate(6.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l2-o2" xlink:href="#stickerA" transform="translate(8.4, 1)" style="fill: blue"/>

    <use id="CORNERS-l1-o1" xlink:href="#stickerA" transform="translate(9.4, 0)" style="fill: blue"/>
    <use id="CORNERS-l1-o2" xlink:href="#stickerA" transform="translate(1, 0)" style="fill: red"/>
    <use id="CORNERS-l1-o0" xlink:href="#stickerA" transform="translate(5.2, 4.2)" style="fill: yellow"/>

    <!-- "TIPS" -->
    <!-- CORNERS2 -->
    <use id="CORNERS2-l0-o0" xlink:href="#stickerA" transform="translate(5.2, 0.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l0-o1" xlink:href="#stickerV" transform="translate(4, 0)" style="fill: red"/>
    <use id="CORNERS2-l0-o2" xlink:href="#stickerV" transform="translate(6.4, 0)" style="fill: blue"/>

    <use id="CORNERS2-l3-o0" xlink:href="#stickerV" transform="translate(3.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l3-o1" xlink:href="#stickerV" transform="translate(2, 2)" style="fill: red"/>
    <use id="CORNERS2-l3-o2" xlink:href="#stickerA" transform="translate(3.2, 2.066666667)" style="fill: limegreen"/>

    <use id="CORNERS2-l2-o0" xlink:href="#stickerV" transform="translate(7.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l2-o1" xlink:href="#stickerA" transform="translate(7.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l2-o2" xlink:href="#stickerV" transform="translate(8.4, 2)" style="fill: blue"/>

    <use id="CORNERS2-l1-o1" xlink:href="#stickerV" transform="translate(10.4,0)" style="fill: blue"/>
    <use id="CORNERS2-l1-o2" xlink:href="#stickerV" transform="translate(0, 0)" style="fill: red"/>
    <use id="CORNERS2-l1-o0" xlink:href="#stickerV" transform="translate(5.2, 5.2)" style="fill: yellow"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0" xlink:href="#stickerV" transform="translate(3, 1)" style="fill: red"/>
    <use id="EDGES-l0-o1" xlink:href="#stickerA" transform="translate(4.2, 1.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" xlink:href="#stickerA" transform="translate(6.2, 1.066666667)" style="fill: limegreen"/>
    <use id="EDGES-l5-o1" xlink:href="#stickerV" transform="translate(7.4, 1)" style="fill: blue"/>

    <use id="EDGES-l1-o0" xlink:href="#stickerV" transform="translate(8.4, 0)" style="fill: blue"/>
    <use id="EDGES-l1-o1" xlink:href="#stickerV" transform="translate(2, 0)" style="fill: red"/>

    <use id="EDGES-l2-o0" xlink:href="#stickerV" transform="translate(5.2, 3.2)" style="fill: yellow"/>
    <use id="EDGES-l2-o1" xlink:href="#stickerA" transform="translate(5.2, 2.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l3-o0" xlink:href="#stickerV" transform="translate(9.4, 1)" style="fill: blue"/>
    <use id="EDGES-l3-o1" xlink:href="#stickerV" transform="translate(6.2, 4.2)" style="fill: yellow"/>

    <use id="EDGES-l4-o0" xlink:href="#stickerV" transform="translate(4.2, 4.2)" style="fill: yellow"/>
    <use id="EDGES-l4-o1" xlink:href="#stickerV" transform="translate(1, 1)" style="fill: red"/>
  </g>

</svg>\`});var eu,tu=y(()=>{"use strict";eu={name:"Square-1",orbits:{WEDGES:{numPieces:24,numOrientations:9},EQUATOR:{numPieces:2,numOrientations:6}},startStateData:{WEDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{pieces:[0,1],orientation:[0,0]}},moves:{U_SQ_:{WEDGES:{permutation:[11,0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},D_SQ_:{WEDGES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,23,12,13,14,15,16,17,18,19,20,21,22],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},_SLASH_:{WEDGES:{permutation:[0,1,2,3,4,5,12,13,14,15,16,17,6,7,8,9,10,11,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,3]}}}}});var ru,nu=y(()=>{"use strict";ru=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="360px" height="552px" viewBox="0 0 360 552" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 59.1 (86144) - https://sketch.com -->
    <title>sq1-fancy</title>
    <desc>Created with Sketch.</desc>
    <!-- stroke="none" -->
    <g id="sq1-fancy" stroke="#888" stroke-width="0.25" fill="none" fill-rule="evenodd">
        <g id="EQUATOR" transform="translate(24.000000, 264.000000)">
            <rect id="EQUATOR-l1-o3" style="fill: red" x="168" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o4" style="fill: red" x="192" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o5" style="fill: limegreen" x="216" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o2" style="fill: limegreen" x="240" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o1" style="fill: limegreen" x="264" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o0" style="fill: orange" x="288" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o3" style="fill: orange" x="0" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o4" style="fill: orange" x="24" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o5" style="fill: limegreen" x="48" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o2" style="fill: limegreen" x="72" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o1" style="fill: limegreen" x="96" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o0" style="fill: red" x="120" y="0" width="24" height="24"></rect>
        </g>
        <g id="BOTTOM" transform="translate(41.000000, 257.000000)" stroke-linejoin="round">
            <g id="WEDGES-23" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l23-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l23-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l23-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l23-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l23-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l23-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l23-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-22" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l22-o8" style="fill: blue" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l22-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l22-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l22-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l22-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l22-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l22-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-21" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l21-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l21-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l21-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l21-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l21-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l21-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l21-o2" style="fill: blue" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-20" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l20-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l20-o7" style="fill: blue" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l20-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l20-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l20-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l20-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l20-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-19" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l19-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l19-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l19-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l19-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l19-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l19-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l19-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-18" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l18-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l18-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l18-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l18-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l18-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l18-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l18-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-17" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l17-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l17-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l17-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l17-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l17-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l17-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l17-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-16" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l16-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l16-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l16-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l16-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l16-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l16-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l16-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-15" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l15-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l15-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l15-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l15-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l15-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l15-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l15-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-14" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l14-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l14-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l14-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l14-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l14-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l14-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l14-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-13" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l13-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l13-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l13-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l13-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l13-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l13-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l13-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-12" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l12-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l12-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l12-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l12-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l12-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l12-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l12-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="TOP" transform="translate(41.000000, -31.000000)" stroke-linejoin="round">
            <g id="WEDGES-11" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l11-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l11-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l11-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l11-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l11-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l11-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l11-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-10" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l10-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l10-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l10-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l10-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l10-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l10-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l10-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-9" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l9-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l9-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l9-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l9-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l9-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l9-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l9-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-8" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l8-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l8-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l8-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l8-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l8-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l8-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l8-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-7" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l7-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l7-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l7-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l7-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l7-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l7-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l7-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-6" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l6-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l6-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l6-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l6-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l6-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l6-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l6-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-5" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l5-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l5-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l5-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l5-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l5-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l5-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l5-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-4" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l4-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l4-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l4-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l4-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l4-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l4-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l4-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-3" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l3-o8" style="fill: blue" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l3-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l3-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l3-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l3-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l3-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l3-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-2" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l2-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l2-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l2-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l2-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l2-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l2-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l2-o2" style="fill: blue" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-1" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l1-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l1-o7" style="fill: blue" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l1-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l1-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l1-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l1-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l1-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-0" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l0-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l0-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l0-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l0-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l0-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l0-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l0-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="DIAGONALS" transform="translate(168.861561, 1.019238)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <line x1="0" y1="287.842323" x2="70.2768775" y2="550.119201" id="BOTTOM"></line>
            <line x1="0.15767665" y1="262.276878" x2="70.4345542" y2="2.27488928e-16" id="TOP"></line>
        </g>
    </g>
</svg>\`});var Ur={};ht(Ur,{clockJSON:()=>Hf,clockSVG:()=>Jf,cube2x2x2JSON:()=>Et,cube2x2x2SVG:()=>qf,pyraminxSVG:()=>Xf,sq1HyperOrbitJSON:()=>eu,sq1HyperOrbitSVG:()=>ru});var xr=y(()=>{"use strict";jf();Vf();Zf();Yf();$f();tu();nu()});var ol,ou=y(()=>{"use strict";He();yr();It();Zo();ol={id:"2x2x2",fullName:"2\\xD72\\xD72 Cube",kpuzzle:he(async()=>new Ae((await Promise.resolve().then(()=>(xr(),Ur))).cube2x2x2JSON)),svg:async()=>(await Promise.resolve().then(()=>(xr(),Ur))).cube2x2x2SVG,pg:he(async()=>an("2x2x2")),appearance:e=>er(ol,e),stickerings:Wn}});var Fe,lu=y(()=>{"use strict";Fe={name:"3x3x3",orbits:{EDGES:{numPieces:12,numOrientations:2},CORNERS:{numPieces:8,numOrientations:3},CENTERS:{numPieces:6,numOrientations:4}},startStateData:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]}},moves:{U:{EDGES:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[1,0,0,0,0,0]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,3]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientation:[0,3,0,1,2,2]}},L:{EDGES:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,1,0,0,0,0]}},F:{EDGES:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientation:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,1,0,0,0]}},R:{EDGES:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,1,0,0]}},B:{EDGES:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientation:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,1,0]}},D:{EDGES:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,1]}},z:{EDGES:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientation:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,3,1]}},M:{EDGES:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,0,0,0,2,0]}},E:{EDGES:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,0]}},S:{EDGES:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientation:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,0,1,0,1]}},u:{EDGES:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,0]}},l:{EDGES:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,1,0,0,2,0]}},f:{EDGES:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientation:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,0,1]}},r:{EDGES:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientation:[0,0,0,1,2,2]}},b:{EDGES:{permutation:[0,5,10,1,4,7,11,3,8,9,6,2],orientation:[0,1,1,1,0,1,1,1,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientation:[3,3,0,3,1,3]}},d:{EDGES:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,1]}}}};Fe.moves.Uw=Fe.moves.u;Fe.moves.Lw=Fe.moves.l;Fe.moves.Fw=Fe.moves.f;Fe.moves.Rw=Fe.moves.r;Fe.moves.Bw=Fe.moves.b;Fe.moves.Dw=Fe.moves.d;Fe.moves.Rv=Fe.moves.x;Fe.moves.Uv=Fe.moves.y;Fe.moves.Fv=Fe.moves.z;Fe.moves.Lv={EDGES:{permutation:[2,10,6,11,0,8,4,9,1,3,5,7],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[1,7,6,2,0,3,5,4],orientation:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,1,0,3,2,0]}};Fe.moves.Dv={EDGES:{permutation:[3,0,1,2,7,4,5,6,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[3,0,1,2,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[3,0,0,0,0,1]}};Fe.moves.Bv={EDGES:{permutation:[8,5,10,1,9,7,11,3,4,0,6,2],orientation:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[4,7,1,0,5,3,2,6],orientation:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientation:[3,3,3,3,1,3]}}});function D0(e){let t=e.stateData.CENTERS.pieces[0],r=e.stateData.CENTERS.pieces[5],n=e.stateData.CENTERS.pieces[1],o=n;return t<n&&o--,r<n&&o--,[t,o]}function su(){if(!hL){let e=["","z","x","z'","x'","x2"].map(r=>E.fromString(r)),t=new E("y");for(let r of e){let n=Di.algToTransformation(r);for(let o=0;o<4;o++){n=n.applyAlg(t);let[l,i]=D0(n.toKState());iu[l][i]=n.invert()}}}return iu}function au(e){let[t,r]=D0(e),n=su()[t][r];return e.applyTransformation(n)}function A0(e,t){return t.ignorePuzzleOrientation&&(e=au(e)),t.ignoreCenterOrientation&&(e=new ge(e.kpuzzle,{EDGES:e.stateData.EDGES,CORNERS:e.stateData.CORNERS,CENTERS:{pieces:e.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}})),!!e.experimentalToTransformation()?.isIdentityTransformation()}var iu,hL,y0=y(()=>{"use strict";Be();He();U0();iu=new Array(6).fill(0).map(()=>new Array(6)),hL=!1});var fu=y(()=>{"use strict";He()});var Di,U0=y(()=>{"use strict";He();lu();y0();y0();i0();fu();oi();Di=new Ae(Fe);Fe.experimentalIsStateSolved=A0});var FL,uu=y(()=>{"use strict";FL=\`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 518 392" preserveAspectRatio="xMidYMid meet">
  <title>3x3x3</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>

<!--        0 1 2 3 4 5 6 7 8 9 10 11  -->
<!--        | | | | | | | | | | | |<-  -->
<!--    0 -       . . .                -->
<!--    1 -       . . .                -->
<!--    2 -       . . .                -->
<!--    3 - . . . . . . . . . . . .    -->
<!--    4 - . . . . . . . . . . . .    -->
<!--    5 - . . . . . . . . . . . .    -->
<!--    6 -       . . .                -->
<!--    7 -       . . .                -->
<!--    8 -       . . .                -->

  <g id="puzzle" transform="translate(5,5) scale(40)">
    <!-- CORNERS -->
    <use id="CORNERS-l0-o0" xlink:href="#sticker" transform="translate(5.3,2.1)" style="fill: white"/>
    <use id="CORNERS-l0-o1" xlink:href="#sticker" transform="translate(6.5,3.3)" style="fill: red"/>
    <use id="CORNERS-l0-o2" xlink:href="#sticker" transform="translate(5.3,3.3)" style="fill: limegreen"/>

    <use id="CORNERS-l1-o0" xlink:href="#sticker" transform="translate(5.3,0.1)" style="fill: white"/>
    <use id="CORNERS-l1-o1" xlink:href="#sticker" transform="translate(9.7,3.3)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" xlink:href="#sticker" transform="translate(8.5,3.3)" style="fill: red"/>

    <use id="CORNERS-l2-o0" xlink:href="#sticker" transform="translate(3.3,0.1)" style="fill: white"/>
    <use id="CORNERS-l2-o1" xlink:href="#sticker" transform="translate(0.1,3.3)" style="fill: orange"/>
    <use id="CORNERS-l2-o2" xlink:href="#sticker" transform="translate(11.7,3.3)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" xlink:href="#sticker" transform="translate(3.3,2.1)" style="fill: white"/>
    <use id="CORNERS-l3-o1" xlink:href="#sticker" transform="translate(3.3,3.3)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o2" xlink:href="#sticker" transform="translate(2.1,3.3)" style="fill: orange"/>

    <use id="CORNERS-l4-o0" xlink:href="#sticker" transform="translate(5.3,6.5)" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" xlink:href="#sticker" transform="translate(5.3,5.3)" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" xlink:href="#sticker" transform="translate(6.5,5.3)" style="fill: red"/>

    <use id="CORNERS-l5-o0" xlink:href="#sticker" transform="translate(3.3,6.5)" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" xlink:href="#sticker" transform="translate(2.1,5.3)" style="fill: orange"/>
    <use id="CORNERS-l5-o2" xlink:href="#sticker" transform="translate(3.3,5.3)" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" xlink:href="#sticker" transform="translate(3.3,8.5)" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" xlink:href="#sticker" transform="translate(11.7,5.3)" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" xlink:href="#sticker" transform="translate(0.1,5.3)"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" xlink:href="#sticker" transform="translate(5.3,8.5)" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" xlink:href="#sticker" transform="translate(8.5,5.3)" style="fill: red"/>
    <use id="CORNERS-l7-o2" xlink:href="#sticker" transform="translate(9.7,5.3)" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0"  xlink:href="#sticker" transform="translate(4.3,2.1)" style="fill: white"/>
    <use id="EDGES-l0-o1"  xlink:href="#sticker" transform="translate(4.3,3.3)" style="fill: limegreen"/>

    <use id="EDGES-l1-o0"  xlink:href="#sticker" transform="translate(5.3,1.1)" style="fill: white"/>
    <use id="EDGES-l1-o1"  xlink:href="#sticker" transform="translate(7.5,3.3)" style="fill: red"/>

    <use id="EDGES-l2-o0"  xlink:href="#sticker" transform="translate(4.3,0.1)" style="fill: white"/>
    <use id="EDGES-l2-o1"  xlink:href="#sticker" transform="translate(10.7,3.3)" style="fill: #26f"/>

    <use id="EDGES-l3-o0"  xlink:href="#sticker" transform="translate(3.3,1.1)" style="fill: white"/>
    <use id="EDGES-l3-o1"  xlink:href="#sticker" transform="translate(1.1,3.3)" style="fill: orange"/>

    <use id="EDGES-l4-o0"  xlink:href="#sticker" transform="translate(4.3,6.5)" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  xlink:href="#sticker" transform="translate(4.3,5.3)" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" xlink:href="#sticker" transform="translate(5.3,7.5)" style="fill: yellow"/>
    <use id="EDGES-l5-o1" xlink:href="#sticker" transform="translate(7.5,5.3)" style="fill: red"/>

    <use id="EDGES-l6-o0" xlink:href="#sticker" transform="translate(4.3,8.5)" style="fill: yellow"/>
    <use id="EDGES-l6-o1" xlink:href="#sticker" transform="translate(10.7,5.3)" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  xlink:href="#sticker" transform="translate(3.3,7.5)" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  xlink:href="#sticker" transform="translate(1.1,5.3)" style="fill: orange"/>

    <use id="EDGES-l8-o0"  xlink:href="#sticker" transform="translate(5.3,4.3)" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  xlink:href="#sticker" transform="translate(6.5,4.3)" style="fill: red"/>

    <use id="EDGES-l9-o0"  xlink:href="#sticker" transform="translate(3.3,4.3)" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  xlink:href="#sticker" transform="translate(2.1,4.3)" style="fill: orange"/>

    <use id="EDGES-l10-o0" xlink:href="#sticker" transform="translate(9.7,4.3)" style="fill: #26f"/>
    <use id="EDGES-l10-o1" xlink:href="#sticker" transform="translate(8.5,4.3)" style="fill: red"/>

    <use id="EDGES-l11-o0" xlink:href="#sticker" transform="translate(11.7,4.3)" style="fill: #26f"/>
    <use id="EDGES-l11-o1" xlink:href="#sticker" transform="translate(0.1,4.3)" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l0-o0" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o1" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o2" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o3" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>

    <use id="CENTERS-l1-o0" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o1" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o2" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o3" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>

    <use id="CENTERS-l2-o0" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o1" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o2" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o3" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>

    <use id="CENTERS-l4-o0" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
  </g>

</svg>\`});var DL,gu=y(()=>{"use strict";DL=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="288px" height="288px" viewBox="-16 -16 288 288" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>3x3x3 LL</title>
  <defs>
    <g id="sticker">
        <rect x="-10" y="-10" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="3x3x3-LL" stroke="none" stroke-width="4" style="none" stroke-linejoin="round">
    <rect id="CENTERS-l0-o0" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o1" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o2" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o3" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>

    <rect    id="CORNERS-l0-o0" stroke="#000000" style="fill: white" x="160" y="160" width="64" height="64"></rect>
    <polygon id="CORNERS-l0-o1" stroke="#000000" style="fill: red" points="224 160 252 160 252 252 224 224"></polygon>
    <polygon id="CORNERS-l0-o2" stroke="#000000" style="fill: limegreen" transform="translate(206, 238) scale(1, -1) rotate(-90) translate(-206, -238) " points="192 192 220 192 220 284 192 256"></polygon>
    <rect    id="CORNERS-l1-o0" stroke="#000000" style="fill: white" x="160" y="32" width="64" height="64"></rect>
    <polygon id="CORNERS-l1-o1" stroke="#000000" style="fill: #26f" transform="translate(206, 18) rotate(-90) translate(-206, -18) " points="192 -28 220 -28 220 64 192 36"></polygon>
    <polygon id="CORNERS-l1-o2" stroke="#000000" style="fill: red" transform="translate(238, 50) scale(1, -1) translate(-238, -50) " points="224 4 252 4 252 96 224 68"></polygon>
    <rect    id="CORNERS-l2-o0" stroke="#000000" style="fill: white" x="32" y="32" width="64" height="64"></rect>
    <polygon id="CORNERS-l2-o1" stroke="#000000" style="fill: orange" transform="translate(18, 50) scale(-1, -1) translate(-18, -50) " points="4 4 32 4 32 96 4 68"></polygon>
    <polygon id="CORNERS-l2-o2" stroke="#000000" style="fill: #26f" transform="translate(50, 18) scale(1, -1) rotate(90) translate(-50, -18) " points="36 -28 64 -28 64 64 36 36"></polygon>
    <rect    id="CORNERS-l3-o0" stroke="#000000" style="fill: white" x="32" y="160" width="64" height="64"></rect>
    <polygon id="CORNERS-l3-o1" stroke="#000000" style="fill: limegreen" transform="translate(50, 238) rotate(90) translate(-50, -238) " points="36 192 64 192 64 284 36 256"></polygon>
    <polygon id="CORNERS-l3-o2" stroke="#000000" style="fill: orange" transform="translate(18, 206) scale(-1, 1) translate(-18, -206) " points="4 160 32 160 32 252 4 224"></polygon>

    <rect id="EDGES-l0-o0" stroke="#000000" style="fill: white" x="96" y="160" width="64" height="64"></rect>
    <rect id="EDGES-l0-o1" stroke="#000000" style="fill: limegreen" transform="translate(128, 238) scale(1, -1) rotate(90) translate(-128, -238) " x="114" y="206" width="28" height="64"></rect>
    <rect id="EDGES-l1-o0" stroke="#000000" style="fill: white" x="160" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l1-o1" stroke="#000000" style="fill: red" x="224" y="96" width="28" height="64"></rect>
    <rect id="EDGES-l2-o0" stroke="#000000" style="fill: white" x="96" y="32" width="64" height="64"></rect>
    <rect id="EDGES-l2-o1" stroke="#000000" style="fill: #26f" transform="translate(128, 18) scale(1, -1) rotate(90) translate(-128, -18) " x="114" y="-14" width="28" height="64"></rect>
    <rect id="EDGES-l3-o0" stroke="#000000" style="fill: white" x="32" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l3-o1" stroke="#000000" style="fill: orange" x="4" y="96" width="28" height="64"></rect>

  </g>
  <g style="opacity: 0">
    <!-- CORNERS -->
    <use id="CORNERS-l4-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" xlink:href="#sticker" style="fill: red"/>

    <use id="CORNERS-l5-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" xlink:href="#sticker" style="fill: orange"/>
    <use id="CORNERS-l5-o2" xlink:href="#sticker" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" xlink:href="#sticker"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" xlink:href="#sticker" style="fill: red"/>
    <use id="CORNERS-l7-o2" xlink:href="#sticker" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l4-o0"  xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  xlink:href="#sticker" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l5-o1" xlink:href="#sticker" style="fill: red"/>

    <use id="EDGES-l6-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l6-o1" xlink:href="#sticker" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  xlink:href="#sticker" style="fill: orange"/>

    <use id="EDGES-l8-o0"  xlink:href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  xlink:href="#sticker" style="fill: red"/>

    <use id="EDGES-l9-o0"  xlink:href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  xlink:href="#sticker" style="fill: orange"/>

    <use id="EDGES-l10-o0" xlink:href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l10-o1" xlink:href="#sticker" style="fill: red"/>

    <use id="EDGES-l11-o0" xlink:href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l11-o1" xlink:href="#sticker" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l1-o0" xlink:href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o1" xlink:href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o2" xlink:href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o3" xlink:href="#sticker" style="fill: orange"/>

    <use id="CENTERS-l2-o0" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" xlink:href="#sticker" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" xlink:href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o1" xlink:href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o2" xlink:href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o3" xlink:href="#sticker" style="fill: red"/>

    <use id="CENTERS-l4-o0" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" xlink:href="#sticker" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" xlink:href="#sticker" style="fill: yellow"/>
  </g>
</svg>\`});var x0={};ht(x0,{cube3x3x3LLSVG:()=>DL,cube3x3x3SVG:()=>FL});var b0=y(()=>{"use strict";uu();gu()});var S0,pu=y(()=>{"use strict";U0();yr();It();Zo();S0={id:"3x3x3",fullName:"3\\xD73\\xD73 Cube",inventedBy:["Ern\\u0151 Rubik"],inventionYear:1974,kpuzzle:he(async()=>Di),svg:he(async()=>(await Promise.resolve().then(()=>(b0(),x0))).cube3x3x3SVG),llSVG:he(async()=>(await Promise.resolve().then(()=>(b0(),x0))).cube3x3x3LLSVG),pg:he(async()=>an("3x3x3")),appearance:e=>er(S0,e),stickerings:Wn}});var cu,mu=y(()=>{"use strict";He();It();cu={id:"clock",fullName:"Clock",inventedBy:["Christopher C. Wiggs","Christopher J. Taylor"],inventionYear:1988,kpuzzle:he(async()=>new Ae((await Promise.resolve().then(()=>(xr(),Ur))).clockJSON)),svg:he(async()=>(await Promise.resolve().then(()=>(xr(),Ur))).clockSVG)}});async function Lu(e,t){let r=await e.kpuzzle(),n=new On(r),o=new In(r),l=()=>o.and([o.move("U"),o.not(o.or(o.moves(["F","BL","BR"])))]),i=()=>o.and([o.move("U"),o.not(o.move("F"))]),s=()=>o.or([i(),o.and([o.move("F"),o.not(o.or(o.moves(["U","BL","BR"])))])]),a=()=>o.not(o.or([o.and([o.move("U"),o.move("F")]),o.and([o.move("F"),o.move("BL")]),o.and([o.move("F"),o.move("BR")]),o.and([o.move("BL"),o.move("BR")])])),f=()=>o.not(o.or([o.and([o.move("F"),o.move("BL")]),o.and([o.move("F"),o.move("BR")]),o.and([o.move("BL"),o.move("BR")])]));switch(t){case"full":break;case"experimental-fto-fc":n.set(o.not(l()),"Ignored");break;case"experimental-fto-f2t":n.set(o.not(i()),"Ignored"),n.set(l(),"Dim");break;case"experimental-fto-sc":n.set(o.not(s()),"Ignored"),n.set(i(),"Dim");break;case"experimental-fto-l2c":n.set(o.not(a()),"Ignored"),n.set(s(),"Dim");break;case"experimental-fto-lbt":n.set(o.not(f()),"Ignored"),n.set(a(),"Dim");break;case"experimental-fto-l3t":n.set(f(),"Dim");break;default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`),n.set(o.and(o.moves([])),"Dim")}return n.toAppearance()}async function Bu(){return["full","experimental-fto-fc","experimental-fto-f2t","experimental-fto-sc","experimental-fto-l2c","experimental-fto-lbt","experimental-fto-l3t"]}var Ru=y(()=>{"use strict";oi()});var du,hu=y(()=>{"use strict";du=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="2368px" height="1216px" viewBox="0 0 2368 1216" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>fto</title>
    <g id="fto" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
        <g id="BL" transform="translate(2040.000000, 608.000000) scale(-1, -1) rotate(90.000000) translate(-2040.000000, -608.000000) translate(1560.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o3" style="fill: #FF7F00;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l9-o0" style="fill: #FF7F00;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l16-o0" style="fill: #FF7F00;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l3-o0" style="fill: #FF7F00;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o2" style="fill: #FF7F00;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l19-o0" style="fill: #FF7F00;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l7-o0" style="fill: #FF7F00;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l3-o0" style="fill: #FF7F00;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o1" style="fill: #FF7F00;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="D" transform="translate(1280.000000, 648.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o0" style="fill: #FFFF00;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l3-o1" style="fill: #FFFF00;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l8-o0" style="fill: #FFFF00;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l5-o1" style="fill: #FFFF00;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l0-o0" style="fill: #FFFF00;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l17-o0" style="fill: #FFFF00;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l1-o1" style="fill: #FFFF00;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l6-o0" style="fill: #FFFF00;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o0" style="fill: #FFFF00;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="BR" transform="translate(1480.000000, 608.000000) scale(1, -1) rotate(90.000000) translate(-1480.000000, -608.000000) translate(1000.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o1" style="fill: #7F7F7F;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l2-o0" style="fill: #7F7F7F;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l15-o0" style="fill: #7F7F7F;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l5-o0" style="fill: #7F7F7F;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o2" style="fill: #7F7F7F;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l2-o0" style="fill: #7F7F7F;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l4-o0" style="fill: #7F7F7F;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l4-o0" style="fill: #7F7F7F;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o3" style="fill: #7F7F7F;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="B" transform="translate(1760.000000, 328.000000) scale(1, -1) translate(-1760.000000, -328.000000) translate(1280.000000, 88.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o2" style="fill: #0000FF;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l9-o1" style="fill: #0000FF;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l13-o0" style="fill: #0000FF;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l2-o1" style="fill: #0000FF;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o3" style="fill: #0000FF;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l12-o0" style="fill: #0000FF;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l8-o1" style="fill: #0000FF;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l10-o0" style="fill: #0000FF;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l5-o1" style="fill: #0000FF;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="R" transform="translate(888.000000, 608.000000) scale(-1, -1) rotate(90.000000) translate(-888.000000, -608.000000) translate(408.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o1" style="fill: #32CD32;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l6-o1" style="fill: #32CD32;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l7-o0" style="fill: #32CD32;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l0-o1" style="fill: #32CD32;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o3" style="fill: #32CD32;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l5-o0" style="fill: #32CD32;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l4-o1" style="fill: #32CD32;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l11-o0" style="fill: #32CD32;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o2" style="fill: #32CD32;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="F" transform="translate(128.000000, 648.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o2" style="fill: #FF0000;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l0-o0" style="fill: #FF0000;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l0-o0" style="fill: #FF0000;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l10-o0" style="fill: #FF0000;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l2-o1" style="fill: #FF0000;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l1-o0" style="fill: #FF0000;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l1-o0" style="fill: #FF0000;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l14-o0" style="fill: #FF0000;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o3" style="fill: #FF0000;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="L" transform="translate(328.000000, 608.000000) scale(1, -1) rotate(90.000000) translate(-328.000000, -608.000000) translate(-152.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o3" style="fill: #7F007F;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l11-o1" style="fill: #7F007F;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l21-o0" style="fill: #7F007F;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l10-o1" style="fill: #7F007F;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o1" style="fill: #7F007F;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l18-o0" style="fill: #7F007F;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l7-o1" style="fill: #7F007F;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l9-o0" style="fill: #7F007F;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o2" style="fill: #7F007F;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="U" transform="translate(608.000000, 328.000000) scale(1, -1) translate(-608.000000, -328.000000) translate(128.000000, 88.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o0" style="fill: #FFFFFF;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l6-o0" style="fill: #FFFFFF;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l20-o0" style="fill: #FFFFFF;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l11-o0" style="fill: #FFFFFF;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o0" style="fill: #FFFFFF;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l23-o0" style="fill: #FFFFFF;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l8-o0" style="fill: #FFFFFF;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l22-o0" style="fill: #FFFFFF;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l3-o0" style="fill: #FFFFFF;" points="160 320 320 480 0 480"></polygon>
        </g>
    </g>
</svg>
\`});var Fu,Du=y(()=>{"use strict";Fu=\`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
<g><title>U</title>
<polygon id="CORNERS-l0-o0" class="sticker" style="fill: #ffffff" points="247.941 89.861 283.500 115.696 269.918 157.499 212.382 138.805"/>
<polygon id="CORNERS-l10-o0" class="sticker" style="fill: #ffffff" points="154.845 157.499 141.263 115.696 176.822 89.861 212.382 138.805"/>
<polygon id="CORNERS-l5-o0" class="sticker" style="fill: #ffffff" points="176.822 89.861 212.381 64.025 247.941 89.861 212.382 138.805"/>
<polygon id="CORNERS-l4-o0" class="sticker" style="fill: #ffffff" points="212.381 199.301 168.427 199.301 154.845 157.499 212.382 138.805"/>
<polygon id="CORNERS-l1-o0" class="sticker" style="fill: #ffffff" points="269.918 157.499 256.335 199.301 212.381 199.301 212.382 138.805"/>
</g><g><title>F</title>
<polygon id="CORNERS-l7-o0" class="sticker" style="fill: #006633" points="247.941 319.263 212.381 345.098 176.822 319.263 212.382 270.32"/>
<polygon id="CORNERS-l1-o2" class="sticker" style="fill: #006633" points="212.381 209.823 256.335 209.823 269.918 251.625 212.382 270.32"/>
<polygon id="CORNERS-l3-o1" class="sticker" style="fill: #006633" points="269.918 251.625 283.500 293.428 247.941 319.263 212.382 270.32"/>
<polygon id="CORNERS-l4-o1" class="sticker" style="fill: #006633" points="154.845 251.625 168.427 209.823 212.381 209.823 212.382 270.32"/>
<polygon id="CORNERS-l9-o2" class="sticker" style="fill: #006633" points="176.822 319.263 141.263 293.428 154.845 251.625 212.382 270.32"/>
</g><g><title>L</title>
<polygon id="CORNERS-l13-o0" class="sticker" style="fill: #660099" points="87.302 290.176 43.349 290.176 29.766 248.374 87.303 229.68"/>
<polygon id="CORNERS-l4-o2" class="sticker" style="fill: #660099" points="122.862 180.736 158.421 206.571 144.839 248.374 87.303 229.68"/>
<polygon id="CORNERS-l9-o1" class="sticker" style="fill: #660099" points="144.839 248.374 131.256 290.176 87.302 290.176 87.303 229.68"/>
<polygon id="CORNERS-l10-o1" class="sticker" style="fill: #660099" points="51.743 180.736 87.302 154.901 122.862 180.736 87.303 229.68"/>
<polygon id="CORNERS-l11-o2" class="sticker" style="fill: #660099" points="29.766 248.374 16.184 206.571 51.743 180.736 87.303 229.68"/>
</g><g><title>BL</title>
<polygon id="CORNERS-l15-o0" class="sticker" style="fill: #ffff00" points="700.480 172.224 664.921 198.059 629.361 172.224 664.921 123.281"/>
<polygon id="CORNERS-l10-o2" class="sticker" style="fill: #ffff00" points="664.921 62.784 708.874 62.784 722.457 104.586 664.921 123.281"/>
<polygon id="CORNERS-l11-o1" class="sticker" style="fill: #ffff00" points="722.457 104.586 736.039 146.389 700.480 172.224 664.921 123.281"/>
<polygon id="CORNERS-l5-o1" class="sticker" style="fill: #ffff00" points="607.384 104.586 620.967 62.784 664.921 62.784 664.921 123.281"/>
<polygon id="CORNERS-l19-o2" class="sticker" style="fill: #ffff00" points="629.361 172.224 593.802 146.389 607.384 104.586 664.921 123.281"/>
</g><g><title>BR</title>
<polygon id="CORNERS-l12-o0" class="sticker" style="fill: #0000ff" points="545.874 172.224 510.315 198.059 474.755 172.224 510.315 123.281"/>
<polygon id="CORNERS-l5-o2" class="sticker" style="fill: #0000ff" points="510.315 62.784 554.269 62.784 567.851 104.586 510.315 123.281"/>
<polygon id="CORNERS-l19-o1" class="sticker" style="fill: #0000ff" points="567.851 104.586 581.433 146.389 545.874 172.224 510.315 123.281"/>
<polygon id="CORNERS-l0-o1" class="sticker" style="fill: #0000ff" points="452.779 104.586 466.361 62.784 510.315 62.784 510.315 123.281"/>
<polygon id="CORNERS-l6-o2" class="sticker" style="fill: #0000ff" points="474.755 172.224 439.196 146.389 452.779 104.586 510.315 123.281"/>
</g><g><title>R</title>
<polygon id="CORNERS-l6-o1" class="sticker" style="fill: #ff0000" points="373.019 180.736 408.579 206.571 394.996 248.374 337.461 229.68"/>
<polygon id="CORNERS-l1-o1" class="sticker" style="fill: #ff0000" points="279.924 248.374 266.341 206.571 301.901 180.736 337.461 229.68"/>
<polygon id="CORNERS-l0-o2" class="sticker" style="fill: #ff0000" points="301.901 180.736 337.460 154.901 373.019 180.736 337.461 229.68"/>
<polygon id="CORNERS-l3-o2" class="sticker" style="fill: #ff0000" points="337.460 290.176 293.506 290.176 279.924 248.374 337.461 229.68"/>
<polygon id="CORNERS-l2-o0" class="sticker" style="fill: #ff0000" points="394.996 248.374 381.414 290.176 337.460 290.176 337.461 229.68"/>
</g><g><title>C</title>
<polygon id="CORNERS-l8-o1" class="sticker" style="fill: #ffffd0" points="347.220 395.413 333.638 437.215 289.684 437.215 289.685 376.719"/>
<polygon id="CORNERS-l3-o0" class="sticker" style="fill: #ffffd0" points="254.125 327.775 289.684 301.940 325.244 327.775 289.685 376.719"/>
<polygon id="CORNERS-l2-o2" class="sticker" style="fill: #ffffd0" points="325.244 327.775 360.803 353.610 347.220 395.413 289.685 376.719"/>
<polygon id="CORNERS-l7-o1" class="sticker" style="fill: #ffffd0" points="232.148 395.413 218.566 353.610 254.125 327.775 289.685 376.719"/>
<polygon id="CORNERS-l17-o2" class="sticker" style="fill: #ffffd0" points="289.684 437.215 245.730 437.215 232.148 395.413 289.685 376.719"/>
</g><g><title>A</title>
<polygon id="CORNERS-l17-o1" class="sticker" style="fill: #3399ff" points="192.615 395.413 179.032 437.215 135.078 437.215 135.079 376.719"/>
<polygon id="CORNERS-l9-o0" class="sticker" style="fill: #3399ff" points="99.519 327.775 135.078 301.940 170.638 327.775 135.079 376.719"/>
<polygon id="CORNERS-l7-o2" class="sticker" style="fill: #3399ff" points="170.638 327.775 206.197 353.610 192.615 395.413 135.079 376.719"/>
<polygon id="CORNERS-l13-o1" class="sticker" style="fill: #3399ff" points="77.542 395.413 63.960 353.610 99.519 327.775 135.079 376.719"/>
<polygon id="CORNERS-l14-o2" class="sticker" style="fill: #3399ff" points="135.078 437.215 91.125 437.215 77.542 395.413 135.079 376.719"/>
</g><g><title>I</title>
<polygon id="CORNERS-l18-o2" class="sticker" style="fill: #ff6633" points="677.137 319.263 641.578 293.428 655.160 251.625 712.697 270.32"/>
<polygon id="CORNERS-l13-o2" class="sticker" style="fill: #ff6633" points="770.233 251.625 783.815 293.428 748.256 319.263 712.697 270.32"/>
<polygon id="CORNERS-l14-o1" class="sticker" style="fill: #ff6633" points="748.256 319.263 712.697 345.098 677.137 319.263 712.697 270.32"/>
<polygon id="CORNERS-l11-o0" class="sticker" style="fill: #ff6633" points="712.697 209.823 756.650 209.823 770.233 251.625 712.697 270.32"/>
<polygon id="CORNERS-l15-o1" class="sticker" style="fill: #ff6633" points="655.160 251.625 668.743 209.823 712.697 209.823 712.697 270.32"/>
</g><g><title>BF</title>
<polygon id="CORNERS-l16-o2" class="sticker" style="fill: #99ff00" points="587.618 290.176 543.664 290.176 530.081 248.374 587.618 229.68"/>
<polygon id="CORNERS-l15-o2" class="sticker" style="fill: #99ff00" points="623.177 180.736 658.736 206.571 645.154 248.374 587.618 229.68"/>
<polygon id="CORNERS-l18-o1" class="sticker" style="fill: #99ff00" points="645.154 248.374 631.572 290.176 587.618 290.176 587.618 229.68"/>
<polygon id="CORNERS-l19-o0" class="sticker" style="fill: #99ff00" points="552.058 180.736 587.618 154.901 623.177 180.736 587.618 229.68"/>
<polygon id="CORNERS-l12-o1" class="sticker" style="fill: #99ff00" points="530.081 248.374 516.499 206.571 552.058 180.736 587.618 229.68"/>
</g><g><title>E</title>
<polygon id="CORNERS-l8-o2" class="sticker" style="fill: #ff66cc" points="498.098 319.263 462.539 345.098 426.980 319.263 462.539 270.32"/>
<polygon id="CORNERS-l12-o2" class="sticker" style="fill: #ff66cc" points="462.539 209.823 506.493 209.823 520.075 251.625 462.539 270.32"/>
<polygon id="CORNERS-l16-o1" class="sticker" style="fill: #ff66cc" points="520.075 251.625 533.658 293.428 498.098 319.263 462.539 270.32"/>
<polygon id="CORNERS-l6-o0" class="sticker" style="fill: #ff66cc" points="405.003 251.625 418.585 209.823 462.539 209.823 462.539 270.32"/>
<polygon id="CORNERS-l2-o1" class="sticker" style="fill: #ff66cc" points="426.980 319.263 391.420 293.428 405.003 251.625 462.539 270.32"/>
</g><g><title>D</title>
<polygon id="CORNERS-l18-o0" class="sticker" style="fill: #999999" points="587.618 300.698 631.572 300.698 645.154 342.500 587.618 361.195"/>
<polygon id="CORNERS-l8-o0" class="sticker" style="fill: #999999" points="552.058 410.138 516.499 384.303 530.081 342.500 587.618 361.195"/>
<polygon id="CORNERS-l16-o0" class="sticker" style="fill: #999999" points="530.081 342.500 543.664 300.698 587.618 300.698 587.618 361.195"/>
<polygon id="CORNERS-l17-o0" class="sticker" style="fill: #999999" points="623.177 410.138 587.618 435.974 552.058 410.138 587.618 361.195"/>
<polygon id="CORNERS-l14-o0" class="sticker" style="fill: #999999" points="645.154 342.500 658.736 384.303 623.177 410.138 587.618 361.195"/>
</g></svg>
\`});var Au,yu=y(()=>{"use strict";Au={name:"redi_cube",orbits:{EDGES:{numPieces:12,numOrientations:2},CORNERS:{numPieces:8,numOrientations:3}},startStateData:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{F:{EDGES:{permutation:[8,0,2,3,4,5,6,7,1,9,10,11],orientation:[0,1,0,0,0,0,0,0,1,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[1,0,0,0,0,0,0,0]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]}}},experimentalDerivedMoves:{z:"[x: y]",UR:"[y: F]",U:"[y2: F]",UL:"[y': F]",D:"[x: F]",L:"[z2: F]",R:"[x2: F]",B:"[y2 x: F]"}}});var Uu,xu=y(()=>{"use strict";Uu=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="546px" height="418px" viewBox="-20 -20 546 418" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>redi-cube</title>
<g istroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
  <g transform="translate(1.000000, 1.000000)" fill-rule="nonzero" stroke="#000000" stroke-width="1.6">
    <g id="CORNERS-l0-o0" transform="translate(208.000000, 80.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l0-o1" transform="translate(256.000000, 128.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l0-o2" transform="translate(208.000000, 128.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o0" transform="translate(208.000000, 0.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o1" transform="translate(384.000000, 128.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o2" transform="translate(336.000000, 128.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o0" transform="translate(128.000000, 0.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o1" transform="translate(0.000000, 128.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o2" transform="translate(464.000000, 128.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o0" transform="translate(128.000000, 80.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o1" transform="translate(128.000000, 128.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o2" transform="translate(80.000000, 128.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o0" transform="translate(208.000000, 256.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o1" transform="translate(208.000000, 208.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o2" transform="translate(256.000000, 208.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o0" transform="translate(128.000000, 256.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o1" transform="translate(80.000000, 208.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o2" transform="translate(128.000000, 208.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o0" transform="translate(128.000000, 336.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o1" transform="translate(464.000000, 208.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o2" transform="translate(0.000000, 208.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o0" transform="translate(208.000000, 336.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o1" transform="translate(336.000000, 208.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o2" transform="translate(384.000000, 208.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="EDGES-l0-o0" transform="translate(168.000000, 60.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 20 20 -8.8817842e-16 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l0-o1" transform="translate(168.000000, 128.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l1-o0" transform="translate(188.000000, 40.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l1-o1" transform="translate(296.000000, 128.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l2-o0" transform="translate(168.000000, 0.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l2-o1" transform="translate(424.000000, 128.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l3-o0" transform="translate(128.000000, 40.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l3-o1" transform="translate(40.000000, 128.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l4-o0" transform="translate(168.000000, 256.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l4-o1" transform="translate(168.000000, 188.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l5-o0" transform="translate(188.000000, 296.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l5-o1" transform="translate(296.000000, 188.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l6-o0" transform="translate(168.000000, 316.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 20 20 -5.32907052e-14 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l6-o1" transform="translate(424.000000, 188.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 20 20 -1.77635684e-15 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l7-o0" transform="translate(128.000000, 296.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l7-o1" transform="translate(40.000000, 188.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l8-o0" transform="translate(188.000000, 168.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 2.66453526e-14 20"></polygon>
    </g>
    <g id="EDGES-l8-o1" transform="translate(256.000000, 168.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l9-o0" transform="translate(128.000000, 168.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l9-o1" transform="translate(60.000000, 168.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l10-o0" transform="translate(384.000000, 168.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l10-o1" transform="translate(316.000000, 168.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 5.32907052e-14 20"></polygon>
    </g>
    <g id="EDGES-l11-o0" transform="translate(444.000000, 168.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 -3.55271368e-15 20"></polygon>
    </g>
    <g id="EDGES-l11-o1" transform="translate(0.000000, 168.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
  </g>
</g>
</svg>
\`});var ll={};ht(ll,{ftoSVG:()=>du,kilominxSVG:()=>Fu,rediCubeJSON:()=>Au,rediCubeSVG:()=>Uu});var il=y(()=>{"use strict";hu();Du();yu();xu()});var w0,bu,Su=y(()=>{"use strict";yr();It();Ru();w0=class extends Bt{constructor(){super({pgID:"FTO",id:"fto",fullName:"Face-Turning Octahedron",inventedBy:["Karl Rohrbach","David Pitcher"],inventionYear:1983});this.stickerings=Bu;this.svg=he(async()=>(await Promise.resolve().then(()=>(il(),ll))).ftoSVG)}appearance(r){return Lu(this,r)}},bu=new w0});async function wu(e,t){switch(t){case"full":case"F2L":case"LL":case"OLL":case"PLL":case"ELS":case"CLS":return er(e,t);default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`)}return er(e,"full")}async function vu(){return["full","F2L","LL","OLL","PLL","ELS","CLS"]}var Eu=y(()=>{"use strict";Zo()});var v0,_u,ku=y(()=>{"use strict";yr();Eu();v0=class extends Bt{constructor(){super({id:"megaminx",fullName:"Megaminx",inventionYear:1981});this.stickerings=vu}appearance(r){return wu(this,r)}},_u=new v0});var E0,Cu,zu=y(()=>{"use strict";yr();It();E0=class extends Bt{constructor(){super({id:"pyraminx",fullName:"Pyraminx",inventedBy:["Uwe Meffert"]});this.svg=he(async()=>(await Promise.resolve().then(()=>(xr(),Ur))).pyraminxSVG)}},Cu=new E0});var Pu,Nu=y(()=>{"use strict";He();It();Pu={id:"square1",fullName:"Square-1",inventedBy:["Karel Hr\\u0161el","Vojtech Kopsk\\xFD"],inventionYear:1990,kpuzzle:he(async()=>new Ae((await Promise.resolve().then(()=>(xr(),Ur))).sq1HyperOrbitJSON)),svg:he(async()=>(await Promise.resolve().then(()=>(xr(),Ur))).sq1HyperOrbitSVG)}});var Mu,Tu=y(()=>{"use strict";He();yr();It();Mu={id:"kilominx",fullName:"Kilominx",kpuzzle:he(async()=>{let e=await an("megaminx + chopasaurus"),t=JSON.parse(JSON.stringify(e.getKPuzzleDefinition(!0)));delete t.orbits.CENTERS,delete t.orbits.CENTERS2,delete t.startStateData.CENTERS,delete t.startStateData.CENTERS2;for(let i of Object.values(t.moves))delete i.CENTERS,delete i.CENTERS2;t.name="kilominx",delete t.experimentalPuzzleDescription;let r=await Promise.resolve().then(()=>(Zn(),Ri)),n=new r.ExperimentalPGNotation(e,e.getOrbitsDef(!0)),o=new Ae(t,{experimentalPGNotation:{lookupMove:i=>i.toString()==="x2"||i.toString()==="x2'"?l.transformationData:n.lookupMove(i)}}),l=o.algToTransformation("Rv2 Fv Uv'");return t.moves.x2=l,o}),svg:he(async()=>(await Promise.resolve().then(()=>(il(),ll))).kilominxSVG)}});var Gu,Ou=y(()=>{"use strict";He();It();Gu={id:"redi_cube",fullName:"Redi Cube",inventedBy:["Oskar van Deventer"],inventionYear:2009,kpuzzle:he(async()=>new Ae((await Promise.resolve().then(()=>(il(),ll))).rediCubeJSON)),svg:async()=>(await Promise.resolve().then(()=>(il(),ll))).rediCubeSVG}});var Pe,rr=y(()=>{"use strict";gf();yr();ou();pu();mu();Su();ku();zu();Nu();Tu();Ou();Pe={"3x3x3":S0,"2x2x2":ol,"4x4x4":new Ar({id:"4x4x4",fullName:"4\\xD74\\xD74 Cube"}),"5x5x5":new Ar({id:"5x5x5",fullName:"5\\xD75\\xD75 Cube"}),"6x6x6":new Ar({id:"6x6x6",fullName:"6\\xD76\\xD76 Cube"}),"7x7x7":new Ar({id:"7x7x7",fullName:"7\\xD77\\xD77 Cube"}),"40x40x40":new Ar({id:"40x40x40",fullName:"40\\xD740\\xD740 Cube"}),clock:cu,megaminx:_u,pyraminx:Cu,skewb:new Bt({id:"skewb",fullName:"Skewb",inventedBy:["Tony Durham"]}),square1:Pu,fto:bu,gigaminx:new Bt({id:"gigaminx",fullName:"Gigaminx",inventedBy:["Tyler Fox"],inventionYear:2006}),master_tetraminx:new Bt({pgID:"master tetraminx",id:"master_tetraminx",fullName:"Master Tetraminx",inventedBy:["Katsuhiko Okamoto"],inventionYear:2002}),kilominx:Mu,redi_cube:Gu}});function Wu(e){Iu=e}function we(){if(!Iu)throw new Error("Must be called from inside a worker, to avoid impact on page performance. Try importing from the top level of \`cubing/solve\`?")}var Iu,At=y(()=>{"use strict";Iu=!1});async function Ku(){if(globalThis?.crypto?.getRandomValues)return crypto.getRandomValues.bind(crypto);{let e=(await(AL??(AL=import(UL())))).webcrypto;return e.getRandomValues.bind(e)}}var AL,yL,UL,Qu=y(()=>{"use strict";AL=null,yL="cr-yp-to",UL=()=>yL.replace(/-/g,"")});function SL(e){let t=new Uint32Array(2);e(t);let r=t[0],n=t[1];return Math.floor(r*xL)+Math.floor(n/bL)}function wL(e){if(typeof e!="number"||e<0||Math.floor(e)!==e)throw new Error("randomInt.below() not called with a positive integer value.");if(e>ju)throw new Error(\`Called randomInt.below() with max == \${e}, which is larger than JavaScript can handle with integer precision.\`)}async function ve(){let e=await Ku(),t=r=>{wL(r);let n=SL(e),o=Math.floor(ju/r)*r;return n<o?n%r:t(r)};return t}var ju,xL,bL,Ai=y(()=>{"use strict";Qu();ju=9007199254740992,xL=2097152,bL=2048});async function nr(){let e=await ve();return t=>t[e(t.length)]}var qu=y(()=>{"use strict";Ai()});async function Vu(e){for(let t=1;t<e.length;t++){let r=(await vL)(t);[e[t],e[r]]=[e[r],e[t]]}}var vL,yt=y(()=>{"use strict";qu();Ai();Ai();vL=ve()});function We(e){return new fn(t=>{t(e())})}var fn,Qt=y(()=>{"use strict";fn=class extends Promise{constructor(t){super(r=>{r()}),this._executor=t}static from(t){return new fn(r=>{r(t())})}static resolve(t){return new fn(r=>{r(t)})}static reject(t){return new fn((r,n)=>{n(t)})}then(t,r){return this._promise=this._promise||new Promise(this._executor),this._promise.then(t,r)}catch(t){return this._promise=this._promise||new Promise(this._executor),this._promise.catch(t)}}});function jt(e,t){let r=[],n=[];for(let u of t.split(\`
\`)){let g=u.split(" ");if(!u.startsWith("SetOrder ")){if(u.startsWith("Alg ")){let p=E.fromString(u.substring(4));n.push({alg:p,transformation:e.algToTransformation(p)})}else if(u.startsWith("SubgroupSizes "))for(let p=1;p<g.length;p++)r.push(parseInt(g[p]))}}let o={ordering:new Array(r.length)},l=[],i=0;l.push(0);let s=E.fromString(""),a=e.identityTransformation();for(let u=0;u<r.length;u++)i+=r[u],l.push(i),n.splice(i-1,0,{alg:s,transformation:a});if(n.length!==i)throw Error(\`Bad sgs; expected \${i-r.length} algs but saw \${n.length-r.length}\`);let f={};for(let u in e.definition.orbits){let g=e.definition.orbits[u];f[u]=new Array(g.numPieces).fill(!1)}for(let u=r.length-1;u>=0;u--){let g=[];for(let c=l[u];c<l[u+1];c++){let L=n[c].transformation;for(let m in e.definition.orbits){let R=e.definition.orbits[m];for(let F=0;F<R.numPieces;F++)(L.transformationData[m].permutation[F]!==F||L.transformationData[m].orientation[F]!==0)&&(f[m][F]||(g.push({orbitName:m,permutationIdx:F}),f[m][F]=!0))}}let p={};for(let c=l[u];c<l[u+1];c++){let L=n[c].transformation.invert(),m="";for(let R=0;R<g.length;R++){let F=g[R];m=\`\${m} \${L.transformationData[F.orbitName].permutation[F.permutationIdx]} \${L.transformationData[F.orbitName].orientation[F.permutationIdx]}\`}p[m]=n[c],n[c].alg=n[c].alg.invert(),n[c].transformation=n[c].transformation.invert()}o.ordering[u]={pieceOrdering:g,lookup:p}}return o}var Jn=y(()=>{"use strict";Be()});async function Yu(){return IL??(IL=WL())}async function WL(){return jt(await ol.kpuzzle(),\`SubgroupSizes 24 21 18 15 12 9 6

Alg F
Alg F2
Alg F'
Alg D
Alg D2
Alg D'
Alg L
Alg L2
Alg L'
Alg F U
Alg F U2
Alg F U'
Alg F L
Alg F L2
Alg F L'
Alg F2 U
Alg F2 U'
Alg F2 R
Alg F2 R'
Alg F' D
Alg F' D'
Alg F' R
Alg F' R'
Alg B
Alg B2
Alg B'
Alg B R
Alg B R2
Alg B R'
Alg B2 U
Alg B2 U2
Alg B2 U'
Alg B2 R
Alg B2 R2
Alg B2 R'
Alg B' U
Alg B' U'
Alg F D' F'
Alg F2 L F2
Alg B R' B2
Alg B R' U2
Alg B2 U R'
Alg B2 R B'
Alg R
Alg R2
Alg R'
Alg R2 U
Alg R2 U2
Alg R2 U'
Alg R' U
Alg R' U2
Alg R' U'
Alg F R F'
Alg F R2 F'
Alg L2 D' L2
Alg L' B L
Alg R2 U' R
Alg R' U R2
Alg R' U R'
Alg F R F' U2
Alg F' U F
Alg F' U2 F
Alg F' U' F
Alg L F L'
Alg L F2 L'
Alg L F' L'
Alg F' D R D'
Alg F' U2 F U'
Alg F D2 B D2 F'
Alg F2 D' L2 D F2
Alg F2 L F L' F
Alg L' F2 L' F2 L
Alg F L' U' L2 F L'
Alg F2 L F L' U2 F
Alg U
Alg U2
Alg U'
Alg F2 D2 B D2 F2
Alg F2 D2 B' D2 F2
Alg L2 D2 R D2 L2
Alg L2 D2 R' D2 L2
Alg F2 D2 B D2 F2 U
Alg F2 D2 B D2 F2 U'
Alg U F2 D2 B D2 F2
Alg U F2 D2 B' D2 F2
Alg F D B D' R' F' U
Alg F' D L F U B' L'
Alg F' L' F U L U L'
Alg D' L F D R' U' F'
Alg L F L' U' F' U' F
Alg L D' F' L' U' R F
Alg F D F U F' L' F' R'
Alg F2 D' F L F2 D F' R'
Alg F D' F L' D F R2 U2 F' U'
Alg F D' L D' L F D2 L2 B' R'
Alg F L' D F R2 D2 L D F' U2
Alg F L' D F2 D' L F L2 F2 U
Alg F D F' D L2 F R' F' D' B2 U'\`)}var IL,Xu=y(()=>{"use strict";rr();Jn();IL=null});async function KL(){let e=Hn("megaminx",{allMoves:!0,addRotations:!0}),t=new Ae(e.getKPuzzleDefinition(!0),{experimentalPGNotation:new Dr(e,e.getOrbitsDef(!0))});return t.definition.name="megaminx",t}async function z0(){return QL??(QL=KL())}async function $u(){return jL??(jL=qL())}async function qL(){return jt(await z0(),\`SubgroupSizes 12 5 60 58 60 56 54 57 52 50 54 48 46 51 44 42 48 40 45 38 36 42 34 32 39 30 36 28 26 33 24 30 22 20 27 18 24 16 14 21 12 18 10 15 8 6 2 12 9 3

Alg Rv
Alg Rv2
Alg Rv2'
Alg Rv'
Alg Lv'
Alg Lv2
Alg Lv2'
Alg Fv
Alg Fv'
Alg BRv2
Alg Lv2 Rv'

Alg Uv
Alg Uv2
Alg Uv2'
Alg Uv'

Alg D
Alg D2
Alg D2'
Alg D'
Alg B
Alg B2
Alg B2'
Alg B'
Alg D DL
Alg D DL2
Alg D DL2'
Alg D DL'
Alg D2 FL
Alg D2 FL2
Alg D2 FL2'
Alg D2 FL'
Alg D2' FR
Alg D2' FR2
Alg D2' FR2'
Alg D2' FR'
Alg D' DR
Alg D' DR2
Alg D' DR2'
Alg D' DR'
Alg B DR
Alg B DR2'
Alg B DR'
Alg B2 BR2
Alg B2 BR2'
Alg B2 BR'
Alg B2' BL
Alg B2' BL2
Alg B2' BL2'
Alg B' DL
Alg B' DL2
Alg B' DL'
Alg D DL B
Alg D DL B2'
Alg D DL B'
Alg D DL2' L
Alg D DL2' L2
Alg D DL2' L2'
Alg D DL' FL
Alg D DL' FL2
Alg D DL' FL'
Alg D2 FL2' F
Alg D2 FL2' F2
Alg D2 FL2' F2'
Alg D2 FL' FR
Alg D2 FL' FR2
Alg D2 FL' FR'
Alg D2' FR2' R
Alg D2' FR2' R2
Alg D2' FR2' R2'
Alg B DR2' R2'
Alg B DR' BR2
Alg B2 BR' BL
Alg B2' BL2' L
Alg D DL2' L2' F
Alg DL
Alg DL2
Alg DL2'
Alg DL'
Alg DL BL
Alg DL BL2
Alg DL BL2'
Alg DL BL'
Alg DL2 L
Alg DL2 L2
Alg DL2 L2'
Alg DL2 L'
Alg DL2' FL
Alg DL2' FL2
Alg DL2' FL2'
Alg DL2' FL'
Alg D B D'
Alg D B2 D'
Alg D B2' D'
Alg D B' D'
Alg D2 B D2'
Alg D2 DL' D2'
Alg D2' DL' D2
Alg D' B D
Alg D' DL' D
Alg B2 DR2 B2'
Alg B2 DR2' B2'
Alg B2 DR' B2'
Alg B2' BR B2
Alg B2' BR2 B2
Alg B2' BR2' B2
Alg B' BL B
Alg B' BL2 B
Alg B' BL' B
Alg DL BL2' U
Alg DL BL2' U2
Alg DL BL2' U2'
Alg DL BL' L
Alg DL BL' L2
Alg DL BL' L'
Alg DL2 L2' F
Alg DL2 L2' F2
Alg DL2 L2' F2'
Alg DL2 L' FL
Alg DL2 L' FL2
Alg DL2 L' FL'
Alg DL2' FL2' FR
Alg DL2' FL2' FR2
Alg DL2' FL2' FR2'
Alg D B D' DR2
Alg D B D' DR'
Alg D2 B D2' FR2'
Alg D' B D DL
Alg B2 DR' B2' BR
Alg B2 DR' B2' BR'
Alg B2' BR2' B2 U
Alg DL BL2' U2' F
Alg D FL D'
Alg D FL2 D'
Alg D FL2' D'
Alg D FL' D'
Alg D2 FR D2'
Alg D2 FR2 D2'
Alg D2 FR2' D2'
Alg D2' DR D2
Alg D2' DR2 D2
Alg D2' DR2' D2
Alg DL2 BL DL2'
Alg DL2 BL2 DL2'
Alg DL2 BL2' DL2'
Alg DL2 BL' DL2'
Alg DL2' L2 DL2
Alg DL2' L2' DL2
Alg DL' FL2 DL
Alg DL' FL' DL
Alg D FL D' FL2'
Alg D FL L D'
Alg D FL L2 D'
Alg D FL L2' D'
Alg D FL2 F D'
Alg D FL2 F2 D'
Alg D FL2 F2' D'
Alg D FL2 L D'
Alg D FL2 L2 D'
Alg D FL2' D' FR
Alg D FL2' D' FR2
Alg D FL2' D' FR2'
Alg D FL2' F D'
Alg D FL2' F2' D'
Alg D FL2' FR2' D'
Alg D FL2' FR' D'
Alg D FL' D' FL
Alg D FL' FR D'
Alg D2 FR D2' FR2'
Alg D2 FR2 R D2'
Alg D2 FR2 R2 D2'
Alg D2 FR2 R2' D2'
Alg D2 FR2' D2' DR
Alg D2 FR2' D2' DR2
Alg D2 FR2' D2' DR2'
Alg D2 FR2' D2' DR'
Alg D2 FR2' R2' D2'
Alg D2 FR' DR2' D2'
Alg D2' DR D2 DR2'
Alg D2' DR2 BR D2
Alg D2' DR2 BR2' D2
Alg D2' DR2' BR2' D2
Alg D2' DR2' BR' D2
Alg DL2 BL2 DL2' BL'
Alg DL2 BL2 DL2' BR'
Alg DL2 BL' DL2' L'
Alg DL2' L2 DL2 BL2
Alg D FL L2 BL2 D'
Alg D FL L' FL2' D'
Alg D FL2 L FL' D'
Alg D FL2' D' FR2 DR2'
Alg B DL B'
Alg B DL2 B'
Alg B DL2' B'
Alg B DL' B'
Alg B2 D B2'
Alg B2 D2 B2'
Alg B2 D2' B2'
Alg B2 D' B2'
Alg B2 DL B2'
Alg B2' D' B2
Alg B2' DL B2
Alg B' D' B
Alg B DL B' BL
Alg B DL B' BL2
Alg B DL B' BL2'
Alg B DL B' BL'
Alg B DL2 B' BL2
Alg B DL2 B' BL2'
Alg B DL2 B' BL'
Alg B DL2' L2 B'
Alg B DL2' L2' B'
Alg B DL2' L' B'
Alg B DL' FL B'
Alg B DL' FL2 B'
Alg B DL' FL2' B'
Alg B DL' FL' B'
Alg B2 D FL B2'
Alg B2 D FL2' B2'
Alg B2 D FL' B2'
Alg B2 D2 FR2 B2'
Alg B2 D2 FR2' B2'
Alg B2 D2 FR' B2'
Alg B2 D2' B2' DR
Alg B2 D2' B2' DR2
Alg B2 D2' B2' DR2'
Alg B2 DL B2' BR
Alg B2 DL B2' BR2
Alg B2 DL B2' BR2'
Alg B2' D' B2 BR2
Alg B2' D' B2 BR2'
Alg B' D' B DR
Alg B' D' B DR2'
Alg D FL' D FR D2'
Alg D DL FL DL' D'
Alg D2' FR DR FR' D2
Alg B DL B D B2'
Alg B DL B D2' B2'
Alg B DL B' BL2 U2
Alg B DL B' BL2 U2'
Alg B DL B' BL2 U'
Alg B DL2 B' BL2' U2
Alg B DL2 B' BL2' U2'
Alg B DL2 B' BL' L2
Alg B DL2' L2' B' F2
Alg B2 D FL2' B2' F2'
Alg DR
Alg DR2
Alg DR2'
Alg DR'
Alg DR2 FR
Alg DR2 FR2
Alg DR2 FR2'
Alg DR2 FR'
Alg DR2' R
Alg DR2' R2
Alg DR2' R2'
Alg DR2' R'
Alg DR' BR
Alg DR' BR2
Alg DR' BR2'
Alg DR' BR'
Alg D DR D'
Alg D2 DR D2'
Alg B BR B'
Alg B BR2' B'
Alg B BR' B'
Alg B2 BL2 B2'
Alg B2 BL2' B2'
Alg B2 BL' B2'
Alg DR2 FR2 FL2
Alg DR2 FR2 FL2'
Alg DR2 FR2 FL'
Alg DR2 FR2' F
Alg DR2 FR2' F2
Alg DR2 FR2' F2'
Alg DR2 FR' R
Alg DR2 FR' R2
Alg DR2 FR' R'
Alg DR2' R FR
Alg DR2' R FR2'
Alg DR2' R FR'
Alg DR2' R2' U
Alg DR2' R2' U2
Alg DR2' R2' U2'
Alg DR2' R' BR2'
Alg DR' BR2' BL'
Alg D DR2 FR D'
Alg B BR B' DR
Alg B BR B' DR2
Alg B BR2' B' U2'
Alg B BR' B' BL2
Alg B BR' B' BL2'
Alg B BR' B' BL'
Alg B2 BL2' L' B2'
Alg DR2 FR2 FL' F
Alg DR2 FR2' F FL2'
Alg DR2 FR2' F FL'
Alg B BR2' U2' L2' B'
Alg D2' FL D2
Alg D2' FL2 D2
Alg D2' FL2' D2
Alg D2' FL' D2
Alg D' FR2 D
Alg D' FR2' D
Alg D' FR' D
Alg DR FR DR'
Alg DR FR2' DR'
Alg DR FR' DR'
Alg DR2 R2 DR2'
Alg DR2 R2' DR2'
Alg DR2' BR DR2
Alg DR2' BR2 DR2
Alg DR2' BR2' DR2
Alg D DR2 D' DR2'
Alg D DR2' D' DR2
Alg D2' FL D2 FR'
Alg D2' FL2 D2 FL2'
Alg D2' FL2 D2 FL'
Alg D2' FL2 L D2
Alg D2' FL2 L2 D2
Alg D2' FL2 L2' D2
Alg D2' FL2 L' D2
Alg D2' FL2' F D2
Alg D2' FL2' F2 D2
Alg D2' FL2' F2' D2
Alg D2' FL2' L D2
Alg D2' FL2' L2 D2
Alg D2' FL2' L2' D2
Alg D2' FL2' L' D2
Alg D2' FL' F D2
Alg D2' FL' F2' D2
Alg D' FR FL' D
Alg D' FR2 D FR'
Alg D' FR2 D FL2
Alg D' FR2 D FL2'
Alg D' FR2 FL D
Alg D' FR2' R2' D
Alg D' FR' R2' D
Alg DR2 R2 DR2' U2'
Alg DR2 R2' DR2' BR
Alg DR2 R2' DR2' BR2
Alg DR2 R2' DR2' BR2'
Alg DR2 R2' DR2' BR'
Alg DR2 R' BR2' DR2'
Alg DR2' BR DR2 BR2'
Alg DR2' BR2 BL DR2
Alg DR2' BR2 BL2' DR2
Alg DR2' BR2' BL' DR2
Alg D B2' BL2' B2 D'
Alg D2 B2 DL2 B2' D2'
Alg D2' FL2 L' FL2 D2
Alg D2' FL2' L D2 FL'
Alg D2' FL2' L FL2' D2
Alg D2' FL2' L2' BL2 D2
Alg B2' DR B2
Alg B2' DR2 B2
Alg B2' DR2' B2
Alg B2' DR' B2
Alg B' DR' B
Alg B2' DR FR B2
Alg B2' DR FR2 B2
Alg B2' DR FR2' B2
Alg B2' DR FR' B2
Alg B2' DR2 R B2
Alg B2' DR2 R2 B2
Alg B2' DR2 R2' B2
Alg B2' DR2 R' B2
Alg B2' DR2' B2 BR
Alg B2' DR2' B2 BR2
Alg B2' DR2' B2 BR2'
Alg B2' DR2' B2 BR'
Alg B2' DR' B2 BL2
Alg B2' DR' B2 BL2'
Alg B2' DR' B2 BL'
Alg B' DR2' BR' B
Alg B' DR' B BR
Alg B' DR' B BR2'
Alg B' DR' B BR'
Alg D2' FR2' FL FR2 D2
Alg D2' FR2' FL2 FR2 D2
Alg D2' FR2' FL2' FR2 D2
Alg D' DR2' FR DR2 D
Alg D' DR2' FR2 DR2 D
Alg D' DR' FR' DR D
Alg D' FR D' FL' D2
Alg B2 D2 DL2 D2' B2'
Alg B2 D2 DL2' D2' B2'
Alg B2 D2 DL' D2' B2'
Alg B2 D' FR' D B2'
Alg B2 DL D2' DL' B2'
Alg B2 DL D' DL' B2'
Alg B2' DR FR2' B2 F2
Alg B2' DR FR2' B2 F2'
Alg B2' DR FR' R B2
Alg B2' DR FR' R2 B2
Alg B2' DR2 R2' B2 U
Alg B2' DR2 R2' B2 U2
Alg B2' DR2 R2' B2 U2'
Alg B2' DR' B2 BL2 U'
Alg B' DR2' BR' B BL2'
Alg DR D FR D' DR'
Alg DL2' B D B' DL2
Alg D2' FR2' FL2' FR2 F D2
Alg D' DR2' FR DR2 D FL2'
Alg B2 D B D' DR B2
Alg FR
Alg FR2
Alg FR2'
Alg FR'
Alg FR2 FL
Alg FR2 FL2
Alg FR2 FL2'
Alg FR2 FL'
Alg FR2' F
Alg FR2' F2
Alg FR2' F2'
Alg FR2' F'
Alg FR' R
Alg FR' R2
Alg FR' R2'
Alg FR' R'
Alg D FR D'
Alg DR R DR'
Alg DR R2' DR'
Alg DR R' DR'
Alg DR2 BR2 DR2'
Alg DR2 BR2' DR2'
Alg DR2 BR' DR2'
Alg FR2 FL2' L
Alg FR2 FL2' L2
Alg FR2 FL2' L2'
Alg FR2 FL' F
Alg FR2 FL' F2
Alg FR2 FL' F'
Alg FR2' F FL
Alg FR2' F FL2'
Alg FR2' F FL'
Alg FR2' F2' U
Alg FR2' F2' U2
Alg FR2' F2' U2'
Alg FR2' F' R2'
Alg FR' R2' BR'
Alg DR R DR' FR
Alg DR R DR' FR2
Alg DR R2' DR' U2'
Alg DR R' DR' BR2
Alg DR R' DR' BR2'
Alg DR R' DR' BR'
Alg DR2 BR2' BL2' DR2'
Alg DR2 BR2' BL' DR2'
Alg FR2 FL' F L2
Alg FR2 FL' F L2'
Alg B' DR2 BR' DR2' B
Alg DR R2' U2' BL2 DR'
Alg D' FL D
Alg D' FL2 D
Alg D' FL2' D
Alg D' FL' D
Alg FR FL FR'
Alg FR FL2 FR'
Alg FR FL2' FR'
Alg FR FL' FR'
Alg FR2 F2 FR2'
Alg FR2 F2' FR2'
Alg FR2' R FR2
Alg FR2' R2 FR2
Alg FR2' R2' FR2
Alg D FR2 D' FR2'
Alg D FR2' D' FR2
Alg D' FL D FL'
Alg D' FL2 D FL'
Alg D' FL2 L D
Alg D' FL2 L2 D
Alg D' FL2 L2' D
Alg D' FL2 L' D
Alg D' FL2' F2' D
Alg D' FL2' L2 D
Alg D' FL2' L2' D
Alg D' FL2' L' D
Alg D' FL' F2' D
Alg FR FL2' F' FR'
Alg FR FL2' FR' L
Alg FR FL2' FR' L2
Alg FR FL2' FR' L2'
Alg FR2 F2 FR2' U2
Alg FR2 F2 FR2' U2'
Alg FR2 F2' FR2' U2'
Alg FR2 F2' FR2' R
Alg FR2 F2' FR2' R2
Alg FR2 F2' FR2' R2'
Alg FR2 F2' FR2' R'
Alg FR2 F' R2' FR2'
Alg FR2' R FR2 R2'
Alg FR2' R2 BR FR2
Alg FR2' R2 BR2 FR2
Alg FR2' R2 BR2' FR2
Alg FR2' R2' BR2' FR2
Alg FR2' R2' BR' FR2
Alg D DR2' BR2' DR2 D'
Alg D FR2' D' FR2 FL2
Alg D2' B DL B' D2
Alg D2' B2' D' B2 D2'
Alg D' FL2 L BL D
Alg D' FL2 L' FL2 D
Alg D' FL2' F2' R' D
Alg D' FL2' L FL2' D
Alg D' FL2' L2' BL2 D
Alg DR2' FR DR2
Alg DR2' FR2 DR2
Alg DR2' FR2' DR2
Alg DR2' FR' DR2
Alg DR' FR' DR
Alg DR2' FR FL DR2
Alg DR2' FR FL2 DR2
Alg DR2' FR FL2' DR2
Alg DR2' FR FL' DR2
Alg DR2' FR2 DR2 F
Alg DR2' FR2 DR2 F2
Alg DR2' FR2 DR2 F2'
Alg DR2' FR2 DR2 F'
Alg DR2' FR2' DR2 R
Alg DR2' FR2' DR2 R2
Alg DR2' FR2' DR2 R2'
Alg DR2' FR2' DR2 R'
Alg DR2' FR' DR2 BR2
Alg DR2' FR' DR2 BR2'
Alg DR2' FR' DR2 BR'
Alg DR' FR2' R' DR
Alg DR' FR' DR R
Alg DR' FR' DR R2'
Alg DR' FR' DR R'
Alg D' FR2' FL FR2 D
Alg D' FR2' FL2 FR2 D
Alg D' FR' FL' FR D
Alg B2' DR2 FR' DR2' B2
Alg B' DR2 FR' DR2' B
Alg DR2 D' FL' D DR2'
Alg DR2' FR FL2' DR2 L
Alg DR2' FR FL2' DR2 L2
Alg DR2' FR FL2' DR2 L2'
Alg DR2' FR FL' DR2 F
Alg DR2' FR FL' DR2 F2
Alg DR2' FR2 F FL2 DR2
Alg DR2' FR2 DR2 F2' U
Alg DR2' FR2 DR2 F2' U2
Alg DR2' FR2 DR2 F2' U2'
Alg DR2' FR' DR2 BR2 U'
Alg DR2' FR' DR2 BR2' BL2'
Alg DR' FR2' R' DR BR2'
Alg D' FR2' FL2 FR2 L D
Alg D' FR2' FL2 FR2 L2 D
Alg B2' DR2' FR2' R' DR2 B2
Alg DR2 D DR D' FR DR2
Alg DR2' FR' DR2 BR2 U' BL2
Alg FL
Alg FL2
Alg FL2'
Alg FL'
Alg FL L
Alg FL L2
Alg FL L2'
Alg FL L'
Alg FL2 F
Alg FL2 F2
Alg FL2 F2'
Alg FL2 F'
Alg FR2' FL2' FR2
Alg FR' FL2' FR
Alg FL L2 BL
Alg FL L2 BL2
Alg FL L2 BL2'
Alg FL L2 BL'
Alg FL L2' U
Alg FL L2' U2
Alg FL L2' U2'
Alg FL L' F
Alg FL L' F2
Alg FL L' F'
Alg FL2 F L
Alg FL2 F L2
Alg FL2 F L2'
Alg FL2 F L'
Alg FL2 F2' R
Alg FL2 F2' R2
Alg FL2 F2' R2'
Alg FR' FL2 F' FR
Alg FL L2 BL2' BR
Alg FL L2 BL2' BR2
Alg FL L2 BL' U
Alg FL L2' U BL2
Alg FL L2' U BL2'
Alg FL L2' U BL'
Alg FL L2' U2' R
Alg FL L2' U2' R2
Alg FL L' F' FL
Alg FL L' F' FL2
Alg FL L' F' FL2'
Alg B DL2' BL DL2 B'
Alg FL L2 BL' U BR2'
Alg FL2 L FL2'
Alg FL2 L2 FL2'
Alg FL2 L2' FL2'
Alg FL2 L' FL2'
Alg FL2' F2 FL2
Alg FL2' F2' FL2
Alg FL2' F' FL2
Alg FR2' FL' FR2 FL
Alg FL2 L2 FL2' L2'
Alg FL2 L2 FL2' L'
Alg FL2 L2 FL2' BL
Alg FL2 L2 FL2' BL2
Alg FL2 L2 FL2' BL2'
Alg FL2 L2 FL2' BL'
Alg FL2 L2' FL2' U
Alg FL2 L2' FL2' U2
Alg FL2 L2' FL2' U2'
Alg FL2 L2' FL2' BL
Alg FL2 L2' FL2' BL2
Alg FL2 L2' FL2' BL2'
Alg FL2 L2' FL2' BL'
Alg FL2 L' FL2' U
Alg FL2 L' FL2' U2'
Alg FL2 L' FL2' F
Alg FL2 L' FL2' F2
Alg FL2 L' FL2' F2'
Alg FL2 L' FL2' F'
Alg FL2' F L FL2
Alg FL2' F L' FL2
Alg FL2' F2 L FL2
Alg FL2' F2 L2 FL2
Alg FL2' F2 L2' FL2
Alg FL2' F2 FL2 F'
Alg FL2' F2 FL2 L2
Alg FL2' F2' R FL2
Alg FL2' F2' R2 FL2
Alg FL2' F2' R2' FL2
Alg FL2' F' R2' FL2
Alg FL2' F' R' FL2
Alg FL' FR2' FL FR2
Alg D DR2' FR2' DR2 D'
Alg D FR2' R' FR2 D'
Alg D' DL2 BL2 DL2' D
Alg B2 D2' B D2 B2
Alg DR2 D2 DR D2' DR2
Alg FR2 D FR D' FR2
Alg FL2 L2 BL' L2 FL2'
Alg FL2 L2 FL2' BL2 BR
Alg FL2 L2' BL L2' FL2'
Alg FL2 L2' FL2' BL L'
Alg DL FL DL'
Alg DL FL2 DL'
Alg DL FL2' DL'
Alg DL FL' DL'
Alg DL2 FL DL2'
Alg DL FL DL' L
Alg DL FL DL' L2
Alg DL FL DL' L2'
Alg DL FL DL' L'
Alg DL FL2 L DL'
Alg DL FL2 L2 DL'
Alg DL FL2 L2' DL'
Alg DL FL2 L' DL'
Alg DL FL2 DL' L
Alg DL FL2' DL' F2
Alg DL FL2' DL' F2'
Alg DL FL2' DL' F'
Alg DL2 FL DL2' BL
Alg DL2 FL DL2' BL2
Alg DL2 FL DL2' BL2'
Alg B DL2' FL DL2 B'
Alg B2 DL2' FL DL2 B2'
Alg FL2 F2 L' F2' FL2'
Alg FL2 F2' L' F2 FL2'
Alg FL2 F' L' F FL2'
Alg FL2' FR2' FL FR2 FL2
Alg FL2' FR' F' FR FL2
Alg DL FL DL' L BL2'
Alg DL FL DL' L BL'
Alg DL FL DL' L2 U2
Alg DL FL DL' L2 U2'
Alg DL FL2 L2' DL' U2
Alg DL FL2 L2' DL' U2'
Alg DL FL2 L' DL' F'
Alg DL FL2' DL' F2' R2
Alg DL FL2' DL' F2' R2'
Alg DL2 FL DL2' BL2 BR2
Alg B DL2 FL DL2' BL B'
Alg FL2 F2' L' F2 R2 FL2'
Alg FL2 F2' L' F2 R2' FL2'
Alg FL2' FR' F FR L FL2
Alg DL FL DL' L BL2' BR2
Alg DL FL2 L DL FL' DL2'
Alg FR F FR'
Alg FR F2 FR'
Alg FR F2' FR'
Alg FR F' FR'
Alg FR2 R FR2'
Alg FR2 R2 FR2'
Alg FR2 R2' FR2'
Alg FR2 R' FR2'
Alg FL2' L FL2
Alg FL2' L2 FL2
Alg FL2' L2' FL2
Alg FL' F FL
Alg FL' F2 FL
Alg FL' F' FL
Alg FR F FR' F'
Alg FR F2 FR' L
Alg FR F2' FR' U
Alg FR F2' FR' U2
Alg FR F2' FR' U2'
Alg FR F' FR' R
Alg FR F' FR' R2
Alg FR F' FR' R2'
Alg FR F' FR' R'
Alg FR2 R FR2' F2
Alg FR2 R FR2' R'
Alg FR2 R2' BR FR2'
Alg FR2 R2' BR2 FR2'
Alg FR2 R2' BR2' FR2'
Alg FR2 R2' BR' FR2'
Alg FL2' L2 FL2 BL
Alg FL2' L2 FL2 BL2
Alg FL2' L2' FL2 U
Alg FL' F L2 FL
Alg FL' F L2' FL
Alg FL' F FL L
Alg DR' FR2 R' FR2' DR
Alg FR F2' U2' BR FR'
Alg FR F2' U2' BR2 FR'
Alg FR F' FR R' FR2'
Alg FL2' L2' FL2 U BL2
Alg FL2' L2' FL2 U BL2'
Alg FR F L F' FR'
Alg FR F L2 F' FR'
Alg FR F L2' F' FR'
Alg FR F L' F' FR'
Alg FR F2 U F2' FR'
Alg FR F2 U2 F2' FR'
Alg FR F2 U2' F2' FR'
Alg FR F2' R F2 FR'
Alg FR F2' R2 F2 FR'
Alg FR F2' R2' F2 FR'
Alg FR FL' L FL FR'
Alg FR FL' L2 FL FR'
Alg FR FL' L' FL FR'
Alg FR2 F2' L F2 FR2'
Alg FR2 F2' L2 F2 FR2'
Alg FR2 F' U2 F FR2'
Alg FR2 F' U2' F FR2'
Alg FR2 R U R' FR2'
Alg FR2 R U' R' FR2'
Alg FR2 R2 BR2 R2' FR2'
Alg FR2 R2 BR2' R2' FR2'
Alg FR2' DR BR DR' FR2
Alg FR2' R2' U R2 FR2
Alg FR2' R2' U2 R2 FR2
Alg FR2' R' BR2 R FR2
Alg FR2' R' BR2' R FR2
Alg FR2' R' BR' R FR2
Alg FL2 L BL L' FL2'
Alg FL2 L2 U2' L2' FL2'
Alg FL2 DL' BL2 DL FL2'
Alg FL2' F2 R2' F2' FL2
Alg FL2' L2' BL2 L2 FL2
Alg FL' F2 L F2' FL
Alg FL' F2 L2 F2' FL
Alg FL' F' R' F FL
Alg FL' FR R' FR' FL
Alg FR F L2' F' FR' BL
Alg FR F L2' F' FR' BL2
Alg FR F L' F' FR' F'
Alg FR F2 U2 BR2 F2' FR'
Alg FR F2 U2 BR2' F2' FR'
Alg FR F2' R F2 R2' FR'
Alg FR F2' R2' F2 FR' R'
Alg FR FL' L FL FR' F'
Alg FR2 F' U2 F FR2' L2'
Alg FR F L2 BL' L2 F' FR'
Alg FR F L2' F U' F2' FR'
Alg R
Alg R2
Alg R2'
Alg R'
Alg R2 F
Alg R2 F2
Alg R2 F2'
Alg R2 F'
Alg R2' U
Alg R2' U2
Alg R2' U2'
Alg R2' U'
Alg R' BR
Alg R' BR2
Alg R' BR2'
Alg R' BR'
Alg DR BR DR'
Alg DR BR2' DR'
Alg DR BR' DR'
Alg FR R FR'
Alg R2 F2' L
Alg R2 F2' L2
Alg R2 F2' L2'
Alg R2 F' U
Alg R2 F' U2
Alg R2 F' U'
Alg R2' U F
Alg R2' U F2'
Alg R2' U F'
Alg R2' U2' BL
Alg R2' U2' BL2
Alg R2' U2' BL2'
Alg R2' U' BR2'
Alg DR BR DR' R
Alg DR BR DR' R2
Alg DR BR2' BL2' DR'
Alg DR BR2' BL' DR'
Alg R2 F' U L2
Alg R2 F' U L2'
Alg FR' F FR
Alg FR' F2 FR
Alg FR' F2' FR
Alg FR' F' FR
Alg R F R'
Alg R F2 R'
Alg R F2' R'
Alg R F' R'
Alg R2 U2 R2'
Alg R2 U2' R2'
Alg R2' BR R2
Alg R2' BR2 R2
Alg R2' BR2' R2
Alg FR R2 FR' R2'
Alg FR R2' FR' R2
Alg FR' F FR F'
Alg FR' F2 FR F'
Alg FR' F2 FR L
Alg FR' F2 FR L2
Alg FR' F2 FR L2'
Alg FR' F2 FR L'
Alg FR' F2' FR U2'
Alg FR' F2' FR L2
Alg FR' F2' FR L2'
Alg FR' F2' FR L'
Alg FR' F' FR U2'
Alg R F2' U' R'
Alg R F2' R' L
Alg R F2' R' L2
Alg R F2' R' L2'
Alg R2 U2 R2' BL2
Alg R2 U2 R2' BL2'
Alg R2 U2' BR R2'
Alg R2 U2' BR2 R2'
Alg R2 U2' R2' BL2'
Alg R2 U2' R2' BR2'
Alg R2 U2' R2' BR'
Alg R2 U' BR2' R2'
Alg R2' BR R2 BR2'
Alg DR BR2 BL2' BR2' DR'
Alg FR R2' FR' R2 F2
Alg FR' F2 L' F2 FR
Alg FR' F2' U2' BR' FR
Alg FR' F2' L F2' FR
Alg DR' R DR
Alg DR' R2 DR
Alg DR' R2' DR
Alg DR' R' DR
Alg DR' R DR F
Alg DR' R DR F2
Alg DR' R DR F2'
Alg DR' R DR F'
Alg DR' R2 DR U
Alg DR' R2 DR U2
Alg DR' R2 DR U2'
Alg DR' R2 DR U'
Alg DR' R2' DR BR
Alg DR' R2' DR BR2
Alg DR' R2' DR BR2'
Alg DR' R2' DR BR'
Alg DR' R' DR BR
Alg DR' R' DR BR2'
Alg DR' R' DR BR'
Alg B2' DR2' R' DR2 B2
Alg DR2' FR' F FR DR2
Alg DR2' FR' F2 FR DR2
Alg DR2' FR' F' FR DR2
Alg DR' R DR F2' L
Alg DR' R DR F2' L2
Alg DR' R DR F2' L2'
Alg DR' R DR F' U
Alg DR' R DR F' U2
Alg DR' R DR F' U'
Alg DR' R2 U2' BL DR
Alg DR' R2 U2' BL2 DR
Alg DR' R2 U2' BL2' DR
Alg DR' R2 DR U F2
Alg DR' R' DR BR2' BL2'
Alg DR2' FR' F2 FR DR2 L
Alg DR2' FR' F2 FR DR2 L2
Alg DR' FR' F' FR R' DR
Alg BR
Alg BR2
Alg BR2'
Alg BR'
Alg BR2' U
Alg BR2' U2
Alg BR2' U2'
Alg BR2' U'
Alg BR' BL
Alg BR' BL2
Alg BR' BL2'
Alg BR' BL'
Alg B BL B'
Alg B BL2' B'
Alg B BL' B'
Alg BR2' U2 F
Alg BR2' U2 F2
Alg BR2' U2 F2'
Alg BR2' U2 F'
Alg BR2' U2' L
Alg BR2' U2' L2
Alg BR2' U2' L2'
Alg BR2' U' BL2'
Alg BR' BL U
Alg BR' BL U2
Alg BR' BL U2'
Alg BR' BL U'
Alg B BL B' BR
Alg B BL B' BR2
Alg B BL B' BR2'
Alg B BL2' L2' B'
Alg B BL2' L' B'
Alg BR2' U2' L F2
Alg BR2' U2' L F2'
Alg BR2' U2' L F'
Alg BR2 U BR2'
Alg BR2 U2 BR2'
Alg BR2 U2' BR2'
Alg BR2 U' BR2'
Alg BR2' BL BR2
Alg BR2' BL2 BR2
Alg BR2' BL2' BR2
Alg BR R BR' R'
Alg BR2 U BR2' U2'
Alg BR2 U BR2' U'
Alg BR2 U BR2' F
Alg BR2 U BR2' F2
Alg BR2 U BR2' F2'
Alg BR2 U BR2' F'
Alg BR2 U2 BR2' F
Alg BR2 U2 BR2' F2
Alg BR2 U2 BR2' F2'
Alg BR2 U2 BR2' F'
Alg BR2 U2 BR2' L
Alg BR2 U2 BR2' L2
Alg BR2 U2 BR2' L2'
Alg BR2 U2' BL BR2'
Alg BR2 U2' BL2 BR2'
Alg BR2 U2' BL' BR2'
Alg BR2 U2' BR2' L
Alg BR2 U2' BR2' L2'
Alg BR2 U2' BR2' BL2'
Alg BR2 U2' BR2' BL'
Alg BR2 U' BL BR2'
Alg BR2 U' BL2' BR2'
Alg BR2 U' BL' BR2'
Alg BR2' BL BR2 U2
Alg BR2' BL BR2 U2'
Alg BR2' BL BR2 BL2'
Alg BR2' BL BR2 BL'
Alg B BL2 L2' BL2' B'
Alg DR' R2 F R2' DR
Alg BR2 U F' U2' BR2'
Alg BR2 U BR2' U2' BL'
Alg BR2 U2 F U' BR2'
Alg BR2 U2 BR2' L F2'
Alg B' BR B
Alg B' BR2 B
Alg B' BR2' B
Alg B' BR' B
Alg B' BR2 B U
Alg B' BR2 B U2
Alg B' BR2 B U2'
Alg B' BR2 B U'
Alg B' BR2' B BL
Alg B' BR2' B BL2
Alg B' BR2' B BL2'
Alg B' BR2' B BL'
Alg B' BR' B BL
Alg B' BR' B BL2'
Alg B' BR' B BL'
Alg B' BR2 U2' L B
Alg B' BR2 U2' L2 B
Alg B' BR2 U2' L2' B
Alg B' BR2 B U2 F
Alg B' BR2 B U2 F2
Alg B' BR2 B U2 F2'
Alg B' BR2 B U2 F'
Alg B' BR2' B BL U
Alg B' BR2' B BL U2
Alg B' BR2' B BL U2'
Alg B' BR2' B BL U'
Alg B' BR' B BL2' L2'
Alg B' BR' B BL2' L'
Alg BR2 R U R' BR2'
Alg B' BR2 U2' L B F2'
Alg B' BR2 U2' L B F'
Alg B' BR' B BR2 BL BR2'
Alg B' BR2 U R BR' R' B
Alg BR U BR'
Alg BR U2 BR'
Alg BR U2' BR'
Alg BR U' BR'
Alg BR2 BL BR2'
Alg BR2 BL2 BR2'
Alg BR2 BL2' BR2'
Alg BR2 BL' BR2'
Alg R2' F R2
Alg R2' F2 R2
Alg R2' F2' R2
Alg R' U R
Alg R' U2 R
Alg R' U' R
Alg BR U BR' U'
Alg BR U2 BR' F
Alg BR U2' BR' L
Alg BR U2' BR' L2
Alg BR U2' BR' L2'
Alg BR U' BL BR'
Alg BR U' BL2 BR'
Alg BR U' BL2' BR'
Alg BR U' BR' BL'
Alg BR2 BL BR2' U2
Alg BR2 BL BR2' BL'
Alg R2' F2' R2 L
Alg R2' F2' R2 L2
Alg R' U F2 R
Alg R' U F2' R
Alg R' U R F
Alg BR U' BR BL' BR2'
Alg BR U F U' BR'
Alg BR U F2 U' BR'
Alg BR U F2' U' BR'
Alg BR U F' U' BR'
Alg BR U2 L U2' BR'
Alg BR U2 L2 U2' BR'
Alg BR U2 L2' U2' BR'
Alg BR U2' BL U2 BR'
Alg BR U2' BL2 U2 BR'
Alg BR U2' BL2' U2 BR'
Alg BR R' F R BR'
Alg BR R' F2 R BR'
Alg BR R' F' R BR'
Alg BR2 U2' F U2 BR2'
Alg BR2 U2' F2 U2 BR2'
Alg BR2 U' L2 U BR2'
Alg BR2 U' L2' U BR2'
Alg BR2 BL L BL' BR2'
Alg BR2 BL L' BL' BR2'
Alg BR2' BL2' L BL2 BR2
Alg BR2' BL2' L2 BL2 BR2
Alg R2 F2 L F2' R2'
Alg R2 F2 L2 F2' R2'
Alg R2 F2 L2' F2' R2'
Alg R2' U2 BL2' U2' R2
Alg R' U2 F U2' R
Alg R' U2 F2 U2' R
Alg R' U' BL' U R
Alg R' BR BL' BR' R
Alg BR U F' U' BR' U'
Alg BR U2 L' BL2 U2' BR'
Alg BR U2' BL U2 BL2' BR'
Alg BR U2' BL2' U2 BR' BL'
Alg BR R' F R BR' U'
Alg BR2 U' L2 U BR2' F2'
Alg BR2 U' L2 U BR2' F'
Alg BR U F2' U L' U2' BR'
Alg BR U F2' L' F U' BR'
Alg F
Alg F2
Alg F2'
Alg F'
Alg F L
Alg F L2
Alg F L2'
Alg F L'
Alg F2 U
Alg F2 U2
Alg F2 U2'
Alg F2 U'
Alg F L2' BL
Alg F L2' BL2
Alg F L2' BL2'
Alg F L' U
Alg F L' U2
Alg F L' U2'
Alg F L' U'
Alg F2 U L
Alg F2 U L2
Alg F2 U L2'
Alg F2 U L'
Alg F L' U BL2
Alg F L' U BL2'
Alg F L' U BL'
Alg F L' U' F
Alg F L' U' F2
Alg F L' U' F2'
Alg F2 L F2'
Alg F2 L2 F2'
Alg F2 L2' F2'
Alg F2 L' F2'
Alg F2' U2 F2
Alg F2' U2' F2
Alg F2' U' F2
Alg F2 L2 F2' L2'
Alg F2 L2 F2' L'
Alg F2 L2' BL F2'
Alg F2 L2' BL2 F2'
Alg F2 L2' BL2' F2'
Alg F2 L' F2' U
Alg F2 L' F2' U2
Alg F2 L' F2' U2'
Alg F2 L' F2' U'
Alg F2 L' BL F2'
Alg F2 L' BL2 F2'
Alg F2 L' BL2' F2'
Alg F2' U L F2
Alg F2' U L2 F2
Alg F2' U L' F2
Alg F2' U2 F2 U2'
Alg F2' U2 F2 U'
Alg F2' U2 F2 L2
Alg F2' U2 F2 L2'
Alg F2' U2 F2 L'
Alg F2' U2 L F2
Alg F' R' F R
Alg F L2 BL L2' F'
Alg F L2 BL2 L2' F'
Alg F2 L2 F2' L2' U2'
Alg F2 L2' BL' L F2'
Alg F2 L' F U2' F2
Alg F2 L' F' U' F'
Alg FL F FL'
Alg FL F2 FL'
Alg FL F2' FL'
Alg FL F' FL'
Alg FL F FL' L
Alg FL F FL' L2
Alg FL F FL' L2'
Alg FL F FL' L'
Alg FL F2 FL' L
Alg FL F2 FL' L2
Alg FL F2 FL' L2'
Alg FL F2 FL' L'
Alg FL F2' FL' U2
Alg FL F2' FL' U2'
Alg FL F2' FL' U'
Alg F2 U2 L' U2' F2'
Alg F2 U2' L' U2 F2'
Alg F2 U' L' U F2'
Alg FL F FL' L2 BL
Alg FL F FL' L2 BL2
Alg FL F FL' L2 BL2'
Alg FL F2 FL' L2' BL
Alg FL F2 FL' L2' BL2
Alg FL F2 FL' L2' BL2'
Alg FL F2 FL' L' U'
Alg FL F FL' F2' L' F2
Alg F2 U F U L U2' F2'
Alg F2' L F2
Alg F2' L2 F2
Alg F2' L2' F2
Alg F2' L' F2
Alg F' U F
Alg F' U2 F
Alg F' U2' F
Alg F' U' F
Alg R U R'
Alg R U2' R'
Alg R U' R'
Alg F R' F' R
Alg F2' L F2 L'
Alg F2' L2' BL F2
Alg F2' L2' BL2 F2
Alg F2' L2' BL2' F2
Alg F' U F U'
Alg F' U F L
Alg F' U F L2
Alg F' U F L2'
Alg F' U F L'
Alg R U2' R' BL2
Alg R U2' R' BL2'
Alg R U2' R' BL'
Alg F2' L' F U' F
Alg F2 L2 BL L2' F2'
Alg F2 L2 BL2 L2' F2'
Alg F2 L2 BL2' L2' F2'
Alg F2 L2 BL' L2' F2'
Alg F2' U BL U' F2
Alg F2' U BL' U' F2
Alg F2' L' BL L F2
Alg F2' L' BL2 L F2
Alg F2' L' BL2' L F2
Alg F2' L' BL' L F2
Alg F' U2 L U2' F
Alg F' U2 L2 U2' F
Alg F' U2 L2' U2' F
Alg F' U2' BL2 U2 F
Alg R U L U' R'
Alg R U L' U' R'
Alg R F' L F R'
Alg R2 U2' L2 U2 R2'
Alg R2 U' BL2 U R2'
Alg R2 U' BL2' U R2'
Alg R2 U' BL' U R2'
Alg R2 BR BL' BR' R2'
Alg F2 L2 BL2' L2' F2' U2
Alg F2' U BL U' F2 L
Alg F2' U BL' U' F2 L2
Alg F2' U BL' U' F2 L2'
Alg F2' L' BL L F2 U2
Alg F2' L' BL L F2 U2'
Alg F2' L' BL' L F2 U
Alg F2' L' BL' L F2 U2
Alg F' U2 L' U BL2' U2 F
Alg F' U2' BL L' BL2' U2 F
Alg U
Alg U2
Alg U2'
Alg U'
Alg U L
Alg U L2
Alg U L2'
Alg U L'
Alg U2 BL
Alg U2 BL2
Alg U2 BL2'
Alg U2 BL'
Alg U L' BL
Alg U L' BL2
Alg U L' BL2'
Alg U L' BL'
Alg U2 BL L
Alg U2 BL L2
Alg U2 BL L2'
Alg U2 BL L'
Alg U F' L F
Alg U L' BL' U
Alg U L' BL' U2
Alg U2 L U2'
Alg U2 L2 U2'
Alg U2 L2' U2'
Alg U2 L' U2'
Alg U2' BL2 U2
Alg U2' BL2' U2
Alg U2' BL' U2
Alg U2 L2 U2' L2'
Alg U2 L2 U2' L'
Alg U2 L' U2' BL
Alg U2 L' U2' BL2
Alg U2 L' U2' BL2'
Alg U2 L' U2' BL'
Alg U2' BL L U2
Alg U2' BL L2 U2
Alg U2' BL L2' U2
Alg U2' BL L' U2
Alg U2' BL2 U2 L2
Alg U2' BL2 U2 L2'
Alg U2' BL2 U2 L'
Alg U2' BL2 U2 BL2'
Alg U2' BL2 U2 BL'
Alg U2' BL2 L U2
Alg U' BR' U BR
Alg U2 L' U BL2' U2
Alg U2 L2' U2' L2 BL2
Alg U2 L2' U2' L2 BL2'
Alg U2 L' U' BL' U'
Alg U2' BL2 U' L U2'
Alg F U F'
Alg F U2 F'
Alg F U2' F'
Alg F U' F'
Alg F U F' L
Alg F U F' L2
Alg F U F' L2'
Alg F U F' L'
Alg F U2 F' L
Alg F U2 F' L2
Alg F U2 F' L2'
Alg F U2 F' L'
Alg F U2' BL2 F'
Alg F U2' BL2' F'
Alg F U2' BL' F'
Alg U2 BL2 L' BL2' U2'
Alg U2 BL' L' BL U2'
Alg U2 BL2' L' BL2 U2'
Alg F U2 F' L' BL'
Alg F U F' U2' L' U2
Alg U2 L U2 L2' U' BL' U2
Alg U2' L U2
Alg U2' L2 U2
Alg U2' L2' U2
Alg U2' L' U2
Alg U' BL U
Alg U' BL2 U
Alg U' BL2' U
Alg U' BL' U
Alg BR BL BR'
Alg BR BL2' BR'
Alg BR BL' BR'
Alg U BR' U' BR
Alg U2' L U2 L'
Alg U' BL U L
Alg U' BL U L2
Alg U' BL U L2'
Alg U' BL U L'
Alg U' BL U BL'
Alg U2' L' U BL' U
Alg U' BL2 L BL2' U
Alg U' BL2 L2 BL2' U
Alg U' BL2 L2' BL2' U
Alg U' BL2 L' BL2' U
Alg BR U' L U BR'
Alg BR U' L2 U BR'
Alg BR U' L2' U BR'
Alg BR U' L' U BR'
Alg BR BL L BL' BR'
Alg BR BL L' BL' BR'
Alg BR2 BL2' L BL2 BR2'
Alg BR2 BL2' L2 BL2 BR2'
Alg U2' L BL2' L' BL2 U2
Alg U2' L2 F' L2' F U2
Alg U2' L' DL L DL' U2
Alg U2' BL2' L BL2 L' U2
Alg U2' BL2' L2 BL2 L2' U2
Alg U' BL2 L BL2' U BL
Alg U' BL2 L2 BL2' U L
Alg U' BL2 L2 BL2' U BL2'
Alg U' BL2 L2 BL2' U BL'
Alg U' BL2 L2 BL2' L2' U
Alg BR BL L' BL' BR' BL2'
Alg BR BL L' BL' BR' BL'
Alg U' BL U BL U' L2' BL2' U
Alg U' BL2 U' L2 U L' BL2' U
Alg L
Alg L2
Alg L2'
Alg L'
Alg L' BL
Alg L' BL2
Alg L' BL2'
Alg L' BL'
Alg U BL U'
Alg U BL2 U'
Alg U BL2' U'
Alg U BL' U'
Alg U BL U' L
Alg U BL U' L2
Alg U BL U' L2'
Alg U BL U' L'
Alg U BL U' BL'
Alg L2' BL L2
Alg L2' BL2 L2
Alg L2' BL2' L2
Alg L2' BL' L2
Alg L2 DL L2' DL'
Alg L2' BL L2 BL2'
Alg L2' BL L2 BL'
Alg F' L2 BL L2' F
Alg F' L2 BL2 L2' F
Alg F' L2 BL2' L2' F
Alg F' L2 BL' L2' F
Alg L2 DL L' DL' L'
Alg L2' U BL2' U' L2
Alg L2' BL L2' BL2' L'
Alg L2' BL L' BL2' L2'
Alg L2' DL L' DL' L2
Alg L' U' L' U L2
Alg U L' DL L DL' U'
Alg F' L2 BL L2' BL2' F
Alg L2 DL' BL DL2 L2' DL'
Alg L2' U BL2' U' BL L2
Alg L2' BL' U BL' U' L2
Alg L2' BL' L2 U' L' U
Alg U' L U
Alg U' L2 U
Alg U' L2' U
Alg U' L' U
Alg U' L2' U BL
Alg U' L2' U BL2
Alg U' L2' U BL2'
Alg U' L2' U BL'
Alg U' L' U BL
Alg U' L' U BL2
Alg U' L' U BL2'
Alg U' L' U BL'
Alg U' L' U L BL L'
Alg U' L' U L2 BL L2'
Alg U' L' U BL U' L2 U
Alg L2 BL L2'
Alg L2 BL2 L2'
Alg L2 BL2' L2'
Alg L2 BL' L2'
Alg L2 BL L2' BL'
Alg L DL L' DL'
Alg DL L DL' L'
Alg L U' L2 U L2
Alg L DL' BL DL L'
Alg L DL' BL2 DL L'
Alg L DL' BL' DL L'
Alg DL L DL' L' BL'
Alg L2 BL L' DL L' DL'
Alg FL' L BL L' FL
Alg FL' L BL2 L' FL
Alg FL' L BL2' L' FL
Alg FL' L BL' L' FL
Alg FL' DL' BL DL FL
Alg FL' DL' BL2 DL FL
Alg FL' DL' BL2' DL FL
Alg FL' DL' BL' DL FL
Alg L2 BL2' U BL2 U' L2'
Alg FL' L BL L' FL BL2'
Alg FL' L BL' L' FL BL
Alg U' F U BL U' F' U
Alg U' F U BL2 U' F' U
Alg U' F U BL2' U' F' U
Alg F' FL2' DL' BL' DL FL2 F
Alg L2' BL2 L2' BL' L2 BL' L2
Alg DL L DL2' BL' DL2 L' DL'
Alg DL2 FL2' DL2 BL' DL2' FL2 DL2'
Alg FL' L U BL2' U' BL L' FL
Alg FL' L2 U' L' U BL2 L' FL
Alg L BL L'
Alg L BL2 L'
Alg L BL2' L'
Alg L BL' L'
Alg DL' BL DL
Alg DL' BL2 DL
Alg DL' BL2' DL
Alg DL' BL' DL
Alg L BL L' BL'
Alg L' DL L DL'
Alg L BL2 L' DL' BL' DL
Alg L U BL2' U' BL2 L'
Alg L BL2' U BL2 U' L'
Alg DL' B' BL2 B BL2' DL
Alg DL' BL2 B' BL2' B DL
Alg U BL2' DL2' BL2 U' BL2' DL2
Alg B' BL2 L2 BL2' B BL2 L2'
Alg L U BL2' U' BL2 L' BL2'
Alg L U BL2' U' BL2 L' BL'
Alg L BL B BL' L' BL B'
Alg L BL2' U BL2 U' L' BL2
Alg L BL' U BL2 U' BL L'
Alg L BL' U BL2' U' BL L'
Alg L BL' U BL' U' BL L'
Alg L2 BL2 L2' BL' L2 BL' L2'
Alg DL' BL B' BL2' B BL' DL
Alg L BL2' L U2 BR' U' BR U' L2'
Alg L BL2' L BL L' BL L BL2' L2'
Alg BL
Alg BL2
Alg BL2'
Alg BL'
Alg U BR BL2 BR' BL2' U'
Alg B BL DL BL' DL' B'
Alg L' BL2' DL' BL2 DL L
Alg BR B BL B' BL' BR'
Alg U BR BL2 BR' BL2' U' BL2
Alg U BL BR BL' BR' U'
Alg U BR BL BR' BL' U'
Alg U' L' BL2' L BL2 U
Alg B' BR' BL2' BR BL2 B
Alg L BL2 U BL2' U' L'
Alg BR B BL2 B' BL2' BR'
Alg U BL2 U' BL' U BL' U'
Alg B BL DL BL DL' BL2' B'
Alg B BL2 DL BL' DL' BL' B'
Alg B' BL' B BL2' B' BL2' B
Alg U BL U' BL2 U BL2 U' BL2
Alg U BR2 B' BR2' U' BR B BR'
Alg BL2 BR B DL' B DL B2' BR'
Alg B BL2' B2' BR B BR' B BL2 B'
Alg U' BL' L' BL L U BL
Alg B' BL2 B BL B' BL2 B
Alg B' BL2' B BL' B' BL2' B
Alg B' BL' BR' BL' BR BL2 B
Alg B' BL2' BR' BL BR BL B
Alg U' BL' L' BL' L BL2 U BL'
Alg L' BL' L' DL L DL' BL L BL
Alg L U BL U' BL' L'
Alg L BL U BL' U' L'
Alg BR' U' BL' U BL BR
Alg L U2 BR' U' BR U' L'
Alg U BL U2' L U L2' BL L BL2'
Alg U' L2 F' L' F2 U' F' U2 L'
Alg U BR' U' L U BR U' L'
Alg U BR B BR' U' BR B' BR'
Alg U' L U BR' U' L' U BR
Alg B DL' B' BR B DL B' BR'
Alg L' DL' B DL L DL' B' DL
Alg BR B BR' U BR B' BR' U'
Alg BR B DL' B' BR' B DL B'
Alg U BR2' U2 L2 U2' BR2 U2 L2' U2
Alg U2' L2 U2' BR2' U2 L2' U2' BR2 U'
Alg U BL' B' BL U' L U2 BL' B BL U2' L'
Alg U BR' U' L F' L2' U BR U' L2 F L'
Alg U BR U' L U BR' U' L'
Alg U' BL2 B BL2' U BL2 B' BL2'
Alg L U BR U' L' U BR' U'
Alg L BL2' B' BL2 L' BL2' B BL2
Alg U BR' U2 L2 U2' BR U2 L2' U2
Alg L' BL2 L2' F' L2 BL2' L2' F L2'
Alg U BL2' U R U' BL2 U' L U2 R' U2' L'
Alg U BR U' L2 F L' U BR' U' L F' L2'
Alg U L' BL2 L' FL' L BL2' L U' L2' FL L2
Alg U BR2' U R' U2' L U2 R U' BR2 U' L'\`)}var QL,jL,e1=y(()=>{"use strict";He();Zn();Jn();QL=null;jL=null});async function P0(){return VL??(VL=HL())}async function t1(){return{ordering:(await P0()).ordering.slice(2)}}async function HL(){return jt(await Pe.pyraminx.kpuzzle(),\`SubgroupSizes 12 9 12 3 10 3 8 6 2 3 3 3 3

Alg B
Alg B'
Alg y
Alg B y
Alg B' y
Alg y'
Alg B y'
Alg B' y'
Alg BR'
Alg B BR'
Alg B' BR'

Alg L
Alg L'
Alg L F
Alg L' F
Alg F
Alg L F'
Alg L' F'
Alg F'

Alg L B' U L' B
Alg L U L'
Alg L U' L'
Alg L U L' U'
Alg B' U B
Alg B' U' B
Alg B' U' B U
Alg L U' L' R
Alg L U' L' R'
Alg L' R' L
Alg L' R' L R

Alg R
Alg R'

Alg R' U R
Alg R' U' R
Alg R' U R U'
Alg B U B'
Alg B U' B'
Alg R B' R' B
Alg L R L' R U' R
Alg R L R' L'
Alg L' R' U R L

Alg U
Alg U'

Alg R U R' U'
Alg U R U' R'
Alg L' U' L U
Alg U' L' U L
Alg U L R' L' R U'
Alg U' R' L R L' U
Alg L' U' L U' R U' R'

Alg R U' R' U
Alg L' U L U'
Alg U' R U R'
Alg U L' U' L
Alg L R' L' R L' U L U'

Alg L' U L U' L R' L' R

Alg b
Alg b'

Alg l
Alg l'

Alg r
Alg r'

Alg u
Alg u'\`)}var VL,r1=y(()=>{"use strict";rr();Jn();VL=null});async function ZL(){let e=Hn("skewb",{allMoves:!0,addRotations:!0});return new Ae(e.getKPuzzleDefinition(!0),{experimentalPGNotation:new Dr(e,e.getOrbitsDef(!0))})}async function N0(){return JL??(JL=ZL())}async function M0(){return YL??(YL=XL())}async function n1(){return{ordering:(await M0()).ordering.slice(1)}}async function XL(){return jt(await N0(),\`SubgroupSizes 24 6 5 12 9 3 4 9 3 3

Alg y
Alg y2
Alg y'
Alg F
Alg F'
Alg y U
Alg y U'
Alg y L
Alg y L'
Alg y F
Alg y F'
Alg y2 U
Alg y2 U'
Alg y2 B
Alg y2 B'
Alg y' U
Alg y' F'
Alg y U L'
Alg y U B
Alg y2 U B
Alg y2 U B'
Alg y2 U' B
Alg y2 U' B'

Alg U
Alg U'
Alg U L
Alg U L'
Alg U' R'

Alg R
Alg R'
Alg R B
Alg R' L'

Alg U B' U
Alg U' L U
Alg U' L' U
Alg U' B U'
Alg R L R'
Alg R B' R
Alg U B L U'
Alg U B' U B'
Alg U B' L' U
Alg U' L B U'
Alg R' B L' R'

Alg L
Alg L'
Alg L B
Alg L B'
Alg L B L
Alg L B L'
Alg L B' L
Alg L B' L'

Alg B
Alg B'

Alg L' B L
Alg L' B' L
Alg R' L' B L R

Alg B L' B L B'
Alg B L' B' L B'
Alg U L U B U' L' U'
Alg R L R' B' R L' R'
Alg U B' R L R' B' U B
Alg U' B U L U' B' U L'
Alg L U' B U L' U' B' U
Alg R B' U R B L U' B

Alg U L U' B' U L' U' B
Alg U' B L U L B' U' L'

Alg U R' U' L B R' B' R
Alg R' U' R U B' U' B L\`)}var JL,YL,o1=y(()=>{"use strict";He();Zn();Jn();JL=null;YL=null});var l1={};ht(l1,{cachedData222:()=>Yu,cachedMegaminxKPuzzleWithoutMO:()=>z0,cachedSGSDataMegaminx:()=>$u,sgsDataPyraminx:()=>P0,sgsDataPyraminxFixedOrientation:()=>t1,sgsDataSkewb:()=>M0,sgsDataSkewbFixedCorner:()=>n1,skewbKPuzzleWithoutMOCached:()=>N0});var i1=y(()=>{"use strict";Xu();e1();r1();o1()});async function Yn(e,t){let r=new mt;r.experimentalPushAlg(e);for(let n of t){let o=(await nr())(n);o!==null&&r.push(B.fromString(o))}return r.toAlg()}var Ui=y(()=>{"use strict";Be();yt()});function F1(){}function nB(e){function t(){}return t.prototype=e||{},new t}function oB(e){return e instanceof Array?e[0]:null}function Ll(e,t,r){var n=Gi,o=lB,l=oB,i=n[e],s=l(i);i&&!s?H=i:(H=n[e]=t?o(t):{},H.castableTypeMap$=r,H.constructor=H,!t&&(H.typeMarker$=F1));for(var a=3;a<arguments.length;++a)arguments[a].prototype=H;s&&(H.___clazz$=s)}function lB(e){var t=Gi;return nB(t[e])}function iB(){}function vi(e){return e<<24>>24}function Y0(){this.typeName=null,this.simpleName=null,this.packageName=null,this.compoundName=null,this.canonicalName=null,this.typeId=null,this.arrayLiterals=null}function X0(e,t){var r;return r=new Y0,r.packageName=e,r.compoundName=t,r}function zr(e,t,r){var n;return n=X0(e,t),fB(r,n),n}function sB(e,t){var r;return r=X0(e,t),r.modifiers=2,r}function Oi(e,t){var r;return r=X0("",e),r.typeId=t,r.modifiers=1,r}function D1(e,t){var r=e.arrayLiterals=e.arrayLiterals||[];return r[t]||(r[t]=e.createClassLiteralForArray(t))}function aB(e){if(e.isPrimitive())return null;var t=e.typeId,r=Gi[t];return r}function fB(e,t){if(!!e){t.typeId=e;var r=aB(t);if(!r){Gi[e]=[t];return}r.___clazz$=t}}function te(e,t){return D1(e,t)}function Y(e,t,r,n,o,l){var i;return i=y1(o,n),re(te(e,l),t,r,o,i),i}function rt(e,t,r,n,o,l){return A1(e,t,r,n,o,0,l)}function A1(e,t,r,n,o,l,i){var s,a,f,u,g;if(u=o[l],f=l==i-1,s=f?n:0,g=y1(s,u),re(te(e,i-l),t[l],r[l],s,g),!f)for(++l,a=0;a<u;++a)g[a]=A1(e,t,r,n,o,l,i);return g}function re(e,t,r,n,o){return o.___clazz$=e,o.castableTypeMap$=t,o.typeMarker$=F1,o.__elementTypeId$=r,o.__elementTypeCategory$=n,o}function y1(e,t){var r=new Array(t),n;switch(e){case 6:n={l:0,m:0,h:0};break;case 7:n=0;break;case 8:n=!1;break;default:return r}for(var o=0;o<t;++o)r[o]=n;return r}function g1(e){var t,r,n;return t=e&nt,r=e>>22&nt,n=e<0?vr:0,uB(t,r,n)}function uB(e,t,r){return{l:e,m:t,h:r}}function gB(e,t){var r,n,o;return r=e.l+t.l,n=e.m+t.m+(r>>22),o=e.h+t.h+(n>>22),{l:r&nt,m:n&nt,h:o&vr}}function qt(e,t){return{l:e.l&t.l,m:e.m&t.m,h:e.h&t.h}}function $0(e){var t,r;return e>-129&&e<128?(t=e+128,xi==null&&(xi=Y(KB,fe,293,256,0,1)),r=xi[t],!r&&(r=xi[t]=g1(e)),r):g1(e)}function U1(e,t){var r,n;return r=e.h>>19,n=t.h>>19,r==0?n!=0||e.h>t.h||e.h==t.h&&e.m>t.m||e.h==t.h&&e.m==t.m&&e.l>=t.l:!(n==0||e.h<t.h||e.h==t.h&&e.m<t.m||e.h==t.h&&e.m==t.m&&e.l<t.l)}function G0(e,t){return e.l!=t.l||e.m!=t.m||e.h!=t.h}function W0(e,t){return{l:e.l|t.l,m:e.m|t.m,h:e.h|t.h}}function Ei(e,t){var r,n,o;return t&=63,t<22?(r=e.l<<t,n=e.m<<t|e.l>>22-t,o=e.h<<t|e.m>>22-t):t<44?(r=0,n=e.l<<t-22,o=e.m<<t-22|e.l>>44-t):(r=0,n=0,o=e.l<<t-44),{l:r&nt,m:n&nt,h:o&vr}}function gn(e,t){var r,n,o,l,i;return t&=63,r=e.h,n=(r&rB)!=0,n&&(r|=-1048576),t<22?(i=r>>t,l=e.m>>t|r<<22-t,o=e.l>>t|e.m<<22-t):t<44?(i=n?vr:0,l=r>>t-22,o=e.m>>t-22|r<<44-t):(i=n?vr:0,l=n?nt:0,o=r>>t-44),{l:o&nt,m:l&nt,h:i&vr}}function x1(e,t){var r,n,o;return r=e.l-t.l,n=e.m-t.m+(r>>22),o=e.h-t.h+(n>>22),{l:r&nt,m:n&nt,h:o&vr}}function pn(e){return e.l|e.m<<22}function pB(e){this.string=e}function Er(e,t){return e>t?e:t}function ea(e,t){return e<t?e:t}function cB(e,t){return e.indexOf(t)}function mB(e){return LB(e,0,e.length)}function LB(e,t,r){for(var n="",o=t;o<r;){var l=Math.min(o+1e4,r);n+=String.fromCharCode.apply(null,e.slice(o,l)),o=l}return n}function BB(e){return String.fromCharCode(e&Je)}function p1(e){return e.string+=" ",e}function c1(e,t){return e.string+=t,e}function dB(){pB.call(this,"")}function _i(e,t){var r;if(e===t)return!0;if(e.length!=t.length)return!1;for(r=0;r<e.length;++r)if(e[r]!=t[r])return!1;return!0}function cn(){m1||(m1=!0,Sr=rt(Ue,[fe,ye],[11,0],7,[495,18],2),oo=rt(Ue,[fe,ye],[11,0],7,[324,18],2),ao=rt(Ue,[fe,ye],[11,0],7,[336,18],2),_r=rt(Ue,[fe,ye],[11,0],7,[495,8],2),Ki=Y(Qe,Ke,0,20048,7,1),Wi=Y(Qe,Ke,0,20791,7,1),no=Y(Qe,Ke,0,82945,7,1),$n=rt(Ue,[fe,ye],[11,0],7,[2768,10],2),to=rt(Ue,[fe,ye],[11,0],7,[2768,10],2),ro=rt(Ue,[fe,ye],[11,0],7,[24,10],2),Bl=rt(Ue,[fe,ye],[11,0],7,[24,16],2),mn=rt(Ue,[fe,ye],[11,0],7,[140,16],2),Ii=Y(Qe,Ke,0,8305,7,1),eo=Y(Qe,Ke,0,48441,7,1))}function hB(e,t,r){return e.slice_0=Sr[t.slice_0][r],e.flip=ao[t.flip][(X(),Bn)[r<<3|t.fsym]],e.fsym=e.flip&7^t.fsym,e.flip>>=3,e.twist=oo[t.twist][Bn[r<<3|t.tsym]],e.tsym=e.twist&7^t.tsym,e.twist>>=3,e.prun=Er(Er(ut(Ki,e.twist*495+_r[e.slice_0][e.tsym]),ut(Wi,e.flip*495+_r[e.slice_0][e.fsym])),ut(no,e.twist<<11|Cr[e.flip<<3|e.fsym^e.tsym])),e.prun}function FB(e,t,r){return r=(X(),pl)[3][r],e.flipc=ao[t.flipc>>3][Bn[r<<3|t.flipc&7]]^t.flipc&7,e.twistc=oo[t.twistc>>3][Bn[r<<3|t.twistc&7]]^t.twistc&7,ut(no,e.twistc>>3<<11|Cr[e.flipc^e.twistc&7])}function b1(e,t,r){var n;return e.twist=(X(),ml)[Ci(t)],e.flip=Ln[ki(t)],e.tsym=e.twist&7,e.twist=e.twist>>3,e.prun=ut(no,e.twist<<11|Cr[e.flip^e.tsym]),e.prun>r||(e.fsym=e.flip&7,e.flip=e.flip>>3,e.slice_0=494-io(t.ea,8,!0),e.prun=Er(e.prun,Er(ut(Ki,e.twist*495+_r[e.slice_0][e.tsym]),ut(Wi,e.flip*495+_r[e.slice_0][e.fsym]))),e.prun>r)?!1:(n=new ce,Rl(t,1,n),dl(t,1,n),e.twistc=ml[Ci(n)],e.flipc=Ln[ki(n)],e.prun=Er(e.prun,ut(no,e.twistc>>3<<11|Cr[e.flipc^e.twistc&7])),e.prun<=r)}function ul(){cn()}function ut(e,t){return cn(),e[t>>3]>>(t<<2)&15}function S1(e){cn(),!(bi==2||bi==1&&!e)&&(bi==0&&(CB(),DB(),yB(),xB(),AB(),X(),Q0(2048,la,Ln,B1=Y(Ue,ye,0,336,7,1),0),Q0(2187,sa,ml,O0=Y(Ue,ye,0,324,7,1),1),UB(),bB(),SB()),fl(Ii,ro,Bl,$n,(X(),j0),584244,e),fl(eo,K0,mn,to,j0,514084,e),fl(Ki,Sr,_r,oo,O0,431619,e),fl(Wi,Sr,_r,ao,B1,431619,e),fl(no,null,null,oo,O0,103939,e),bi=e?2:1)}function DB(){var e,t,r,n;for(e=new ce,t=new ce,r=0;r<2768;r++)for(EB(e,(X(),Xn)[r]),n=0;n<10;n++)kr(e,pe[($e(),Ct)[n]],t),$n[r][n]=Pi(ar[pt(t.ca,8,!1)])&Je}function AB(){var e,t,r,n,o;for(e=new ce,t=new ce,K0=rt(Ue,[fe,ye],[11,0],7,[140,10],2),r=0;r<140;r++){for(O1(e.ca,r%70,0,!1),o=0;o<10;o++)kr(e,(X(),pe)[($e(),Ct)[o]],t),K0[r][o]=io(t.ca,0,!1)+70*(165>>o&1^~~(r/70))&Je;for(n=0;n<16;n++)Rl(e,(X(),gt)[0][n],t),mn[r][n]=io(t.ca,0,!1)+70*~~(r/70)&Je}}function yB(){var e,t,r,n;for(e=new ce,t=new ce,r=0;r<2768;r++)for(E1(e,(X(),Xn)[r]),n=0;n<10;n++)Ut(e,pe[($e(),Ct)[n]],t),to[r][n]=ar[pt(t.ea,8,!0)]}function UB(){var e,t,r,n;for(e=new ce,t=new ce,r=0;r<336;r++)for(na(e,(X(),la)[r]),n=0;n<18;n++)Ut(e,pe[n],t),ao[r][n]=Ln[ki(t)]}function xB(){var e,t,r,n,o;for(e=new ce,t=new ce,r=0;r<24;r++){for(Rn(e.ea,r,12,!0),o=0;o<10;o++)Ut(e,(X(),pe)[($e(),Ct)[o]],t),ro[r][o]=pt(t.ea,12,!0)%24&Je;for(n=0;n<16;n++)dl(e,(X(),gt)[0][n],t),Bl[r][n]=pt(t.ea,12,!0)%24&Je}}function fl(e,t,r,n,o,l,i){var s,a,f,u,g,p,c,L,m,R,F,A,U,b,S,N,J,z,Q,x,k,P,w,v,M,j,q,ie,de,be,Ye,St,Le,dt,lt,ct;if(U=l&15,F=(l>>4&1)==1?J0:0,f=(l>>5&1)==1,s=l>>8&15,u=l>>12&15,g=l>>16&15,R=i?u:g,A=(1<<U)-1,a=t==null,L=a?2048:t.length,m=L*n.length,c=f?10:18,p=c==10?66:599186,S=(e[m>>3]>>(m<<2)&15)-1,S==-1){for(z=0;z<~~(m/8)+1;z++)e[z]=al;e[0]^=1,S=0}for(;S<R;){for(M=(S+1)*al^-1,Q=0;Q<e.length;Q++)lt=e[Q]^M,lt&=lt>>1,e[Q]+=lt&lt>>2&al;for(P=S>s,be=P?S+2:S,de=be*al,b=P?S:S+2,++S,ct=S^S+1,dt=0,z=0;z<m;++z,dt>>=4){if((z&7)==0&&(dt=e[z>>3],((dt^de)-al&~(dt^de)&-2004318072)==0)){z+=7;continue}if((dt&15)==be)for(q=z%L,Ye=~~(z/L),N=0,J=0,a&&(N=(X(),Ln)[q],J=N&7,N>>=3),v=0;v<c;v++){if(Le=n[Ye][v],a?ie=(X(),Cr)[ao[N][Bn[v<<3|J]]^J^Le&A]:ie=r[t[q][v]][Le&A],Le>>=U,x=Le*L+ie,j=e[x>>3]>>(x<<2)&15,j!=b){j<S-1&&(v+=p>>v&3);continue}if(P){e[z>>3]^=ct<<(z<<2);break}for(e[x>>3]^=ct<<(x<<2),w=1,St=o[Le];(St>>=1)!=0;w++)(St&1)==1&&(k=Le*L,a?k+=(X(),Cr)[Ln[ie]^w]:k+=r[ie][w^F>>(w<<1)&3],(e[k>>3]>>(k<<2)&15)==b&&(e[k>>3]^=ct<<(k<<2)))}}}}function bB(){var e,t,r,n;for(e=new ce,t=new ce,r=0;r<324;r++)for(oa(e,(X(),sa)[r]),n=0;n<18;n++)kr(e,pe[n],t),oo[r][n]=ml[Ci(t)]}function SB(){var e,t,r,n,o,l,i,s;for(e=new ce,t=new ce,n=0;n<495;n++){for(O1(e.ea,494-n,8,!0),l=0;l<18;l+=3)Ut(e,(X(),pe)[l],t),Sr[n][l]=494-io(t.ea,8,!0)&Je;for(o=0;o<16;o+=2)dl(e,(X(),gt)[0][o],t),_r[n][o>>1]=494-io(t.ea,8,!0)&Je}for(r=0;r<495;r++)for(o=0;o<18;o+=3)for(s=Sr[r][o],i=1;i<3;i++)s=Sr[s][o],Sr[r][o+i]=s&Je}function X(){L1||(L1=!0,ir=Y(cl,fe,7,16,0,1),pe=Y(cl,fe,7,18,0,1),Qi=Y(QB,fe,0,18,6,1),C1=Y(Qe,Ke,0,48,7,1),sr=rt(Qe,[fe,Ke],[17,0],7,[16,16],2),gt=rt(Qe,[fe,Ke],[17,0],7,[16,16],2),pl=rt(Qe,[fe,Ke],[17,0],7,[16,18],2),Bn=Y(Qe,Ke,0,144,7,1),wr=rt(Qe,[fe,Ke],[17,0],7,[16,18],2),la=Y(Ue,ye,0,336,7,1),sa=Y(Ue,ye,0,324,7,1),Xn=Y(Ue,ye,0,2768,7,1),lo=Y(ne,ae,0,2768,7,1),ia=Y(Ue,ye,0,2768,7,1),Ni=Y(ne,ae,0,24,7,1),Ln=Y(Ue,ye,0,2048,7,1),ml=Y(Ue,ye,0,2187,7,1),ar=Y(Ue,ye,0,40320,7,1),Cr=Y(Ue,ye,0,2688,7,1),q0=new kt(2531,1373,67026819,1367),V0=new kt(2089,1906,322752913,2040),Mi=re(te(ne,2),fe,10,0,[re(te(ne,1),ae,0,7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),re(te(ne,1),ae,0,7,[6,7,8,0,1,2,3,4,5,15,16,17,9,10,11,12,13,14]),re(te(ne,1),ae,0,7,[3,4,5,6,7,8,0,1,2,12,13,14,15,16,17,9,10,11]),re(te(ne,1),ae,0,7,[2,1,0,5,4,3,8,7,6,11,10,9,14,13,12,17,16,15]),re(te(ne,1),ae,0,7,[8,7,6,2,1,0,5,4,3,17,16,15,11,10,9,14,13,12]),re(te(ne,1),ae,0,7,[5,4,3,8,7,6,2,1,0,14,13,12,17,16,15,11,10,9])]),kB(),zB())}function ta(e){e.ca=re(te(ne,1),ae,0,7,[0,1,2,3,4,5,6,7]),e.ea=re(te(ne,1),ae,0,7,[0,2,4,6,8,10,12,14,16,18,20,22])}function w1(e){!e.temps&&(e.temps=new ce),kr(V0,e,e.temps),kr(e.temps,q0,e),Ut(V0,e,e.temps),Ut(e.temps,q0,e)}function ra(e,t){var r,n;for(n=0;n<8;n++)e.ca[n]=t.ca[n];for(r=0;r<12;r++)e.ea[r]=t.ea[r]}function wB(e){return Pi(ar[pt(e.ca,8,!1)])}function vB(e){return ar[pt(e.ea,8,!0)]}function ki(e){var t,r;for(r=0,t=0;t<11;t++)r=r<<1|e.ea[t]&1;return r}function Ci(e){var t,r;for(r=0,t=0;t<7;t++)r+=(r<<1)+(e.ca[t]>>3);return r}function zi(e){var t,r;for(!e.temps&&(e.temps=new ce),r=0;r<12;r++)e.temps.ea[e.ea[r]>>1]=(r<<1|e.ea[r]&1)<<24>>24;for(t=0;t<8;t++)e.temps.ca[e.ca[t]&7]=(t|32>>(e.ca[t]>>3)&24)<<24>>24;ra(e,e.temps)}function v1(e){var t,r,n,o,l,i,s;for(t=new _1(e),o=new ce,r=Pi(ar[pt(t.ca,8,!1)])>>4,i={l:0,m:0,h:0},s=0;s<6;s++){if(n=Pi(ar[pt(t.ca,8,!1)])>>4,r==n)for(l=0;l<16;l++)Rl(t,gt[0][l],o),_i(o.ca,e.ca)&&(dl(t,gt[0][l],o),_i(o.ea,e.ea)&&(i=W0(i,Ei({l:1,m:0,h:0},(s<<4|l)<48?s<<4|l:48))));w1(t),s%3==2&&zi(t)}return i}function EB(e,t){Rn(e.ca,t,8,!1)}function E1(e,t){Rn(e.ea,t,8,!0)}function na(e,t){var r,n,o;for(n=0,r=10;r>=0;--r,t>>=1)n^=o=t&1,e.ea[r]=(e.ea[r]&-2|o)<<24>>24;e.ea[11]=(e.ea[11]&-2|n)<<24>>24}function oa(e,t){var r,n,o;for(n=15,r=6;r>=0;--r,t=~~(t/3))n-=o=t%3,e.ca[r]=(e.ca[r]&7|o<<3)<<24>>24;e.ca[7]=(e.ca[7]&7|n%3<<3)<<24>>24}function _B(e){var t,r,n,o,l;for(l=0,o=0,n=0;n<12;n++)o|=1<<(e.ea[n]>>1),l^=e.ea[n]&1;if(o!=4095)return-2;if(l!=0)return-3;for(r=0,l=0,t=0;t<8;t++)r|=1<<(e.ca[t]&7),l+=e.ca[t]>>3;return r!=255?-4:l%3!=0?-5:(H0(pt(e.ea,12,!0),12)^H0(pt(e.ca,8,!1),8))!=0?-6:0}function Rl(e,t,r){X();var n,o,l,i,s,a;for(a=ir[gt[0][t]],s=ir[t],n=0;n<8;n++)l=a.ca[e.ca[s.ca[n]&7]&7]>>3,i=e.ca[s.ca[n]&7]>>3,o=l<3?i:(3-i)%3,r.ca[n]=(a.ca[e.ca[s.ca[n]&7]&7]&7|o<<3)<<24>>24}function kr(e,t,r){X();var n,o,l;for(n=0;n<8;n++)o=e.ca[t.ca[n]&7]>>3,l=t.ca[n]>>3,r.ca[n]=(e.ca[t.ca[n]&7]&7|(o+l)%3<<3)<<24>>24}function wi(e,t,r){var n,o,l,i;for(n=0;n<8;n++)l=e.ca[t.ca[n]&7]>>3,i=t.ca[n]>>3,o=l+(l<3?i:6-i),o=o%3+(l<3==i<3?0:3),r.ca[n]=(e.ca[t.ca[n]&7]&7|o<<3)<<24>>24}function ce(){X(),ta(this)}function kt(e,t,r,n){ta(this),Rn(this.ca,e,8,!1),oa(this,t),Rn(this.ea,r,12,!0),na(this,n)}function _1(e){ta(this),ra(this,e)}function Pi(e){return X(),e^J0>>((e&15)<<1)&3}function dl(e,t,r){X();var n,o,l;for(l=ir[gt[0][t]],o=ir[t],n=0;n<12;n++)r.ea[n]=(l.ea[e.ea[o.ea[n]>>1]>>1]^e.ea[o.ea[n]>>1]&1^o.ea[n]&1)<<24>>24}function Ut(e,t,r){X();var n;for(n=0;n<12;n++)r.ea[n]=(e.ea[t.ea[n]>>1]^t.ea[n]&1)<<24>>24}function br(e,t,r){X();var n;return n=ia[e],r&&(n=n^J0>>((n&15)<<1)&3),n&65520|sr[n&15][t]}function k1(){return X(),0}function kB(){var e,t;for(pe[0]=new kt(15120,0,119750400,0),pe[3]=new kt(21021,1494,323403417,0),pe[6]=new kt(8064,1236,29441808,550),pe[9]=new kt(9,0,5880,0),pe[12]=new kt(1230,412,2949660,0),pe[15]=new kt(224,137,328552,137),e=0;e<18;e+=3)for(t=0;t<2;t++)pe[e+t+1]=new ce,Ut(pe[e+t],pe[e],pe[e+t+1]),kr(pe[e+t],pe[e],pe[e+t+1])}function CB(){X();var e,t,r;for(Q0(40320,Xn,ar,j0=Y(Ue,ye,0,2768,7,1),2),e=new ce,r=0;r<2768;r++)E1(e,Xn[r]),lo[r]=io(e.ea,0,!0)+H0(Xn[r],8)*70<<24>>24,zi(e),ia[r]=ar[pt(e.ea,8,!0)];for(t=0;t<24;t++)Rn(e.ea,t,12,!0),zi(e),Ni[t]=pt(e.ea,12,!0)%24<<24>>24}function zB(){var e,t,r,n,o,l,i,s,a,f,u,g,p,c,L,m;for(e=new ce,t=new ce,r=new kt(28783,0,259268407,0),m=new kt(15138,0,119765538,7),g=new kt(5167,0,83473207,0),o=0;o<8;o++)g.ca[o]=vi(g.ca[o]|24);for(l=0;l<16;l++)ir[l]=new _1(e),wi(e,m,t),Ut(e,m,t),L=t,t=e,e=L,l%4==3&&(wi(L,g,t),Ut(L,g,t),L=t,t=e,e=L),l%8==7&&(wi(L,r,t),Ut(L,r,t),L=t,t=e,e=L);for(i=0;i<16;i++)for(a=0;a<16;a++)for(wi(ir[i],ir[a],e),u=0;u<16;u++)if(_i(ir[u].ca,e.ca)){sr[i][a]=u,gt[u][a]=i;break}for(f=0;f<18;f++)for(c=0;c<16;c++){for(Rl(pe[f],gt[0][c],e),p=0;p<18;p++)if(_i(pe[p].ca,e.ca)){pl[c][f]=p,wr[c][($e(),so)[f]]=so[p];break}c%2==0&&(Bn[f<<3|c>>1]=pl[c][f])}for(n=0;n<18;n++)for(Qi[n]=v1(pe[n]),s=n,c=0;c<48;c++)pl[c%16][s]<n&&(C1[c]|=1<<n),c%16==15&&(s=Mi[2][s])}function Q0(e,t,r,n,o){X();var l,i,s,a,f,u,g,p,c;for(l=new ce,s=new ce,i=0,f=0,c=o>=2?1:2,u=o!=1,a=0;a<e;a++)if(r[a]==0){switch(o){case 0:na(l,a);break;case 1:oa(l,a);break;case 2:Rn(l.ea,a,8,!0)}for(g=0;g<16;g+=c){switch(u?dl(l,g,s):Rl(l,g,s),o){case 0:f=ki(s);break;case 1:f=Ci(s);break;case 2:f=pt(s.ea,8,!0)}o==0&&(Cr[i<<3|g>>1]=f&Je),f==a&&(n[i]=(n[i]|1<<~~(g/c))&Je),p=~~((i<<4|g)/c),r[f]=p&Je}t[i++]=a&Je}return i}function PB(e,t,r,n,o,l,i,s){var a,f,u,g,p;if(g=Er(ut((cn(),eo),(i>>4)*140+mn[(X(),lo)[s>>4]&255][gt[i&15][s&15]]),Er(ut(eo,n*140+mn[lo[t]&255][gt[o][r]]),ut(Ii,t*24+Bl[l][r]))),g>e.maxDep2)return g-e.maxDep2;for(a=e.maxDep2;a>=g&&(p=N1(e,n,o,t,r,l,a,e.depth1,10),!(p<0));a--){for(a-=p,e.solLen=0,e.solution=new I1,WB(e.solution,e.verbose,e.urfIdx,e.depth1),u=0;u<e.depth1+a;u++)d1(e.solution,e.move[u]);for(f=e.preMoveLen-1;f>=0;f--)d1(e.solution,e.preMoves[f]);e.solLen=e.solution.length_0}return a!=e.maxDep2?(e.maxDep2=ea(T1,e.solLen-e.length1-1),U1(e.probe,e.probeMin)?0:1):1}function NB(e){var t,r,n,o,l,i,s,a,f,u,g,p,c,L,m;if(e.isRec=!1,U1(e.probe,e.solution?e.probeMin:e.probeMax))return 0;for(e.probe=gB(e.probe,{l:1,m:0,h:0}),n=e.valid1;n<e.depth1;n++)kr(e.phase1Cubie[n],(X(),pe)[e.move[n]],e.phase1Cubie[n+1]),Ut(e.phase1Cubie[n],pe[e.move[n]],e.phase1Cubie[n+1]);for(e.valid1=e.depth1,s=wB(e.phase1Cubie[e.depth1]),a=s&15,s>>=4,f=vB(e.phase1Cubie[e.depth1]),u=f&15,f>>=4,g=pt(e.phase1Cubie[e.depth1].ea,12,!0)%24,r=br(f,u,!1),t=br(s,a,!0),o=e.depth1==0?-1:e.move[e.depth1-1],l=e.preMoveLen==0?-1:e.preMoves[e.preMoveLen-1],m=0,L=(e.preMoveLen==0?1:2)*(e.depth1==0?1:2),p=0,c=(1<<L)-1;p<L;p++){if((c>>p&1)!=0){if(c&=~(1<<p),m=PB(e,s,a,f,u,g,r,t),m==0||m>2)break;m==2&&(c&=4<<p)}if(c==0)break;(p&1)==0&&e.depth1>0?(i=($e(),so)[~~(o/3)*3+1],e.move[e.depth1-1]=Ct[i]*2-e.move[e.depth1-1],g=(cn(),ro)[g][i],s=$n[s][(X(),wr)[a][i]],a=sr[s&15][a],s>>=4,f=to[f][wr[u][i]],u=sr[f&15][u],f>>=4,t=br(s,a,!0),r=br(f,u,!1)):e.preMoveLen>0&&(i=($e(),so)[~~(l/3)*3+1],e.preMoves[e.preMoveLen-1]=Ct[i]*2-e.preMoves[e.preMoveLen-1],g=(X(),Ni)[(cn(),ro)[Ni[g]][i]],s=$n[t>>4][wr[t&15][i]],t=s&-16|sr[s&15][t&15],s=br(t>>4,t&15,!0),a=s&15,s>>=4,f=to[r>>4][wr[r&15][i]],r=f&-16|sr[f&15][r&15],f=br(r>>4,r&15,!1),u=f&15,f>>=4)}return e.depth1>0&&(e.move[e.depth1-1]=o),e.preMoveLen>0&&(e.preMoves[e.preMoveLen-1]=l),m==0?0:2}function MB(e){var t;for(e.conjMask=0,e.selfSym=v1(e.cc),e.conjMask|=G0(qt(gn(e.selfSym,16),{l:Je,m:0,h:0}),{l:0,m:0,h:0})?18:0,e.conjMask|=G0(qt(gn(e.selfSym,32),{l:Je,m:0,h:0}),{l:0,m:0,h:0})?36:0,e.conjMask|=G0(qt(gn(e.selfSym,48),{l:Je,m:0,h:0}),{l:0,m:0,h:0})?56:0,e.selfSym=qt(e.selfSym,{l:nt,m:nt,h:15}),e.maxPreMoves=e.conjMask>7?0:20,t=0;t<6;t++)ra(e.urfCubieCube[t],e.cc),b1(e.urfCoordCube[t],e.urfCubieCube[t],20),w1(e.cc),t%3==2&&zi(e.cc)}function z1(e,t,r,n,o){var l,i,s,a,f,u;if(t.prun==0&&n<5)return e.allowShorter||n==0?(e.depth1-=n,f=NB(e),e.depth1+=n,f):1;for(u=k1($0(r)),l=0;l<18;l+=3)if(!(l==o||l==o-9)){for(s=0;s<3;s++)if(i=l+s,!(e.isRec&&i!=e.move[e.depth1-n]||u!=0&&(u&1<<i)!=0)){if(a=hB(e.nodeUD[n],t,i),a>n)break;if(a==n)continue;if(a=FB(e.nodeUD[n],t,i),a>n)break;if(a==n)continue;if(e.move[e.depth1-n]=i,e.valid1=ea(e.valid1,e.depth1-n),f=z1(e,e.nodeUD[n],r&pn((X(),Qi)[i]),n-1,l),f==0)return 0;if(f>=2)break}}return 1}function P1(e,t,r,n,o){var l,i,s;if(e.preMoveLen=e.maxPreMoves-t,(e.isRec?e.depth1==e.length1-e.preMoveLen:e.preMoveLen==0||(225207>>r&1)==0)&&(e.depth1=e.length1-e.preMoveLen,e.phase1Cubie[0]=n,e.allowShorter=e.depth1==I0&&e.preMoveLen!=0,b1(e.nodeUD[e.depth1+1],n,e.depth1)&&z1(e,e.nodeUD[e.depth1+1],o,e.depth1,-1)==0))return 0;if(t==0||e.preMoveLen+I0>=e.length1)return 1;for(s=k1($0(o)),(t==1||e.preMoveLen+1+I0>=e.length1)&&(s|=225207),r=~~(r/3)*3,l=0;l<18;l++){if(l==r||l==r-9||l==r+9){l+=2;continue}if(!(e.isRec&&l!=e.preMoves[e.maxPreMoves-t]||(s&1<<l)!=0)&&(kr((X(),pe)[l],n,e.preMoveCubes[t]),Ut(pe[l],n,e.preMoveCubes[t]),e.preMoves[e.maxPreMoves-t]=l,i=P1(e,t-1,l,e.preMoveCubes[t],o&pn(Qi[l])),i==0))return 0}return 1}function N1(e,t,r,n,o,l,i,s,a){var f,u,g,p,c,L,m,R,F,A,U;if(t==0&&n==0&&l==0)return i;for(F=($e(),gl)[a],m=0;m<10;m++){if((F>>m&1)!=0){m+=66>>m&3;continue}if(R=(cn(),ro)[l][m],u=$n[n][(X(),wr)[o][m]],g=sr[u&15][o],u>>=4,c=to[t][wr[r][m]],L=sr[c&15][r],c>>=4,p=br(c,L,!1),f=br(u,g,!0),A=ut(eo,(p>>4)*140+mn[lo[f>>4]&255][gt[p&15][f&15]]),A>i+1)return i-A+1;if(A>=i){m+=66>>m&3&i-A;continue}if(A=Er(ut(Ii,u*24+Bl[R][g]),ut(eo,c*140+mn[lo[u]&255][gt[L][g]])),A>=i){m+=66>>m&3&i-A;continue}if(U=N1(e,c,L,u,g,R,i-1,s+1,m),U>=0)return e.move[s]=Ct[m],U;if(U<-2)break;U<-1&&(m+=66>>m&3)}return-1}function TB(e){for(e.length1=e.isRec?e.length1:0;e.length1<e.solLen;e.length1++)for(e.maxDep2=ea(T1,e.solLen-e.length1-1),e.urfIdx=e.isRec?e.urfIdx:0;e.urfIdx<6;e.urfIdx++)if((e.conjMask&1<<e.urfIdx)==0&&P1(e,e.maxPreMoves,-30,e.urfCubieCube[e.urfIdx],pn(qt(e.selfSym,{l:Je,m:0,h:0})))==0)return e.solution?h1(e.solution):"Error 8";return e.solution?h1(e.solution):"Error 7"}function GB(e,t){var r;return r=OB(e,t),r!=0?"Error "+(r<0?-r:r):(e.solLen=22,e.probe={l:0,m:0,h:0},e.probeMax={l:3531008,m:23,h:0},e.probeMin={l:0,m:0,h:0},e.verbose=0,e.solution=null,e.isRec=!1,S1(!1),MB(e),TB(e))}function OB(e,t){var r,n,o,l;for(n=0,o=Y(ne,ae,0,54,7,1),r=mB(re(te(Ue,1),ye,0,7,[t.charCodeAt(4),t.charCodeAt(13),t.charCodeAt(22),t.charCodeAt(31),t.charCodeAt(40),t.charCodeAt(49)])),l=0;l<54;l++){if(o[l]=cB(r,BB(t.charCodeAt(l)))<<24>>24,o[l]==-1)return-1;n+=1<<(o[l]<<2)}return n!=10066329?-1:(IB(o,e.cc),_B(e.cc))}function M1(){var e,t,r;for(this.move=Y(Qe,Ke,0,31,7,1),this.nodeUD=Y(Si,fe,31,21,0,1),this.nodeRL=Y(Si,fe,31,21,0,1),this.nodeFB=Y(Si,fe,31,21,0,1),this.cc=new ce,this.urfCubieCube=Y(cl,fe,7,6,0,1),this.urfCoordCube=Y(Si,fe,31,6,0,1),this.phase1Cubie=Y(cl,fe,7,21,0,1),this.preMoveCubes=Y(cl,fe,7,21,0,1),this.preMoves=Y(Qe,Ke,0,20,7,1),t=0;t<21;t++)this.nodeUD[t]=new ul,this.nodeRL[t]=new ul,this.nodeFB[t]=new ul,this.phase1Cubie[t]=new ce;for(r=0;r<6;r++)this.urfCubieCube[r]=new ce,this.urfCoordCube[r]=new ul;for(e=0;e<20;e++)this.preMoveCubes[e+1]=new ce}function $e(){if(!R1){R1=!0;var e,t,r,n,o,l;for(un=re(te(ne,2),fe,10,0,[re(te(ne,1),ae,0,7,[8,9,20]),re(te(ne,1),ae,0,7,[6,18,38]),re(te(ne,1),ae,0,7,[0,36,47]),re(te(ne,1),ae,0,7,[2,45,11]),re(te(ne,1),ae,0,7,[29,26,15]),re(te(ne,1),ae,0,7,[27,44,24]),re(te(ne,1),ae,0,7,[33,53,42]),re(te(ne,1),ae,0,7,[35,17,51])]),or=re(te(ne,2),fe,10,0,[re(te(ne,1),ae,0,7,[5,10]),re(te(ne,1),ae,0,7,[7,19]),re(te(ne,1),ae,0,7,[3,37]),re(te(ne,1),ae,0,7,[1,46]),re(te(ne,1),ae,0,7,[32,16]),re(te(ne,1),ae,0,7,[28,25]),re(te(ne,1),ae,0,7,[30,43]),re(te(ne,1),ae,0,7,[34,52]),re(te(ne,1),ae,0,7,[23,12]),re(te(ne,1),ae,0,7,[21,41]),re(te(ne,1),ae,0,7,[50,39]),re(te(ne,1),ae,0,7,[48,14])]),lr=rt(Qe,[fe,Ke],[17,0],7,[13,13],2),Z0=re(te(RB,1),fe,2,4,["U ","U2","U'","R ","R2","R'","F ","F2","F'","D ","D2","D'","L ","L2","L'","B ","B2","B'"]),Ct=re(te(Qe,1),Ke,0,7,[0,1,2,4,7,9,10,11,13,16,3,5,6,8,12,14,15,17]),so=Y(Qe,Ke,0,18,7,1),gl=Y(Qe,Ke,0,11,7,1),t=0;t<18;t++)so[Ct[t]]=t;for(r=0;r<10;r++)for(n=~~(Ct[r]/3),gl[r]=0,o=0;o<10;o++)l=~~(Ct[o]/3),gl[r]|=(n==l||n%3==l%3&&n>=l?1:0)<<o;for(gl[10]=0,e=0;e<13;e++)for(lr[e][0]=lr[e][e]=1,o=1;o<e;o++)lr[e][o]=lr[e-1][o-1]+lr[e-1][o]}}function io(e,t,r){$e();var n,o,l,i,s;for(n=e.length-1,l=0,s=4,o=n;o>=0;o--)i=G1(e[o],r),(i&12)==t&&(l+=lr[o][s--]);return l}function H0(e,t){$e();var r,n;for(n=0,r=t-2;r>=0;r--)n^=e%(t-r),e=~~(e/(t-r));return n&1}function pt(e,t,r){$e();var n,o,l,i;for(o=0,i={l:1323536,m:2777561,h:1043915},n=0;n<t-1;n++)l=G1(e[n],r)<<2,o=(t-n)*o+pn(qt(gn(i,l),{l:15,m:0,h:0})),i=x1(i,Ei({l:1118480,m:279620,h:69905},l));return o}function G1(e,t){return t?e>>1:e&7}function O1(e,t,r,n){$e();var o,l,i,s;for(o=e.length-1,s=4,l=o,i=o;i>=0;i--)t>=lr[i][s]?(t-=lr[i][s--],e[i]=Ti(e[i],s|r,n)):((l&12)==r&&(l-=4),e[i]=Ti(e[i],l--,n))}function Rn(e,t,r,n){$e();var o,l,i,s,a,f;for(f={l:1323536,m:2777561,h:1043915},o={l:0,m:0,h:0},s=2;s<=r;s++)o=W0(Ei(o,4),$0(t%s)),t=~~(t/s);for(l=0;l<r-1;l++)a=(pn(o)&15)<<2,o=gn(o,4),e[l]=Ti(e[l],pn(qt(gn(f,a),{l:15,m:0,h:0})),n),i=x1(Ei({l:1,m:0,h:0},a),{l:1,m:0,h:0}),f=W0(qt(f,i),qt(gn(f,4),{l:~i.l&nt,m:~i.m&nt,h:~i.h&vr}));e[r-1]=Ti(e[r-1],pn(qt(f,{l:15,m:0,h:0})),n)}function Ti(e,t,r){return(r?t<<1|e&1:t|e&-8)<<24>>24}function IB(e,t){$e();var r,n,o,l,i,s,a,f;for(l=0;l<8;l++)t.ca[l]=0;for(i=0;i<12;i++)t.ea[i]=0;for(s=0;s<8;s++){for(f=0;f<3&&!(e[un[s][f]]==0||e[un[s][f]]==3);f++);for(r=e[un[s][(f+1)%3]],n=e[un[s][(f+2)%3]],a=0;a<8;a++)if(r==~~(un[a][1]/9)&&n==~~(un[a][2]/9)){t.ca[s]=vi(f%3<<3|a);break}}for(o=0;o<12;o++)for(a=0;a<12;a++){if(e[or[o][0]]==~~(or[a][0]/9)&&e[or[o][1]]==~~(or[a][1]/9)){t.ea[o]=vi(a<<1);break}if(e[or[o][0]]==~~(or[a][1]/9)&&e[or[o][1]]==~~(or[a][0]/9)){t.ea[o]=vi(a<<1|1);break}}}function d1(e,t){var r,n,o;if(e.length_0==0){e.moves[e.length_0++]=t;return}if(r=~~(t/3),n=~~(e.moves[e.length_0-1]/3),r==n){o=(t%3+e.moves[e.length_0-1]%3+1)%4,o==3?--e.length_0:e.moves[e.length_0-1]=r*3+o;return}if(e.length_0>1&&r%3==n%3&&r==~~(e.moves[e.length_0-2]/3)){o=(t%3+e.moves[e.length_0-2]%3+1)%4,o==3?(e.moves[e.length_0-2]=e.moves[e.length_0-1],--e.length_0):e.moves[e.length_0-2]=r*3+o;return}e.moves[e.length_0++]=t}function WB(e,t,r,n){e.verbose=t,e.urfIdx=r,e.depth1=n}function h1(e){var t,r,n;if(r=new dB,n=(e.verbose&2)!=0?(e.urfIdx+3)%6:e.urfIdx,n<3)for(t=0;t<e.length_0;t++)(e.verbose&1)!=0&&t==e.depth1&&(r.string+=".  "),p1(c1(r,($e(),Z0)[(X(),Mi)[n][e.moves[t]]]));else for(t=e.length_0-1;t>=0;t--)p1(c1(r,($e(),Z0)[(X(),Mi)[n][e.moves[t]]])),(e.verbose&1)!=0&&t==e.depth1&&(r.string+=".  ");return r.string}function I1(){this.moves=Y(Qe,Ke,0,31,7,1)}var fe,nt,vr,rB,Je,ye,Ke,J0,al,ae,H,Gi,xi,RB,m1,mn,K0,$n,eo,to,ao,Ii,Bl,ro,no,oo,_r,Wi,Sr,Ki,bi,Si,L1,ir,ar,Xn,Ln,la,Cr,Ni,lo,ia,Bn,pl,wr,sr,gt,B1,j0,O0,ml,sa,C1,pe,Qi,q0,V0,Mi,cl,T1,I0,R1,lr,gl,un,or,Z0,so,Ct,Qe,KB,ne,QB,Ue,jB,qB,W1=y(()=>{"use strict";fe={3:1},nt=4194303,vr=1048575,rB=524288,Je=65535,ye={11:1,3:1},Ke={17:1,3:1},J0=14540032,al=286331153,ae={10:1,3:1},Gi={};Ll(1,null,{},iB);Ll(79,1,{},Y0);H.createClassLiteralForArray=function(t){var r;return r=new Y0,r.modifiers=4,t>1?r.componentType=D1(this,t-1):r.componentType=this,r};H.isPrimitive=function(){return(this.modifiers&1)!=0};RB=zr("java.lang","String",2);m1=!1;Ll(31,1,{31:1},ul);H.flip=0;H.flipc=0;H.fsym=0;H.prun=0;H.slice_0=0;H.tsym=0;H.twist=0;H.twistc=0;bi=0,Si=zr("org.cubing.min2phase.client","CoordCube",31),L1=!1;cl=zr("org.cubing.min2phase.client","CubieCube",7);Ll(72,1,{},M1);H.allowShorter=!1;H.conjMask=0;H.depth1=0;H.isRec=!1;H.length1=0;H.maxDep2=0;H.maxPreMoves=0;H.preMoveLen=0;H.probe={l:0,m:0,h:0};H.probeMax={l:0,m:0,h:0};H.probeMin={l:0,m:0,h:0};H.selfSym={l:0,m:0,h:0};H.solLen=0;H.urfIdx=0;H.valid1=0;H.verbose=0;T1=12,I0=7,R1=!1;Ll(150,1,{},I1);H.depth1=0;H.length_0=0;H.urfIdx=0;H.verbose=0;Qe=Oi("int","I");zr("com.google.gwt.lang","CollapsedPropertyHolder",252);zr("com.google.gwt.lang","JavaClassHierarchySetupUtil",254);KB=zr("com.google.gwt.lang","LongLibBase/LongEmul",null);zr("com.google.gwt.lang","ModuleUtils",257);ne=Oi("byte","B"),QB=Oi("long","J"),Ue=Oi("char","C");zr("com.google.gwt.user.client.rpc","XsrfToken",null),sB("java.util","Map/Entry");jB=function(){S1(!1)},qB=function(e){return GB(new M1,e)}});var K1={};ht(K1,{initialize:()=>jB,solveState:()=>qB});var Q1=y(()=>{"use strict";W1()});var aa,j1=y(()=>{"use strict";Qt();aa=We(()=>Promise.resolve().then(()=>(Q1(),K1)))});function q1(e,t){return e.slice(t)+e.slice(0,t)}function YB(e){let t=[[],[]];for(let r=0;r<6;r++)if(e.stateData.CENTERS.pieces[r]!==r)throw new Error("non-oriented puzzles are not supported");for(let r=0;r<12;r++)t[0].push(q1(VB[e.stateData.EDGES.pieces[r]],e.stateData.EDGES.orientation[r]));for(let r=0;r<8;r++)t[1].push(q1(HB[e.stateData.CORNERS.pieces[r]],e.stateData.CORNERS.orientation[r]));return t.push(ZB),t}function V1(e){let t=YB(e);return JB.map(([r,n,o])=>t[r][n][o]).join("")}var VB,HB,ZB,JB,H1=y(()=>{"use strict";VB="UF UR UB UL DF DR DB DL FR FL BR BL".split(" "),HB="UFR URB UBL ULF DRF DFL DLB DBR".split(" "),ZB="U L F R B D".split(" "),JB=[[1,2,0],[0,2,0],[1,1,0],[0,3,0],[2,0,0],[0,1,0],[1,3,0],[0,0,0],[1,0,0],[1,0,2],[0,1,1],[1,1,1],[0,8,1],[2,3,0],[0,10,1],[1,4,1],[0,5,1],[1,7,2],[1,3,2],[0,0,1],[1,0,1],[0,9,0],[2,2,0],[0,8,0],[1,5,1],[0,4,1],[1,4,2],[1,5,0],[0,4,0],[1,4,0],[0,7,0],[2,5,0],[0,5,0],[1,6,0],[0,6,0],[1,7,0],[1,2,2],[0,3,1],[1,3,1],[0,11,1],[2,1,0],[0,9,1],[1,6,1],[0,7,1],[1,5,2],[1,1,2],[0,2,1],[1,2,1],[0,10,0],[2,4,0],[0,11,0],[1,7,1],[0,6,1],[1,6,2]]});function Z1(e,t){let r=new ge(e.kpuzzle,{EDGES:e.stateData.EDGES,CORNERS:e.stateData.CORNERS,CENTERS:{pieces:e.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}}).experimentalToTransformation(),n=new ge(t.kpuzzle,{EDGES:t.stateData.EDGES,CORNERS:t.stateData.CORNERS,CENTERS:{pieces:t.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}}).experimentalToTransformation();return r.isIdentical(n)}function J1(e,t){if(Z1(e.startState(),t))return!1;for(let r of"ULFRBD")for(let n=1;n<4;n++){let o=e.moveToTransformation(new B(r,n)).toKState();if(Z1(o,t))return!1}return!0}var Y1=y(()=>{"use strict";Be();He()});var X1,$1=y(()=>{"use strict";X1=[["R U'","R2 B","D2 B2","D' L B'","R' U'","B","D B2","R' B","L' U","L2 B'","B2","D L B'","L U","B'","U'","R B","D' B2","L B'","U2","U L' B'","","U' L' B'","U","L' B'"],["F2 L2","F' L'","R' F L2","D' L2","F L2","F2 L'","R' F' L'","R2 F L2","R2 F2 L'","L2","F L'","D' L","D2 L2","R2 F' L'","D L","","L2 F L'","L F' L2","L F L'","F' L2","L'","D L2","D F L'","L"],["R B U2 B'","R2 B U' B'","F2 B U B'","F B2 L' B2","B2 L B2","B U' B'","R2 B U2 B'","R' B U' B'","B2 L' B2","F B U B'","B2 U' B2","B' L B","L F' B D' B'","B' U' B2 D B'","B U2 B'","R B U' B'","B2 L2 B2","D' B' L B","B U B'","F' B2 L' B2","","B2 L' B' U' B'"],["U F2 L2 U'","F' U L' U'","F2 U L' U'","U F L2 U'","U2 B2 U2","R' U' B U","D2 U L U'","D U2 B' U2","U L2 U'","F U L' U'","D U L U'","U2 B' U2","","U2 B' U' L' U'","U2 L' U2","U' B U","U L U'","D' U2 B' U2","U L' U'","U2 B U2"],["R' D' F2","F'","F2","D R F'","R D' F2","R2 F'","D' F2","R F'","F2 R' D' F2","F","D2 F2","D' R F'","R2 D' F2","R' F'","D F2","D2 R F'","","F R' D' F2"],["R' D2 F' D F","R F2 R2 F2","R2 F' D2 F","F' R2 D2 F","L D' L'","D F' D2 F","F2 R2 F2","R F' D2 F","F' R2 D' F","F' R' D2 F","F2 R' F2","L D L'","F' R D' F","F2 R F2","F' D2 F","","L D2 R D' L'","F' D2 F' R F2","D2 R2 F2 R2 F2","D F' D' F","F' D F"],["U F2 U'","R U F' U'","D R U F2 U'","U F U'","R2 U F2 U'","R' U F' U'","R U F2 U'","R2 U F' U'","","U L D L' F U'","F2 D' R D F2","D2 U F U'","R' U F2 U'","U F' U'","F2 D2 R D2 F2","D U F U'"],["R2","R' B' D B","D R'","F' R2 F","","R B' D B","R'","B' D B","D' R'","D2 F' R2 F","R","R2 B' D B","D2 R'","B' D' B"],["R2 D' R2","F' R' F R","R D' R2 D R'","D2 R2 D2 R2","R' D' F' R F","U F D F' U'","","R2 D2 B R' B' R'","R' F D' F2 R F","R2 D R2","F2 U F U' F","R' D F' R F","D R2 D2 R2","U F D' F' U'","D R' D2 F' R F","R2 D2 R2","U F D2 F' U'","R' D2 F' R F"],["B R B'","F D F' B R2 B'","D B R2 B'","D2 B R' B'","B R2 B'","D B R' B'","D' B R2 B'","B R' B'","","B R2 B' D B R' B'","D2 B R2 B'","D' B R' B'"],["","R' D R F D2 F'","R' D R","D F D' F'","R F' R' F","F D' F'","R' D' R","F D2 F'","R' D2 R","F D F'"],["","F2 D2 R F' R' D2 F' D2 F'","F2 D2 F' D' F D' F' D2 F'","F2 D F2 D F2 D2 F2","D2 F L D2 L' D2 F'","D F D2 L D2 L' F'","R' D B' D2 B D' R","R' D2 B' D2 B R","F D2 F' D F D F'","F D' L D2 L' D F'","B D' F D B' D' F'","F D2 L D2 L' F'","F D' L D L' D F'","F L D2 L' D2 F'","R' B' D2 B D2 R"],["D'","F L D L' D' F'","D2","L B D B' D' L'","D","B' L' D' L D B","","D F L D L' D' F'"],["F' D2 F D F' D F","F' D' R' D R F","F' R' D' R D F","B D R D' R' B'","","D B' D' L' D L B"],["D F D F' D F D2 F'","F' U2 B' R' B U2 F' L F' L' F'","","D2 L D L2 F L F2 D F"],["L B' L' F L B L' F'","F2 U F' D2 F U' F' D2 F'","D' F' D B D' F D B'","F L2 F R2 F' L2 F R2 F2","D B D' F' D B' D' F","R F L F' R' F L' F'","","D2 B L' U2 L B' D2 B L' U2 L B'","D2 F R' U2 R F' D2 F R' U2 R F'","R F L' F' R' F L F'","D F D' B' D F' D' B","L2 F2 L' B2 L F2 L' B2 L'"],["L B R' B' L' B R B'","R' B R F' R' B' R F","L D2 L U L' D2 L U' L2","","D2 B' D2 F D' L2 F L2 F' D2 B D' F'","D2 F' R' F R2 B' D2 B D2 R' F D2 F'","L B L' F L B' L' F'","F' D2 F' U' F D2 F' U F2","D' B' D F D' B D F'"],["","D2 F' L U2 L' F D2 F' L U2 L' F","D2 B' R U2 R' B D2 B' R U2 R' B"]]});async function tg(){let e=await Pe["3x3x3"].kpuzzle(),t=e.startState();for(let r of X1)t=t.applyAlg(E.fromString((await nr())(r)));return J1(e,t)?t:tg()}async function fa(e){return we(),E.fromString((await aa).solveState(V1(e)))}async function fo(){return fa(await tg())}async function rg(){(await aa).initialize()}async function ng(){return Yn(await fo(),XB)}async function og(){let e=new mt,t=await fo();return e.experimentalPushAlg(eg),e.experimentalPushAlg(t),e.experimentalPushAlg(eg),e.toAlg()}var XB,eg,ua=y(()=>{"use strict";Be();rr();yt();At();Ui();j1();H1();Y1();$1();XB=[[null,"Rw","Rw2","Rw'","Fw","Fw'"],[null,"Dw","Dw2","Dw'"]];eg=new E("R' U' F")});function ue(e,...t){let r=t.length,n=e[t[r-1]];for(let o=r;o>0;o--)e[t[o]]=e[t[o-1]];return e[t[0]]=n,ue}function lg(e,t,r,n){r=(r||8)-1;let o=1985229328,l=0;n??(n=0),n<0&&(t<<=1);for(let i=0;i<r;++i){let s=ga[r-i],a=~~(t/s);l^=a,t%=s,a<<=2,e[i]=o>>a&7;let f=(1<<a)-1;o=(o&f)+(o>>4&~f)}return n<0&&(l&1)!==0?(e[r]=e[r-1],e[r-1]=o&7):e[r]=o&7,e}var Re,ga,ig=y(()=>{"use strict";Re=[],ga=[1];for(let e=0;e<32;++e){Re[e]=[];for(let t=0;t<32;++t)Re[e][t]=0}for(let e=0;e<32;++e){Re[e][0]=Re[e][e]=1,ga[e+1]=ga[e]*(e+1);for(let t=1;t<e;++t)Re[e][t]=Re[e-1][t-1]+Re[e-1][t]}});function G(e,t){let r=new Array(e);if(t!==void 0)for(let n=0;n<e;n++)r[n]=new Array(t);return r}function lR(e){return new yl[e]}function Rt(e,t,r,...n){let o=yl[e];o&&!o.___clazz$?Z=o.prototype:(!o&&(o=yl[e]=function(){}),Z=o.prototype=t<0?{}:lR(t),Z.castableTypeMap$=r);for(let l of n)l.prototype=Z;o.___clazz$&&(Z.___clazz$=o.___clazz$,o.___clazz$=null)}function Gr(e){let t={};for(let r=0,n=e.length;r<n;++r)t[e[r]]=1;return t}function vg(){}function iR(e,t){let r=Eg(0,t);return _g(e.___clazz$,e.castableTypeMap$,e.queryId$,r),r}function Eg(e,t){let r=new Array(t);if(e===3)for(let n=0;n<t;++n){let o={m:0,l:0,h:0};o.l=o.m=o.h=0,r[n]=o}else if(e>0){let n=[null,0,!1][e];for(let o=0;o<t;++o)r[o]=n}return r}function Da(e,t,r,n,o){let l=Eg(o,n);return _g(e,t,r,l),l}function _g(e,t,r,n){return kg(),aR(n,ma,La),n.___clazz$=e,n.castableTypeMap$=t,n.queryId$=r,n}function Xi(e,t,r){return e[t]=r}function kg(){sg||(sg=!0,ma=[],La=[],sR(new vg,ma,La))}function sR(e,t,r){let n=0,o;for(let l in e)(o=e[l])&&(t[n]=l,r[n]=o,++n)}function aR(e,t,r){kg();for(let n=0,o=t.length;n<o;++n)e[t[n]]=r[n]}function fR(e,t){return e.castableTypeMap$&&!!e.castableTypeMap$[t]}function uR(e,t){return e!==null&&fR(e,t)}function gR(){if(ag)return!1;ag=!0,us=G(15582,36),gs=G(15582),Mt=G(15582),Lo=G(48,48),Pt=G(48,36),mo=G(48),Ua=G(48)}function Aa(e){e.ct=G(24)}function fg(e,t){let r,n;if(uR(t,Sg)){for(r=t,n=0;n<24;++n)if(e.ct[n]!==r.ct[n])return!1;return!0}return!1}function $i(e){let t,r,n;for(r=0,n=8,t=23;t>=0;--t)e.ct[t]===1&&(r+=Re[t][n--]);return r}function qi(e){let t,r;if(Fo!==null)return Fo[$i(e)];for(r=0;r<48;++r){if(t=RR($i(e)),t!==-1)return t*64+r;le(e,0),r%2===1&&le(e,1),r%8===7&&le(e,2),r%16===15&&le(e,3)}}function zt(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:h(e.ct,0,1,2,3,r);break;case 1:h(e.ct,16,17,18,19,r);break;case 2:h(e.ct,8,9,10,11,r);break;case 3:h(e.ct,4,5,6,7,r);break;case 4:h(e.ct,20,21,22,23,r);break;case 5:h(e.ct,12,13,14,15,r);break;case 6:h(e.ct,0,1,2,3,r),h(e.ct,8,20,12,16,r),h(e.ct,9,21,13,17,r);break;case 7:h(e.ct,16,17,18,19,r),h(e.ct,1,15,5,9,r),h(e.ct,2,12,6,10,r);break;case 8:h(e.ct,8,9,10,11,r),h(e.ct,2,19,4,21,r),h(e.ct,3,16,5,22,r);break;case 9:h(e.ct,4,5,6,7,r),h(e.ct,10,18,14,22,r),h(e.ct,11,19,15,23,r);break;case 10:h(e.ct,20,21,22,23,r),h(e.ct,0,8,4,14,r),h(e.ct,3,11,7,13,r);break;case 11:h(e.ct,12,13,14,15,r),h(e.ct,1,20,7,18,r),h(e.ct,0,23,6,17,r)}}function le(e,t){switch(t){case 0:zt(e,19),zt(e,28);break;case 1:zt(e,21),zt(e,32);break;case 2:h(e.ct,0,3,1,2,1),h(e.ct,8,11,9,10,1),h(e.ct,4,7,5,6,1),h(e.ct,12,15,13,14,1),h(e.ct,16,19,21,22,1),h(e.ct,17,18,20,23,1);break;case 3:zt(e,18),zt(e,29),zt(e,24),zt(e,35)}}function ug(e,t){let r;for(r=0;r<t;++r)le(e,0),r%2===1&&le(e,1),r%8===7&&le(e,2),r%16===15&&le(e,3)}function ya(e,t){let r,n;for(n=8,r=23;r>=0;--r)e.ct[r]=0,t>=Re[r][n]&&(t-=Re[r][n--],e.ct[r]=1)}function Vi(e,t){let r;for(r=0;r<24;++r)e.ct[r]=t.ct[r]}function Ul(){let e;for(Aa(this),e=0;e<8;++e)this.ct[e]=1;for(e=8;e<24;++e)this.ct[e]=0}function Hi(e,t){let r;for(Aa(this),r=0;r<24;++r)this.ct[r]=~~(e.ct[r]/2)===t?1:0}function Fl(e){let t;for(Aa(this),t=0;t<24;++t)this.ct[t]=e[t]}function pR(){let e,t,r=new Ul,n=new Ul;for(e=0;e<15582;++e)for(ya(n,gs[e]),t=0;t<36;++t)Vi(r,n),zt(r,t),us[e][t]=qi(r)}function cR(){let e,t,r,n,o,l,i,s;for(Ls(Mt),Mt[0]=0,t=0,r=1;r!==15582;)for(l=t>4,s=l?-1:t,e=l?t:-1,++t,n=0;n<15582;++n)if(Mt[n]===s){for(i=0;i<27;++i)if(o=~~us[n][i]>>>6,Mt[o]===e)if(++r,l){Mt[n]=t;break}else Mt[o]=t}}function mR(e){let t,r,n,o=new Fl(e.ct);for(n=0;n<48;++n){for(t=!0,r=0;r<24;++r)if(o.ct[r]!==~~(r/4)){t=!1;break}if(t)return n;le(o,0),n%2===1&&le(o,1),n%8===7&&le(o,2),n%16===15&&le(o,3)}return-1}function LR(){let e,t,r,n=new Ul;for(e=0;e<24;++e)n.ct[e]=e;let o=new Fl(n.ct),l=new Fl(n.ct),i=new Fl(n.ct);for(e=0;e<48;++e){for(t=0;t<48;++t){for(r=0;r<48;++r)fg(n,o)&&(Lo[e][t]=r,r===0&&(mo[e]=t)),le(o,0),r%2===1&&le(o,1),r%8===7&&le(o,2),r%16===15&&le(o,3);le(n,0),t%2===1&&le(n,1),t%8===7&&le(n,2),t%16===15&&le(n,3)}le(n,0),e%2===1&&le(n,1),e%8===7&&le(n,2),e%16===15&&le(n,3)}for(e=0;e<48;++e)for(Vi(n,l),ug(n,mo[e]),t=0;t<36;++t)for(Vi(o,n),zt(o,t),ug(o,e),r=0;r<36;++r)if(Vi(i,l),zt(i,r),fg(i,o)){Pt[e][t]=r;break}for(ya(n,0),e=0;e<48;++e)Ua[mo[e]]=$i(n),le(n,0),e%2===1&&le(n,1),e%8===7&&le(n,2),e%16===15&&le(n,3)}function BR(){let e,t,r,n,o=new Ul,l=G(22984);for(t=0;t<22984;t++)l[t]=0;for(e=0,t=0;t<735471;++t)if((l[~~t>>>5]&1<<(t&31))===0){for(ya(o,t),n=0;n<48;++n)r=$i(o),l[~~r>>>5]|=1<<(r&31),Fo!==null&&(Fo[r]=e<<6|mo[n]),le(o,0),n%2===1&&le(o,1),n%8===7&&le(o,2),n%16===15&&le(o,3);gs[e++]=t}}function RR(e){let t=od(gs,e);return t>=0?t:-1}function dR(){gg||(gg=!0,ns=G(70,28),rs=G(6435,28),Ng=G(70,16),zg=G(6435,16),ot=G(450450),Pg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0])}function es(e){let t,r,n;for(r=0,n=8,t=14;t>=0;--t)e.ct[t]!==e.ct[15]&&(r+=Re[t][n--]);return r}function ts(e){let t,r,n;for(r=0,n=4,t=6;t>=0;--t)e.rl[t]!==e.rl[7]&&(r+=Re[t][n--]);return r*2+e.parity}function co(e,t){e.parity^=Pg[t];let r=t%3;switch(t=~~(t/3),t){case 0:h(e.ct,0,1,2,3,r);break;case 1:h(e.rl,0,1,2,3,r);break;case 2:h(e.ct,8,9,10,11,r);break;case 3:h(e.ct,4,5,6,7,r);break;case 4:h(e.rl,4,5,6,7,r);break;case 5:h(e.ct,12,13,14,15,r);break;case 6:h(e.ct,0,1,2,3,r),h(e.rl,0,5,4,1,r),h(e.ct,8,9,12,13,r);break;case 7:h(e.rl,0,1,2,3,r),h(e.ct,1,15,5,9,r),h(e.ct,2,12,6,10,r);break;case 8:h(e.ct,8,9,10,11,r),h(e.rl,0,3,6,5,r),h(e.ct,3,2,5,4,r);break;case 9:h(e.ct,4,5,6,7,r),h(e.rl,3,2,7,6,r),h(e.ct,11,10,15,14,r);break;case 10:h(e.rl,4,5,6,7,r),h(e.ct,0,8,4,14,r),h(e.ct,3,11,7,13,r);break;case 11:h(e.ct,12,13,14,15,r),h(e.rl,1,4,7,2,r),h(e.ct,1,0,7,6,r)}}function uo(e,t){switch(t){case 0:co(e,19),co(e,28);break;case 1:co(e,21),co(e,32);break;case 2:h(e.ct,0,3,1,2,1),h(e.ct,8,11,9,10,1),h(e.ct,4,7,5,6,1),h(e.ct,12,15,13,14,1),h(e.rl,0,3,5,6,1),h(e.rl,1,2,4,7,1)}}function Cg(e,t,r){let n;for(n=0;n<16;++n)e.ct[n]=~~(t.ct[n]/2);for(n=0;n<8;++n)e.rl[n]=t.ct[n+16];e.parity=r}function pg(e,t){let r,n;for(n=8,e.ct[15]=0,r=14;r>=0;--r)t>=Re[r][n]?(t-=Re[r][n--],e.ct[r]=1):e.ct[r]=0}function cg(e,t){let r,n;for(e.parity=t&1,t>>>=1,n=4,e.rl[7]=0,r=6;r>=0;--r)t>=Re[r][n]?(t-=Re[r][n--],e.rl[r]=1):e.rl[r]=0}function xa(){this.rl=G(8),this.ct=G(16)}function hR(){let e,t,r,n,o,l,i,s,a,f,u=new xa;for(o=0;o<70;++o)for(s=0;s<28;++s)cg(u,o),co(u,hn[s]),ns[o][s]=ts(u);for(o=0;o<70;++o)for(cg(u,o),i=0;i<16;++i)Ng[o][i]=ts(u),uo(u,0),i%2===1&&uo(u,1),i%8===7&&uo(u,2);for(o=0;o<6435;++o)for(pg(u,o),i=0;i<16;++i)zg[o][i]=es(u)&65535,uo(u,0),i%2===1&&uo(u,1),i%8===7&&uo(u,2);for(o=0;o<6435;++o)for(s=0;s<28;++s)pg(u,o),co(u,hn[s]),rs[o][s]=es(u)&65535;for(Ls(ot),ot[0]=ot[18]=ot[28]=ot[46]=ot[54]=ot[56]=0,r=0,n=6;n!==450450;){let g=r>6,p=g?-1:r,c=g?r:-1;for(++r,o=0;o<450450;++o)if(ot[o]===p){for(e=~~(o/70),a=o%70,s=0;s<23;++s)if(t=rs[e][s],f=ns[a][s],l=t*70+f,ot[l]===c)if(++n,g){ot[o]=r;break}else ot[l]=r}}}function FR(){mg||(mg=!0,Dl=G(29400,20),Tg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],Nr=G(29400),wa=[0,9,14,23,27,28,41,42,46,55,60,69],va=G(70))}function ba(e){let t,r,n,o;for(r=0,o=4,t=6;t>=0;--t)e.ud[t]!==e.ud[7]&&(r+=Re[t][o--]);for(r*=35,o=4,t=6;t>=0;--t)e.fb[t]!==e.fb[7]&&(r+=Re[t][o--]);r*=12;let l=e.fb[7]^e.ud[7];for(n=0,o=4,t=7;t>=0;--t)e.rl[t]!==l&&(n+=Re[t][o--]);return e.parity+2*(r+va[n])}function DR(e,t){switch(e.parity^=Tg[t],t){case 0:case 1:case 2:h(e.ud,0,1,2,3,t%3);break;case 3:h(e.rl,0,1,2,3,1);break;case 4:case 5:case 6:h(e.fb,0,1,2,3,(t-1)%3);break;case 7:case 8:case 9:h(e.ud,4,5,6,7,(t-1)%3);break;case 10:h(e.rl,4,5,6,7,1);break;case 11:case 12:case 13:h(e.fb,4,5,6,7,(t+1)%3);break;case 14:h(e.ud,0,1,2,3,1),h(e.rl,0,5,4,1,1),h(e.fb,0,5,4,1,1);break;case 15:h(e.rl,0,1,2,3,1),h(e.fb,1,4,7,2,1),h(e.ud,1,6,5,2,1);break;case 16:h(e.fb,0,1,2,3,1),h(e.ud,3,2,5,4,1),h(e.rl,0,3,6,5,1);break;case 17:h(e.ud,4,5,6,7,1),h(e.rl,3,2,7,6,1),h(e.fb,3,2,7,6,1);break;case 18:h(e.rl,4,5,6,7,1),h(e.fb,0,3,6,5,1),h(e.ud,0,3,4,7,1);break;case 19:h(e.fb,4,5,6,7,1),h(e.ud,0,7,6,1,1),h(e.rl,1,4,7,2,1)}}function Mg(e,t,r){let n,o=(t.ct[0]>t.ct[8]?1:0)^(t.ct[8]>t.ct[16]?1:0)^(t.ct[0]>t.ct[16]?1:0)?1:0;for(n=0;n<8;++n)e.ud[n]=t.ct[n]&1^1,e.fb[n]=t.ct[n+8]&1^1,e.rl[n]=t.ct[n+16]&1^1^o;e.parity=o^r}function AR(e,t){let r,n,o,l;for(e.parity=t&1,t>>>=1,o=wa[t%12],t=~~(t/12),l=4,r=7;r>=0;--r)e.rl[r]=0,o>=Re[r][l]&&(o-=Re[r][l--],e.rl[r]=1);for(n=t%35,t=~~(t/35),l=4,e.fb[7]=0,r=6;r>=0;--r)n>=Re[r][l]?(n-=Re[r][l--],e.fb[r]=1):e.fb[r]=0;for(l=4,e.ud[7]=0,r=6;r>=0;--r)t>=Re[r][l]?(t-=Re[r][l--],e.ud[r]=1):e.ud[r]=0}function Sa(){this.ud=G(8),this.rl=G(8),this.fb=G(8)}function yR(){let e,t,r,n;for(r=0;r<12;++r)va[wa[r]]=r;let o=new Sa;for(r=0;r<29400;++r)for(n=0;n<20;++n)AR(o,r),DR(o,n),Dl[r][n]=ba(o)&65535;for(Ls(Nr),Nr[0]=0,e=0,t=1;t!==29400;){for(r=0;r<29400;++r)if(Nr[r]===e)for(n=0;n<17;++n)Nr[Dl[r][n]]===-1&&(Nr[Dl[r][n]]=e+1,++t);++e}}function UR(e,t){let r;for(r=0;r<24;++r)e.ct[r]=t.ct[r]}function xR(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:h(e.ct,0,1,2,3,r);break;case 1:h(e.ct,16,17,18,19,r);break;case 2:h(e.ct,8,9,10,11,r);break;case 3:h(e.ct,4,5,6,7,r);break;case 4:h(e.ct,20,21,22,23,r);break;case 5:h(e.ct,12,13,14,15,r);break;case 6:h(e.ct,0,1,2,3,r),h(e.ct,8,20,12,16,r),h(e.ct,9,21,13,17,r);break;case 7:h(e.ct,16,17,18,19,r),h(e.ct,1,15,5,9,r),h(e.ct,2,12,6,10,r);break;case 8:h(e.ct,8,9,10,11,r),h(e.ct,2,19,4,21,r),h(e.ct,3,16,5,22,r);break;case 9:h(e.ct,4,5,6,7,r),h(e.ct,10,18,14,22,r),h(e.ct,11,19,15,23,r);break;case 10:h(e.ct,20,21,22,23,r),h(e.ct,0,8,4,14,r),h(e.ct,3,11,7,13,r);break;case 11:h(e.ct,12,13,14,15,r),h(e.ct,1,20,7,18,r),h(e.ct,0,23,6,17,r)}}function Ea(){let e;for(this.ct=G(24),e=0;e<24;++e)this.ct[e]=~~(e/4)}function Gg(e){let t,r,n;for(Ea.call(this),t=0;t<23;++t)n=t+e(24-t),this.ct[n]!==this.ct[t]&&(r=this.ct[t],this.ct[t]=this.ct[n],this.ct[n]=r)}function bR(){Lg||(Lg=!0,bt=G(18),vR())}function Og(e){e.cp=[0,1,2,3,4,5,6,7],e.co=[0,0,0,0,0,0,0,0]}function Ig(e,t){let r;for(r=0;r<8;++r)e.cp[r]=t.cp[r],e.co[r]=t.co[r]}function SR(e,t){!e.temps&&(e.temps=new ps),Wg(e,bt[t],e.temps),Ig(e,e.temps)}function wR(e,t){let r,n;for(n=0,r=6;r>=0;--r)n+=e.co[r]=t%3,t=~~(t/3);e.co[7]=(15-n)%3}function Wg(e,t,r){let n,o,l,i;for(n=0;n<8;++n)r.cp[n]=e.cp[t.cp[n]],l=e.co[t.cp[n]],i=t.co[n],o=l,o=o+(l<3?i:6-i),o=o%3,(l>=3?1:0)^(i>=3?1:0)&&(o=o+3),r.co[n]=o}function ps(){Og(this)}function Pr(e,t){Og(this),lg(this.cp,e),wR(this,t)}function Kg(e){Pr.call(this,e(40320),e(2187))}function vR(){let e,t;for(bt[0]=new Pr(15120,0),bt[3]=new Pr(21021,1494),bt[6]=new Pr(8064,1236),bt[9]=new Pr(9,0),bt[12]=new Pr(1230,412),bt[15]=new Pr(224,137),e=0;e<18;e+=3)for(t=0;t<2;++t)bt[e+t+1]=new ps,Wg(bt[e+t],bt[e],bt[e+t+1])}function ER(){Bg||(Bg=!0,Nt=G(1937880),cs=G(1538),is=G(1538),Uo=G(11880),Hg=[0,1,6,3,4,5,2,7],ka=G(160,12),Ca=G(160,12),_a=[1,1,1,3,12,60,360,2520,20160,181440,1814400,19958400,239500800],Ba=[0,2,4,6,1,3,7,5,8,9,10,11])}function go(e,t,r,n,o){let l=e.edgeo[o];e.edgeo[o]=e.edge[n],e.edge[n]=e.edgeo[r],e.edgeo[r]=e.edge[t],e.edge[t]=l}function Do(e,t){let r,n,o,l,i;for(e.isStd||qg(e),n=0,i=1985229328,l=47768,r=0;r<t;++r)o=e.edge[r]<<2,n*=12-r,o>=32?(n+=l>>o-32&15,l-=4368<<o-32):(n+=i>>o&15,l-=4369,i-=286331152<<o);return n}function Qg(e){let t,r=Do(e,4);t=Uo[r];let n=t&7;t>>=3,ls(e,n);let o=Do(e,10)%20160;return t*20160+o}function os(e,t){switch(e.isStd=!1,t){case 0:ue(e.edge,0,4,1,5),ue(e.edgeo,0,4,1,5);break;case 1:De(e.edge,0,4,1,5),De(e.edgeo,0,4,1,5);break;case 2:ue(e.edge,0,5,1,4),ue(e.edgeo,0,5,1,4);break;case 3:De(e.edge,5,10,6,11),De(e.edgeo,5,10,6,11);break;case 4:ue(e.edge,0,11,3,8),ue(e.edgeo,0,11,3,8);break;case 5:De(e.edge,0,11,3,8),De(e.edgeo,0,11,3,8);break;case 6:ue(e.edge,0,8,3,11),ue(e.edgeo,0,8,3,11);break;case 7:ue(e.edge,2,7,3,6),ue(e.edgeo,2,7,3,6);break;case 8:De(e.edge,2,7,3,6),De(e.edgeo,2,7,3,6);break;case 9:ue(e.edge,2,6,3,7),ue(e.edgeo,2,6,3,7);break;case 10:De(e.edge,4,8,7,9),De(e.edgeo,4,8,7,9);break;case 11:ue(e.edge,1,9,2,10),ue(e.edgeo,1,9,2,10);break;case 12:De(e.edge,1,9,2,10),De(e.edgeo,1,9,2,10);break;case 13:ue(e.edge,1,10,2,9),ue(e.edgeo,1,10,2,9);break;case 14:De(e.edge,0,4,1,5),De(e.edgeo,0,4,1,5),ue(e.edge,9,11),ue(e.edgeo,8,10);break;case 15:De(e.edge,5,10,6,11),De(e.edgeo,5,10,6,11),ue(e.edge,1,3),ue(e.edgeo,0,2);break;case 16:De(e.edge,0,11,3,8),De(e.edgeo,0,11,3,8),ue(e.edge,5,7),ue(e.edgeo,4,6);break;case 17:De(e.edge,2,7,3,6),De(e.edgeo,2,7,3,6),ue(e.edge,8,10),ue(e.edgeo,9,11);break;case 18:De(e.edge,4,8,7,9),De(e.edgeo,4,8,7,9),ue(e.edge,0,2),ue(e.edgeo,1,3);break;case 19:De(e.edge,1,9,2,10),De(e.edgeo,1,9,2,10),ue(e.edge,4,6),ue(e.edgeo,5,7)}}function Bo(e,t){switch(e.isStd=!1,t){case 0:os(e,14),os(e,17);break;case 1:go(e,11,5,10,6),go(e,5,10,6,11),go(e,1,2,3,0),go(e,4,9,7,8),go(e,8,4,9,7),go(e,0,1,2,3);break;case 2:xt(e,4,5),xt(e,5,4),xt(e,11,8),xt(e,8,11),xt(e,7,6),xt(e,6,7),xt(e,9,10),xt(e,10,9),xt(e,1,1),xt(e,0,0),xt(e,3,3),xt(e,2,2)}}function ls(e,t){for(;t>=2;)t-=2,Bo(e,1),Bo(e,2);t!==0&&Bo(e,0)}function Sl(e,t){let r,n,o,l,i,s;for(i=1985229328,s=47768,o=0,r=0;r<11;++r)if(n=_a[11-r],l=~~(t/n),t=t%n,o^=l,l<<=2,l>=32){l=l-32,e.edge[r]=s>>l&15;let a=(1<<l)-1;s=(s&a)+(s>>4&~a)}else{e.edge[r]=i>>l&15;let a=(1<<l)-1;i=(i&a)+(i>>>4&~a)+(s<<28),s=s>>4}for((o&1)===0?e.edge[11]=i:(e.edge[11]=e.edge[10],e.edge[10]=i),r=0;r<12;++r)e.edgeo[r]=r;e.isStd=!0}function Rg(e,t){let r;for(r=0;r<12;++r)e.edge[r]=t.edge[r],e.edgeo[r]=t.edgeo[r];e.isStd=t.isStd}function jg(e,t){let r,n,o,l;for(e.temp===null&&(e.temp=G(12)),r=0;r<12;++r)e.temp[r]=r,e.edge[r]=t.ep[Ba[r]+12]%12;for(n=1,r=0;r<12;++r)for(;e.edge[r]!==r;)l=e.edge[r],e.edge[r]=e.edge[l],e.edge[l]=l,o=e.temp[r],e.temp[r]=e.temp[l],e.temp[l]=o,n^=1;for(r=0;r<12;++r)e.edge[r]=e.temp[t.ep[Ba[r]]%12];return n}function qg(e){let t;for(e.temp===null&&(e.temp=G(12)),t=0;t<12;++t)e.temp[e.edgeo[t]]=t;for(t=0;t<12;++t)e.edge[t]=e.temp[e.edge[t]],e.edgeo[t]=t;e.isStd=!0}function De(e,t,r,n,o){let l;l=e[t],e[t]=e[n],e[n]=l,l=e[r],e[r]=e[o],e[o]=l}function xt(e,t,r){let n=e.edge[t];e.edge[t]=e.edgeo[r],e.edgeo[r]=n}function fr(){this.edge=G(12),this.edgeo=G(12)}function _R(){let e,t,r,n,o,l,i,s,a,f,u,g,p,c,L,m,R,F,A,U,b,S,N=new fr,J=new fr,z=new fr;for(Ls(Nt),s=0,ji=1,pa(Nt,0,0);ji!==31006080&&(L=s>9,i=s%3,l=(s+1)%3,f=L?3:i,e=L?i:3,!(s>=9));){for(g=0;g<31006080;g+=16)if(S=Nt[~~g>>4],!(!L&&S===-1)){for(u=g,a=g+16;u<a;++u,S>>=2)if((S&3)===f){for(A=~~(u/20160),t=cs[A],n=u%20160,Sl(N,t*20160+n),R=0;R<17;++R)if(r=Ao(N.edge,R<<3,4),U=Uo[r],b=U&7,U>>=3,o=Ao(N.edge,R<<3|b,10)%20160,p=U*20160+o,xl(Nt,p)===e){if(pa(Nt,L?u:p,l),++ji,L)break;if(F=is[U],F!==1)for(Rg(J,N),os(J,R),ls(J,b),m=1;(F=~~F>>1&65535)!==0;++m)(F&1)===1&&(Rg(z,J),ls(z,m),c=U*20160+Do(z,10)%20160,xl(Nt,c)===e&&(pa(Nt,c,l),++ji))}}}++s}}function xl(e,t){return e[t>>4]>>((t&15)<<1)&3}function Ao(e,t,r){let n,o,l,i,s,a=Ca[t],f=ka[t];for(o=0,s=1985229328,i=47768,n=0;n<r;++n)l=a[e[f[n]]]<<2,o*=12-n,l>=32?(o+=i>>l-32&15,i-=4368<<l-32):(o+=s>>l&15,i-=4369,s-=286331152<<l);return o}function Vg(e){let t,r,n,o,l,i,s,a,f,u,g,p=new fr;if(i=0,l=xl(Nt,e),l===3)return 10;for(;e!==0;)for(l===0?l=2:--l,f=~~(e/20160),t=cs[f],n=e%20160,Sl(p,t*20160+n),a=0;a<17;++a)if(r=Ao(p.edge,a<<3,4),u=Uo[r],g=u&7,u>>=3,o=Ao(p.edge,a<<3|g,10)%20160,s=u*20160+o,xl(Nt,s)===l){++i,e=s;break}return i}function kR(e,t){let r=xl(Nt,e);return r===3?10:(1227133513<<r>>t&3)+t-1}function CR(){let e,t,r,n=new fr;for(t=0;t<20;++t)for(r=0;r<8;++r){for(Sl(n,0),os(n,t),ls(n,r),e=0;e<12;++e)ka[t<<3|r][e]=n.edge[e];for(qg(n),e=0;e<12;++e)Ca[t<<3|r][e]=n.temp[e]}}function zR(){let e,t,r,n,o=new fr,l=G(1485);for(t=0;t<1485;t++)l[t]=0;for(e=0,t=0;t<11880;++t)if((l[~~t>>>3]&1<<(t&7))===0){for(Sl(o,t*_a[8]),n=0;n<8;++n)r=Do(o,4),r===t&&(is[e]=(is[e]|1<<n)&65535),l[~~r>>3]=l[~~r>>3]|1<<(r&7),Uo[r]=e<<3|Hg[n],Bo(o,0),n%2===1&&(Bo(o,1),Bo(o,2));cs[e++]=t}}function pa(e,t,r){e[t>>4]^=(3^r)<<((t&15)<<1)}function PR(){dg||(dg=!0)}function NR(e){let t,r,n;for(t=0,n=!1,r=0;r<12;++r)t|=1<<e.ep[r],n=n!==e.ep[r]>=12;return t&=~~t>>12,t===0&&!n}function MR(e,t){let r;for(r=0;r<24;++r)e.ep[r]=t.ep[r]}function TR(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:h(e.ep,0,1,2,3,r),h(e.ep,12,13,14,15,r);break;case 1:h(e.ep,11,15,10,19,r),h(e.ep,23,3,22,7,r);break;case 2:h(e.ep,0,11,6,8,r),h(e.ep,12,23,18,20,r);break;case 3:h(e.ep,4,5,6,7,r),h(e.ep,16,17,18,19,r);break;case 4:h(e.ep,1,20,5,21,r),h(e.ep,13,8,17,9,r);break;case 5:h(e.ep,2,9,4,10,r),h(e.ep,14,21,16,22,r);break;case 6:h(e.ep,0,1,2,3,r),h(e.ep,12,13,14,15,r),h(e.ep,9,22,11,20,r);break;case 7:h(e.ep,11,15,10,19,r),h(e.ep,23,3,22,7,r),h(e.ep,2,16,6,12,r);break;case 8:h(e.ep,0,11,6,8,r),h(e.ep,12,23,18,20,r),h(e.ep,3,19,5,13,r);break;case 9:h(e.ep,4,5,6,7,r),h(e.ep,16,17,18,19,r),h(e.ep,8,23,10,21,r);break;case 10:h(e.ep,1,20,5,21,r),h(e.ep,13,8,17,9,r),h(e.ep,14,0,18,4,r);break;case 11:h(e.ep,2,9,4,10,r),h(e.ep,14,21,16,22,r),h(e.ep,7,15,1,17,r)}}function za(){let e;for(this.ep=G(24),e=0;e<24;++e)this.ep[e]=e}function Zg(e){let t,r,n;for(za.call(this),t=0;t<23;++t)n=t+e(24-t),n!==t&&(r=this.ep[t],this.ep[t]=this.ep[n],this.ep[n]=r)}function GR(){hg||(hg=!0,Ra=[35,1,34,2,4,6,22,5,19])}function Jg(e){e.moveBuffer=G(60)}function OR(e,t){return e.value-t.value}function yo(e,t){let r;for(MR(e.edge,t.edge),UR(e.center,t.center),Ig(e.corner,t.corner),e.value=t.value,e.add1=t.add1,e.length1=t.length1,e.length2=t.length2,e.length3=t.length3,e.sym=t.sym,r=0;r<60;++r)e.moveBuffer[r]=t.moveBuffer[r];e.moveLength=t.moveLength,e.edgeAvail=t.edgeAvail,e.centerAvail=t.centerAvail,e.cornerAvail=t.cornerAvail}function Mr(e){for(;e.centerAvail<e.moveLength;)xR(e.center,e.moveBuffer[e.centerAvail++]);return e.center}function Yg(e){for(;e.cornerAvail<e.moveLength;)SR(e.corner,e.moveBuffer[e.cornerAvail++]%18);return e.corner}function bl(e){for(;e.edgeAvail<e.moveLength;)TR(e.edge,e.moveBuffer[e.edgeAvail++]);return e.edge}function IR(e){let t,r,n,o,l,i,s=new Array(e.moveLength-(e.add1?2:0));for(r=0,t=0;t<e.length1;++t)s[r++]=e.moveBuffer[t];for(i=e.sym,t=e.length1+(e.add1?2:0);t<e.moveLength;++t)Pt[i][e.moveBuffer[t]]>=27?(s[r++]=Pt[i][e.moveBuffer[t]]-9,o=Ra[Pt[i][e.moveBuffer[t]]-27],i=Lo[i][o]):s[r++]=Pt[i][e.moveBuffer[t]];let a=Lo[mo[i]][mR(Mr(e))];for(l="",i=a,t=r-1;t>=0;--t)n=s[t],n=~~(n/3)*3+(2-n%3),Pt[i][n]>=27?(l=l+da[Pt[i][n]-9]+" ",o=Ra[Pt[i][n]-27],i=Lo[i][o]):l=l+da[Pt[i][n]]+" ";return l}function dn(e,t){e.moveBuffer[e.moveLength++]=t}function ss(){Jg(this),this.edge=new za,this.center=new Ea,this.corner=new ps}function ms(e){ss.call(this),yo(this,e)}function Xg(e){Jg(this),this.edge=new Zg(e),this.center=new Gg(e),this.corner=new Kg(e)}function WR(e,t){return t.value-e.value}function as(e,t){return WR(e,t)}function $g(){}function KR(){if(Fg)return;Fg=!0;let e,t;for(da=["U  ","U2 ","U' ","R  ","R2 ","R' ","F  ","F2 ","F' ","D  ","D2 ","D' ","L  ","L2 ","L' ","B  ","B2 ","B' ","Uw ","Uw2","Uw'","Rw ","Rw2","Rw'","Fw ","Fw2","Fw'","Dw ","Dw2","Dw'","Lw ","Lw2","Lw'","Bw ","Bw2","Bw'"],hn=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,21,22,23,25,28,30,31,32,34,36],hl=[0,1,2,4,6,7,8,9,10,11,13,15,16,17,19,22,25,28,31,34,36],Dg=G(37),Ag=G(37),po=G(37,36),Zi=G(29,28),Ji=G(21,20),ca=G(36),Al=G(28),Ro=G(20),e=0;e<29;++e)Dg[hn[e]]=e;for(e=0;e<21;++e)Ag[hl[e]]=e;for(e=0;e<36;++e){for(t=0;t<36;++t)po[e][t]=~~(e/3)===~~(t/3)||~~(e/3)%3===~~(t/3)%3&&e>t;po[36][e]=!1}for(e=0;e<29;++e)for(t=0;t<28;++t)Zi[e][t]=po[hn[e]][hn[t]];for(e=0;e<21;++e)for(t=0;t<20;++t)Ji[e][t]=po[hl[e]][hl[t]];for(e=0;e<36;++e)for(ca[e]=36,t=e;t<36;++t)if(!po[e][t]){ca[e]=t-1;break}for(e=0;e<28;++e)for(Al[e]=28,t=e;t<28;++t)if(!Zi[e][t]){Al[e]=t-1;break}for(e=0;e<20;++e)for(Ro[e]=20,t=e;t<20;++t)if(!Ji[e][t]){Ro[e]=t-1;break}}function QR(e){let t,r,n,o,l,i,s,a,f,u,g,p;e.solution="";let c=qi(new Hi(Mr(e.c),0)),L=qi(new Hi(Mr(e.c),1)),m=qi(new Hi(Mr(e.c),2)),R=Mt[~~c>>6],F=Mt[~~L>>6],A=Mt[~~m>>6];for(e.p1SolsCnt=0,e.arr2idx=0,$R(e.p1sols.heap),e.length1=(R<F?R:F)<A?R<F?R:F:A;e.length1<100&&!(A<=e.length1&&Yi(e,~~m>>>6,m&63,e.length1,-1,0)||R<=e.length1&&Yi(e,~~c>>>6,c&63,e.length1,-1,0)||F<=e.length1&&Yi(e,~~L>>>6,L&63,e.length1,-1,0));++e.length1);let U=ud(e.p1sols,Da(pd,Gr([rR,ha,Fa]),wg,0,0));U.sort(function(N,J){return N.value-J.value}),t=9;do{e:for(a=U[0].value;a<100;++a)for(i=0;i<U.length&&!(U[i].value>a);++i)if(!(a-U[i].length1>t)&&(yo(e.c1,U[i]),Cg(e.ct2,Mr(e.c1),fs(bl(e.c1).ep)),g=es(e.ct2),p=ts(e.ct2),e.length1=U[i].length1,e.length2=a-U[i].length1,ep(e,g,p,e.length2,28,0)))break e;++t}while(a===100);e.arr2.sort(function(N,J){return N.value-J.value}),s=0,r=13;do{e:for(f=e.arr2[0].value;f<100;++f)for(i=0;i<Math.min(e.arr2idx,100)&&!(e.arr2[i].value>f);++i)if(!(f-e.arr2[i].length1-e.arr2[i].length2>r)&&(l=jg(e.e12,bl(e.arr2[i])),Mg(e.ct3,Mr(e.arr2[i]),l^fs(Yg(e.arr2[i]).cp)),n=ba(e.ct3),o=Do(e.e12,10),u=Vg(Qg(e.e12)),u<=f-e.arr2[i].length1-e.arr2[i].length2&&tp(e,o,n,u,f-e.arr2[i].length1-e.arr2[i].length2,20,0))){s=i;break e}++r}while(f===100);let b=new ms(e.arr2[s]);e.length1=b.length1,e.length2=b.length2;let S=f-e.length1-e.length2;for(i=0;i<S;++i)dn(b,hl[e.move3[i]]);e.solution=IR(b)}function jR(e,t){let r,n;for(yo(e.c1,e.c),r=0;r<e.length1;++r)dn(e.c1,e.move1[r]);switch(Ua[t]){case 0:dn(e.c1,24),dn(e.c1,35),e.move1[e.length1]=24,e.move1[e.length1+1]=35,e.add1=!0,t=19;break;case 12869:dn(e.c1,18),dn(e.c1,29),e.move1[e.length1]=18,e.move1[e.length1+1]=29,e.add1=!0,t=34;break;case 735470:e.add1=!1,t=0}Cg(e.ct2,Mr(e.c1),fs(bl(e.c1).ep));let o=es(e.ct2),l=ts(e.ct2),i=ot[o*70+l];return e.c1.value=i+e.length1,e.c1.length1=e.length1,e.c1.add1=e.add1,e.c1.sym=t,++e.p1SolsCnt,e.p1sols.heap.size<500?n=new ms(e.c1):(n=ad(e.p1sols),n.value>e.c1.value&&yo(n,e.c1)),JR(e.p1sols,n),e.p1SolsCnt===1e4}function qR(e){let t;for(yo(e.c2,e.c1),t=0;t<e.length2;++t)dn(e.c2,e.move2[t]);if(!NR(bl(e.c2)))return!1;let r=jg(e.e12,bl(e.c2));Mg(e.ct3,Mr(e.c2),r^fs(Yg(e.c2).cp));let n=ba(e.ct3);Do(e.e12,10);let o=Vg(Qg(e.e12));return e.arr2[e.arr2idx]?yo(e.arr2[e.arr2idx],e.c2):e.arr2[e.arr2idx]=new ms(e.c2),e.arr2[e.arr2idx].value=e.length1+e.length2+Math.max(o,Nr[n]),e.arr2[e.arr2idx].length2=e.length2,++e.arr2idx,e.arr2idx===e.arr2.length}function VR(e,t){return np(),e.c=new Xg(t),QR(e),e.solution}function Yi(e,t,r,n,o,l){let i,s,a,f,u,g;if(t===0)return n===0&&jR(e,r);for(i=0;i<27;i+=3)if(!(i===o||i===o-9||i===o-18))for(f=0;f<3;++f){if(a=i+f,s=us[t][Pt[r][a]],u=Mt[~~s>>>6],u>=n){if(u>n)break;continue}if(g=Lo[r][s&63],s>>>=6,e.move1[l]=a,Yi(e,s,g,n-1,i,l+1))return!0}return!1}function ep(e,t,r,n,o,l){let i,s,a,f;if(t===0&&ot[r]===0)return n===0&&qR(e);for(s=0;s<23;++s){if(Zi[o][s]){s=Al[s];continue}if(i=rs[t][s],f=ns[r][s],a=ot[i*70+f],a>=n){a>n&&(s=Al[s]);continue}if(e.move2[l]=hn[s],ep(e,i,f,n-1,s,l+1))return!0}return!1}function tp(e,t,r,n,o,l,i){let s,a,f,u,g,p,c,L,m;if(o===0)return t===0&&r===0;for(Sl(e.tempe[i],t),g=0;g<17;++g){if(Ji[l][g]){g=Ro[g];continue}if(f=Dl[r][g],p=Nr[f],p>=o){p>o&&g<14&&(g=Ro[g]);continue}if(u=Ao(e.tempe[i].edge,g<<3,10),s=~~(u/20160),L=Uo[s],m=L&7,L>>=3,a=Ao(e.tempe[i].edge,g<<3|m,10)%20160,c=kR(L*20160+a,n),c>=o){c>o&&g<14&&(g=Ro[g]);continue}if(tp(e,u,f,c,o-1,g,i+1))return e.move3[i]=g,!0}return!1}function rp(){let e;for(this.p1sols=new fp(new $g),this.move1=G(15),this.move2=G(20),this.move3=G(20),this.c1=new ss,this.c2=new ss,this.ct2=new xa,this.ct3=new Sa,this.e12=new fr,this.tempe=G(20),this.arr2=G(100),e=0;e<20;++e)this.tempe[e]=new fr}function np(){yg||(LR(),Fo=G(735471),BR(),pR(),Fo=null,cR(),hR(),yR(),CR(),zR(),_R(),yg=!0)}function HR(){Ug||(Ug=!0)}function fs(e){let t,r,n,o;for(o=0,t=0,n=e.length;t<n;++t)for(r=t;r<n;++r)e[t]>e[r]&&(o^=1);return o}function h(e,t,r,n,o,l){let i;switch(l){case 0:i=e[o],e[o]=e[n],e[n]=e[r],e[r]=e[t],e[t]=i;return;case 1:i=e[t],e[t]=e[n],e[n]=i,i=e[r],e[r]=e[o],e[o]=i;return;case 2:i=e[t],e[t]=e[r],e[r]=e[n],e[n]=e[o],e[o]=i;return}}function op(){}function lp(e,t,r,n){let o=new op;return o.typeName=e+t,sp(r!==0?-r:0)&&ap(r!==0?-r:0,o),o.modifiers=4,o.superclass=Pa,o.componentType=n,o}function ip(e,t,r,n){let o=new op;return o.typeName=e+t,sp(r)&&ap(r,o),o.superclass=n,o}function ZR(e){let t=yl[e.seedId];return e=null,t}function sp(e){return typeof e=="number"&&e>0}function ap(e,t){let r;if(t.seedId=e,e===2)r=String.prototype;else if(e>0){let n=ZR(t);if(n)r=n.prototype;else{n=yl[e]=function(){},n.___clazz$=t;return}}else return;r.___clazz$=t}function JR(e,t){if(sd(e,t))return!0}function YR(e){e.array=Da(up,Gr([ha,Fa]),bg,0,0)}function XR(e,t){return Xi(e.array,e.size++,t),!0}function $R(e){e.array=Da(up,Gr([ha,Fa]),bg,0,0),e.size=0}function Tr(e,t){return e.array[t]}function ed(e,t){let r=e.array[t];return nd(e.array,t,1),--e.size,r}function ho(e,t,r){let n=e.array[t];return Xi(e.array,t,r),n}function td(e,t){let r;for(t.length<e.size&&(t=iR(t,e.size)),r=0;r<e.size;++r)Xi(t,r,e.array[r]);return t.length>e.size&&Xi(t,e.size,null),t}function rd(){YR(this),this.array.length=500}function nd(e,t,r){e.splice(t,r)}function od(e,t){let r,n,o,l;for(n=0,r=e.length-1;n<=r;)if(o=n+(~~(r-n)>>1),l=e[o],l<t)n=o+1;else if(l>t)r=o-1;else return o;return-n-1}function Ls(e){ld(e,e.length)}function ld(e,t){let r;for(r=0;r<t;++r)e[r]=-1}function id(e,t){let r,n,o,l,i=e.heap.size,s=Tr(e.heap,t);for(;t*2+1<i&&(r=(n=2*t+1,o=n+1,l=n,o<i&&as(Tr(e.heap,o),Tr(e.heap,n))<0&&(l=o),l),!(as(s,Tr(e.heap,r))<0));)ho(e.heap,t,Tr(e.heap,r)),t=r;ho(e.heap,t,s)}function sd(e,t){let r,n;for(n=e.heap.size,XR(e.heap,t);n>0;){if(r=n,n=~~((n-1)/2),as(Tr(e.heap,n),t)<=0)return ho(e.heap,r,t),!0;ho(e.heap,r,Tr(e.heap,n))}return ho(e.heap,n,t),!0}function ad(e){if(e.heap.size===0)return null;let t=Tr(e.heap,0);return fd(e),t}function fd(e){let t=ed(e.heap,e.heap.size-1);0<e.heap.size&&(ho(e.heap,0,t),id(e,0))}function ud(e,t){return td(e.heap,t)}function fp(e){this.heap=new rd,this.cmp=e}function pp(){xg||(xg=!0,KR(),HR(),gR(),dR(),FR(),ER(),bR(),PR(),GR(),gp=new rp)}function cd(){pp(),np()}async function md(){we(),pp();let e=E.fromString(VR(gp,await ve()));return(await fo()).concat(e)}var Z,yl,$B,bg,ha,Sg,eR,tR,wg,rR,nR,oR,Fa,sg,ma,La,ag,Mt,us,Ua,Fo,gs,mo,Pt,Lo,gg,rs,ot,zg,Pg,ns,Ng,mg,Dl,Tg,Nr,wa,va,Lg,bt,Bg,Ba,ji,Nt,_a,ka,Ca,Uo,cs,Hg,is,dg,hg,Ra,Fg,po,Zi,Ji,hn,da,hl,ca,Al,Ro,Dg,Ag,yg,Ug,Pa,up,gd,pd,gp,xg,cp=y(()=>{"use strict";Be();ua();ig();yt();At();yl={},$B={},bg=0,ha=30,Sg=21,eR=22,tR=23,wg=24,rR=25,nR=34,oR=26,Fa=40;Rt(1,-1,$B);Z.value=null;Rt(73,1,{},vg);Z.queryId$=0;sg=!1;ag=!1;Rt(153,1,Gr([Sg]),Ul,Hi,Fl);Fo=null,gg=!1;Rt(154,1,{},xa);Z.parity=0;mg=!1;Rt(155,1,{},Sa);Z.parity=0;Rt(156,1,{},Ea,Gg);Lg=!1;Rt(157,1,Gr([eR]),ps,Pr,Kg);Z.temps=null;Bg=!1;Rt(158,1,Gr([tR]),fr);Z.isStd=!0;Z.temp=null;ji=0,dg=!1;Rt(159,1,{},za,Zg);hg=!1;Rt(160,1,Gr([wg,nR]),ss,ms,Xg);Z.compareTo$=function(t){return OR(this,t)};Z.add1=!1;Z.center=null;Z.centerAvail=0;Z.corner=null;Z.cornerAvail=0;Z.edge=null;Z.edgeAvail=0;Z.length1=0;Z.length2=0;Z.length3=0;Z.moveLength=0;Z.sym=0;Z.value=0;Rt(161,1,{},$g);Z.compare=function(t,r){return as(t,r)};Fg=!1;Rt(163,1,Gr([oR]),rp);Z.add1=!1;Z.arr2idx=0;Z.c=null;Z.length1=0;Z.length2=0;Z.p1SolsCnt=0;Z.solution="";yg=!1,Ug=!1;Z.val$outerIter=null;Z.size=0;Rt(239,1,{},fp);Z.cmp=null;Z.heap=null;Pa=ip("java.lang.","Object",1,null),up=lp("[Ljava.lang.","Object;",356,Pa),gd=ip("cs.threephase.","FullCube",160,Pa),pd=lp("[Lcs.threephase.","FullCube;",381,gd),xg=!1});var mp={};ht(mp,{initialize:()=>cd,random444Scramble:()=>md});var Lp=y(()=>{"use strict";cp()});function vl(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function Bs(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function Sp(e,t,r,n,o=e-t-r-n){return Bs(e,t+r)*Bs(t+r,t)*Bs(n+o,n)}function Fd(e){e=e.slice();let t=e.length,r=vl(t-1),n=0;for(;t>1;){t--;let o=e[0];n+=o*r;for(let l=0;l<t;l++){let i=e[l+1];e[l]=i-(i>o)}r/=t}return n}function Dd(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let o=n;o<t;o++)e[n]>e[o]&&(r^=1);return r}function qa(e,t){let r=[],n=vl(t-1)/2,o=0;for(let l=0;l<t-1;l++)r[l]=e/n|0,e%=n,n/=t-1-l;r[t-1]=0;for(let l=t-2;l>=0;l--)for(let i=l+1;i<t;i++)r[i]>=r[l]?r[i]++:o^=1;return o===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function Fn(e){return Fd(e)>>1}function Ka(e,t){let r=[0];for(let n=1;n<e;n++){let o=t(n+1);r[n]=r[o],r[o]=n}return r}function Fp(e,t){let r=Ka(e,t);return Dd(r)===1&&([r[0],r[1]]=[r[1],r[0]]),r}function Ad(e){return e|=0,31-Math.clz32(e^e-1)}function Dp(e,t){e|=0,t|=0;let r=e+" "+t;if(Ta[r])return Ta[r];let n=Bs(e,t),o=new Uint32Array(n),l=new Uint32Array(1<<e).fill(-1);for(let i=0,s=(1<<t)-1;i<n;i++){o[i]=s,l[s]=i;let a=s|s-1;s=a+1|(~a&-~a)-1>>Ad(s)+1}return Ta[r]=[o,l]}function yd(e){e|=0;let t=0;for(;e!==0;)e&=e-1,t++;return t}function Ap(e){return e&=65535,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,e}function Ud(e,t){return Ap(e)|Ap(t)<<1}function wo(e,t,r,n,o){if(e|=0,t|=0,r|=0,n|=0,o|=0,e!==t+r+n+o)throw new Error("generate_comb4_lookup_tables: invalid parameters");let l=[e,t,r,n,o].join(" ");if(Ga[l])return Ga[l];let[i,s]=Dp(e,r+o),[a,f]=Dp(e,n+o),u=Sp(e,t,r,n,o),g=new Uint32Array(u),p=new Uint32Array(4**e).fill(-1);for(let c=0,L=0;c<a.length;c++){let m=a[c];for(let R=0;R<i.length;R++){let F=i[R];if(yd(F&m)===o){let A=Ud(F,m);g[L]=A,p[A]=L,L++}}}return Ga[l]=[g,p]}function et(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function vo(e,t,r){let n=[];for(let o=0;o<r.length;o++)n[o]=e[t[r[o]]];return n}function Va(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n of e)for(let o=0;o<n.length;o++)r[n[o]]=n[(o+1)%n.length];return r}function Dn(e,t){let r=e.length,n=Array(r).fill(0);for(let i=1;i<r;i++)n[i]=n[i-1]+t[i-1];let o=n[r-1]+t[r-1],l=Array(o);for(let i=0;i<r;i++)t[i]&&(l[n[i]]=n[e[i]]);return l}function Ha(e){let t=e.length,r=Array(t);for(let n=0;n<t;n++)r[e[n]]=n;return r}function xd(e,t){for(;e&&t;)[e,t]=[t%e,e];return Math.abs(e+t)}function bd(e,t){return e*t/xd(e,t)}function Sd(e){let t=1,r=e.length,n=Array(r).fill(!1),o=-1;for(;o=n.indexOf(!1,o+1),o!==-1;){let l=0,i=o;for(;!n[i];)n[i]=!0,i=e[i],l++;t=bd(t,l)}return t}function Pd(e,t){for(let r=0;r<6;r++){if(e===Tt[Or[r][0]]&&t===Tt[Or[r][2]])return[r,0];if(e===Tt[Or[r][2]]&&t===Tt[Or[r][0]])return[r,1]}throw new Error("unknown corner piece")}function Nd(e,t){for(let r=0;r<12;r++)if(e===Tt[Ir[r][0]]&&t===Tt[Ir[r][1]]||t===Tt[Ir[r][0]]&&e===Tt[Ir[r][1]])return r;throw new Error("unknown edge piece")}function Za(e,t){return Pd(e[Or[t][0]],e[Or[t][2]])}function As(e,t){return Nd(e[Ir[t][0]],e[Ir[t][1]])}function Md(e,t,r,n){let o=Or[t],l=Or[r].map(i=>Tt[i]);n%2!==0&&(l=[l[2],l[3],l[0],l[1]]);for(let i=0;i<4;i++)e[o[i]]=l[i]}function Td(e,t,r){let n=Ir[t],o=Ir[r].map(l=>Tt[l]);for(let l=0;l<2;l++)e[n[l]]=o[l]}function Ep(e){let t=e.map(a=>Tt[a]),n=Array(6).fill().map((a,f)=>Za(t,f)).map(([a,f])=>a+6*f),o=n.concat(n.map(a=>(a+6)%12)),l=Array(12).fill().map((a,f)=>As(t,f)),i=Array(12).fill().map((a,f)=>An.indexOf(e[An[f]])),s=Array(12).fill().map((a,f)=>xo.indexOf(e[xo[f]]));return{cp:o,ep:l,ap:i,bp:s}}function Od(e){let t=Array(72),r=Fp(5,e);r.push(5);let n=Array(4).fill().map(s=>e(2));n.push(n.reduce((s,a)=>s^a)),n.push(0);for(let s=0;s<6;s++)Md(t,s,r[s],n[s]);let o=Fp(12,e);for(let s=0;s<12;s++)Td(t,s,o[s]);let l=Ka(12,e).map(s=>s/3|0),i=Ka(12,e).map(s=>4+(s/3|0));for(let s=0;s<12;s++)t[An[s]]=l[s],t[xo[s]]=i[s];return t}function kp(e,t=!1){if(t){e=e.map(m=>m.slice());let c=[0,1,2,3,4,5,6,7],L=[[0,3,5,6,4,7,1,2],[7,1,0,6,3,5,4,2],[7,4,2,1,3,0,6,5],[2,4,5,3,6,0,1,7]];L=L.concat(L.map(m=>Ha(m)));for(let m=0;m<e.length;m++)if(e[m][0]<4)e[m][0]=c[e[m][0]];else{let R=c[e[m][0]],F=e[m][1];e[m][0]=R,c=et(F===1?L[R^4]:L[R],c)}}let r=t?"U L F R D BR B BL".split(" "):Gd,n=["0","","'"];return e.map(([l,i])=>r[l]+n[i]).join(" ")}function Wr(e,t){for(let[r,n]of t)for(let o=0;o<n;o++)e=et(e,_p[r]);return e}function Cp(e){return e.map(([t,r])=>[t,(3-r)%3]).reverse()}function hs(e,t=!1){if(e.length===0)return[];let r=[],n;for(let[o,l]of e)n&&n[0]===o?(n[1]+=l,n[1]%=3,n[1]===0&&(r.pop(),n=r.length===0?void 0:r[r.length-1])):r.length>=2&&(n[0]^o)===4&&r[r.length-2][0]===o?(r[r.length-2][1]+=l,r[r.length-2][1]%=3,r[r.length-2][1]===0&&r.splice(r.length-2,1)):(n=[o,l],r.push(n));return t&&""+e!=""+r&&console.log(\`simplified \${e} to \${r}\`),r}function Id(e){return kp(Cp(Qd(Od(e),!0)),!0)}function bo(e,t,r,n,o,l){let i=Sp(e,t,r,n,o),s=l.length,[a,f]=wo(e,t,r,n,o),u=Array(s).fill().map(()=>new Uint32Array(i));for(let g=0;g<i;g++){let p=a[g],c=Array(e);for(let L=0;L<e;L++)c[L]=p>>2*L&3;for(let L=0;L<s;L++){let R=et(c,l[L]).reduce((F,A,U)=>F|A<<2*U,0);u[L][g]=f[R]}}return u}function zp(e){let t=e[0].length,r=e.length,n=Array(r).fill().map(()=>new Uint32Array(t));for(let o=0;o<t;o++)for(let l=0;l<r;l++)n[l][e[l][o]]=o;return n}function Un(e,t){let r=e[0].length,n=t[0].length,o=e.length,l=Array(o).fill().map(()=>new Uint32Array(r*n));for(let i=0;i<n;i++)for(let s=0;s<r;s++){let a=s+r*i;for(let f=0;f<o;f++)l[f][a]=e[f][s]+r*t[f][i]}return l}function Wd(e,t){let r=e.length,n=e[0].length,o=new Uint8Array(n);o[t]=1;let l=!1;for(;!l;){l=!0;for(let s=0;s<n;s++)if(!!o[s])for(let a=0;a<r;a++)o[e[a][s]]||(o[e[a][s]]=1,l=!1)}let i=new Int32Array(n).fill(-1);for(let s=0,a=0;s<n;s++)!o[s]||(i[s]=a,a++);return[e.map(s=>Dn(s,o)),i]}function Kd(e,t){let r=e.length,n=e[0].length,o=new Int32Array(n).fill(-1);t.forEach(a=>{o[a]=0});let l=[t];for(let a=0;a<l.length;a++){let f=l[a];for(let u=0;u<r;u++){let g=e[u][f[0]];if(o[g]!==-1)continue;let p=f.map(L=>e[u][L]),c=l.length;l.push(p);for(let L of p){if(o[L]!==-1)throw new Error("quotienting failed");o[L]=c}}}let i=l.length,s=Array(r).fill().map(()=>new Int32Array(i));for(let a=0;a<r;a++)for(let f=0;f<i;f++)s[a][f]=o[e[a][l[f][0]]];return[s,o]}function Pp(e,t,r){let n=e[0].length,o=e.length,l=new Int32Array(n).fill(-1);l[t]=r,l[r]=t;let i=!1;for(;!i;){i=!0;for(let s=0;s<n;s++){if(l[s]===-1)continue;let a=l[s];for(let f=0;f<o;f++){let u=f^1,g=e[f][s],p=e[u][e[u][a]];if(l[g]===-1)i=!1,l[g]=p,l[p]=g;else if(l[g]!==p)throw new Error("mirroring failed - is the initial map correct?")}}}return l}function Np(e,t){let r=e[0].length,n=e.length,o=new Int8Array(r).fill(-1);for(let s of t)o[s]=0;let l=0,i=!1;for(;!i;){i=!0;for(let s=0;s<r;s++)if(o[s]===l)for(let a=0;a<n;a++){let f=e[a][s];for(;f!==s;)o[f]===-1&&(i=!1,o[f]=l+1),f=e[a][f]}l++}return o}function Qd(e,t=!1){let r=Zd(e).next().value,n=Wr(e,r),o=(t?gh:uh)(n),l=hs(r.concat(o),!1);return Wr(e,l).join("")!==El.join("")&&(console.log("solving failed!"),console.log(e),console.log(r),console.log(n),console.log(o),console.log(Wr(e,l))),l}function qd(e){let[t,r]=wo(12,6,0,3,3),n=Array(12).fill().map((s,a)=>As(e,a)),o=n.indexOf(8)+12*n.indexOf(9)+12**2*n.indexOf(10)+12**3*n.indexOf(11),[l,i]=[An,xo].map(s=>{let a=s.map(f=>jd[e[f]]);return r[a.reduce((f,u,g)=>f|u<<2*g,0)]});return[o,l,i]}function Mp(){if(K.phase1_edge)return K.phase1_edge;let e=zp(yn.map(n=>n.ep)),t=Un(e,e),r=Un(t,t);return K.phase1_edge=r}function Vd(){return gr.phase1_edge?gr.phase1_edge:gr.phase1_edge=Np(Mp(),[8+12*9+12**2*10+12**3*11])}function Hd(){return K.phase1_centreA?K.phase1_centreA:K.phase1_centreA=bo(12,6,0,3,3,yn.map(e=>e.ap))}function Tp(){return K.phase1_centreB?K.phase1_centreB:K.phase1_centreB=bo(12,6,0,3,3,yn.map(e=>e.bp))}function yp(){if(gr.phase1_centre)return gr.phase1_centre;let[e,t]=wo(12,6,0,3,3),r=e.filter(n=>{let o=n>>12&3,l=n>>18&3;return o===2&&l===3}).map(n=>t[n]);return gr.phase1_centre=Np(Tp(),r)}function*Zd(e){let t=[Mp(),Hd(),Tp()],r=[Vd(),yp(),yp()];yield*Jd(qd(e),t,r,15)}function*Jd(e,t,r,n){let o=e.length,l=0;for(let i=0;i<o;i++)l=Math.max(l,r[i][e[i]]);for(;l<=n;)yield*Gp(e,t,r,l,-1),l++}function*Gp(e,t,r,n,o){let l=3,i=8,s=Math.max(r[0][e[0]],r[1][e[1]],r[2][e[2]]);if(!(s>n)){if(n===0){yield[];return}if(!(s===0&&n===1))for(let a=0;a<i;a++){if(a===o||a===o-4)continue;let f=[];f[0]=t[0][a][e[0]],f[1]=t[1][a][e[1]],f[2]=t[2][a][e[2]];let u=1;for(;e.some((g,p)=>e[p]!=f[p]);){let g=Gp(f,t,r,n-1,a);for(;;){let{value:p,done:c}=g.next();if(c)break;yield[[a,u]].concat(p)}f[0]=t[0][a][f[0]],f[1]=t[1][a][f[1]],f[2]=t[2][a][f[2]],u++}}}}function Ja(e){let[t,r]=wo(10,5,3,2,0),n=Array(8).fill().map((p,c)=>As(e,c)),o=n.indexOf(5)+8*n.indexOf(6)+8**2*n.indexOf(7),l=Array(5).fill().map((p,c)=>Za(e,c)),i=Ha(l.map(([p,c])=>p+5*c).concat(l.map(([p,c])=>p+5*(c^1)))),s=i.slice(0,5).map(p=>p%5),a=i.slice(0,5).map(p=>p/5|0),f=Fn(s)*8+(a[0]^a[2])+2*(a[0]^a[3])+4*a[4],[u,g]=[An,xo].map(p=>{let c=et(p,Xd).map(L=>Yd[e[L]]);return r[c.reduce((L,m,R)=>L|m<<2*R,0)]});return Wp(),jp(),[u,g,Qp[f]+40*Ip[o]]}function*Fs(e){yield*nh(Ja(e),30)}function Op(){if(K.phase2_centre)return K.phase2_centre;let e=bo(10,5,3,2,0,yn.slice(0,4).map(r=>Dn(r.ap,Up))),t=bo(10,5,3,2,0,yn.slice(0,4).map(r=>Dn(r.bp,Up)));return K.phase2_centre=[e,t]}function Wp(){if(K.phase2_edge)return K.phase2_edge;let e=zp(yn.slice(0,4).map(n=>n.ep.slice(0,8))),t=Un(e,Un(e,e)),r;return[r,Ip]=Wd(t,501),K.phase2_edge=r}function Kp(){if(K.phase2_corner)return K.phase2_corner;let t=vl(5)/2*8,r=[!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1],n=Array(4).fill().map(()=>new Uint32Array(t)),o=yn.slice(0,4).map(l=>Ha(Dn(l.cp,r)));for(let l=0;l<t;l++){let i=qa(l>>3,5),s=[0,0,l&1,l>>1&1,l>>2&1];s[1]=s[2]^s[3]^s[4];let a=Array(10);for(let f=0;f<5;f++)a[f]=i[f]+5*s[f],a[f+5]=i[f]+5*(s[f]^1);for(let f=0;f<4;f++){let u=et(o[f],a),g=u.slice(0,5).map(L=>L%5),p=u.slice(0,5).map(L=>L/5|0),c=(p[0]^p[2])+2*(p[0]^p[3])+4*p[4];n[f][l]=Fn(g)*8+c}}return K.phase2_corner=n}function jp(){return K.phase2_corner_compact||([K.phase2_corner_compact,Qp]=Kd(Kp(),th())),K.phase2_corner_compact}function Ya(){if(K.phase2_ce)return K.phase2_ce;let e=jp(),t=Wp();return K.phase2_ce=Un(e,t)}function $d(){if(Oa)return Oa;let e=Ja(El)[2];return Oa=Pp(Ya(),e,e)}function eh(){let[e,t]=wo(10,5,3,2,0);return e.filter(r=>(r>>10&63)===41).map(r=>t[r])}function th(){let e=Kp(),t=e[0].length,r=Array(t).fill(!1);r[0]=!0;let n=!1;for(;!n;){n=!0;for(let o=0;o<t;o++)r[o]&&(r[e[0][o]]||(n=!1,r[e[0][o]]=!0),r[e[1][o]]||(n=!1,r[e[1][o]]=!0))}return r.map((o,l)=>l).filter(o=>r[o])}function rh(){if(gr.phase2_ace)return gr.phase2_ace;let[e,t]=Op(),r=Ya(),n=2520,o=40*336,l=n*o,i=Ja(El)[2],s=9,a=new Int8Array(l).fill(s);for(let f of eh())a[f+n*i]=0;for(let f=0;f<s-1;f++)for(let u=a.indexOf(f);u!==-1;u=a.indexOf(f,u+1)){let g=u%n,p=u/n|0;for(let c=0;c<4;c++){let L=e[c][g],m=r[c][p],R=L+n*m;a[R]===s&&(a[R]=f+1),L=e[c][L],m=r[c][m],R=L+n*m,a[R]===s&&(a[R]=f+1)}}return gr.phase2_ace=a}function*nh(e,t){let[r,n]=Op(),o=Ya(),l=rh(),i=$d(),[s,a,f]=e,u=i[f],g=Math.max(l[s+2520*f],l[a+2520*u]);for(;g<=t;)yield*qp(s,a,f,r,n,o,l,i,g,-1),g++}function*qp(e,t,r,n,o,l,i,s,a,f){let u=Math.max(i[e+2520*r],i[t+2520*s[r]]);if(!(u>a)){if(a===0){yield[];return}else if(u===0)return;for(let g=0;g<4;g++){if(g===f)continue;let p=e,c=t,L=r;for(let m=1;m<=2;m++){p=n[g][p],c=o[g][c],L=l[g][L];let R=qp(p,c,L,n,o,l,i,s,a-1,g);for(;;){let{value:F,done:A}=R.next();if(A)break;yield[[g,m]].concat(F)}}}}}function ys(e){let[t,r]=wo(7,3,2,0,2),n=Array(5).fill().map((f,u)=>As(e,u)),o=Fn(n),l=Array(4).fill().map((f,u)=>Za(e,u)),i=Fn(l.map(f=>f[0]))*2+l.find(f=>f[0]===0)[1],[s,a]=[An,xo].map(f=>{let u=et(f,oh).map(g=>e[g]%4);return r[u.reduce((g,p,c)=>g|p<<2*c,0)]});return[s+210*a,i+24*o]}function ih(){if(K.phase3_2gen_edge)return K.phase3_2gen_edge;let e=vl(5)/2,t=Array(So).fill().map(()=>new Uint32Array(e)),r=Ds.map(n=>n.ep.slice(0,5));for(let n=0;n<e;n++){let o=qa(n,5);for(let l=0;l<So;l++)t[l][n]=Fn(et(o,r[l]))}return K.phase3_2gen_edge=t}function sh(){if(K.phase3_2gen_corner)return K.phase3_2gen_corner;let t=vl(4)/2*2,r=[!0,!0,!0,!0,!1,!1,!0,!0,!0,!0,!1,!1],n=Array(So).fill().map(()=>new Uint32Array(t)),o=Ds.map(l=>Dn(l.cp,r).slice(0,4));for(let l=0;l<t;l+=2){let i=qa(l>>1,4),s=i.concat(i.map(a=>a+4));for(let a=0;a<So;a++){let f=et(s,o[a]),u=f.map(p=>p%4),g=f.find(p=>p%4===0)>>2;n[a][l]=Fn(u)*2+g,n[a][l+1]=Fn(u)*2+(g^1)}}return K.phase3_2gen_corner=n}function Us(){return K.phase3_2gen_corneredge?K.phase3_2gen_corneredge:K.phase3_2gen_corneredge=Un(sh(),ih())}function Xa(){if(K.phase3_2gen_centre)return K.phase3_2gen_centre;let e=bo(7,3,2,0,2,Ds.map(r=>Dn(r.ap,xp))),t=bo(7,3,2,0,2,Ds.map(r=>Dn(r.bp,xp)));return K.phase3_2gen_centreA=e,K.phase3_2gen_centreB=t,K.phase3_2gen_centre=Un(e,t)}function Hp(){if(Ia)return Ia;let e=Xa(),t=K.phase3_2gen_centreA,r=Us(),n=t[0].length,o=r[0].length,l=n*o,i=25,s=pr.map(p=>p.length),a=new Int8Array(l).fill(i),f=ys(El);a[f[0]%n+n*f[1]]=0;let u=0,g=!1;for(;!g&&u<i-1;){g=!0;let p=Array(So).fill().map((F,A)=>A).filter(F=>s[F]+u<i);p.sort((F,A)=>s[F]-s[A]);let c=et(s,p),L=et(t,p),m=et(r,p),R=p.length;for(let F=a.indexOf(u);F!==-1;F=a.indexOf(u,F+1)){let A=F%n,U=F/n|0;for(let b=0;b<R;b++){let S=c[b],N=L[b][A],J=m[b][U],z=N+n*J;a[z]>u+S&&(g=!1,a[z]=u+S)}}u++}return Ia=a}function Zp(){if(Wa)return Wa;let e=Us().slice(0,2),t=ys(El);return Wa=Pp(e,t[1],t[1])}function Qa(e,t=ys(e)){let[r,n]=t,o=r%210,l=Math.floor(r/210),i=Xa(),s=K.phase3_2gen_centreA,a=K.phase3_2gen_centreB,f=Us(),u=Hp(),g=Zp(),p=0;for(;;){let c=$a(o,l,n,s,a,f,u,g,p);for(let L of c)return L.map(m=>pr[m]).flat();p++}}function bp(e,t=ys(e)){let[r,n]=t,o=r%210,l=Math.floor(r/210),i=Xa(),s=K.phase3_2gen_centreA,a=K.phase3_2gen_centreB,f=Us(),u=Hp(),g=Zp(),p=Qa(e).length,c=1/0,L;for(let m=p;m<=p+0;m++){let R=$a(o,l,n,s,a,f,u,g,m);for(let F of R){let A=F.map(S=>pr[S]).flat(),U=hs(A),b=ja(U);b<c&&(c=b,L=U)}}return L}function ah(e){return(e-1)*(e-2)/2}function ja(e){let t=kp(e,!0).replace(/'/g,"").split(" ");return e.length+fh(t).map(ah).reduce((r,n)=>r+n,0)}function fh(e){if(e.length<3)return[];let t=e.length,r=[];for(let l=0;l<t-2;l++)r[l]=e[l]===e[l+2];r.push(!1);let n=-1,o=[];for(;n<t-2&&(n=r.indexOf(!0,n+1),n!==-1);){let l=r.indexOf(!1,n+1);o.push(l-n),n=l}return o}function*$a(e,t,r,n,o,l,i,s,a,f=-1){let u=i[e+210*r],g=i[t+210*s[r]],p=Math.max(u,g);if(!(p>a)){if(a===0){yield[];return}if(p!==0)for(let c=0;c<So;c++){if(c===f&&lh[c]<=3)continue;let L=n[c][e],m=o[c][t],R=l[c][r],F=a-pr[c].length;if(F<0)continue;let A=$a(L,m,R,n,o,l,i,s,F,c);for(;;){let{value:U,done:b}=A.next();if(b)break;yield[c].concat(U)}}}}function uh(e,t=200,r=24){let n=[],o=Fs(e),l=et(e,Vt).map(a=>a^1),i=Fs(l),s=Array(1e3);for(let a=0;a<t;a++){{let{value:f,done:u}=o.next();if(!u){let g=Wr(e,f),p=f.concat(Qa(g));if(p.length<=r)return p;p.length<s.length&&(s=p)}}{let{value:f,done:u}=i.next();if(!u){let g=Wr(l,f),p=f.concat(Qa(g)).map(([c,L])=>[c^2,L]);if(p.length<=r)return p;p.length<s.length&&(s=p)}}}return s}function gh(e,t=20,r=30){let n=[],o=Fs(e),l=et(e,Vt).map(f=>f^1),i=Fs(l),s,a=1/0;for(let f=0;f<t;f++){{let{value:u,done:g}=o.next();if(!g){let p=Wr(e,u),c=hs(u.concat(bp(p))),L=ja(c);if(L<=r)return c;L<a&&(s=c,a=L)}}{let{value:u,done:g}=i.next();if(!g){let p=Wr(l,u),c=hs(u.concat(bp(p)));c=c.map(([m,R])=>[m^2,R]);let L=ja(c);if(L<=r)return c;L<a&&(s=c,a=L)}}}return s}async function ch(){return Id(await ph)}var sU,aU,Ta,Ga,El,wl,wd,Vt,fU,Rs,wp,vd,Ed,_d,ds,kd,vp,Cd,zd,Tt,Or,Ir,An,xo,_p,Gd,yn,K,gr,jd,Yd,Xd,Up,Ip,Qp,Oa,oh,xp,pr,So,Vp,Ds,lh,Ia,Wa,ph,Jp=y(()=>{"use strict";yt();[sU,aU]=(()=>{let e=new Int8Array(2048),t=new Int8Array(256*8);for(let o=0;o<256;o++)for(let l=0,i=0;l<8;l++)(o>>>l&1)!==0&&(e[l<<8|o]=i,t[i<<8|o]=l,i++);function r(o){let l=255,i=2520,s=0;for(let a=0;a<6;a++){let f=o[a];s+=e[l|f<<8]*i,l&=~(1<<f),i/=7-a}return s}function n(o,l){let i=255,s=2520,a=0;for(let f=0;f<6;f++){let u=o/s|0;o-=u*s,a^=u&1;let g=t[i|u<<8];l[f]=g,i&=~(1<<g),s/=7-f}return l[6]=t[i|a<<8],l[7]=t[i|(a^1)<<8],l}return[r,n]})();Ta={};Ga={};El=Array(72).fill().map((e,t)=>t/9|0),wl=Va([[0,4,8],[1,6,3],[2,5,7],[9,22,35],[45,67,44],[47,68,43],[46,69,39],[50,70,38],[49,71,36]],72),wd=et(wl,wl),Vt=Array(72).fill().map((e,t)=>(t/18|0)*18+(t+9)%18),fU=Array(72).fill().map((e,t)=>(t/36|0)*36+(t+18)%36),Rs=Array(72).fill().map((e,t)=>(t+36)%72),wp=vo(Rs,wd,Rs),vd=vo(Vt,wl,Vt),Ed=vo(Vt,wp,Vt),_d=Va([[10,24,30],[11,23,34],[12,19,33],[42,48,64],[41,52,65],[37,51,66]],72),ds=et(wl,_d),kd=et(ds,ds),vp=vo(Rs,kd,Rs),Cd=vo(Vt,ds,Vt),zd=vo(Vt,vp,Vt),Tt=Array(72).fill().map((e,t)=>t/9|0),Or=[[0,45,9,36],[4,67,22,49],[8,44,35,71],[13,58,31,40],[17,53,26,62],[18,63,27,54]],Ir=[[1,46],[3,39],[6,69],[10,37],[33,42],[12,48],[15,60],[24,51],[19,64],[28,55],[30,66],[21,57]],An=Array(12).fill().map((e,t)=>(t/3|0)*9+[2,5,7][t%3]),xo=An.map(e=>e+36);_p=[wl,wp,vd,Ed,ds,vp,Cd,zd],Gd=["U","L","F","R","u","l","f","r"],yn=_p.map(Ep);K={},gr={},jd=[0,0,2,3,0,0,2,3];Yd=[0,1,2,0,0,1,2,0],Xd=[0,1,2,3,4,5,7,8,10,11],Up=[!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!0];oh=[0,1,2,3,4,10,11],xp=[!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!0,!0],pr=[[[0,1]],[[1,1]],[[2,1],[0,1],[3,1],[0,2],[3,2],[2,2]],[[3,2],[1,2],[2,2],[1,1],[2,1],[3,1]],[[6,1],[0,1],[3,1],[0,2],[3,2],[6,2]],[[7,2],[1,2],[2,2],[1,1],[2,1],[7,1]],[[2,1],[0,1],[2,2],[0,1],[2,1],[0,1],[2,2]],[[3,2],[1,1],[3,1],[1,1],[3,2],[1,1],[3,1]],[[2,1],[3,1],[2,2],[1,2],[0,2],[2,1],[3,1],[2,2]],[[3,2],[2,2],[3,1],[0,1],[1,1],[3,2],[2,2],[3,1]],[[6,1],[0,1],[6,2],[0,2],[1,2],[6,1],[0,1],[6,2]],[[7,2],[1,2],[7,1],[1,1],[0,1],[7,2],[1,2],[7,1]],[[2,1],[3,2],[2,2],[3,1],[0,1],[2,2],[1,1],[2,1]],[[3,2],[2,1],[3,1],[2,2],[1,2],[3,1],[0,2],[3,2]],[[6,1],[0,2],[6,2],[7,1],[6,1],[1,2],[7,1],[6,1]],[[7,2],[1,1],[7,1],[6,2],[7,2],[0,1],[6,2],[7,2]],[[2,2],[1,2],[2,2],[3,2],[2,2],[3,2],[0,2],[3,2]],[[6,2],[7,2],[1,2],[0,2],[1,2],[0,2],[6,2],[7,2]]];pr=pr.concat(pr.map(e=>Cp(e)));So=pr.length,Vp=pr.map(e=>Wr(Va([],72),e)),Ds=Vp.map(Ep),lh=Vp.map(Sd);ph=ve()});var Yp={};ht(Yp,{randomFTOScrambleString:()=>ch});var Xp=y(()=>{"use strict";Jp()});async function ec(){return mh??(mh=Lh())}async function Lh(){return jt(await Pe.fto.kpuzzle(),\`SubgroupSizes 24 12 11 12 12 11 10 9 11 8 10 9 7 8 10 10 6 9 8 5 7 6 5 4 4 8 7 3 6 6 360

Alg T
Alg B
Alg B T
Alg B'
Alg B' T
Alg U
Alg U T
Alg U'
Alg U' T
Alg B BL
Alg B BL T
Alg B BL'
Alg B BL' T
Alg B' BR
Alg B' BR T
Alg B' BR'
Alg B' BR' T
Alg U R'
Alg U R' T
Alg U' L
Alg U' L T
Alg B BL' D
Alg B BL' D T

Alg R
Alg R'
Alg R D
Alg R D'
Alg R BR
Alg R BR'
Alg R' F
Alg R' L
Alg R' L'
Alg B L B'
Alg U L' U'

Alg B U B'
Alg B U' B'
Alg B R B'
Alg B R' B'
Alg B' U' B
Alg B' U B L
Alg B' U B L'
Alg B' U' B BL'
Alg B U' B' BR
Alg B' R' B F

Alg BR
Alg BR'
Alg BR BL
Alg BR BL'
Alg BR' F
Alg BR' F'
Alg BR' D
Alg B BR B'
Alg U F U'
Alg BR BL L
Alg BR' D BR'

Alg B' BL B
Alg B' BL' B
Alg BR D' BR'
Alg B' BL B D'
Alg B' BL B BL
Alg B' BL B BL'
Alg B' BL L B
Alg B' BL' B F'
Alg B' BL' B L'
Alg B' BL' B BL'
Alg B' BL' L BL' B

Alg R' BR R
Alg R' BR' R
Alg BR BL' D BR
Alg R' BR D R
Alg R' BR D' R
Alg R' BR R BL
Alg B' D' BL D B
Alg BR B D' B' BR'
Alg BR BL' D BR L'
Alg BR BL' D BL BR

Alg U BR U'
Alg U BR' U'
Alg U' R U
Alg U' R' U
Alg U BR B' U'
Alg U BR' U' D
Alg U BR' U' D'
Alg U' R F' U
Alg U' R' U L'

Alg U B U'
Alg U B' U'
Alg U B U' L
Alg U B U' L'
Alg U B' U' BL'
Alg U B U' L F
Alg U B U' L F'
Alg U B' U' BL' D'

Alg B BL' L BL B'
Alg B BL' L' BL B'
Alg U B' D B U'
Alg U B' D' B U'
Alg U R D R' U'
Alg U R D' R' U'
Alg R' F L F' R
Alg R' F L' F' R
Alg B L' B F' D B
Alg U B' D' B U' D

Alg F
Alg F'
Alg F D
Alg F D'
Alg F' L
Alg F' L'
Alg F D' BL

Alg F BL F'
Alg F BL' F'
Alg BR' BL BR
Alg BR' BL' BR
Alg F BR F' BR'
Alg F BL F' BL'
Alg F BL' F' L
Alg F BL' L' F'
Alg F BR' BL BR F'

Alg F' BL F
Alg F' BL' F
Alg U BL U'
Alg U BL' U'
Alg F U' F' U
Alg F' BL F D'
Alg F' BL F BL'
Alg F' BL D F

Alg L
Alg L'
Alg L BL
Alg L BL'
Alg F' D F
Alg L BL D

Alg L' BL L
Alg L' BL' L
Alg L' BL D L
Alg L' BL D' L
Alg L' BL L BL'
Alg L' BL D' L BL
Alg L' BL D' L BL'

Alg L D L'
Alg L D' L'
Alg R' D R
Alg R' D' R
Alg L D L' D'
Alg L R L' R'
Alg L' B' L B
Alg R' D R BL
Alg L BL' L' BL L'

Alg U L' D L U'
Alg U B D B' U'
Alg U L' D' L U'
Alg U B D' B' U'
Alg R' D' BL' D R
Alg U B D' B' U' D
Alg U B' L B L' U'
Alg U B D B' U' BL'
Alg U B D' B' L' D' L U'

Alg F L F'
Alg F L' F'
Alg F L F' D
Alg F L F' D'
Alg F L' F' BL'

Alg L BL' D BL L'
Alg L BL' D' BL L'
Alg F D L D' L' F'
Alg F L D L' D' F'
Alg F L' B' L B F'
Alg F' D' R' D R F
Alg F D L D' L' F' BL'
Alg F' R' B' R' B R' F

Alg B D B'
Alg B D' B'
Alg L' D L
Alg L' D' L
Alg B D B' D'
Alg B' L B L'
Alg B D B' D' BL

Alg D
Alg D'
Alg D BL
Alg D BL'

Alg D BL' D BL D'
Alg D BL' D' BL D'
Alg B D R D' R' B'
Alg B R D R' D' B'
Alg D BL' D BL D' BL
Alg D BL' D BL D' BL'

Alg D BL D BL' D'
Alg D BL D' BL' D'
Alg B' BL' B BR D' BR'
Alg D BL D BL' D' BL
Alg D BL D BL' D' BL'

Alg D' BL D
Alg D' BL' D
Alg D' BL D BL
Alg D' BL D BL'

Alg B D' B' BL B D B'
Alg B D' B' BL' B D B'
Alg D' BL' D BL D' BL D

Alg B R' B' BL B R B'
Alg B R' B' BL' B R B'
Alg L R L' BL' L R' L'

Alg F BL' B' BL F' BL' B
Alg F' R' F BL F' R F
Alg F' R' F BL' F' R F
Alg BR R BR' BL' BR R' BR'
Alg F L' BL U BL' U' L F'
Alg F' U' F D F' U F D'
Alg F BL F' D F BL' F' BL D'

Alg F D F U' F' U D' F'
Alg F D F' BL F BL' D' F'
Alg F U D BL' U' BL D' F'
Alg F U' D F U F' D' F'
Alg F' BR L F BR' F' L' F
Alg U R BL' F BL F' R' U'

Alg BL
Alg BL'

Alg F U BL U' BL' F'
Alg F BL U BL' U' F'
Alg U BL BR BL' BR' U'
Alg BR F BL F' BL' BR'
Alg F U' F' U BL' U BL U'

Alg F U' F' D F U F' D'
Alg B' U' F U B U' F' U
Alg D F U' F' D' F U F'
Alg BR' U BR D' BR' U' BR D
Alg D' BR BL' F BL' F' BL BR' BL D

Alg D BL D F' U' B L' BL' L R' BR' R L' BL L B' U F D
Alg B D BR F' R' BR' R B' F D' BL D B BR' D' B'
Alg L B' BR' L F BR L' B BR' L U F U' BR' F L BL BR'
Alg L BL' D' BR' B R' U' R BR B' D BL' L'
Alg B BR B' D' B D B F' R' B' R BR' B' BR F BR' BL
Alg L' BL D L' D' L' D L' U' R' F' R U D'
Alg U' L BL L U' D R' BL B' BL F' BL' B R BL' U D' L U
Alg L BL BR' L U' D R' F' R BL' U BL D' BR L
Alg D L' R F' R' L BL' BR BL' B' BL B BR' F BL' F' D'
Alg B BL B BR' L R' U' R BR L' B
Alg L B' R' BR B F BL D' BL' D BL' B' F' BR' R U B L'
Alg D' L' BL F' D' BL' D B F' R' BR R B' F' BL' L D
Alg B D' R D' R' BL BR' B BR' B' BL' D' BR B R' B' R B' BL' D'
Alg U' L R' F U L' BL' L B BL' B' BL L U' L' F' R L' U
Alg F' D BL' BR' BL' BR B' U' F L F' U B D F L U BL' U' L'
Alg L' U BR' U D R' BL F R BL' U D' BR' L' BL' BR' L'
Alg U' L' U' D R' BL B' BL F BL' B R BL' U D' L' BL' L' U
Alg D F BL L' BL' B L' B' L' B L' B' L' BL L BL' F' D'
Alg F' BR' B BL' BR BL B' F L' F' L B BR' B' BR L' F L BL'
Alg F' L F' L U' D R' F R U D' L' BL' F L' F
Alg F U' F' BR F' R' BR' U F' L' BL F' D' BL'
Alg B BR' U R BR' R' BR U' B' BR
Alg F' BR' B BR' R BR' BL' BR R' BR BL B' BR F
Alg L' U BL B' U' BL U BL' B BR BL' BR' U' L
Alg BR BL' BR' BL L' BL BR BL' BR' L
Alg U BR' U' BR L' BL BR BL' BR' L
Alg U' L F BL' F' BL F' BR F BR' L' U
Alg F L F' BL D F' D' F BL' L'
Alg U BR' U BR L BL BR BL' BR' L' U
Alg F BR R BL' F' BL' F R' BL BR' BL F'
Alg D BL D B U BR' D BR' L' U' BR' U BR L D' BR U' B' D
Alg U BL' U' BL U BL D L' D BR D' L D BR U BR U D
Alg B' U F U' B' U F' BR' U' B L B' U BR U' B L' B BL
Alg B U' B BL U' BL L U' D R' F' R U' D' L' BL' U B
Alg B L R F D' BR' D F' R' BL' U' L U L' U BL L' B'
Alg D BL D F' BR' F BL' D R' BR' R F D' BL F' BR D
Alg L' D F' R' U BR L BL B' BL B BL' BR' L' U' R D' L
Alg F BL' U D L' U' BR R F' R' BR' U L D BL U' D BL F'
Alg BR' BL' U' L' BL D F' L' F' L F L U L' D' BR L BL
Alg B' L' BL U D R' F' R U D' L' BL L U BL' L B
Alg B BL' L U B' L BL' L B' U' B' L' D L' U' B L' B' D'
Alg B' R' L U L' R BR BL' B BR' B' BL B' BL' B'
Alg F L R BL B' U' B R' BL' L' BL F' BL BR' BL L BL' BR L'
Alg B' U' BL L U D R' F R U D' L' BL' U BL' B' U B'
Alg U BR BL' BR' D' B D' F' D B' D' F BL' U' BL' F' BL' F D'
Alg D' BL' D L BL L' D' BL D F' D F D' BL' D' BL D
Alg B' BL' B' BL L' B' BL' F' D F L F' D' F BL' L BL' B L B
Alg F BL' U D' BL' D' L' U' BR R F R' BR' U L U' D' BL F'
Alg U' D' B D F' D' BR' D' BR D BR B' BL' D F BL U BL'
Alg B BL BR D' BR L' R F R' BR' L D BL' BR' BL' B'
Alg L' F L' U BR' U' BR L F' BR' L U BR U'
Alg F' BL' D' BR' BL B' U' BL U B BL' BR D F
Alg F' D' BR' U R' U BL U' R U' BL' BR D F
Alg F U' BR F' U' BL' B U F BR' R F' U BL L
Alg B' BL' U' BL U B BL' B BL BR BL' BR' B' BL
Alg D' F' U BL U' L F U' F' U L' BL' F D
Alg F' BL' D' BR' BL BR' F' BR U' B' BR' U R' BR' F'
Alg B' U' B BL' B U' B BL' L U' L BL' L B
Alg F' D' F U' F U F' BL F' BL' D F
Alg F' D BR F' R F R' BR' F D'
Alg D BL D B BR' D L' BL' L' BL' BR' BL L BL L D' BR B' D
Alg B L BL L' BL' L' D F' R' BR R D' F L' BL' L' B'
Alg B BL' F' BL BR D' BR' F D' B' D L F' BL' F L D L D' BL
Alg B D' BR' D' BR' F D' BL' D' BL D BL F' D BR D' B'
Alg B D' B U B' D B F' BR' F L' F BR F' L U' B BL
Alg L BL' B' U BL L' BL L U L' BL' L BL' U' B BL' L'
Alg U D F' D BR BL' BR' BL B D' F D B' D BR BL BR' U'
Alg F' D BR L' U' R F' R' U BR' L D BR' BL BR D F
Alg BR' L BL L' BL' BR BL' F BL' L R BL B' U B R' BL' L' F'
Alg D BL BR D B F' R' U' BR' U R B' F D' BR' D'
Alg D' B BR' D L' BL' L' BL' BR BL L BL L D' BR B' D' BL' D'
Alg B U' R B' BL' B R' U' B BL' B' U' BL B' U' L U L'
Alg B D' B' D' BR' BL BR D' B' L B BR' U B U' BL' BR BL L' BL'
Alg B D BR' D' F BL' D' BL' D BL D F' BR D BR D B'
Alg D' B D F' D' BR' D' BR D BR BL BR' BL' BR B' BL' D F
Alg L BL B' U BL L' BL L U' L' BL' L BL' U' B BL L'
Alg B' U B' D' B U' B' D BL' U BL' U' BL' B' U BL' U'
Alg D' BR' B' L' U L' B' U B L U' L B BR D BL
Alg L' D L' F U' F' L D' L' F U BR F' L F BR' F' L BL'
Alg D BR D B F' R' U' BR U R B' F D' BR' BL' D'
Alg BR BL D F BR' BL BR BL' BR F' BR' D' BL' BR'
Alg BR' U' L' BL F' BL' F L BL' U BL BR
Alg D' BR' B' U BR U' BL U' BL' U BR' B BR D
Alg F U BR' U R U' BR B U' F' BL U' L' U BL' B'
Alg B U' L F BR F' L F' BR' F L U B'
Alg BR BL F BL' L F' BR' BL' F BL L' BL' F' BL
Alg U' BR' L BL' BR L U' BR' U L' BL L' U' BR U'
Alg L' F L' U BR' U' BR L F' L BL' BR BL BR'
Alg F' D' BR' BL U R' U BL' U' R U' BR D F
Alg F' BR' B F' U F BR U' BR' B' F BL BR BL'
Alg L B' U' R' BR B F BL D' BL D BL' B' F' BR' R B L'
Alg B F BL B L F BR' R' BL U' R BL' BR' F' L' F' BR' B
Alg U BR F' D F BR' U' L' BL L' BL' L U L B' BL L' B U'
Alg F' L B F BL B R U' R' B' BL' B' F' L BL L F
Alg D BL D B BR' D BR' D' BR D BR BL BR' BL' D' B' D
Alg D' BR' BL B BR B' BL' D BL D' B' BL B BR' BL' BR D
Alg D F' U BR U' L U' BR' U L' D B D' F D B' D BL
Alg L B BL' B L F R U' R' F' L' B' BL B' L' BL'
Alg B D' B U B' D F' BR F L' F BR' F' L B U' B BL
Alg B' BL L B' L' B' L B' BR' R' U' R BR L'
Alg D' F' U' B L' BL' L R' BR R L' BL L B' U F D' BL' D'
Alg B' F' BL' B' F U D' R BR R' BL U' BL' D B'
Alg F' BL' D BL F BL' D' B' U' B D F' D' B' F U B
Alg F' L' BL' L' B F BL B R U R' B' BL' B' F' L' F
Alg L' BL U' D F D' BL' D BL F' BL' D' BL D F' U D' BL L
Alg B' BR L R' U R BR F L' B' BL' B L F' BR L' B
Alg B' L B' BR' B L' B' D F' U F D' F U' F' BR B' BL'
Alg B' BR D' BL' BR' BL B L' R' L' R BR L D L BL BR' B BL
Alg L' D F' L F L' F D' L' BL' L' D BL' BR' BL' BR BL' D'
Alg B' F BR F BR L R' BL U R BL' BR L' B' BL' B' F
Alg F L' F' BR' B BR' F' BR B' BR' F' L F' BR'
Alg BR' B' BR BL' D' BR D BR' BL B
Alg L' F L' U BR' U' L U' BR U F' L
Alg F U' BR' R U' BR BL BR' U' BL' U' R' F' BR U
Alg B' BR' R' U' BL D' BL U BL' D R BL' BR B
Alg D BR' U' L BL' F' BL F L' BL U BL' BR D'
Alg F' BL' D' F BR' BL BR BL' BR F' BR' D BL F
Alg F' BR' BL' BR D' F' BR F BR' D BL F
Alg F' BR R' BR BL' BR' R BR' BL F
Alg B BR F' BR' B' F BL F BL' F'
Alg B D' B U B' D BL' F R' F BL F' R B F' U' B BL
Alg L BL' B' U L U L BL L B' BL B' U' BL' U' B' L' BL
Alg L' BL' U' D F D' BL' D BL F BL' D' BL D F' U D' BL' L
Alg F' L F' BL' D' BR' B R' U' R BR B' D BL' F L' F
Alg U D' BR' D BR' U' L U BR L' D' BR D L U' L' BL
Alg B' BR' B' BL B L F' BR' R' U' R BR F BR L' B
Alg U' F' D BR' F' BR D L D L' U D' B D' B' F D' BL F
Alg B F BL B F' L F BR' R' BL U' R BL' BR' F' BR' L' B
Alg F' D' BL B BR' BL BR BL' BR' D' BR' D BR D F D' B' D
Alg B' BR' B' BL B L F BR' R' U' R BR F' BR L' B
Alg L' F BR L' R' BR BL' BR' R BR' BL B' L F' L' B L' BL'
Alg B' U' BL' U D' BL' D F L' R U R' F' L U' BL U B
Alg D' B D BL BR BL' BR' D' BR' D BR D' BR B' D' BL' D'
Alg B' BR' L F' BR' R' U R BR F L' B' BL' B BR B
Alg L U L' D' BR' D L U' L' U D' BR D BR BL BR' BL' U' BL'
Alg F' L F' BL D' B BR' R' U R B' BR D BL F L' F
Alg B' L B' BR' B L' F' R F' BL F R' F BL' B' BR B' BL'
Alg F' L BL' BR' R' BL U R BR B L' B L B L' F BL' B
Alg L' F D' BR U' BR' D BR' U BR L' B' L F' L' B L' BL'
Alg B' BR' L F BR' R' U R BR F' L' B' BL' B BR B
Alg L F' D' F BR' BL BR BL' BR F' BR' D F L'
Alg F' BL' D F BL' F' BL D' BR' BL BR F
Alg B' BR' R' BL D' BL U' BL' D BL' U R BR B
Alg B' L BL' BR BL L' B' F BL F' BL' B BR' B
Alg F U' BR' R BR F' U BL L U BL' B U'
Alg B' BR B' BL F BL' B F' L BL' BR' BL L' B
Alg U' L BL' U' R U' BL' U R' U BL' L' U
Alg F U' BR' R' F' BR' F BL BR R BL' F' BR U
Alg B U' L' F' BR F L' F BR' F' L' U B'
Alg F' BR' B' F BR' BL' BR F BL B F' BL BR BL'
Alg B BL' U' L U BL' B' BL' B' L' BL U B' U' BL L BL L
Alg B R' U' B U R B' BR F D' B' D BL F' BL' BR' BL
Alg U BL U' B BL U BL U' BL D' B U B' D B U' B
Alg B BL B BL' B BR B' BL BR' R' L U' L' R B
Alg U' L BL' B BL B' L' F U B' R U R' U F' U B BL
Alg F' BL' D' BR' L' B' L B BL BR BL' B' L' B L D BL F BL
Alg L B' L' F U B' R BR B BR' R' BR BL' BR' BL B U' F' BL
Alg D' F BL B BR' B BR B' BL' D BL D' B' F' D
Alg B' L' BL F U F' L' U B U' L F U' F' BL' L BL' B BL B
Alg D BL D B U F' R' BR' R F U' B' D
Alg B BR B' D' BL BR D BR D B' BL' B D BR' BL' D' BL' D'
Alg B' R BR B' BR' R' B U' F' L B L' BL' F BL U BL'
Alg U BR BL' BR' D' B D' F' D B' BL' BR BL BR' D' F U' D'
Alg U' D' BR' U' BR' D' L' D BR' D' L D' BL' U' BL' U BL U'
Alg L' F' BR F' R F' R' L F' BR' D L BL' L' BL D' F BL'
Alg B D BL' D B U R BR R' U' B' D' BL D' B' BL
Alg B' U L' U B BL L' F' BL F D' B' U B D B' L B L'
Alg L BL' B' U L F R U' R' F' U L F' L B L' F
Alg L' D R' U BR L BL B' BL' B BL' BR' L' U' R F D' L
Alg D' B U F' R' BR R F U' B' D' BL' D'
Alg B D BL' B' U' BL L' D L D' BL' U B BL B' D'
Alg B U' BL' U' F U' B U B' F' U BL U' B U' B
Alg U BR' U L BL' L U' BR U BR' L' BL BR L' U
Alg F' D' BR' BL B' U' BL' U B BL' BR D BL F
Alg B' L' B' F BL' F' BL F' BR F BR' B L B
Alg F' BL' D' BR F' BR' F D BR' BL BR F
Alg F D' F' U' F' D' BR D F' D' BR' D' F' U
Alg BR' BL' U' BL L U' F U F' L' U BR
Alg F BR R U' BR B U BR' F BR BL' BR D BL F
Alg F' BR' F U' BL L' U BL' B' F' BL' BR D' BL F
Alg B' U L' B' U L' D F L F' D' L U' B L U' L B L'
Alg B BL B L F BR' R' U' R BR F' L' B
Alg B D' B BR' R' U' B' U R BR U' D' F L' F' U L' D' L
Alg L U' L' U B BL' U B BL B' U R B' BL B R' U B'
Alg D F' D BL U' R U' BL' U R' U B D' F D B' D BL
Alg B BL U B BR' L R' F' U' F R BR L' B' U' B'
Alg B' U' B F' D F D' B' U B D BL F' BL' D' BL F
Alg B D BR B F' U' R' BR' R U B' F BR' D' BL B'
Alg L B' F R BL' U' R' BL B F' L U BR' U' BL L U BR U'
Alg F' L F' BL L U' D R' F' R U D' L' F L' F
Alg L U L' F' BL' F L B BL' U BL' U' BL B' BL L U' L
Alg B' L F BR' R' U R BR F' L' B' BL' B'
Alg U BR' U' L' U' BR' F' BR F BR D R' F R U D' L' BL' L'
Alg B L BL L F' D R' BR' R F D' L BL L BL' L' B'
Alg F' BL' D F' D' B D' B' U' D L D BR' L' F BR D' F U
Alg B U B BR' L R' F' U F R BR L' B' U' BL' B'
Alg U B' L BL' B L' U' L' BL L BL' L U BR F' D' F BR' U'
Alg B BL' D BR B F' U' R' BR R U B' F BR' D' B'
Alg B BR B F BR' U BL' L R BR' R' L' F' U BR U BL B BL'
Alg B' BR' L R' U R BR L' B' BL' B'
Alg B' U BR' R L F' BR' F L' R' BR U' B' BR B'
Alg F' BL' F' BR R U' BR B F BR BL' D F U BL'
Alg F' BR' B' U BR' F BR' F' BR U' BR B BR F
Alg BR' BL' U' BL L' F' BL F BL' L U BR
Alg U' L BL U' R U' BL U R' U BL L' U
Alg F BR' F' U' L F BR U F' U' L' BL U BL'
Alg L' F U' BR' U L' U BR U' L F' L
Alg F' BR' B' U' BR' U F BR B U' BL U BR BL'
Alg F' BR' U BR D' BR U' BR' D F
Alg F BL' BR R BL' F' BL F R' BL BR' F'
Alg L BL' B BL' U BL U' BL B' L' F' BL F L U' L U L
Alg B F BL B F' L F' BR' R' BL U' R BL' BR' F BR' L' B
Alg F BL B' F' BR B' BR' B L F BL B' BR B BL' BR' F' L' B
Alg B F D' BL U R BL' BR' R' U' D B F' BL B
Alg L B' U B' BR B BR U' BR' B L' F BL' B F' BR' B' BL'
Alg U' L R' F L U L' BL' B BL B' L' BL L U' F' R L' U
Alg BR BL F BL' F' L' F' BR' L B BR B' L' F L B BR' B' BL
Alg B' BR' L F L' B' BL B L F' BR' R' U' R BR' L' B
Alg D L U' BR U L U' R BL' F' R' F BL F' BR' U L D BL D
Alg B F BL B F BR' L R' BL U' R BL' BR' L' F BR' B
Alg L B' L' U L' B' U L' D F L' F' D' L U' B L U' B
Alg B' BR L F' BR R' BL U R BL' BR F L' B' F BL' B' F'
Alg B' BL L B L' B' BL' L' U BL' U R' L' R U' BL U' L B
Alg B U' D' F D B BL' B' U D' R BR R' U' F' U D B'
Alg D F L F' L' F R L' BL B L B' BL' L R' F' L D'
Alg L BL D' B BR' R' U R B' BR D BL L'
Alg D F D' B' U' B U' D F' D' F U B' U B F' BL'
Alg D' BR' BL BR B' BL' B D BL' D' BL B BR' B' BL' BR D
Alg U BR' U' L U R' L R BR L' B' L' B L U' L' BL'
Alg BR' L R' U R BR B L' B L B L' BL' B
Alg B BR' B U BR' R L F' BR F L' R' BR U' B
Alg F' L B' BR' B L BL' L' B' BR B L BL L F
Alg D F U' F' U D' BR U' D' F U F' D BR'
Alg B' BL' BR D' BR' D BL BR' B BR
Alg B BL U' BR' L U BR' F' BL D BL BR F BR
Alg L' U BR BL BR' B' BL U' BL' U B BL' U' L
Alg U B' BL U' L' BL' U' F BR' R' BR U F'
Alg D BR' BL U' BL' L F' BL' F BL L' U BR D'
Alg BR L' BL BR' BL' L BL' BR BL BR'
Alg F BL F' BL' B F' BR F BR' B'
Alg D BR L' U' R F' R' U BR L BL B' BL B BL' BR D'
Alg D' BL' D BL D F' D' F D' BL' D L BL' L' D' BL D
Alg B F D' F' U' BL' B U B' BL F D B U' B' U B' F' BL
Alg B U F' D' R BR' R' U' D B BL B' U F U' B'
Alg B BL B L B BR' F BR B' BR' R' U' R F' BR L' B
Alg B BL B L F' U' F' U F BR' R' U' R BR' F BR' L' B
Alg B' U' B F' D F D' B' U B U' D BL' F' BL D' F U BL
Alg L F' BR B' F' R BL' U' R' BL B F' BR L BL BR L
Alg D F' D' BL F' D' F R BL B' L U L' B R' F' BL' D F
Alg B BL BR BL D' BR L' R F' R' BR' L D BR' BL' B'
Alg B' L B' BR' B L' BL' U BL U' B' BR B' U BL' U'
Alg D' B BR' F BL' F' D BR D' BL F' BR B' F D' BL' D'
Alg B D F' L' R F D BR' D' F' R BR' L D B' BL' D' F D'
Alg D L BL' F' R U R' B F' L BL' L' B' F' BL L' D'
Alg B' BR' L F R' U R BR B BR' F' BR B' L' B' BL' B'
Alg D L F BL F L BL' L D' BL' D' F' D' F' L BL D' BL'
Alg D F BL F' BR B' BL' B BL BR' BL L' R F R' L D'
Alg L BL' B' L B L B' L F R U R' B F'
Alg F' D' BL F R B' L U' L' B R' BL' F' D F BL' D F D'
Alg B' L' BL U' D' L' BL' L U' D R' F R U' BL' L B
Alg L' F L' BL U' BL' U L F' L U' BL U BL'
Alg D' F' BL L U' F U F' L' U BL' U' F D
Alg B' U F D F' U F D' F U B U' F U
Alg U B' BR' U R' U' R BR U' B
Alg F' BL' D F BL F' BR F' BR' F BL' D' BL F
Alg F' BR' BL' BR D BL' F BL F' D' BL F
Alg U' F R F' BL' F R' F BL F U
Alg F' BR F BR' L BL' BR' BL BR L'
Alg F U' B F U' BR U BR' U F' U' B' U F'
Alg D F' BR R F' R' F BR' D' F
Alg B D' B U B' D B U' B BR BL BR' D BL BR BL BR' BL D'
Alg B' U' L' D' F D' L' F' L D F' D L U B BL'
Alg D L' F R L' BL B L' B' BL' L R' F' L F L' F' D'
Alg D L' D' BL D F' D F D' BL' L BL D'
Alg D' B R U' B' F' BL' L BL L' BL B F U R' BR' B' D
Alg D L BL' F L BL L' B' F R U' R' B F BL L' D'
Alg D F' BL F BL U BL F' D B D' F D B' D BR BL BR' U'
Alg B F' BL B F' BR' F' L F R' U' R BL' BR BL F' L' B
Alg L F BR B' D BL D' R U' R' D BL' D' B BR' F' L BL L
Alg B F BL B F' BR' L R' U' R BL' BR BL L' B
Alg D' B U BR' D BR' L' U' BR U BR L D' BR U' B' D' BL' D'
Alg F' D' BR' BL' BR D' BR L' U' R F R' U BR' L D' F
Alg D F U D' BL U' B D' F BR F' D' F' D BR' D B' BL
Alg B U' D' F D BL' D' BR D' BR' D BL B' BL' B F' U D B'
Alg L' BL' L' F BR B' D BL D' R U R' D BL' D' B BR' F' L'
Alg B U F' U' B BL' B' U D' R BR R' D F U' B'
Alg B L BL' U' L U' L' U R BL F D' BR D F' R' L' B'
Alg B' L B' BR' B L' F' BL F BL' B' BR B' F U' F' U BL'
Alg D' B BR R U' B' F' BL' L BL' L' BL B F U R' B' D
Alg B BL' U' B BL' B D B D' B D B D' BL B' U BL B'
Alg U BR' U' BR L' F BR' L' U BR U' L F' L
Alg L' U BR BL BR' B U BR' U' BR B' BL' U' L
Alg BR BL D BR' BL' L BL' BR BL L' BL D' BL' BR'
Alg F' BL' D' BR' D BL BR' B U BR U' B' BR F
Alg F U' F' D F' U' B' U F' U' B U' F' D'
Alg B' U BR' R' U R U' BR B U'
Alg L U BL U' BL' L' BL L' F' BL' F BL L BL'
Alg U B' BL' BR' U F' BR' D' F BR' U BL' L' BL'
Alg F BL' L' F' BL D' F' BR U' R' F' U F' BR'
Alg U B U' BL L U' L' U BL' B'
Alg U BL U' B BR' B U BL' U' BL L B' BR B L' B
Alg B BL B L F' U' F U F BR' R' U' R BR' F' BR' L' B
Alg B BR D L' D' F' D F D' F' D' F D' BR' L D' B D B
Alg F' L B' L' F L' U' F R U R' F' L' U' B BL L'
Alg B' L' F U F L' F R U' R' U L F R U R' U B F' BL
Alg B U F' D' F' U R BR' R' U' F D B BL B' F U' B'
Alg F BL U BL' U' F' BL L U' L D BR L' U L U' BR' U D' L
Alg B U' D' B' F BL B BL' D' BR D BR' D BL D' F' U D B'
Alg B BL' D' B' D B BL D BR' BL BR' R D R' BR BL' BR D' B'
Alg B F U' F' D' F' U' R BL' BR' R' BL U' F D B BL B
Alg D BR' BL B' BL' B BL' BR' L' U' R F R' U BR' L D'
Alg B' F' U' F' BL' D' B BR' R' U R B' BR D F U B F
Alg B' D' B' D BR L' D F' D F D F' D' F D L D' BR' B'
Alg D' B F D BL' D' BL B BR' B' BR B' BL' F' D
Alg B D B' F BL L' BL' F' L BL L' BL' BR L R L' R' BR' L' D'
Alg B U B F' BL' B' D' F' U R BR R' U' F D F U' B'
Alg BR BL' L' F' BR U F' U' BR L' B' BR' L F' BR L' B L'
Alg D BL' L' BL D F' D' F D' BL' D L D'
Alg F' BL' B F U' B U B' D' F' BL' B U' B' BL U F D B'
Alg B' F' L BL' BR' R' BL U R BR L' B' F BL' B'
Alg BR BL' BR' BL L' F L' BL' BR BL BR' L F' L
Alg B BL BR' F U' L F U BR' F BL D BR' BL
Alg B' BL' B' U BR' U' BR BL' BR BL BR' B BL B
Alg BR' U' L F U' F' U L' BL' U BL BR
Alg B U BR R' BR U' B' BR U' B' U BR' R' BR
Alg B BR BL L BL BR' BL' L U' BL' U BL L BL' B'
Alg F' BR' B BL' BR' R BR' BL BR R' BR B' BR F
Alg F' BR' B U BR' U' B' BR BL' D' BR D BL F
Alg D' F' BR U' R' F' U F' BR' F BL' L' F' BL
Alg B BL U' L U L' BL' U B' U'
Alg L' F' R B F' BR L' D' F' D BR' L B' F R' F BL L
Alg D F BL L' BL' B L B' L B L B' L BL L BL' F' D'
Alg B BL B BR' L R' U' R BR L' B U BR' U' BR BL' BR BL BR'
Alg B' F R U' R' F' L' B L' B' L' B BL L'
Alg B' L' F D R' F' L' U L F R' U D' L' B BL L F' L
Alg D' L' BL F R' BR' R B' F D' BL D B F BL' L D
Alg B' BR' R' U' BL' U' L R' F R F' L' R U' BL BR B BL
Alg BR L BL BR L U' D R' BL F' R BL' U' D' BR U' L
Alg BR L B' L F R F U F' U' R' L' B L F' BR' L BL
Alg B F U D' R BL' BR' R' BL U' D B F' BL B
Alg L' BL L' D B D' BL' B' D' L R' D R BL' U' L U BL'
Alg L' D BL' U' R' BL F R U D' BR L' BL' BR' L'
Alg U BR' U' L' BL' U BR U' L' B' F R BL' U R' BL B F' L'
Alg BR L' BL' L' B' F R BL' U R' BL B F BR F BR L'
Alg B' F' L F BR BL B' BR' B BL' F' L' B' BR B BR' B F BL'
Alg B D BR B' D' BL' D B F' R' BR R F BR' D' B'
Alg D BL' L' BL' L BL L' BL F' BL' L' F L BL F BL' L D'
Alg U' D R' F R U L D' L D L D' BL' L
Alg U D' BR D' L' D R F BR F' BR' R' BR' D' L U' D' BL'
Alg B' F' BR' L R' BL U R BL' BR L' B' F BL' B'
Alg L' F BL' F' BL F' BR F BR' L
Alg L BL F' D F D' BL' F L' F'
Alg F' D' BR U BR' D BR' U' BR F
Alg BR' L BL' BR BL BR L' F' BR' F
Alg B BR F BR' B' BR F' R' BR' BL' BR R BR' BL
Alg BR' B U BR' R BR R' U' BR B'
Alg F' BL' BR R' BR BL BR' R BR' F
Alg BR L' BL BR' BL' BR' L U BR U'
Alg U BR' U' BR BL' BR BL BR'
\`)}var mh,tc=y(()=>{"use strict";rr();Jn();mh=null});function kl(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function e2(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function Bh(e){e=e.slice();let t=e.length,r=kl(t-1),n=0;for(;t>1;){t--;let o=e[0];n+=o*r;for(let l=0;l<t;l++){let i=e[l+1];e[l]=i-(i>o)}r/=t}return n}function Rh(e,t){let r=[],n=kl(t-1);for(let o=0;o<t;o++)r[o]=e/n|0,e%=n,n/=t-1-o;for(let o=t-2;o>=0;o--)for(let l=o+1;l<t;l++)r[l]+=+(r[l]>=r[o]);return r}function rc(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let o=n;o<t;o++)e[n]>e[o]&&(r^=1);return r}function dh(e,t){let r=[],n=kl(t-1)/2,o=0;for(let l=0;l<t-1;l++)r[l]=e/n|0,e%=n,n/=t-1-l;r[t-1]=0;for(let l=t-2;l>=0;l--)for(let i=l+1;i<t;i++)r[i]>=r[l]?r[i]++:o^=1;return o===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function nc(e){return Bh(e)>>1}function oc(e){let t=e.length,r=0;for(let i=0;i<t;i++)r+=+(e[i]===1);let n=t-r;if(n===0||r===0||t===1)return 0;let o=e2(t-1,r),l=0;for(let i=0;n>0&&r>0&&t>1;i++)t--,e[i]===0?o=o*--n/t:(l+=o,o=o*r--/t);return l}function hh(e,t,r){let n=r-t,o=e2(r-1,t),l=[],i=r-1;for(let s=0;s<i;s++)r--,e<o?(l.push(0),o=o*--n/r):(l.push(1),e-=o,o=o*t--/r);return l.push(t),l}function xs(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function Kr(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function Qr(e,t){let r=Array(t).fill(0);for(let n in e)r[n]=e[n];return r}function Fh(e,t){let r=Array(8).fill(0);for(let n=0;n<8;n++)r[n]=(e[1][n]+t[1][n])%3;return[xs(e[0],t[0]),r]}function Eh(e){let t=["0","","'"];return e.map(([n,o])=>vh[n]+t[o]).join(" ")}function _h(e){let t=dh(Math.floor(e(kl(12))/2),12),r=Array(8);for(let n=0;n<8;n++)r[n]=e(3);return[t,r]}function kh(e){return Ch(_h(e))}function Ch(e){let t=zh(e),r=[ic(),sc()],n=[Nh(),Mh()],o=[ac(),Th()],l=[Gh(),Ph()],i=Ih(t,r,n),s,a=new Set,f=+new Date;for(let u=0;u<25;u++){let{value:g,done:p}=i.next(),c=e;for(let[U,b]of g)for(let S=0;S<b;S++)c=Fh(c,_l[U]);if(a.has(c.toString()))continue;a.add(c.toString());let L=nc(c[0].slice(0,8)),m=0;for(let U=0;U<4;U++)m+=c[1][U]*3**U;let R=[L,m],F=s?s.length-g.length-1:999999,A=Oh(R,o,l,F);if(A!==void 0&&((s===void 0||s.length>g.length+A.length)&&(s=g.concat(A)),new Date-f>300))break}return s}function zh(e){let t=0;for(let l=0;l<4;l++)t+=e[0].indexOf(l+8)*12**l;let r=0;for(let l=0;l<4;l++)r+=e[1][l+4]*3**l;let n=e[0].map(l=>Math.max(-1,l-8)),o=oc(n.map(l=>+(l>=0)))*2+rc(n.filter(l=>l>=0));return[t,r+81*o]}function lc(){if(me.phase1cm)return me.phase1cm;let e=[];for(let t=0;t<81;t++){e[t]=Array(8);let r=[t%3,Math.floor(t/3)%3,Math.floor(t/9)%3,Math.floor(t/27)];e[t][0]=e[t][1]=e[t][2]=e[t][3]=t;for(let n=0;n<4;n++)r[n]=(r[n]+2)%3,e[t][4+n]=r[0]+r[1]*3+r[2]*9+r[3]*27,r[n]=(r[n]+1)%3}return me.phase1cm=e}function Ph(){if(me.phase1cp)return me.phase1cp;let e=Array(81);for(let t=0;t<81;t++){let r=[t%3,Math.floor(t/3)%3,Math.floor(t/9)%3,Math.floor(t/27)];e[t]=(r[0]!==0)+(r[1]!==0)+(r[2]!==0)+(r[3]!==0)}return me.phase1cp=e}function ic(){if(me.phase1em)return me.phase1em;let e=[];for(let r=0;r<12;r++){e[r]=[];for(let n=0;n<8;n++)e[r][n]=_l[n][0].indexOf(r)}let t=Array(12**4);for(let r=0;r<12**4;r++){t[r]=Array(8);for(let n=0;n<8;n++){let o=0;for(let l=0;l<4;l++)o+=e[Math.floor(r/12**l)%12][n]*12**l;t[r][n]=o}}return me.phase1em=t}function Nh(){return me.phase1ep?me.phase1ep:me.phase1ep=t2(ic(),[8+12*(9+12*(10+12*11))])}function sc(){if(me.phase1sm)return me.phase1sm;let e=e2(12,4),t=[];for(let o=0;o<e;o++){t[o]=[];let l=hh(o,4,12),i=[];for(let s=0,a=0;s<12;s++)l[s]===0?i[s]=-1:i[s]=a++;for(let s=0;s<8;s++){let a=xs(i,_l[s][0]),f=xs(l,_l[s][0]),u=rc(a.filter(g=>g>=0));t[o][s]=oc(f)*2+u}}let r=lc(),n=[];for(let o=0;o<e;o++)for(let l=0;l<81;l++){let i=n[l+81*(2*o)]=[],s=n[l+81*(2*o+1)]=[];for(let a=0;a<8;a++)i[a]=r[l][a]+81*t[o][a],s[a]=r[l][a]+81*(t[o][a]^1)}return me.phase1sm=n}function Mh(){return me.phase1sp?me.phase1sp:me.phase1sp=t2(sc(),[0])}function Th(){if(me.phase2cm)return me.phase2cm;let e=lc(),t=Array(81);for(let r=0;r<81;r++)t[r]=e[r].slice(4,8);return me.phase2cm=t}function ac(){if(me.phase2em)return me.phase2em;let e=8,t=kl(e)/2,r=Array(t),n=[0,1,2,3,4,5,6,7];for(let o=0;o<t;o++){r[o]=Array(4);for(let i=0;i<4;i++){let s=xs(n,_l[i][0].slice(0,8));r[o][i]=nc(s)}if(o===t-1)break;let l=0;do for(let i=e-2;i>=0;i--){if(n[i]>n[i+1])continue;let s=i+1;for(let a=s;a<e;a++)n[a]>n[i]&&(s=a);[n[i],n[s]]=[n[s],n[i]],l^=1;for(let a=0;i+1+a<e-1-a;a++,l^=1)[n[i+1+a],n[e-1-a]]=[n[e-1-a],n[i+1+a]];break}while(l!==0)}return me.phase2em=r}function Gh(){return me.phase2ep?me.phase2ep:me.phase2ep=t2(ac(),[0])}function t2(e,t){let r=e.length,n=e[0].length,o=Array(r).fill(-1),l=t.slice(),i=[],s=0;for(;l.length>0;){i.length=0;for(let a of l)if(o[a]===-1){o[a]=s;for(let f=0;f<n;f++){let u=e[a][f];for(;u!=a;)i.push(u),u=e[u][f]}}[l,i]=[i,l],s+=1}return o}function Oh(e,t,r,n){n=n||999999;let o=e.length,l=0;for(let i=0;i<o;i++)l=Math.max(l,r[i][e[i]]);for(;l<=n;){let i=fc(e,t,r,l,-1);if(i!==void 0)return i;l++}}function fc(e,t,r,n,o){let l=e.length,i=t[0][0].length,s=0;for(let a=0;a<l;a++)s=Math.max(s,r[a][e[a]]);if(!(s>n)){if(n===0)return[];if(!(s===0&&n===1))for(let a=0;a<i;a++){if(a===o||a<o&&bs[a]==bs[o])continue;let f=e.slice();for(let g=0;g<l;g++)f[g]=t[g][e[g]][a];let u=1;for(;e.some((g,p)=>e[p]!=f[p]);){let g=fc(f,t,r,n-1,a);if(g!==void 0)return[[a,u]].concat(g);for(let p=0;p<l;p++)f[p]=t[p][f[p]][a];u++}}}}function*Ih(e,t,r){let n=e.length,o=0;for(let l=0;l<n;l++)o=Math.max(o,r[l][e[l]]);for(;;)yield*uc(e,t,r,o,-1),o++}function*uc(e,t,r,n,o){let l=e.length,i=t[0][0].length,s=0;for(let a=0;a<l;a++)s=Math.max(s,r[a][e[a]]);if(!(s>n)){if(n===0){yield[];return}if(!(s===0&&n===1))for(let a=0;a<i;a++){if(a===o||a<o&&bs[a]==bs[o])continue;let f=e.slice();for(let g=0;g<l;g++)f[g]=t[g][e[g]][a];let u=1;for(;e.some((g,p)=>e[p]!=f[p]);){let g=uc(f,t,r,n-1,a);for(;;){let{value:p,done:c}=g.next();if(c)break;yield[[a,u]].concat(p)}for(let p=0;p<l;p++)f[p]=t[p][f[p]][a];u++}}}}async function gc(){return new E(Eh(kh(await Wh)))}var Dh,Ah,yh,Uh,xh,bh,Sh,wh,FU,_l,vh,bs,me,Wh,pc=y(()=>{"use strict";Be();yt();Dh=[Kr([0,1,4],12),Qr({0:2},8)],Ah=[Kr([1,2,5],12),Qr({1:2},8)],yh=[Kr([2,3,6],12),Qr({2:2},8)],Uh=[Kr([3,0,7],12),Qr({3:2},8)],xh=[Kr([9,8,4],12),Qr({4:2},8)],bh=[Kr([10,9,5],12),Qr({5:2},8)],Sh=[Kr([11,10,6],12),Qr({6:2},8)],wh=[Kr([8,11,7],12),Qr({7:2},8)],FU=[Rh(0,12),Array(8).fill(0)],_l=[Dh,Ah,yh,Uh,xh,bh,Sh,wh],vh=["UL","U","UR","F","L","B","R","D"],bs=[0,1,0,1,1,0,1,0];me={};Wh=ve()});var r2={};ht(r2,{getRandomRediCubeScramble:()=>gc,sgsDataFTO:()=>ec});var n2=y(()=>{"use strict";tc();pc()});function mc(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function ws(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function Kh(e){e=e.slice();let t=e.length,r=mc(t-1),n=0;for(;t>1;){t--;let o=e[0];n+=o*r;for(let l=0;l<t;l++){let i=e[l+1];e[l]=i-(i>o)}r/=t}return n}function Qh(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let o=n;o<t;o++)e[n]>e[o]&&(r^=1);return r}function jh(e){return Kh(e)>>1}function i2(e){let t=e.length,r=0;for(let i=0;i<t;i++)r+=+(e[i]===1);let n=t-r;if(n===0||r===0||t===1)return 0;let o=ws(t-1,r),l=0;for(let i=0;n>0&&r>0&&t>1;i++)t--,e[i]===0?o=o*--n/t:(l+=o,o=o*r--/t);return l}function Hh(e,t,r){let n=r-t,o=ws(r-1,t),l=[],i=r-1;for(let s=0;s<i;s++)r--,e<o?(l.push(0),o=o*--n/r):(l.push(1),e-=o,o=o*t--/r);return l.push(t),l}function Ht(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function s2(e,t){let r=Ht(e[0],t[0]),n=[],o=t[0].length;for(let l=0;l<o;l++)n[l]=(e[1][t[0][l]]+t[1][l])%3;return[r,n]}function Eo(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function jr(e,t){let r=Array(t).fill(0);for(let n in e)r[n]=e[n];return r}function eF(e){let t=[0];for(let n=1;n<20;n++){let o=e(n+1);t[n]=t[o],t[o]=n}Qh(t)===1&&([t[0],t[1]]=[t[1],t[0]]);let r=Array(20).fill(0);for(let n=0;n<19;n++)r[n]=e(3),r[19]+=3-r[n];return r[19]%=3,[t,r]}function tF(e){let t=["0","","2","2'","'"];return e.map(([n,o])=>Xh[n]+t[o]).join(" ")}function rF(e,t){for(let[r,n]of t)for(let o=0;o<n;o++)e=s2(e,xn[r]);return e}function nF(e){return pF(eF(e))}function lF(e){let t=e[0];if(t.slice(15,20).every(l=>l<15))return[];if(t.slice(0,5).every(l=>l<15))return[[6,1]];let r=t.map(l=>l>=15),n=0,o;for(;o===void 0;)n++,o=dc(r,n,-1);return o.push([6,1]),o}function dc(e,t,r){if(t==0)return e.slice(0,5).some(n=>n)?void 0:[];for(let n=0;n<6;n++)if(n!==r)for(let o=1;o<5;o++){let l=Ht(e,Ss[n][o][0]),i=dc(l,t-1,n);if(i!==void 0)return[[n,o]].concat(i)}}function iF(e){let t=e[0].slice(0,15),r=e[1],n=i2(t.map(i=>+(i>=15))),o=243*n;for(let i=0,s=0;i<15;i++)t[i]<15||(o+=r[i]*Math.pow(3,s),s++);let l=0;for(let i=0;i<5;i++)l+=t.indexOf(15+i)*Math.pow(15,i);return[o,l]}function sF(e){let t=[vs(),Es()],r=[cF(),LF()];return hc(iF(e),t,r).concat([[6,1]])}function aF(e){let t=[5,6,7,8,14],r=e[0].slice(0,15),n=e[1],o=i2(r.map(s=>+(t.indexOf(s)!==-1))),l=243*o;for(let s=0,a=0;s<15;s++)t.indexOf(r[s])!==-1&&(l+=n[s]*Math.pow(3,a),a++);let i=0;for(let s=0;s<5;s++)i+=r.indexOf(t[s])*Math.pow(15,s);return[l,i]}function fF(e){let t=[vs(),Es()],r=[mF(),BF()];return hc(aF(e),t,r)}function uF(e){let t=e[0].slice(0,14),r=e[1],n=0,o=[],l=0;for(let i of[0,1,2,3,4,9,10,11,12,13])i!==13&&(n+=r[i]*Math.pow(3,l)),o[l]=t[i]<5?t[i]:t[i]-4,l++;return[n,jh(o)]}function gF(e){return DF(uF(e))}function pF(e){let t=[];for(let r of[lF,sF,fF,gF]){let n=r(e);e=rF(e,n),t=t.concat(n)}return t}function vs(){if(oe.phase23om)return oe.phase23om;let e=ws(15,5),t=[1,3,9,27,81,243],r=Array(ws(15,5)*t[5]);oe.phase23om=r;for(let n=0;n<e;n++){let o=Hh(n,5,15).concat(Array(5).fill(0)),l=[];for(let i=0;i<6;i++){let s=Ht(o,xn[i][0]).slice(0,15);l[i]=i2(s)}for(let i=0;i<t[5];i++){r[i+243*n]=[];let s=[];for(let a=0,f=0;a<20;a++)o[a]===1?(s[a]=(i/t[f]|0)%3,f++):s[a]=99;for(let a=0;a<6;a++){let f=xn[a],u=[];for(let c=0;c<15;c++)u[c]=s[f[0][c]]+f[1][c];let g=u.filter(c=>c<10),p=0;for(let c=0;c<5;c++)p+=g[c]%3*t[c];r[i+243*n][a]=p+243*l[a]}}}return r}function cF(){if(oe.phase2op)return oe.phase2op;let e=vs();return oe.phase2op=_o(e,[243*3002])}function mF(){if(oe.phase3op)return oe.phase3op;let e=vs();return oe.phase3op=_o(e,[243*246])}function Es(){if(oe.phase23pm)return oe.phase23pm;let e=[1,15,225,Math.pow(15,3),Math.pow(15,4),Math.pow(15,5)],t=Array(e[5]),r=Array(15);for(let o=0;o<15;o++){r[o]=Array(6);for(let l=0;l<6;l++)r[o][l]=xn[l][0].indexOf(o)}let n=[0,0,0,0,0];for(let o=0;o<e[5];o++){t[o]=Array(6);for(let l=0;l<6;l++){let i=0;for(let s=0;s<5;s++)i+=r[n[s]][l]*e[s];t[o][l]=i}n[0]++;for(let l=0;l<4;l++)n[l]===15&&(n[l]=0,n[l+1]++)}return oe.phase23pm=t}function LF(){if(oe.phase2pp)return oe.phase2pp;let e=Es();return oe.phase2pp=_o(e,[213090])}function BF(){if(oe.phase3pp)return oe.phase3pp;let e=Es();return oe.phase3pp=_o(e,[737420])}function a2(){if(oe.phase4om)return oe.phase4om;let e=[1,3,9,27,81,243,729,2187,6561,19683,59049],t=Array(e[9]);for(let r=0;r<e[9];r++){let n=Array(14).fill(0);for(let o=0;o<9;o++){let l=o<5?o:o+4;n[l]=(r/e[o]|0)%3,n[13]-=n[l]}n[13]=(n[13]+999)%3,t[r]=[];for(let o=0;o<3;o++){let l=xn[o],i=[0,1,2,3,4,9,10,11,12,13].map(a=>n[l[0][a]]+l[1][a]),s=0;for(let a=0;a<9;a++)s+=i[a]%3*e[a];t[r][o]=s}}return oe.phase4om=t}function f2(){if(oe.phase4pm)return oe.phase4pm;let e=mc(10)/2,t=10,r=[0,1,2,3,4,-1,-1,-1,-1,5,6,7,8,9],n=[0,1,2,3,4,9,10,11,12,13],o=[Ht(r,Ht(Lc[0],n)),Ht(r,Ht(Bc[0],n)),Ht(r,Ht(Rc[0],n))],l=Array(e),i=Array(10);for(let s=0;s<e;s++){Vh(s,i),l[s]=[];for(let a=0;a<3;a++){let f=Ht(i,o[a]);l[s][a]=qh(f)}}return oe.phase4pm=l}function RF(){if(oe.phase4op)return oe.phase4op;let e=a2();return oe.phase4op=_o(e,[0])}function dF(){if(oe.phase4pp)return oe.phase4pp;let e=f2();return oe.phase4pp=_o(e,[0])}function hF(e){if(oe.phase4np_list&&oe.phase4np_list.threshold===e)return oe.phase4np_list;let t=[a2(),f2()],r=Math.pow(3,9),n=[0];o(e,[0,0],-1);function o(s,a,f){if(n.push(a[0]+r*a[1]),s===0)return;let u=[];for(let g=0;g<3;g++)if(g!==f){u[0]=a[0],u[1]=a[1];for(let p=1;p<5;p++)u[0]=t[0][u[0]][g],u[1]=t[1][u[1]][g],o(s-1,u,g)}}n.sort((s,a)=>s-a);let l=[],i=-1;for(let s of n)s!==i&&l.push(i=s);return l.threshold=e,oe.phase4np_list=l}function FF(e,t){let r=0,n=e.length-1;for(;n-r>1;){let o=r+n>>1;t>e[o]?r=o+1:n=o}return t===e[r]||t===e[n]}function _o(e,t){let r=e.length,n=e[0].length,o=Array(r).fill(-1);for(let s of t)o[s]=0;let l=0,i=!1;for(;!i;){i=!0;for(let s=0;s<r;s++)if(o[s]===l)for(let a=0;a<n;a++){let f=e[s][a];for(;f!==s;)o[f]===-1&&(i=!1,o[f]=l+1),f=e[f][a]}l++}return o}function hc(e,t,r){let n=e.length,o=0;for(let l=0;l<n;l++)o=Math.max(o,r[l][e[l]]);for(;;){let l=Fc(e,t,r,o,-1);if(l!==void 0)return l;o++}}function Fc(e,t,r,n,o){let l=e.length,i=t[0][0].length,s=0;for(let a=0;a<l;a++)s=Math.max(s,r[a][e[a]]);if(!(s>n)){if(n===0||s===0)return[];for(let a=0;a<i;a++){if(a===o)continue;let f=e.slice();for(let g=0;g<l;g++)f[g]=t[g][e[g]][a];let u=1;for(;e.some((g,p)=>e[p]!=f[p]);){let g=Fc(f,t,r,n-1,a);if(g!==void 0)return[[a,u]].concat(g);for(let p=0;p<l;p++)f[p]=t[p][f[p]][a];u++}}}}function DF(e){let t=a2(),r=f2(),n=RF(),o=dF(),l=hF(o2),i=Math.max(n[e[0]],o[e[1]]);for(;;){let s=Dc(e,i,-1,t,r,n,o,l);if(s!==void 0)return s;i++}}function Dc(e,t,r,n,o,l,i,s){let a=Math.max(l[e[0]],i[e[1]]);if(!(a>t)&&(a<=o2&&!FF(s,e[0]+19683*e[1])&&(a=o2+1),!(a>t))){if(t===0||a===0)return[];for(let f=0;f<3;f++){if(f===r)continue;let u=e.slice();for(let g=1;g<5;g++){u[0]=n[u[0]][f],u[1]=o[u[1]][f];let p=Dc(u,t-1,f,n,o,l,i,s);if(p!==void 0)return[[f,g]].concat(p)}}}}async function Ac(){return new E(tF(nF(await AF)))}var o2,qh,Vh,Lc,Bc,Rc,Zh,Jh,Yh,l2,zU,xn,Xh,$h,Ss,oF,oe,AF,yc=y(()=>{"use strict";Be();yt();o2=7;[qh,Vh]=(()=>{let e=new Int8Array(10240),t=new Int8Array(1024*10);for(let o=0;o<1024;o++)for(let l=0,i=0;l<10;l++)(o>>>l&1)!==0&&(e[l<<10|o]=i,t[i<<10|o]=l,i++);function r(o){let l=1023,i=181440,s=0;for(let a=0;a<8;a++){let f=o[a];s+=e[l|f<<10]*i,l&=~(1<<f),i/=9-a}return s}function n(o,l){let i=1023,s=181440,a=0;for(let f=0;f<8;f++){let u=o/s|0;o-=u*s,a^=u&1;let g=t[i|u<<10];l[f]=g,i&=~(1<<g),s/=9-f}return l[8]=t[i|a<<10],l[9]=t[i|(a^1)<<10],l}return[r,n]})();Lc=[Eo([0,1,2,3,4],20),jr({},20)],Bc=[Eo([4,3,11,12,13],20),jr({4:2,3:1,11:1,12:1,13:1},20)],Rc=[Eo([3,2,9,10,11],20),jr({3:2,2:1,9:1,10:1,11:1},20)],Zh=[Eo([2,1,7,8,9],20),jr({2:2,1:1,7:1,8:1,9:1},20)],Jh=[Eo([1,0,5,6,7],20),jr({1:2,0:1,5:1,6:1,7:1},20)],Yh=[Eo([0,4,13,14,5],20),jr({0:2,4:1,13:1,14:1,5:1},20)],l2=[[15,16,17,18,19,10,9,8,7,6,5,14,13,12,11,0,1,2,3,4],jr({},20)],zU=[[1,2,3,4,0,7,8,9,10,11,12,13,14,5,6,19,15,16,17,18],jr({},20)],xn=[Lc,Bc,Rc,Zh,Jh,Yh,l2],Xh=["U","R","F","L","BL","BR","x2"],$h=s2(l2,l2),Ss=[];for(let e=0;e<xn.length;e++){Ss[e]=[$h];for(let t=1;t<5;t++)Ss[e][t]=s2(Ss[e][t-1],xn[e])}{let e=Math.sin(Math.PI/5),t=Math.cos(Math.PI/10),r=Math.cos(Math.PI/5),n=Math.sin(Math.PI/10);oF={U:[0,0],L:[-e-t,r-n],F:[0,2*r],R:[e+t,r-n],BR:[t,-1-n],BL:[-t,-1-n],DBR:[2*e+2*t,0],DB:[3*e+3*t,-r-n],DBL:[4*e+4*t,0],DFL:[3*e+4*t,1+r],DFR:[3*e+2*t,1+r],D:[3*e+3*t,r-n]}}oe={};AF=ve();Ac().then(e=>e.log())});var Uc={};ht(Uc,{getRandomKilominxScramble:()=>Ac});var xc=y(()=>{"use strict";yc()});function Cl(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function Sn(e){let t=Array(e);for(let r=0;r<e;r++)t[r]=r;return t}function yF(e){e=e.slice();let t=e.length,r=Cl(t-1),n=0;for(;t>1;){t--;let o=e[0];n+=o*r;for(let l=0;l<t;l++){let i=e[l+1];e[l]=i-(i>o)}r/=t}return n}function _s(e,t){let r=[],n=Cl(t-1)/2,o=0;for(let l=0;l<t-1;l++)r[l]=e/n|0,e%=n,n/=t-1-l;r[t-1]=0;for(let l=t-2;l>=0;l--)for(let i=l+1;i<t;i++)r[i]>=r[l]?r[i]++:o^=1;return o===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function vc(e){return yF(e)>>1}function bn(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function g2(e){let t=[];for(let r=0;r<e.length;r++)t[e[r]]=r;return t}function zl(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function qr(e,t){return e.length===0?Sn(t):e.map(r=>zl(r,t)).reduce(bn)}function UF(e,t){let r=Array(4);for(let i=0;i<4;i++)r[i]=(e.co[i]+t.co[i])%3;let n=bn(e.mp,t.mp),o=bn(e.wp,t.wp),l=bn(e.cp,t.cp);return{co:r,mp:n,wp:o,cp:l}}function Ec(e,t){return e>=4&&t>=4?!0:e<4&&t<4?e===t:(e^t)===4}function zF(e){let t=["0","","'"];return e.map(([n,o])=>CF[n]+t[o]).join(" ")}function PF(e){let t=Array(4);for(let l=0;l<4;l++)t[l]=e(3);let r=_s(e(Cl(6)/2),6);for(let l=0,i=0;l<6;l++){let s=l===5?i:e(2);i^=s,r[l]+=s*6,r[l+6]=(r[l]+6)%12}let n=_s(e(Cl(12)/2),12),o=_s(e(Cl(4)/2),4);return{co:t,mp:r,wp:n,cp:o}}function NF(e){return TF(PF(e))}function MF(e,t=!0,r=!1){let n=zF(NF(e));if(!t)return n;let o=["u","l","r","b"],l=["0","","'"];if(!r){for(let p=0;p<4;p++){let c=e(3);c!==0&&(n+=" "+o[p]+l[c])}return n.trim()}let i=[],s=[],a=[];for(let p=0;p<4;p++)i[p]=e(3),s[p]=e(3),a[p]=(i[p]-s[p]+3)%3;let f=p=>p.filter(c=>c!==0).length;for(;!(f(s)>=1&&f(a)>=1&&f(s)+f(a)>=4);)for(let p=0;p<4;p++)s[p]=e(3),a[p]=(i[p]-s[p]+3)%3;let u=s.map((p,c)=>p!==0?o[c]+l[p]+" ":"").join(""),g=a.map((p,c)=>p!==0?" "+o[c]+l[p]:"").join("");return u+n+g}function TF(e){let t=OF(e),r=[Pc(),Nc()],n=[qF(),VF()],o=KF(t),l,i=new Set,s=performance.now();for(let a=0;a<22;a++){let{value:f,done:u}=o.next(),g=e;for(let[R,F]of f)for(let A=0;A<F;A++)g=UF(g,ko[R]);let p=JSON.stringify(g);if(i.has(p))continue;i.add(p);let c=QF(g),L=l?l.length-f.length-1:999999,m=HF(c,r,n,L).next().value;if(m!==void 0&&((l===void 0||l.length>f.length+m.length)&&(l=f.concat(m)),performance.now()-s>300))break}return l}function GF(e){return e[3^e.indexOf(3)]}function OF(e){let t=bn(g2(e.mp),e.wp),r=(e.co.reduce((n,o)=>n+o)-GF(e.cp)+3)%3;return[0,1,2,3,4,5].map(n=>n+6*t.indexOf(n)+72*t.indexOf(n+6)+864*r)}function*KF(e){let t=0,r=zc(),n=jF();for(;;)yield*kc(...e,r,n,t,-1),t++}function*kc(e,t,r,n,o,l,i,s,a,f){let u=wn,g=cr[e]+cr[t]+cr[r]+cr[n]+cr[o]+cr[l],p=Math.max(s[e%864+t*864],s[r%864+t*864],s[o%864+t*864],s[e%864+n*864],s[r%864+n*864],s[o%864+n*864],s[e%864+l*864],s[r%864+l*864],s[o%864+l*864],s[e%864+r*864],s[e%864+o*864],s[r%864+o*864],s[t%864+n*864],s[t%864+l*864],s[n%864+l*864],c2[g]);if(!(p>a)){if(a===0){yield[];return}if(!(p===0&&a===1))for(let c=0;c<u;c++){if(c===f||c<f&&Ec(c,f))continue;let L=e,m=t,R=r,F=n,A=o,U=l;for(let b=1;b<=2;b++){L=i[L][c],m=i[m][c],R=i[R][c],F=i[F][c],A=i[A][c],U=i[U][c];let S=kc(L,m,R,F,A,U,i,s,a-1,c);for(;;){let{value:N,done:J}=S.next();if(J)break;yield[[c,b]].concat(N)}}}}}function QF(e){let t=e.mp,r=vc(t.slice(0,6).map(i=>i%6)),n=t.slice(0,5).map((i,s)=>(i>=6)*2**s).reduce((i,s)=>i+s),o=e.co.map((i,s)=>i*3**s).reduce((i,s)=>i+s),l=e.cp.indexOf(0);return[r+360*l,n+32*o]}function Cc(){if(Ee.phase1pm)return Ee.phase1pm;let e=Array(6*12*12).fill().map(()=>Array(wn).fill(-1));for(let t=0;t<6;t++)for(let r=0;r<12;r++)for(let n=0;n<12;n++){if(r===n)continue;let o=t+6*r+72*n;for(let l=0;l<wn;l++){let i=_c[l][t],s=p2[l][r],a=p2[l][n];i<6?e[o][l]=i+6*s+72*a:e[o][l]=i-6+6*a+72*s}}return Ee.phase1pm=e}function zc(){if(Ee.phase1pcm)return Ee.phase1pcm;let e=Cc(),t=Array(e.length*3).fill().map(()=>Array(wn).fill(-1));for(let r=0;r<e.length;r++)for(let n=0;n<wn;n++){let o=e[r][n];t[r][n]=o+6*12*12*u2[n],t[r+6*12*12][n]=o+6*12*12*((u2[n]+1)%3),t[r+2*6*12*12][n]=o+6*12*12*((u2[n]+2)%3)}return Ee.phase1pcm=t}function jF(){if(Ee.phase1p2cp)return Ee.phase1p2cp;let e=Cc(),t=zc(),r=new Int8Array((6*12*12)**2*3);r.fill(-1);let n=[0,1,2,3,4,5].map(l=>l+6*l+72*(l+6));for(let l=0;l<6;l++)for(let i=0;i<6;i++)l!==i&&(r[n[l]+864*n[i]]=0);let o=0;for(;;){let l=!1;for(let i=0;i<r.length;i++){if(r[i]!==o)continue;let s=i%864,a=Math.floor(i/864);for(let f=0;f<wn;f++){let u=s,g=a;for(let p=1;p<=2;p++){u=e[u][f],g=t[g][f];let c=u+864*g;r[c]===-1&&(l=!0,r[c]=o+1)}}}if(!l)break;o++}return Ee.phase1p2cp=r}function Pc(){if(Ee.phase2pm)return Ee.phase2pm;let e=Array(1440).fill().map(()=>Array(ks));for(let t=0;t<360;t++){let r=_s(t,6);for(let n=0;n<6;n++)r[n+6]=r[n]+6;for(let n=0;n<ks;n++){let o=bn(r,ko[n].mp),l=vc(o.slice(0,6).map(i=>i%6));for(let i=0;i<4;i++){let s=ko[n].cp[i];e[t+360*s][n]=l+360*i}}}return Ee.phase2pm=e}function Nc(){if(Ee.phase2om)return Ee.phase2om;let e=Array(32*81).fill().map(()=>Array(ks));for(let t=0;t<32;t++){let r=[0,1,2,3,4].map(o=>t>>o&1);r[5]=r.reduce((o,l)=>o^l);let n=[];for(let o=0;o<6;o++)n[o]=o+6*r[o],n[o+6]=o+6*(r[o]^1);for(let o=0;o<81;o++){let l=[0,1,2,3].map(i=>Math.floor(o/3**i)%3);for(let i=0;i<ks;i++){let a=bn(n,ko[i].mp).slice(0,5).map(p=>+(p>=6)),f=0;for(let p=0;p<5;p++)f+=a[p]<<p;let u=l.map((p,c)=>(p+ko[i].co[c])%3),g=0;for(let p=0;p<4;p++)g+=u[p]*3**p;e[t+32*o][i]=f+32*g}}}return Ee.phase2om=e}function qF(){return Ee.phase2pp?Ee.phase2pp:Ee.phase2pp=Mc(Pc(),[0])}function VF(){return Ee.phase2op?Ee.phase2op:Ee.phase2op=Mc(Nc(),[0])}function Mc(e,t){let r=e.length,n=e[0].length,o=Array(r).fill(-1),l=t.slice(),i=[],s=0;for(;l.length>0;){i.length=0;for(let a of l)if(o[a]===-1){o[a]=s;for(let f=0;f<n;f++){let u=e[a][f];for(;u!=a;)i.push(u),u=e[u][f]}}[l,i]=[i,l],s+=1}return o}function*HF(e,t,r,n){let o=e.length,l=0;for(let i=0;i<o;i++)l=Math.max(l,r[i][e[i]]);for(;l<=n;)yield*Tc(e,t,r,l,-1),l++}function*Tc(e,t,r,n,o){let l=e.length,i=t[0][0].length,s=0;for(let a=0;a<l;a++)s=Math.max(s,r[a][e[a]]);if(!(s>n)){if(n===0){yield[];return}if(!(s===0&&n===1))for(let a=0;a<i;a++){if(a===o||a<o&&Ec(a,o))continue;let f=e.slice();for(let g=0;g<l;g++)f[g]=t[g][e[g]][a];let u=1;for(;e.some((g,p)=>e[p]!=f[p]);){let g=Tc(f,t,r,n-1,a);for(;;){let{value:p,done:c}=g.next();if(c)break;yield[[a,u]].concat(p)}for(let p=0;p<l;p++)f[p]=t[p][f[p]][a];u++}}}}async function JF(){return MF(await ZF,!1)}var KU,QU,jU,xF,bF,SF,wF,vF,EF,_F,kF,ko,CF,wn,ks,IF,_c,WF,p2,u2,wc,c2,cr,Ee,ZF,Gc=y(()=>{"use strict";yt();[KU,QU]=(()=>{let e=new Int8Array(49152),t=new Int8Array(4096*12);for(let o=0;o<4096;o++)for(let l=0,i=0;l<12;l++)(o>>>l&1)!==0&&(e[l<<12|o]=i,t[i<<12|o]=l,i++);function r(o){let l=4095,i=19958400,s=0;for(let a=0;a<10;a++){let f=o[a];s+=e[l|f<<12]*i,l&=~(1<<f),i/=11-a}return s}function n(o,l){let i=4095,s=19958400,a=0;for(let f=0;f<10;f++){let u=o/s|0;o-=u*s,a^=u&1;let g=t[i|u<<12];l[f]=g,i&=~(1<<g),s/=11-f}return l[10]=t[i|a<<12],l[11]=t[i|(a^1)<<12],l}return[r,n]})();jU={co:[0,0,0,0],mp:Sn(12),wp:Sn(12),cp:[0,1,2,3]},xF={co:[2,0,0,0],mp:Sn(12),wp:zl([1,9,11],12),cp:[0,1,2,3]},bF={co:[0,2,0,0],mp:Sn(12),wp:zl([0,7,2],12),cp:[0,1,2,3]},SF={co:[0,0,2,0],mp:Sn(12),wp:zl([3,6,10],12),cp:[0,1,2,3]},wF={co:[0,0,0,2],mp:Sn(12),wp:zl([4,8,5],12),cp:[0,1,2,3]},vF={co:[2,0,0,0],mp:qr([[1,9,11],[7,3,5]],12),wp:qr([[1,9,11],[7,3,5]],12),cp:[0,2,3,1]},EF={co:[0,2,0,0],mp:qr([[0,7,2],[6,1,8]],12),wp:qr([[0,7,2],[6,1,8]],12),cp:[3,1,0,2]},_F={co:[0,0,2,0],mp:qr([[3,6,10],[9,0,4]],12),wp:qr([[3,6,10],[9,0,4]],12),cp:[1,3,2,0]},kF={co:[0,0,0,2],mp:qr([[4,8,5],[10,2,11]],12),wp:qr([[4,8,5],[10,2,11]],12),cp:[2,0,1,3]},ko=[vF,EF,_F,kF,xF,bF,SF,wF],CF=["u","l","r","b","U","L","R","B"],wn=8,ks=4;IF=[],_c=[],WF=[],p2=[];for(let e=0;e<wn;e++){let t=ko[e];IF[e]=t.mp,_c[e]=g2(t.mp),WF[e]=t.wp,p2[e]=g2(t.wp)}u2=[0,0,0,0,2,2,2,2],wc=[[14,-1,-1,11,11,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,4,3,-1,-1,0],[13,-1,-1,11,10,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,3,1,-1,-1,6]],c2=new Int8Array(55);for(let e=0;e<25;e++)c2[e]=wc[0][e],c2[e+30]=wc[1][e];cr=new Int8Array(6*12*12*3);for(let e=0;e<6;e++)for(let t=0;t<12;t++)for(let r=0;r<12;r++){let n=e+6*t+72*r,o=2;t===e?o++:t===(e+6)%12&&o--,r===(e+6)%12?o++:r===e&&o--,cr[n]=o,cr[n+6*12*12]=cr[n+2*6*12*12]=o+5}Ee={};ZF=ve()});var Oc={};ht(Oc,{randomMasterTetraminxScrambleString:()=>JF});var Ic=y(()=>{"use strict";Gc()});function i3(e,t){e.ul=t.ul,e.ur=t.ur,e.dl=t.dl,e.dr=t.dr,e.ml=t.ml}function Xc(e,t){var r;t<<=2,t>24?(t=48-t,r=e.ul,e.ul=(~~e.ul>>t|e.ur<<24-t)&16777215,e.ur=(~~e.ur>>t|r<<24-t)&16777215):t>0?(r=e.ul,e.ul=(e.ul<<t|~~e.ur>>24-t)&16777215,e.ur=(e.ur<<t|~~r>>24-t)&16777215):t==0?(r=e.ur,e.ur=e.dl,e.dl=r,e.ml=1-e.ml):t>=-24?(t=-t,r=e.dl,e.dl=(e.dl<<t|~~e.dr>>24-t)&16777215,e.dr=(e.dr<<t|~~r>>24-t)&16777215):t<-24&&(t=48+t,r=e.dl,e.dl=(~~e.dl>>t|e.dr<<24-t)&16777215,e.dr=(~~e.dr>>t|r<<24-t)&16777215)}function s3(e){var t,r,n,o,l;for(n=0,e.arr[0]=Zt(e,0),o=1;o<24;++o)Zt(e,o)!=e.arr[n]&&(e.arr[++n]=Zt(e,o));for(l=0,t=0;t<16;++t)for(r=t+1;r<16;++r)e.arr[t]>e.arr[r]&&(l^=1);return l}function a3(e){var t,r,n,o;return o=e.ur&1118481,o|=~~o>>3,o|=~~o>>6,o=o&15|~~o>>12&48,n=e.ul&1118481,n|=~~n>>3,n|=~~n>>6,n=n&15|~~n>>12&48,r=e.dr&1118481,r|=~~r>>3,r|=~~r>>6,r=r&15|~~r>>12&48,t=e.dl&1118481,t|=~~t>>3,t|=~~t>>6,t=t&15|~~t>>12&48,Pl(s3(e)<<24|n<<18|o<<12|t<<6|r)}function f3(e,t){var r,n;for(r=0;r<8;++r)e.prm[r]=~~(~~Zt(e,r*3+1)>>1<<24)>>24;for(t.cornperm=Gl(e.prm),t.topEdgeFirst=Zt(e,0)==Zt(e,1),r=t.topEdgeFirst?2:0,n=0;n<4;r+=3,++n)e.prm[n]=~~(~~Zt(e,r)>>1<<24)>>24;for(t.botEdgeFirst=Zt(e,12)==Zt(e,13),r=t.botEdgeFirst?14:12;n<8;r+=3,++n)e.prm[n]=~~(~~Zt(e,r)>>1<<24)>>24;t.edgeperm=Gl(e.prm),t.ml=e.ml}function Zt(e,t){var r;return t<6?r=~~e.ul>>(5-t<<2):t<12?r=~~e.ur>>(11-t<<2):t<18?r=~~e.dl>>(17-t<<2):r=~~e.dr>>(23-t<<2),~~((r&15)<<24)>>24}function B2(e,t,r){t<6?(e.ul&=~(15<<(5-t<<2)),e.ul|=r<<(5-t<<2)):t<12?(e.ur&=~(15<<(11-t<<2)),e.ur|=r<<(11-t<<2)):t<18?(e.dl&=~(15<<(17-t<<2)),e.dl|=r<<(17-t<<2)):(e.dr&=~(15<<(23-t<<2)),e.dr|=r<<(23-t<<2))}function D2(){this.arr=[],this.prm=[]}async function u3(){let e=await ve();var t,r,n,o,l,i,s,a,f;for(t=new D2,n=Co[e(3678)],l=19088743<<1|286331153,o=19088743<<1,s=i=8,r=0;r<24;r++)(n>>r&1)==0?(a=e(i)<<2,B2(t,23-r,o>>a&15),f=(1<<a)-1,o=(o&f)+(o>>4&~f),--i):(a=e(s)<<2,B2(t,23-r,l>>a&15),B2(t,22-r,l>>a&15),f=(1<<a)-1,l=(l&f)+(l>>4&~f),--s,++r);return t.ml=e(2),t}function g3(){}function p3(e){var t,r,n,o,l,i;for(i3(e.Search_d,e.Search_c),n=0;n<e.Search_length1;++n)Xc(e.Search_d,e.Search_move[n]);for(f3(e.Search_d,e.Search_sq),r=e.Search_sq.edgeperm,t=e.Search_sq.cornperm,l=e.Search_sq.ml,i=Math.max(xe[e.Search_sq.edgeperm<<1|l],xe[e.Search_sq.cornperm<<1|l]),n=i;n<e.Search_maxlen2;++n)if(zs(e,r,t,e.Search_sq.topEdgeFirst,e.Search_sq.botEdgeFirst,l,n,e.Search_length1,0)){for(o=0;o<n;++o)Xc(e.Search_d,e.Search_move[e.Search_length1+o]);return e.Search_sol_string=c3(e,n+e.Search_length1),!0}return!1}function c3(e,t){for(var r="",n=0,o=0,l=t-1;l>=0;l--){var i=e.Search_move[l];i>0?(i=12-i,n=i>6?i-12:i):i<0?(i=12+i,o=i>6?i-12:i):(n==0&&o==0?r+=" / ":r+="("+n+", "+o+") / ",n=o=0)}return(n!==0||o!==0)&&(r+="("+n+", "+o+")"),r}function Cs(e,t,r,n,o,l){var i,s,a;if(r==0&&n<4)return n==0&&p3(e);if(l!=0&&(a=Ps[t],s=je[a],s<n&&(e.Search_move[o]=0,Cs(e,a,s,n-1,o+1,0))))return!0;if(a=t,l<=0){for(i=0;i+=Tl[a],a=~~i>>4,i&=15,!(i>=12||(s=je[a],s>n));)if(s<n&&(e.Search_move[o]=i,Cs(e,a,s,n-1,o+1,1)))return!0}if(a=t,l<=1){for(i=0;i+=Ml[a],a=~~i>>4,i&=15,!(i>=6||(s=je[a],s>n));)if(s<n&&(e.Search_move[o]=-i,Cs(e,a,s,n-1,o+1,2)))return!0}return!1}function zs(e,t,r,n,o,l,i,s,a){var f,u,g,p,c,L,m;if(i==0&&!n&&o||a!=0&&n==o&&(g=Ol[t],u=Ol[r],xe[g<<1|1-l]<i&&xe[u<<1|1-l]<i&&(e.Search_move[s]=0,zs(e,g,u,n,o,1-l,i-1,s+1,0))))return!0;if(a<=0)for(m=!n,g=m?_n[t]:t,u=m?r:_n[r],p=m?1:2,c=xe[g<<1|l],L=xe[u<<1|l];p<12&&c<=i&&c<=i;){if(c<i&&L<i&&(e.Search_move[s]=p,zs(e,g,u,m,o,l,i-1,s+1,1)))return!0;m=!m,m?(g=_n[g],c=xe[g<<1|l],p+=1):(u=_n[u],L=xe[u<<1|l],p+=2)}if(a<=1)for(f=!o,g=f?En[t]:t,u=f?r:En[r],p=f?1:2,c=xe[g<<1|l],L=xe[u<<1|l];p<(i>3?6:12)&&c<=i&&c<=i;){if(c<i&&L<i&&(e.Search_move[s]=-p,zs(e,g,u,n,f,l,i-1,s+1,2)))return!0;f=!f,f?(g=En[g],c=xe[g<<1|l],p+=1):(u=En[u],L=xe[u<<1|l],p+=2)}return!1}function m3(e,t){var r;for(e.Search_c=t,r=a3(t),e.Search_length1=je[r];e.Search_length1<100&&(e.Search_maxlen2=Math.min(31-e.Search_length1,17),!Cs(e,r,je[r],e.Search_length1,0,-1));++e.Search_length1);return e.Search_sol_string}function tm(){this.Search_move=[],this.Search_d=new D2,this.Search_sq=new nm}function L3(){}function B3(){$c||($c=!0,Nl=[0,3,6,12,15,24,27,30,48,51,54,60,63],Co=[],je=[],Tl=[],Ml=[],Ps=[],h3())}function R3(e){var t,r;t=0,r=0;do(e.bottom&2048)==0?(t+=1,e.bottom=e.bottom<<1):(t+=2,e.bottom=e.bottom<<2^12291),r=1-r;while((kn(e.bottom&63)&1)!=0);return(kn(e.bottom)&2)==0&&(e.Shape_parity^=r),t}function R2(e){var t;return t=lm(Co,e.top<<12|e.bottom)<<1|e.Shape_parity,t}function d2(e,t){e.Shape_parity=t&1,e.top=Co[~~t>>1],e.bottom=e.top&4095,e.top>>=12}function d3(e){var t,r;t=0,r=0;do(e.top&2048)==0?(t+=1,e.top=e.top<<1):(t+=2,e.top=e.top<<2^12291),r=1-r;while((kn(e.top&63)&1)!=0);return(kn(e.top)&2)==0&&(e.Shape_parity^=r),t}function rm(){}function Pl(e){var t;return t=lm(Co,e&16777215)<<1|~~e>>24,t}function h3(){var e,t,r,n,o,l,i,s,a,f,u,g,p,c,L,m;for(e=0,i=0;i<28561;++i)l=Nl[i%13],r=Nl[~~(i/13)%13],g=Nl[~~(~~(i/13)/13)%13],u=Nl[~~(~~(~~(i/13)/13)/13)],p=u<<18|g<<12|r<<6|l,kn(p)==16&&(Co[e++]=p);for(f=new rm,i=0;i<7356;++i)d2(f,i),Tl[i]=d3(f),Tl[i]|=R2(f)<<4,d2(f,i),Ml[i]=R3(f),Ml[i]|=R2(f)<<4,d2(f,i),m=f.top&63,c=kn(m),L=kn(f.bottom&4032),f.Shape_parity^=1&~~(c&L)>>1,f.top=f.top&4032|~~f.bottom>>6&63,f.bottom=f.bottom&63|m<<6,Ps[i]=R2(f);for(i=0;i<7536;++i)je[i]=-1;for(je[Pl(14378715)]=0,je[Pl(31157686)]=0,je[Pl(23967451)]=0,je[Pl(7191990)]=0,n=4,o=0,t=-1;n!=o;)for(o=n,++t,i=0;i<7536;++i)if(je[i]==t){a=0,s=i;do s=Tl[s],a+=s&15,s>>=4,je[s]==-1&&(++n,je[s]=t+1);while(a!=12);a=0,s=i;do s=Ml[s],a+=s&15,s>>=4,je[s]==-1&&(++n,je[s]=t+1);while(a!=12);s=Ps[i],je[s]==-1&&(++n,je[s]=t+1)}}function F3(){}function D3(){if(!em){em=!0,xe=[],Ol=[],_n=[],En=[],om=[1,1,2,6,24,120,720,5040],vn=[];for(var e=0;e<12;++e)vn[e]=[];A3()}}function nm(){}function Gl(e){var t,r,n,o;for(r=0,o=1985229328,t=0;t<7;++t)n=e[t]<<2,r=(8-t)*r+(~~o>>n&7),o-=286331152<<n;return r&65535}function A3(){var e,t,r,n,o,l,i,s,a,f,u,g,p;for(o=0;o<12;++o)for(vn[o][0]=1,vn[o][o]=1,a=1;a<o;++a)vn[o][a]=vn[o-1][a-1]+vn[o-1][a];for(g=[],o=0;o<40320;++o)h2(g,o),p=g[2],g[2]=g[4],g[4]=p,p=g[3],g[3]=g[5],g[5]=p,Ol[o]=Gl(g),h2(g,o),p=g[0],g[0]=g[1],g[1]=g[2],g[2]=g[3],g[3]=p,_n[o]=Gl(g),h2(g,o),p=g[4],g[4]=g[5],g[5]=g[6],g[6]=g[7],g[7]=p,En[o]=Gl(g);for(o=0;o<80640;++o)xe[o]=-1;for(xe[0]=0,t=0,r=1;r<80640;){s=t>=11,n=s?-1:t,e=s?t:-1,++t;e:for(o=0;o<80640;++o)if(xe[o]==n){if(l=~~o>>1,u=o&1,i=Ol[l]<<1|1-u,xe[i]==e&&(++r,xe[s?o:i]=~~(t<<24)>>24,s))continue e;for(i=l,f=0;f<4;++f)if(i=_n[i],xe[i<<1|u]==e&&(++r,xe[s?o:i<<1|u]=~~(t<<24)>>24,s))continue e;for(f=0;f<4;++f)if(i=En[i],xe[i<<1|u]==e&&(++r,xe[s?o:i<<1|u]=~~(t<<24)>>24,s))continue e}}}function h2(e,t){var r,n,o,l,i;for(i=1985229328,r=0;r<7;++r)o=om[7-r],l=~~(t/o),t-=l*o,l<<=2,e[r]=~~((~~i>>l&7)<<24)>>24,n=(1<<l)-1,i=(i&n)+(~~i>>4&~n);e[7]=~~(i<<24)>>24}function y3(){}function kn(e){return e-=~~e>>1&1431655765,e=(~~e>>2&858993459)+(e&858993459),e=(~~e>>4)+e&252645135,e+=~~e>>8,e+=~~e>>16,e&63}function lm(e,t){var r,n,o,l;for(n=0,r=e.length-1;n<=r;)if(o=n+(~~(r-n)>>1),l=e[o],l<t)n=o+1;else if(l>t)r=o-1;else return o;return-n-1}async function w3(){return(await S3()).scramble_string}var ke,$c,Ml,Co,je,Tl,Ps,Nl,em,En,vn,xe,_n,Ol,om,F2,U3,x3,b3,S3,im=y(()=>{"use strict";yt();ke=D2.prototype=g3.prototype;ke.dl=10062778;ke.dr=14536702;ke.ml=0;ke.ul=70195;ke.ur=4544119;ke=tm.prototype=L3.prototype;ke.Search_c=null;ke.Search_length1=0;ke.Search_maxlen2=0;ke.Search_sol_string=null;$c=!1;ke=rm.prototype=F3.prototype;ke.bottom=0;ke.Shape_parity=0;ke.top=0;em=!1;ke=nm.prototype=y3.prototype;ke.botEdgeFirst=!1;ke.cornperm=0;ke.edgeperm=0;ke.ml=0;ke.topEdgeFirst=!1;F2=!1,U3=function(e,t,r){F2||(B3(),D3()),r&&r("Done initializing Square-1."),F2=!0,e?.()},x3=async function(){return F2||U3(),u3()},b3=function(e){var t=new tm;return m3(t,e)},S3=async function(){var e=await x3(),t=b3(e);return{state:e,scramble_string:t}}});var sm={};ht(sm,{getRandomSquare1ScrambleString:()=>w3});var am=y(()=>{"use strict";im()});var S2=Symbol("Comlink.proxy"),dm=Symbol("Comlink.endpoint"),hm=Symbol("Comlink.releaseProxy"),Ts=Symbol("Comlink.thrown"),w2=e=>typeof e=="object"&&e!==null||typeof e=="function",Fm={canHandle:e=>w2(e)&&e[S2],serialize(e){let{port1:t,port2:r}=new MessageChannel;return zo(e,t),[r,[r]]},deserialize(e){return e.start(),ym(e)}},Dm={canHandle:e=>w2(e)&&Ts in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},v2=new Map([["proxy",Fm],["throw",Dm]]);function zo(e,t=self){t.addEventListener("message",function r(n){if(!n||!n.data)return;let{id:o,type:l,path:i}=Object.assign({path:[]},n.data),s=(n.data.argumentList||[]).map(Vr),a;try{let f=i.slice(0,-1).reduce((g,p)=>g[p],e),u=i.reduce((g,p)=>g[p],e);switch(l){case"GET":a=u;break;case"SET":f[i.slice(-1)[0]]=Vr(n.data.value),a=!0;break;case"APPLY":a=u.apply(f,s);break;case"CONSTRUCT":{let g=new u(...s);a=bm(g)}break;case"ENDPOINT":{let{port1:g,port2:p}=new MessageChannel;zo(e,p),a=xm(g,[g])}break;case"RELEASE":a=void 0;break;default:return}}catch(f){a={value:f,[Ts]:0}}Promise.resolve(a).catch(f=>({value:f,[Ts]:0})).then(f=>{let[u,g]=Os(f);t.postMessage(Object.assign(Object.assign({},u),{id:o}),g),l==="RELEASE"&&(t.removeEventListener("message",r),E2(t))})}),t.start&&t.start()}function Am(e){return e.constructor.name==="MessagePort"}function E2(e){Am(e)&&e.close()}function ym(e,t){return Gs(e,[],t)}function Wl(e){if(e)throw new Error("Proxy has been released and is not useable")}function Gs(e,t=[],r=function(){}){let n=!1,o=new Proxy(r,{get(l,i){if(Wl(n),i===hm)return()=>Cn(e,{type:"RELEASE",path:t.map(s=>s.toString())}).then(()=>{E2(e),n=!0});if(i==="then"){if(t.length===0)return{then:()=>o};let s=Cn(e,{type:"GET",path:t.map(a=>a.toString())}).then(Vr);return s.then.bind(s)}return Gs(e,[...t,i])},set(l,i,s){Wl(n);let[a,f]=Os(s);return Cn(e,{type:"SET",path:[...t,i].map(u=>u.toString()),value:a},f).then(Vr)},apply(l,i,s){Wl(n);let a=t[t.length-1];if(a===dm)return Cn(e,{type:"ENDPOINT"}).then(Vr);if(a==="bind")return Gs(e,t.slice(0,-1));let[f,u]=b2(s);return Cn(e,{type:"APPLY",path:t.map(g=>g.toString()),argumentList:f},u).then(Vr)},construct(l,i){Wl(n);let[s,a]=b2(i);return Cn(e,{type:"CONSTRUCT",path:t.map(f=>f.toString()),argumentList:s},a).then(Vr)}});return o}function Um(e){return Array.prototype.concat.apply([],e)}function b2(e){let t=e.map(Os);return[t.map(r=>r[0]),Um(t.map(r=>r[1]))]}var _2=new WeakMap;function xm(e,t){return _2.set(e,t),e}function bm(e){return Object.assign(e,{[S2]:!0})}function Os(e){for(let[t,r]of v2)if(r.canHandle(e)){let[n,o]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},o]}return[{type:"RAW",value:e},_2.get(e)||[]]}function Vr(e){switch(e.type){case"HANDLER":return v2.get(e.name).deserialize(e.value);case"RAW":return e.value}}function Cn(e,t,r){return new Promise(n=>{let o=Sm();e.addEventListener("message",function l(i){!i.data||!i.data.id||i.data.id!==o||(e.removeEventListener("message",l),n(i.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),r)})}function Sm(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}function wm(e){let t=new WeakMap;return{postMessage:e.postMessage.bind(e),addEventListener:(r,n)=>{let o=l=>{"handleEvent"in n?n.handleEvent({data:l}):n({data:l})};e.on("message",o),t.set(n,o)},removeEventListener:(r,n)=>{let o=t.get(n);!o||(e.off("message",o),t.delete(n))},nodeWorker:e}}var k2=wm;var vm=typeof globalThis.Worker>"u"&&typeof globalThis.WorkerNavigator>"u",Em="node:w-orker-_threa-ds",_m=()=>Em.replace(/-/g,"");async function km(){let{parentPort:e}=await import(_m()).catch();return k2(e)}function C2(e){vm?(async()=>zo(e,await km()))():zo(e)}He();rr();At();He();rr();yt();At();Be();Be();var sl=class extends en{constructor(r){super();this.metric=r}traverseAlg(r){let n=0;for(let o of r.childAlgNodes())n+=this.traverseAlgNode(o);return n}traverseGrouping(r){let n=r.alg;return this.traverseAlg(n)*Math.abs(r.amount)}traverseMove(r){return this.metric(r)}traverseCommutator(r){return 2*(this.traverseAlg(r.A)+this.traverseAlg(r.B))}traverseConjugate(r){return 2*this.traverseAlg(r.A)+this.traverseAlg(r.B)}traversePause(r){return 0}traverseNewline(r){return 0}traverseLineComment(r){return 0}};function Zu(e){return"A"<=e&&e<="Z"}function EL(e){let t=e.family;return Zu(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:1}function _L(e){return 1}function kL(e){let t=e.family;return Zu(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:Math.abs(e.amount)}var _0=new sl(EL),k0=_0.traverseAlg.bind(_0),CL=new sl(_L),zL=_0.traverseAlg.bind(CL),Hu=new sl(kL),PL=Hu.traverseAlg.bind(Hu);Be();var C0=class extends en{traverseAlg(t){let r=0;for(let n of t.childAlgNodes())r+=this.traverseAlgNode(n);return r}traverseGrouping(t){return this.traverseAlg(t.alg)*Math.abs(t.amount)}traverseMove(t){return 1}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 1}traverseNewline(t){return 0}traverseLineComment(t){return 0}},Ju=new C0,NL=Ju.traverseAlg.bind(Ju);yt();var ML=2,TL=!0,GL=!1;function OL(e,t){let r=[];return t.forEach(function(n){let o=new B(n);if(o.amount!==1)throw new Error("SGS cannot handle def moves with an amount other than 1 yet.");let l=e.identityTransformation();for(let i=1;l=l.applyMove(o),!l.isIdentityTransformation();i++)r.push({move:o.modified({amount:i}),transformation:l})}),r}var _t=class{constructor(t,r,n){this.kpuzzle=t;this.sgs=r;this.searchMoves=OL(this.kpuzzle,n??Object.keys(this.kpuzzle.definition.moves))}async solve(t,r=ML,n){let o=t.experimentalToTransformation();if(!o)throw new Error("distinguishable pieces are not supported in tremble solver yt");let l=null,i=1e6,s=(a,f,u)=>{if(f===0){let g=this.sgsPhaseSolve(a,i);if(!g)return;let p=u.concat(g).simplify({collapseMoves:!0,quantumMoveOrder:n}),c=k0(p);(l===null||c<i)&&(GL&&(console.log(\`New best (\${c} moves): \${p.toString()}\`),console.log(\`Tremble moves are: \${u.toString()}\`)),l=p,i=c);return}for(let g of this.searchMoves)s(a.applyTransformation(g.transformation),f-1,u.concat([g.move]))};for(let a=0;a<=r;a++)s(o,a,new E);if(l===null)throw new Error("SGS search failed.");return l}sgsPhaseSolve(t,r){let n=new mt,o=t;for(let l of this.sgs.ordering){let i=l.pieceOrdering,s="",a=o.invert();for(let u=0;u<i.length;u++){let g=i[u],p=g.orbitName,c=g.permutationIdx;s+=\` \${a.transformationData[p].permutation[c]} \${a.transformationData[p].orientation[c]}\`}let f=l.lookup[s];if(!f)throw new Error("Missing algorithm in sgs or esgs?");if(n.experimentalPushAlg(f.alg),n.experimentalNumAlgNodes()>=r)return null;if(o=o.applyTransformation(f.transformation),TL)for(let u=0;u<i.length;u++){let g=i[u],p=g.orbitName,c=g.permutationIdx;if(o.transformationData[p].permutation[c]!==c||o.transformationData[p].orientation[c]!==0)throw new Error("bad SGS :-(")}}return n.toAlg()}};async function yi(e,t){let r=await nr(),n=e.identityTransformation();for(let o of t.ordering){let l=r(Object.values(o.lookup));n=n.applyTransformation(l.transformation)}return n.toKState()}Qt();var ft=We(()=>Promise.resolve().then(()=>(i1(),l1)));var $L=3,s1=null;async function a1(){return s1||(s1=(async()=>{let e=await(await ft).cachedData222();return new _t(await Pe["2x2x2"].kpuzzle(),e,"URFLBD".split(""))})())}async function f1(){await a1()}async function T0(e){return we(),await(await a1()).solve(e,$L,()=>4)}async function eB(e,t,r,n){let o=await ve();await Vu(r.stateData[t].pieces);let l=e.definition.orbits[t],i=r.stateData[t].orientation,s=0;for(let a=0;a<l.numPieces;a++){let f=o(l.numOrientations);i[a]=f,s+=f}n&&"orientationSum"in n&&(i[0]=((i[0]+n.orientationSum-s)%l.numOrientations+l.numOrientations)%l.numOrientations)}async function tB(){let e=await Pe["2x2x2"].kpuzzle(),t=new ge(e,JSON.parse(JSON.stringify(e.startState().stateData)));return await eB(e,"CORNERS",t,{orientationSum:0}),t}async function u1(){return await T0(await tB())}ua();Ui();Qt();var Na=We(()=>Promise.resolve().then(()=>(Lp(),mp)));var Ld=[[null,"x","x2","x'","z","z'"],[null,"y","y2","y'"]];async function Bp(){return(await Na).initialize()}async function Ma(){return(await Na).random444Scramble()}async function Rp(){return Yn(await Ma(),Ld)}Ui();Be();yt();function Bd(e){switch(e){case 5:return 60;case 6:return 80;default:return 100}}var Rd=[["U","D"],["L","R"],["F","B"]],dp=new Map;function dd(e){let t=dp.get(e);if(t)return t;let r=[];for(let n of Rd){let o=[];r.push(o);for(let l of n){o.push(new C(l)),e>3&&o.push(new C(\`\${l}w\`));for(let i=3;i<=e/2;i++)o.push(new C(\`\${l}w\`,i))}}return dp.set(e,r),r}async function ur(e){let t=await ve(),r=await nr(),n=r,o=dd(e),l=Bd(e),i=new mt,s=0,a=new Set;for(;i.experimentalNumAlgNodes()<l;){let f=t(3);f!==s&&a.clear(),s=f;let u=r(o[s]),g=u.toString();a.has(g)||(a.add(g),i.push(new B(u,n([1,2,-1]))))}return i.toAlg()}var hd=[[null,"3Rw","3Rw2","3Rw'","3Fw","3Fw'"],[null,"3Dw","3Dw2","3Dw'"]];async function hp(){return Yn(await ur(5),hd)}Be();rr();Qt();At();Qt();var $p=We(()=>Promise.resolve().then(()=>(Xp(),Yp)));var EU=We(()=>Promise.resolve().then(()=>(n2(),r2)));async function cc(){return we(),new E(await(await $p).randomFTOScrambleString())}At();Qt();var bc=We(()=>Promise.resolve().then(()=>(xc(),Uc)));async function Sc(){return we(),(await bc).getRandomKilominxScramble()}Be();At();Qt();var Wc=We(()=>Promise.resolve().then(()=>(Ic(),Oc)));async function Kc(){return we(),new E(await(await Wc).randomMasterTetraminxScrambleString())}He();At();var YF=2,Qc=null;async function XF(){return Qc||(Qc=(async()=>{let e=await(await ft).cachedSGSDataMegaminx();return new _t(await(await ft).cachedMegaminxKPuzzleWithoutMO(),e,["U","R","F","L","BR","BL","FR","FL","DR","DL","B","D"])})())}async function jc(e){we();let t=await XF(),r=JSON.parse(JSON.stringify(e.stateData));r.CENTERS.orientation=new Array(12).fill(0);let n=new ge(await(await ft).cachedMegaminxKPuzzleWithoutMO(),r);return await t.solve(n,YF,()=>5)}rr();At();var $F=3,qc=null;async function e3(){return qc||(qc=(async()=>{let e=await(await ft).sgsDataPyraminx();return new _t(await Pe.pyraminx.kpuzzle(),e,"RLUB".split(""))})())}async function m2(e){return we(),await(await e3()).solve(e,$F,()=>3)}async function t3(){return we(),yi(await Pe.pyraminx.kpuzzle(),await(await ft).sgsDataPyraminxFixedOrientation())}async function Vc(){return m2(await t3())}At();Qt();var Hc=We(()=>Promise.resolve().then(()=>(n2(),r2)));async function Zc(){return we(),(await Hc).getRandomRediCubeScramble()}He();At();var r3=3,Jc=null;async function n3(){return Jc||(Jc=(async()=>{let e=await(await ft).sgsDataSkewb();return new _t(await(await ft).skewbKPuzzleWithoutMOCached(),e,"RLUB".split(""))})())}function o3(e){return new ge(e.kpuzzle,{CORNERS:e.stateData.CORNERS,CENTERS:{pieces:e.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}})}async function L2(e){return we(),await(await n3()).solve(o3(e),r3,n=>n.family==="y"?4:3)}async function l3(){return yi(await(await ft).skewbKPuzzleWithoutMOCached(),await(await ft).sgsDataSkewbFixedCorner())}async function Yc(){return L2(await l3())}Be();Qt();var fm=We(()=>Promise.resolve().then(()=>(am(),sm)));async function um(){return E.fromString(await(await fm).getRandomSquare1ScrambleString())}var v3=1e3;Wu(!0);var cm=!0;function E3(e){cm=e}function gm(){return(typeof performance>"u"?Date:performance).now()}async function Ce(e,t,r){if(!cm)return t();let n=gm(),o=t();o?.then&&await o;let l=gm();return console.warn(\`\${e}\${r?.isPrefetch?" (prefetched)":""}: \${Math.round(l-n)}ms\`),o}var A2=new Map,y2=null;async function pm(e,t){switch(e){case"222":return Ce("random222Scramble",u1,{isPrefetch:t?.isPrefetch});case"333":case"333oh":case"333ft":return Ce("random333Scramble",fo,{isPrefetch:t?.isPrefetch});case"333fm":return Ce("random333FewestMovesScramble",og);case"333bf":case"333mb":return Ce("random333OrientedScramble",ng);case"444":return Ce("random444Scramble",Ma,{isPrefetch:t?.isPrefetch});case"444bf":return Ce("random444OrientedScramble",Rp);case"555":return Ce("bigCubeScramble(5)",ur.bind(ur,5));case"555bf":return Ce("oriented555RandomMoves",hp);case"666":return Ce("bigCubeScramble(6)",ur.bind(ur,6));case"777":return Ce("bigCubeScramble(7)",ur.bind(ur,7));case"skewb":return Ce("randomSkewbFixedCornerScramble",Yc);case"pyram":return Ce("randomPyraminxScrambleFixedOrientation",Vc);case"sq1":return Ce("getRandomSquare1Scramble",um,{isPrefetch:t?.isPrefetch});case"fto":return Ce("randomFTOScramble",cc,{isPrefetch:t?.isPrefetch});case"master_tetraminx":return Ce("randomMasterTetraminxScramble",Kc);case"kilominx":return Ce("randomKilominxScramble",Sc,{isPrefetch:t?.isPrefetch});case"redi_cube":return Ce("randomRediCubeScramble",Zc,{isPrefetch:t?.isPrefetch});default:throw new Error(\`unsupported event: \${e}\`)}}var U2="auto",x2={initialize:async e=>{switch(e){case"222":return Ce("preInitialize222",f1);case"333":case"333oh":case"333ft":return Ce("initialize333",rg);case"444":return Ce("initialize444",Bp);default:throw new Error(\`unsupported event: \${e}\`)}},setScramblePrefetchLevel(e){U2=e},randomScrambleForEvent:async e=>{let t=A2.get(e);return t?A2.delete(e):t=pm(e),U2!=="none"&&t.then(()=>{y2&&clearTimeout(y2),y2=setTimeout(()=>{A2.set(e,pm(e,{isPrefetch:!0}))},U2==="immediate"?0:v3)}),t},randomScrambleStringForEvent:async e=>(await x2.randomScrambleForEvent(e)).toString(),solve333ToString:async e=>{let t=new ge(await Pe["3x3x3"].kpuzzle(),e);return(await fa(t)).toString()},solve222ToString:async e=>{let t=new ge(await Pe["2x2x2"].kpuzzle(),e);return(await T0(t)).toString()},solveSkewbToString:async e=>{let t=new ge(await Pe.skewb.kpuzzle(),e);return(await L2(t)).toString()},solvePyraminxToString:async e=>{let t=new ge(await Pe.pyraminx.kpuzzle(),e);return(await m2(t)).toString()},solveMegaminxToString:async e=>{let t=new ge(await Pe.megaminx.kpuzzle(),e);return(await jc(t)).toString()},setDebugMeasurePerf:async e=>{E3(e)}};C2(x2);
`;export{e as workerSource};
