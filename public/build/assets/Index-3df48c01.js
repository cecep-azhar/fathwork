import{h as T,m as z,s as A,y as $,c as g,t as D,r as v,o as u,j as E,k as m,e as r,f as n,b as t,a as b,x as c,d as P,z as C,F as w,v as I}from"./app-32ca278b.js";const S={class:"w-full bg-secondary py-4 px-8 rounded-lg"},W={key:0,class:"text-xl text-primary text-center"},j={key:1,class:"text-dark-primary text-center"},M={class:"mb-4 text-sm font-medium"},G={class:"grid grid-cols-6 gap-6 mb-4"},J={class:"col-span-6 sm:col-span-2"},K={class:"grid grid-cols-6 gap-6"},O={class:"col-span-6 sm:col-span-3"},Q={class:"col-span-6 sm:col-span-3"},X={class:"col-span-6 sm:col-span-2"},Y={class:"col-span-6 sm:col-span-2"},Z={class:"col-span-6 sm:col-span-2"},ee={class:"grid grid-cols-6 gap-6"},se={class:"col-span-6 sm:col-span-3"},te={class:"col-span-6 sm:col-span-3"},ae={class:"col-span-6 sm:col-span-2"},oe={class:"col-span-6 sm:col-span-2"},le={class:"col-span-6 sm:col-span-2"},ie={__name:"Index",setup(re){const p=T(),B=z(),o=A({dbHost:"",dbPort:"",dbName:"",dbUsername:"",dbPassword:"",name:"",email:"",username:"",password:"",passwordConfirmation:""}),d=$(null),N=g(()=>p.getters["setup/install/getPreRequisites"]),f=g(()=>p.getters["setup/install/getApp"]),l=g(()=>p.getters["setup/install/getFormErrors"]);$(null),D(async()=>{d.value=!0,await p.dispatch("setup/install/fetchPreRequisite",{}).then(a=>{d.value=!1}).catch(a=>{d.value=!1})});const _=()=>{},x=()=>{},k=()=>p.getters["setup/install/hasValidPreRequisite"],F=()=>U("db"),L=()=>U("user"),U=a=>(d.value=!0,p.dispatch("setup/install/validate",{option:a,form:o}).then(e=>(d.value=!1,!0)).catch(e=>(d.value=!1,!1))),H=async()=>{d.value=!0,await p.dispatch("setup/install/finish",{form:o}).then(()=>{d.value=!1,B.push({name:"Login"})}).catch(a=>{d.value=!1})};return(a,e)=>{const h=v("BaseAlert"),V=v("TabContent"),i=v("BaseInput"),q=v("FormWizard"),R=v("BaseLoader");return u(),E(R,{"is-loading":d.value},{default:m(()=>[r("div",S,[n(q,{onComplete:H,"next-button-text":a.$trans("setup.install.next"),"previous-button-text":a.$trans("setup.install.previous"),"finish-button-text":a.$trans("setup.install.finish")},{header:m(()=>[t(f).title?(u(),b("p",W,c(t(f).title+" "+t(f).version),1)):P("",!0),t(f).subtitle?(u(),b("p",j,c(t(f).subtitle),1)):P("",!0)]),default:m(()=>[n(V,{title:a.$trans("setup.install.step",{attribute:1}),description:a.$trans("setup.install.prerequisite_check"),"before-change":k},{default:m(()=>[(u(!0),b(w,null,C(t(N),s=>(u(),b(w,null,[r("h6",M,c(s.title),1),r("div",G,[(u(!0),b(w,null,C(s.items,y=>(u(),b("div",J,[n(h,{design:y.type},{default:m(()=>[I(c(y.message),1)]),_:2},1032,["design"])]))),256))])],64))),256))]),_:1},8,["title","description"]),n(V,{title:a.$trans("setup.install.step",{attribute:2}),description:a.$trans("setup.install.database_setup"),"before-change":F,"after-load":_},{default:m(()=>[r("div",K,[r("div",O,[n(i,{type:"text",modelValue:o.dbHost,"onUpdate:modelValue":e[0]||(e[0]=s=>o.dbHost=s),name:"dbHost",label:a.$trans("setup.install.props.db_host"),error:t(l).dbHost,"onUpdate:error":e[1]||(e[1]=s=>t(l).dbHost=s),autofocus:""},null,8,["modelValue","label","error"])]),r("div",Q,[n(i,{type:"number",modelValue:o.dbPort,"onUpdate:modelValue":e[2]||(e[2]=s=>o.dbPort=s),name:"dbPort",label:a.$trans("setup.install.props.db_port"),error:t(l).dbPort,"onUpdate:error":e[3]||(e[3]=s=>t(l).dbPort=s)},null,8,["modelValue","label","error"])]),r("div",X,[n(i,{type:"text",modelValue:o.dbName,"onUpdate:modelValue":e[4]||(e[4]=s=>o.dbName=s),name:"dbName",label:a.$trans("setup.install.props.db_name"),error:t(l).dbName,"onUpdate:error":e[5]||(e[5]=s=>t(l).dbName=s)},null,8,["modelValue","label","error"])]),r("div",Y,[n(i,{type:"text",modelValue:o.dbUsername,"onUpdate:modelValue":e[6]||(e[6]=s=>o.dbUsername=s),name:"dbUsername",label:a.$trans("setup.install.props.db_username"),error:t(l).dbUsername,"onUpdate:error":e[7]||(e[7]=s=>t(l).dbUsername=s)},null,8,["modelValue","label","error"])]),r("div",Z,[n(i,{type:"password",modelValue:o.dbPassword,"onUpdate:modelValue":e[8]||(e[8]=s=>o.dbPassword=s),name:"dbPassword",label:a.$trans("setup.install.props.db_password"),error:t(l).dbPassword,"onUpdate:error":e[9]||(e[9]=s=>t(l).dbPassword=s)},null,8,["modelValue","label","error"])])])]),_:1},8,["title","description"]),n(V,{title:a.$trans("setup.install.step",{attribute:3}),description:a.$trans("setup.install.account_setup"),"before-change":L,"after-load":x},{default:m(()=>[r("div",ee,[r("div",se,[n(i,{type:"text",modelValue:o.name,"onUpdate:modelValue":e[10]||(e[10]=s=>o.name=s),name:"name",label:a.$trans("setup.install.props.name"),error:t(l).name,"onUpdate:error":e[11]||(e[11]=s=>t(l).name=s)},null,8,["modelValue","label","error"])]),r("div",te,[n(i,{type:"email",modelValue:o.email,"onUpdate:modelValue":e[12]||(e[12]=s=>o.email=s),name:"email",label:a.$trans("setup.install.props.email"),error:t(l).email,"onUpdate:error":e[13]||(e[13]=s=>t(l).email=s),autofocus:""},null,8,["modelValue","label","error"])]),r("div",ae,[n(i,{type:"text",modelValue:o.username,"onUpdate:modelValue":e[14]||(e[14]=s=>o.username=s),name:"username",label:a.$trans("setup.install.props.username"),error:t(l).username,"onUpdate:error":e[15]||(e[15]=s=>t(l).username=s)},null,8,["modelValue","label","error"])]),r("div",oe,[n(i,{type:"password",modelValue:o.password,"onUpdate:modelValue":e[16]||(e[16]=s=>o.password=s),name:"password",label:a.$trans("setup.install.props.password"),error:t(l).password,"onUpdate:error":e[17]||(e[17]=s=>t(l).password=s)},null,8,["modelValue","label","error"])]),r("div",le,[n(i,{type:"password",modelValue:o.passwordConfirmation,"onUpdate:modelValue":e[18]||(e[18]=s=>o.passwordConfirmation=s),name:"passwordConfirmation",label:a.$trans("setup.install.props.password_confirmation"),error:t(l).passwordConfirmation,"onUpdate:error":e[19]||(e[19]=s=>t(l).passwordConfirmation=s)},null,8,["modelValue","label","error"])])])]),_:1},8,["title","description"])]),_:1},8,["next-button-text","previous-button-text","finish-button-text"])])]),_:1},8,["is-loading"])}}};export{ie as default};
