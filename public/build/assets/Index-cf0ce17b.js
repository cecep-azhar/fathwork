import{s as w,r as s,o as v,j,k as e,e as b,f as n,m as R,D as L,y as k,b as i,v as u,x as d,a as N,z as S,F as A}from"./app-32ca278b.js";const E={class:"grid grid-cols-3 gap-6"},M={class:"col-span-3 sm:col-span-1"},O={__name:"Filter",emits:["hide"],setup(B,{emit:m}){const l={search:""},f=w({...l});return(p,r)=>{const c=s("BaseInput"),$=s("FilterForm");return v(),j($,{"init-form":l,form:f,onHide:r[1]||(r[1]=a=>m("hide"))},{default:e(()=>[b("div",E,[b("div",M,[n(c,{type:"text",modelValue:f.search,"onUpdate:modelValue":r[0]||(r[0]=a=>f.search=a),name:"search",label:p.$trans("general.search")},null,8,["modelValue","label"])])])]),_:1},8,["form"])}}},U={name:"ProjectList"},q=Object.assign(U,{setup(B){const m=R(),l=L("emitter"),f="project/",p=k(!1),r=k(!1),c=w({data:[]}),$=a=>{Object.assign(c,a)};return(a,t)=>{const D=s("PageHeaderAction"),P=s("PageHeader"),y=s("BaseImport"),g=s("ParentTransition"),C=s("DataCell"),_=s("DropdownItem"),F=s("DropdownMenu"),h=s("DataRow"),H=s("BaseButton"),T=s("DataTable"),V=s("ListItem");return v(),j(V,{"init-url":f,onSetItems:$},{header:e(()=>[n(P,{title:a.$trans("project.project")},{default:e(()=>[n(D,{url:"projects/",name:"Project",title:a.$trans("project.project"),actions:["create","filter"],"dropdown-actions":["import","print","pdf","excel"],onToggleFilter:t[0]||(t[0]=o=>p.value=!p.value),onToggleImport:t[1]||(t[1]=o=>r.value=!r.value)},null,8,["title"])]),_:1},8,["title"])]),import:e(()=>[n(g,{appear:"",visibility:r.value},{default:e(()=>[n(y,{path:"projects/import",onCancelled:t[2]||(t[2]=o=>r.value=!1),onHide:t[3]||(t[3]=o=>r.value=!1),onCompleted:t[4]||(t[4]=o=>i(l).emit("listItems"))})]),_:1},8,["visibility"])]),filter:e(()=>[n(g,{appear:"",visibility:p.value},{default:e(()=>[n(O,{onRefresh:t[5]||(t[5]=o=>i(l).emit("listItems")),onHide:t[6]||(t[6]=o=>p.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[n(g,{appear:"",visibility:!0},{default:e(()=>[n(T,{header:c.headers,meta:c.meta,module:"project",onRefresh:t[8]||(t[8]=o=>i(l).emit("listItems"))},{actionButton:e(()=>[n(H,{onClick:t[7]||(t[7]=o=>i(m).push({name:"ProjectCreate"}))},{default:e(()=>[u(d(a.$trans("global.add",{attribute:a.$trans("project.project")})),1)]),_:1})]),default:e(()=>[(v(!0),N(A,null,S(c.data,o=>(v(),j(h,{key:o.uuid},{default:e(()=>[n(C,{name:"title"},{default:e(()=>[u(d(o.title),1)]),_:2},1024),n(C,{name:"description"},{default:e(()=>[u(d(o.description),1)]),_:2},1024),n(C,{name:"action"},{default:e(()=>[n(F,null,{default:e(()=>[n(_,{icon:"fas fa-arrow-circle-right",onClick:I=>i(m).push({name:"ProjectShow",params:{uuid:o.uuid}})},{default:e(()=>[u(d(a.$trans("general.show")),1)]),_:2},1032,["onClick"]),n(_,{icon:"fas fa-edit",onClick:I=>i(m).push({name:"ProjectEdit",params:{uuid:o.uuid}})},{default:e(()=>[u(d(a.$trans("general.edit")),1)]),_:2},1032,["onClick"]),n(_,{icon:"fas fa-copy",onClick:I=>i(m).push({name:"ProjectDuplicate",params:{uuid:o.uuid}})},{default:e(()=>[u(d(a.$trans("general.duplicate")),1)]),_:2},1032,["onClick"]),n(_,{icon:"fas fa-trash",onClick:I=>i(l).emit("deleteItem",{uuid:o.uuid})},{default:e(()=>[u(d(a.$trans("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})}}});export{q as default};
