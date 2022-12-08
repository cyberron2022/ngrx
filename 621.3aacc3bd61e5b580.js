"use strict";(self.webpackChunkngrx_demo=self.webpackChunkngrx_demo||[]).push([[621],{7621:(J,p,n)=>{n.r(p),n.d(p,{CustomersModule:()=>O});var m=n(4666),h=n(4466),c=n(208),l=n(5755),t=n(2560),d=n(7490),f=n(2322),C=n(797);let g=(()=>{class s{constructor(){this._filter="",this.changed=new t.vpe}get filter(){return this._filter}set filter(e){this._filter=e,this.changed.emit(this.filter)}ngOnInit(){}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-filter-textbox"]],inputs:{filter:"filter"},outputs:{changed:"changed"},decls:2,vars:1,consts:[["type","text",3,"value","input"]],template:function(e,r){1&e&&(t._uU(0," Filter: "),t.TgZ(1,"input",0),t.NdJ("input",function(a){return r.filter=a.target.value}),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",r.filter))},encapsulation:2}),s})(),Z=(()=>{class s{transform(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275pipe=t.Yjl({name:"capitalize",type:s,pure:!0}),s})();const _=function(s){return["/orders",s]},T=function(s){return["/customers",s]};function y(s,o){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"capitalize"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"td")(10,"a",6),t._uU(11,"Orders"),t.qZA()(),t.TgZ(12,"td")(13,"a",6),t._uU(14,"Edit"),t.qZA()()()),2&s){const e=o.$implicit,r=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,5,e.name)),t.xp6(3),t.Oqu(e.city),t.xp6(2),t.Oqu(t.Dn7(8,7,e.orderTotal,r.currencyCode,"symbol")),t.xp6(3),t.Q6J("routerLink",t.VKq(11,_,e.id)),t.xp6(3),t.Q6J("routerLink",t.VKq(13,T,e.id))}}function A(s,o){if(1&s&&(t.TgZ(0,"tr")(1,"td",3),t._uU(2,"\xa0"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"td",3),t._uU(7,"\xa0"),t.qZA()()),2&s){const e=t.oxw();t.xp6(4),t.hij(" ",t.Dn7(5,1,e.customersOrderTotal,e.currencyCode,"symbol")," ")}}function v(s,o){1&s&&(t.TgZ(0,"tr")(1,"td",7),t._uU(2,"No customers found"),t.qZA()())}let U=(()=>{class s{constructor(e){this.sorterService=e,this._customers=[],this.filteredCustomers=[],this.currencyCode="USD"}get customers(){return this._customers}set customers(e){e&&(this.filteredCustomers=this._customers=e)}ngOnInit(){this.calculateOrders()}calculateOrders(){this.customersOrderTotal=0,this.filteredCustomers.forEach(e=>{this.customersOrderTotal+=e.orderTotal})}filter(e){this.filteredCustomers=e?this.customers.filter(r=>r.name.toLowerCase().indexOf(e.toLowerCase())>-1||r.city.toLowerCase().indexOf(e.toLowerCase())>-1||r.orderTotal.toString().indexOf(e)>-1):this.customers,this.calculateOrders()}sort(e){this.sorterService.sort(this.filteredCustomers,e)}customerTrackBy(e,r){return r.id}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(C.X))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customers-list"]],inputs:{customers:"customers"},decls:19,vars:4,consts:[[3,"changed"],[1,"table","table-hover"],[3,"click"],["colspan","2"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"routerLink"],["colspan","4"]],template:function(e,r){1&e&&(t.TgZ(0,"app-filter-textbox",0),t.NdJ("changed",function(a){return r.filter(a)}),t.qZA(),t._UZ(1,"br")(2,"br"),t.TgZ(3,"table",1)(4,"thead")(5,"tr")(6,"th",2),t.NdJ("click",function(){return r.sort("name")}),t._uU(7,"Name"),t.qZA(),t.TgZ(8,"th",2),t.NdJ("click",function(){return r.sort("city")}),t._uU(9,"City"),t.qZA(),t.TgZ(10,"th",2),t.NdJ("click",function(){return r.sort("orderTotal")}),t._uU(11,"Order Total"),t.qZA(),t.TgZ(12,"th",3),t._uU(13,"\xa0"),t.qZA()()(),t.YNc(14,y,15,15,"tr",4),t.YNc(15,A,8,5,"tr",5),t.YNc(16,v,3,0,"tr",5),t.qZA(),t._uU(17),t._UZ(18,"br")),2&e&&(t.xp6(14),t.Q6J("ngForOf",r.filteredCustomers),t.xp6(1),t.Q6J("ngIf",r.filteredCustomers&&r.filteredCustomers.length),t.xp6(1),t.Q6J("ngIf",!r.filteredCustomers||!r.filteredCustomers.length),t.xp6(1),t.hij("\nNumber of Customers: ",r.filteredCustomers.length,"\n"))},dependencies:[m.sg,m.O5,c.yS,g,m.H9,Z],encapsulation:2}),s})();function b(s,o){if(1&s&&(t.TgZ(0,"div"),t._UZ(1,"app-customers-list",1),t.qZA()),2&s){const e=o.ngIf;t.xp6(1),t.Q6J("customers",e)}}let x=(()=>{class s{constructor(e,r){this.store=e,this.customerSelectors=r,this.title="Customers"}ngOnInit(){this.customers$=this.customerSelectors.customers$,this.loading$=this.customerSelectors.loading$,this.getCustomers()}getCustomers(){this.store.dispatch(new l.Sp)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.yh),t.Y36(f.Hs))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customers"]],decls:5,vars:4,consts:[[4,"ngIf"],[3,"customers"]],template:function(e,r){1&e&&(t.TgZ(0,"h1"),t._uU(1),t.qZA(),t._UZ(2,"br"),t.YNc(3,b,2,1,"div",0),t.ALo(4,"async")),2&e&&(t.xp6(1),t.Oqu(r.title),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,2,r.customers$)))},dependencies:[m.O5,U,m.Ov],encapsulation:2}),s})();var i=n(609);const q=[{path:"",component:x},{path:":id",component:(()=>{class s{constructor(e,r,u,a,L){this.store=e,this.customerSelectors=r,this.router=u,this.formBuilder=a,this.route=L,this.customerForm=this.formBuilder.group({id:[],name:["",i.kI.required],city:["",i.kI.required]})}ngOnInit(){this.sub=this.customerSelectors.customer$.subscribe(r=>{r&&(this.customer=r,this.customerForm.patchValue(this.customer))}),this.loading$=this.customerSelectors.loading$;const e=+this.route.snapshot.paramMap.get("id");this.store.dispatch(new l.iY(e))}submit(){if(this.customerForm.valid){const e={...this.customer,...this.customerForm.value};this.store.dispatch(new l.uu(e)),this.router.navigate(["/customers"])}}add(e){this.store.dispatch(new l.wy(e))}delete(e){this.store.dispatch(new l.QN(e))}update(e){this.store.dispatch(new l.uu(e))}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.yh),t.Y36(f.Hs),t.Y36(c.F0),t.Y36(i.QS),t.Y36(c.gz))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customers-edit"]],decls:25,vars:5,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","formControlName","id","readonly","",1,"form-control"],["type","text","formControlName","name",1,"form-control"],[1,"alert","alert-danger",3,"hidden"],["for","alterEgo"],["type","text","formControlName","city",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["routerLink","/customers"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return r.submit()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"Id"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"div",2)(9,"label",3),t._uU(10,"Name"),t.qZA(),t._UZ(11,"input",5),t.TgZ(12,"div",6),t._uU(13,"Name is required"),t.qZA()(),t.TgZ(14,"div",2)(15,"label",7),t._uU(16,"City"),t.qZA(),t._UZ(17,"input",8),t.TgZ(18,"div",6),t._uU(19,"Alter Ego is required"),t.qZA()(),t.TgZ(20,"button",9),t._uU(21,"Submit"),t.qZA()(),t._UZ(22,"br"),t.TgZ(23,"a",10),t._uU(24,"View all customers"),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(r.customerForm.controls.name.value),t.xp6(1),t.Q6J("formGroup",r.customerForm),t.xp6(9),t.Q6J("hidden",!r.customer||r.customerForm.controls.name.valid),t.xp6(6),t.Q6J("hidden",!r.customer||r.customerForm.controls.city.valid),t.xp6(2),t.Q6J("disabled",!r.customerForm.valid))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,c.yS]}),s})()}];let F=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.Bz.forChild(q),c.Bz]}),s})(),O=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[m.ez,h.m,F]}),s})()}}]);
//# sourceMappingURL=621.3aacc3bd61e5b580.js.map