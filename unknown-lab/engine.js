import {groups,practiceTargets} from './data.js';
export const tests=groups.flatMap(g=>g.tests);
export const initial=()=>({mode:'real',active:'C1',ready:{},answers:{},history:[],revealed:false,guesses:[]});
export function respond(state,id,answer){
 const t=tests.find(t=>t.id===id),g=groups.find(g=>g.tests.some(x=>x.id===id));
 if(!t||!['positive','negative','uncertain','skipped'].includes(answer))throw Error('Invalid answer');
 if(t.referenceOnly)throw Error('Reference only');
 if(!state.ready[g.id])throw Error('Prepare fraction first');
 return {...state,answers:{...state.answers,[id]:answer},history:[...state.history,{id,answer,time:new Date().toISOString()}]};
}
export function prepare(state,id,ready){
 if(!groups.some(g=>g.id===id))throw Error('Invalid fraction');
 const answers={...state.answers};if(!ready)for(const t of groups.find(g=>g.id===id).tests)delete answers[t.id];
 return {...state,ready:{...state.ready,[id]:ready},answers};
}
export function evidence(state){return tests.filter(t=>state.ready[t.id.split('-')[0]]&&state.answers[t.id]==='positive'&&!t.referenceOnly)}
export function simulate(id){if(!tests.some(t=>t.id===id))throw Error('Unknown test');return practiceTargets.includes(id)?'positive':'negative'}
export function conflicts(s){const a=s.answers;return a['A5-0']==='positive'&&a['A5-2']==='positive'?['Chlorate and nitrite reported together: their reactions in acid can invalidate the assumed Group V separation. Review sample history and confirm on appropriate independent portions.']:[]}
export function restore(raw){try{const x=JSON.parse(raw);if(!x||!['real','practice'].includes(x.mode))return initial();let s=initial();s.mode=x.mode;s.active=groups.some(g=>g.id===x.active)?x.active:'C1';for(const g of groups)s.ready[g.id]=x.ready?.[g.id]===true;for(const t of tests)if(s.ready[t.id.split('-')[0]]&&!t.referenceOnly&&['positive','negative','uncertain','skipped'].includes(x.answers?.[t.id]))s.answers[t.id]=x.answers[t.id];s.revealed=x.revealed===true;s.guesses=Array.isArray(x.guesses)?x.guesses.filter(id=>tests.some(t=>t.id===id)):[];return s}catch{return initial()}}
