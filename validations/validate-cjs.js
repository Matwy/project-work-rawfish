"use strict";exports["user/create"] = validate10;const schema11 = {"$id":"user/create","type":"object","properties":{"firebase_id":{"type":"string"},"username":{"type":"string"},"avatar":{"type":"integer","minimum":1,"maximum":6}},"required":["username","avatar"]};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="user/create" */;let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.username === undefined) && (missing0 = "username")) || ((data.avatar === undefined) && (missing0 = "avatar"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.firebase_id !== undefined){const _errs1 = errors;if(typeof data.firebase_id !== "string"){validate10.errors = [{instancePath:instancePath+"/firebase_id",schemaPath:"#/properties/firebase_id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs1 === errors;}else {var valid0 = true;}if(valid0){if(data.username !== undefined){const _errs3 = errors;if(typeof data.username !== "string"){validate10.errors = [{instancePath:instancePath+"/username",schemaPath:"#/properties/username/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.avatar !== undefined){let data2 = data.avatar;const _errs5 = errors;if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){validate10.errors = [{instancePath:instancePath+"/avatar",schemaPath:"#/properties/avatar/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs5){if((typeof data2 == "number") && (isFinite(data2))){if(data2 > 6 || isNaN(data2)){validate10.errors = [{instancePath:instancePath+"/avatar",schemaPath:"#/properties/avatar/maximum",keyword:"maximum",params:{comparison: "<=", limit: 6},message:"must be <= 6"}];return false;}else {if(data2 < 1 || isNaN(data2)){validate10.errors = [{instancePath:instancePath+"/avatar",schemaPath:"#/properties/avatar/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1"}];return false;}}}}var valid0 = _errs5 === errors;}else {var valid0 = true;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}exports["fightpoints/create"] = validate11;const schema12 = {"$id":"fightpoints/create","type":"object","properties":{"state":{"type":"string"},"city":{"type":"string"},"posizione":{"type":"string"},"user_uuid":{"type":["string","null"]}},"required":["state","city","posizione","user_uuid"]};function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="fightpoints/create" */;let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((data.state === undefined) && (missing0 = "state")) || ((data.city === undefined) && (missing0 = "city"))) || ((data.posizione === undefined) && (missing0 = "posizione"))) || ((data.user_uuid === undefined) && (missing0 = "user_uuid"))){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.state !== undefined){const _errs1 = errors;if(typeof data.state !== "string"){validate11.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs1 === errors;}else {var valid0 = true;}if(valid0){if(data.city !== undefined){const _errs3 = errors;if(typeof data.city !== "string"){validate11.errors = [{instancePath:instancePath+"/city",schemaPath:"#/properties/city/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.posizione !== undefined){const _errs5 = errors;if(typeof data.posizione !== "string"){validate11.errors = [{instancePath:instancePath+"/posizione",schemaPath:"#/properties/posizione/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.user_uuid !== undefined){let data3 = data.user_uuid;const _errs7 = errors;if((typeof data3 !== "string") && (data3 !== null)){validate11.errors = [{instancePath:instancePath+"/user_uuid",schemaPath:"#/properties/user_uuid/type",keyword:"type",params:{type: schema12.properties.user_uuid.type},message:"must be string,null"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}exports["qa/"] = validate12;const schema13 = {"$id":"qa/","type":"object","properties":{"fightpoint_uuid":{"type":"string"},"n_question":{"type":"integer","minimum":0}},"required":["fightpoint_uuid","n_question"]};function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="qa/" */;let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.fightpoint_uuid === undefined) && (missing0 = "fightpoint_uuid")) || ((data.n_question === undefined) && (missing0 = "n_question"))){validate12.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.fightpoint_uuid !== undefined){const _errs1 = errors;if(typeof data.fightpoint_uuid !== "string"){validate12.errors = [{instancePath:instancePath+"/fightpoint_uuid",schemaPath:"#/properties/fightpoint_uuid/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs1 === errors;}else {var valid0 = true;}if(valid0){if(data.n_question !== undefined){let data1 = data.n_question;const _errs3 = errors;if(!(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))){validate12.errors = [{instancePath:instancePath+"/n_question",schemaPath:"#/properties/n_question/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs3){if((typeof data1 == "number") && (isFinite(data1))){if(data1 < 0 || isNaN(data1)){validate12.errors = [{instancePath:instancePath+"/n_question",schemaPath:"#/properties/n_question/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];return false;}}}var valid0 = _errs3 === errors;}else {var valid0 = true;}}}}else {validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate12.errors = vErrors;return errors === 0;}exports["qa/create"] = validate13;const schema14 = {"$id":"qa/create","type":"object","properties":{"question":{"type":"string"},"correct_answer":{"type":"string"},"fightpoint_uuid":{"type":"string"},"wrong_answers":{"type":"array","minItems":3}},"required":["question","correct_answer","fightpoint_uuid","wrong_answers"]};function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="qa/create" */;let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((data.question === undefined) && (missing0 = "question")) || ((data.correct_answer === undefined) && (missing0 = "correct_answer"))) || ((data.fightpoint_uuid === undefined) && (missing0 = "fightpoint_uuid"))) || ((data.wrong_answers === undefined) && (missing0 = "wrong_answers"))){validate13.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.question !== undefined){const _errs1 = errors;if(typeof data.question !== "string"){validate13.errors = [{instancePath:instancePath+"/question",schemaPath:"#/properties/question/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs1 === errors;}else {var valid0 = true;}if(valid0){if(data.correct_answer !== undefined){const _errs3 = errors;if(typeof data.correct_answer !== "string"){validate13.errors = [{instancePath:instancePath+"/correct_answer",schemaPath:"#/properties/correct_answer/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.fightpoint_uuid !== undefined){const _errs5 = errors;if(typeof data.fightpoint_uuid !== "string"){validate13.errors = [{instancePath:instancePath+"/fightpoint_uuid",schemaPath:"#/properties/fightpoint_uuid/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.wrong_answers !== undefined){let data3 = data.wrong_answers;const _errs7 = errors;if(errors === _errs7){if(Array.isArray(data3)){if(data3.length < 3){validate13.errors = [{instancePath:instancePath+"/wrong_answers",schemaPath:"#/properties/wrong_answers/minItems",keyword:"minItems",params:{limit: 3},message:"must NOT have fewer than 3 items"}];return false;}}else {validate13.errors = [{instancePath:instancePath+"/wrong_answers",schemaPath:"#/properties/wrong_answers/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs7 === errors;}else {var valid0 = true;}}}}}}else {validate13.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate13.errors = vErrors;return errors === 0;}