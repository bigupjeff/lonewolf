!function(){"use strict";var e=window.React,l=window.wp.blocks,t=window.wp.components,a=window.wp.coreData,n=window.wp.blockEditor;(0,l.registerBlockType)("lonewolf/meta-block-reviews",{edit:()=>{const l=(0,n.useBlockProps)(),[r,i]=(0,a.useEntityProp)("postType","reviews","meta"),o=r.meta_block_reviews_name,c=r.meta_block_reviews_source_url,m=r.meta_block_reviews_icon,u=e=>i({...r,meta_block_reviews_name:e}),s=e=>i({...r,meta_block_reviews_source_url:e}),w=e=>{e&&e.url?setAttributes({imageUrl:e.url,imageId:e.id,imageAlt:e?.alt}):setAttributes({imageUrl:null,imageId:null,imageAlt:null})};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(t.PanelBody,{title:__("Review Details"),initialOpen:!0},(0,e.createElement)(t.PanelRow,null,(0,e.createElement)("fieldset",null,(0,e.createElement)(t.TextControl,{label:__("Reviewer name"),value:o,onChange:u,maxLength:50,required:"required"}))),(0,e.createElement)(t.PanelRow,null,(0,e.createElement)("fieldset",null,(0,e.createElement)("input",{label:__("Review source URL"),value:c,onChange:s,maxLength:300,type:"url"}))),(0,e.createElement)(t.PanelRow,null,(0,e.createElement)("fieldset",null,(0,e.createElement)(t.MediaPlaceholder,{accept:"image/*",allowedTypes:["image"],onSelect:w,multiple:!1,handleUpload:!0}))),(0,e.createElement)(t.PanelRow,null,(0,e.createElement)("fieldset",null,(0,e.createElement)(t.TextControl,{label:__("Review Icon"),value:m,onChange:w}))))),(0,e.createElement)("div",{...l},(0,e.createElement)(t.TextControl,{label:__("Reviewer name"),value:o,onChange:u,maxLength:50,required:"required"}),(0,e.createElement)("input",{label:__("Review source URL"),value:c,onChange:s,maxLength:300,type:"url"}),(0,e.createElement)(t.TextControl,{label:__("Review Icon"),value:m,onChange:w}),(0,e.createElement)(t.MediaPlaceholder,{accept:"image/*",allowedTypes:["image"],onSelect:w,multiple:!1,handleUpload:!0}),imageUrl&&(0,e.createElement)("img",{src:imageUrl,alt:imageAlt})))},save:()=>null})}();