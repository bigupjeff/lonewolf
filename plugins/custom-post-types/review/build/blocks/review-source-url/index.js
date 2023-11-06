!function(){"use strict";var e,t,r=window.wp.i18n,l=window.wp.blocks,n=window.React;function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},i.apply(this,arguments)}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},a.apply(this,arguments)}window.wp.serverSideRender;var o=window.wp.components,c=window.wp.data,s=window.wp.coreData,u=window.wp.blockEditor,p=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"bigupweb/bigup-review-source-url","version":"0.1.0","title":"Review Source URL","category":"theme","icon":"smiley","description":"Source URL custom field for the \'Review\' custom post type","usesContext":["postId","postType","queryId"],"supports":{"html":false},"textdomain":"bigup-review-source-url","editorScript":"file:./index.js"}'),m=JSON.parse('{"key":"review","label":"Reviews","prefix":"_bigup_","customFields":[{"suffix":"_name","label":"Reviewer Name","description":"Name of the reviewer","type":"string","input_type":"text","placeholder":"","length_limit":"50","required":"","show_in_rest":"true","single":"true","user_capabilities":"edit_posts"},{"suffix":"_source_url","label":"Source URL","description":"Link to the review source","type":"string","input_type":"url","placeholder":"","length_limit":"300","required":"","show_in_rest":"true","single":"true","user_capabilities":"edit_posts"}]}');const{label:d,prefix:w,key:h,customFields:g}=m;console.log(p.name+" BLOCK LOADED"),(0,l.registerBlockCollection)("bigupweb",{title:(0,r.__)("Bigup Web"),icon:function(r){return n.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24},r),e||(e=n.createElement("path",{d:"M.614 0v24h13.003c3.191 0 5.611-.583 7.262-1.748 1.672-1.166 2.508-2.789 2.508-4.869 0-1.394-.363-2.583-1.09-3.566-.703-1.005-1.716-1.771-3.036-2.297-.056-.023-.12-.038-.177-.06.943-.51 1.693-1.148 2.224-1.929.66-.96.99-2.045.99-3.257 0-1.828-.76-3.326-2.277-4.491C18.502.594 16.148 0 12.958 0Z"})),t||(t=n.createElement("path",{fill:"#f8f801",d:"M9.432.928c-.87-.017-1.376.102-1.696.377-.112.097-.437.647-.747 1.271-.625 1.255-.62 1.248-1.346 2.356-.654.999-.756 1.273-.713 1.96.054.885.484 1.57 1.26 1.995l.214.117-.41-.027c.009.334.05.65.147.969.11.362.33.59.781.816.523.259 1 .362 1.646.355.95-.008 1.506-.258 1.811-.812.32-.582.2-1.142-.463-2.219-.281-.458-.294-.502-.254-.89.082-.803.089-.768-.095-.766-.137.002-.226.104-.448.506-.322.584-.516.808-1.023 1.197-.448.34-.572.37-.203.049.644-.562 1.135-1.515 1.576-3.055l.232-.81-.353-.358c-.294-.297-.326-.35-.178-.307.21.06.54.057.643-.007.107-.069.083-.444-.043-.682-.135-.256-.097-.264.203-.043.516.381 1.044.347 1.4-.094l.215-.27.004.27c.005.588.36 1.046 1.393 1.8.553.402.694.474.925.466.588-.02.622-.37.135-1.383-.16-.334-.38-.878-.492-1.21-.287-.856-.522-1.256-.785-1.347-.12-.039-.444-.069-.723-.066A23.053 23.053 0 0 1 10.43.988a13.737 13.737 0 0 0-.998-.06Zm4.957 1.115c-.377.002-.663.133-.66.309 0 .134.36 1.075.525 1.375.111.204.541.113.791-.17.46-.52.027-1.515-.656-1.514Zm.4 1.945c-.177 0-.33.026-.33.077.001.04.037.211.08.377.103.388.01.645-.29.804-.334.177-.748.109-1.274-.209-.333-.2-.541-.274-.836-.295-.614-.045-1.125.252-1.166.68-.01.103-.014.193-.012.273.008.242.08.4.23.547.234.227.27.234.934.125.256-.04.931-.108 1.5-.15 1.143-.084 1.774-.264 1.963-.559.354-.55.197-1.322-.322-1.593-.097-.051-.3-.077-.477-.077Zm-.207 2.354c-.256.002-.602.046-1.068.121-.39.062-.915.116-1.17.12-.256.002-.545.046-.64.097-.267.137-.498.534-.495.851.004.34.187.536.557.594.15.023.304.055.344.07.038.014.57.015 1.177 0 1.02-.024 1.136-.043 1.463-.21.426-.218.528-.407.524-.952-.005-.5-.129-.695-.692-.691Zm-.19 2.064-1.437.077c-.999.055-1.472.108-1.55.174-.071.06-.106.207-.106.372 0 .167.036.351.107.487.13.243.524.493.97.615.44.12 1.4.067 1.698-.094.574-.306.825-1.057.483-1.445Zm-.837 2.713c-.452-.008-1.006.04-1.7.14-.647.091-1.5.188-1.894.216-1.257.086-1.393.212-1.773 1.664-.097.372-.31.997-.471 1.39-.338.82-.473 1.234-.426 1.471.028.143.122.223.278.29.319.134.65.052 1.01-.253 1.549-1.315 1.852-1.702 1.884-2.408l.018-.353.215.203c.594.56 1.212.522 1.923-.121l.19-.172-.17.345c-.195.394-.215.613-.073.758.123.126.608.136.83.02.246-.13.202-.045-.216.418l-.379.422.291.867c.524 1.56.967 2.383 1.686 3.125.35.363.626.66.61.66-.013 0-.164-.072-.335-.162-.434-.23-.98-.799-1.412-1.473-.288-.448-.412-.57-.574-.572-.242 0-.256.093-.084.588.19.553.153.733-.352 1.709-.419.811-.47.963-.473 1.428-.004.84.442 1.437 1.24 1.666.465.133 1.607.115 2.122-.033 1.045-.302 1.652-.76 1.807-1.393.107-.44.017-.755-.063-1.154-.244-.002-.24-.005.137-.24.45-.282.706-.61.978-1.258.229-.545.274-1.452.094-1.963-.06-.173-.465-.803-.9-1.397-.712-.975-1.34-1.975-2.16-3.451-.37-.664-.865-.958-1.858-.977Zm-6.342 1.63c-.505-.004-.999.57-1.04 1.134a.961.961 0 0 0 .013.24c.074.415.577.828.964.793.18-.017.242-.12.49-.816.156-.44.285-.878.286-.975.003-.211-.305-.374-.713-.377Zm-.48 2.355c-.381-.003-.468.028-.682.254a1.36 1.36 0 0 0-.381.918c0 .11.01.22.04.33.106.408.259.57.751.799.317.147.62.187 1.854.24.81.036 1.751.064 2.093.062.582-.003.635-.017.803-.238.122-.161.18-.363.182-.63.006-.74-.46-1.081-1.39-1.02-.423.026-.579.088-1.018.392-.575.399-1.078.51-1.497.332-.329-.14-.458-.48-.38-1.011l.062-.426Zm.566 2.732c-.617-.004-.82.138-.89.5-.019.09-.026.19-.026.291 0 .307.076.637.201.836.13.204.38.335.87.453.45.109 2.418.038 2.99-.107.79-.201.975-.553.642-1.217-.256-.514-.431-.596-1.285-.604a24.19 24.19 0 0 1-1.737-.1 8.59 8.59 0 0 0-.765-.052Zm.313 2.41-.22.215c-.14.14-.19.22-.19.39 0 .058.004.125.013.208.113 1.081 1.245 1.52 2.818 1.092.659-.18 1.116-.623 1.18-1.145.037-.31.014-.437-.101-.566-.14-.157-.264-.169-1.827-.182Z"})))}}),(0,l.registerBlockType)(p.name,{...p,icon:function(e){return n.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},e),n.createElement("path",{d:"M11.03 22.09s.974 1.437 1.286 1.165c.534-.6 1.269-.364 1.49-1.11 1.801-.181 2.297.219 2.297.037-.037-.546-1.287-.491-1.305-2.037-.092-.563-.092-1.127-.11-1.654a18.771 18.771 0 0 1 5.092-1.127c.772-.055 1.562-.091 2.334-.091.056-.437 0-.91.148-1.273.533-1.09 1.14-2.164 1.617-3.29.202-.31.184-.91-.312-.91l-5.203-1.273c-.367-.163-.79-.163-1.047-.4-.13-.418.422-.963-.11-1.182-1.067-.727-2.133-1.454-3.181-2.218-.239-.236-.68-.363-.772-.727a14.872 14.71 0 0 1-.699-4.31c.037-.363-.33.2-.496.255l-1.011.728A14.338 14.182 0 0 1 10.791 0C9.688.636 8.419 1.273 7.72 2.364a9.375 9.273 0 0 0-.975 2.618c-.165.727-.478 1.49-1.158 1.909-.68.49-1.47.727-2.132 1.254-.22.091-.735.51-.22.564.367.11.882-.145 1.14.146-.111.4-.479.6-.681.963a11.526 11.4 0 0 1-2.537 2.636 3.677 3.636 0 0 1-1.158.6c.846.31 1.673.728 2.574.855-1.048.636-.864 1.836-1.269 2.691l3.677-.673-.552 4.837 2.647-1.418L9.191 24l1.379-.418ZM9.835 2.019c.239.364.147.964.294 1.382A4.65 4.6 0 0 0 11.655 6c-1.159.218-2.39.31-3.53.636-.551-.036-.037-.727-.037-1.036.184-.873.331-1.818.79-2.6.24-.345.479-.673.81-.945h.073Zm4.283 6.527c.368.237.735.491 1.066.764.276.218.772.327.699.764.055.254-.147.454-.405.236-.478-.218-.919-.473-1.434-.545-.422.127-.827.327-1.25.418-.294.127-.827.2-.956.29a6.434 6.364 0 0 1 1.36.728c.534.055 1.104-.054 1.618-.09.423-.037.828-.165 1.195-.11 1.342.49 2.758.818 4.137 1.146.367.036.716.272.863.618.331.418.717.727 1.048 1.181a6.25 6.182 0 0 1-.515 1.31 28.365 28.365 0 0 0-3.051-.146c-1.232 0-2.555.182-3.585.91-.165.09-.386.417-.036.272 1.14-.218 2.279-.546 3.456-.546.827-.036 1.617-.072 2.408.164.147.182-.478.11-.625.164-1.49.145-3.015.2-4.486.6-.717.182-1.415.4-2.04.782-.368.236 0 .8-.092 1.181.073 1.018.11.419.276 1.455.257.436-.276.6-.589.709-.46.255-.827.582-1.286.782-.368.09-.552-.473-.773-.71-.22-.181-.367-.763-.551-.763-.184.945-.423 1.782-.827 2.618-.57-.618-1.508-4.29-2.243-4.727-.33-.055-1.323.546-1.691.69.312-.636.404-.854.625-1.508.257-.782.441-1.564.735-2.364.24-.636-.643-.4-1.048-.473-.772 0-1.599.073-2.316.364-.202.055-.478.31-.588.291.22-.546.79-.836 1.25-1.164a5.147 5.09 0 0 1 1.93-.727c.202 0 .478-.127.129-.2-.294-.145-.883 0-1.011-.255.312-.309.79-.363 1.158-.545 1.14-.418 2.39-.49 3.585-.618-.166-.291-.497-.51-.699-.8-.276-.2-.643-.618-.11-.727 1.47-.746 3.088-1.055 4.669-1.419Zm8.144 3.819c.57-.091.312.545.11.745-.331.11-.717-.273-.79-.6.128-.218.514-.09.735-.164ZM11.93 15.49c-.551.673-1.047 1.454-.956 2.345.313.964.405.982.92 1.891.184-1.2 0-1.4.128-2.582 0-.472.074-.963.074-1.454 0-.11-.055-.255-.166-.182Z",style:{strokeWidth:.18282}}))},edit:function({context:{postId:e,postType:t,queryId:r}}){const l=h===(0,c.useSelect)((e=>e("core/editor").getCurrentPostType())),i=h===t,a=Number.isFinite(r),p=i&&l&&!a;console.log("isEditable",p);{const[r,l]=(0,s.useEntityProp)("postType",t,"meta",e);g.forEach((e=>{e.metaKey=w+h+e.suffix,e.value=r[e.metaKey],e.updateValue=t=>l({...r,[e.metaKey]:t})}))}return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(u.InspectorControls,null,(0,n.createElement)(o.PanelBody,{title:d,initialOpen:!0},p&&g.map(((e,t)=>(0,n.createElement)(o.PanelRow,{key:t},(0,n.createElement)("fieldset",null,(0,n.createElement)(o.TextControl,{label:e.label,value:e.value,onChange:e.updateValue,maxLength:50,required:"required"}))))))),(0,n.createElement)("div",{...(0,u.useBlockProps)()},p&&g.map(((e,t)=>(0,n.createElement)(o.TextControl,{key:t,label:e.label,value:e.value,onChange:e.updateValue,maxLength:50,required:"required"}))),!p&&g.map(((e,t)=>{switch(e.input_type){case"text":return(0,n.createElement)("p",null,(0,n.createElement)("em",null,"~ "+e.value));case"url":return(0,n.createElement)("a",{style:{borderStyle:"none",borderWidth:"0px"},href:e.value},e.label);default:return(0,n.createElement)("p",{key:t},"No configuration for field type "+e.input_type)}}))))},save:()=>null})}();