import{u as w,m as $,h as k,s as F,t as T,r as n,o as g,j as y,k as e,f as t,v as c,x as m,e as B,D as P,y as V,b as h,a as L,z as O,F as q}from"./app-32ca278b.js";const H={class:"grid grid-cols-3 gap-6"},N={class:"col-span-3 sm:col-span-1"},S={__name:"Filter",props:{preRequisites:{type:Object,default(){return{}}}},emits:["refresh","hide"],setup(I,{emit:d}){const r=w(),b=$();k();const i={name:""},s=F({...i}),v=()=>{Object.assign(s,i),l(),d("hide")};T(async()=>{Object.assign(s,{search:r.query.search})});const l=async()=>{await b.push({name:r.name,query:{...r.query,...s}}),d("refresh")};return(a,p)=>{const f=n("BaseInput"),u=n("BaseButton"),_=n("BaseCard");return g(),y(_,null,{footer:e(()=>[t(u,{design:"error",class:"mr-4",onClick:v},{default:e(()=>[c(m(a.$trans("general.cancel")),1)]),_:1}),t(u,{onClick:l},{default:e(()=>[c(m(a.$trans("general.filter")),1)]),_:1})]),default:e(()=>[B("div",H,[B("div",N,[t(f,{type:"text",modelValue:s.name,"onUpdate:modelValue":p[0]||(p[0]=C=>s.name=C),name:"name",label:a.$trans("config.mail.template.props.name")},null,8,["modelValue","label"])])])]),_:1})}}},U={name:"ConfigMailTemplateList"},x=Object.assign(U,{setup(I){const d=$();k();const r=P("emitter"),b="config/mailTemplate/",i=V(!1),s=F({}),v=l=>{Object.assign(s,l)};return(l,a)=>{const p=n("PageHeaderAction"),f=n("ParentTransition"),u=n("DataCell"),_=n("FloatingMenuItem"),C=n("FloatingMenu"),j=n("DataRow"),D=n("DataTable"),M=n("ListItem"),R=n("ConfigPage");return g(),y(R,{"no-background":""},{action:e(()=>[t(p,{name:"ConfigMailTemplate",title:l.$trans("config.mail.template.template"),actions:["filter"],onToggleFilter:a[0]||(a[0]=o=>i.value=!i.value)},null,8,["title"])]),default:e(()=>[t(M,{class:"sm:-mt-4","init-url":b,onSetItems:v},{filter:e(()=>[t(f,{appear:"",visibility:i.value},{default:e(()=>[t(S,{onRefresh:a[1]||(a[1]=o=>h(r).emit("listItems")),onHide:a[2]||(a[2]=o=>i.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[t(f,{appear:"",visibility:!0},{default:e(()=>[t(D,{header:s.headers,meta:s.meta,module:"config.mail.template",onRefresh:a[3]||(a[3]=o=>h(r).emit("listItems"))},{actionButton:e(()=>[]),default:e(()=>[(g(!0),L(q,null,O(s.data,o=>(g(),y(j,{key:o.uuid},{default:e(()=>[t(u,{name:"name"},{default:e(()=>[c(m(o.name),1)]),_:2},1024),t(u,{name:"subject"},{default:e(()=>[c(m(o.subject),1)]),_:2},1024),t(u,{name:"action"},{default:e(()=>[t(C,null,{default:e(()=>[t(_,{icon:"fas fa-arrow-circle-right",as:"link",target:"_blank",href:`/app/config/mail-template/${o.uuid}`},{default:e(()=>[c(m(l.$trans("general.show")),1)]),_:2},1032,["href"]),t(_,{icon:"fas fa-edit",onClick:A=>h(d).push({name:"ConfigMailTemplateEdit",params:{uuid:o.uuid}})},{default:e(()=>[c(m(l.$trans("general.edit")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})]),_:1})}}});export{x as default};
