import{d as u,r as a,o as r,c,a as n,b as t,w as y,e as g,f as x}from"./index.4877fd47.js";const p=u({__name:"demo",setup(s){const e=[{label:"ip",prop:"searchIpRef",type:"textarea",defaultValue:"",customAttrs:{placeholder:"\u652F\u6301\u591A\u4E2AIP, \u4E00\u884C\u4E00\u4E2A",allowClear:!0}},{label:"\u6807\u7B7E",prop:"searchTag",type:"select",options:[{value:"",label:"\u6240\u6709"},{value:"RUNNING",label:"\u8FD0\u884C\u4E2D"},{value:"TERMINATED",label:"\u5DF2\u5173\u673A"},{value:"CREATE_FAIL",label:"\u521B\u5EFA\u5931\u8D25"}],customAttrs:{placeholder:"\u8BF7\u9009\u62E9"}},{label:"\u540D\u79F0",prop:"name2",type:"tree-select",defaultValue:[],options:[{value:"RUNNING",label:"\u8FD0\u884C\u4E2D"},{value:"TERMINATED",label:"\u5DF2\u5173\u673A"},{value:"CREATE_FAIL",label:"\u521B\u5EFA\u5931\u8D25"}],customAttrs:{placeholder:"\u8BF7\u9009\u62E9"}},{label:"\u540D\u79F0",prop:"name3",type:"textarea",defaultValue:"",customAttrs:{placeholder:"\u652F\u6301\u591A\u4E2AIP",allowClear:!0}},{label:"\u65F6\u95F4",prop:"time",type:"time-range",defaultValue:[]},{label:"\u540D\u79F0",prop:"name5",type:"input",defaultValue:"test",customAttrs:{placeholder:"\u8BF7\u8F93\u5165"}},{label:"\u540D\u79F0",prop:"name6",type:"input",defaultValue:"test",customAttrs:{placeholder:"\u8BF7\u8F93\u5165"}},{label:"\u540D\u79F0",prop:"name7",type:"input",defaultValue:"test",customAttrs:{placeholder:"\u8BF7\u8F93\u5165"}},{label:"\u540D\u79F0",prop:"name8",type:"input",customAttrs:{placeholder:"\u8BF7\u8F93\u5165"}},{label:"\u540D\u79F0",prop:"name9",type:"input",customAttrs:{placeholder:"\u8BF7\u8F93\u5165"}},{label:"\u540D\u79F0",prop:"name10",type:"input",customAttrs:{placeholder:"\u8BF7\u8F93\u5165"}},{label:"\u540D\u79F0",prop:"name11",type:"input",customAttrs:{placeholder:"\u8BF7\u8F93\u5165"}}];return(o,i)=>{const l=a("y-table-filter");return r(),c("div",null,[n(l,{items:e,"filter-count":[4,5,6]})])}}});var d={};const h={class:"markdown-body"},m=g(" \u52A0\u8F7D demo \u7EC4\u4EF6 start \u52A0\u8F7D demo \u7EC4\u4EF6 end \u6B63\u6587\u5F00\u59CB "),b=t("h1",null,"\u4E1A\u52A1\u7B5B\u9009\u7EC4\u4EF6",-1),_=t("p",null,"\u652F\u6301\u5404\u79CD\u7C7B\u578B\u7684\u9AD8\u7EA7\u641C\u7D22\u7EC4\u4EF6",-1),F=t("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),f=t("li",null,[t("p",null,"\u7EC4\u4EF6\u54CD\u5E94\u5F0F\u5E03\u5C40\uFF0C\u9ED8\u8BA4\u663E\u793A\u4E24\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7 maxLineCount \u914D\u7F6E\u6700\u591A\u663E\u793A\u884C\u6570")],-1),A=t("li",null,[t("p",null,"\u6BCF\u884C\u4E2A\u6570\uFF1A \u5982\u679C\u542B\u6709 time-range\uFF0C\u5219\u5728<1600,\u663E\u793A 3 \u4E2A\uFF0C\u5426\u5219\u663E\u793A 4 \u4E2A\uFF1B\u5982\u679C\u4E0D\u542B\u6709 time-range\uFF0C\u5219\u5728<1600,\u663E\u793A 4 \u4E2A\uFF0C\u5426\u5219\u663E\u793A 5 \u4E2A\uFF1B\u6BCF\u884C\u56FA\u5B9A\u663E\u793A\u51E0\u4E2A\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u914D\u7F6E filterCount,\u9ED8\u8BA4\u503C\u5373\u662F\u524D\u9762\u7684 [3, 4, 5]")],-1),D=t("p",null,"label\uFF1A\u9ED8\u8BA4 label 110px\uFF08\u7EA6 6 \u4E2A\u4E2D\u6587\u5B57\u7B26\uFF0C\u8D85\u51FA\u2026tooltip \u663E\u793A\uFF09\uFF0C\u56FA\u5B9A\u5BBD\u5EA6\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u914D\u7F6E labelWidth",-1),E=x('<h2>YTableFilter</h2><h3>\u5C5E\u6027</h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code class="">searchLoading</code></td><td style="text-align:center;">\u67E5\u8BE2\u6309\u94AE loading</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;"><code class="">false</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">isSearchImdate</code></td><td style="text-align:center;">\u662F\u5426\u7ACB\u5373\u641C\u7D22</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;"><code class="">true</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">isShowReset</code></td><td style="text-align:center;">\u662F\u5426\u663E\u793A\u91CD\u7F6E</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;"><code class="">true</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">filterCount</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49 \u6BCF\u884C\u663E\u793A\u4E2A\u6570,\u914D\u7F6E\u5FC5\u987B 3 \u4F4D\u6570\u7EC4</td><td style="text-align:center;">number[]</td><td style="text-align:center;">-</td><td style="text-align:center;">[3,4,5]</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">labelWidth</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49 label \u7684\u5BBD\u5EA6</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;">110px</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">maxLineCount</code></td><td style="text-align:center;">\u6700\u591A\u663E\u793A\u884C\u6570</td><td style="text-align:center;">bumber</td><td style="text-align:center;">-</td><td style="text-align:center;"><code class="">2</code></td><td style="text-align:center;">\u5426</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code class="">onSearch</code></td><td style="text-align:center;">\u67E5\u8BE2\u65B9\u6CD5</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code class="">changeFiledData</code></td><td style="text-align:center;">\u4FEE\u6539 prop \u5B57\u6BB5\u503C\uFF0C\u6E05\u7A7A\u5176\u4ED6\u5B57\u6BB5\u503C\uFF0C\u5E76\u641C\u7D22</td><td style="text-align:center;">(prop: tring, value: any)</td><td style="text-align:center;">prop: \u5BF9\u5E94\u7684\u5B57\u6BB5\u540D\uFF1Bvalue: \u5BF9\u5E94\u5B57\u6BB5\u7684\u503C</td></tr></tbody></table><h2>FilterItem</h2><h3>\u5C5E\u6027\uFF08\u4E3B\u8981\u9488\u5BF9 select \u7C7B\u578B\u7684\u5C5E\u6027\uFF09</h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code class="">defaultValue</code></td><td style="text-align:center;">\u9ED8\u8BA4\u503C</td><td style="text-align:center;">[String, Array, Number]</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">isImdateRequest</code></td><td style="text-align:center;">\u662F\u5426\u4FEE\u6539\u540E\u7ACB\u5373\u8BF7\u6C42</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;">true</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">customAttrs</code></td><td style="text-align:center;">\u7EC4\u4EF6\u539F\u751F\u5C5E\u6027</td><td style="text-align:center;">Object</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">options</code></td><td style="text-align:center;">\u7EC4\u4EF6\uFF08select/tree-select\uFF09\u7ED1\u5B9A options</td><td style="text-align:center;">Array</td><td style="text-align:center;">-</td><td style="text-align:center;">[]</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">optionsRquest</code></td><td style="text-align:center;">\u83B7\u53D6 options \u7684\u63A5\u53E3\u65B9\u6CD5</td><td style="text-align:center;">Function</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">optionsParams</code></td><td style="text-align:center;">\u8054\u52A8\u7684\u5B57\u6BB5(\u8054\u52A8\u8BF7\u6C42)</td><td style="text-align:center;">Array</td><td style="text-align:center;">-</td><td style="text-align:center;">[]</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">isFixedDefault</code></td><td style="text-align:center;">\u66F4\u65B0 options \u540E\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C value</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;">false</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">isInData</code></td><td style="text-align:center;">options \u8BF7\u6C42\u8FD4\u56DE\u6570\u636E\u662F\u5426\u76F4\u63A5\u5728 data \u8FD4\u56DE</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;">false</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">isShowAll</code></td><td style="text-align:center;">\u662F\u5426\u7ED9 options \u65B0\u589E\u5168\u90E8\u9009\u9879</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;">true</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">dataFiled</code></td><td style="text-align:center;">options \u6570\u636E\u8BF7\u6C42\u8FD4\u56DE\u5728 data \u4E2D\u7684\u5B57\u6BB5</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;">items</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code class="">isDefault0</code></td><td style="text-align:center;">\u662F\u5426\u7528\u7B2C\u4E00\u9879\u4F5C\u4E3A\u9ED8\u8BA4\u503C</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;">false</td><td style="text-align:center;">\u5426</td></tr></tbody></table>',10),k={},v={__name:"README",setup(s,{expose:e}){return e({frontmatter:{}}),(o,i)=>{const l=a("preview");return r(),c("div",h,[m,b,_,F,t("ul",null,[f,A,t("li",null,[D,n(l,{"comp-name":"TableFilter","demo-name":"demo"},{default:y(()=>[n(p)]),_:1})])]),E])}}};typeof d=="function"&&d(v);export{v as default,k as frontmatter};